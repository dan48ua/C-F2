import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import style from './header.module.scss'

const Header: FC = () => {
	const router = useRouter()
	const pathname = router.pathname

	const isAuthenticated =
		typeof window !== 'undefined' && !!localStorage.getItem('accessToken')

	return (
		<header className={style.header}>
			<h1 className={style.siteTitle}>
				<Link href='/'>ZAPALIUI CANDLES</Link>
			</h1>
			<div className={style.navRow}>
				<div className={style.left}>
					{!isAuthenticated ? (
						<>
							<Link
								className={style.link}
								href={{
									pathname: pathname,
									query: { page: 'login' },
								}}
							>
								Sign In /
							</Link>
							<Link
								className={style.link}
								href={{
									pathname: pathname,
									query: { page: 'registration' },
								}}
							>
								Registration
							</Link>
						</>
					) : (
						<button
							className={style.link}
							onClick={() => {
								localStorage.removeItem('accessToken')
								router.reload()
							}}
						>
							Logout
						</button>
					)}
				</div>
				<div className={style.right}>
					<nav>
						<ul className={style.navList}>
							<li>
								<Link className={style.link} href='/about'>
									About Us
								</Link>
							</li>
							<li>
								<Link className={style.link} href='/contactus'>
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									className={style.link}
									href={{
										pathname: pathname,
										query: { page: 'basket' },
									}}
								>
									Basket
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
