import { FC } from 'react'
import Image from 'next/image'
import router from 'next/router'
import style from '../modal.module.scss'

const Registration: FC = () => {
	const { pathname } = router
	
	return (
		<section className={style.modal}>
		<div className={style.registration}>
			<div className={style.header}>
				<Image
					src='/modal/strelka.svg'
					width={20}
					height={20}
					alt={'strelka'}
					className={style.strelka}
					onClick={() => {
						// router.push({ pathname: pathname, query: { page: '' } })
						router.back()
					}}
				/>
				<h2 className={style.title}>Registration</h2>
			</div>
			<form className={style.form}>
					<input type='text' placeholder='First Name' className={style.input} required></input>
					<input type='text' placeholder='Surname' className={style.input} required></input>
					<input type='text' placeholder='Phone number' className={style.input} required></input>
					<input type='email'  placeholder='Email address' className={style.input} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></input>
					<hr />
					<input type='Password' placeholder='Password' className={style.input} required></input>
					<input type='Password' placeholder='Confirm password' className={style.input} required></input>
			</form> 
			</div>
		</section>
	)
}

export default Registration
