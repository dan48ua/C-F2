import Link from 'next/link'
import { FC } from 'react'
import style from './header.module.scss'
import router from 'next/router'

const Header: FC = () => {
	return (
		<header className={style.header}>
			<h1 className={style.siteTitle}>
				<button onClick={() => router.push('/')} >ZAPALIUI CANDLES</button>
			</h1>
			<div className={style.navRow}>
				<div className={style.left}>
					<button type="button" className={style.link}>
						Sign In
					</button>
				</div>
				<div className={style.right}>
					<nav>
						<ul className={style.navList}>
							<li>
								<button type="button" onClick={() => router.push('/about')} className={style.link}>
									About Us
								</button>
							</li>
							<li>
								<button type="button" className={style.link}>
									Contacts
								</button>
							</li>
							<li>
								<button type="button" className={style.link}>
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
