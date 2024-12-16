import React, { useState } from 'react';

export default function PaymentModal({ onClose, onProceed }) {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleSelectPayment = (paymentName) => {
    setSelectedPayment(paymentName);
  };

  const handleNextClick = () => {
    if (selectedPayment) {
      onClose(); // Close the modal
      onProceed(); // Show QRIS popup
    } else {
      alert('Silakan pilih metode pembayaran terlebih dahulu.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#fffff0] p-6 rounded-lg max-w-3xl w-11/12">
        <h2 className="text-3xl font-semibold mb-6">Pilih Metode Pembayaran:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PaymentOption
            name="Gopay"
            image="/public/assetsvivit/gopay.png"
            fee={1000}
            total={16000}
            isSelected={selectedPayment === 'Gopay'}
            onSelect={handleSelectPayment}
          />
          <PaymentOption
            name="OVO"
            image="/public/assetsvivit/OVO.png"
            fee={2000}
            total={17000}
            isSelected={selectedPayment === 'OVO'}
            onSelect={handleSelectPayment}
          />
          <PaymentOption
            name="ShopeePay"
            image="/public/assetsvivit/sopay.png"
            fee={2000}
            total={17000}
            isSelected={selectedPayment === 'ShopeePay'}
            onSelect={handleSelectPayment}
          />
          <PaymentOption
            name="Dana"
            image="/public/assetsvivit/Dana.png"
            fee={2000}
            total={17000}
            isSelected={selectedPayment === 'Dana'}
            onSelect={handleSelectPayment}
          />
        </div>
        <button
          onClick={handleNextClick}
          className="mt-6 bg-[#FB6816] text-[#fffff0] font-semibold py-2 px-4 rounded-full shadow-lg w-full active:scale-95 transition-transform duration-150"
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
}

function PaymentOption({ name, image, fee, total, isSelected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(name)}
      className={`p-4 border rounded-lg cursor-pointer ${
        isSelected ? 'border-[#FB6816]' : 'border-gray-300'
      }`}
    >
      <img src={image} alt={name} className="h-12 w-auto mb-2 mx-auto" />
      <h4 className="text-center font-semibold">{name}</h4>
      <p className="text-center text-gray-600">Fee: Rp {fee}</p>
      <p className="text-center font-bold">Total: Rp {total}</p>
    </div>
  );
}
