import { clearBasket } from '@/store/basketSlice'
import { RootState } from '@/store/store'
import Image from 'next/image'
import router from 'next/router'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import globalStyles from '../modal.module.scss'

const Basket: FC = () => {
	const items = useSelector((state: RootState) => state.basket.items)
	const dispatch = useDispatch()

	return (
		<section className={globalStyles.modal}>
			<div className={globalStyles.header}>
				<Image
					src='/modal/strelka.svg'
					width={20}
					height={20}
					alt={'strelka'}
					className={globalStyles.strelka}
					onClick={() => {
						// router.push({ pathname: pathname, query: { page: '' } })
						router.back()
					}}
				/>
				<h2 className={globalStyles.title}>Basket</h2>
			</div>
			{items.length < 1 ? (
				<p></p>
			) : (
				<ul>
					{items.map(item => (
						<li key={item.id}>
							{item.name} - quantity: {item.quantity}
						</li>
					))}
				</ul>
			)}
			{items.length > 0 && (
				<button onClick={() => dispatch(clearBasket())}>
					Очистить корзину
				</button>
			)}
		</section>
	)
}

export default Basket
