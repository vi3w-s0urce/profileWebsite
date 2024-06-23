import { Link } from "@inertiajs/react";
import logo_hitam from "../../assets/svg/logo_hitam.svg";
import { MdOutlineEmail } from "react-icons/md";
import route from "ziggy-js";

const Header = () => {
    return (
        <div className="relative z-50 bg-white flex px-32 py-8 justify-between items-center border-b-2">
            <Link href={route("Beranda")}>
                <img src={logo_hitam}></img>
            </Link>
            <div className="flex gap-8">
                <Link href={route('Beranda')} className="text-xl text-slate-400 font-semibold">
                    Beranda
                </Link>
                <Link href={route('Profil')} className="text-xl text-slate-400 font-semibold">
                    Profil
                </Link>
                <Link href={route('Berita')} className="text-xl text-slate-400 font-semibold">
                    Berita & Agenda
                </Link>
            </div>
            <Link
                href="#"
                className="text-lg font-semibold text-yellow-500 flex items-center gap-2 px-6 py-3 border-2 border-yellow-500 rounded-xl hover:bg-yellow-500 hover:text-white transition-all"
            >
                <MdOutlineEmail className="text-2xl" />
                Kontak
            </Link>
        </div>
    );
};

export default Header;
