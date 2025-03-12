import Image from 'next/image'
import { FC } from 'react'
import style from './LogoGroup.module.scss'

const LogoGroup: FC = () => {
	return (
		<section className={style.section}>
			<div className={style.container}>
				<hr className={style.line} />

				<div>
					<Image
						alt='logo'
						src='./layout/logoGroup.svg'
						width={250}
						height={250}
						style={{ display: 'block', margin: '0 auto' }}
					/>
				</div>

				{/* Right line */}
				<hr className={style.line} />
			</div>
		</section>
	)
}

export default LogoGroup
