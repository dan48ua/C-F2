import { FC } from 'react'
import style from './footer.module.scss'

const Footer: FC = () => {
	return (
		<>
			<footer className={style.footer}>
				<div className={style.container}>
					<div className={style.grid}>
						<div></div>
						<div className={style.column}>
							<a href='/' className={style.link}>
								About us
							</a>
							<a href='/' className={style.link}>
								Delivery and payment
							</a>
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
