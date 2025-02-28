import Banner from '@/components/layout/banner/banner'
import Layout from '@/components/layout/layout'
import Modal from '@/components/modal/modal'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import style from './about.module.scss'
import Combining from './sections/combining/combining'
import Ecofriendly from './sections/ecofriendly/ecofriendly'
import Handcraft from './sections/handcraft/handcraft'

const about: NextPage = () => {
	const router = useRouter()
	const { page } = router.query
	// используй вместо дефолтного имг компонент Image от некста
	return (
		<Layout>
			<Banner />
			{/* добавил модал компонент, его не трогай */}
			<Modal page={typeof page === 'string' ? page : ''} />
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
