"use client"
import { IoCloseCircleOutline } from "react-icons/io5";
import Image from "next/image";
import "../LoginModal/LoginModal.scss";
import logo from "../../../public/logo.svg";
import { usePlacingVisibilityStore } from "@/store/PlacingVisibilityStore";
import { useState } from "react";

export default function PlacingModal() {
      const isVisible = usePlacingVisibilityStore((state) => state.isVisible);
        const hide = usePlacingVisibilityStore((state) => state.hide);
        const [paymentMethod, setPaymentMethod] = useState<string>("card"); // значение по умолчанию

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Выбран способ оплаты:", paymentMethod);
    if (paymentMethod === "card") {
    } else {
    }
  };
  
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
            Ваше Имя
            <input type="name" />
          </label>

          <label htmlFor="">
            Ваша Фамилия
            <input type="name" />
          </label>

          <label htmlFor="">
            Ваш номер
            <input type="number" />
          </label>

          <label htmlFor="">
            Ваша почта
            <input type="email" />
          </label>

          <label htmlFor="">
            Адреса відділення
            <input type="text" autoComplete="street-address" />
          </label>

          <label className="paymemtMethod__label">
        <input
          type="radio"
          name="payment"
          value="card"
          checked={paymentMethod === "card"}
          onChange={handleChange}
          className="paymemtMethod__input"
        />
        Оплата картой
      </label>

      <label className="paymemtMethod__label">
        <input
          type="radio"
          name="payment"
          value="cash"
          checked={paymentMethod === "cash"}
          onChange={handleChange}
          className="paymemtMethod__input"
        />
        При получении
      </label>



          <button type="submit" className="redBtn" onClick={handleSubmit}>
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
    </section>
)
}
