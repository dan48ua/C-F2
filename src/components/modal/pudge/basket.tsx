import { BasketItem } from '@/interfaces/basketItem.interface'
import { addItem, clearBasket, decrementItem } from '@/store/basketSlice'
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
						// router.push({ pathname: pathname, query: { page: '' } })
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
							<li key={item.id}>
								<Image src={item.image} alt='item' width={150} height={150} />
								{item.name}, {item.price * item.quantity}
								<div className={style.quantity}>
									<button onClick={() => handleRemove(item)}>-</button>
									<p>{item.quantity}</p>
									<button onClick={() => handleAdd(item)}>+</button>
								</div>
								<hr className={style.line} />
							</li>
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
