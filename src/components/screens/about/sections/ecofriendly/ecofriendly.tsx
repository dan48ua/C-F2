import { FC } from 'react'
import style from '../handcrafteco.module.scss'

const Ecofriendly: FC = () => {
	return (
		<section className={style.wrapper}>
			<h2 className={style.title}>SUSTAINABILITY & ECO-FRIENDLY</h2>
			<p className={style.description}>
                We are committed to sustainability by using natural ingredients
                and eco-friendly packaging, ensuring a minimal carbon footprint
                and a healthier environment.
			</p>
		</section>
	)
}

export default Ecofriendly
