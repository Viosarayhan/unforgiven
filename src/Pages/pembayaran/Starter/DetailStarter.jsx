import React from 'react';

export default function CourseDetails() {
  return (
    <div className="mb-8 ml-[150px]">
      <img src="/public/assetsvivit/Banner.png" alt="Banner" className="w-full h-auto rounded-2xl mb-6" />
      <h1 className="text-4xl font-bold mb-4">Career Starter Kit</h1>
      <div className="flex justify-between items-center mb-4">
        <p className="text-2xl font-semibold">Rp 20.000</p>
        <p className="text-lg line-through text-gray-500">Rp 65.000</p>
      </div>
      <section className="mb-6">
  <h2 className="text-2xl font-semibold mb-2">Deskripsi</h2>
  <p className="text-justify">
  Deskripsi:Solusi tepat untuk para fresh graduate dan profesional muda yang baru memulai
   perjalanan kariernya. Kit ini mencakup panduan praktis untuk memulai karier, termasuk 
   pembuatan resume profesional, tips wawancara, dan pelatihan keterampilan dasar yang 
   dibutuhkan di dunia kerja modern. Peserta akan mendapatkan akses ke materi pengembangan 
   diri, webinar motivasi, dan konsultasi awal untuk membangun fondasi karier yang kuat. 
   Dirancang untuk membantu individu muda menghadapi tantangan awal dalam dunia profesional 
   dengan percaya diri.
  </p>
</section>
<section>
  <h2 className="text-2xl font-semibold mb-2">Ketentuan</h2>
  <p className="text-justify">
  Program ini menyediakan layanan dasar pengembangan karier, meliputi 2 kali review CV dalam
   rentang satu bulan dan 2 template CV dalam Bahasa Inggris dan Indonesia. Peserta akan 
   mendapatkan 1 kali simulasi wawancara untuk meningkatkan keterampilan komunikasi dan kepercayaan 
   diri, serta 1 kali review portofolio guna mengoptimalkan presentasi profesional mereka.
  </p>
</section>
    </div>
  );
}

