import api from './api'

export const getBasket = async (userId: string) => {
	try {
		const res = await api.get('/basket', {
			params: { userId },
		})
		let allItems = res.data.allItems
		return allItems
	} catch (e) {
		console.error('Ошибка при получении корзины:', e)
		return []
	}
}

export const addToBasket = (
	userId: string,
	productId: string,
	quantity: number
) => {
	console.log('Adding to basket:', { userId, productId, quantity })
	api.post('/basket/add', { userId, productId, quantity: quantity })
}

export const removeFromBasket = async (userId: string, productId: string) =>
	await api.post('/basket/delete', { userId, productId })

export const clearBasket = async (userId: string) =>
	await api.post('/basket/clear', { userId }).then(r => r.data.basket)

export const countBasket = async (userId: string) => {
	await api.get('/basket/count', { params: { userId } }).then(r => r.data.count)
}
