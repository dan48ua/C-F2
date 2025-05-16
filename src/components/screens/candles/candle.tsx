// src/components/screens/home/sections/candles.tsx

import { BasketItem } from '@/interfaces/basketItem.interface'
import { ICandleDataSingle } from '@/interfaces/candle.interface'
import { addItem } from '@/store/basketSlice'
import Image from 'next/image'
import { join } from 'path'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import style from './candle.module.scss'

const CandleSingle: FC<ICandleDataSingle> = ({ candle }) => {
	const PUBLIC_API_URL = process.env.NEXT_PUBLIC_IMAGE_URL
	const IMAGE_URL = join(PUBLIC_API_URL || '', candle.image_url)
	const dispatch = useDispatch()
	const handleAdd = (product: BasketItem) => {
		console.log(product.id)
		dispatch(addItem({ ...product, quantity: 1 }))
		// dispatch(addItem(product))
	}
	// добавить ароматы
	return (
		<section className={style.section}>
			<div className={style.imageContainer}>
				<div className={style.mainPhoto}>
					<Image src={IMAGE_URL} alt={candle.name} width={500} height={500} />
				</div>
			</div>
			<div className={style.dataContainer}>
				<h2 className={style.title}>{candle.name}</h2>
				<p className={style.price}>
					{candle.weight}g - {candle.price} UAH
				</p>
				{/* <button className={style.button}>Add to cart</button> */}
				<div
					// onClick={() => handleAdd({ ...candle, quantity: 1 })}
					className={style.button}
				>
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
