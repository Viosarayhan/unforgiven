import Navbar from "../../Components/Elements/Navbar/Navbar";
import Footer from "../../Components/Elements/Footer/Footer";
import ArtikelSampingList from "../../Components/Fragments/ArtikelSampingList/ArtikelSampingList";
import getAllArtikel from "../../Service/getAllArtikel";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailArtikel = () => {
  const [artikels, setArtikels] = useState([]);
  const { slug } = useParams();
  const [artikel, setArtikel] = useState(null);

  useEffect(() => {
    const allArtikels = getAllArtikel();
    const selectedArtikel = allArtikels.find((item) => item.slug === slug);

    if (selectedArtikel) {
      const sameCategoryArtikels = allArtikels.filter(
        (item) => item.Categori === selectedArtikel.Categori && item.slug !== slug
      );

      const otherCategoryContents = allArtikels
        .filter((item) => item.Categori !== selectedArtikel.Categori)
        .sort(() => Math.random() - 0.5);

      const finalArtikels = [
        ...sameCategoryArtikels,
        ...otherCategoryContents.slice(0, 4 - sameCategoryArtikels.length),
      ].slice(0, 4);

      setArtikels(finalArtikels);
    }

    setArtikel(selectedArtikel || null);
  }, [slug]);

  if (!artikel) {
    return (
      <div className="flex w-full h-full justify-center items-center">
        <h1 className="text-4xl text-pink-600">PRODUCT NOT FOUND</h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="absolute ml-[950px] top-[400px] w-[362px]">
        <div className="bg-[#fffff0] rounded-[10px] shadow p-2 flex items-center gap-2">
          <img src="/src/assets/menu.svg" alt="menu" className="w-10 h-10" />
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className="flex-grow text-sm font-bold leading-5 text-[#49454f] bg-[#fffff0]"
          />
          <img src="/src/assets/search.svg" alt="search" className="w-8 h-8" />
        </div>
        <div className="mt-5">
          <ArtikelSampingList artikels={artikels} />
        </div>
      </div>
      <div className="mt-[62px] mb-[20px]">
        <img
          src={artikel.Img}
          alt={artikel.Judul}
          className="w-full h-[300px] object-cover"
        />
        <div className="ml-[150px] mt-[20px] mb-[20px] w-[750px]">
          <h1 className="text-black text-[32px] font-semibold">{artikel.Judul}</h1>
          <div className="mt-[35px]">{artikel.isi}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailArtikel;
