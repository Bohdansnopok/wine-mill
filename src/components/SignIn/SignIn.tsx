import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import "./SignIn.scss";

export default function SignIn() {
    return (
        <section className="SignIn">
            <Link href="/" className="SignIn__logo__link">
                <Image src={logo} alt="logo" className="SignIn__logo" />
            </Link>

            <h6 className="SignIn__title"> ВХОД</h6>

            <form className="SignIn__form">
                <label className="SignIn__form__label">
                    <div className="SignIn__form__label__text">
                        Почта
                    </div>
                    <input type="text" className="SignIn__form__label__input"/>
                </label>
                
                <label className="SignIn__form__label">
                    <div className="SignIn__form__label__text">
                        Пароль
                    </div>
                    <input type="text" className="SignIn__form__label__input"/>
                </label>

                <button type="submit" className="redBtn">Отправить</button>
            </form>
        </section>
    );
}