
import Image from "next/image";
import wine from '../../../public/Wine.png'
import './ItemDetails.scss';
import '../../components/WineList/WineList.scss'
import Link from "next/link";
import SommelierChoise from "@/components/SommelierChoise/SommelierChoise";
import Subscribe from "@/components/Subscribe/Subscribe";
import YouMayAlsoLike from "@/components/YouMayAlsoLike/YouMayAlsoLike";

export default function ItemDetails() {

    return (
        <section className="itemDetails">
            <div className="container">
                <div className="itemDetails__flexWrapper">
                    <div className="itemDetails__image">
                        <div className="itemDetails__image__wine__blackDecor"></div>
                        <div className="itemDetails__image__wine"><Image src={wine} alt='' className='itemDetails__image__wineImage' /></div>
                    </div>

                    <div className="itemDetails__content">
                        <div className="itemDetails__content__overview">
                            <h3 className="itemDetails__content__overview__title">
                                CHATEAU <br />
                                HAUT-BRION <br />
                            </h3>
                            <div className="itemDetails__content__overview__price">
                                <div className="itemDetails__content__overview__price__subtitle">
                                    ЦЕНА ЗА 1 ШТ
                                </div>
                                <div>90 000 $</div>
                            </div>
                        </div>

                        <div className="itemDetails__content__buySection">
                            <div className="itemDetails__content__buySection__info">
                                <div>2009/0.75 л</div>
                                <div>франция/HAUT-BRION</div>
                            </div>
                            <div className="itemDetails__content__buySection__addToCart">
                                <input type="number" placeholder="1" className="itemDetails__content__buySection__addToCart__input" />
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
                                        Франция - Бордо - Пессак-Леоньян
                                    </div>
                                </div>
                                <div>
                                    <p className="itemDetails__content__infoCols__col__title">
                                        КРЕПОСТЬ:
                                    </p>
                                    <div>
                                        14,5%
                                    </div>
                                </div>
                                <div>
                                    <p className="itemDetails__content__infoCols__col__title">
                                        ИМПОРТЕР:
                                    </p>
                                    <div>
                                        SIMPLE WINE
                                    </div>
                                </div>
                            </div>

                            <div className="itemDetails__content__infoCols__col">
                                <div>
                                    <p className="itemDetails__content__infoCols__col__title">
                                        КЛАССИФИКАЦИЯ:
                                    </p>
                                    <div>
                                        1-er gcc
                                    </div>
                                </div>
                                <div>
                                    <p className="itemDetails__content__infoCols__col__title">
                                        САХАР:
                                    </p>
                                    <div>
                                        0,1 г/л
                                    </div>
                                </div>
                                <div>
                                    <p className="itemDetails__content__infoCols__col__title">
                                        РЕЙТИНГ:
                                    </p>
                                    <div>
                                        rp 95
                                    </div>
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
                                    Chateau Haut-Brion – относится к великим винам современности.
                                    Производимое с 1533 года, оно в какой-то степени может
                                    считаться «отцом всех Премьер Крю Классе». Это самое
                                    старое Гран Крю Бордо, создатель нового стиля вин в
                                    17 веке. Изюминка Haut-Brion – чрезвычайная щедрость
                                    и концентрация, подобная ароматическая настойчивость
                                    присуща лишь самым благородным винам. Букет сдержанный,
                                    раскрывается неспешно и изящно тонами ягод – ежевики,
                                    слив, шелковицы и смородины, сменяясь минеральными,
                                    древесными, пряными и копчеными нотками. Вкус столь же
                                    замечательно многослойный, величественный, богат танинами,
                                    однако полон изящества и утонченности. Начиная со средины
                                    дегустации, мощность вина раскрывается полностью,
                                    кульминируя в исключительно длительном послевкусии.
                                    Перед нами истинный шедевр, Wine Advocate оценил вино
                                    в 100 баллов. Рекомендуется пить в период 2020-2054 года.
                                </div>
                            </div>

                            <div className="itemDetails__content__description__part">
                                <div className="itemDetails__content__description__part__title">
                                    Легенда:
                                </div>
                                <div className="itemDetails__content__description__part__content">
                                    Виноградник Шато находится в коммуне Пессак-Леоньян, и
                                    является частью одноименного апелласьона, расположенного
                                    на севере винодельческого региона Грав в Бордо. Терруар
                                    сформированный двумя крупными гравийными грядами гюнцского
                                    периода (гюнцом называется ледниковая эпоха первого
                                    четвертичного периода), выдается на 12-15 метров над
                                    уровнем дна соседних водоемов. Гравием называется галечник
                                    небольшого размера, сформированный различными
                                    разновидностями кварца: для Шато О-Брион этот галечник
                                    является настоящим драгоценным камнем. Две речушки –
                                    Пегю на севере и Серпан на юге – ограничивают эту
                                    обширную гравийную террасу под названием О-Брион,
                                    которая упоминается на старинных картах региона и
                                    в нотариальных актах уже с начала 15 века. Подпочва
                                    терруара – суглинок. Площадь виноградника – 51 гектара.
                                    48 из них засажены сортами красного винограда
                                    (Мерло, Каберне Совиньон, Каберне Фран и Пти Вердо)
                                    и около 3 – сортами белого винограда
                                    (Семильон и Совиньон Блан). Поместье Шато
                                    О-Брион было основано Жаном де Понтаком, и
                                    производило вина уже с 1533 года, что делает
                                    его старейшим хозяйством региона Бордо. Красное
                                    вино Шато О-Брион воплощает в себе пятивековую
                                    традицию виноделия и является неотъемлемой частью
                                    мировой истории вина. В 1660 году вино Haut Brion,
                                    под его сегодняшним названием, подавалось к столу
                                    короля Англии Карла Второго, что по всей видимости
                                    делает О-БРИОН старейшим элитным брендом во всем мире.
                                    Благодаря применению, еще в те далекие времена,
                                    новых способов производства и выдержки, это вино
                                    стало великим предшественником всех нынешних красных вин
                                    предназначенных для длительного хранения. В 1855 году
                                    о-брион было возведено в ранг Премьер Крю Классе красных
                                    вин Жиронды. Только три других бордоских вина были
                                    удостоены такой же высочайшей оценки качества в
                                    классификации, которая до сих пор остается актуальной.
                                </div>
                            </div>

                            <div className="itemDetails__content__description__part">
                                <div className="itemDetails__content__description__part__title">
                                    винификация:
                                </div>
                                <div className="itemDetails__content__description__part__content">
                                    Виноград поступает на винодельню, где после сортировки,
                                    ферментации и прессования сок полученный самотеком отделяется
                                    от мезги, которая также прессуется для получения
                                    «вэн де пресс». Вину дают отдохнуть, далее следует
                                    яблочно-молочное брожение и асамбляж путем определения
                                    наилучшей возможной комбинации различных сортов. Выдержка
                                    проходит в дубовых бочках на протяжении 18-22 месяцев,
                                    80 % из которых новые, с периодическим снятием с осадка.
                                    После выдержки в баррелях вино переливают в чаны перед
                                    бутылированием.
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
