import { Link } from "@inertiajs/react";
import logo_hitam from "../../assets/svg/logo_hitam.svg";
import { MdOutlineEmail } from "react-icons/md";
import route from "ziggy-js";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { CgMenu } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TbX } from "react-icons/tb";
import gsap from "gsap";

const Header = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
    const currentRoute = useSelector((state) => state.currentRoute);

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleBurgerMenu = () => {
        if (isNavbarOpen) {
            setIsNavbarOpen(false);
            gsap.timeline()
                .to("#closeIconMenu", {
                    rotate: "+=180",
                    duration: 0.5,
                    ease: "power3.in",
                    onComplete: () => {
                        document.getElementById("closeIconMenu").classList.add("hidden");
                        document.getElementById("openIconMenu").classList.remove("hidden");
                    },
                })
                .to("#openIconMenu", { rotate: "+=180", duration: 0.5, ease: "power3.out" });
        } else {
            gsap.timeline()
                .to("#openIconMenu", {
                    rotate: "+=180",
                    duration: 0.5,
                    ease: "power3.in",
                    onComplete: () => {
                        document.getElementById("openIconMenu").classList.add("hidden");
                        document.getElementById("closeIconMenu").classList.remove("hidden");
                    },
                })
                .to("#closeIconMenu", { rotate: "+=180", duration: 0.5, ease: "power3.out" });
            setIsNavbarOpen(true);
        }
    };

    return (
        <div className={`relative z-50 bg-white flex justify-between items-center border-b-2 ${isMobile ? "p-4" : "px-32 py-8"}`}>
            <Link href={route("Beranda")} className="relative z-[60]">
                <img src={logo_hitam}></img>
            </Link>
            {isMobile ? (
                <>
                    <div
                        className="text-slate-800 cursor-pointer hover:bg-yellow-100 hover:text-yellow-500 p-1 box-content rounded-lg transition-colors relative z-[60]"
                        onClick={handleBurgerMenu}
                    >
                        <CgMenu fontSize={32} id="openIconMenu" />
                        <TbX fontSize={32} className="hidden" id="closeIconMenu" />
                    </div>
                    <AnimatePresence>
                        {isNavbarOpen ? (
                            <motion.div
                                className="absolute w-full h-screen top-0 left-0 bg-gradient-to-br from-yellow-200 via-white to-white flex flex-col items-center justify-center gap-8 z-50"
                                initial={{ left: "-101%" }}
                                animate={{ left: 0 }}
                                exit={{ left: "-100%" }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                            >
                                <div className="flex flex-col gap-8 items-center">
                                    <Link
                                        href={route("Beranda")}
                                        className={`text-xl font-semibold ${
                                            currentRoute == "Beranda" ? "text-yellow-400" : "text-slate-400 hover:text-yellow-800 transition-colors"
                                        }`}
                                    >
                                        Beranda
                                    </Link>
                                    <Link
                                        href={route("Profil")}
                                        className={`text-xl font-semibold ${
                                            currentRoute == "Profil" ? "text-yellow-400" : "text-slate-400 hover:text-yellow-800 transition-colors"
                                        }`}
                                    >
                                        Profil
                                    </Link>
                                    <Link
                                        href={route("Berita")}
                                        className={`text-xl font-semibold ${
                                            currentRoute == "Berita" ? "text-yellow-400" : "text-slate-400 hover:text-yellow-800 transition-colors"
                                        }`}
                                    >
                                        Berita & Agenda
                                    </Link>
                                </div>
                                <Link
                                    href={route("Kontak")}
                                    className={`text-lg font-semibold flex items-center gap-2 px-6 py-3 border-2 rounded-xl border-yellow-500 transition-colors ${
                                        currentRoute == "Kontak" ? "bg-yellow-500 text-white" : "text-yellow-500 hover:bg-yellow-500 hover:text-white"
                                    }`}
                                >
                                    <MdOutlineEmail className="text-2xl" />
                                    Kontak
                                </Link>
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </>
            ) : (
                <>
                    <div className="flex gap-8">
                        <Link
                            href={route("Beranda")}
                            className={`text-xl font-semibold ${
                                currentRoute == "Beranda" ? "text-yellow-400" : "text-slate-400 hover:text-yellow-800 transition-colors"
                            }`}
                        >
                            Beranda
                        </Link>
                        <Link
                            href={route("Profil")}
                            className={`text-xl font-semibold ${
                                currentRoute == "Profil" ? "text-yellow-400" : "text-slate-400 hover:text-yellow-800 transition-colors"
                            }`}
                        >
                            Profil
                        </Link>
                        <Link
                            href={route("Berita")}
                            className={`text-xl font-semibold ${
                                currentRoute == "Berita" ? "text-yellow-400" : "text-slate-400 hover:text-yellow-800 transition-colors"
                            }`}
                        >
                            Berita & Agenda
                        </Link>
                    </div>
                    <Link
                        href={route("Kontak")}
                        className={`text-lg font-semibold flex items-center gap-2 px-6 py-3 border-2 rounded-xl border-yellow-500 transition-colors ${
                            currentRoute == "Kontak" ? "bg-yellow-500 text-white" : "text-yellow-500 hover:bg-yellow-500 hover:text-white"
                        }`}
                    >
                        <MdOutlineEmail className="text-2xl" />
                        Kontak
                    </Link>
                </>
            )}
        </div>
    );
};

export default Header;
