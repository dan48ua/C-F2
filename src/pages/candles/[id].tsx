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

// export const getStaticProps: GetStaticProps<Props1> = async () => {
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
	const candle = await getProductById(params?.id as string)
	// const candle = await getProductById('cm9pfkaa30006javo1jic3eum')
	// const candle = await getProductById()
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

// export const getStaticPaths: GetStaticPaths<Params> = async () => {
// 	const candles = await getAllProducts()
// 	return {
// 		paths: candles.map(candle => ({
// 			params: {
// 				id: String(candle.id),
// 			},
// 		})),
// 		fallback: 'blocking',
// 	}
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
// 	const candle = await getProductById(String(params?.id))
// 	console.log('candle', candle)

// 	return {
// 		props: { candle },
// 		revalidate: 180,
// 	}
// }
export default CandlePage
