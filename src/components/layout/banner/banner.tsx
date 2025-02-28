import Image from 'next/image'
import { FC } from 'react'
import style from './banner.module.scss'

const Background: FC = () => {
	return (
		<section className={style.backgroundSection}>
			<Image
				className={style.backgroundImg}
				alt='background'
<<<<<<< HEAD
				// src='/layout/BackImg.svg'
				src='/Flag_of_Romania.svg'
=======
				src='/layout/BackImg.svg'
				// src='/Flag_of_Romania.svg'
>>>>>>> 1a5cf6593548aaa5ae46ee5bbca8f3cd20e6cb9e
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
<<<<<<< HEAD
					// src='./layout/CandleImg.svg'
					src='/qwesd.jpg'
					// src='/opa.png'
					// fill
					// sizes='100%'
					width='400'
					height='400'
					style={{ objectFit: 'contain', left: '500px', top: '200px', position: 'relative', zIndex: '10' }}
=======
					src='./layout/CandleImg.svg'
					// src='/qwesd.jpg'
					// src='/opa.png'
					fill
					sizes='100%'
					// width='400'
					// height='400'
					style={{ objectFit: 'contain'}}
					// style={{ objectFit: 'contain', left: '500px', top: '200px', position: 'relative', zIndex: '10' }}
>>>>>>> 1a5cf6593548aaa5ae46ee5bbca8f3cd20e6cb9e
				/>
			</div>
		</section>
	)
}

export default Background
