import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import logo_putih from "../../assets/svg/logo_putih.svg";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import route from "ziggy-js";
import axios from "axios";

const Footer = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
    const media_social = useRef([]);

    useEffect(() => {
        setTimeout(() => {
            if (isMobile) {
                gsap.from(media_social.current, {
                    scrollTrigger: {
                        trigger: media_social.current,
                    },
                    y: 20,
                    stagger: 0.1,
                    opacity: 0,
                    duration: 1,
                });
            } else {
                gsap.from(media_social.current, {
                    scrollTrigger: {
                        trigger: media_social.current,
                    },
                    y: 50,
                    stagger: 0.1,
                    opacity: 0,
                    duration: 1,
                });
            }
        }, 100);
    }, []);

    const [msDb, setMsDb] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(route("getMsDb")); // Ganti dengan URL API Anda
                setMsDb(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <footer
            className={`relative bg-gradient-to-br from-yellow-400 to-yellow-600 flex flex-col items-center ${
                isMobile ? "px-4 py-8 gap-8" : "px-32 py-8 gap-8"
            }`}
        >
            <div className="flex w-full justify-between items-center">
                <Link href={route("Beranda")}>
                    <img src={logo_putih} />
                </Link>
                {!isMobile ? (
                    <div className="flex items-center gap-8">
                        <a href={msDb && msDb[0].link} ref={(el) => (media_social.current[0] = el)} className={`${ msDb && !msDb[0].isVisible && "hidden"}`}>
                            <FaFacebook fontSize={46} className="text-white hover:text-yellow-900 transition-colors" />
                        </a>
                        <a href={msDb && msDb[1].link} ref={(el) => (media_social.current[1] = el)} className={`${ msDb && !msDb[1].isVisible && "hidden"}`}>
                            <RiInstagramFill fontSize={46} className="text-white hover:text-yellow-900 transition-colors" />
                        </a>
                        <a href={msDb && msDb[2].link} ref={(el) => (media_social.current[2] = el)} className={`${ msDb && !msDb[2].isVisible && "hidden"}`}>
                            <BsTwitterX fontSize={46} className="text-white hover:text-yellow-900 transition-colors" />
                        </a>
                        <a href={`mailto:${msDb && msDb[3].email}`} ref={(el) => (media_social.current[3] = el)} className={`${ msDb && !msDb[3].isVisible && "hidden"}`}>
                            <MdEmail fontSize={46} className="text-white hover:text-yellow-900 transition-colors" />
                        </a>
                        <a href={msDb && msDb[4].link} ref={(el) => (media_social.current[4] = el)} className={`${ msDb && !msDb[4].isVisible && "hidden"}`}>
                            <FaYoutube fontSize={46} className="text-white hover:text-yellow-900 transition-colors" />
                        </a>
                    </div>
                ) : null}
                {/* MENU */}
                <div className="flex flex-col items-end gap-2">
                    <Link
                        href={route("Beranda")}
                        className={`font-semibold text-white hover:text-yellow-900 transition-colors ${isMobile ? "text-xs" : "text-xl"}`}
                    >
                        Beranda
                    </Link>
                    <Link
                        href={route("Profil")}
                        className={`text-xl font-semibold text-white hover:text-yellow-900 transition-colors ${isMobile ? "text-xs" : "text-xl"}`}
                    >
                        Profil
                    </Link>
                    <Link
                        href={route("Berita")}
                        className={`text-xl font-semibold text-white hover:text-yellow-900 transition-colors ${isMobile ? "text-xs" : "text-xl"}`}
                    >
                        Berita & Agenda
                    </Link>
                </div>
            </div>
            {isMobile ? (
                <div className="flex items-center w-full justify-center gap-8">
                    <a href={msDb && msDb[0].link} ref={(el) => (media_social.current[0] = el)} className={`${ msDb && !msDb[0].isVisible && "hidden"}`}>
                        <FaFacebook fontSize={16} className="text-white hover:text-yellow-900 transition-colors" />
                    </a>
                    <a href={msDb && msDb[1].link} ref={(el) => (media_social.current[1] = el)} className={`${ msDb && !msDb[1].isVisible && "hidden"}`}>
                        <RiInstagramFill fontSize={16} className="text-white hover:text-yellow-900 transition-colors" />
                    </a>
                    <a href={msDb && msDb[2].link} ref={(el) => (media_social.current[2] = el)} className={`${ msDb && !msDb[2].isVisible && "hidden"}`}>
                        <BsTwitterX fontSize={16} className="text-white hover:text-yellow-900 transition-colors" />
                    </a>
                    <a href={`mailto:${msDb && msDb[3].email}`} ref={(el) => (media_social.current[3] = el)} className={`${ msDb && !msDb[3].isVisible && "hidden"}`}>
                        <MdEmail fontSize={16} className="text-white hover:text-yellow-900 transition-colors" />
                    </a>
                    <a href={msDb && msDb[4].link} ref={(el) => (media_social.current[4] = el)} className={`${ msDb && !msDb[4].isVisible && "hidden"}`}>
                        <FaYoutube fontSize={16} className="text-white hover:text-yellow-900 transition-colors" />
                    </a>
                </div>
            ) : null}
            <motion.div
                className="w-full h-[3px] bg-slate-800 rounded-full opacity-20"
                initial={{ width: 0 }}
                whileInView={{ width: "100%", opacity: 0.2, transition: { duration: 1.5, delay: 0.3 } }}
                viewport={{ once: true }}
            ></motion.div>
            <div className="flex justify-between w-full items-center">
                <p className={`text-base text-white font-medium`} style={isMobile ? { fontSize: 10 } : { fontSize: 16 }}>
                    Ganefri
                </p>
                <a href="https://github.com/vi3w-s0urce" className="text-white font-mono font-semibold flex gap-2 items-center hover:text-green-800" style={isMobile ? { fontSize: 10 } : { fontSize: 16 }}>
                    Made by view_source
                </a>
            </div>
        </footer>
    );
};

export default Footer;
