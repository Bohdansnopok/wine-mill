import DrinksFilter from "@/components/DrinksFilter/DrinksFilter";
import WiskeyCatalog from "../../components/WiskeyCatalog/WiskeyCatalog"

export default function WiskeyCatalogPage() {

    return (
        <>
            <section className="catalogWrapper">
                <div className="container">
                    <div className="flexWrapper">
                        <DrinksFilter />
                        <div>
                            <WiskeyCatalog />
                            <button className="catalogLinkOrButton">СМОТРЕТЬ ВСЕ</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
