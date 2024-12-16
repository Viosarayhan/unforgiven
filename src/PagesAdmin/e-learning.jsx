import { useState } from "react";
import NavbarAdmin from "../Components/Elements/Navbar/NavbarAdmin";
import Footer from "../Components/Elements/Footer/Footer";

const Datapeserta = () => {
    // State untuk menyimpan data peserta
    const [dataPeserta, setDataPeserta] = useState([
        {
            id: "000001",
            tanggal: "22/10/2024",
            email: "Kevinsusanto@gmail.com",
            nama: "Kevin Susanto",
            pembayaran: 1,
            statusBayar: "Ongoing",
        },
        {
            id: "000002",
            tanggal: "01/11/2024",
            email: "Floria@gmail.com",
            nama: "Floria",
            pembayaran: 1,
            statusBayar: "Ongoing",
        },
        {
            id: "000003",
            tanggal: "30/10/2024",
            email: "Akmal@gmail.com",
            nama: "Akmal",
            pembayaran: 3,
            statusBayar: "Selesai",
        },
        {
            id: "000004",
            tanggal: "22/10/2024",
            email: "cryl@gmail.com",
            nama: "Cryl",
            pembayaran: 1,
            statusBayar: "Selesai",
        },
        // Tambahkan data lainnya di sini
    ]);

    // Fungsi untuk mengupdate status bayar
    const handleStatusChange = (id, newStatus) => {
        setDataPeserta((prevData) =>
            prevData.map((peserta) =>
                peserta.id === id ? { ...peserta, statusBayar: newStatus } : peserta
            )
        );
    };

    return (
        <div>
            <NavbarAdmin />
            <div className="flex flex-col mx-[150px] mt-[104px] mb-[40px]">
                <table className="table-auto w-full border-collapse border border-black">
                    <thead>
                        <tr className="h-[60px] bg-gray-100">
                            <th className="px-4 py-2 text-black text-lg font-semibold font-['Plus Jakarta Sans']">
                                ID User
                            </th>
                            <th className="px-4 py-2 text-black text-lg font-semibold font-['Plus Jakarta Sans']">
                                Tanggal
                            </th>
                            <th className="px-4 py-2 text-black text-lg font-semibold font-['Plus Jakarta Sans']">
                                Email
                            </th>
                            <th className="px-4 py-2 text-black text-lg font-semibold font-['Plus Jakarta Sans']">
                                Nama
                            </th>
                            <th className="px-4 py-2 text-black text-lg font-semibold font-['Plus Jakarta Sans']">
                                Pembayaran
                            </th>
                            <th className="px-4 py-2 text-black text-lg font-semibold font-['Plus Jakarta Sans']">
                                Status Bayar
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataPeserta.map((peserta) => (
                            <tr
                                key={peserta.id}
                                className="h-[60px] border-t border-b border-black"
                            >
                                <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">
                                    {peserta.id}
                                </td>
                                <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">
                                    {peserta.tanggal}
                                </td>
                                <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">
                                    {peserta.email}
                                </td>
                                <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">
                                    {peserta.nama}
                                </td>
                                <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">
                                    {peserta.pembayaran}
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <select
                                        className="px-2 py-1 bg-gray-100 rounded-[15px] text-black text-lg font-semibold font-['Plus Jakarta Sans']"
                                        value={peserta.statusBayar}
                                        onChange={(e) =>
                                            handleStatusChange(peserta.id, e.target.value)
                                        }
                                    >
                                        <option value="Berhasil">Berhasil</option>
                                        <option value="Belum Bayar">Belum Bayar</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
};

export default Datapeserta;
