"use client"

import './WiskeyCatalogFilter.scss'
import { useState } from "react";

const filters = [
    { title: "Страна", content: "France, Germany, Ukraine, Poland, Usa" },
    { title: "Регион", content: "Paris, Berlin, Kyiv, Warshaw, Washington" },
    { title: "Классификация", content: "class, class" },
    { title: "Сорт Винограда", content: "Blue, White" },
];

export default function WiskeyCatalogFilter() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="wiskeyCatalog__filter">
            <h1>Whiskey</h1>
            <div className="wiskeyCatalog__filter__price-filter">
                <div className="wiskeyCatalog__filter__price-filter__header">
                    <span className="wiskeyCatalog__filter__price-filter__label">Цена</span>
                    <div className="wiskeyCatalog__filter__checkout_top__minus">
                        -
                    </div>
                </div>

                <div className="wiskeyCatalog__filter__price-filter__inputs">
                    <div className='wiskeyCatalog__filter__price-filter__inputs__BorderWrapper'>
                        <input
                            type="number"
                            placeholder="от"
                            className="wiskeyCatalog__filter__price-filter__input"
                        />
                        <div className="wiskeyCatalog__filter__price-filter__separator" />
                        <input
                            type="number"
                            placeholder="до"
                            className="wiskeyCatalog__filter__price-filter__input"
                        />
                    </div>
                    <button className="wiskeyCatalog__filter__price-filter__ok-button">ОК</button>
                </div>
            </div>

            {filters.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div key={index} className="wiskeyCatalog__filter__accordion">
                        <div
                            className="wiskeyCatalog__filter__accordion_top"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span>{item.title}</span>
                            <div className="wiskeyCatalog__filter__checkout_top__minus">
                                {isOpen ? "-" : "+"}
                            </div>
                        </div>

                        {isOpen && (
                            <div className="wiskeyCatalog__filter__accordion_content">
                                {/* Тут буде контент */}
                                <p>{item.content}</p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}