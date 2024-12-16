
import React, { useState, useEffect } from 'react';
import { Clock, ChevronRight } from 'lucide-react';

const SoalTes = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [isTestFinished, setIsTestFinished] = useState(false);



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
  ];

  useEffect(() => {
    if (timeLeft > 0 && currentQuestionIndex < soalList.length && !isTestFinished) {
      const timerInterval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [timeLeft, currentQuestionIndex, soalList.length, isTestFinished]);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  
    if (!answeredQuestions.includes(currentQuestionIndex)) {
      setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
    }
  };
  

  const handleNextQuestion = () => {
    if (selectedAnswer === soalList[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    if (currentQuestionIndex < soalList.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Tambahkan logika untuk menandai tes selesai
      setIsTestFinished(true);
      alert(`Tes selesai! Skor Anda: ${score}/${soalList.length}`);
    }
  };

  const handlePopupClose = () => {
    // Ketika popup ditutup, tidak ada perubahan waktu
    setIsTestFinished(true);
  };
  

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  return (
    <main className="min-h-screen bg-[#fffff0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-indigo-600 rounded-3xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-[#fffff0]">Tes Logika Penalaran (Logical Reasoning)</h1>
            <div className="flex items-center text-[#fffff0]">
              <Clock className="mr-2" />
              <span className="text-xl font-semibold">{formatTime(timeLeft)}</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-grow">
              <div className="bg-[#fffff0] rounded-2xl p-6 mb-6 shadow-inner w-[600px] h-60">
                <div className="flex flex-col items-center mb-4">
                    <span className="text-black text-lg font-semibold">
                    {soalList[currentQuestionIndex].number}
                  </span>
                </div>
                <p className="text-lg text-gray-800 mb-6">{soalList[currentQuestionIndex].question}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {soalList[currentQuestionIndex].options.map((option, index) => (
                  <label key={index} className="flex items-center bg-[#fffff0] rounded-xl p-4 cursor-pointer transition-colors hover:bg-orange-500 w-[290px] h-auto">
                    <input
                      type="radio"
                      name="answer"
                      value={index}
                      checked={selectedAnswer === index}
                      onChange={() => handleAnswerSelect(index)}
                      className="sr-only"
                    />
                    <span className={`w-6 h-6 mr-3 rounded-full border-2 flex-shrink-0 ${selectedAnswer === index ? 'bg-indigo-600 border-indigo-600' : 'border-gray-400'}`}></span>
                    <span className="font-semibold mr-2">{String.fromCharCode(65 + index)}.</span>
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="lg:w-64 flex flex-col justify-between">
              <div className="grid grid-cols-5 gap-2.5">
                {soalList.map((_, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 rounded-lg font-bold text-sm ${
                        answeredQuestions.includes(index)
                        ? 'bg-[#23FFCA] text-black'
                        :  currentQuestionIndex === index
                        ? 'bg-[#23FFCA] text-black'
                        : 'bg-[#fffff0] text-black hover:bg-[#23FFCA]'
                    }`}
                    onClick={() => {
                        setCurrentQuestionIndex(index);
                        setSelectedAnswer(null);
                    }}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <button
                className="mt-6 w-full bg-[#23FFCA] text-indigo-800 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-emerald-300 transition-colors flex items-center justify-center"
                onClick={handleNextQuestion}
                style={{
                    boxShadow: "inset 0px 4px 6px rgba(0, 0, 0, 0.2), 0px 4px 6px rgba(0, 0, 0, 0.2)",
                  }}
              >
                {currentQuestionIndex === soalList.length - 1 ? 'Selesai' : 'Selanjutnya'}
                <ChevronRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SoalTes;

