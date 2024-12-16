import React from 'react';
import Navbar from '../../Components/Elements/Navbar/Navbar';
import HeroSection2 from './HeroSection2';
import ClassInfo from './ClassInfo';
import Footer from './Footer';

export default function CoursePaket1Page() {
  return (
    <div className="bg-[#FFFFF0] min-h-screen relative">
      <Navbar />
      <HeroSection2 />
      <ClassInfo />
      <Footer />
    </div>
  );
}


