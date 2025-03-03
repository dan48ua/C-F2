import { useRouter } from 'next/router'
import { FC } from 'react'
import style from './header.module.scss'

const Header: FC = () => {
	const router = useRouter()
	const pathname = router.pathname

	return (
		<header className={style.header}>
			<h1 className={style.siteTitle}>
				<button onClick={() => router.push('/')}>ZAPALIUI CANDLES</button>
				{/* <button onClick={() => router.push('/')}>PUDGE CANDLUS</button> */}
			</h1>
			<div className={style.navRow}>
				<div className={style.left}>
					<button
						type='button'
						className={style.link}
						onClick={() => {
							router.push({ pathname: pathname, query: { page: 'login' } })
						}}
					>
						Sign In
					</button>
				</div>
				<div className={style.right}>
					<nav>
						<ul className={style.navList}>
							<li>
								<button
									type='button'
									onClick={() => router.push('/about')}
									className={style.link}
								>
									About Us
									{/* Among Us */}
								</button>
							</li>
							<li>
								<button type='button' className={style.link}>
									Contact Us
								</button>
							</li>
							<li>
								<button type='button' className={style.link}>
									Basket
								</button>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
