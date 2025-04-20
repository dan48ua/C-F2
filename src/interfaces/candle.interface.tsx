// src/components/screens/home/sections/candle.interface.tsx

export interface ICandle {
	id: string
	name: string
	price: number
	image_url: string
	weight: number
	description?: string
}

export interface ICandleData {
	candles: ICandle[]
}
export interface ICandleDataSingle {
	candle: ICandle
}

// export interface ICandle {
// 	id: number
// 	name: string
// 	price: number
// 	description?: string // optional
// }

// export interface ICandleData {
// 	candles: ICandle[]
// }
// export interface ICandleDataSingle {
// 	candle: ICandle
// }
