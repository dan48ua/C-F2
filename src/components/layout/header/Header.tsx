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
			</h1>
			<div className={style.navRow}>
				<div className={style.left}>
					{/* <button
						type='button'
						className={style.link}
						onClick={() => {
							router.push({ pathname: pathname, query: { page: 'login' } })
						}}
					>
						{/* {isLogin ? "" : "Sign In / Registration"} */}
					{/*
						Sign In / Registration
					</button>  */}

					<div className={style.link}>
						<span
							onClick={() =>
								router.push({ pathname: pathname, query: { page: 'login' } })
							}
						>
							Sign In /
						</span>
						<span
							onClick={() =>
								router.push({
									pathname: pathname,
									query: { page: 'registration' },
								})
							}
						>
							{' '}
							Registration
						</span>
					</div>
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
								</button>
							</li>
							<li>
								<button 
									type='button' 
									onClick={() => router.push('/contactus')}
									className={style.link}
								>
									Contact Us
								</button>
							</li>
							<li>
								<button
									onClick={() =>
										router.push({
											pathname: pathname,
											query: { page: 'basket' },
										})
									}
									type='button'
									className={style.link}
								>
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
