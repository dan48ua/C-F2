import Banner from '@/components/layout/banner/banner'
import Layout from '@/components/layout/layout'
import { NextPage } from 'next'
import Handcraft from './sections/handcraft/handcraft'

const about: NextPage = () => {
	return (
		<Layout>
			<Banner />
			<Handcraft />
		</Layout>
	)
}

export default about
