import { BasketItem } from '@/interfaces/basketItem.interface'
import { addItem, decrementItem } from '@/store/basketSlice'
import { RootState } from '@/store/store'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import globalStyles from '../modal.module.scss'
import style from './basket.module.scss'

const Basket: FC = () => {
	const items = useSelector((state: RootState) => state.basket.items)
	const isAuth = useSelector((state: RootState) => state.auth.isAuth)
	const dispatch = useDispatch()
	const router = useRouter()
	const totalCost = items.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	)

	const handleAdd = (item: BasketItem) => {
		if (!isAuth) return alert('Войдите в аккаунт, чтобы добавить товары')
		dispatch(addItem({ ...item, quantity: 1 }))
	}

	const handleRemove = (item: BasketItem) => {
		if (!isAuth) return alert('Войдите в аккаунт, чтобы уменьшить количество')
		dispatch(decrementItem({ ...item, quantity: 1 }))
	}

	const handleContinue = () => {
		if (!isAuth)
			return router.push({
				pathname: router.pathname,
				query: { page: 'login' },
			})
		// Логика оформления
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
					onClick={() => router.back()}
				/>
				<h2 className={globalStyles.title}>Basket</h2>
			</div>
			{!isAuth && (
				<p className={style.blocked}>
					You unauthorized.{' '}
					<span
						className={style.link}
						onClick={() =>
							router.push({
								pathname: router.pathname,
								query: { page: 'login' },
							})
						}
					>
						Login
					</span>
				</p>
			)}
			<div className={style.list}>
				{items.length < 1 ? (
					// <p>Basket empty</p>
					<p></p>
				) : (
					<ul>
						{items.map(item => (
							<li key={item.id} className={style.item}>
								<Image src={item.image} alt='item' width={150} height={150} />
								<div className={style.info}>
									<h3 className={style.name}>{item.name}</h3>
									<p className={style.price}>
										200g - {item.price * item.quantity} &#8372;
										<span className={style.quantity}>
											<button
												className={style.butt}
												onClick={() => handleRemove(item)}
												disabled={!isAuth}
											>
												-
											</button>
											<p>{item.quantity}</p>
											<button
												className={style.butt}
												onClick={() => handleAdd(item)}
												disabled={!isAuth}
											>
												+
											</button>
										</span>
									</p>
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
			<div className={style.footer}>
				<p className={style.shipping}>Shipping cost</p>
				<hr className={style.line} />
				<div className={style.total}>
					subotal <span className={style.symbol}>{totalCost} &#8372;</span>
				</div>
				<button className={style.button} onClick={handleContinue}>
					continue
				</button>
			</div>
		</section>
	)
}

export default Basket
