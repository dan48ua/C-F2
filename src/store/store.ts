import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import basketReducer from './basketSlice'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		basket: basketReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
