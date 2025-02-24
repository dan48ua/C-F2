import Layout from '@/components/layout/layout'
import Banner from '../../layout/banner/banner'
import Description from './sections/description/description'
import { NextPage } from 'next'
import { ICandleData } from '@/interfaces/candle.interface'
import Catalogue from './sections/catalogue/catalogue'
import ResetPassword from '@/components/modal/resetPassword/resetPasswrod'

const Home: NextPage<ICandleData> = ({ candles }) => {
	return (
		<>
			<Layout>
				<Banner />
				<Catalogue candles={candles}/>
				<Description />
			</Layout>
		</>
	)
}



export default Home