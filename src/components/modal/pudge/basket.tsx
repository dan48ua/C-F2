import Image from 'next/image'
import router from 'next/router'
import { FC } from 'react'
import globalStyles from '../modal.module.scss'
import Product from './product'

const Basket: FC = () => {
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
						router.back()
					}}
				/>
				<h2 className={globalStyles.title}>Basket</h2>
			</div>
			<Product />
		</section>
	)
}

export default Basket
