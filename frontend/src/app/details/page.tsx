import React from "react";
import "./details.scss";
import Image from "next/image";
import deliveryPeoples from "../../../public/aboutUsImage1.jpg";
import bokals from "../../../public/bokals.jpg";
import table from "../../../public/table.jpg";
import Offers from "../../components/Offers/Offers.tsx";
import Subscribe from "../../components/Subscribe/Subscribe.tsx";

export default function DetailsPage() {
  return (
    <section className="details">
      <div className="container">
        <div className="details__delivery">
          <div className="details__delivery__leftContent">
            <h3>Доставка по киеву быстро и удобно</h3>
            <div className="details__delivery__info">
              <div className="details__delivery__info__title">
                Время доставки:
              </div>

              <ul className="details__delivery__info__list">
                <li>КУРЬЕРНАЯ ДОСТАВКА С 10:00 ДО 22:00</li>
                <li>
                  Срочная доставка возможна в течение 1–2 часов после
                  подтверждения заказа.
                </li>
              </ul>

              <div className="details__delivery__info__title">
                Стоимость доставки:
              </div>

              <ul className="details__delivery__info__list">
                <li>Стандартная доставка от 100 грн</li>
                <li>бесплатная доставка при заказе от 10000 грн</li>
                <li>срочная доставка + 150 грн</li>
              </ul>
            </div>
          </div>

          <div className="details__delivery__rightContent">
            <Image src={deliveryPeoples} alt="Delivery" />
          </div>
        </div>

        <div className="details__conditions">
          <div className="details__conditions__leftContent">
            <h3>Условия:</h3>
            <div className="details__conditions__info">
              <div className="details__conditions__info__title">
                Условия заказа алкоголя:
              </div>

              <ul className="details__conditions__info__list">
                <li>Заказы принимаются только совершеннолетними (18+).</li>
                <li>
                  При получении курьер может попросить показать документ,
                  подтверждающий возраст.
                </li>
              </ul>

              <div className="details__conditions__info__title">
                Способы оплаты:
              </div>

              <ul className="details__conditions__info__list">
                <li>Наличными курьеру</li>
                <li>Карточкой онлайн на сайте.</li>
                <li>Apple Pay / Google Pay.</li>
              </ul>

              <div className="details__conditions__info__title">
                Дополнительно:
              </div>

              <ul className="details__conditions__info__list">
                <li>Возможность заказа на подарок (с красивой упаковкой).</li>
                <li>Доставка деликатесов и алкоголя.</li>
              </ul>
            </div>
          </div>

          <div className="details__conditions__rightContent">
            <div className="details__conditions__rightContent__images">
              <Image src={bokals} alt="Delivery" />
              <Image src={table} alt="Delivery" />
            </div>

            <div className="details__conditions__rightContent__faq">
              <div className="details__conditions__rightContent__faq__title">
                FAQ:
              </div>

              <ul>
                <li>Можно ли заказать после 22:00? ❌ Нет.</li>
                <li>
                  Можно ли выбрать точное время доставки? ✅ Да, при оформлении
                  заказа.
                </li>
                <li>
                  Можно ли вернуть товар? ✅ Только если бутылка не была открыта
                  и не имеет повреждений.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Offers />
      <Subscribe />
    </section>
  );
}
