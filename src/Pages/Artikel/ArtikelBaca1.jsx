import Navbar from "../../Components/Elements/Navbar/Navbar";
import Footer from "../../Components/Elements/Footer/Footer";
import ArtikelLayouts from "../../Components/Layouts/ArtikelLayouts";
import IsiArtikel1 from "../../Components/Fragments/IsiArtikel/IsiArtikel1";
const ArtikelBaca1 = () => {
    return (
        <div>
            <Navbar />
            <ArtikelLayouts />
            <div className="mt-[62px] mb-[20px]">
            <IsiArtikel1/>
            </div>
            <Footer/>
        </div>
    )
}
export default ArtikelBaca1