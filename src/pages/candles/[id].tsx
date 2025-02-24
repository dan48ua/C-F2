import Layout from '@/components/layout/layout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const CandlePage: NextPage = () => {
	const { asPath, pathname } = useRouter()

	return (
		<Layout>
			<div>Candle Page</div>
		</Layout>
	)
}

export default CandlePage
