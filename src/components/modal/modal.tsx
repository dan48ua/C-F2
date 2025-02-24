import { FC } from 'react'
import Login from './login/login'
import ResetPassword from './resetPassword/resetPasswrod'
import Registration from './registration/registration'
import Basket from './pudge/basket'

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
