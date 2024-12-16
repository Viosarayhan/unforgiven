import React, { useState } from 'react';

export default function LessonInfo() {
  return (
    <div className="space-y-4">
      <LessonSection 
        number={1} 
        title="Apa itu CV dan mengapa penting di dunia kerja?" 
        isActive={true}
      />
      <LessonSection 
        number={2} 
        title="Cara menonjolkan pengalaman dan keahlian" 
      />
      <LessonSection 
        number={3} 
        title="Menyesuaikan CV dengan pekerjaan yang dilamar" 
      />
    </div>
  );
}

function LessonSection({ number, title, isActive = false }) {
  const [isChecked, setIsChecked] = useState(isActive);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div 
      className={`bg-[#FFFFF0] rounded-lg shadow p-4 flex items-center justify-between ${
        isChecked ? 'border-2 border-[#4c37ee]' : 'border-gray-300'
      }`}
      style={{ width: '290px' }}
    >
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-black">{number}.</span>
        <p className="text-base font-semibold text-black">{title}</p>
      </div>
      <input 
        type="checkbox" 
        className="w-6 h-6 border-2 border-orange-500 rounded-md"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}
