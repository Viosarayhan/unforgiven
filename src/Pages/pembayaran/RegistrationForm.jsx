import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegistrationForm({ onSave }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedMentor, setSelectedMentor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !phone || !selectedMentor || !selectedDate || !selectedTime) {
      alert("Harap isi semua data.");
      return;
    }

    // Mengemas data menggunakan FormData
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("mentor", selectedMentor);
    formData.append("date", selectedDate);
    formData.append("time", selectedTime);

    // Tambahkan program dengan nilai "PortoPolish"
    formData.append("program", "JobReady CV");

    // Menambahkan file jika tersedia
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await fetch("http://localhost:5000/auth/register-form", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        // Reset form setelah berhasil
        setName("");
        setEmail("");
        setPhone("");
        setSelectedMentor("");
        setSelectedDate("");
        setSelectedTime("");
        setFile(null);
        // Call onSave jika diperlukan
        onSave({ name, email, phone, mentor: selectedMentor, date: selectedDate, time: selectedTime, program: "Chit-ChatView" });
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Gagal mengirimkan data. Silakan coba lagi.");
    }
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-6 ml-[150px]">
      <h2 className="text-2xl font-semibold">Pendaftaran</h2>
      <FormField label="Nama Lengkap" placeholder="Masukkan nama" value={name} onChange={(e) => setName(e.target.value)} />
      <FormField label="Email" placeholder="Email anda" value={email} onChange={(e) => setEmail(e.target.value)} />
      <FormField label="Nomor Telepon" placeholder="Masukkan no telepon" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <MentorSelection selectedMentor={selectedMentor} setSelectedMentor={setSelectedMentor} />
      <ScheduleSelection selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
      <FileUpload file={file} setFile={setFile} />
      <button type="submit" className="w-full bg-[#FB6816] text-[#fffff0] font-semibold py-2 px-4 rounded-full shadow-lg active:scale-95 transition-transform duration-150">
        Simpan
      </button>
    </form>
  );
}

function FormField({ label, placeholder, value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="block font-semibold">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-[#D2D2D2] p-2 rounded border-none focus:ring focus:ring-orange-300"
      />
    </div>
  );
}

function MentorSelection({ selectedMentor, setSelectedMentor }) {
  const mentors = [
    { value: 'tiara', name: 'Tiara Dewi', role: 'CV Consultant', photo: '/public/assetsvivit/5d9783cb0a04030c4556d7079ddf57af.png' },
    { value: 'siska', name: 'Siska Larasati', role: 'CV Consultant', photo: '/public/assetsvivit/2f1ba397127e4944daa182d5fa83e820.png' },
    { value: 'andi', name: 'Andi Wirawan', role: 'HR Specialist', photo: '/public/assetsvivit/4d45e0232a205087c7b514010ab84cac.png' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Pilih Mentor</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mentors.map((mentor) => (
          <MentorCard
            key={mentor.value}
            value={mentor.value}
            name={mentor.name}
            role={mentor.role}
            photo={mentor.photo}
            selectedMentor={selectedMentor}
            setSelectedMentor={setSelectedMentor}
          />
        ))}
      </div>
    </div>
  );
}

function ScheduleSelection({ selectedDate, setSelectedDate, selectedTime, setSelectedTime }) {
  return (
    <div className="flex justify-between gap-8">
      <div className="flex-1">
        <label htmlFor="date" className="font-semibold">Pilih Tanggal</label>
        <input
          id="date"
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="picker-field w-full bg-transparent border-2 border-black p-2 rounded"
        />
      </div>
      <div className="flex-1">
        <label htmlFor="time" className="font-semibold">Pilih Waktu</label>
        <input
          id="time"
          type="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="picker-field w-full bg-transparent border-2 border-black p-2 rounded"
        />
      </div>
    </div>
  );
}

function FileUpload({ file, setFile }) {
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="space-y-2">
      <label htmlFor="file" className="font-semibold">Upload File</label>
      <input
        id="file"
        type="file"
        onChange={handleFileChange}
        className="block"
      />
    </div>
  );
}

function MentorCard({ value, name, role, photo, selectedMentor, setSelectedMentor }) {
  return (
    <label className="cursor-pointer">
      <input
        type="radio"
        value={value}
        checked={selectedMentor === value}
        onChange={() => setSelectedMentor(value)}
        className="sr-only"
      />
      <div
        className={`mentor-card p-4 border-2 ${selectedMentor === value ? 'border-orange-500' : 'border-gray-300'} rounded-lg flex flex-col items-center justify-center`}
      >
        <img src={photo} alt={name} className="w-20 h-20 rounded-full mb-4" />
        <p className="text-lg font-semibold">{name}</p>
        <span className="text-sm text-gray-600">{role}</span>
      </div>
    </label>
  );
}
