import { NextPage } from 'next'
import { useRouter } from 'next/router'
import style from './contactform.module.scss'
import React from 'react'
import { FC } from 'react'

const Contactform: FC = () => {
    return(
        <section className={style.forma}>
                <div className={style.container}>
                    <h2 className={style.title}>
                        Contact us
                    </h2>
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