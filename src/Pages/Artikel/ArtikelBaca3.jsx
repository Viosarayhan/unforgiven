import Navbar from "../../Components/Elements/Navbar/Navbar";
import Footer from "../../Components/Elements/Footer/Footer";
import ArtikelLayouts from "../../Components/Layouts/ArtikelLayouts";
import IsiArtikel3 from "../../Components/Fragments/IsiArtikel/IsiArtikel3";
const ArtikelBaca3 = () => {
    return (
        <div>
            <Navbar />
            <ArtikelLayouts />
            <div className="mt-[62px] mb-[20px]">
            <IsiArtikel3/>
            </div>
            <Footer/>
        </div>
    )
}
export default ArtikelBaca3