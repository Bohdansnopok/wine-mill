import Link from "next/link";
import "./Footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container footer">
      <div className="footer__flexWrapper">
        <div className="footer__column">
          <div className="footer__column__title">Shop</div>
          <Link href="/catalog">History</Link>
          <Link href="/catalog">Michel</Link>
          <Link href="/catalog">Values</Link>
          <Link href="/catalog">Biodynamics</Link>
          <p className="copyright">© {year} WineMill. Все права защищены</p>
        </div>

        <div className="footer__columns">
          <div className="footer__column">
            <div className="footer__column__title">Shop</div>
            <Link href="/catalog">All Wines</Link>
            <a href="#">Single vineyard selection</a>
            <Link href="/privacyPolice" className="copyright copyright_link">
              Privacy police
            </Link>
          </div>

          <div className="footer__column">
            <div className="footer__column__title">The Wines</div>
            <a href="#">Hermitage in 3D</a>
            <a href="#">The soul of M. CHAPOUTIER</a>
          </div>

          <div className="footer__column">
            <div className="footer__column__title">Wine Tourism</div>
            <Link href="/wineTasting">Wine tasting services and visits</Link>
            <Link href="/bikeRide">Bike ride</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
