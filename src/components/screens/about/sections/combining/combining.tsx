import React from 'react'
import style from './combining.module.scss'

const Combining: React.FC = () => {
	return (
		<section className={style.section}>
			<div className={style.part1}>
				<img src='/about/handmadephoto.svg' alt='Handmade' />
				<h3 className={style.cardTitle}>
					Handmade <br />
					Quality
				</h3>
			</div>

			<div className={style.part2}>
				<img src='/about/naturalphoto.svg' alt='Natural' />
				<h3 className={style.cardTitle}>
					Natural
					<br />
					Ingredients
				</h3>
			</div>

			<div className={style.part3}>
				<img src='/about/ecophoto.svg' alt='Eco-friendly' />
				<h3 className={style.cardTitle}>Eco-Friendly</h3>
			</div>
		</section>
	)
}
export default Combining
