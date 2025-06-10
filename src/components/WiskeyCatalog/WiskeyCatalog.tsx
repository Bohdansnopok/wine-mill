import Image from 'next/image';
import Wiskey from '../../../public/wiskey.png';
import '../DrinksFilter/DrinksFilter.scss';
import './WiskeyCatalog.scss'
import { CatalogDropdown } from '../CatalogDropdown/CatalogDropdown';

export default function DrinkCatalog() {
  return (
    <aside className="wiskeyCatalog">
      <div className="wiskeyCatalog__list">
        <CatalogDropdown />

        <div className="wiskeyCatalog__list__cards">
          <div className="wiskeyCatalog__list__card">
            <div className="wiskeyCatalog__list__card__wiskey__blackDecor"></div>
            <div className="wiskeyCatalog__list__card__wiskey">
              <Image src={Wiskey} alt='' className='wiskeyCatalog__list__card__wiskeyImage' />
            </div>
            <p className='wiskeyCatalog__list__card__title'>
              L’ERMITE <br />
              HERMITAGE <br />
            </p>
            <div className="wiskeyCatalog__list__card__year">
              2009/0.75 л
            </div>

            <div className="wiskeyCatalog__list__card__country">
              франция/M.CHAPOUTIER
            </div>

            <div className="wiskeyCatalog__list__card__priceAndCart">
              <div className="wiskeyCatalog__list__card__price">
                <p>ЦЕНА ЗА 1 ШТ</p>
                <div>90 000 р</div>
              </div>

              <button className='redBtn'>В КОРЗИНУ</button>
            </div>
          </div>
        </div>
      </div>
    </aside>

  );
}