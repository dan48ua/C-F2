import { FC } from 'react'
import style from './ecofriendly.module.scss'

const Ecofriendly: FC = () => {
	return (
		<section className={style.section}>
			<div className={style.text}>
				<h2 className={style.title}>SUSTAINABILITY & ECO-FRIENDLY</h2>
				<p className={style.description}>
					We are committed to sustainability by carefully selecting natural,
					non-toxic ingredients and using eco-friendly packaging that minimizes
					waste. Our dedication to environmental responsibility ensures that
					every candle we create leaves a minimal carbon footprint while
					promoting a healthier planet. From ethically sourced waxes and
					lead-free wicks to recyclable and biodegradable materials, we
					prioritize sustainability at every step of our process.
				</p>
			</div>
			<img
				className={style.image}
				src='/about/ecofriendlyphoto.svg'
				alt='Handcraft'
			/>
		</section>
	)
}

export default Ecofriendly
