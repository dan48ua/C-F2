import Layout from '@/components/layout/layout'
import { ICandleData } from '@/interfaces/candle.interface'
import { NextPage } from 'next'
import Banner from '../../layout/banner/banner'
import Catalogue from './sections/catalogue/catalogue'
import Description from './sections/description/description'

const Home: NextPage<ICandleData> = ({ candles }) => {
	return (
		<>
			<Layout>
				<Banner />
				<Catalogue candles={candles} />
				<Description />
			</Layout>
		</>
	)
}

export default Home
