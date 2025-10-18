import Image from 'next/image'
import './Subscribe.scss'
import wineSub from '../../../public/wineSubscribe.png'
import facebook from '../../../public/facebook.svg'
import instagram from '../../../public/instagram.svg'
import telegram from '../../../public/telegram.svg'

export default function Subscribe() {
    return (
        <section className="subscribe">
            <div className="container">
                <div>
                    <form className="subscribe__form">
                        <p className="subscribe__form__title">ПОДПИСАТЬСЯ НА EMAIL РАССЫЛКУ</p>
                        <label htmlFor="subscribe__form__label">
                            EMAIL
                        </label>
                        <input type="email" id="subscribe__form__input" className="subscribe__form__input" />

                        <button type='submit' className='subscribe__form__button redBtn'>ОТПРАВИТЬ</button>
                    </form>

                    <div className="subscribe__socials">
                        <a href="facebook.com"><Image src={facebook} alt='facebook' className="subscribe__social" /></a>
                        <a href="instagram.com"><Image src={instagram} alt='instagram' className="subscribe__social" /></a>
                        <a href="telegram.com"><Image src={telegram} alt='telegram' className="subscribe__social" /></a>
                    </div>
                </div>
                <Image src={wineSub} alt='photo' className='subscribe__image' />
            </div>
        </section>
    )
}