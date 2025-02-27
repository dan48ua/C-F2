import Layout from '@/components/layout/layout'
import Modal from '@/components/modal/modal'
import { ICandleData } from '@/interfaces/candle.interface'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Banner from '../../layout/banner/banner'
import Catalogue from './sections/catalogue/catalogue'
import Description from './sections/description/description'

const Home: NextPage<ICandleData> = ({ candles }) => {
	const router = useRouter()
	const { page } = router.query
	console.log('page', page)

	return (
		<>
			<Layout>
				<Banner />
				<Modal page={typeof page === 'string' ? page : ''} />
				<Catalogue candles={candles} />
				<Description />
			</Layout>
		</>
	)
}

export default Home
