import BannerSlider from "@/components/BannerSlider/SpecialOfferSlider";
import WineCatalogFilter from "@/components/WineCatalogFilter/WineCatalogFilter";
import Offers from "@/components/Offers/Offers";
import SommelierChoise from "@/components/SommelierChoise/SommelierChoise";
import Subscribe from "@/components/Subscribe/Subscribe";
import WineList from "@/components/WineList/WineList";
import Link from "next/link";
import SignUp from "@/components/SingUp/SingUp";
import SignIn from "@/components/SignIn/SignIn";

export default function Home() {

  return (
    <>
      <BannerSlider />
      <SignIn />
      <Offers />
      <section className="catalogWrapper">
        <div className="container">
          <div className="flexWrapper">
            <WineCatalogFilter />
            <div>
              <WineList limit={9} />
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
