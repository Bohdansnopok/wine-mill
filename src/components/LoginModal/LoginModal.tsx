"use client"
import Image from "next/image";
import "./LoginModal.scss";
import logo from "../../../public/logo.svg";
import { useLogInVisibilityStore } from "@/store/logInVisibilityStore";
import { IoCloseCircleOutline } from "react-icons/io5";

export function LoginModal() {
  const isVisible = useLogInVisibilityStore((state) => state.isVisible);
  const hide = useLogInVisibilityStore((state) => state.hide);

  if (!isVisible) return null;

  return (
    <section className="loginModal">
      <div className="loginModal__content">
        <IoCloseCircleOutline
          className="loginModal__closeIcon"
          onClick={hide}
        />

        <Image src={logo} alt="" />
        <p>ВОЙТИ В АККАУНТ</p>
        <form action="" className="loginModal__content__form">
          <label htmlFor="">
            електронная почта
            <input type="email" />
          </label>

          <label htmlFor="">
            пароль
            <input type="password" />
          </label>

          <button type="submit" className="redBtn">
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
    </section>
  );
}
