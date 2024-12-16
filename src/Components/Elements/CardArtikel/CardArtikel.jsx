import Button from "../Button/Index";
const CardArtikel = ({artikel = {}}) =>{
    const {Img,Judul,description, slug} = artikel
    return (
        <div className="h-[247px] w-[589px] p-4 bg-[#fffff0] rounded-[10px] shadow-xl mb-[16px] justify-start items-center gap-4 inline-flex">
            <img src= {Img} alt={Img} className='w-[233px] h-[215px] object-cover relative rounded-md' />
            <div className='grow shrink basis-0 self-stretch px-2 py-3 flex-col justify-start items-start gap-2 inline-flex'>
                <div className='self-stretch grow shrink basis-0 flex-col justify-start items-start gap-3 flex'>
                    <h1 className="self-stretch text-black text-lg font-semibold font-sans leading-snug line-clamp-2">{Judul}</h1>
                    <p className='self-stretch text-black text-base font-normal font-sans leading-[19px] line-clamp-6'>{description}</p>
                </div>
                <Button type ='Link' to={`/detailartikel/${slug}`} classname='h-[30px] px-[18px] py-1.5 rounded-[15px] border border-[#fb6816] justify-center items-center gap-1.5 text-[#fb6816] hover:text-[#fdab7f] hover:border-[#fdab7f] flex'> Selengkapnya </Button>
            </div>
        </div>

    )
}
export default CardArtikel;
