"use client"

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './SpecialOfferSlider.scss'

const slides = [
    {
        id: 1,
        image: '/pauillacWine.jpg',
        title: 'Pichon Longueville Comtesse de Lalande',
    },
    {
        id: 2,
        image: '/pauillacWine.jpg',
        title: 'Chateau Margaux',
    },
];

export default function BannerSlider() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="slider container">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`slide ${index === current ? 'active' : ''}`}
                >
                    <img src={slide.image} alt={slide.title} className="slide-image" />
                    <div className='leftBlock'>
                        <h1>Special offer</h1>
                        <div className="slide-title">
                            {slide.title}
                        </div>
                        <a href="#">ЗАКАЗАТЬ ВИНО</a>
                    </div>
                </div>
            ))}

            <button onClick={prevSlide} className="nav-button prev">
                <ArrowLeft className="icon" />
            </button>
            <button onClick={nextSlide} className="nav-button next">
                <ArrowRight className="icon" />
            </button>
        </section>
    );
}
