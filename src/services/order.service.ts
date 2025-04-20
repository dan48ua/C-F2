import api from './api'

export const createIntent = (amount: number) =>
	api.post('/payment/create', { amount, currency: 'hrn' })

export const checkout = (userId: string, paymentIntentId: string) =>
	api.post('/order/checkout', { userId, paymentIntentId })
