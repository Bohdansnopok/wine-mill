import DrinksFilter from "@/components/DrinksFilter/DrinksFilter";
import ArmagnacCatalog from "@/components/ArmagnacCatalog/ArmagnacCatalog";

export default function ArmagnacCatalogPage() {

    return (
        <>
            <section className="catalogWrapper">
                <div className="container">
                    <div className="flexWrapper">
                        <DrinksFilter />
                        <div>
                            <ArmagnacCatalog />
                            <button className="catalogLinkOrButton">СМОТРЕТЬ ВСЕ</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
