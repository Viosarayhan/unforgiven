import React from 'react';

export default function CourseDetails() {
  return (
    <div className="mb-8 ml-[150px]">
      <img src="/public/assetsvivit/Banner.png" alt="Banner" className="w-full h-auto rounded-2xl mb-6" />
      <h1 className="text-4xl font-bold mb-4">Career Excellent Pack</h1>
      <div className="flex justify-between items-center mb-4">
        <p className="text-2xl font-semibold">Rp 50.000</p>
        <p className="text-lg line-through text-gray-500">Rp 100.000</p>
      </div>
      <section className="mb-6">
  <h2 className="text-2xl font-semibold mb-2">Deskripsi</h2>
  <p className="text-justify">
  Paket komprehensif yang dirancang untuk profesional yang ambisius dan
  ingin mengembangkan karier mereka secara maksimal. Program ini menawarkan
  rangkaian pelatihan mendalam, coaching personal, dan akses ke jaringan profesional
  terkemuka. Peserta akan mendapatkan bimbingan dari para ahli di bidangnya,
  pengembangan keterampilan kepemimpinan, serta strategi pengembangan karier yang
  disesuaikan dengan potensi individu. Paket ini mencakup workshop intensif, konsultasi
  pengembangan pribadi, dan kesempatan networking dengan para pemimpin industri.
  </p>
</section>
<section>
  <h2 className="text-2xl font-semibold mb-2">Ketentuan</h2>
  <p className="text-justify">
  Career Excellent Pack menawarkan layanan komprehensif untuk pengembangan profesional,
  mencakup 10 kali review CV selama 4 bulan dan 10 template CV dalam Bahasa Inggris
  dan Indonesia. Program ini dilengkapi dengan panduan LinkedIn untuk membangun personal
  branding, serta 5 kali review portofolio untuk membantu peserta mengoptimalkan dokumen
  dan presentasi profesional mereka. Dengan pendekatan menyeluruh, paket ini dirancang
  untuk mendukung pertumbuhan karier secara sistematis dan berkelanjutan.
  </p>
</section>
    </div>
  );
}

