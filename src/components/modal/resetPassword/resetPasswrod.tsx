import Image from 'next/image'
import router from 'next/router'
import { FC } from 'react'
import globalStyles from '../modal.module.scss'
import style from './resetPassword.module.scss'

const ResetPassword: FC = () => {
	const { pathname } = router

	return (
		<section className={globalStyles.modal}>
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
				<h2 className={globalStyles.title}>Reset your password</h2>
			</div>
			<form className={style.form}>
				<p className={style.text}>
					Enter your Email address and we will send you instructions to reset
					your password.
				</p>
				<input
					className={style.input}
					type='text'
					placeholder='Email address'
					// required
				/>
				<button
					onClick={() =>
						router.push({
							pathname: pathname,
							query: { page: 'checkEmail' },
						})
					}
					type='button'
					className={globalStyles.button}
				>
					Continue
				</button>
			</form>
		</section>
	)
}

export default ResetPassword
