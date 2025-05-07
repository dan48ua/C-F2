import { ICandle } from '@/interfaces/candle.interface'
import api from './api'

export const getAllProducts = (): Promise<ICandle[]> =>
	api.get('/product/getAll').then(res => res.data.products as ICandle[])

export const getProductById = (id: string) =>
	api.get(`/product/getById/${id}`).then(res => res.data.product as ICandle)
