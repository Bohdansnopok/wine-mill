import DrinksFilter from "@/components/DrinksFilter/DrinksFilter";
import VodkaCatalog from "@/components/VodkaCatalog/VodkaCatalog";

export default function VodkaCatalogPage() {

    return (
        <>
            <section className="catalogWrapper">
                <div className="container">
                    <div className="flexWrapper">
                        <DrinksFilter />
                        <div>
                            <VodkaCatalog />
                            <button className="catalogLinkOrButton">СМОТРЕТЬ ВСЕ</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
