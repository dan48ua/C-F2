import React from 'react'
import style from './combining.module.scss'

const Combining: React.FC = () => {
    return (
        <section className={style.wrapper}>
      <div className={style.card}>
        <img src="/about/handmadephoto.svg" alt="Handmade" />
        <h3 className={style.cardTitle}>Handmade Quality</h3>
      </div>

      <div className={style.card}>
      <img src="/about/natural.svg" alt="Natural" />
        <h3 className={style.cardTitle}>Natural Ingredients</h3>
      </div>

      <div className={style.card}>
      <img src="/about/ecofriendlyphoto.svg" alt="Eco-friendly" />
        <h3 className={style.cardTitle}>Eco-Friendly</h3>
      </div>
    </section>
    )
}
export default Combining