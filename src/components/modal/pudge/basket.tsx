import { BasketItem } from '@/interfaces/basketItem.interface'
import {
	addItem,
	clearBasket,
	decrementItem,
	removeItem,
} from '@/store/basketSlice'
import { RootState } from '@/store/store'
import Image from 'next/image'
import router from 'next/router'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import globalStyles from '../modal.module.scss'
import style from './basket.module.scss'

const Basket: FC = () => {
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
	const handleDelete = (id: number) => {
		dispatch(removeItem(id))
	}

	return (
		<section className={globalStyles.modal}>
			<div className={globalStyles.header}>
				<Image
					src='/modal/strelka.svg'
					width={20}
					height={20}
					alt={'strelka'}
					className={globalStyles.strelka}
					onClick={() => {
						router.back()
					}}
				/>
				<h2 className={globalStyles.title}>Basket</h2>
			</div>
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
				{items.length > 0 && (
					<button onClick={() => dispatch(clearBasket())}>
						Очистить корзину
					</button>
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
		</section>
	)
}

export default Basket
