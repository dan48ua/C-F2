// src/components/screens/home/sections/catalogue.tsx

import { ICandleData } from '@/interfaces/candle.interface'
import React from 'react'
import Candle from './candle/candle'

const Catalogue: React.FC<ICandleData> = ({ candles }) => {
	console.log(candles.length)
	return (
		<div style={{ display: 'flex', flexWrap: 'wrap' }}>
			
			{candles.length ? candles.map(candle => <Candle key={candle.id} candle={candle}/>) : <div>Candles not found!</div>}
		</div>
	)
}

export default Catalogue
