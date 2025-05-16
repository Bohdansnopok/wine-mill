import Image from 'next/image'
import '../LoginModal/LoginModal.scss'
import logo from '../../../public/logo.svg'

export function RegisterModal() {
    return (
        <section className="loginModal">
            <div className="loginModal__content">
                <Image src={logo} alt='' />
                <p>ЗАРЕГИСТРИРОВАТСЯ</p>
                <form action="" className="loginModal__content__form">
                    <label htmlFor="">
                        имя
                        <input type="text" />
                    </label>
                    
                    <label htmlFor="">
                        електронная почта
                        <input type="email" />
                    </label>
                    
                    <label htmlFor="">
                        пароль
                        <input type="password" />
                    </label>
                    
                    <label htmlFor="">
                        подтвердите пароль
                        <input type="password" />
                    </label>

                    <button type='submit' className='redBtn'>
                        ОТПРАВИТЬ
                    </button>
                </form>
            </div>
        </section>
    )
}