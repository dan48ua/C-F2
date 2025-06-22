// src/components/screens/home/sections/candles.tsx

import { ICandle, ICandleDataSingle } from '@/interfaces/candle.interface'
import { addToBasket } from '@/services/basket.service'
import { RootState } from '@/store/store'
import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './candle.module.scss'

const CandleSingle: FC<ICandleDataSingle> = ({ candle }) => {
	const PUBLIC_API_URL =
		process.env.NEXT_PUBLIC_IMAGE_URL || 'http://localhost:5000/uploads/'
	const IMAGE_URL = new URL(candle.image_url, PUBLIC_API_URL || '')
	console.log('Image URL: ' + IMAGE_URL)
	const isAuth = useSelector((state: RootState) => state.auth.isAuth)
	const dispatch = useDispatch()
	const [userId, setUserId] = useState('')

	useEffect(() => {
		const id = localStorage.getItem('userId') || ''
		setUserId(id)
	}, [])

	const handleAdd = (candle: ICandle) => {
		if (!isAuth) return alert('Login to add items to the basket')
		// dispatch(
		// 	addItem({
		// 		...candle,
		// 		quantity: 1,
		// 		image: IMAGE_URL.toString(),
		// 	})
		// )
		addToBasket(userId, String(candle.id), 1)
	}

	return (
		<section className={style.section}>
			<div className={style.imageContainer}>
				<div className={style.mainPhoto}>
					<img
						src={IMAGE_URL.toString()}
						alt={candle.name}
						width={500}
						height={500}
					/>
				</div>
			</div>
			<div className={style.dataContainer}>
				<h2 className={style.title}>{candle.name}</h2>
				<p className={style.price}>
					{candle.weight}g - {candle.price} UAH
				</p>
				<div onClick={() => handleAdd(candle)} className={style.button}>
					Add to cart
				</div>
				<p className={style.inStock}>In stock</p>
				<hr className={style.line} />
				<h3 className={style.subtitle}>Description</h3>
				<span className={style.description}>{candle.description}</span>
			</div>
		</section>
	)
}

export default CandleSingle
