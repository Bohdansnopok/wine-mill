"use client";

import Image from "next/image";
import "./LoginModal.scss";
import logo from "../../../public/logo.svg";
import { useLogInVisibilityStore } from "@/store/logInVisibilityStore";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useLoginStore } from "@/store/loginStore";
import { useState } from "react";

interface LoginForm {
  email: string;
  password: string;
}

export function LoginModal() {
  const {
    register,
    formState: { errors, isValid },
    reset,
  } = useForm<LoginForm>({ mode: "onBlur" });

  // const { login, isLoggedIn } = useLoginStore();
  const isVisible = useLogInVisibilityStore((state) => state.isVisible);
  const hide = useLogInVisibilityStore((state) => state.hide);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  if (!isVisible) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Login successful:", data);
      setMessage(data.message);
      setEmail("");
      setPassword("");
      reset();
      hide();
    }
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
          onSubmit={handleSubmit}
        >
          <label>
            Электронная почта
            <input
              type="email"
              {...register("email", { required: "Введите свою почту" })}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
