import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';  // Impor fungsi format dari date-fns
import NavbarAdmin from "../Components/Elements/Navbar/NavbarAdmin";
import Footer from "../Components/Elements/Footer/Footer";

const AdminPage = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi untuk menangani perubahan program yang dipilih
  const handleProgramChange = async (id, newProgram) => {
    try {
      console.log('Mengirim data:', { program: newProgram }); // Periksa data yang dikirim
      await axios.put(`http://localhost:5000/auth/class-registrations/${id}`, {
        program: newProgram,
      });
      fetchRegistrations();
    } catch (err) {
      setError('Gagal memperbarui data program');
    }
  };


  // Fungsi untuk mengambil data registrasi
  const fetchRegistrations = async () => {
    setLoading(true);  // Mulai loading saat mengambil data
    try {
      const response = await axios.get('http://localhost:5000/auth/class-registrations');
      setRegistrations(response.data);
    } catch (err) {
      setError('Gagal mengambil data registrasi');
    } finally {
      setLoading(false);  // Selesai loading
    }
  };

  useEffect(() => {
    fetchRegistrations();  // Memanggil fungsi untuk mengambil data saat halaman dimuat
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div>
      <NavbarAdmin />
      <div className="p-8 min-h-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin - Data Registrasi</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase border-b border-gray-200">ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase border-b border-gray-200">Nama</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase border-b border-gray-200">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase border-b border-gray-200">Telepon</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase border-b border-gray-200">Mentor</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase border-b border-gray-200">Tanggal</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase border-b border-gray-200">Waktu</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase border-b border-gray-200">File</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase border-b border-gray-200">Program</th> {/* Kolom Program */}
              </tr>
            </thead>
            <tbody>
              {registrations.map((reg, index) => (
                <tr
                  key={reg.id}
                  className={`hover:bg-gray-50 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reg.id}</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reg.name}</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reg.email}</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reg.phone}</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reg.mentor}</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {reg.date ? format(new Date(reg.date), 'dd MMM yyyy') : 'Tanggal Tidak Tersedia'}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reg.time}</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-blue-600">
                    {reg.file_url ? (
                      <a
                        href={`http://localhost:5000/${reg.file_url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-800"
                      >
                        Lihat File
                      </a>
                    ) : (
                      'Tidak Ada File'
                    )}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
  <select
    value={reg.program || "JobReady CV"} // Fallback ke "PortoPolish" jika reg.program kosong
    onChange={(e) => handleProgramChange(reg.id, e.target.value)}
    className="px-2 py-1 border border-gray-300 rounded"
  >
    <option value="JobReady CV">JobReady CV</option>
    <option value="PortoPolish">PortoPolish</option>
    <option value="Chit-ChatView">WalkView</option>
    <option value="CareerExcellentPack">CareerExcellentPack</option>
    <option value="CareerStarterKit">CareerStarterKit</option>
    <option value="SuccesSprintFour">SuccesSprintFour</option>

  </select>
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

export default AdminPage;
