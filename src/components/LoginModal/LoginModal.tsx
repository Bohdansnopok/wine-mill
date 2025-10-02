"use client";
import Image from "next/image";
import "./LoginModal.scss";
import logo from "../../../public/logo.svg";
import { useLogInVisibilityStore } from "@/store/logInVisibilityStore";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export function LoginModal() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };
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
        <form
          action=""
          className="loginModal__content__form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit);
            toast.success("Вы успешно вошли в аккаунт!"); 
            reset();
            hide();
          }}
        >
          <label htmlFor="">
            електронная почта
            <input
              type="email"
              {...register("email", { required: "веддите свою почту" })}
            />
            {errors.email && (
              <p className="modalError">{errors.email.message}</p>
            )}
          </label>

          <label htmlFor="">
            пароль
            <input
              type="password"
              {...register("password", { required: "веддите свой пароль" })}
            />
            {errors.password && (
              <p className="modalError">{errors.password.message}</p>
            )}
          </label>

          <button type="submit" className="redBtn" disabled={!isValid}>
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
    </section>
  );
}
