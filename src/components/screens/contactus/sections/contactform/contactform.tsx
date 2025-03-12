import { NextPage } from 'next'
import { useRouter } from 'next/router'
import style from './contactform.module.scss'
import React from 'react'
import { FC } from 'react'
import Image from 'next/image'

const Contactform: FC = () => {
    const router = useRouter()
    return(
        <section className={style.forma}>
                <div className={style.container}>
                    <Image
						        src='/modal/strelka.svg'
								width={20}
								height={20}
								alt={'strelka'}
								className={style.strelka}
								onClick={() => {
								    router.back()
								}}
							></Image>
                    <h1 className={style.title}>
                        Contact us
                    </h1>
                    <hr className={style.line} />
                    <form>
                        <div className={style.inputs}>
                            <input
                                type="text"
                                placeholder="Firstname"
                                className={style.input}/>
                            <input
                                type="text"
                                placeholder="Surname"
                                className={style.input}/>
                        </div>

                            <input
                                type="email"
                                placeholder="Email address"
                                className={style.inputEmail}/>

                            <textarea placeholder="Enter your message" className={style.textarea}/>

                            <button type="submit" className={style.button}>SEND</button>
                    </form>
                </div>
        </section>
    )
}
export default Contactform