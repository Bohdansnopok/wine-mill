"use client"
import './WineList.scss'
import { useState } from "react";

const filters = [
    { title: "Страна", content: "France, Germany, Ukraine, Poland, Usa" },
    { title: "Регион", content: "Paris, Berlin, Kyiv, Warshaw, Washington" },
    { title: "Классификация", content: "class, class" },
    { title: "Сорт Винограда", content: "Blue, White" },
];

export default function WineList() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };


    return (
        <aside className="wineCatalog">
            <div className="container">
                <div className="wineCatalog__filter">
                    <div className="wineCatalog__filter__checkout">
                        <div className="wineCatalog__filter__checkout_top">
                            <p>Цвет</p>
                            <div className="wineCatalog__filter__checkout_top__minus">
                                -
                            </div>
                        </div>

                        <div className="wineCatalog__filter__checkout__content">
                            <label className='wineCatalog__filter__checkout__label'>
                                <div className='wrapper'>
                                    <input type="checkbox" className='wineCatalog__filter__checkout__input' />
                                    <p className='wineCatalog__filter__checkout__title'>белое</p>
                                </div>
                                <div className="number">9</div>
                            </label>

                            <label className='wineCatalog__filter__checkout__label'>
                                <div className='wrapper'>
                                    <input type="checkbox" className='wineCatalog__filter__checkout__input' />
                                    <p className='wineCatalog__filter__checkout__title'>Красное</p>
                                </div>
                                <div className="number">21</div>
                            </label>


                            <label className='wineCatalog__filter__checkout__label'>
                                <div className='wrapper'>
                                    <input type="checkbox" className='wineCatalog__filter__checkout__input' />
                                    <p className='wineCatalog__filter__checkout__title'>Розовое</p>
                                </div>
                                <div className="number">13</div>
                            </label>

                            <label className='wineCatalog__filter__checkout__label'>
                                <div className='wrapper'>
                                    <input type="checkbox" className='wineCatalog__filter__checkout__input' />
                                    <p className='wineCatalog__filter__checkout__title'>Прочее</p>
                                </div>
                                <div className="number">9</div>
                            </label>
                        </div>
                    </div>

                    <div className="wineCatalog__filter__checkout">
                        <div className="wineCatalog__filter__checkout_top">
                            <p>Сладость</p>
                            <div className="wineCatalog__filter__checkout_top__minus">
                                -
                            </div>
                        </div>

                        <div className="wineCatalog__filter__checkout__content">
                            <label className='wineCatalog__filter__checkout__label'>
                                <div className='wrapper'>
                                    <input type="checkbox" className='wineCatalog__filter__checkout__input' />
                                    <p className='wineCatalog__filter__checkout__title'>Брют</p>
                                </div>
                                <div className="number">9</div>
                            </label>

                            <label className='wineCatalog__filter__checkout__label'>
                                <div className='wrapper'>
                                    <input type="checkbox" className='wineCatalog__filter__checkout__input' />
                                    <p className='wineCatalog__filter__checkout__title'>Десертное</p>
                                </div>
                                <div className="number">21</div>
                            </label>

                            <label className='wineCatalog__filter__checkout__label'>
                                <div className='wrapper'>
                                    <input type="checkbox" className='wineCatalog__filter__checkout__input' />
                                    <p className='wineCatalog__filter__checkout__title'>Крепленное</p>
                                </div>
                                <div className="number">21</div>
                            </label>

                            <label className='wineCatalog__filter__checkout__label'>
                                <div className='wrapper'>
                                    <input type="checkbox" className='wineCatalog__filter__checkout__input' />
                                    <p className='wineCatalog__filter__checkout__title'>Нон-Дозаж</p>
                                </div>
                                <div className="number">21</div>
                            </label>

                            <label className='wineCatalog__filter__checkout__label'>
                                <div className='wrapper'>
                                    <input type="checkbox" className='wineCatalog__filter__checkout__input' />
                                    <p className='wineCatalog__filter__checkout__title'>Полусладкое</p>
                                </div>
                                <div className="number">21</div>
                            </label>


                            <label className='wineCatalog__filter__checkout__label'>
                                <div className='wrapper'>
                                    <input type="checkbox" className='wineCatalog__filter__checkout__input' />
                                    <p className='wineCatalog__filter__checkout__title'>Полусухое</p>
                                </div>
                                <div className="number">13</div>
                            </label>

                            <label className='wineCatalog__filter__checkout__label'>
                                <div className='wrapper'>
                                    <input type="checkbox" className='wineCatalog__filter__checkout__input' />
                                    <p className='wineCatalog__filter__checkout__title'>Сухое</p>
                                </div>
                                <div className="number">9</div>
                            </label>
                        </div>

                        <div className="wineCatalog__filter__price-filter">
                            <div className="wineCatalog__filter__price-filter__header">
                                <span className="wineCatalog__filter__price-filter__label">Цена</span>
                                <div className="wineCatalog__filter__checkout_top__minus">
                                    -
                                </div>
                            </div>

                            <div className="wineCatalog__filter__price-filter__inputs">
                                <div className='wineCatalog__filter__price-filter__inputs__BorderWrapper'>
                                    <input
                                        type="number"
                                        placeholder="от"
                                        className="wineCatalog__filter__price-filter__input"
                                    />
                                    <div className="wineCatalog__filter__price-filter__separator" />
                                    <input
                                        type="number"
                                        placeholder="до"
                                        className="wineCatalog__filter__price-filter__input"
                                    />
                                </div>
                                <button className="wineCatalog__filter__price-filter__ok-button">ОК</button>
                            </div>
                        </div>

                        {filters.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div key={index} className="wineCatalog__filter__accordion">
                                    <div
                                        className="wineCatalog__filter__accordion_top"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span>{item.title}</span>
                                        <div className="wineCatalog__filter__checkout_top__minus">
                                            {isOpen ? "-" : "+"}
                                        </div>
                                    </div>

                                    {isOpen && (
                                        <div className="wineCatalog__filter__accordion_content">
                                            {/* Тут буде контент */}
                                            <p>{item.content}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="wineCatalog__list">
                    <div className="wineCatalog__list__card">
                        
                    </div>
                </div>
            </div>
        </aside>
    );
}
