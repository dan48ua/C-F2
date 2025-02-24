import { FC } from 'react'
import Login from './login/login'
import Basket from './pudge/basket'
import Registration from './registration/registration'
import ResetPassword from './resetPassword/resetPasswrod'

const Modal: FC = () => {
	return (
		<>
			<Login />
			<ResetPassword />
			<Registration />
			<Basket />
		</>
	)
}

export default Modal
