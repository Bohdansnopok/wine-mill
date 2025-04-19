import Image from "next/image";
import "./Header.scss"
import logo from "../../../public/logo.svg"
import search from "../../../public/search.svg"
import geo from "../../../public/geo.svg"

export default function Header() {
    return (
        <header className="header">
            <div className="topTextLine">
                ДОСТУПНА СРОЧНАЯ ДОСТАВКА ПО КИЕВУ - <a href="#">ДЕТАЛЬНЫЕ УСЛОВИЯ</a>
            </div>

            <div className="container">
                <div className="headerContent">
                    <div className="logo">
                        <Image src={logo} alt="logo" />
                        <p>винная мельница</p>
                    </div>

                    <form>
                        <input type="text" className="headerInput" />
                        <button type="submit" className="headerInput__submit">
                            <Image src={search} alt="search icon" />
                        </button>
                    </form>

                    <div className="headerContent__items">
                        <div className="headerContent__items__item">
                            <div className="headerContent__items__item__links">
                                <a href="">Регистрация</a>
                                <a href="">Вход</a>
                            </div>
                            <a href="#">Личный кабинет</a>
                        </div>
                    </div>

                    <div className="headerContent__items">
                        <div className="headerContent__items__item">
                            <div className="headerContent__items__item__top">
                                <Image src={geo} alt="geoIcon" />
                                <div className="geo">Киев</div>
                            </div>
                            <a href="#">063 658 32 21</a>
                        </div>
                    </div>

                    <div className="headerContent__items">
                        <div className="headerContent__items__item">
                            <div className="headerContent__items__item__top">
                                <a href="#" className="geo">Корзина: 0</a>
                            </div>
                            <div className="cartPrice">0 р</div>
                        </div>
                    </div>
                </div>

                <div className="header__navs">
                    <a href="#">Вино</a>
                    <a href="#">Игристое</a>
                    <a href="#">Виски</a>
                    <a href="#">Коньяк</a>
                    <a href="#">Арманьяк</a>
                    <a href="#">Ром</a>
                    <a href="#">Водка</a>
                    <a href="#">Ликер</a>
                    <a href="#">Коктейли</a>
                    <a href="#">Деликатесы</a>
                </div>
            </div>
        </header>
    );
}
