import NavbarAdmin from "../Components/Elements/Navbar/NavbarAdmin";
import Footer from "../Components/Elements/Footer/Footer";

const Dashboard = () => {
    return (
        <div>
            <NavbarAdmin />
            <div className="flex flex-col mx-[150px] mt-[104px]">
                <h1 className="text-3xl font-semibold mb-[40px]">Dashboard</h1>
                <div className="grid md:grid-cols-4 sm:grid-cols-1 justify-between gap-4">
                <div className="w-full h-[115px] px-[30px] py-[43px] bg-[#4c37ee] rounded-[10px] shadow flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="w-[145px] text-[#fffff0] text-2xl font-semibold font-sans leading-relaxed tracking-tight">Mentor <br/>Aktif</div>
                        <div className="w-[41px] h-7 text-[#fffff0] text-[40px] font-bold font-sans items-center justify-center inline-flex">6</div>
                    </div>
                </div>
                <div className="w-full h-[115px] px-[30px] py-[43px] bg-[#fb6816] rounded-[10px] shadow flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="w-[145px] text-[#fffff0] text-2xl font-semibold font-sans leading-relaxed tracking-tight">Mentor <br/>Peserta</div>
                        <div className="w-[41px] h-7 text-[#fffff0] text-[40px] font-bold font-sans items-center justify-center inline-flex">20</div>
                    </div>
                </div>
                <div className="w-full h-[115px] px-[30px] py-[43px] bg-[#4c37ee] rounded-[10px] shadow flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="w-[145px] text-[#fffff0] text-2xl font-semibold font-sans leading-relaxed tracking-tight">Total <br/>Mentor</div>
                        <div className="w-[41px] h-7 text-[#fffff0] text-[40px] font-bold font-sans items-center justify-center inline-flex">6</div>
                    </div>
                </div>
                <div className="w-full h-[115px] px-[30px] py-[43px] bg-[#fb6816] rounded-[10px] shadow flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="w-[145px] text-[#fffff0] text-2xl font-semibold font-sans leading-relaxed tracking-tight">Total <br/>Peserta</div>
                        <div className="w-[41px] h-7 text-[#fffff0] text-[40px] font-bold font-sans items-center justify-center inline-flex">20</div>
                    </div>
                </div>
                </div>
                <div className="grid md:grid-cols-2 sm:grid-cols-1  mb-[40px] justify-between gap-4 mt-[40px]">
                        <div className="w-full h-[388px] px-[30px] py-3.5 bg-[#d2d2d2] rounded-[15px] shadow flex-col justify-between items-center inline-flex">
                            <div className="w-[495px] grow shrink basis-0 flex-col justify-between items-center flex">
                                <div className="self-stretch text-black text-2xl font-semibold font-['Plus Jakarta Sans'] leading-relaxed tracking-tight">E-Learning</div>
                                <div className="w-[274px] h-[274px] shadow justify-center items-center inline-flex">
                                    <div className="w-[274px] h-[274px] relative">
                                        <img className=" absolute" src="/src/assets/diagramelearning.svg" />
                                    </div>
                                </div>
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-2.5 h-2.5 bg-[#4c37ee] rounded-full" />
                                        <div className="text-black text-sm font-bold font-['Plus Jakarta Sans'] leading-[19px] tracking-tight">CV</div>
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-2.5 h-2.5 bg-[#fb6816] rounded-full" />
                                        <div className="text-black text-sm font-bold font-['Plus Jakarta Sans'] leading-[19px] tracking-tight">Portofolio</div>
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-2.5 h-2.5 bg-[#23ffca] rounded-full" />
                                        <div className="text-black text-sm font-bold font-['Plus Jakarta Sans'] leading-[19px] tracking-tight">Interview</div>
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-2.5 h-2.5 bg-[#fffff0] rounded-full" />
                                        <div className="text-black text-sm font-bold font-['Plus Jakarta Sans'] leading-[19px] tracking-tight">Bank Soal</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="w-full h-[388px] px-[22px] py-4 bg-[#d2d2d2] rounded-[15px] shadow flex-col justify-center items-center gap-2.5 inline-flex">
                            <div className="w-[503px] grow shrink basis-0 flex-col justify-between items-center flex">
                                <div className="self-stretch text-black text-2xl font-semibold font-['Plus Jakarta Sans'] leading-relaxed tracking-tight">Mentoring</div>
                                <div className="w-[274px] h-[274px] shadow justify-center items-center inline-flex">
                                    <div className="w-[274px] h-[274px] relative">
                                        <img className="wabsolute" src="/src/assets/diagrammentoring.svg" />
                                    </div>
                                </div>
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-2.5 h-2.5 bg-[#4c37ee] rounded-full" />
                                        <div className="text-black text-sm font-bold font-['Plus Jakarta Sans'] leading-[19px] tracking-tight">Review CV</div>
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-2.5 h-2.5 bg-[#fb6816] rounded-full" />
                                        <div className="text-black text-sm font-bold font-['Plus Jakarta Sans'] leading-[19px] tracking-tight">Review Portofolio</div>
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-2.5 h-2.5 bg-[#23ffca] rounded-full" />
                                        <div className="text-black text-sm font-bold font-['Plus Jakarta Sans'] leading-[19px] tracking-tight">Latihan Interview</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Dashboard
