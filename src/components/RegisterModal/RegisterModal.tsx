"use client";
import Image from "next/image";
import "../LoginModal/LoginModal.scss";
import logo from "../../../public/logo.svg";
import { useVisibilityStore } from "@/store/registerVisibilityStore";
import { IoCloseCircleOutline } from "react-icons/io5";

export function RegisterModal() {
  const isVisible = useVisibilityStore((state) => state.isVisible);
  const hide = useVisibilityStore((state) => state.hide);

  if (!isVisible) return null;

  return (
    <section className="loginModal">
      <div className="loginModal__content">
        <IoCloseCircleOutline
          className="loginModal__closeIcon"
          onClick={hide}
        />

        <Image src={logo} alt="" />
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

          <button type="submit" className="redBtn">
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
    </section>
  );
}
