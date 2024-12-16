import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="w-full h-[125px] px-[150px] py-2.5 bg-[#fb6816] justify-between items-center inline-flex">
            <img className="w-[177px] h-11" src="/src/assets/Logo Navbar 2.png" />
                <div className="justify-start items-center gap-[31px] flex">
                    <Link to={'/'} className="justify-start items-start gap-2 flex">
                        <img src='/src/assets/markunread.svg' alt='' className="w-6 h-6 relative" />
                <div className="text-[#fffff0] text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug hover:text-orange-200 transition cursor-pointer">Kontak</div>
                    </Link>
                    <Link to={'/'} className="justify-start items-center gap-2 flex">
                        <img src='/src/assets/assignment_in.svg' className="w-6 h-6 relative" />
                <div className="text-[#fffff0] text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug hover:text-orange-200 transition cursor-pointer">Tentang Kami</div>
                    </Link>
                    <Link to={'/'} className="justify-start items-start gap-2 flex">
                        <img src='/src/assets/announcement.svg' className="w-6 h-6 relative" />
                <div className="text-[#fffff0] text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug hover:text-orange-200 transition cursor-pointer">Bantuan</div>
                    </Link>
        </div>
        </div>
    )
}
export default Footer;