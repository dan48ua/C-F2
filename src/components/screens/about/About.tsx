import Banner from '@/components/layout/banner/banner'
import Layout from '@/components/layout/layout'
import { NextPage } from 'next'
import style from './about.module.scss'
import Combining from './sections/combining/combining'
import Ecofriendly from './sections/ecofriendly/ecofriendly'
import Handcraft from './sections/handcraft/handcraft'

const about: NextPage = () => {
	// используй вместо дефолтного имг компонент Image от некста
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
