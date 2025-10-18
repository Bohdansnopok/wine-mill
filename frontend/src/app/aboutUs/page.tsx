import Image from "next/image";
import image1 from '../../../public/aboutUsImage1.jpg'
import bokals from '../../../public/bokals.jpg'
import grape from '../../../public/grape.jpg'
import './aboutUs.scss'
import SommelierChoise from "@/components/SommelierChoise/SommelierChoise";

export default function Home() {

    return (
        <section className="aboutUs">
            <div className="container">
                <div className="aboutUs__part">
                    <div className="aboutUs__part__leftContent">
                        <h3 className="aboutUs__title">О НАС</h3>
                        <p className="aboutUs__part__leftContent__description">
                            Шардоне кажется самым противоречивым вином в мире: вы либо любите его, либо ненавидите. В 1995 году газета «The New York Times» опубликовала статью,
                            в которой репутация Шардоне ставилась под сомнение. Среди винных энтузиастов создавались целые «community», именуемые «A.B.C.», что означает «что угодно,
                            только не Шардоне».
                            <br />
                            <br />
                            Однако Шардоне по сей день остается краеугольным камнем винной культуры многих стран. Мы предлагаем глубже погрузиться в феномен этого сорта и разобраться,
                            как правильно выбрать вино на основе Шардоне.
                        </p>
                    </div>

                    <div className="aboutUs__part__rightContent">
                        <Image src={image1} alt="" />
                    </div>
                </div>

                <div className="aboutUs__part">
                    <div className="aboutUs__part__leftContent">
                        <h3 className="aboutUs__title">
                            ЧТО ДЕЛАЕТ НАС <br />
                            ОСОБЕННЫМИ? <br />
                        </h3>
                    </div>

                    <div className="aboutUs__part__rightContent">
                        <Image src={bokals} alt="" className="aboutUs__part__rightContent__image" />
                        <p className="aboutUs__part__rightContent__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a aliquet libero. Maecenas nec erat sit amet nisl malesuada convallis. Suspendisse luctus ante non mi ultrices scelerisque. Praesent quis dolor in sem varius interdum. Sed at leo est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque porttitor ornare massa. Donec maximus metus sit amet tellus elementum cursus. Donec dictum libero sed augue euismod ullamcorper. Mauris et tortor vel elit maximus ultrices in in neque. Mauris condimentum mattis neque, in iaculis dolor volutpat ut. Mauris ut rutrum nibh. Sed consequat aliquam odio. In consequat sed enim vitae tincidunt.
                            Quisque est erat, luctus non sollicitudin ut, facilisis quis purus. Nam dignissim velit ac massa elementum, sed ultricies orci pulvinar. Nulla tincidunt pellentesque urna a eleifend. Aliquam commodo est vel sollicitudin vestibulum. Suspendisse volutpat nisl velit. Aliquam dapibus commodo magna, ut scelerisque neque mollis sed. Sed scelerisque quis metus non blandit. Suspendisse sollicitudin enim quam, quis dictum lorem hendrerit pretium. Duis sagittis risus et tempus lobortis. Etiam vitae euismod leo, eu auctor est.
                        </p>
                    </div>
                </div>

                <section className="aboutUs__offers">
                    <a href="" className='aboutUs__offers__offer aboutUs__offers__brandWine'>
                        <p>НА ТЕРРИТОРИИ БОРДО</p>
                        <h3>БРЕНДИРОВАНИЕ ВИН</h3>
                    </a>

                    <a href="" className='aboutUs__offers__offer aboutUs__offers__conversation'>
                        <p>ЧТО ДЕЛАЕТ НАС ОСОБЕННЫМИ?</p>
                        <h3>БЕСЕДА С СОМЕЛЬЕ</h3>
                    </a>

                    <a href="" className='aboutUs__offers__offer aboutUs__offers__signatureCocktail'>
                        <p>НА ТЕРРИТОРИИ БОРДО</p>
                        <h3>ФИРМЕННЫЕ КОКТЕЙЛИ</h3>
                    </a>
                </section>

                <div className="aboutUs__part">
                    <div className="aboutUs__part__leftContent">
                        <h3 className="aboutUs__title">
                            Виноградники <br />
                            Barreau <br />
                        </h3>
                    </div>

                    <div className="aboutUs__part__rightContent">
                        <Image src={grape} alt="" className="aboutUs__part__rightContent__image" />
                        <p className="aboutUs__part__rightContent__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a aliquet libero. Maecenas nec erat sit amet nisl malesuada convallis. Suspendisse luctus ante non mi ultrices scelerisque. Praesent quis dolor in sem varius interdum. Sed at leo est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque porttitor ornare massa. Donec maximus metus sit amet tellus elementum cursus. Donec dictum libero sed augue euismod ullamcorper. Mauris et tortor vel elit maximus ultrices in in neque. Mauris condimentum mattis neque, in iaculis dolor volutpat ut. Mauris ut rutrum nibh. Sed consequat aliquam odio. In consequat sed enim vitae tincidunt.
                            Quisque est erat, luctus non sollicitudin ut, facilisis quis purus. Nam dignissim velit ac massa elementum, sed ultricies orci pulvinar. Nulla tincidunt pellentesque urna a eleifend. Aliquam commodo est vel sollicitudin vestibulum. Suspendisse volutpat nisl velit. Aliquam dapibus commodo magna, ut scelerisque neque mollis sed. Sed scelerisque quis metus non blandit. Suspendisse sollicitudin enim quam, quis dictum lorem hendrerit pretium. Duis sagittis risus et tempus lobortis. Etiam vitae euismod leo, eu auctor est.
                        </p>
                    </div>
                </div>

                <div className="aboutUs__part">
                    <div className="aboutUs__part__leftContent">
                        <h3 className="aboutUs__title">
                            Виноградники <br />
                            Barreau <br />
                        </h3>
                    </div>

                    <div className="aboutUs__part__rightContent">
                        <p className="aboutUs__part__rightContent__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a aliquet libero. Maecenas nec erat sit amet nisl malesuada convallis. Suspendisse luctus ante non mi ultrices scelerisque. Praesent quis dolor in sem varius interdum. Sed at leo est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque porttitor ornare massa. Donec maximus metus sit amet tellus elementum cursus. Donec dictum libero sed augue euismod ullamcorper. Mauris et tortor vel elit maximus ultrices in in neque. Mauris condimentum mattis neque, in iaculis dolor volutpat ut. Mauris ut rutrum nibh. Sed consequat aliquam odio. In consequat sed enim vitae tincidunt.
                            Quisque est erat, luctus non sollicitudin ut, facilisis quis purus. Nam dignissim velit ac massa elementum, sed ultricies orci pulvinar. Nulla tincidunt pellentesque urna a eleifend. Aliquam commodo est vel sollicitudin vestibulum. Suspendisse volutpat nisl velit. Aliquam dapibus commodo magna, ut scelerisque neque mollis sed. Sed scelerisque quis metus non blandit. Suspendisse sollicitudin enim quam, quis dictum lorem hendrerit pretium. Duis sagittis risus et tempus lobortis. Etiam vitae euismod leo, eu auctor est.
                        </p>
                    </div>
                </div>
 
                <SommelierChoise />
            </div>
        </section>
    );
}
