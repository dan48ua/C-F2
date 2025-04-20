import api from './api'

export const getBasket = (userId: string) =>
	api.post('/basket/get', { userId }).then(r => r.data.basket)

export const addToBasket = (
	userId: string,
	productId: string,
	quantity: number
) => api.post('/basket/add', { userId, productId, quantity: quantity })
