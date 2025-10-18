import DelicaciesCatalog from "@/components/DelicaciesCatalog/DelicaciesCatalog";
import DrinksFilter from "@/components/DrinksFilter/DrinksFilter";

export default function DelicaciesCatalogPage() {

    return (
        <>
            <section className="catalogWrapper">
                <div className="container">
                    <div className="flexWrapper">
                        <DrinksFilter />
                        <div>
                            <DelicaciesCatalog />
                            <button className="catalogLinkOrButton">СМОТРЕТЬ ВСЕ</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
