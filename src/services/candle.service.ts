import { ICandle } from '@/interfaces/candle.interface'
import axios from 'axios'

const API_URL = 'http://localhost:4200'
axios.defaults.baseURL = API_URL

export const getCandles = {
	async getAll() {
		const { data } = await axios.get<ICandle[]>('/candles')
		return data
	},
	async getById(id: string) {
		const { data } = await axios.get<ICandle[]>(`/candles`, {params: {
			id,
		}})
		return data[0]
	},
}
