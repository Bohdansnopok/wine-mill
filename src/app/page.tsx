import BannerSlider from "@/components/BannerSlider/SpecialOfferSlider";
import Offers from "@/components/Offers/Offers";
import SommelierChoise from "@/components/SommelierChoise/SommelierChoise";
import Subscribe from "@/components/Subscribe/Subscribe";
import WineList from "@/components/WineList/WineList";


export default function Home() {
  return (
    <>
      <BannerSlider />
      <Offers />
      <WineList />
      <SommelierChoise />
      <Subscribe />
    </>
  );
}
