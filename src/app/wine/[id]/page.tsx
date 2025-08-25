import Image from "next/image";
import "../../product/[id]/ItemDetails.scss";
import "../../../components/WineList/WineList.scss";
import wines from "../../../../public/mock/wines.json";
import { Drink } from "../../../types/Drinks.js";
import YouMayAlsoLike from "@/components/YouMayAlsoLike/YouMayAlsoLike";
import SommelierChoise from "@/components/SommelierChoise/SommelierChoise";
import Subscribe from "@/components/Subscribe/Subscribe";

interface ProductPageProps {
  params: { id: string };
}

export default function ItemDetails({ params }: ProductPageProps) {
  const product = wines.find((p) => p.id === params.id);

  return (
    <section className="itemDetails">
      <div className="container">
        <div className="itemDetails__flexWrapper">
          <div className="itemDetails__image">
            <div className="itemDetails__image__wine__blackDecor"></div>
            <div className="itemDetails__image__wine">
              <Image
                src={product.image || null}
                alt="product"
                width={100}
                height={300}
                className="itemDetails__image__wineImage"
              />
            </div>
          </div>

          <div className="itemDetails__content">
            <div className="itemDetails__content__overview">
              <h3 className="itemDetails__content__overview__title">
                {product.name}
              </h3>
              <div className="itemDetails__content__overview__price">
                <div className="itemDetails__content__overview__price__subtitle">
                  ЦЕНА ЗА 1 ШТ
                </div>
                <div>{product.price} $</div>
              </div>
            </div>

            <div className="itemDetails__content__buySection">
              <div className="itemDetails__content__buySection__info">
                <div>
                  {product.createdAt}/{product.liters} л
                </div>
                <div>
                  {product.country}/{product.city}
                </div>
              </div>
              <div className="itemDetails__content__buySection__addToCart">
                <input
                  type="number"
                  placeholder="1"
                  className="itemDetails__content__buySection__addToCart__input"
                />
                <button className="redBtn">В КОРЗИНУ</button>
              </div>
            </div>

            <div className="itemDetails__content__infoCols">
              <div className="itemDetails__content__infoCols__col">
                <div>
                  <p className="itemDetails__content__infoCols__col__title">
                    ГЕОГРАФИЯ:
                  </p>
                  <div>
                    {product.country} - {product.city}
                  </div>
                </div>
                <div>
                  <p className="itemDetails__content__infoCols__col__title">
                    КРЕПОСТЬ:
                  </p>
                  <div>{product.FORTRESS}</div>
                </div>
                <div>
                  <p className="itemDetails__content__infoCols__col__title">
                    ИМПОРТЕР:
                  </p>
                  <div>{product.IMPORTER}</div>
                </div>
              </div>

              <div className="itemDetails__content__infoCols__col">
                <div>
                  <p className="itemDetails__content__infoCols__col__title">
                    КЛАССИФИКАЦИЯ:
                  </p>
                  <div>{product.classification}</div>
                </div>
                <div>
                  <p className="itemDetails__content__infoCols__col__title">
                    САХАР:
                  </p>
                  <div>{product.SUGAR} г/л</div>
                </div>
                <div>
                  <p className="itemDetails__content__infoCols__col__title">
                    РЕЙТИНГ:
                  </p>
                  <div>{product.RATING}</div>
                </div>
              </div>

              <div className="itemDetails__content__infoCols__col">
                <div>
                  <p className="itemDetails__content__infoCols__col__title">
                    СОРТОВОЙ СОСТАВ:
                  </p>
                  <div>
                    Каберне Фран <br />
                    Каберне Совин. <br />
                    Мерло <br />
                    Пти Вердо <br />
                  </div>
                </div>
              </div>
            </div>

            <div className="itemDetails__content__description">
              <div className="itemDetails__content__description__part">
                <div className="itemDetails__content__description__part__title">
                  вкус, аромат:
                </div>
                <div className="itemDetails__content__description__part__content">
                  {product.taste}
                </div>
              </div>

              <div className="itemDetails__content__description__part">
                <div className="itemDetails__content__description__part__title">
                  Легенда:
                </div>
                <div className="itemDetails__content__description__part__content">
                  {product.legend}
                </div>
              </div>

              <div className="itemDetails__content__description__part">
                <div className="itemDetails__content__description__part__title">
                  винификация:
                </div>
                <div className="itemDetails__content__description__part__content">
                  {product.vinification}
                </div>
              </div>
            </div>
          </div>
        </div>

        <YouMayAlsoLike />
      </div>

      <SommelierChoise />
      <Subscribe />
    </section>
  );
}
