"use client";

import Image from 'next/image';
import React from "react";

import './WineList.scss'
import wine from '../../../public/Wine.png'
import { useWines, Wine } from '@/hooks/useWines';
import { useCartStore } from '@/store/cartStore';

type WineListProps = {
  limit?: number;
};

export default function WineList({ limit }: WineListProps) {
  const { wines, isLoading, error } = useWines();
    const addToCart = useCartStore((state) => state.addToCart);


    if (isLoading) return <p>Завантаження...</p>;

    const displayedWines = limit ? wines.slice(0, limit) : wines;

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
                    {displayedWines.map((wine: Wine) => (
                        <div key={wine.id} className="wineCatalog__list__card">
                            <div className="wineCatalog__list__card__wine__blackDecor"></div>
                            <div className="wineCatalog__list__card__wine"><Image src={wine.image} alt={wine.name} height={349} width={99} className='wineCatalog__list__card__wineImage' /></div>
                            <p className='wineCatalog__list__card__title'>
                                {wine.name}
                            </p>

                            <div className="wineCatalog__list__card__year">
                                {wine.createdAt}/{wine.liters} л
                            </div>

                            <div className="wineCatalog__list__card__country">
                                {wine.country}/M.{wine.city}
                            </div>

                            <div className="wineCatalog__list__card__priceAndCart">
                                <div className="wineCatalog__list__card__price">
                                    <p>ЦЕНА ЗА 1 ШТ</p>
                                    <div>{wine.price}</div>
                                </div>

                                <button className='redBtn' onClick={() => addToCart(wine)}>В КОРЗИНУ</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
}