import Image from 'next/image'
import router from 'next/router'
import { FC } from 'react'
import globalStyles from '../modal.module.scss'
import style from './checkEmail.module.scss'

const CheckEmail: FC = () => {
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
				<h2 className={globalStyles.title}>Check your email</h2>
			</div>
			<div className={style.main}>
				<Image
					src='/modal/checkEmail.svg'
					width={200}
					height={200}
					alt={'checkEmail'}
				/>
				<p className={style.text}>
					Please check the email address YOUREMAIL@gmail.com for instructions to
					reset your password.
				</p>
				<button className={globalStyles.button}>resend email</button>
			</div>
		</section>
	)
}

export default CheckEmail
