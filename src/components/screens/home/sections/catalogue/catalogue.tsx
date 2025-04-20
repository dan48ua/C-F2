// src/components/screens/home/sections/catalogue.tsx
import { ICandle } from '@/interfaces/candle.interface'
import { FC } from 'react'
import Candle from './candle/candle'
import style from './catalogue.module.scss'

interface Props {
	candles: ICandle[]
}

const Catalogue: FC<Props> = ({ candles }) => {
	return (
		<div>
			<h2 className={style.title}>PRODUCTS</h2>
			<div className={style.container}>
				{candles.length ? (
					candles.map(c => <Candle key={c.id} candle={c} />)
				) : (
					<div>No candles found!</div>
				)}
			</div>
		</div>
	)
}
export default Catalogue
