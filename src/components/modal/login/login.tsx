import { login } from '@/store/authSlice'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import globalStyles from '../modal.module.scss'
import style from './login.module.scss'

const Login: FC = () => {
	const router = useRouter()
	const { pathname } = router
	const dispatch = useDispatch()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const API_URL = process.env.NEXT_PUBLIC_API_URL
	const API_REGISTRATION_URL = `${API_URL}auth/login`

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			const response = await axios.post(API_REGISTRATION_URL, {
				email,
				password,
			})
			const token = response.data.accessToken
			localStorage.setItem('accessToken', response.data.token)
			dispatch(login(token))

			// alert('Успешный вход')
			router.back()
			router.reload()
		} catch (error: any) {
			alert(error.response?.data?.message || 'Unexpected error')
		}
	}

	return (
		<section className={globalStyles.modal}>
			<div className={style.login}>
				<div className={globalStyles.header}>
					<Image
						src='/modal/strelka.svg'
						width={20}
						height={20}
						alt={'strelka'}
						className={globalStyles.strelka}
						onClick={() => router.back()}
					/>
					<h2 className={globalStyles.title}>Sign In to your account</h2>
				</div>
				<form className={style.form} onSubmit={handleSubmit}>
					<input
						className={style.input}
						type='text'
						placeholder='Email address'
						required
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						className={style.input}
						type='password'
						placeholder='Password'
						required
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<p
						onClick={() =>
							router.push({
								pathname: pathname,
								query: { page: 'resetPassword' },
							})
						}
						className={style.forgotPassword}
					>
						Forgot password?
					</p>
					<button type='submit' className={globalStyles.button}>
						Sign In
					</button>
				</form>
				<hr className={style.line} />
				<div className={style.registration}>
					<p>
						Don't have an account?{' '}
						<Link
							href={{ pathname: pathname, query: { page: 'registration' } }}
							className={style.link}
						>
							Sign Up
						</Link>
					</p>
				</div>
			</div>
		</section>
	)
}
export default Login
