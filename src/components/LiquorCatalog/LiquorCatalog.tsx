"use client";

import Image from 'next/image';
import Wiskey from '../../../public/wiskey.png';
import '../DrinksFilter/DrinksFilter.scss';
import '../../app/Catalogs.scss'
import { CatalogDropdown } from '../CatalogDropdown/CatalogDropdown';
import React from 'react';
import { Drink } from '@/types/Drinks';
import { useLiquor } from '@/hooks/useLiquor';
import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';

const LiquorCatalog: React.FC = () => {
  const { liquorDrinks, isLoading, error } = useLiquor();
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <aside className="catalog">
      <div className="catalog__list">
        <CatalogDropdown />

        <div className="catalog__list__cards">
          {isLoading && <p className='isLoading'>Завантаження...</p>}
          {error && <p className='isLoading'>Ой... Виникла помилка..</p>}

          {!isLoading && !error && liquorDrinks.length > 0 ? (
            liquorDrinks.map((drink: Drink) => (
              <Link href={`/product/${drink.id}`} key={drink.id} className="catalog__list__card">
                <div className="catalog__list__card__product">
                  <Image src={drink.image} alt='' width={133} height={320} className='catalog__list__card__image' />
                </div>
                <p className='catalog__list__card__title'>
                  {drink.name}
                </p>
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

                  <button className='redBtn' onClick={() => addToCart({
                    ...drink,
                    createdAt: drink.year || '',
                    liters: drink.litres || 0,
                  })}>В КОРЗИНУ</button>
                </div>
              </Link>
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

export default LiquorCatalog;