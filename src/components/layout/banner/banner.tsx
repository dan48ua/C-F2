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
				// src='/papanya-fon.jpeg'
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
					
					{/* Да-да, тильт, да-да я, <br />да-да-да-да-да-да-да.<br/> Да-да я, да-да я, да-да-да- я */}
 
				</h1>
			</div>

			<div className={style.candleContainer}>
				<Image
					className={style.candleImg}
					alt='candle'
					src='./layout/CandleImg.svg'
					// src='/qwesd.jpg'
					// src='/opa.png'
					// src='/papanya-mini.png'
					fill
					sizes='100%'
					// width='400'
					// height='400'
					style={{ objectFit: 'contain'}}
					// style={{ objectFit: 'contain', left: '500px', top: '200px', position: 'relative', zIndex: '10' }}
				/>
			</div>
		</section>
	)
}

export default Background
