import Banner from '@/components/layout/banner/banner'
import Layout from '@/components/layout/layout'
import { NextPage } from 'next'
import Handcraft from './sections/handcraft/handcraft'
import Ecofriendly from './sections/ecofriendly/ecofriendly'
import Combining from './sections/combining/combining'
import style from './about.module.scss'

const about: NextPage = () => {
	return (
		<Layout>
			<Banner />
			<hr className={style.line1} />
			<Handcraft />
			<hr className={style.line2} />
			<Ecofriendly />
			<hr className={style.line2} />
			<Combining />
		</Layout>
	)
}

export default about
