import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import globalStyles from '../modal.module.scss'
import style from './registration.module.scss'

const Registration: FC = () => {
	const router = useRouter()

	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const API_URL = process.env.NEXT_PUBLIC_API_URL
	const API_REGISTRATION_URL = `${API_URL}auth/register`

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			const response = await axios.post(API_REGISTRATION_URL, {
				name,
				surname,
				phone,
				email,
				password,
			})
			// alert('Успешно зарегистрировано')
			router.back()
		} catch (error: any) {
			alert(error.response?.data?.message || 'Unexpected error')
		}
	}

	return (
		<section className={globalStyles.modal}>
			<div className={style.registration}>
				<div className={globalStyles.header}>
					<Image
						src='/modal/strelka.svg'
						width={20}
						height={20}
						alt={'strelka'}
						className={globalStyles.strelka}
						onClick={() => router.back()}
					/>
					<h2 className={globalStyles.title}>Registration</h2>
				</div>
				<form className={style.form} onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Name'
						className={style.input}
						required
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<input
						type='text'
						placeholder='Surname'
						className={style.input}
						required
						value={surname}
						onChange={e => setSurname(e.target.value)}
					/>
					<hr className={style.line} />
					<input
						type='text'
						placeholder='Phone number'
						className={style.input}
						required
						value={phone}
						onChange={e => setPhone(e.target.value)}
					/>
					<input
						type='email'
						placeholder='Email address'
						className={style.input}
						pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
						required
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<hr className={style.line} />
					<input
						type='password'
						placeholder='Password'
						className={style.input}
						required
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<input
						type='password'
						placeholder='Confirm password'
						className={style.input}
						required
					/>
					<hr className={style.line} />
					<button type='submit' className={globalStyles.button}>
						sign up
					</button>
				</form>
			</div>
		</section>
	)
}

export default Registration
