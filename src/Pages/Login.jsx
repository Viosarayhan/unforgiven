import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../CSS/Login.css';

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // Fungsi untuk toggle password visibility
  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fungsi untuk menangani login
  const handleLoginClick = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/login", formData);
      const { token } = response.data;

      // Simpan token ke localStorage
      localStorage.setItem("authToken", token);

      alert("Login berhasil!");
      navigate("/homepage"); // Arahkan pengguna ke homepage setelah login berhasil
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data.error || "Login failed, please try again");
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
      <div className="login-container">
        <h2>Selamat Datang</h2>
        <p>Masuk ke akun Anda!</p>
        <form action="#">
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
          <label htmlFor="password">Kata sandi</label>
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
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Ingatkan saya
            </label>
            <a href="#">Lupa kata sandi?</a>
          </div>
          <button
            type="button"
            className="login-button"
            onClick={handleLoginClick}
          >
            Masuk Sekarang
          </button>
        </form>
        <div className="separator">Masuk dengan</div>
        <div className="social-login">
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
            className="google"
            alt="Login with Google"
          />
          <img
            src="https://banner2.cleanpng.com/20180706/hpz/aax76xlah.webp"
            className="facebook"
            alt="Login with Facebook"
          />
        </div>
        <p className="register">
          Belum memiliki Akun? <Link to="/register">Daftar</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
