import BannerSlider from "@/components/BannerSlider/SpecialOfferSlider";
import Offers from "@/components/Offers/Offers";
import SommelierChoise from "@/components/SommelierChoise/SommelierChoise";
import Subscribe from "@/components/Subscribe/Subscribe";


export default function Home() {
  return (
    <>
      <BannerSlider />
      <Offers />
      <SommelierChoise />
      <Subscribe />
    </>
  );
}
