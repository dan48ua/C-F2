// src/components/screens/home/sections/candles.tsx

import { ICandleDataSingle } from '@/interfaces/candle.interface'
import Image from 'next/image'
import { FC } from 'react'
import style from './candle.module.scss'

const CandleSingle: FC<ICandleDataSingle> = ({ candle }) => {
	return (
		<section className={style.section}>
			<div className={style.gallery}>
				<div className={style.column}>
					<Image src={''} alt={candle.name} width='300' height='300' />
					<Image src={''} alt={candle.name} width='300' height='300' />
					<Image src={''} alt={candle.name} width='300' height='300' />
				</div>
				<div className={style.mainPhoto}>
					<Image
						src={candle.image1}
						alt={candle.name}
						width='300'
						height='300'
					/>
				</div>
			</div>
			<div className={style.data}>
				<h2 className={style.title}>{candle.name}</h2>
				<p className={style.price}>{candle.price} UAH</p>
				<button className={style.button}>Add to cart</button>
				<p className={style.inStock}>In stock</p>
				<hr className={style.line} />
				<h3 className={style.subtitle}>Description</h3>
				<p className={style.description}>{candle.description}</p>
			</div>
		</section>
	)
}

export default CandleSingle
