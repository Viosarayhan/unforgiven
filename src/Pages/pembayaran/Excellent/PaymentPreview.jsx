import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function PaymentPreview({ registrationData, onBack, onPaymentSuccess }) {
  const { name, email, phone, mentor, date, time } = registrationData;

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  const paymentMethods = [
    { name: 'Gopay', logo: '/public/assetsvivit/gopay.png' },
    { name: 'Ovo', logo: '/public/assetsvivit/OVO.png' },
    { name: 'ShopeePay', logo: '/public/assetsvivit/sopay.png' },
    { name: 'Dana', logo: '/public/assetsvivit/Dana.png' }
  ];

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleRedirectToCourseReview = () => {
    navigate('/coursereview1'); // Navigate to the coursereview page
  };

  const handlePayment = async () => {
    if (!selectedPaymentMethod) {
      alert('Please select a payment method');
      return;
    }

    // Data pembayaran yang dikirim
    const paymentData = {
      orderId: Date.now(),
      date: `${date} ${time}`,
      email,
      phone,
      paymentMethod: selectedPaymentMethod,
      paymentStatus: 'Belum Bayar', // Set default status sebagai "Belum Bayar"
    };

    try {
      const response = await axios.post('http://localhost:5000/api/payment', paymentData);
      console.log(response.data);
      alert('Payment data saved successfully!');
      onPaymentSuccess(); // Trigger the success handler from parent to show the QrisPopup
    } catch (error) {
      console.error('Error saving payment data:', error);
      alert('Error saving payment data');
    }
  };

  return (
    <div className="p-6 bg-[#fffff0] rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Preview Pembayaran</h2>
      <div className="space-y-4">
        <PreviewInfo label="Nama Lengkap" value={name || '-'} />
        <PreviewInfo label="Email" value={email || '-'} />
        <PreviewInfo label="Nomor Telepon" value={phone || '-'} />
        <PreviewInfo label="Mentor" value={mentor || '-'} />
        <PreviewInfo label="Jadwal" value={date && time ? `${date} ${time}` : '-'} />
      </div>

      <TotalSection />

      {/* Payment Method Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Pilih Metode Pembayaran</h3>
        <div className="flex justify-start gap-6">
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              onClick={() => handlePaymentMethodSelect(method.name)}
              className={`cursor-pointer flex flex-col items-center p-3 border rounded-lg transition-all duration-200 transform ${selectedPaymentMethod === method.name ? 'border-[#FB6816]' : 'border-gray-300'} hover:scale-105`}
            >
              <img src={method.logo} alt={method.name} className="w-16 h-16 object-contain mb-2" />
              <p className="text-center text-gray-700">{method.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-between gap-4">
        <button onClick={handlePayment} className="bg-[#27ae00] text-white px-6 py-2 rounded-full shadow-md transition-transform transform active:scale-95 duration-150 w-full md:w-auto">
          Bayar Pesanan
        </button>
        <button
          onClick={handleRedirectToCourseReview} // Call function to navigate
          className="bg-[#FB6816] text-white px-6 py-2 rounded-full shadow-md transition-transform transform active:scale-95 duration-150 w-full md:w-auto"
        >
          Get
        </button>
      </div>
    </div>
  );
}

function PreviewInfo({ label, value }) {
  return (
    <div className="space-y-1">
      <label className="block font-semibold text-gray-700">{label}</label>
      <p className="text-gray-600">{value}</p>
    </div>
  );
}

function TotalSection() {
  return (
    <div className="mt-6 border-t pt-4">
      <h3 className="text-lg font-semibold text-gray-800">Total Pembayaran</h3>
      <div className="space-y-2">
        <p className="text-gray-600">Subtotal: Rp 15.000</p>
        <p className="text-gray-600">Biaya Transaksi: Rp 1.000</p>
      </div>
      <p className="text-xl font-bold text-gray-900">Total: Rp 16.000</p>
    </div>
  );
}
