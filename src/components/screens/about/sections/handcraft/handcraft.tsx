import { FC } from 'react'
import style from './handcrafteco.module.scss'

const Handcraft: FC = () => {
	return (
		<section className={style.section}>
			<img
				className='handcraft-img'
				src='/about/handcraftphoto.svg'
				// src='/scale_1200.jpg'
				alt='Handcraft'
			/>
			<div className={style.text}>
				<h2 className={style.title}>HANDCRAFTED WITH LOVE</h2>
				<p className={style.description}>
					At ZAPALUA, we believe that every candle is more than just a source of
					light—it’s an experience, a statement, and a reflection of your unique
					style. Each candle is carefully crafted to not only illuminate your
					space but also to create an ambiance of warmth, comfort, and
					tranquility. Whether you're seeking relaxation after a long day,
					setting the mood for a special occasion.
				</p>
			</div>
		</section>
	)
}

export default Handcraft
