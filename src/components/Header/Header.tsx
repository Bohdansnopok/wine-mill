// components/Header/Header.jsx
import Image from "next/image";
import "./Header.scss"
import logo from "../../../public/logo.svg"
import search from "../../../public/search.svg"
import geo from "../../../public/geo.svg"
import { useRouter } from 'next/router';
import Link from "next/link";

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
                <Link href="/drinks/вино">Вино</Link>
                <Link href="/drinks/игристое">Игристое</Link>
                <Link href="/drinks/виски">Виски</Link>
                <Link href="/drinks/коньяк">Коньяк</Link>
                <Link href="/drinks/арманьяк">Арманьяк</Link>
                <Link href="/drinks/ром">Ром</Link>
                <Link href="/drinks/водка">Водка</Link>
                <Link href="/drinks/ликер">Ликер</Link>
                <Link href="/drinks/коктейли">Коктейли</Link>
                <Link href="/drinks/деликатесы">Деликатесы</Link>
            </div>
            </div>
        </header>
    );
}