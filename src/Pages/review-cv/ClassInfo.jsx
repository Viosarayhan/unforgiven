import React from 'react';

export default function ClassInfo() {
  return (
    <div className="mt-[106px] mx-auto max-w-[1141px] pb-[106px]">
      <h2 className="text-2xl font-semibold font-sans mb-10 text-black">Informasi Kelas</h2>
      <div className="grid grid-cols-2 gap-8">
        <InfoItem title="Link Zoom" link="Bit.ly/Zoom" />
        <InfoItem title="Rekaman kelas" link="Bit.ly/RekamanKelas" />
        <InfoItem title="Guideline Kelas" link="Bit.ly/GuidlineKelas" />
        <InfoItem title="Materi" link="Bit.ly/Materi" />
        <InfoItem title="Template CV" link="Bit.ly/TamplateCV" />
        <InfoItem title="Evaluasi" link="Bit.ly/Evaluasi" />
      </div>
    </div>
  );
}

function InfoItem({ title, link }) {
  return (
    <div className="border border-black rounded-[10px] overflow-hidden">
      {/* Bagian judul dengan background biru */}
      <div className="bg-[#4c37ee] font-sans text-[#FFFFF0] py-5 px-6 font-bold">
        {title}
      </div>
      
      {/* Bagian link */}
      <div className="py-5 font-sans px-6 text-lg">
        <a 
          href={link} 
          className="text-black hover:text-orange-500 transition-colors"
          target="_blank" 
          rel="noopener noreferrer"
        >
          {link}
        </a>
      </div>
    </div>
  );
}


