// src/components/screens/home/sections/candles.tsx

import { ICandleDataSingle } from '@/interfaces/candle.interface'
import Image from 'next/image'
import Link from 'next/link'
import { join } from 'path'
import { FC } from 'react'
import style from '../catalogue.module.scss'

const CandleCard: FC<ICandleDataSingle> = ({ candle }) => {
	const PUBLIC_API_URL = process.env.NEXT_PUBLIC_IMAGE_URL
	const IMAGE_URL = join(PUBLIC_API_URL || '', candle.image_url)
	return (
		<div className={style.card}>
			<Image src={IMAGE_URL} alt={candle.name} width='300' height='300' />
			<h2 className={style.cardTitle}>{candle.name}</h2>
			<small className={style.cardPrice}>
				{candle.weight}g - {candle.price}&#8372;
			</small>
			<br />
			<Link className={style.cardLink} href={`/candles/${candle.id}`}>
				more info{' '}
			</Link>
		</div>
	)
}

export default CandleCard
