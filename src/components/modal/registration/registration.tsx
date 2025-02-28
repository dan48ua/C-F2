import { FC } from 'react'
import Image from 'next/image'
import router from 'next/router'
import style from '../modal.module.scss'

const Registration: FC = () => {
	const { pathname } = router
	
	return (
		<section className={style.modal}>
		<div className={style.login}>
			<div className={style.header}>
				<Image
					src='/modal/strelka.svg'
					width={20}
					height={20}
					alt={'strelka'}
					className={style.strelka}
					onClick={() => {
						router.push({ pathname: pathname, query: { page: '' } })
					}}
				/>
				<h2 className={style.title}>Sign In to your account</h2>
			</div>
			</div>
		</section>
	)
}

export default Registration
