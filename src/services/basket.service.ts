import { setBasket } from '@/store/basketSlice'
import { RootState } from '@/store/store'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function InitBasketFromStorage() {
	const dispatch = useDispatch()
	const items = useSelector((state: RootState) => state.basket.items)

	// 1. При первом рендере (только на клиенте) считываем данные из localStorage
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const savedBasket = localStorage.getItem('basket')
			if (savedBasket) {
				dispatch(setBasket(JSON.parse(savedBasket)))
			}
		}
	}, [dispatch])

	// 2. При каждом изменении items — сохраняем корзину в localStorage
	useEffect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('basket', JSON.stringify(items))
		}
	}, [items])

	// Компонент ничего не рендерит, он только "слушает" и сохраняет
	return null
}

export default InitBasketFromStorage
