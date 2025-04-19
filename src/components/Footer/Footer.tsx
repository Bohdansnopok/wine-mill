import './Footer.scss'

export default function Footer() {
    return (
        <footer className='container footer'>
            <div className="footer__flexWrapper">
                <div className='footer__column'>
                    <div className="footer__column__title">Shop</div>
                    <a href="#">History</a>
                    <a href="#">Michel</a>
                    <a href="#">Values</a>
                    <a href="#">Biodynamics</a>
                    <p className='copyright'>2021 winemill</p>
                </div>


                <div className="footer__columns">
                    <div className='footer__column'>
                        <div className="footer__column__title">Shop</div>
                        <a href="#">All Wines</a>
                        <a href="#">Single vineyard selection</a>
                        <a href="#" className='copyright copyright_link'>Privacy police</a>
                    </div>

                    <div className='footer__column'>
                        <div className="footer__column__title">The Wines</div>
                        <a href="#">Hermitage in 3D</a>
                        <a href="#">The soul of M. CHAPOUTIER</a>
                    </div>

                    <div className='footer__column'>
                        <div className="footer__column__title">Wine Tourism</div>
                        <a href="#">Wine tasting services and visits</a>
                        <a href="#">Bike ride</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
