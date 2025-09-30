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

export function RegisterModal() {
  const setUser = useAuthStore((state) => state.setUser);
  const isVisible = useVisibilityStore((state) => state.isVisible);
  const hide = useVisibilityStore((state) => state.hide);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterPayload>({
    mode: "onBlur",
  });

  const mutation = useMutation({
    mutationFn: (payload: RegisterPayload) => registerUser(payload),
    onSuccess: (data) => {
      setUser(data);
      console.log("User data:", data); 
      toast.success("Вы успешно зарегистрировались!");
      hide();
      reset();
    },
    onError: (error: any) => {
      toast.error(error.message || "Ошибка регистрации");
    },
  });

  if (!isVisible) return null;

  return (
    <section className="loginModal">
      <div className="loginModal__content">
        <IoCloseCircleOutline className="loginModal__closeIcon" onClick={hide} />
        <Image src={logo} alt="Logo" />
        <p>ЗАРЕГИСТРИРОВАТСЯ</p>

        <form className="loginModal__content__form" onSubmit={handleSubmit((data) => mutation.mutate(data))}>
          <label>
            имя
            <input type="text" {...register("name", { required: "Введите имя" })} />
            {errors.name && <p className="modalError">{errors.name.message}</p>}
          </label>

          <label>
            электронная почта
            <input type="email" {...register("email", { required: "Введите почту" })} />
            {errors.email && <p className="modalError">{errors.email.message}</p>}
          </label>

          <label>
            пароль
            <input type="password" {...register("password", { required: "Введите пароль" })} />
            {errors.password && <p className="modalError">{errors.password.message}</p>}
          </label>

          <label>
            подтвердите пароль
            <input type="password" {...register("confirmPassword", { required: "Подтвердите пароль" })} />
            {errors.confirmPassword && <p className="modalError">{errors.confirmPassword.message}</p>}
          </label>

          <button type="submit" className="redBtn">
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
    </section>
  );
}
