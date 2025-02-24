// src/components/screens/home/sections/candles.tsx

import { ICandleDataSingle } from '@/interfaces/candle.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import style from '../catalogue.module.scss'

const CandleCard: FC<ICandleDataSingle> = ({ candle }) => {
	return (
		<div className={style.card}>
			<Image src={candle.image1} alt={candle.name} width='300' height='300' />
			<h2 className={style.cardTitle}>{candle.name}</h2>
			<small className={style.cardPrice}>200G - {candle.price}&#8372;</small>
			<br />
			<Link className={style.cardLink} href={`/candles/${candle.id}`}>
				more info{' '}
			</Link>
		</div>
	)
}

export default CandleCard
