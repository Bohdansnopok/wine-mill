"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./SpecialOfferSlider.scss";
import { usePlacingVisibilityStore } from "../../store/PlacingVisibilityStore";
import { useCartStore } from "@/store/cartStore";
// import Image from "next/image";
import { toast } from "react-toastify";
import { Drink } from '../../types/Drinks';

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const show = usePlacingVisibilityStore((state) => state.show);
  const addToCart = useCartStore(
    (state) => state.addToCart,
  );

  const [products, setProducts] = useState<Drink[]>([]);
  
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:4000/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + products.length) % products.length,
    );
  };

  return (
    <section className="slider container">
      {products.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === current ? "active" : ""}`}
        >
          {/* <Image
            src={slide.sliderImage}
            alt={slide.name}
            className="slide-image"
            width={600}
            height={400}
          /> */}
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
