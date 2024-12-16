import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../CSS/Register.css';

const Register = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  // Fungsi toggle password visibility
  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPassword = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fungsi untuk menangani registrasi
  const handleRegisterClick = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/register", formData);
      alert(response.data.message);
      navigate("/login"); // Arahkan ke halaman login setelah berhasil registrasi
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data.error || "Registration failed, please try again");
    }
  };

  return (
    <div style={{
      backgroundImage: 'url(/assets/Background.svg)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <div className="register-container">
        <h2>Buat Akun</h2>
        <p className="paragraph">Isi formulir di bawah untuk mendaftar!</p>
        <form action="#">
          <label htmlFor="name">Nama</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Masukan nama Anda"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Masukan email Anda"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Kata Sandi</label>
          <div className="password-container">
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Masukan kata sandi Anda"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="toggle-password"
              onClick={togglePassword}
            >
              {isPasswordVisible ? "🙈" : "👁️"}
            </span>
          </div>
          <label htmlFor="confirmPassword" className="conf">Konfirmasi Kata Sandi</label>
          <div className="password-container">
            <input
              type={isConfirmPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Masukan kembali kata sandi Anda"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <span
              className="toggle-password"
              onClick={toggleConfirmPassword}
            >
              {isConfirmPasswordVisible ? "🙈" : "👁️"}
            </span>
          </div>
          <button
            type="button"
            className="register-button"
            onClick={handleRegisterClick}
          >
            Daftar Sekarang
          </button>
        </form>
        <div className="separator">Daftar dengan</div>
        <div className="social-register">
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
            className="google"
            alt="Register with Google"
          />
          <img
            src="https://banner2.cleanpng.com/20180706/hpz/aax76xlah.webp"
            className="facebook"
            alt="Register with Facebook"
          />
        </div>
        <p className="login">
          Sudah punya akun? <Link to="/login">Masuk</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
