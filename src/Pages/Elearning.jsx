import Navbar from "../Components/Elements/Navbar/Navbar";
import Footer from "../Components/Elements/Footer/Footer";
import RadioButton from "../Components/Elements/RadioButton/RadioButton";
// import ContentCard from "../Components/Elements/ContentCard/ContentCard";
import ContentList from "../Components/Fragments/ContentList/ContentList";
import { useState,useEffect } from "react";
import getAllContent from "../Service/getAllContent";
import getAllSoal from "../Service/getAllSoal";
import SoalList from "../Components/Fragments/SoalList/SoalList";

const Elearning = () => {
  const [contents, setContents] = useState([]);
  const [soals, setSoals] = useState([]);
  const [filterValue, setFilterValue] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    let allContents = getAllContent()
    allContents = allContents.length > 0 ? allContents : []
    setContents(allContents)
  }, [])

  useEffect(() => {
    let allSoals = getAllSoal()
    allSoals = allSoals.length > 0 ? allSoals : []
    setSoals(allSoals)
  }, [])

const filteredContents = contents.filter((content) =>
  (filterValue === 'all' || content?.Categori?.toLowerCase().includes(filterValue.toLowerCase())) &&
  content?.title?.toLowerCase().includes(searchQuery.toLowerCase())
);

// const handleInputChange = (e) => {
//   setSearchValue(e.target.value)
// };

console.log(filteredContents)

const handleInputChange = (e) => {
  setSearchQuery(e.target.value);
  setSearchValue(e.target.value);
};

  const RadioButtonOpts = [

    {
      label: 'All',
      value: 'all'
    },
    {
      label: 'CV',
      value: 'CV'
    },
    {
      label: 'Portfolio',
      value: 'Portfolio',
    },
    {
      label: 'Interview',
      value: 'Interview',
    },
  ]


  return (
    <div>
      <Navbar onSearch={setSearchQuery} />
      <img src="/public/assets/Banner eleerning.png" alt="" className="w-full mt-[64px] z-0 h-[245px] object-cover"/>
      <div className=" -mt-[245px] mb-[20px]">
        <div className="w-full h-[245px] px-[150px] py-[50px] bg-black bg-opacity-50 flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="h-[145px] flex-col justify-start items-start gap-3 flex">
              <div className="text-[#fffff0] text-[40px] font-bold font-['Plus Jakarta Sans'] leading-[44px] opacity-100">Persiapkan Diri Lebih Baik, <br/>Mulai Karier dengan Percaya Diri!</div>
              <div className="self-stretch h-[45px] text-[#fffff0] text-lg font-normal font-['Plus Jakarta Sans'] opacity-100 leading-snug">Dapatkan panduan lengkap membuat CV yang menarik, membangun portfolio profesional, dan menghadapi interview kerja dengan percaya diri. Pelajari juga soal-soal umum psikotes untuk semakin siap memasuki dunia kerja.</div>
          </div>
        </div>
      </div>
      <div className='w-full px-[150px] mb-[32px]'>
          <div className="grow shrink basis-0 shadow-xl rounded-full self-stretch p-1 justify-start bg-[#f9f9f9] items-center flex">
              <div className='items-center rounded-tl-full rounded-bl-full pl-[10px] p-1 bg-[#f9f9f9] flex'>
              <img src="/src/assets/menu.svg" className="w-10 h-10 flex-col bg-[#f9f9f9] justify-center items-center gap-2.5 inline-flex"/>
              </div>
              <div className="grow shrink basis-0 self-stretch bg-[#f9f9f9] justify-start items-center gap-2.5 flex">
                  <input
                      type="text"
                      name="search"
                      id="search-bar"
                      value={searchValue}
                      onChange={handleInputChange}
                      placeholder='Hinted search text...'
                      className="text-[#49454f] text-sm font-bold font-['Plus Jakarta Sans'] border-black px-[20px] leading-[19px] tracking-tight h-[30px] w-full bg-[#f9f9f9]"/>

              </div>
              <div className="justify-end items-center rounded-tr-full pr-[10px] rounded-br-full p-2 bg-[#f9f9f9] flex">
                  <img src="/src/assets/search.svg" className="w-8 h-8  flex-col bg-[#f9f9f9] justify-center items-center gap-2.5 inline-flex"/>
              </div>
          </div>
      </div>
      <div className="flex justify-center items-center mb-[32px]">
          <RadioButton options={RadioButtonOpts} defaultValue={'all'} onChange={(value) => setFilterValue(value)}/>
      </div>

      <div className="justify-between mx-[150px] mb-[32px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-4 text-[#FFFFF0]">
      <ContentList contents={filteredContents} />
      </div>
      <div className="flex items-center justify-start gap-4 mb-[32px]">
            <div className="h-[3px] w-[150px] bg-black flex rounded-full" />
            <h2 className="text-2xl font-semibold  whitespace-nowrap">Bank Soal</h2>
            <div className="h-[3px] bg-black flex-1 rounded-full" />
        </div>
        <div className="justify-between mx-[150px] mb-[32px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-4 text-[#FFFFF0]">
      <SoalList soals={soals} />
      </div>


      <Footer/>
    </div>
  );
};

export default Elearning;
