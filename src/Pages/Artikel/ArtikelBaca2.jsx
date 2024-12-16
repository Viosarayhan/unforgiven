import Navbar from "../../Components/Elements/Navbar/Navbar";
import Footer from "../../Components/Elements/Footer/Footer";
import ArtikelLayouts from "../../Components/Layouts/ArtikelLayouts";
import IsiArtikel2 from "../../Components/Fragments/IsiArtikel/IsiArtikel2"
const ArtikelBaca2 = () => {
    return (
        <div>
            <Navbar />
            <ArtikelLayouts />
            <div className="mt-[62px] mb-[20px]">
            <IsiArtikel2/>
            </div>
            <Footer/>
        </div>
    )
}
export default ArtikelBaca2