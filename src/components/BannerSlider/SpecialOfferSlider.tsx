"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./SpecialOfferSlider.scss";
import { usePlacingVisibilityStore } from "../../store/PlacingVisibilityStore";
import winesData from "../../../public/mock/wines.json";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import { toast } from "react-toastify";

export default function BannerSlider() {
  const specialOffers = winesData.filter((wine) => wine.specialOffer === true);
  const [current, setCurrent] = useState(0);
  const show = usePlacingVisibilityStore((state) => state.show);
  const addToCart = useCartStore(
    (state) => state.addToCart,
  );

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % specialOffers.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + specialOffers.length) % specialOffers.length,
    );
  };

  return (
    <section className="slider container">
      {specialOffers.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <Image
            src={slide.sliderImage}
            alt={slide.name}
            className="slide-image"
            width={600}
            height={400}
          />
          <div className="leftBlock">
            <h1>Special offer</h1>
            <div className="slide-title">{slide.name}</div>
            <button onClick={show}>ЗАКАЗАТЬ ВИНО</button>
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(slide);
                toast.success("Товар добавлен в корзину");
              }}
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      ))}

      <button onClick={prevSlide} className="nav-button prev">
        <ArrowLeft className="icon" />
      </button>
      <button onClick={nextSlide} className="nav-button next">
        <ArrowRight className="icon" />
      </button>
    </section>
  );
}
