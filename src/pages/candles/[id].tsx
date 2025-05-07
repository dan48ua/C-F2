import Header from '@/components/layout/header/Header'
import CandleSingle from '@/components/screens/candles/candle'
import { ICandle, ICandleDataSingle } from '@/interfaces/candle.interface'
import { getAllProducts, getProductById } from '@/services/product.service'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

interface Props {
	candle: ICandle
}

export const getStaticPaths: GetStaticPaths = async () => {
	const list = await getAllProducts()
	const paths = list.map(c => ({ params: { id: String(c.id) } }))
	return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
	const candle = await getProductById(params?.id as string)
	console.log('RAW candle:', candle)
	if (!candle) {
		return {
			notFound: true,
		}
	}
	return {
		props: { candle },
		revalidate: 180,
	}
}

const CandlePage: NextPage<ICandleDataSingle> = ({ candle }) => {
	return (
		<>
			<Header />
			<CandleSingle candle={candle} />
		</>
	)
}

export default CandlePage
