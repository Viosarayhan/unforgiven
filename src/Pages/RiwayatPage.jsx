import Navbar from "../Components/Elements/Navbar/Navbar";
import ProfileLayouts from "../Components/Layouts/ProfileLayouts";
import Riwayat from "../Components/Fragments/Riwayat";
import Footer from "../Components/Elements/Footer/Footer";
const RiwayatPage = () => {
    return (
        <div className="font-sans">
            <Navbar />
            <ProfileLayouts
                classnameOfRiwayat="bg-[#FB6816] text-[#fffff0] hover:bg-[#FDAC7F]"
                classnameOfEdit="border-[#121212] border-2 text-black hover:border-[#FB6816] hover:text-[#FB6816]"
            />
            <div className="mt-[22px] ml-[443px] mr-[150px]">
                <Riwayat/>
            </div>
            <Footer/>
        </div>
    )
}

export default RiwayatPage