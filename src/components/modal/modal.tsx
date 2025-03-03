import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import CheckEmail from './checkEmail/checkEmail'
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
	const [checkEmail, setCheckEmail] = useState(false)

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

	const resetStates = () => {
		;[
			setLogin,
			setRegistration,
			setResetPassword,
			setBasket,
			setCheckEmail,
		].forEach(fn => fn(false))
	}

	useEffect(() => {
		switch (page) {
			case 'login':
				resetStates()
				setLogin(true)
				break
			case 'registration':
				resetStates()
				setRegistration(true)
				break
			case 'resetPassword':
				resetStates()
				setResetPassword(true)
				break
			case 'basket':
				resetStates()
				setBasket(true)
				break
			case 'checkEmail':
				console.log('checkEmail')
				resetStates()
				setCheckEmail(true)
				break
			default:
				resetStates()
				router.push(pathname)
				break
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
					) : checkEmail ? (
						<CheckEmail />
					) : basket ? (
						<Basket />
					) : null}
				</div>
			)}
		</>
	)
}

export default Modal
