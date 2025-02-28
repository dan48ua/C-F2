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
				// src='/Flag_of_Romania.svg'
				// src='/lapa.jpeg'
				// src='/tekis.jpg'
				quality={100}
				fill
				sizes='100%'
				style={{ objectFit: 'cover', objectPosition: 'center' }}
				priority
			/>

			<div className={style.textWrapper}>
				<h1 className={style.headline}>
					LIGHT UP YOURUS
					<br />
					MOMENTUS
					<br />
					WITH WARMTHUS
					<br />
					AND ELEGANCUS
				</h1>
			</div>

			<div className={style.candleContainer}>
				<Image
					className={style.candleImg}
					alt='candle'
					// src='./layout/CandleImg.svg'
					src='/qwesd.jpg'
					// src='/opa.png'
					// fill
					// sizes='100%'
					width='400'
					height='400'
					style={{ objectFit: 'contain', left: '500px', top: '200px', position: 'relative', zIndex: '10' }}
				/>
			</div>
		</section>
	)
}

export default Background
