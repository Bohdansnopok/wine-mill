import BannerSlider from "@/components/BannerSlider/SpecialOfferSlider";
import WineCatalogFilter from "@/components/WineCatalogFilter/WineCatalogFilter";
import Offers from "@/components/Offers/Offers";
import SommelierChoise from "@/components/SommelierChoise/SommelierChoise";
import Subscribe from "@/components/Subscribe/Subscribe";
import WineList from "@/components/WineList/WineList";
import Link from "next/link";
import { LoginModal } from "@/components/LoginModal/LoginModal";

export default function Home() {

  return (
    <>
      <BannerSlider />
      <Offers />
      <LoginModal />
      <section className="catalogWrapper">
        <div className="container">
          <div className="flexWrapper">
            <WineCatalogFilter />
            <div>
              <WineList />
              <Link href="/catalog" className="catalogLinkOrButton">СМОТРЕТЬ ВСЕ</Link>
            </div>
          </div>

        </div>
      </section>
      <SommelierChoise />
      <Subscribe />
    </>
  );
}
