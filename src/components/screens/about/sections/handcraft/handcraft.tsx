import { FC } from 'react'
import style from '../handcrafteco.module.scss'

const Handcraft: FC = () => {
	return (
		<section className={style.wrapper}>
			<h2 className={style.title}>HANDCRAFTED WITH LOVE</h2>
			<img className= 'handcraft-img' src="/about/handcraftphoto.svg" alt="Handcraft" />
			<p className={style.description1}>
				At ZAPALUA, we believe that every candle is more than just a source of
				light. It’s a piece of art that brings warmth, comfort, and a personal
				touch to your space.
			</p>
		</section>
	)
}

export default Handcraft
