"use client";

import Image from "next/image";
import "./LoginModal.scss";
import logo from "../../../public/logo.svg";
import { useLogInVisibilityStore } from "@/store/logInVisibilityStore";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useLoginStore } from "@/store/loginStore";

interface LoginForm {
  email: string;
  password: string;
}

export function LoginModal() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<LoginForm>({ mode: "onBlur" });

  // const { login, isLoggedIn } = useLoginStore();
  const isVisible = useLogInVisibilityStore((state) => state.isVisible);
  const hide = useLogInVisibilityStore((state) => state.hide);

  if (!isVisible || isLoggedIn) return null;

  const onSubmit = (data: LoginForm) => {
    // const savedUser = localStorage.getItem("user");

    // if (!savedUser) {
    //   toast.error("Пользователь не найден. Зарегистрируйтесь.");
    //   return;
    // }

    // const parsed = JSON.parse(savedUser);

    // if (
      // parsed.user.email === data.email &&
      // parsed.user.password === data.password
    // ) {
      // login(parsed.user); 
      // toast.success("Вы успешно вошли в аккаунт!");
      reset();
      hide();
    // } else {
      // toast.error("Неверный email или пароль");
    // }
  };

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
          className="loginModal__content__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>
            Электронная почта
            <input
              type="email"
              {...register("email", { required: "Введите свою почту" })}
            />
            {errors.email && (
              <p className="modalError">{errors.email.message}</p>
            )}
          </label>

          <label>
            Пароль
            <input
              type="password"
              {...register("password", { required: "Введите свой пароль" })}
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