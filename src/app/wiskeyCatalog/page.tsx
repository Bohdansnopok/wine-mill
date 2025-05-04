import WiskeyCatalog from "@/components/WiskeyCatalog/WiskeyCatalog";
import WiskeyCatalogFilter from "@/components/WiskeyCatalogFilter/WiskeyCatalogFilter";

export default function WiskeyCatalogPage() {

    return (
        <>
            <section className="catalogWrapper">
                <div className="container">
                    <div className="flexWrapper">
                        <WiskeyCatalogFilter />
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
