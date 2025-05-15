// app/not-found.tsx
import { ArrowDown } from 'lucide-react'
import './not-found.scss'
import Offers from '@/components/Offers/Offers'
import Subscribe from '@/components/Subscribe/Subscribe'

export default function NotFound() {
    return (
        <section className="notFound">
            <div className="container">
                <div className="notFound__content">
                    <div className="notFound__content__top">
                        <h1>Ooooops...</h1>
                        <div className="notFound__content__top__404">404</div>
                    </div>
                    <p className="notFound__content__text">
                        похоже, мы не можем найти <br />
                        нужную вам страницу <br />
                    </p>
                    <a href="#" className="notFound__content__link">
                        загляните сюда <ArrowDown />
                    </a>
                </div>

                <Offers />
                <Subscribe />
            </div>
        </section>
    )
}