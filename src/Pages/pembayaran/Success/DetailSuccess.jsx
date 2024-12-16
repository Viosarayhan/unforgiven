import React from 'react';

export default function CourseDetails() {
  return (
    <div className="mb-8 ml-[150px]">
      <img src="/public/assetsvivit/Banner.png" alt="Banner" className="w-full h-auto rounded-2xl mb-6" />
      <h1 className="text-4xl font-bold mb-4">Success Sprint Four</h1>
      <div className="flex justify-between items-center mb-4">
        <p className="text-2xl font-semibold">Rp 30.000</p>
        <p className="text-lg line-through text-gray-500">Rp 87.000</p>
      </div>
      <section className="mb-6">
  <h2 className="text-2xl font-semibold mb-2">Deskripsi</h2>
  <p className="text-justify">
  Program intensif empat minggu yang dirancang untuk mengakselerasi pertumbuhan 
  profesional dan mencapai tujuan karier dalam waktu singkat. Fokus utama program ini 
  adalah pengembangan keterampilan khusus, strategi pencapaian target, dan transformasi 
  personal yang cepat. Peserta akan melalui serangkaian coaching, pelatihan kompeten, 
  dan pendampingan intensif untuk mencapai terobosan dalam kariernya. Program ini cocok 
  bagi mereka yang ingin membuat lompatan signifikan dalam pengembangan profesional dalam 
  waktu singkat, dengan pendekatan yang terukur dan terarah.
  </p>
</section>
<section>
  <h2 className="text-2xl font-semibold mb-2">Ketentuan</h2>
  <p className="text-justify">
  Paket ini menawarkan dukungan pengembangan karier yang lebih intensif, dengan 4 kali 
  review CV selama 2 bulan dan 4 template CV dalam Bahasa Inggris dan Indonesia. Program 
  mencakup 4 kali simulasi wawancara untuk mengasah kemampuan komunikasi dan strategi 
  presentasi, serta 4 kali review portofolio untuk memastikan peserta dapat menghasilkan 
  dokumen profesional yang kompetitif dan menarik.
  </p>
</section>
    </div>
  );
}

