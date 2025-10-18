import BannerSlider from "@/components/BannerSlider/SpecialOfferSlider";
import SommelierChoise from "@/components/SommelierChoise/SommelierChoise";
import Subscribe from "@/components/Subscribe/Subscribe";
import WineList from "@/components/WineList/WineList";
import WineCatalogFilter from "@/components/WineCatalogFilter/WineCatalogFilter";

export default function Catalog() {
    return (
        <>
            <BannerSlider />
            <section className="catalogWrapper">
                <div className="container">
                    <div className="flexWrapper">
                        <WineCatalogFilter />
                        <div>
                            <WineList />
                            <button className="catalogLinkOrButton">СМОТРЕТЬ ВСЕ</button>
                        </div>
                    </div>

                </div>
            </section>
            <SommelierChoise />
            <Subscribe />
        </>
    );
}
