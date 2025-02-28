import Image from 'next/image'
import router from 'next/router'
import { FC } from 'react'
import style from '../modal.module.scss'

const Login: FC = () => {
	const { pathname } = router

	return (
		<section className={style.modal}>
			<div className={style.login}>
				<div className={style.header}>
					<Image
						src='/modal/strelka.svg'
						width={20}
						height={20}
						alt={'strelka'}
						className={style.strelka}
						onClick={() => {
							router.push({ pathname: pathname, query: { page: '' } })
						}}
					/>
					<h2 className={style.title}>Sign In to your account</h2>
				</div>
				<form className={style.form}>
					<input
						className={style.input}
						type='text'
						placeholder='Email address'
					/>
					<input
						className={style.input}
						type='password'
						placeholder='Password'
					/>
					<p className={style.forgotPassword}>Forgot password?</p>
					<button className={style.button}>Sign In</button>
				</form>
				<hr className={style.line} />
				<div className={style.registration}>
					<p>
						Don't have an account?{' '}
						<span
							className={style.link}
							onClick={() => {
								router.push({
									pathname: pathname,
									query: { page: 'registration' },
								})
							}}
						>
							Sign Up{' '}
						</span>
					</p>
				</div>
			</div>
		</section>
	)
}

export default Login
