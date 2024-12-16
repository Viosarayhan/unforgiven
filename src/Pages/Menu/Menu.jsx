import React, { useState, useEffect } from 'react';
import './Menu.css';
import Navbar from '../../Components/Elements/Navbar/Navbar';

const SoalTes = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 menit dalam detik

  const soalList = [
    {
      number: 1,
      question: "Dari pernyataan berikut, pilih yang benar: Semua kucing adalah hewan. Beberapa hewan adalah burung. Maka,",
      options: [
        "Semua kucing adalah burung",
        "Tidak ada burung yang kucing",
        "Beberapa burung adalah kucing",
        "Semua kucing adalah hewan"
      ],
      correctAnswer: 3
    },
    {
      number: 2,
      question: "Di antara angka 1, 2, 3, 4, dan 5, angka mana yang memiliki jumlah angka genap lebih banyak?",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      correctAnswer: 1
    },
    {
        number: 3,
        question: "Jika A = 5 dan B = 3, maka nilai dari A + B - 2 adalah:",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        correctAnswer: 2
    },
    {
        number: 4,
        question: "Jika semua burung bisa terbang, dan penguin adalah burung, maka:",
        options: [
            "Penguin bisa terbang.",
            "Semua burung tidak bisa terbang.",
            "Beberapa burung tidak bisa terbang.",
            "Tidak ada burung yang tidak bisa terbang."
        ],
        correctAnswer: 2
    },
    {
        number: 5,
        question: "Dari daftar berikut, mana yang merupakan pernyataan logis yang benar?",
        options: [
            "Jika hujan, maka jalan basah.",
            "Jalan basah, maka hujan.",
            "Hujan tidak mungkin membuat jalan basah.",
            "Jika jalan tidak basah, maka tidak hujan."
        ],
        correctAnswer: 0
    },
    {
        number: 6,
        question: "Dalam sebuah keluarga, jika Ayah adalah laki-laki, dan Ibu adalah perempuan, maka:",
        options: [
            "Ibu adalah laki-laki.",
            "Ayah dan Ibu adalah orang tua.",
            "Ayah dan Ibu adalah orang tua.",
            "Keluarga tersebut tidak memiliki anak."
        ],
        correctAnswer: 1
    },
    {
        number: 7,
        question: "Jika X lebih besar dari Y dan Y lebih besar dari Z, maka:",
        options: [
            "Z lebih besar dari X.",
            "X lebih kecil dari Z.",
            "X lebih besar dari Z.",
            "Y lebih kecil dari X."
        ],
        correctAnswer: 2
    },
    {
        number: 8,
        question: "Manakah dari pernyataan berikut yang benar?",
        options: [
            "Semua manusia adalah mamalia.",
            "Semua mamalia adalah manusia.",
            "Tidak ada manusia yang bukan mamalia.",
            "Semua manusia bisa terbang."
        ],
        correctAnswer: 0
    },
    {
        number: 9,
        question: "Dalam sebuah tes, jika peserta mendapatkan nilai 80, maka:",
        options: [
            "Peserta lulus jika nilai minimal 70.",
            "Peserta tidak lulus.",
            "Peserta mendapatkan nilai rata-rata.",
            "Peserta mendapatkan nilai tertinggi."
        ],
        correctAnswer: 0
    },
    {
        number: 10,
        question: "Jika semua mobil beroda empat, dan beberapa kendaraan bermotor adalah mobil, maka:",
        options: [
            "Semua kendaraan bermotor adalah mobil.",
            "Beberapa kendaraan bermotor beroda empat.",
            "Tidak ada kendaraan bermotor yang beroda empat.",
            "Semua mobil bukan kendaraan bermotor."
        ],
        correctAnswer: 1
    }
    // Tambahkan soal lainnya di sini...
  ];

 // Menjalankan timer setiap detik
 useEffect(() => {
    if (timeLeft > 0 && currentQuestionIndex < soalList.length) {
      const timerInterval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerInterval); // Bersihkan interval saat komponen unmount atau waktu habis
    }
  }, [timeLeft, currentQuestionIndex]);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === soalList[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    if (currentQuestionIndex < soalList.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Tes selesai! Skor Anda: ${score + 1}/${soalList.length}`);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  return (
    <>
    <Navbar/>
    <main className="c_soal-frame">
      <div className="c_soal-frame01">
        <div className="header-container">
          <p className="c_soal-text01">Tes Logika Penalaran (Logical Reasoning)</p>
          <div className="timer">{formatTime(timeLeft)}</div>
        </div>

        <div className="c_soal-frame04">
          <div className="c_soal-frame05">
            <div className="c_soal-frame06">
              <div className="question-header">
                <h2 className="c_soal-text05">{soalList[currentQuestionIndex].number}</h2>
              </div>
              <p className="c_soal-text07">{soalList[currentQuestionIndex].question}</p>
            </div>

            <div className="c_soal-frame10">
              <div className="answer-grid">
                {soalList[currentQuestionIndex].options.map((option, index) => (
                  <label key={index} className="answer-option">
                    <input
                      type="radio"
                      name="answer"
                      value={index}
                      checked={selectedAnswer === index}
                      onChange={() => handleAnswerSelect(index)}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    <span className="answer-letter">{String.fromCharCode(65 + index)}.</span>
                    <span className="answer-text">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="c_question-container">
            <div className="number-grid">
              {soalList.map((_, index) => (
                <button
                  key={index}
                  className="number-btn"
                  onClick={() => setCurrentQuestionIndex(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div>
              <button className="c_finish-button" onClick={handleNextQuestion}>
                {currentQuestionIndex === soalList.length - 1 ? 'Selesai' : 'Next Question'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default SoalTes;
