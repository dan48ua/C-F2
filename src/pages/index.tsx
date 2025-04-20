import Home from '@/components/screens/home/Home'
import { ICandle, ICandleData } from '@/interfaces/candle.interface'
import { getAllProducts } from '@/services/product.service'
import { GetStaticProps, NextPage } from 'next'

// const Index: NextPage<ICandleData> = ({ candles }) => {
// 	return (
// 		<>
// 			<Home candles={candles} />
// 		</>
// 	)
// }

// export const getServerSideProps: GetServerSideProps<ICandleData> = async () => {
// 	const candles = await getCandles.getAll()
// 	return {
// 		props: { candles },
// 	}
// }
interface Props {
	candles: ICandle[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const candles = await getAllProducts()
	return {
		props: { candles },
		revalidate: 180,
	}
}
const Index: NextPage<ICandleData> = ({ candles }) => {
	return (
		<>
			<Home candles={candles} />
		</>
	)
}

export default Index
