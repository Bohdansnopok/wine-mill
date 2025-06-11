import DrinksFilter from "@/components/DrinksFilter/DrinksFilter";
import RumCatalog from "@/components/RumCatalog/RumCatalog";

export default function ArmagnacCatalogPage() {

    return (
        <>
            <section className="catalogWrapper">
                <div className="container">
                    <div className="flexWrapper">
                        <DrinksFilter />
                        <div>
                            <RumCatalog />
                            <button className="catalogLinkOrButton">СМОТРЕТЬ ВСЕ</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
