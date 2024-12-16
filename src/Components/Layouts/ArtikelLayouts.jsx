import ArtikelSamping from "../Elements/ArtikelSamping/ArtikelSamping";
const ArtikelLayouts = () => {
    return (
        <div>
            
                            <div className=" absolute ml-[950px] top-[400px] w-[362px] h-[439px] flex-col justify-start items-start gap-[26px] inline-flex">
                                <div className="self-stretch h-14 bg-[#fffff0] rounded-[10px] shadow justify-start items-center gap-1 inline-flex">
                                    <div className="grow shrink basis-0 self-stretch p-1 justify-start items-center gap-1 flex">
                                        <img src="/src/assets/menu.svg" className="w-10 h-10 flex-col justify-center items-center gap-2.5 inline-flex"/>
                                        <div className="grow shrink basis-0 self-stretch justify-start items-center gap-2.5 flex">
                                            <input
                                             type="text"
                                             name="search" 
                                             placeholder='Hinted search text...'  
                                             className="text-[#49454f] text-sm font-bold font-['Plus Jakarta Sans'] leading-[19px] tracking-tight h-[30px] w-[250px] bg-[#fffff0]"/>
                                        </div>
                                        <div className="justify-end items-center flex">
                                            <img src="/src/assets/search.svg" className="w-8 h-8 flex-col justify-center items-center gap-2.5 inline-flex"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch h-[357px] flex-col justify-start items-end flex">
                            
                                    <ArtikelSamping
                                    Img='/src/assets/artikelsamping1.png'
                                    Judul='Data Scientist: Profesi dengan Prospek Tinggi di Era Big Data'
                                    To='/artikelbaca3'
                                    />

                                    <ArtikelSamping
                                    Img='/src/assets/artikelsamping2.png'
                                    Judul='Game Developer: Pencipta Dunia Virtual yang Menarik dan Interaktif'
                                    To='/'
                                    />

                                    <ArtikelSamping
                                    Img='/src/assets/artikelsamping3.png'
                                    Judul='Digital Marketing Specialist: Peran Penting dalam Pemasaran Modern'
                                    To='/'
                                    />

                                </div>
                            </div>

        </div>
    )
}
export default ArtikelLayouts