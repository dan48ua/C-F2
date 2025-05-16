import { setAuthFromStorage } from '@/store/authSlice'
import { setBasket } from '@/store/basketSlice'
import { RootState, store } from '@/store/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<InitAuthFromStorage />
			<InitBasketFromStorage />
			<Component {...pageProps} />
		</Provider>
	)
}

function InitAuthFromStorage() {
	const dispatch = useDispatch()

	useEffect(() => {
		const token = localStorage.getItem('accessToken')
		dispatch(setAuthFromStorage(token))
	}, [dispatch])

	return null
}

function InitBasketFromStorage() {
	const dispatch = useDispatch()
	const items = useSelector((state: RootState) => state.basket.items)

	useEffect(() => {
		const savedBasket = localStorage.getItem('basket')
		if (savedBasket) {
			dispatch(setBasket(JSON.parse(savedBasket)))
		}
	}, [dispatch])

	useEffect(() => {
		localStorage.setItem('basket', JSON.stringify(items))
	}, [items])

	return null
}
