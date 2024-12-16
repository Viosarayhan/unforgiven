import React, { useState } from 'react';
import Navbar from '../../../Components/Elements/Navbar/Navbar';
import CourseDetails from '../Chit-ChatView/CourseDetails';
import RegistrationForm from './RegistrationForm';
import PaymentPreview from './PaymentPreview';
import Footer from '../../review-cv/Footer';
import QrisPopup from '../QrisPopup';

export default function PaymentChitchatView() {
  const [showPaymentPreview, setShowPaymentPreview] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showQrisPopup, setShowQrisPopup] = useState(false);
  const [registrationData, setRegistrationData] = useState({});

  const handleSave = (data) => {
    setRegistrationData(data);
    setShowPaymentPreview(true);  // Show PaymentPreview when form is submitted
  };

  const handleShowPaymentModal = () => {
    setShowPaymentModal(true);
  };

  const handleClosePaymentModal = () => {
    setShowPaymentModal(false);
  };

  const handlePaymentSuccess = () => {
    setShowQrisPopup(true);  // Show QRIS Popup after payment is successful
  };

  const handleCloseQrisPopup = () => {
    setShowQrisPopup(false);
  };

  return (
    <div className="bg-[#fffff0] min-h-screen">
      <Navbar />
      <main className="container mt-[64px] mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <div
          className={`lg:w-2/3 transition-all duration-300 ${
            showPaymentPreview ? 'lg:ml-[50px]' : ''
          }`}
        >
          <CourseDetails />
          <RegistrationForm onSave={handleSave} />

        </div>
        {showPaymentPreview && (
          <div className="lg:w-1/3">
            <PaymentPreview
              registrationData={registrationData}
              onBack={handleShowPaymentModal}
              onPaymentSuccess={handlePaymentSuccess}
            />
          </div>
        )}
      </main>
      <Footer />

      {showQrisPopup && <QrisPopup onClose={handleCloseQrisPopup} />}
    </div>
  );
}
