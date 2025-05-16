import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
	isAuth: boolean
	token: string | null
}

const initialState: AuthState = {
	isAuth: false,
	token: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			state.isAuth = true
			state.token = action.payload
		},
		logout: state => {
			state.isAuth = false
			state.token = null
		},
		setAuthFromStorage: (state, action) => {
			state.isAuth = !!action.payload
			state.token = action.payload
		},
	},
})

export const { login, logout, setAuthFromStorage } = authSlice.actions
export default authSlice.reducer
