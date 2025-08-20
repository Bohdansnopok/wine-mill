"use client";
import Image from "next/image";
import "../LoginModal/LoginModal.scss";
import logo from "../../../public/logo.svg";
import { useVisibilityStore } from "@/store/registerVisibilityStore";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";

export function RegisterModal() {
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
        <form action="" className="loginModal__content__form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">
            имя
            <input
              type="text"
              {...register("name", { required: "веддите имя" })}
            />
            {errors.name && <p className="modalError">{errors.name.message}</p>}
          </label>

          <label htmlFor="">
            електронная почта
            <input
              type="email"
              {...register("email", { required: "веддите почту" })}
            />
            {errors.email && (
              <p className="modalError">{errors.email.message}</p>
            )}
          </label>

          <label htmlFor="">
            пароль
            <input
              type="password"
              {...register("password", { required: "веддите пароль" })}
            />
            {errors.password && (
              <p className="modalError">{errors.password.message}</p>
            )}
          </label>

          <label htmlFor="">
            подтвердите пароль
            <input
              type="confirmPassword"
              {...register("confirmPassword", { required: "подтвердите пароль" })}
            />
            {errors.confirmPassword && (
              <p className="modalError">{errors.confirmPassword.message}</p>
            )}
          </label>

          <button type="submit" className="redBtn">
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
    </section>
  );
}
