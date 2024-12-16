import React, { useState } from "react";

export default function QrisPopup({ onClose }) {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFinishClick = () => {
    // Menampilkan animasi sukses
    setShowSuccess(true);

    // Menutup popup setelah animasi selesai (misalnya 2 detik)
    setTimeout(() => {
      setShowSuccess(false); // Reset animasi jika diperlukan
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      {!showSuccess ? (
        <div className="bg-white p-6 rounded-lg max-w-sm w-full text-center">
          <h2 className="text-2xl font-semibold mb-4">Scan QRIS</h2>
          <img
            src="/public/assetsvivit/Qris.svg"
            alt="QRIS Barcode"
            className="mx-auto mb-4"
          />
          <p className="text-sm text-gray-600 mb-4">
            Silakan scan barcode untuk menyelesaikan pembayaran.
          </p>
          <button
            onClick={handleFinishClick}
            className="bg-[#FB6816] text-white py-2 px-4 rounded-full shadow-lg active:scale-95 transition-transform duration-150"
          >
            Selesai
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg max-w-sm w-full text-center">
          <div className="flex justify-center items-center">
            <div className="animate-bounce mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-green-500 mb-2">
            Pembayaran Berhasil!
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Terima kasih telah melakukan pembayaran.
          </p>
        </div>
      )}
    </div>
  );
}
