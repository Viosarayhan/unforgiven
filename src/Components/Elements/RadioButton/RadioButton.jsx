import  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function RadioButton({ options, defaultValue, onChange }) {
  // Set the selected state to the defaultValue passed as prop or the first option if no default is provided
  const [selected, setSelected] = useState(defaultValue || options[0]?.value);
  const handleChange = (e) => {
    setSelected(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="flex gap-4">
      {options.map((option) => (
        <label
          key={option.value}
          className={`flex items-center cursor-pointer font-sans hover:bg-[#A49AF6] hover:border-[#A49AF6] font-semibold gap-2 border-2 p-2 rounded-md cursor-pointer ${
            selected === option.value
              ? "bg-[#4C37EE] border-[#4C37EE] shadow-md"  // Ganti warna teks saat dipilih
              : "border-[#121212] border-2"      // Warna teks default saat tidak dipilih
          }`}
        >
          <input
            type="radio"
            name="customRadio"
            value={option.value}
            checked={setSelected === option.value}
            onChange= {handleChange}
            className="hidden" // Hide default radio button
          />
          <span
            className={` ${
              selected === option.value
                ? (<FontAwesomeIcon icon={faCheck} className="mb-0 mr-2 flex justify-center" />)  // Border color when selected
                : (<FontAwesomeIcon icon={faCheck} className="mb-0 mr-2 flex justify-center" />)  // Border color when not selected
            }`}
          >
            {selected === option.value && (
              <FontAwesomeIcon icon={faCheck} className="mb-0 mr-0 text-[#FFFFF0] flex justify-center" />
            )}
          </span>
          <span
            className={`cursor-pointer ${
              selected === option.value
                ? "text-[#FFFFF0]"  // Ganti warna teks saat dipilih
                : "text-black"      // Warna teks default saat tidak dipilih
            }`}
          >
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}