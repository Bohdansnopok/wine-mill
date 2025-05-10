import './blog.scss'

export default function Blog() {

    return (
        <section className='blog'>
            <div className="container">
                <h3 className='blog__title'>
                    статьи о вине и  <br />
                    крепких напитках <br />
                </h3>

                <div className="blog__subtitle">
                    Просто и понятно о винных стилях, регионах,
                    сортах, о том, как выбрать вино, с чем его пить и из <br />
                    какого бокала,о типах и особенностях виски, о разнице между игристым
                    вином и шампанским. <br />
                </div>

                <div className="blog__content">
                    <div className="blog__content__link granashWine">
                        <h1 className="blog__conten__link__title">Wine</h1>
                        <p>
                            ВИНА ИЗ ГРЕНАША <br />
                            СРАВНЕНИЕ СТИЛЕЙ <br />
                        </p>
                        <a href="#">
                            ЧИТАТЬ СТАТЬЮ
                        </a>
                    </div>

                    <div className="blog__content__link miniGrouer">
                        <h1 className="blog__conten__link__title">Wine</h1>
                        <p>
                            МАЛЕНЬКИЕ ГРОУЕРЫ <br />
                            ВНУТРИ БОЛЬШОЙ ШАМПАНИ <br />
                        </p>
                        <a href="#">
                            ЧИТАТЬ СТАТЬЮ
                        </a>
                    </div>

                    <div className="blog__content__link newGen">
                        <h1 className="blog__conten__link__title">Wine</h1>
                        <p>
                            НОВОЕ ПОКОЛЕНИЕ ВИНОДЕЛОВ: <br />
                            НА ЧТО ОЖИДАТЬ? <br />
                        </p>
                        <a href="#">
                            ЧИТАТЬ СТАТЬЮ
                        </a>
                    </div>

                    <div className="blog__content__link armanyak">
                        <h1 className="blog__conten__link__title">Wine</h1>
                        <p>
                            ИНВЕСТИЦИИ В АРМАНЬЯК: <br />
                            СТОИТ ЛИ?<br />
                        </p>
                        <a href="#">
                            ЧИТАТЬ СТАТЬЮ
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
