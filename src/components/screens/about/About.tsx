import Banner from '@/components/layout/banner/banner'
import Layout from '@/components/layout/layout'
import { NextPage } from 'next'
import Handcraft from './sections/handcraft/handcraft'
import Ecofriendly from './sections/ecofriendly/ecofriendly'
import Combining from './sections/combining/combining'

const about: NextPage = () => {
	return (
		<Layout>
			<Banner />
			<Handcraft />
			<Ecofriendly />
			<Combining />
		</Layout>
	)
}

export default about
