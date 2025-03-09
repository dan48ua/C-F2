import Header from '@/components/layout/header/Header'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import style from './contactus.module.scss'
import Image from 'next/image'
import Contactform from './sections/contactform/contactform'

const Contactus: NextPage = () => {
	const router = useRouter()
	const { page } = router.query
	return (
        <>
            <Header>

            </Header>

            <Image
                className={style.backgroundImg}
                alt='background'
                src='/layout/BackImg.svg'
                quality={100}
                fill
                sizes='100%'
                style={{ objectFit: 'cover', objectPosition: 'center' }}
            />

            <hr className={style.bottom}/>
            <Contactform/>
        </>
        
	)
}

export default Contactus

