import Image from 'next/image'
import { FC } from 'react'
import style from './banner.module.scss'

const Background: FC = () => {
	return (
		<section className={style.backgroundSection}>
			<Image
				className={style.backgroundImg}
				alt='background'
				src='/layout/BackImg.svg'
				quality={100}
				fill
				sizes='100%'
				style={{ objectFit: 'cover', objectPosition: 'center' }}
				priority
			/>

			<div className={style.textWrapper}>
				<h1 className={style.headline}>
					LIGHT UP YOUR
					<br />
					MOMENT
					<br />
					WITH WARMTH
					<br />
					AND ELEGANC
				</h1>
			</div>

			<div className={style.candleContainer}>
				<Image
					className={style.candleImg}
					alt='candle'
					src='./layout/CandleImg.svg'
					fill
					sizes='100%'
					style={{ objectFit: 'contain' }}
				/>
			</div>
		</section>
	)
}

export default Background
