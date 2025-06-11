import CocktailsCatalog from "@/components/CocktailsCatalog/CocktailsCatalog";
import DrinksFilter from "@/components/DrinksFilter/DrinksFilter";

export default function CocktailsCatalogPage() {

    return (
        <>
            <section className="catalogWrapper">
                <div className="container">
                    <div className="flexWrapper">
                        <DrinksFilter />
                        <div>
                            <CocktailsCatalog />
                            <button className="catalogLinkOrButton">СМОТРЕТЬ ВСЕ</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
