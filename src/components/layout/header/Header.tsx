import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import style from './header.module.scss'

const Header: FC = () => {
	const router = useRouter()
	const pathname = router.pathname

	const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

	useEffect(() => {
		const token = localStorage.getItem('accessToken')
		setIsAuthenticated(!!token)
	}, [])

	const handleLogout = () => {
		localStorage.removeItem('accessToken')
		router.reload()
	}

	return (
		<header className={style.header}>
			<h1 className={style.siteTitle}>
				<Link href='/'>ZAPALIUI CANDLES</Link>
			</h1>
			<div className={style.navRow}>
				<div className={style.left}>
					{/* Prevent hydration mismatch by rendering nothing until client auth is known */}
					{isAuthenticated === null ? null : !isAuthenticated ? (
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
						<button className={style.link} onClick={handleLogout}>
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
