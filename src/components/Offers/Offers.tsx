import './Offers.scss'

export default function Offers() {
    return (
        <section className="offers container">
            <a href="" className='offers__offer brandWine'>
                <p>НА ТЕРРИТОРИИ БОРДО</p>
                <h3>БРЕНДИРОВАНИЕ ВИН</h3>
            </a>

            <a href="" className='offers__offer conversation'>
                <p>ЧТО ДЕЛАЕТ НАС ОСОБЕННЫМИ?</p>
                <h3>БЕСЕДА С СОМЕЛЬЕ</h3>
            </a>

            <a href="" className='offers__offer signatureCocktail'>
                <p>НА ТЕРРИТОРИИ БОРДО</p>
                <h3>ФИРМЕННЫЕ КОКТЕЙЛИ</h3>
            </a>
        </section>
    );
}
