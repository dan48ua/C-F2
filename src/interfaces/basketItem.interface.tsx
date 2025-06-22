export interface BasketItem {
	image_url: string
	id: string
	name: string
	price: number
	quantity: number
	product: {
		id: string
		name: string
		price: number
		weight: number
		image_url: string
		description: string
	}
}

export interface BasketState {
	items: BasketItem[]
}

export const initialState: BasketState = {
	items: [],
}
