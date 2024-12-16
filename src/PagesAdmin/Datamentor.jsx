import NavbarAdmin from "../Components/Elements/Navbar/NavbarAdmin";
import Footer from "../Components/Elements/Footer/Footer";
import EditMentor from "./EditMentor";
import { useState, useEffect } from "react";

const Datamentor = () => {
    const [showEditmentor, setShowEditmentor] = useState(false);
    const [mentors, setMentors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleOpenOverlay = () => {
        setShowEditmentor(true);
    };

    const handleCloseOverlay = () => {
        setShowEditmentor(false);
    };

    useEffect(() => {
        fetch("http://localhost:5000/mentors")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then((data) => setMentors(data))
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <div>Loading data mentors...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <NavbarAdmin />
            <div className="flex flex-col mx-[150px] mt-[104px]">
                <h1 className="text-3xl font-semibold">Data Mentor</h1>
                <div className="flex flex-col mt-[20px] mb-[40px] gap-4">
                    {mentors.map((mentor) => (
                        <MentorCard
                            key={mentor.id}
                            mentor={mentor}
                            onEdit={handleOpenOverlay}
                        />
                    ))}

                    {showEditmentor && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white p-6 rounded-3xl shadow-md relative h-auto w-[1000px]">
                                <button
                                    className="absolute top-2 right-2 text-gray-500"
                                    onClick={handleCloseOverlay}
                                >
                                    ✕
                                </button>
                                <EditMentor updateMentors={setMentors} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};
const MentorCard = ({ mentor, onEdit }) => (
    <button
        onClick={onEdit}
        className="w-full rounded-lg flex flex-col gap-6 p-6 bg-[#E0E0E0] shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
    >
        <div className="flex flex-col items-start gap-4">
            {/* Profile Information */}
            <div className="flex justify-between items-center w-full gap-4">
                <div className="flex items-center gap-4">
                    <img
                        className="w-[82px] h-[82px] rounded-[10px] object-cover"
                        src={mentor.image || "/public/assetsvivit/2f1ba397127e4944daa182d5fa83e820.png"}
                        alt={mentor.name}
                    />
                    <div className="flex flex-col">
                        <div className="text-black text-lg font-semibold font-['Plus Jakarta Sans']">
                            {mentor.name}
                        </div>
                        <div className="text-[#4B4B4B] text-base font-normal font-['Plus Jakarta Sans']">
                            {mentor.job}
                        </div>
                    </div>
                </div>

                {/* Status & WhatsApp Button */}
                <div className="flex items-center gap-4 ml-[500px]">
                    <div className="flex items-center gap-2 text-[#4B4B4B]">
                        <div className="w-4 h-4 bg-[#15d0a3] rounded-full" />
                        <div className="text-base font-normal font-['Plus Jakarta Sans']">
                            Aktif di {mentor.activeClasses} kelas
                        </div>
                    </div>
                    <a
                        href={`https://wa.me/62882006029000?text=Halo%20${mentor.name},%20saya%20ingin%20membahas%20jadwal%20kelas%20Anda.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
                    >
                        Chat via WhatsApp
                    </a>
                </div>
            </div>

            {/* Schedule Table */}
            <div className="w-full">
                <h1 className="text-xl font-semibold text-black mb-4 text-center">Jadwal</h1>
                <table className="min-w-full table-auto text-[#4B4B4B]">
                    <thead>
                        <tr className="border-b">
                            <th className="px-4 py-3 text-center">No.</th>
                            <th className="px-4 py-3 text-center">Tanggal</th>
                            <th className="px-4 py-3 text-center">Waktu</th>
                            <th className="px-4 py-3 text-center">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="px-4 py-3">1</td>
                            <td className="px-4 py-3">{mentor.date}</td>
                            <td className="px-4 py-3">{mentor.time}</td>
                            <td className="px-4 py-3">
                                <a
                                    href={mentor.zoomLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
                                >
                                    {mentor.zoomLink}
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </button>
);

export default Datamentor;
