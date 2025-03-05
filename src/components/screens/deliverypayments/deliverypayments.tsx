import Banner from '@/components/layout/banner/banner'
import Layout from '@/components/layout/layout'
import Modal from '@/components/modal/modal'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import style from './deliverypayments.module.scss'
import Image from 'next/image'
import globalStyles from '../modal.module.scss'

const Deliverypayments: NextPage = () => {
	const router = useRouter()
	const { page } = router.query
	return (
        <Layout>
            <section className = {style.section}>
                <div className = {style.text}>
                <Image
					src='/modal/strelka.svg'
					width={20}
					height={20}
					alt={'strelka'}
					className={globalStyles.strelka}
					onClick={() => {
							// router.push({ pathname: pathname, query: { page: '' } })
					router.back()
					}}>
                </Image>
                    <h1 className={style.title1}>Delivery and Payment</h1>
                        <hr className={style.line} />
                    <h2 className={style.title2}>PAYMENT</h2>
                        <p className={style.mainText}>
                            Payment for your order can be completed directly on our website using a bank card through our secure payment system.<br></br>
                            If you experience any issues during the payment process, please contact us: </p>
                            <br></br>
                        <a className={style.link} href="https://www.instagram.com/zapaliui_candles/?igsh=eGRycG14Njlqbnlt#" > instagram </a>
                </div>

            
                <div className ={style.text}>
                    <hr className={style.line} />
                    <h2 className={style.title2}>DELIVERY OF INTERNATIONAL ORDERS</h2>
                        <p className={style.mainText}>
                        International deliveries are managed by courier services such as Ukrposhta EMS/Nova Post. 
                        The price displayed on our international website already includes the delivery cost, 
                        so no additional shipping fees will apply. </p>
                            <br></br>
                        <p className={style.mainText}>
                        Delivery times vary depending on the destination, typically ranging from two to four weeks. 
                        Shipment details and tracking information will be sent to the email address provided with your order. 
                        If you do not receive these details, please reach out to us via Instagram. </p>
                            <br></br>
                        <p className={style.mainText}>
                        Due to the ongoing Russian military aggression, we regret that we are unable to dispatch orders to Russia and Belarus.
                            <br></br>
                        Upon arrival in your country, international orders may be subject to customs duties and taxes imposed by local authorities.</p>
                            <br></br>
                        <p className={style.mainText}>
                        Please familiarise yourself with your country’s customs regulations and any associated charges before placing your order. 
                        We cannot anticipate or be held responsible for any additional customs fees. 
                        However, should you have any queries, feel free to contact us via Instagram.</p>
                    
                    <hr className={style.line2} />
                </div>
            
            
                <div className={style.text}>
                    <h2 className={style.title2}>RETURN / EXCHANGE PROCEDURE</h2>
                    <p className={style.mainText}>
                    Items may be exchanged within 14 days of purchase. </p>
                        <br></br>
                    <p className={style.mainText}>
                    For orders within Ukraine, exchanges can be arranged via courier service.
                        <br></br>
                    By using our website, you consent to allow third parties to process your IP address in order 
                    to determine your location for currency conversion purposes. </p>
                        <br></br>
                    <p className={style.mainText}>
                    You also agree to have the converted currency stored in a session cookie in your browser (a temporary cookie that is automatically 
                    deleted when you close your browser), ensuring that your selected currency remains consistent while browsing our website.</p>
                </div>
            </section>
        </Layout>
	)
}

export default Deliverypayments