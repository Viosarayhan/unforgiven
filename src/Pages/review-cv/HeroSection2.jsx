import React from 'react';

export default function HeroSection2() {
  return (
    <div className="bg-[#a49af6] rounded-b-[60px] px-[151px] pt-16 pb-[100px] mt-[62px] flex flex-col items-start gap-8 relative z-0">
      <h1 className="text-3xl font-semibold font-sans w-[523px] text-black">
        Career Exellecent Pack
      </h1>
      <p className="text-lg w-[389px] font-sans text-black">
      Paket ini cocok untuk kamu yang ingin memaksimalkan peluang karier dengan dukungan profesional!
      </p>
      <div className="flex gap-[18px]">
        <BatchInfo />
        <SuccessInfo />
      </div>
      <img src="/src/assets/Medal.png" alt="Illustration" className="absolute top-0.5 right-[150px] w-[476px] h-[476px] bottom-[100px]" />
    </div>
  );
}

function BatchInfo() {
  return (
    <div className="bg-[#FFFFF0] rounded-[10px] p-[15px_17px] flex flex-col gap-1 w-[211px]">
      <p className="text-base font-semibold font-sans text-black">
        Batch 5 dimulai pada:
      </p>
      <div className="flex items-center gap-1">
        <img src="/public/assetsvivit/calender.svg" alt="Calendar" className="w-6 h-6" />
        <span className="text-base font-sans text-black">
          30-31 November
        </span>
      </div>
      <button className="bg-[#fb6816] text-[#FFFFF0] text-[7.875px] font-semibold px-[13.5px] py-[5px] rounded-[25px] flex items-center gap-[4.5px] shadow-[4px_-4px_8px_rgba(0,0,0,0.25)_inset] w-[98px] mt-[27px]">
        <img src="/public/assetsvivit/alarm.svg" alt="Alarm" className="w-[11.3px] h-[11.3px]" />
        <span className='font-sans'>Ingatkan saya</span>
      </button>
    </div>
  );
}

function SuccessInfo() {
  return (
    <div className="bg-[#FFFFF0] rounded-[10px] p-[15px_17px] flex flex-col gap-3 w-[247px]">
      <p className="text-base text-black font-sans w-[216px]">
        1000+ CV telah direview dan mendapatkan pekerjaan pertama mereka!
      </p>
      <div className="flex items-center gap-2">
        <img src="/public/assetsvivit/bintang.svg" alt="Star" className="h-[21.4px]" />
        <span className="text-base font-sans text-black">4,9/5</span>
      </div>
    </div>
  );
}

