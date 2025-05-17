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

export default function Cart() {
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
        setQuantity(prev => Math.max(1, prev - 1));
    };

    const handleIncrement = () => {
        setQuantity(prev => Math.min(20, prev + 1));
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

                        <div className="cart__content__list__content">
                            <div className="cart__content__list__content__item product">
                                <div className='cart__content__list__content__item__image'>
                                    <div className='closeIcon'><IoMdCloseCircleOutline /></div>

                                    <Image src={wine} alt='wine' />
                                </div>

                                <div className="cart__content__list__content__item__wineInfo">
                                    <div>
                                        LE MEAL <br />
                                        HERMITAGE <br />
                                    </div>

                                    <p className="data">2010/0.75 л</p>
                                    <p className="country">франция/M.CHAPOUTIER</p>
                                </div>
                            </div>
                            <div className="cart__content__list__content__item price">
                                9 000
                            </div>

                            <div className="cart__content__list__content__item quantity">
                                <div onClick={handleDecrement} style={{ cursor: 'pointer' }}>-</div>
                                <p>{quantity}</p>
                                <div onClick={handleIncrement} style={{ cursor: 'pointer' }}>+</div>
                            </div>


                            <div className="cart__content__list__content__item all">
                                9 000
                            </div>
                        </div>

                        <div className="cart__content__list__content">
                            <div className="cart__content__list__content__item product">
                                <div className='cart__content__list__content__item__image'>
                                    <div className='closeIcon'><IoMdCloseCircleOutline /></div>

                                    <Image src={wine} alt='wine' />
                                </div>

                                <div className="cart__content__list__content__item__wineInfo">
                                    <div>
                                        LE MEAL <br />
                                        HERMITAGE <br />
                                    </div>

                                    <p className="data">2010/0.75 л</p>
                                    <p className="country">франция/M.CHAPOUTIER</p>
                                </div>
                            </div>
                            <div className="cart__content__list__content__item price">
                                9 000
                            </div>

                            <div className="cart__content__list__content__item quantity">
                                <div onClick={handleDecrement} style={{ cursor: 'pointer' }}>-</div>
                                <p>{quantity}</p>
                                <div onClick={handleIncrement} style={{ cursor: 'pointer' }}>+</div>
                            </div>


                            <div className="cart__content__list__content__item all">
                                9 000
                            </div>
                        </div>

                        <div className="cart__content__list__content">
                            <div className="cart__content__list__content__item product">
                                <div className='cart__content__list__content__item__image'>
                                    <div className='closeIcon'><IoMdCloseCircleOutline /></div>

                                    <Image src={wine} alt='wine' />
                                </div>

                                <div className="cart__content__list__content__item__wineInfo">
                                    <div>
                                        LE MEAL <br />
                                        HERMITAGE <br />
                                    </div>

                                    <p className="data">2010/0.75 л</p>
                                    <p className="country">франция/M.CHAPOUTIER</p>
                                </div>
                            </div>
                            <div className="cart__content__list__content__item price">
                                9 000
                            </div>

                            <div className="cart__content__list__content__item quantity">
                                <div onClick={handleDecrement} style={{ cursor: 'pointer' }}>-</div>
                                <p>{quantity}</p>
                                <div onClick={handleIncrement} style={{ cursor: 'pointer' }}>+</div>
                            </div>


                            <div className="cart__content__list__content__item all">
                                9 000
                            </div>
                        </div>
                    </div>
                </div>

                <YouMayAlsoLike />
            </div>

            <Subscribe />
        </section>
    )
}