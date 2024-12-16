import React from 'react';
import Navbar from '../../Components/Elements/Navbar/Navbar';
import HeroSection3 from './HeroSection3';
import ClassInfo from './ClassInfo';
import Footer from './Footer';

export default function CoursePaket2Page() {
  return (
    <div className="bg-[#FFFFF0] min-h-screen relative">
      <Navbar />
      <HeroSection3 />
      <ClassInfo />
      <Footer />
    </div>
  );
}


