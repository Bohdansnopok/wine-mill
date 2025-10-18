import DrinksFilter from "@/components/DrinksFilter/DrinksFilter";
import LiquorCatalog from "@/components/LiquorCatalog/LiquorCatalog";

export default function LiquorCatalogPage() {

    return (
        <>
            <section className="catalogWrapper">
                <div className="container">
                    <div className="flexWrapper">
                        <DrinksFilter />
                        <div>
                            <LiquorCatalog />
                            <button className="catalogLinkOrButton">СМОТРЕТЬ ВСЕ</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
