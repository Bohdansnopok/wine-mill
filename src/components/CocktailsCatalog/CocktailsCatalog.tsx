"use client";

import Image from 'next/image';
import Wiskey from '../../../public/wiskey.png';
import '../DrinksFilter/DrinksFilter.scss';
import '../../app/Catalogs.scss'
import { CatalogDropdown } from '../CatalogDropdown/CatalogDropdown';
import React from 'react';
import { Drink } from '@/types/Drinks';
import { useCocktails } from '@/hooks/useCocktails';

const CocktailsCatalog: React.FC = () => {
  const { cocktailsDrinks, isLoading, error } = useCocktails();

  return (
    <aside className="catalog">
      <div className="catalog__list">
        <CatalogDropdown />

        <div className="catalog__list__cards">
          {isLoading && <p className='isLoading'>Завантаження...</p>}
          {error && <p className='isLoading'>Ой... Виникла помилка..</p>}

          {!isLoading && !error && cocktailsDrinks.length > 0 ? (
            cocktailsDrinks.map((drink: Drink) => (
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

export default CocktailsCatalog;