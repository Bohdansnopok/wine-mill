import DrinksFilter from "@/components/DrinksFilter/DrinksFilter";
import SparklingCatalog from "../../components/SparklingCatalog/SparklingCatalog";

export default function SparklingCatalogPage() {

    return (
        <>
            <section className="catalogWrapper">
                <div className="container">
                    <div className="flexWrapper">
                        <DrinksFilter />
                        <div>
                            <SparklingCatalog />
                            <button className="catalogLinkOrButton">СМОТРЕТЬ ВСЕ</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
