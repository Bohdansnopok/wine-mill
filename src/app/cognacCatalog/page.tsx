import DrinksFilter from "@/components/DrinksFilter/DrinksFilter";
import CognacCatalog from "@/components/CognacCatalog/CognacCatalog";

export default function SparklingCatalogPage() {

    return (
        <>
            <section className="catalogWrapper">
                <div className="container">
                    <div className="flexWrapper">
                        <DrinksFilter />
                        <div>
                            <CognacCatalog />
                            <button className="catalogLinkOrButton">СМОТРЕТЬ ВСЕ</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
