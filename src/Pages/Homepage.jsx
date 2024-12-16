import Navbar from "../Components/Elements/Navbar/Navbar";
import Footer from "../Components/Elements/Footer/Footer";
import Button from "../Components/Elements/Button/Index";
import Slider from "react-slick";
import React from "react";
import { Link } from "react-scroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const Homepage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
    return (
        <div>
            <Navbar />
            <main className="mb-[60px]">
                <div className="mx-[100px] h-[100vh] items-center gap-[32px] flex justify-between">
                    <div className="w-1/2 flex flex-col gap-[30px]">
                        <h1 className="text-black text-[40px] font-bold font-['Plus Jakarta Sans'] leading-[44px]">Siapkan Dirimu untuk Karier Impian dengan Persiapan yang Tepat!</h1>
                        <h6 className="text-black text-lg font-normal font-['Plus Jakarta Sans'] leading-snug">Mulai dari CV yang menarik, portfolio yang meyakinkan, hingga latihan interview yang relevan.</h6>
                        <Link to="Program Kami" smooth={true} duration={500}>
                        <Button classname="h-fit py-1 shadow-[inset_0px_-4px_10px_rgba(0,_0,_0,_0.3)] transition  hover:shadow-[inset_0px_4px_10px_rgba(0,_0,_0,_0.3)] hover:bg-[#fdab7f] w-fit  px-[18px] text-[#fffff0] text-lg bg-[#fb6816] rounded-[15px] justify-center items-center">Gabung Sekarang</Button>
                        </Link>
                        <div className="flex gap-[8px]">
                            <div className="flex ">
                                <img src="/src/assets/user1.png" alt="" className="w-[41px] h-[41px] rounded-full z-1 border-2 boredr-[#fffff0]"/>
                                <img src="/src/assets/user2.png" alt="" className="w-[41px] h-[41px] -ml-[12px] rounded-full z-2 border-2 boredr-[#fffff0]"/>
                                <img src="/src/assets/user3.png" alt="" className="w-[41px] h-[41px] -ml-[12px] rounded-full z-3 border-2 boredr-[#fffff0]"/>
                                <img src="/src/assets/user4.png" alt="" className="w-[41px] h-[41px] -ml-[12px] rounded-full z-4 border-2 boredr-[#fffff0]"/>
                            </div>
                            <div className="flex flex-col">
                                <h6 className="text-black text-base font-bold font-['Plus Jakarta Sans'] leading-[19px]">Dipercaya oleh 100k orang</h6>
                                <div className="flex items-end">
                                    <img src="/src/assets/Star.svg" alt="" className="w-6 h-6 "/>
                                    <img src="/src/assets/Star.svg" alt="" className="w-6 h-6 -ml-[5px]"/>
                                    <img src="/src/assets/Star.svg" alt="" className="w-6 h-6 -ml-[5px]"/>
                                    <img src="/src/assets/Star.svg" alt="" className="w-6 h-6 -ml-[5px]"/>
                                    <img src="/src/assets/star_half.svg" alt="" className="w-6 h-6 -ml-[5px]"/>
                                    <h6 className="text-black text-base font-bold font-['Plus Jakarta Sans'] leading-[19px]">4.5/5 (50k  Ulasan)</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 ml-20">
                        <img
                            src="/src/assets/Banner Homepage.jpg"
                            alt=""
                            style={{ width: "96%", height: "auto", marginLeft:"30px"  }}
                        />
                    </div>
                </div>
                <div className="mx-[150px] mt-[60px] items-center gap-[32px] flex justify-center mb-20">
                    <div className="flex items-center gap-[10px] flex-col w-auto h-fit shadow-xl rounded-md p-[20px] hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                        <img src="/src/assets/Karier.svg" alt="" className="w-[147px] h-[147px]"/>
                        <h6 className="text-center text-black text-2xl font-semibold font-['Plus Jakarta Sans'] leading-relaxed tracking-tight">Persiapan Karier</h6>
                        <h6 className="text-center line-clamp-4 text-black text-base font-normal font-['Plus Jakarta Sans'] leading-snug">Dapatkan panduan lengkap untuk fresh graduate, mulai dari review CV, peningkatan portfolio, hingga latihan interview.</h6>
                    </div>
                    <div className="flex items-center gap-[10px] flex-col w-auto h-fit shadow-xl rounded-md p-[20px] hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                        <img src="/src/assets/Interview.svg" alt="" className="w-[147px] h-[147px]"/>
                        <h6 className="text-center text-black text-2xl font-semibold font-['Plus Jakarta Sans'] leading-relaxed tracking-tight">Latihan Interview</h6>
                        <h6 className="text-center line-clamp-4 text-black text-base font-normal font-['Plus Jakarta Sans'] leading-snug">Latihan interview yang dirancang untuk mempersiapkan kamu menghadapi pertanyaan sulit dan tampil percaya diri.</h6>
                    </div><div className="flex items-center gap-[10px] flex-col w-auto h-fit shadow-xl rounded-md p-[20px] hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                        <img src="/src/assets/Portfolio.svg" alt="" className="w-[147px] h-[147px]"/>
                        <h6 className="text-center text-black text-2xl font-semibold font-['Plus Jakarta Sans'] leading-relaxed tracking-tight">Membangun Portfolio</h6>
                        <h6 className="text-center line-clamp-4 text-black text-base font-normal font-['Plus Jakarta Sans'] leading-snug">Bangun portfolio yang menonjolkan keahlianmu, membantu recruiter melihat potensimu sebagai fresh graduate.</h6>
                    </div>
                </div>
                <div name="Program Kami" className="flex justify-center mt-[60px] bg-[#4C37EE] items-center gap-[32px] flex-col w-auto h-fit shadow-xl pb-[40px] mx pt-[20px]">
                    <h1 className="text-[#fffff0] text-[32px] font-semibold font-['Plus Jakarta Sans'] underline leading-[38.40px]">Program Kami</h1>
                    <div className="flex mx-[150px] w-[1140px] gap-[20px] items-center justify-center">
                        <div className="flex w-1/2 justify-center items-center">
                        <motion.div
                            className="w-[195px] -mr-[150px]"
                            initial={{
                                rotate : 10,
                                x : 0 ,
                                y : 0
                            }}
                            whileInView={{
                                x : -100,
                                y : 10,
                                rotate: -10 }}
                            transition={{
                              duration: 1,
                              bounce: 0.5,
                              type: "spring",
                              delay: 0.5,
                            }}
                            >
                            <img src="/src/assets/RakaPoster.jpg" alt="" className="w-[195px] -mr-[150px]"/>
                            </motion.div>
                            <motion.div
                            className="w-[195px] z-10 -mr-[150px]"
                            initial={{
                                scale : 1
                            }}
                            whileInView={{
                                scale : 1.1 }}
                            transition={{
                              duration: 1,
                              bounce: 0.5,
                              type: "spring",
                              delay: 0.5,
                            }}
                            >
                                <img src="/src/assets/TiaraPoster.jpg" alt="" className="w-[195px] z-10 -mr-[150px] "/>
                            </motion.div>
                            <motion.div
                            className="w-[195px]"
                            initial={{
                                rotate : -10,
                                x : 0 ,
                                y : 0
                            }}
                            whileInView={{
                                x : 100,
                                y : 10,
                                rotate: 10 }}
                            transition={{
                              duration: 1,
                              bounce: 0.5,
                              type: "spring",
                              delay: 0.5,
                            }}
                            >
                                <img src="/src/assets/NadiaPoster.jpg" alt="" className="w-[195px]"/>
                            </motion.div>
                        </div>
                        <div className="flex flex-col gap-[10px] w-1/2 justify-center items-start">
                            <h1 className="text-[#fffff0] text-[32px] font-semibold font-['Plus Jakarta Sans'] leading-[38.40px]">Mentoring</h1>
                            <h6 className="text-[#fffff0] text-lg font-normal font-['Plus Jakarta Sans'] leading-snug">Butuh feedback langsung untuk CV, portfolio, atau interview? Dengan Mentoring Langsung, kamu bisa belajar dan berlatih bersama mentor berpengalaman melalui sesi Zoom pribadi. Tingkatkan peluangmu diterima bekerja dengan panduan yang tepat!</h6>
                            <Button type="Link" to={'/mentoring'}  classname="py-1 h-fit shadow-[inset_0px_-4px_10px_rgba(0,_0,_0,_0.3)] transition  hover:shadow-[inset_0px_4px_10px_rgba(0,_0,_0,_0.3)] hover:bg-[#adffeb] w-fit  px-[18px] text-[#3725c2] text-lg bg-[#23ffca] rounded-[15px] justify-center items-center">Lihat Lainnya</Button>
                        </div>
                    </div>
                    <div className="flex w-[1140px] gap-[20px] justify-between mt-10">
                        <div className="flex flex-col gap-[10px] w-1/2 justify-center items-end">
                            <h1 className="text-[#fffff0] text-[32px] font-semibold font-['Plus Jakarta Sans'] leading-[38.40px]">E-Learning</h1>
                            <h6 className="text-[#fffff0] text-lg text-right font-normal font-['Plus Jakarta Sans'] leading-snug">Persiapan karier kini lebih mudah! Kelas Persiapan Kerja menyediakan materi lengkap dari cara membuat CV dan portfolio yang menarik, hingga strategi menghadapi interview. Semuanya disusun agar kamu siap bersaing di dunia kerja.</h6>
                            <Button type="Link" to={'/elearning'}  classname="py-1 h-fit shadow-[inset_0px_-4px_10px_rgba(0,_0,_0,_0.3)] transition  hover:shadow-[inset_0px_4px_10px_rgba(0,_0,_0,_0.3)] hover:bg-[#adffeb] w-fit  px-[18px] text-[#3725c2] text-lg bg-[#23ffca] rounded-[15px] justify-center items-center">Lihat Lainnya</Button>
                        </div>
                        <div className="flex w-1/2 justify-center items-center">
                        <motion.div
                            className="w-[195px] -mr-[150px]"
                            initial={{
                                rotate : 10,
                                x : 0 ,
                                y : 0
                            }}
                            whileInView={{
                                x : -100,
                                y : 10,
                                rotate: -10 }}
                            transition={{
                              duration: 1,
                              bounce: 0.5,
                              type: "spring",
                              delay: 0.5,
                            }}
                            >
                            <img src="/src/assets/elearning back 1.jpg" alt="" className="w-[195px]"/>
                            </motion.div>
                            <motion.div
                            className="w-[195px] z-10"
                            initial={{
                                scale : 1
                            }}
                            whileInView={{
                                scale : 1.1 }}
                            transition={{
                              duration: 1,
                              bounce: 0.5,
                              type: "spring",
                              delay: 0.5,
                            }}
                            >
                                <img src="/src/assets/elearning front.jpg" alt="" className="w-[195px] z-10 "/>
                            </motion.div>
                            <motion.div
                            className="w-[195px]  -ml-[150px]"
                            initial={{
                                rotate : -10,
                                x : 0 ,
                                y : 0
                            }}
                            whileInView={{
                                x : 100,
                                y : 10,
                                rotate: 10 }}
                            transition={{
                              duration: 1,
                              bounce: 0.5,
                              type: "spring",
                              delay: 0.5,
                            }}
                            >
                                <img src="/src/assets/elearning back 2.jpg" alt="" className="w-[195px]"/>
                            </motion.div>

                        </div>

                    </div>
                    <div className="flex w-[1140px] gap-[20px] justify-between">
                        <div className="flex w-1/2 justify-center items-center">
                        <motion.div
                            className="w-[195px] -mr-[150px]"
                            initial={{
                                rotate : 10,
                                x : 0 ,
                                y : 0
                            }}
                            whileInView={{
                                x : -100,
                                y : 10,
                                rotate: -10 }}
                            transition={{
                              duration: 1,
                              bounce: 0.5,
                              type: "spring",
                              delay: 0.5,
                            }}
                            >
                            <img src="/src/assets/artikel back1.jpg" alt="" className="w-[195px] -mr-[150px]"/>
                            </motion.div>
                            <motion.div
                            className="w-[195px] z-10 -mr-[150px]"
                            initial={{
                                scale : 1
                            }}
                            whileInView={{
                                scale : 1.1 }}
                            transition={{
                              duration: 1,
                              bounce: 0.5,
                              type: "spring",
                              delay: 0.5,
                            }}
                            >
                                <img src="/src/assets/artikel front.jpg" alt="" className="w-[195px] z-10 -mr-[150px] "/>
                            </motion.div>
                            <motion.div
                            className="w-[195px]"
                            initial={{
                                rotate : -10,
                                x : 0 ,
                                y : 0
                            }}
                            whileInView={{
                                x : 100,
                                y : 10,
                                rotate: 10 }}
                            transition={{
                              duration: 1,
                              bounce: 0.5,
                              type: "spring",
                              delay: 0.5,
                            }}
                            >
                                <img src="/src/assets/artikel back2.jpg" alt="" className="w-[195px]"/>
                            </motion.div>

                        </div>
                        <div className="flex flex-col gap-[10px] w-1/2 justify-center items-start mt-10">
                            <h1 className="text-[#fffff0] text-[32px] font-semibold font-['Plus Jakarta Sans'] leading-[38.40px]">Artikel karir</h1>
                            <h6 className="text-[#fffff0] text-lg font-normal font-['Plus Jakarta Sans'] leading-snug">Mencari pekerjaan atau memajukan karir bisa menjadi tantangan tersendiri, tetapi dengan persiapan yang tepat, kamu bisa meningkatkan peluang sukses. Dalam artikel ini, kami akan membahas berbagai tips dan strategi untuk memperkuat karirmu, mulai dari penyusunan CV yang menarik hingga mempersiapkan dirimu menghadapi wawancara kerja.</h6>
                            <Button type="Link" to={'/artikel'}  classname="py-1 h-fit shadow-[inset_0px_-4px_10px_rgba(0,_0,_0,_0.3)] transition  hover:shadow-[inset_0px_4px_10px_rgba(0,_0,_0,_0.3)] hover:bg-[#adffeb] w-fit  px-[18px] text-[#3725c2] text-lg bg-[#23ffca] rounded-[15px] justify-center items-center">Lihat Lainnya</Button>
                        </div>
                    </div>
                </div>
                <div className="mx-[150px] gap-[20px] mt-[60px]">
                    <h1 className="text-center text-black text-[32px] font-semibold font-['Plus Jakarta Sans'] underline leading-[38.40px]">Mentor Kami</h1>
                    <Slider {...settings}>
                        {data.map ((e) => (
                            <div className=" mt-[20px] h-auto p-5 bg-[#fb6816] rounded-[10px] shadow flex-col justify-start items-center gap-[4px] inline-flex">
                                <img src={e.image} alt="" className="w-full h-[233px] rounded-md object-cover" />
                                <p className="text-center text-[#fffff0] text-xl font-semibold font-['Plus Jakarta Sans'] leading-snug tracking-tight">{e.Name}</p>
                                <p className="text-center text-[#fffff0] text-base font-normal font-['Plus Jakarta Sans'] leading-[19px]"> {e.Profesi}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Homepage;



const data = [
    {
        Name: "Tiara Dewi",
        image: "/src/assets/Tiara Dewi.jpg",
        Profesi: 'CV Consultant',
    },
    {
        Name: "Raka Nugraha",
        image: "/src/assets/Raka Nugraha.jpg",
        Profesi: 'Portfolio Advisor',
    },
    {
        Name: "Nadia Kurnia",
        image: "/src/assets/Nadia Kurnia.jpg",
        Profesi: 'HR Specialist',
    },
    {
        Name: "Maya Putri",
        image: "/src/assets/Maya Putri.jpg",
        Profesi: 'Portfolio Advisor',
    },
    {
        Name: "Rian Utama",
        image: "/src/assets/Rian Utama.jpg",
        Profesi: 'HR Consultant',
    },
    {
        Name: "Siska Larasati",
        image: "/src/assets/Siska Larasati.jpg",
        Profesi: 'CV Consultant',
    },
]
