import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#fb6816] py-4 px-4 lg:px-32 flex items-center justify-between">
      <img src="/public/assetsvivit/logo-footer.png" alt="Brand" className="h-11 w-auto" />
      <div className="flex gap-8">
        <FooterItem icon="/public/assetsvivit/kontak.png"/>
        <FooterItem icon="/public/assetsvivit/tentang kami.png"/>
        <FooterItem icon="/public/assetsvivit/bantuan.png" />
      </div>
    </footer>
  );
}

function FooterItem({ icon, text }) {
  return (
    <div className="flex items-center gap-2">
      <img src={icon} alt={text} className="w-15 h-6" />
      <span className="text-lg font-semibold text-[#FFFFF0]">{text}</span>
    </div>
  );
}

