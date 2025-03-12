import Header from '@/components/layout/header/Header'
import { NextPage } from 'next'
import Image from 'next/image'
import router from 'next/router'
import style from './complete.module.scss'

const Complete: NextPage = () => {
	return (
		<>
			<Header />
			<Image
				className={style.backgroundImg}
				alt='background'
				src='/layout/BackImg.svg'
				quality={100}
				fill
				sizes='100%'
				style={{ objectFit: 'cover', objectPosition: 'center' }}
			/>
			<main>
				<div className={style.container}>
					<div className={style.header}>
						<h1 className={style.title}>Contact us</h1>
						<h3 className={style.subtitle}>Payment completed</h3>
					</div>
					<hr className={style.line} />
					<Image
						alt='logo'
						src='/complete/complete.svg'
						width={200}
						height={200}
						className={style.image}
					/>
					<p className={style.text}>Thank you for your purchase</p>
					<button
						onClick={() => {
							router.push('/')
						}}
						className={style.finishBtn}
					>
						finish
					</button>
				</div>
			</main>
		</>
	)
}

export default Complete
