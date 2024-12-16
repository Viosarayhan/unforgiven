import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarAdmin from "../Components/Elements/Navbar/NavbarAdmin";
import Footer from "../Components/Elements/Footer/Footer";

const DataPeserta = () => {
    const [dataPeserta, setDataPeserta] = useState([]);

    // Mengambil data dari backend
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/payments");
            if (Array.isArray(response.data)) {
                setDataPeserta(response.data);
            } else {
                console.error("Unexpected response format:", response.data);
                alert("Failed to load data");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Mengubah status pembayaran
    const handleStatusChange = async (order_id, newStatus) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/payments/${order_id}`, {
                payment_status: newStatus,
            });

            if (response.status === 200) {
                setDataPeserta((prevState) =>
                    prevState.map((peserta) =>
                        peserta.order_id === order_id
                            ? { ...peserta, payment_status: newStatus }
                            : peserta
                    )
                );
            } else {
                alert("Failed to update status");
            }
        } catch (error) {
            console.error("Error updating status:", error);
            alert("Failed to update status");
        }
    };

    // Menghapus data pembayaran
    const handleDelete = async (order_id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/payment/${order_id}`);
            if (response.status === 200) {
                setDataPeserta((prevState) =>
                    prevState.filter((peserta) => peserta.order_id !== order_id)
                );
                alert("Payment data deleted successfully!");
            }
        } catch (error) {
            alert("Failed to delete payment data");
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <NavbarAdmin />
            <div className="container mx-auto p-6 mt-20 flex-1 mb-3">
                <h1 className="text-3xl font-semibold text-center mb-8 text-gray-700">Data Peserta</h1>
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="table-auto w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal text-center">
                                <th className="py-3 px-6">ID Pemesanan</th>
                                <th className="py-3 px-6">Tanggal</th>
                                <th className="py-3 px-6">Email</th>
                                <th className="py-3 px-6">Telepon</th>
                                <th className="py-3 px-6">Metode Bayar</th>
                                <th className="py-3 px-6">Status Bayar</th>
                                <th className="py-3 px-6 ">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light text-center">
                            {dataPeserta.map((peserta) => (
                                <tr key={peserta.order_id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">{peserta.order_id}</td>
                                    <td className="py-3 px-6">{peserta.date}</td>
                                    <td className="py-3 px-6">{peserta.email}</td>
                                    <td className="py-3 px-6">{peserta.phone}</td>
                                    <td className="py-3 px-6">{peserta.payment_method}</td>
                                    <td className="py-3 px-6">
                                        <select
                                            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-200"
                                            value={peserta.payment_status}
                                            onChange={(e) => handleStatusChange(peserta.order_id, e.target.value)}
                                        >
                                            <option value="berhasil">Berhasil</option>
                                            <option value="belum bayar">Belum Bayar</option>
                                        </select>
                                    </td>
                                    <td className="py-3 px-6">
                                        <button
                                            onClick={() => handleDelete(peserta.order_id)}
                                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DataPeserta;
