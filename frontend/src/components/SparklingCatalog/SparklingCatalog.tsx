"use client";

import Image from "next/image";
import Wiskey from "../../../public/wiskey.png";
import "../DrinksFilter/DrinksFilter.scss";
import "../../app/Catalogs.scss";
import { CatalogDropdown } from "../CatalogDropdown/CatalogDropdown";
import React, { useEffect } from "react";
import { useSparkling } from "../../hooks/useSparkling";
import { Drink } from "@/types/Drinks.js";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { toast } from "react-toastify";

const SparklingCatalog: React.FC = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [sparklings, setSparklings] = React.useState<Drink[]>([]);

  const fetchSparklings = async () => {
    const res = await fetch("http://localhost:4000/sparklings")
    const data = await res.json()
    setSparklings(data)
  }

  useEffect(()=> {
    fetchSparklings()
  }, [])

  return (
    <aside className="catalog">
      <div className="catalog__list">
        <CatalogDropdown />

        <div className="catalog__list__cards">

          {sparklings.length > 0
            ? sparklings.map((drink: Drink) => (
                <Link
                  href={`/product/${drink.id}`}
                  key={drink.id}
                  className="catalog__list__card"
                >
                  <div className="catalog__list__card__product">
                    <Image
                      src={drink.image}
                      alt=""
                      width={233}
                      height={320}
                      className="catalog__list__card__image"
                    />
                  </div>
                  <p className="catalog__list__card__title">{drink.name}</p>
                  <div className="catalog__list__card__year">
                    {drink.createdAt}/{drink.liters}л
                  </div>

                  <div className="catalog__list__card__country">
                    {drink.country}/M.{drink.city}
                  </div>

                  <div className="catalog__list__card__priceAndCart">
                    <div className="catalog__list__card__price">
                      <p>ЦЕНА ЗА 1 ШТ</p>
                      <div>{drink.price} grn</div>
                    </div>

                    <button
                      className="redBtn"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart({
                          ...drink,
                          createdAt: drink.year || "",
                          liters: drink.litres || 0,
                        });

                        toast.success("Товар добавлен в корзину");
                      }}
                    >
                      В КОРЗИНУ
                    </button>
                  </div>
                </Link>
              ))
            : <p className="isLoading">Немає даних.</p>}
        </div>
      </div>
    </aside>
  );
};

export default SparklingCatalog;
