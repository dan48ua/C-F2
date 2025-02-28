import Banner from '@/components/layout/banner/banner'
import Layout from '@/components/layout/layout'
import Modal from '@/components/modal/modal'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import style from './deliverypayments.module.scss'

const Deliverypayments: NextPage = () => {
	const router = useRouter()
	const { page } = router.query
	return (
        <Layout>
            <section className = {style.section}>
                <div>
                    <hr className={style.line} />
                </div>
            </section>
        </Layout>
	)
}

export default Deliverypayments