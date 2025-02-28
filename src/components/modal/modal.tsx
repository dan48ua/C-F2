import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import Login from './login/login'
import style from './modal.module.scss'
import Basket from './pudge/basket'
import Registration from './registration/registration'
import ResetPassword from './resetPassword/resetPasswrod'

const Modal: FC<{ page: string }> = ({ page }) => {
	const [login, setLogin] = useState(false)
	const [registration, setRegistration] = useState(false)
	const [resetPassword, setResetPassword] = useState(false)
	const [basket, setBasket] = useState(false)
	const router = useRouter()
	const { pathname } = router

	useEffect(() => {
		if (page) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
		return () => document.body.classList.remove('overflow-hidden')
	}, [page])

	useEffect(() => {
		// switch (page) {
		// 	case 'login':
		// 		setLogin(true)
		// 	case 'registration':
		// 		setRegistration(true)
		// 	case 'resetPassword':
		// 		setResetPassword(true)
		// 	case 'basket':
		// 		setBasket(true)
		// 	default:
		// 		setLogin(false)
		// 		setRegistration(false)
		// 		setResetPassword(false)
		// 		setBasket(false)
		// }

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
	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			router.push({ pathname: pathname, query: { page: '' } })
		}
	}
	return (
		<>
			{page !== '' && (
				<div className={style.overlay} onClick={handleOverlayClick}>
					{login ? (
						<Login />
					) : registration ? (
						<Registration />
					) : resetPassword ? (
						<ResetPassword />
					) : basket ? (
						<Basket />
					) : null}
				</div>
			)}
		</>
	)
}

export default Modal
