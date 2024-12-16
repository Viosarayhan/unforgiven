import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-[#4c37ee] flex items-center justify-between px-[150px] py-2.5 shadow-md z-10">
      <img src="/public/assetsvivit/logo-navbar.png" alt="Logo" className="w-[177px] h-11" />
      <div className="flex gap-5">
        <NavItem text="Mentoring" />
        <NavItem text="E-Learning" />
        <NavItem text="Artikel Karier" />
      </div>
      <img src="/public/assetsvivit/account.svg" alt="Account" className="w-9 h-9" />
    </nav>
  );
}

function NavItem({ text }) {
  return (
    <span className="text-[#FFFFF0] font-semibold text-base">{text}</span>
  );
}

