const CardHistory = (props) => {
    const { Img, Alt, Judul, Category} = props
    return (
        <div className="w-[256px] h-[244px] bg-[#4c37ee] flex flex-col rounded-md">
            <img src={Img} alt={Alt} className="w-[256px] h-[144px] rounded-tl-md rounded-tr-md" />
            <h1 className="text-[18px] text-[#fffff0] flex-wrap mx-[20px] mt-[8px]">{ Judul }</h1>
            <h6 className="text-[14px] text-[#23ffca] font-bold mx-[20px]">{ Category }</h6>
        </div>
    )
}