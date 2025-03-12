import { BasketItem } from '@/interfaces/basketItem.interface'
import { addItem, decrementItem, removeItem } from '@/store/basketSlice'
import { RootState } from '@/store/store'
import { NextPage } from 'next'
import Image from 'next/image'
import router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import style from './checkout.module.scss'
import productStyle from './products.module.scss'

const Checkout: NextPage = () => {
	const items = useSelector((state: RootState) => state.basket.items)
	const dispatch = useDispatch()
	const totalCost = items.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	)

	const handleAdd = (item: BasketItem) => {
		dispatch(addItem({ ...item, quantity: 1 }))
	}
	const handleRemove = (item: BasketItem) => {
		dispatch(decrementItem({ ...item, quantity: 1 }))
	}
	const handleDelete = (id: string | number) => {
		dispatch(removeItem(id))
	}
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
					{items.length < 1 ? (
						<p></p>
					) : (
						<>
							<ul>
								{items.map(item => (
									<>
										<li key={item.id} className={productStyle.item}>
											<Image
												src={item.image}
												alt='item'
												width={150}
												height={150}
											/>
											<div className={productStyle.info}>
												<h3 className={productStyle.name}>{item.name}</h3>
												<button
													className={productStyle.delete}
													onClick={() => handleDelete(item.id)}
												>
													Delete item
												</button>
												<p className={productStyle.price}>
													200g - {item.price * item.quantity} &#8372;
													<span className={productStyle.quantity}>
														<button
															className={productStyle.butt}
															onClick={() => handleRemove(item)}
														>
															-
														</button>
														<p>{item.quantity}</p>
														<button
															className={productStyle.butt}
															onClick={() => handleAdd(item)}
														>
															+
														</button>
													</span>
												</p>
											</div>
										</li>
										<hr className={productStyle.line} />
									</>
								))}
							</ul>
							<p className={productStyle.shipping}>Shipping cost</p>
							<hr className={productStyle.line} />
							<div className={productStyle.total}>
								subotal
								<span className={productStyle.symbol}>{totalCost} &#8372;</span>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default Checkout
