import { FC } from 'react'
import style from '../handcrafteco.module.scss'

const Handcraft: FC = () => {
	return (
		<section className={style.wrapper}>
			<h2 className={style.title}>HANDCRAFTED WITH LOVE</h2>
			<p className={style.description}>
				At ZAPALUA, we believe that every candle is more than just a source of
				light. It’s a piece of art that brings warmth, comfort, and a personal
				touch to your space.
			</p>
		</section>
	)
}

export default Handcraft
