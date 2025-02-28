import Image from 'next/image'
import router from 'next/router'
import Link from 'next/link'
import { FC } from 'react'
import style from './login.module.scss'
import globalStyles from '../modal.module.scss'

const Login: FC = () => {
	const { pathname } = router

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
						onClick={() => {
							// router.push({ pathname: pathname, query: { page: '' } })
							router.back()
						}}
					/>
					<h2 className={globalStyles.title}>Sign In to your account</h2>
				</div>
				<form className={style.form}>
					<input
						className={style.input}
						type='text'
						placeholder='Email address'
						required
					/>
					<input
						className={style.input}
						type='password'
						placeholder='Password'
						required
					/>
					<p className={style.forgotPassword}>Forgot password?</p>
					<button className={style.button}>Sign In</button>
				</form>
				<hr className={style.line} />
				<div className={style.registration}>
					<p>
						Don't have an account?{' '}

							<Link href={{ pathname: pathname, query: { page: 'registration' } }} className={style.link}>
							Sign Up
							</Link>
					</p>
				</div>
			</div>
		</section>
	)
}

export default Login
