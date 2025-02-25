import { FC, type PropsWithChildren } from 'react'
import Footer from './footer/footer'
import LogoGroup from './footer/logoGroup/LogoGroup'
import Header from './header/Header'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
			<LogoGroup />
			<Footer />
		</div>
	)
}

export default Layout
