"use client";

import { IoCloseCircleOutline } from "react-icons/io5";
import "../../components/LoginModal/LoginModal.scss";
import { useForm } from "react-hook-form";
import logo from "../../../public/logo.svg";
import { useConsultationVisibilityStore } from "../../store/consultationVisibilityStore";
import Image from "next/image";

export default function ConsultationModal() {
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

  const isVisible = useConsultationVisibilityStore((state) => state.isVisible);
  const hide = useConsultationVisibilityStore((state) => state.hide);

  if (!isVisible) return null;

  return (
    <section className="loginModal">
      <div className="loginModal__content">
        <IoCloseCircleOutline
          className="loginModal__closeIcon"
          onClick={hide}
        />

        <Image src={logo} alt="" />
        <p>Заказать консультацию</p>
        <form
          className="loginModal__content__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="">
            Ваше Имя
            <input
              type="name"
              {...register("name", {
                required: "веддите свое имя для подтверждения",
              })}
            />
            {errors.name && <p className="modalError">{errors.name.message}</p>}
          </label>

          <label htmlFor="">
            Ваша Фамилия
            <input
              type="name"
              {...register("lastname", {
                required: "веддите свою фамилию для подтверждения",
              })}
            />
            {errors.lastname && (
              <p className="modalError">{errors.lastname.message}</p>
            )}
          </label>

          <label htmlFor="">
            Ваш номер
            <input
              type="number"
              {...register("number", {
                required: "веддите свой номер для подтверждения",
              })}
            />
            {errors.number && (
              <p className="modalError">{errors.number.message}</p>
            )}
          </label>

          <label htmlFor="">
            Ваша почта
            <input
              type="email"
              {...register("email", {
                required: "веддите свою почту для подтверждения",
              })}
            />
            {errors.email && (
              <p className="modalError">{errors.email.message}</p>
            )}
          </label>
          <button type="submit" className="redBtn" onClick={handleSubmit}>
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
    </section>
  );
}
