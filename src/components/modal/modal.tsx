import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import Login from './login/login'
import Basket from './pudge/basket'
import Registration from './registration/registration'
import ResetPassword from './resetPassword/resetPasswrod'

const Modal: FC<{ page: string }> = ({ page }) => {
	console.log('qwe', page)
	const [login, setLogin] = useState(false)
	const [registration, setRegistration] = useState(false)
	const [resetPassword, setResetPassword] = useState(false)
	const [basket, setBasket] = useState(false)
	const router = useRouter()

	useEffect(() => {
		if (page === 'login') {
			setLogin(true)
		} else if (page === 'registration') {
			setRegistration(true)
		} else if (page === 'resetPassword') {
			setResetPassword(true)
		} else if (page === 'basket') {
			setBasket(true)
		} else if (page === '') {
			setLogin(false)
			setRegistration(false)
			setResetPassword(false)
			setBasket(false)
		} else {
			router.push('/')
		}
	}, [page])
	console.log('login', login)
	return (
		<>
			{login ? (
				<Login />
			) : registration ? (
				<Registration />
			) : resetPassword ? (
				<ResetPassword />
			) : basket ? (
				<Basket />
			) : null}
		</>
	)
}

export default Modal
