import Home from '@/components/screens/home/Home'
import { ICandleData } from '@/interfaces/candle.interface'
import { getCandles } from '@/services/candle.service'
import { GetServerSideProps, NextPage } from 'next'

const Index: NextPage<ICandleData> = ({ candles }) => {
	return (
		<>
			<Home candles={candles} />
		</>
	)
}

export const getServerSideProps: GetServerSideProps<ICandleData> = async () => {
	const candles = await getCandles.getAll()
	return {
		props: { candles },
	}
}

export default Index
