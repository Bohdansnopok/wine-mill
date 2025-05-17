"use client"

import { useState } from 'react';
import { ArrowRight } from 'lucide-react'
import './cart.scss'
import Image from 'next/image'
import wine from '../../../public/smallWine.png'
import { IoMdCloseCircleOutline } from "react-icons/io";
import Link from "next/link";
import YouMayAlsoLike from '@/components/YouMayAlsoLike/YouMayAlsoLike';
import Subscribe from '@/components/Subscribe/Subscribe';
import SommelierChoise from '@/components/SommelierChoise/SommelierChoise';

// Пример массива товаров (можно заменить на реальные данные)
const initialProducts = [
    {
        id: 1,
        name: "LE MEAL",
        year: "2010/0.75 л",
        country: "франция/M.CHAPOUTIER",
        price: 9000,
        quantity: 1,
        image: wine,
    },
    {
        id: 2,
        name: "LE MEAL",
        year: "2010/0.75 л",
        country: "франция/M.CHAPOUTIER",
        price: 12000,
        quantity: 1,
        image: wine,
    },
    {
        id: 3,
        name: "LE MEAL",
        year: "2010/0.75 л",
        country: "франция/M.CHAPOUTIER",
        price: 3000,
        quantity: 1,
        image: wine,
    },
];

export default function Cart() {
    const [products, setProducts] = useState(initialProducts);

    const handleDecrement = (id: number) => {
        setProducts(products =>
            products.map(product =>
                product.id === id
                    ? { ...product, quantity: Math.max(1, product.quantity - 1) }
                    : product
            )
        );
    };

    const handleIncrement = (id: number) => {
        setProducts(products =>
            products.map(product =>
                product.id === id
                    ? { ...product, quantity: Math.min(20, product.quantity + 1) }
                    : product
            )
        );
    };

    return (
        <section className="cart">
            <div className="container">
                <div className="cart__top">
                    <div className="cart__top__pages">
                        <div className="cart__top__pages__page active">
                            МОЯ КОРЗИНА
                        </div>
                        <ArrowRight />
                        <div className="cart__top__pages__page">
                            ОФОРМЛЕНИЕ ЗАКАЗА
                        </div>
                        <ArrowRight />
                        <div className="cart__top__pages__page">
                            ЗАКАЗ ОФОРМЛЕН
                        </div>
                    </div>
                    <a href="" className="cart__top__countinue">
                        ПРОДОЛЖИТЬ ПОКУПКИ
                    </a>
                </div>

                <div className="cart__content">
                    <div className="cart__content__list">
                        <div className="cart__content__list__top">
                            <div className='cart__content__list__top__item product'>ТОВАР</div>
                            <div className="cart__content__list__top__item price">ЦЕНА</div>
                            <div className="cart__content__list__top__item quantity">КОЛИЧЕСТВО</div>
                            <div className="cart__content__list__top__item all">ВСЕГО</div>
                        </div>

                        {products.map(product => (
                            <div className="cart__content__list__content" key={product.id}>
                                <div className="cart__content__list__content__item product">
                                    <div className='cart__content__list__content__item__image'>
                                        <div className='closeIcon'><IoMdCloseCircleOutline /></div>
                                        <Image src={product.image} alt='wine' />
                                    </div>
                                    <div className="cart__content__list__content__item__wineInfo">
                                        <div>
                                            {product.name} <br />
                                            HERMITAGE <br />
                                        </div>
                                        <p className="data">{product.year}</p>
                                        <p className="country">{product.country}</p>
                                    </div>
                                </div>
                                <div className="cart__content__list__content__item price">
                                    {product.price.toLocaleString()}
                                </div>
                                <div className="cart__content__list__content__item quantity">
                                    <div onClick={() => handleDecrement(product.id)} style={{ cursor: 'pointer' }}>-</div>
                                    <p>{product.quantity}</p>
                                    <div onClick={() => handleIncrement(product.id)} style={{ cursor: 'pointer' }}>+</div>
                                </div>
                                <div className="cart__content__list__content__item all">
                                    {(product.price * product.quantity).toLocaleString()}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <YouMayAlsoLike />
            </div>
            <Subscribe />
        </section>
    )
}