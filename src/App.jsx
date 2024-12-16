import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./Utils/UserContext";
import { useState } from "react";
import EditProfilePage from "./Pages/EditProfilePage";
import RiwayatPage from "./Pages/RiwayatPage";
import Homepage from "./Pages/Homepage";
import Elearning from "./Pages/Elearning";
import Mentoring from "./Pages/Mentoring";
import Login from "./Pages/Login";
import RegisterForm from "./Pages/RegisterForm";
import PaymentPreview from "./Pages/pembayaran/PaymentPreview";
import PaymentPage from "./Pages/pembayaran/PaymentPage";
import PaymentPortopolish from "./Pages/pembayaran/Portopolish/Payment_Portopolish";
import PaymentChitchatView from "./Pages/pembayaran/Chit-ChatView/Payment_Chitchat";
import PaymentExcellent from "./Pages/pembayaran/Excellent/PaymentExcellent";
import PaymentStarter from "./Pages/pembayaran/Starter/PaymentStarter";
import PaymentSuccess from "./Pages/pembayaran/Success/PaymentSuccess";
import VideoLearningPlatform from "./Pages/video/VideoLearningPlatform";
import CourseReviewPage from "./Pages/review-cv/CourseReviewPage";
import Creviewporto from "./Pages/review-cv/Portofolio/Creviewporto";
import CreviewwalkIn from "./Pages/review-cv/ChitChat/CreviewwalkIn";
import CoursePaket1Page from "./Pages/review-cv/CoursePaket1Page";
import CoursePaket2Page from "./Pages/review-cv/CoursePaket2Page";
import CoursePaket3Page from "./Pages/review-cv/CoursePaket3Page";
import Artikel from "./Pages/Artikel/Artikel";
import Artikel1 from "./Pages/Artikel/ArtikelBaca1";
import Artikel2 from "./Pages/Artikel/ArtikelBaca2";
import Artikel3 from "./Pages/Artikel/ArtikelBaca3";
import QuizLogika from "./Pages/Soal/QuizLogika";
import Dashboard from "./PagesAdmin/Dashboard";
import LoginPengguna from "./PagesAdmin/LoginPengguna";
import Datamentor from "./PagesAdmin/Datamentor";
import Datapeserta from "./PagesAdmin/Datapeserta";
import AdminPage from "./PagesAdmin/AdminPage";
import VideoTable from "./PagesAdmin/e-learning";
import DataArtikel from "./PagesAdmin/DataArtikel";
import DetailContent1 from "./Pages/DetailContent1"
import DetailContent2 from "./Pages/DetailContent2"
import DetailContent3 from "./Pages/DetailContent3"
import DetailArtikel from "./Pages/Artikel/DetailArtikel"

function App() {
  const [registrationData, setRegistrationData] = useState({});

  const handleSaveData = (data) => {
    setRegistrationData(data);
  };

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/editprofile" element={<EditProfilePage />} />
          <Route path="/riwayat" element={<RiwayatPage />} />
          <Route path="/elearning" element={<Elearning />} />
          <Route path="/mentoring" element={<Mentoring />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/artikelBaca1" element={<Artikel1 />} />
          <Route path="/artikelBaca2" element={<Artikel2 />} />
          <Route path="/artikelBaca3" element={<Artikel3 />} />
          <Route path="/soal" element={<QuizLogika />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm onSave={(data) => {handleSaveData(data); window.location.href = "/payment-preview"; }} />} />
          <Route path="/payment-preview" element={<PaymentPreview registrationData={registrationData} />} />
          <Route path="/payment" element={<PaymentPage registrationData={registrationData} />} />
          <Route path="/portopolish" element={<PaymentPortopolish registrationData={registrationData} />} />
          <Route path="/chitchat" element={<PaymentChitchatView registrationData={registrationData} />} />
          <Route path="/excellent" element={<PaymentExcellent registrationData={registrationData} />} />
          <Route path="/starter" element={<PaymentStarter registrationData={registrationData} />} />
          <Route path="/success" element={<PaymentSuccess registrationData={registrationData} />} />
          <Route path="/video" element={<VideoLearningPlatform />} />
          <Route path="/coursereview" element={<CourseReviewPage />} />
          <Route path="/coursereviewporto" element={<Creviewporto />} />
          <Route path="/coursereviewwalk" element={<CreviewwalkIn />} />
          <Route path="/coursereview1" element={<CoursePaket1Page />} />
          <Route path="/coursereview2" element={<CoursePaket2Page />} />
          <Route path="/coursereview3" element={<CoursePaket3Page />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/dataregister" element={<LoginPengguna />} />
          <Route path="/datamentor" element={<Datamentor />} />
          <Route path="/datapeserta" element={<Datapeserta />} />
          <Route path="/daftarcourse" element={<AdminPage />} />
          <Route path="/e-learning" element={<VideoTable/>}/>
          <Route path="/dataartikel" element={<DataArtikel/>}/>
          <Route path="/elearning1/:slug" element={<DetailContent1 />}/>
          <Route path="/elearning2/:slug" element={<DetailContent2 />}/>
          <Route path="/elearning3/:slug" element={<DetailContent3 />}/>
          <Route path="/detailartikel/:slug" element={<DetailArtikel />}/>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
