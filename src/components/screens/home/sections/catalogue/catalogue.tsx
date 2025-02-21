// src/components/screens/home/sections/catalogue.tsx

import { ICandleData } from '@/interfaces/candle.interface'
import React from 'react'
import Candle from './candle/candle'
import style from './catalogue.module.scss'

const Catalogue: React.FC<ICandleData> = ({ candles }) => {
	return (
		<>
			<h2 className={style.title}>PRODUCTS</h2>
			<div className={style.container}>
				{candles.length ? (
					candles.map(candle => <Candle key={candle.id} candle={candle} />)
				) : (
					<div>Candles not found!</div>
				)}
			</div>
		</>
	)
}

export default Catalogue
