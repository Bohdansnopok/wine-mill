"use client";
import Image from "next/image";
import "../LoginModal/LoginModal.scss";
import logo from "../../../public/logo.svg";
import { useVisibilityStore } from "@/store/registerVisibilityStore";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthStore } from "@/store/authStore";
import { registerUser, RegisterPayload } from "../../app/api/authApi";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useIsLoggedStore } from "@/store/isLoggedStore";

export function RegisterModal() {
  const isVisible = useVisibilityStore((state) => state.isVisible);
  const hide = useVisibilityStore((state) => state.hide);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const isLoggedIn = useIsLoggedStore((state) => state.isLoggedIn);
  const setIsLoggedIn = useIsLoggedStore((state) => state.setIsLoggedIn);

  const {
    register,
    formState: { errors, isValid },
    reset,
  } = useForm<RegisterPayload>({
    mode: "onBlur",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Registration successful:", data);
      setMessage(data.message);
      setName("");
      setEmail("");
      setPassword("");
      reset();
      hide();
      setIsLoggedIn(true);
    } else {
      setMessage(data.error);
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
        <Image src={logo} alt="Logo" />
        <p>ЗАРЕГИСТРИРОВАТСЯ</p>

        <form className="loginModal__content__form" onSubmit={handleSubmit}>
          <label>
            имя
            <input
              type="text"
              {...register("name", { required: "Введите имя" })}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="modalError">{errors.name.message}</p>}
          </label>

          <label>
            электронная почта
            <input
              type="email"
              {...register("email", { required: "Введите почту" })}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="modalError">{errors.email.message}</p>
            )}
          </label>

          <label>
            пароль
            <input
              type="password"
              {...register("password", { required: "Введите пароль" })}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="modalError">{errors.password.message}</p>
            )}
          </label>

          <label>
            подтвердите пароль
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Подтвердите пароль",
                validate: (value, formValues) =>
                  value === formValues.password || "Пароли не совпадают",
              })}
            />
            {errors.confirmPassword && (
              <p className="modalError">{errors.confirmPassword.message}</p>
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
