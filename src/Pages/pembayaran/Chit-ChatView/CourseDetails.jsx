import React from 'react';

export default function CourseDetails() {
  return (
    <div className="mb-8 ml-[150px]">
      <img src="/public/assetsvivit/Banner.png" alt="Banner" className="w-full h-auto rounded-2xl mb-6" />
      <h1 className="text-4xl font-bold mb-4">WalkView Batch 5</h1>
      <div className="flex justify-between items-center mb-4">
        <p className="text-2xl font-semibold">Rp 23.000</p>
        <p className="text-lg line-through text-gray-500">Rp 60.000</p>
      </div>
      <section className="mb-6">
  <h2 className="text-2xl font-semibold mb-2">Deskripsi</h2>
  <p className="text-justify">
  Ingin meningkatkan kemampuan komunikasi dan berbicara di depan umum?
    Layanan WalkView kami dirancang khusus untuk membantu Anda menjadi
    lebih percaya diri dan fasih dalam menyampaikan ide. Dengan bimbingan
    langsung dari para mentor berpengalaman, Anda akan belajar teknik komunikasi
    yang efektif, menarik, dan persuasif!
  </p>
</section>
<section>
  <h2 className="text-2xl font-semibold mb-2">Ketentuan</h2>
  <p className="text-justify">
  Pastikan Anda mengunggah informasi jadwal dan topik pembicaraan yang ingin
    dibahas dalam sesi. Setelah pembayaran dikonfirmasi, tim kami akan menjadwalkan
    sesi Anda bersama mentor profesional yang berlangsung selama 1-2 jam,
    sesuai waktu yang telah disepakati.
  </p>
</section>
    </div>
  );
}

