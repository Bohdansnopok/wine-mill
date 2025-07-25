"use client";

import Image from 'next/image';
import '../DrinksFilter/DrinksFilter.scss';
import '../../app/Catalogs.scss'
import { CatalogDropdown } from '../CatalogDropdown/CatalogDropdown';
import React, { useState } from 'react';
import { useWhiskey } from '../../hooks/useWiskey';
import { Drink } from '@/types/Drinks';

const WiskeyCatalog: React.FC = () => {
  const { whiskeyDrinks, isLoading, error } = useWhiskey();

  return (
    <aside className="catalog">
      <div className="catalog__list">
        <CatalogDropdown />

        <div className="catalog__list__cards">
          {isLoading && <p className='isLoading'>Завантаження...</p>}
          {error && <p className='isLoading'>Ой... Виникла помилка..</p>}

          {!isLoading && !error && whiskeyDrinks.length > 0 ? (
            whiskeyDrinks.map((drink: Drink) => (
              <div key={drink.id} className="catalog__list__card">
                <div className="catalog__list__card__product__blackDecor"></div>
                <div className="catalog__list__card__product">
                  <Image src={drink.image} alt='' width={133} height={320} className='catalog__list__card__image' />
                </div>
                <p className='catalog__list__card__title'>
                  {drink.name}
                </p>
                <div className="catalog__list__card__year">
                  {drink.year}/{drink.litres}л
                </div>

                <div className="catalog__list__card__country">
                  {drink.country}/M.{drink.city}
                </div>

                <div className="catalog__list__card__priceAndCart">
                  <div className="catalog__list__card__price">
                    <p>ЦЕНА ЗА 1 ШТ</p>
                    <div>{drink.price} grn</div>
                  </div>

                  <button className='redBtn'>В КОРЗИНУ</button>
                </div>
              </div>
            ))
          ) : (
            !isLoading && !error && (
              <p className="isLoading">Немає даних.</p>
            )
          )}
        </div>
      </div>
    </aside>

  );
}

export default WiskeyCatalog;