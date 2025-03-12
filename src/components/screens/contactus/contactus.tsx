import Header from '@/components/layout/header/Header'
import { NextPage } from 'next'
import Image from 'next/image'
import style from './contactus.module.scss'
import Contactform from './sections/contactform/contactform'

const Contactus: NextPage = () => {
	return (
		<>
			<Header />
			<Contactform />
			<Image
				className={style.backgroundImg}
				alt='background'
				src='/layout/BackImg.svg'
				quality={100}
				fill
				sizes='100%'
				style={{ objectFit: 'cover', objectPosition: 'center' }}
			/>
		</>
	)
}

export default Contactus
