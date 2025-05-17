
import Image from "next/image";
import wine from '../../../public/Wine.png'
import '../../app/itemDetails/ItemDetails.scss';
import '../../components/WineList/WineList.scss'
import Link from "next/link";

export default function youMayAlsoLike() {
    return (
        <div className="youMayAlsoLike">
            <h3 className="youMayAlsoLike__title">ВАМ ТАКЖЕ ПОНРАВИТСЯ...</h3>

            <div className="wineCatalog__list__cards">
                <div className="wineCatalog__list__card">
                    <div className="wineCatalog__list__card__wine__blackDecor"></div>
                    <div className="wineCatalog__list__card__wine"><Image src={wine} alt='' className='wineCatalog__list__card__wineImage' /></div>
                    <p className='wineCatalog__list__card__title'>
                        L’ERMITE <br />
                        HERMITAGE <br />
                    </p>

                    <div className="wineCatalog__list__card__year">
                        2009/0.75 л
                    </div>

                    <div className="wineCatalog__list__card__country">
                        франция/M.CHAPOUTIER
                    </div>

                    <div className="wineCatalog__list__card__priceAndCart">
                        <div className="wineCatalog__list__card__price">
                            <p>ЦЕНА ЗА 1 ШТ</p>
                            <div>90 000 р</div>
                        </div>

                        <button className='redBtn'>В КОРЗИНУ</button>
                    </div>
                </div>

                <div className="wineCatalog__list__card">
                    <div className="wineCatalog__list__card__wine__blackDecor"></div>
                    <div className="wineCatalog__list__card__wine"><Image src={wine} alt='' className='wineCatalog__list__card__wineImage' /></div>
                    <p className='wineCatalog__list__card__title'>
                        L’ERMITE <br />
                        HERMITAGE <br />
                    </p>

                    <div className="wineCatalog__list__card__year">
                        2009/0.75 л
                    </div>

                    <div className="wineCatalog__list__card__country">
                        франция/M.CHAPOUTIER
                    </div>

                    <div className="wineCatalog__list__card__priceAndCart">
                        <div className="wineCatalog__list__card__price">
                            <p>ЦЕНА ЗА 1 ШТ</p>
                            <div>90 000 р</div>
                        </div>

                        <button className='redBtn'>В КОРЗИНУ</button>
                    </div>
                </div>

                <div className="wineCatalog__list__card">
                    <div className="wineCatalog__list__card__wine__blackDecor"></div>
                    <div className="wineCatalog__list__card__wine"><Image src={wine} alt='' className='wineCatalog__list__card__wineImage' /></div>
                    <p className='wineCatalog__list__card__title'>
                        L’ERMITE <br />
                        HERMITAGE <br />
                    </p>

                    <div className="wineCatalog__list__card__year">
                        2009/0.75 л
                    </div>

                    <div className="wineCatalog__list__card__country">
                        франция/M.CHAPOUTIER
                    </div>

                    <div className="wineCatalog__list__card__priceAndCart">
                        <div className="wineCatalog__list__card__price">
                            <p>ЦЕНА ЗА 1 ШТ</p>
                            <div>90 000 р</div>
                        </div>

                        <button className='redBtn'>В КОРЗИНУ</button>
                    </div>
                </div>
            </div>

            <Link href="/catalog" className="catalogLinkOrButton">СМОТРЕТЬ ВСЕ</Link>
        </div>
    )
}