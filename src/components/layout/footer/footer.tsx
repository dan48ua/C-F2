import { FC } from 'react'
import style from './footer.module.scss'
import { useRouter } from 'next/router'

const Footer: FC = () => {
	const router = useRouter()
	return (
		<>
			<footer className={style.footer}>
				<div className={style.container}>
					<div className={style.grid}>
						<div className={style.column}>
						<div onClick={() => router.push('/about')} className={style.link}>
								About us
							</div>
							<div onClick={() => router.push('/deliverypayments')} className={style.link}>
								Delivery and payment
							</div>
						</div>
						<div className={style.column}>
							<a href='/' className={style.link}>
								Contact us
							</a>
							<a href='/' className={style.link}>
								@ Instagram
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
