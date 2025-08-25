import Image from "next/image";
import "./ItemDetails.scss";
import "../../../components/WineList/WineList.scss";
import whiskey from "../../../../public/mock/wiskey.json";
import sparkling from "../../../../public/mock/sparkling.json";
import cognac from "../../../../public/mock/сognac.json";
import armagnac from "../../../../public/mock/armagnac.json";
import coctails from "../../../../public/mock/cocktails.json";
import delicacies from "../../../../public/mock/delicacies.json";
import liquor from "../../../../public/mock/liquor.json";
import rum from "../../../../public/mock/rum.json";
import vodka from "../../../../public/mock/vodka.json";
import { Drink } from "../../../types/Drinks.js";
import YouMayAlsoLike from "@/components/YouMayAlsoLike/YouMayAlsoLike";
import SommelierChoise from "@/components/SommelierChoise/SommelierChoise";
import Subscribe from "@/components/Subscribe/Subscribe";

interface ProductPageProps {
  params: { id: string };
}

export default function ItemDetails({ params }: ProductPageProps) {
  const allDrinks: Drink[] = [...whiskey, ...sparkling, ...cognac, ...armagnac, ...coctails, ...delicacies, ...liquor, ...rum, ...vodka];
  const product = allDrinks.find((p) => p.id === params.id);

  return (
    <section className="itemDetails">
      <div className="container">
        <div className="itemDetails__flexWrapper">
          <div className="itemDetails__image">
            <div className="itemDetails__image__wine">
              <Image
                src={product.image || null}
                alt="product"
                width={200}
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
                <div>{product.price} grn</div>
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
                  <div>{product.FORTRESS} %</div>
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
