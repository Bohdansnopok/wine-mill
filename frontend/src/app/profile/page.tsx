import Image from 'next/image'
import './profile.scss'
import avatar from '../../../public/avatar.svg'
import wine from '../../../public/Wine.png'

export default function ProfilePage() {
    return (
        <section className="profile">
            <div className="container">
                <h1>Profile</h1>
                <div className="profile__info">
                    <Image src={avatar} alt='' className='profile__info__avatar' />
                    <h3>Bohdan Blak</h3>
                </div>
                <div className="profile__yourOrders">
                    <h3>Вашы заказы</h3>
                    <div className="profile__yourOrders__cards">
                        <div className="profile__yourOrders__card">
                            <div className="profile__yourOrders__card__wine__blackDecor"></div>
                            <div className="profile__yourOrders__card__wine"><Image src={wine} alt='' height={349} width={99} className='profile__yourOrders__card__wineImage' /></div>
                            <p className='profile__yourOrders__card__title'>
                                L’ERMITE
                                HERMITAGE
                            </p>

                            <div className="profile__yourOrders__card__year">
                                2009/0.75 л
                            </div>

                            <div className="profile__yourOrders__card__country">
                                франция/M.CHAPOUTIER
                            </div>

                            <div className="profile__yourOrders__card__priceAndCart">
                                <div className="profile__yourOrders__card__price">
                                    <p>ЦЕНА ЗА 1 ШТ</p>
                                    <div>15000</div>
                                </div>

                                <button className='redBtn'>В КОРЗИНУ</button>
                            </div>
                        </div>

                        <div className="profile__yourOrders__card">
                            <div className="profile__yourOrders__card__wine__blackDecor"></div>
                            <div className="profile__yourOrders__card__wine"><Image src={wine} alt='' height={349} width={99} className='profile__yourOrders__card__wineImage' /></div>
                            <p className='profile__yourOrders__card__title'>
                                L’ERMITE
                                HERMITAGE
                            </p>

                            <div className="profile__yourOrders__card__year">
                                2009/0.75 л
                            </div>

                            <div className="profile__yourOrders__card__country">
                                франция/M.CHAPOUTIER
                            </div>

                            <div className="profile__yourOrders__card__priceAndCart">
                                <div className="profile__yourOrders__card__price">
                                    <p>ЦЕНА ЗА 1 ШТ</p>
                                    <div>15000</div>
                                </div>

                                <button className='redBtn'>В КОРЗИНУ</button>
                            </div>
                        </div>

                        <div className="profile__yourOrders__card">
                            <div className="profile__yourOrders__card__wine__blackDecor"></div>
                            <div className="profile__yourOrders__card__wine"><Image src={wine} alt='' height={349} width={99} className='profile__yourOrders__card__wineImage' /></div>
                            <p className='profile__yourOrders__card__title'>
                                L’ERMITE
                                HERMITAGE
                            </p>

                            <div className="profile__yourOrders__card__year">
                                2009/0.75 л
                            </div>

                            <div className="profile__yourOrders__card__country">
                                франция/M.CHAPOUTIER
                            </div>

                            <div className="profile__yourOrders__card__priceAndCart">
                                <div className="profile__yourOrders__card__price">
                                    <p>ЦЕНА ЗА 1 ШТ</p>
                                    <div>15000</div>
                                </div>

                                <button className='redBtn'>В КОРЗИНУ</button>
                            </div>
                        </div>
                    </div>
                    <button className='profile__yourOrders__seeAll'>Смотреть все</button>
                </div>

            </div>
        </section>
    )
}