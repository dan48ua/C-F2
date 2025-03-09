import { BasketItem } from '@/interfaces/basketItem.interface'
import { addItem, decrementItem, removeItem } from '@/store/basketSlice'
import { RootState } from '@/store/store'
import Image from 'next/image'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './basket.module.scss'

const Product: FC = () => {
	const items = useSelector((state: RootState) => state.basket.items)
	const dispatch = useDispatch()
	const totalCost = items.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	)

	const handleAdd = (item: BasketItem) => {
		dispatch(addItem({ ...item, quantity: 1 }))
	}
	const handleRemove = (item: BasketItem) => {
		dispatch(decrementItem({ ...item, quantity: 1 }))
	}
	const handleDelete = (id: string | number) => {
		dispatch(removeItem(id))
	}
	return (
		<>
			<div className={style.list}>
				{items.length < 1 ? (
					<p></p>
				) : (
					<ul>
						{items.map(item => (
							<>
								<li key={item.id} className={style.item}>
									<Image src={item.image} alt='item' width={150} height={150} />
									<div className={style.info}>
										<h3 className={style.name}>{item.name}</h3>
										<button
											className={style.delete}
											onClick={() => handleDelete(item.id)}
										>
											Delete item
										</button>
										<p className={style.price}>
											200g - {item.price * item.quantity} &#8372;
											<span className={style.quantity}>
												<button
													className={style.butt}
													onClick={() => handleRemove(item)}
												>
													-
												</button>
												<p>{item.quantity}</p>
												<button
													className={style.butt}
													onClick={() => handleAdd(item)}
												>
													+
												</button>
											</span>
										</p>
									</div>
								</li>
								<hr className={style.line} />
							</>
						))}
					</ul>
				)}
			</div>
			<footer className={style.footer}>
				<p className={style.shipping}>Shipping cost</p>
				<hr className={style.line} />
				<div className={style.total}>
					subotal
					<span className={style.symbol}>{totalCost} &#8372;</span>
				</div>
				<button className={style.button} onClick={undefined}>
					continue
				</button>
			</footer>
		</>
	)
}

export default Product
