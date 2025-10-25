"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./WineList.scss";
import wineImage from "../../../public/Wine.png";
import { useWines, Wine } from "@/hooks/useWines";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { toast } from "react-toastify";

type WineListProps = {
  limit?: number;
};

export default function WineList({ limit }: WineListProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [products, setProducts] = useState<any[]>([]);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:4000/products");
    const data = await res.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <aside className="wineCatalog">
      <div className="wineCatalog__list">
        <div className="dropdowns">
          <div className="dropdown">
            <select>
              <option>Бестселлеры A-Z</option>
              <option>Бестселлеры Z-A</option>
            </select>
          </div>

          <div className="wrapper">
            <div className="dropdown">
              <select>
                <option>Цена ↑</option>
                <option>Цена ↓</option>
              </select>
            </div>
            <div className="dropdown">
              <select>
                <option>Производитель A-Z</option>
                <option>Производитель Z-A</option>
              </select>
            </div>

            <div className="dropdown">
              <select>
                <option>Винтаж ↑</option>
                <option>Винтаж ↓</option>
              </select>
            </div>
          </div>
        </div>

        <div className="wineCatalog__list__cards">
          {products.map((wine: Wine) => (
            <Link
              href={`/wine/${wine.id}`}
              key={wine.id}
              className="wineCatalog__list__card"
            >
              <div className="wineCatalog__list__card__wine__blackDecor"></div>
              <div className="wineCatalog__list__card__wine">
                <Image
                  src={wineImage}
                  alt={wine.name}
                  height={349}
                  width={99}
                  className="wineCatalog__list__card__wineImage"
                />
              </div>
              <p className="wineCatalog__list__card__title">{wine.name}</p>

              <div className="wineCatalog__list__card__year">
                {wine.createdAt}/{wine.liters} л
              </div>

              <div className="wineCatalog__list__card__country">
                {wine.country}/M.{wine.city}
              </div>

              <div className="wineCatalog__list__card__priceAndCart">
                <div className="wineCatalog__list__card__price">
                  <p>ЦЕНА ЗА 1 ШТ</p>
                  <div>{wine.price} grn</div>
                </div>

                <button
                  className="redBtn"
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(wine);
                    toast.success("Товар добавлен в корзину");
                  }}
                >
                  В КОРЗИНУ
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
