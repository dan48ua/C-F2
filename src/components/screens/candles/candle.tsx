// src/components/screens/home/sections/candles.tsx

import { ICandleDataSingle } from '@/interfaces/candle.interface'
import Image from 'next/image'
import { FC } from 'react'
import style from './candle.module.scss'

const CandleSingle: FC<ICandleDataSingle> = ({ candle }) => {
	// добавить ароматы
	return (
		<section className={style.section}>
			<div className={style.mainPhoto}>
				<Image src={candle.image} alt={candle.name} width={500} height={500} />
			</div>
			<div className={style.data}>
				<h2 className={style.title}>{candle.name}</h2>
				<p className={style.price}>200g - {candle.price} UAH</p>
				{/* <button className={style.button}>Add to cart</button> */}
				<div className={style.button}>Add to cart</div>
				<p className={style.inStock}>In stock</p>
				<hr className={style.line} />
				<h3 className={style.subtitle}>Description</h3>
				<span className={style.description}>{candle.description}</span>
			</div>
		</section>
	)
}

export default CandleSingle
