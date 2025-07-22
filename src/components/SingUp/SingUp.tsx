import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import "./SingUp.scss";

export default function SignUp() {
    return (
        <section className="signUp">
            <Link href="/" className="signUp__logo__link">
                <Image src={logo} alt="logo" className="signUp__logo" />
            </Link>

            <h6 className="signUp__title">РЕГИСТРАЦИЯ</h6>

            <form className="signUp__form">
                <label className="signUp__form__label">
                    <div className="signUp__form__label__text">
                        Имя
                    </div>
                    <input type="text" className="signUp__form__label__input" />
                </label>

                <label className="signUp__form__label">
                    <div className="signUp__form__label__text">
                        Почта
                    </div>
                    <input type="text" className="signUp__form__label__input" />
                </label>

                <label className="signUp__form__label">
                    <div className="signUp__form__label__text">
                        Пароль
                    </div>
                    <input type="text" className="signUp__form__label__input" />
                </label>

                <label className="signUp__form__label">
                    <div className="signUp__form__label__text">
                        Подтверждение пароля
                    </div>
                    <input type="text" className="signUp__form__label__input" />
                </label>

                <button type="submit" className="redBtn">Отправить</button>
            </form>
        </section>
    );
}