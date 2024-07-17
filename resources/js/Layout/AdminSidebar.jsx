import { Link } from "@inertiajs/react";
import logo_putih from "../../assets/svg/logo_putih.svg";
import route from "ziggy-js";
import { RxDashboard } from "react-icons/rx";
import { PiCards } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TbLogout2, TbNews } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const AdminSidebar = () => {
    const arrowMenu = useRef();
    const currentRoute = useSelector((state) => state.currentRoute);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (currentRoute == "HalamanBeranda" || currentRoute == "HalamanProfil") {
            setIsMenuOpen(true);
        } else {
            setIsMenuOpen(false);
        }
    }, [currentRoute]);

    const handleMenuOpen = () => {
        if (currentRoute !== "HalamanBeranda" && currentRoute !== "HalamanProfil") {
            if (isMenuOpen) {
                setIsMenuOpen(false);
                gsap.to(arrowMenu.current, {
                    rotate: "+=180",
                    duration: 0.5,
                    ease: "power3.out",
                });
            } else {
                setIsMenuOpen(true);
                gsap.to(arrowMenu.current, {
                    rotate: "+=180",
                    duration: 0.5,
                    ease: "power3.out",
                });
            }
        }
    };

    return (
        <nav className="fixed px-6 py-8 w-[300px] h-screen bg-yellow-400 top-0 left-0 flex flex-col justify-between">
            <div>
                <img src={logo_putih} alt="logo_putih" className="mb-12" />
                <div>
                    <p className="text-yellow-800 font-medium mb-6">Menu</p>
                    <div className="flex flex-col gap-4">
                        <Link
                            href={route("AdminDashboard")}
                            className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-colors ${
                                currentRoute == "Dashboard" ? "text-yellow-400 bg-white" : "text-white rounded-2xl hover:bg-yellow-500"
                            }`}
                        >
                            <RxDashboard fontSize={24} />
                            <span className="text-xl font-semibold">Dashboard</span>
                        </Link>
                        <div className="flex flex-col">
                            <div
                                className={`flex items-center justify-between gap-3 px-4 py-3 text-white rounded-2xl cursor-pointer transition-colors ${
                                    isMenuOpen && !currentRoute == "HalamanBeranda" && !currentRoute == "HalamanProfil"
                                        ? "bg-yellow-500"
                                        : currentRoute == "HalamanBeranda" || currentRoute == "HalamanProfil"
                                        ? "text-yellow-400 bg-white"
                                        : isMenuOpen
                                        ? "bg-yellow-500"
                                        : "hover:bg-yellow-500"
                                }`}
                                onClick={() => handleMenuOpen()}
                            >
                                <div className="flex items-center gap-3">
                                    <PiCards fontSize={24} />
                                    <span className="text-xl font-semibold">Halaman</span>
                                </div>
                                <div ref={arrowMenu}>
                                    <IoIosArrowDown fontSize={24} />
                                </div>
                            </div>
                            <AnimatePresence>
                                {isMenuOpen ? (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: "initial" }}
                                        exit={{ height: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="overflow-hidden"
                                    >
                                        <Link href={route("AdminHalamanBeranda")} className="flex items-center gap-3 px-4 text-white rounded-2xl group">
                                            <div
                                                className={`w-[4px] h-[56px] mr-[12px] ml-[12px] ${
                                                    currentRoute == "HalamanBeranda" || currentRoute == "HalamanProfil" ? "bg-white" : "bg-yellow-500"
                                                }`}
                                            ></div>
                                            <span
                                                className={`text-xl font-semibold group-hover:text-white transition-colors ${
                                                    currentRoute == "HalamanBeranda" ? "text-white" : "text-yellow-200"
                                                }`}
                                            >
                                                Beranda
                                            </span>
                                        </Link>
                                        <Link href={route("AdminHalamanProfil")} className="flex items-center gap-3 px-4 text-white rounded-2xl group">
                                            <div
                                                className={`w-[4px] h-[56px] mr-[12px] ml-[12px] rounded-ee-full rounded-es-full ${
                                                    currentRoute == "HalamanBeranda" || currentRoute == "HalamanProfil" ? "bg-white" : "bg-yellow-500"
                                                }`}
                                            ></div>
                                            <span
                                                className={`text-xl font-semibold group-hover:text-white transition-colors ${
                                                    currentRoute == "HalamanProfil" ? "text-white" : "text-yellow-200"
                                                }`}
                                            >
                                                Profil
                                            </span>
                                        </Link>
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>
                        </div>
                        <Link
                            href={route("BeritaIndexAdmin")}
                            className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-colors ${
                                currentRoute == "Berita" ? "text-yellow-400 bg-white" : "text-white rounded-2xl hover:bg-yellow-500"
                            }`}
                        >
                            <TbNews fontSize={24} />
                            <span className="text-xl font-semibold">Berita & Agenda</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <Link
                    href={route("PengaturanAdmin")}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-colors ${
                        currentRoute == "PengaturanAdmin" ? "text-yellow-400 bg-white" : "text-white rounded-2xl hover:bg-yellow-500"
                    }`}
                >
                    <IoSettingsOutline fontSize={24} />
                    <span className="text-xl font-semibold">Pengaturan</span>
                </Link>
                <Link href={route('LogoutAdmin')} className="flex items-center gap-3 px-4 py-3 text-yellow-800 rounded-2xl hover:bg-yellow-500 transition-colors">
                    <TbLogout2 fontSize={24} />
                    <span className="text-xl font-semibold">Keluar</span>
                </Link>
            </div>
        </nav>
    );
};

export default AdminSidebar;
