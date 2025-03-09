import { NextPage } from 'next'
import Image from 'next/image'
import router from 'next/router'
import style from './checkout.module.scss'
import Product from './product'

const Checkout: NextPage = () => {
	return (
		<div className={style.wrapper}>
			{/* Шапка */}
			<header className={style.header}>
				<h2>ZAPALUI CANDLES</h2>
			</header>

			{/* Заголовок "Checkout" со стрелкой */}
			<div className={style.checkoutTitle}>
				<Image
					src='/modal/strelka.svg'
					width={20}
					height={20}
					alt='Arrow'
					className={style.arrowIcon}
					onClick={() => router.back()}
				/>
				<span>Checkout</span>
			</div>

			{/* Основной контейнер: Форма и блок заказа */}
			<div className={style.mainContainer}>
				{/* Форма */}
				<form className={style.formBlock}>
					<h2>Contacts</h2>
					<br />
					<div className={style.columns}>
						<input type='text' placeholder='First Name' />
						<input type='text' placeholder='Phone Number' />
						<input type='text' placeholder='Last Name' />
						<input type='text' placeholder='Email Address' />
						<input type='text' placeholder='Delivery Country' />
						<input type='text' placeholder='City' />
					</div>
					<hr className={style.line} />

					<h2>Delivery</h2>
					<br />
					<div className={style.deliveryOptions}>
						<div className={style.pickUp}>
							<div className={style.radioRow}>
								<input type='radio' name='delivery' id='pickUp' />
								<label htmlFor='pickUp'>Pick Up</label>
							</div>
							<div className={style.pickUpDetail}>
								<label>Where you want to pick up your order</label>
								<input type='text' placeholder='' />
							</div>
						</div>

						<div className={style.courier}>
							<div className={style.radioRow}>
								<input type='radio' name='delivery' id='courier' />
								<label htmlFor='courier'>Delivery By Courier</label>
							</div>
							<div className={style.courierDetail}>
								<label>Street</label>
								<input type='text' placeholder='' />
							</div>
							<div className={style.courierDetail}>
								<label>House</label>
								<input type='text' placeholder='' />
							</div>
							<div className={style.courierDetail}>
								<label>Apartment</label>
								<input type='text' placeholder='' />
							</div>
							<div className={style.courierDetail}>
								<label>Zip/Postal Code</label>
								<input type='text' placeholder='' />
							</div>
						</div>
					</div>

					<hr className={style.line} />

					<button className={style.checkoutBtn}>CHECKOUT</button>
				</form>

				{/* Блок заказа */}
				<div className={style.orderBlock}>
					<Product />
				</div>
			</div>
		</div>
	)
}

export default Checkout
