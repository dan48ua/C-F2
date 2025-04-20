export interface BasketItem {
	id: number
	name: string
	price: number
	quantity: number
	image: string
}

export interface BasketState {
	items: BasketItem[]
}

export const initialState: BasketState = {
	items: [],
}
