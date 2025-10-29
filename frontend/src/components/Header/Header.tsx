"use client";

import Image from "next/image";
import "./Header.scss";
import logo from "../../../public/logo.svg";
import search from "../../../public/search.svg";
import geo from "../../../public/geo.svg";
import Link from "next/link";
import { useVisibilityStore } from "@/store/registerVisibilityStore";
import { useLogInVisibilityStore } from "@/store/logInVisibilityStore";
import { useForm } from "react-hook-form";
import { useIsLoggedStore } from "@/store/isLoggedStore";

type FormValues = {
  name: string;
};

export default function Header() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
  };

  const show = useVisibilityStore((state) => state.show);
  const showLogIn = useLogInVisibilityStore((state) => state.show);
  const isLoggedIn = useIsLoggedStore((state) => state.isLoggedIn);

  // const handleUserDelete = () => {
  //   const userId = data.user.id
  //   console.log(userId);
  // }

  return (
    <header className="header">
      <div className="topTextLine">
        УСЛОВИЯ ЗАКАЗА И ДОСТАВКИ -{" "}
        <Link href="/details">ДЕТАЛЬНЫЕ УСЛОВИЯ</Link>
      </div>

      <div className="container">
        <div className="headerContent">
          <Link href="/" className="logo">
            <Image src={logo} alt="logo" />
            <p>винная мельница</p>
          </Link>

          <form onSubmit={handleSubmit(onSubmit)} className="headerForm">
            <input
              {...register("name", {
                required: "Напишите название товара который хочете найти",
              })}
              className="headerInput"
            />
            {errors.name && (
              <p className="headerInput__errorMessage">{errors.name.message}</p>
            )}
            <button type="submit" className="headerInput__submit">
              <Image src={search} alt="search icon" />
            </button>
          </form>

          <div className="headerContent__items">
            <div className="headerContent__items__item">
              <div className="headerContent__items__item__links">
                {isLoggedIn ? <button>Выход</button> : <button onClick={show}>Регистрация</button>}

                {isLoggedIn ? null : <button onClick={showLogIn}>Вход</button>}
              </div>
              {isLoggedIn ? null : <Link href="/profile">Личный кабинет</Link>}
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
