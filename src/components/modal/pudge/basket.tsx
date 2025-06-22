import { BasketItem } from '@/interfaces/basketItem.interface'
import { addToBasket, countBasket, getBasket } from '@/services/basket.service'
import { RootState } from '@/store/store'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import globalStyles from '../modal.module.scss'
import style from './basket.module.scss'

const Basket: FC = () => {
	// const items = useSelector((state: RootState) => state.basket.items)
	const isAuth = useSelector((state: RootState) => state.auth.isAuth)
	const dispatch = useDispatch()
	const router = useRouter()
	const [userId, setUserId] = useState('')
	const PUBLIC_API_URL =
		process.env.NEXT_PUBLIC_IMAGE_URL || 'http://localhost:5000'

	useEffect(() => {
		const id = localStorage.getItem('userId') || ''
		setUserId(id)
	}, [])

	const [items, setItems] = useState<BasketItem[]>([])
	const [totalCost, setTotalCost] = useState(0)

	useEffect(() => {
		const fetchBasketData = async () => {
			const basketItems = await getBasket(userId)
			console.log('All items ' + basketItems)
			const basketTotalCost = (await countBasket(userId)) ?? 0
			setItems(basketItems)
			setTotalCost(basketTotalCost)
		}
		if (userId) fetchBasketData()
	}, [userId])

	const handleAdd = (item: BasketItem) => {
		if (!isAuth) return alert('Login to add items to the basket')
		addToBasket(userId, String(item.product.id), 1)
	}

	const handleRemove = (item: BasketItem) => {
		if (!isAuth) return alert('Login to remove items from the basket')
		addToBasket(userId, String(item.product.id), -1)
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
								<Image
									src={PUBLIC_API_URL + item.product.image_url}
									alt='item'
									width={150}
									height={150}
								/>
								<div className={style.info}>
									<h3 className={style.name}>{item.product.name}</h3>
									<span className={style.price}>
										200g - {item.product.price * item.quantity} &#8372;
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
									</span>
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
