import { FC } from 'react'
import style from '../handcrafteco.module.scss'

const Ecofriendly: FC = () => {
	// используй вместо дефолтного имг компонент Image от некста
	return (
		<section className={style.wrapper}>
			<h2 className={style.title}>SUSTAINABILITY & ECO-FRIENDLY</h2>
			<img
				className='ecofriendly-img'
				src='/about/ecophoto.svg'
				// src='/plok.jpg'
				alt='Handcraft'
			/>
			<p className={style.description2}>
				We are committed to sustainability by using natural ingredients and
				eco-friendly packaging, ensuring a minimal carbon footprint and a
				healthier environment.
			</p>
		</section>
	)
}

export default Ecofriendly
