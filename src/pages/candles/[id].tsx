import Footer from '@/components/layout/footer/footer'
import Header from '@/components/layout/header/Header'
import CandleSingle from '@/components/screens/candles/candle'
import { ICandleDataSingle } from '@/interfaces/candle.interface'
import { getCandles } from '@/services/candle.service'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

const CandlePage: NextPage<ICandleDataSingle> = ({ candle }) => {
	return (
		<>
			<Header />
			<CandleSingle candle={candle} />
		</>
	)
}

interface Params extends ParsedUrlQuery {
	id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
	const candles = await getCandles.getAll()

	return {
		paths: candles.map(candle => ({
			params: {
				id: String(candle.id),
			},
		})),
		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps<ICandleDataSingle> = async ({
	params,
}) => {
	const candle = await getCandles.getById(String(params?.id))
	return {
		props: { candle },
		revalidate: 60,
	}
}
export default CandlePage
