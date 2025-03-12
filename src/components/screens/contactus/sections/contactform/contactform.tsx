import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'
import style from './contactform.module.scss'

const Contactform: FC = () => {
	const router = useRouter()
	return (
		<section className={style.forma}>
			<div className={style.container}>
				<div className={style.header}>
					<Image
						src='/modal/strelka.svg'
						width={20}
						height={20}
						alt={'strelka'}
						className={style.strelka}
						onClick={() => {
							router.back()
						}}
					/>
					<h1 className={style.title}>Contact us</h1>
				</div>
				<hr className={style.line} />
				<form>
					<div className={style.inputs}>
						<input
							type='text'
							placeholder='Firstname'
							className={style.input}
							required
						/>
						<input
							type='text'
							placeholder='Surname'
							className={style.input}
							required
						/>
					</div>

					<input
						type='email'
						placeholder='Email address'
						className={style.inputEmail}
						required
					/>

					<textarea
						placeholder='Enter your message'
						className={style.textarea}
					/>

					<button
						type='submit'
						onClick={() => {
							router.push('/')
						}}
						className={style.button}
					>
						SEND
					</button>
				</form>
			</div>
		</section>
	)
}
export default Contactform
