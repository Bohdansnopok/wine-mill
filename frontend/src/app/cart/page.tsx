"use client";

import { ArrowRight } from "lucide-react";
import "./cart.scss";
import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";
import YouMayAlsoLike from "@/components/YouMayAlsoLike/YouMayAlsoLike";
import Subscribe from "@/components/Subscribe/Subscribe";
import { useCartStore } from "@/store/cartStore";
import { useEffect, useState } from "react";
import { usePlacingVisibilityStore } from "@/store/PlacingVisibilityStore";
import PlacingModal from "@/components/PlacingModal/PlacingModal";
import { toast } from "react-toastify";

export default function Cart() {
  const deliviery = 400;
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const placingOrder = usePlacingVisibilityStore((state) => state.show);

  const [quantities, setQuantities] = useState<Record<number, number>>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart_quantities");
      if (saved) return JSON.parse(saved);
    }
    return cart.reduce(
      (acc, product) => {
        acc[product.id] = 1;
        return acc;
      },
      {} as Record<number, number>,
    );
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart_quantities", JSON.stringify(quantities));
    }
  }, [quantities]);

  const handleQuantityChange = (id: number, value: number) => {
    setQuantities((prev) => ({
      ...prev,
    [id]: value < 1 ? 1 : value > 99 ? 99 : value,
    }));
  };

  return (
    <section className="cart">
      <div className="container">
        <div className="cart__top">
          <div className="cart__top__pages">
            <div className="cart__top__pages__page active">МОЯ КОРЗИНА</div>
            <ArrowRight />
            <div className="cart__top__pages__page">ОФОРМЛЕНИЕ ЗАКАЗА</div>
            <ArrowRight />
            <div className="cart__top__pages__page">ЗАКАЗ ОФОРМЛЕН</div>
          </div>
          <a href="" className="cart__top__countinue">
            ПРОДОЛЖИТЬ ПОКУПКИ
          </a>
        </div>

        <div className="cart__content">
          <div className="cart__content__list">
            <div className="cart__content__list__top">
              <div className="cart__content__list__top__item product">
                ТОВАР
              </div>
              <div className="cart__content__list__top__item price">ЦЕНА</div>
              <div className="cart__content__list__top__item quantity">
                КОЛИЧЕСТВО
              </div>
              <div className="cart__content__list__top__item all">ВСЕГО</div>
            </div>

            {cart.map((product) => (
              <div className="cart__content__list__content" key={product.id}>
                <div className="cart__content__list__content__item product">
                  <div className="cart__content__list__content__item__image">
                    <div
                      className="closeIcon"
                      onClick={(e) => {
                        e.preventDefault();
                        removeFromCart(product.id)
                        toast.success("Товар удален из корзины");
                      }}
                    >
                      <IoMdCloseCircleOutline />
                    </div>
                    <Image
                      src={product.image!}
                      alt="wine"
                      width={50}
                      height={150}
                    />
                  </div>
                  <div className="cart__content__list__content__item__wineInfo">
                    <div className="cart__content__list__content__item__wineInfo__name">
                      {product.name}
                    </div>
                    <div className="cart__content__list__content__infoWrapper">
                      <p className="data">{product.createdAt}</p>/
                      <p className="data">{product.liters}</p>
                    </div>
                    <div className="cart__content__list__content__infoWrapper">
                      <p className="country">{product.country}</p>/
                      <p className="city">{product.city}</p>
                    </div>
                  </div>
                </div>
                <div className="cart__content__list__content__item price">
                  {product.price}
                </div>

                <div className="cart__content__list__content__item quantity">
                  <input
                    type="number"
                    min={1}
                    max={99}
                    value={quantities[product.id] || 1}
                    onChange={(e) =>
                      handleQuantityChange(product.id, Number(e.target.value))
                    }
                    className="cart__content__list__content__item__quantity__input"
                  />
                </div>
                <div className="cart__content__list__content__item all">
                  {product.price * quantities[product.id]}
                </div>
              </div>
            ))}
          </div>

          <div className="cart__content__prices">
            <div className="cart__content__prices__info">
              <div className="cart__content__prices__info__item">
                <div className="price__text">СУММА</div>
                <div className="price__number">
                  {cart.reduce(
                    (sum, product) =>
                      sum + product.price * (quantities[product.id] || 1),
                    0,
                  )}
                </div>
              </div>
              {/* <div className="cart__content__prices__info__item"><div className="price__text">СКИДКА</div> <div className="price__number">- 0</div></div> */}
              <div className="cart__content__prices__info__item">
                <div className="price__text">ДОСТАВКА</div>{" "}
                <div className="price__number">{deliviery}</div>
              </div>
              <div className="cart__content__prices__info__item">
                <div className="price__text">К ОПЛАТЕ</div>{" "}
                <div className="price__number">
                  {deliviery +
                    cart.reduce(
                      (sum, product) =>
                        sum + product.price * (quantities[product.id] || 1),
                      0,
                    )}
                </div>
              </div>
            </div>
            <button className="redBtn" onClick={placingOrder}>
              ОФОРМИТЬ ЗАКАЗ
            </button>

            <div className="cart__content__prices__peyment">
              Способы оплаты: <br />
              - картой Visa и MasterCard <br />
              - наличными при получении <br />
            </div>
          </div>
        </div>

        <YouMayAlsoLike />
      </div>
      <Subscribe />

      <PlacingModal />
    </section>
  );
}
