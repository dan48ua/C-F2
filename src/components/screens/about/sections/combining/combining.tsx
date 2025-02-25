import React from 'react'
import style from './combining.module.scss'

const Combining: React.FC = () => {
	// используй вместо дефолтного имг компонент Image от некста
	return (
		<section className={style.wrapper}>
			<div className={style.card}>
				<img src='/about/handmadephoto.svg' alt='Handmade' />
				{/* <img src='/qwesd.jpg' width={100} height={100} alt='Handmade' /> */}
				<h3 className={style.cardTitle}>Handmade Quality</h3>
				{/* <h3 className={style.cardTitle}>Handmade Pudge</h3> */}
			</div>

			<div className={style.card}>
				<img src='/about/naturalphoto.svg' alt='Natural' />
				{/* <img src='/images (1).jpg' width={200} height={200} alt='Handmade' /> */}
				<h3 className={style.cardTitle}>Natural Ingredients</h3>
				{/* <h3 className={style.cardTitle}>Natural Pudge</h3> */}
			</div>

			<div className={style.card}>
				<img src='/about/ecofriendlyphoto.svg' alt='Eco-friendly' />
				{/* <img src='/scale_1200.jpg' width={300} height={300} alt='Handmade' /> */}
				<h3 className={style.cardTitle}>Eco-Friendly</h3>
				{/* <h3 className={style.cardTitle}>Pudge-Friendly</h3> */}
			</div>
		</section>
	)
}
export default Combining
