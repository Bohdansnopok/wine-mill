"use client";

import Image from "next/image";
import "./Header.scss";
import logo from "../../../public/logo.svg";
import search from "../../../public/search.svg";
import geo from "../../../public/geo.svg";
import Link from "next/link";
import { useVisibilityStore } from "@/store/registerVisibilityStore";
import { useLogInVisibilityStore } from "@/store/logInVisibilityStore";

export default function Header() {
  const show = useVisibilityStore((state) => state.show);
  const showLogIn = useLogInVisibilityStore((state) => state.show);

  return (
    <header className="header">
      <div className="topTextLine">
        ДОСТУПНА СРОЧНАЯ ДОСТАВКА ПО КИЕВУ - <a href="#">ДЕТАЛЬНЫЕ УСЛОВИЯ</a>
      </div>

      <div className="container">
        <div className="headerContent">
          <Link href="/" className="logo">
            <Image src={logo} alt="logo" />
            <p>винная мельница</p>
          </Link>

          <form>
            <input type="text" className="headerInput" />
            <button type="submit" className="headerInput__submit">
              <Image src={search} alt="search icon" />
            </button>
          </form>

          <div className="headerContent__items">
            <div className="headerContent__items__item">
              <div className="headerContent__items__item__links">
                <button onClick={show}>Регистрация</button>
                <button onClick={showLogIn}>Вход</button>
              </div>
              <Link href="/profile">Личный кабинет</Link>
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
                <Link href="/cart" className="geo">
                  Корзина: 0
                </Link>
              </div>
              <div className="cartPrice">0 р</div>
            </div>
          </div>
        </div>

        <div className="header__navs">
          <Link href="/catalog">Вино</Link>
          <Link href="/sparklingCatalog">Игристое</Link>
          <Link href="/wiskeyCatalog">Виски</Link>
          <Link href="/cognacCatalog">Коньяк</Link>
          <Link href="/armagnacCatalog">Арманьяк</Link>
          <Link href="/rumCatalog">Ром</Link>
          <Link href="/vodkaCatalog">Водка</Link>
          <Link href="/liquorCatalog">Ликер</Link>
          <Link href="/cocktailsCatalog">Коктейли</Link>
          <Link href="/delicaciesCatalog">Деликатесы</Link>
        </div>
      </div>
    </header>
  );
}
