import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BasketItem, initialState } from '../interfaces/basketItem.interface'

const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<BasketItem>) => {
			// Находим товар с таким же id
			const existingItem = state.items.find(
				item => item.id === action.payload.id
			)

			if (existingItem) {
				// Увеличиваем количество
				existingItem.quantity += action.payload.quantity ?? 1
			} else {
				// Добавляем новый товар
				state.items.push({
					...action.payload,
					quantity: action.payload.quantity ?? 1,
				})
			}
		},
		decrementItem: (state, action: PayloadAction<BasketItem>) => {
			const existingItem = state.items.find(
				item => item.id === action.payload.id
			)

			if (!existingItem) return // Если товара с таким id нет, просто выходим

			// Если количество больше 1, уменьшаем
			if (existingItem.quantity > 1) {
				existingItem.quantity--
			} else {
				// Если количество было 1, то при уменьшении удаляем товар из корзины
				state.items = state.items.filter(item => item.id !== action.payload.id)
			}
		},
		removeItem: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter(item => item.id !== action.payload)
		},
		updateItemQuantity: (
			state,
			action: PayloadAction<{ id: number; quantity: number }>
		) => {
			const { id, quantity } = action.payload
			const existingItem = state.items.find(item => item.id === id)
			existingItem ? (existingItem.quantity = quantity) : null
		},
		clearBasket: state => {
			state.items = []
		},
		setBasket: (state, action: PayloadAction<BasketItem[]>) => {
			state.items = action.payload
		},
	},
})

export const {
	decrementItem,
	setBasket,
	addItem,
	removeItem,
	updateItemQuantity,
	clearBasket,
} = basketSlice.actions
export default basketSlice.reducer
