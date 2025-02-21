// src/components/screens/home/sections/candles.tsx

import { ICandleDataSingle } from '@/interfaces/candle.interface'
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CandleCard: FC<ICandleDataSingle> = ({ candle }) => {
	return <div>
		<Image src={candle.image} alt={candle.name} width='200' height='200'/>
		<h2>{candle.name}</h2>
		<small>{candle.price}</small>
		<Link href={`/candle/${candle.id}`}>Read more </Link>
	</div>
}

export default CandleCard
