"use client";
import { IoCloseCircleOutline } from "react-icons/io5";
import Image from "next/image";
import "../LoginModal/LoginModal.scss";
import logo from "../../../public/logo.svg";
import { usePlacingVisibilityStore } from "@/store/PlacingVisibilityStore";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function PlacingModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  const isVisible = usePlacingVisibilityStore((state) => state.isVisible);
  const hide = usePlacingVisibilityStore((state) => state.hide);
  const [paymentMethod, setPaymentMethod] = useState<string>("card"); // значение по умолчанию

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  // const handleSubmit = () => {
  //   console.log("Выбран способ оплаты:", paymentMethod);
  //   if (paymentMethod === "card") {
  //   } else {
  //   }
  // };

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
        <form className="loginModal__content__form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">
            Ваше Имя
            <input type="name" 
            {...register("name", {required: "веддите свое имя для подтверждения"})}/>
            {errors.name && <p className="modalError">{errors.name.message}</p>}
          </label>

          <label htmlFor="">
            Ваша Фамилия
            <input type="name" 
            {...register("lastname", {required: "веддите свою фамилию для подтверждения"})}/>
            {errors.lastname && <p className="modalError">{errors.lastname.message}</p>}
          </label>

          <label htmlFor="">
            Ваш номер
            <input type="number" 
            {...register("number", {required: "веддите свой номер для подтверждения"})}/>
            {errors.number && <p className="modalError">{errors.number.message}</p>}
          </label>

          <label htmlFor="">
            Ваша почта
            <input type="email" 
            {...register("email", {required: "веддите свою почту для подтверждения"})}/>
            {errors.email && <p className="modalError">{errors.email.message}</p>}
          </label>

          <label htmlFor="">
            Адреса відділення
            <input type="text" autoComplete="street-address" 
            {...register("streetAddress", {required: "веддите свой адрес для подтверждения"})}/>
            {errors.streetAddress && <p className="modalError">{errors.streetAddress.message}</p>}
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
  );
}
