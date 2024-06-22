import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import logo_putih from "../../assets/svg/logo_putih.svg";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Footer = () => {
    const media_social = useRef([]);

    useEffect(() => {
        setTimeout(() => {
            gsap.from(media_social.current, {
                scrollTrigger: {
                    trigger: media_social.current,
                },
                y: 100,
                stagger: 0.1,
                opacity: 0,
                duration: 1,
            });
        }, 100);
    }, []);

    return (
        <footer className="relative px-32 py-24 bg-gradient-to-br from-yellow-400 to-yellow-600 flex flex-col gap-8">
            <div className="flex w-full justify-between items-center">
                <Link href={route("Beranda")}>
                    <img src={logo_putih} />
                </Link>
                <div className="flex items-center gap-8">
                    <Link href="#" ref={(el) => (media_social.current[0] = el)}>
                        <FaFacebook fontSize={46} className="text-white hover:text-yellow-900 transition-colors" />
                    </Link>
                    <Link href="#" ref={(el) => (media_social.current[1] = el)}>
                        <RiInstagramFill fontSize={46} className="text-white hover:text-yellow-900 transition-colors" />
                    </Link>
                    <Link href="#" ref={(el) => (media_social.current[2] = el)}>
                        <BsTwitterX fontSize={46} className="text-white hover:text-yellow-900 transition-colors" />
                    </Link>
                    <Link href="#" ref={(el) => (media_social.current[3] = el)}>
                        <MdEmail fontSize={46} className="text-white hover:text-yellow-900 transition-colors" />
                    </Link>
                    <Link href="#" ref={(el) => (media_social.current[4] = el)}>
                        <FaYoutube fontSize={46} className="text-white hover:text-yellow-900 transition-colors" />
                    </Link>
                </div>
                <div className="flex flex-col items-end gap-2">
                    <Link src="#" className="text-xl font-semibold text-white hover:text-yellow-900 transition-colors">
                        Beranda
                    </Link>
                    <Link src="#" className="text-xl font-semibold text-white hover:text-yellow-900 transition-colors">
                        Profile
                    </Link>
                    <Link src="#" className="text-xl font-semibold text-white hover:text-yellow-900 transition-colors">
                        Berita & Agenda
                    </Link>
                    <Link src="#" className="text-xl font-semibold text-white hover:text-yellow-900 transition-colors">
                        Kontak
                    </Link>
                </div>
            </div>
            <motion.div
                className="w-full h-[3px] bg-slate-800 rounded-full opacity-20"
                initial={{ width: 0 }}
                whileInView={{ width: "100%", opacity: 0.2, transition: { duration: 1.5, delay: 0.3 } }}
                viewport={{ once: true }}
            ></motion.div>
            <div className="flex justify-between w-full">
                <p className="text-base text-white">Ganefri</p>
                <div className="text-white font-semibold flex gap-2 items-center">
                    Made With{" "}
                    <span className="flex gap-2 bg-black bg-opacity-20 p-2 rounded-xl">
                        <img src="https://seeklogo.com/images/S/sampoerna-mild-logo-92AE43FE45-seeklogo.com.png" alt="sampoerna" className="w-8 object-contain" />
                        <img src="https://seeklogo.com/images/C/camel-logo-08A6AE9608-seeklogo.com.png" alt="camel" className="w-8 object-contain" />
                        <img src="https://seeklogo.com/images/G/gudang-garam-filter-logo-CB3A42FF9A-seeklogo.com.png" alt="surya" className="w-8 object-contain" />
                        <img src="https://seeklogo.com/images/L/lucky-strike-logo-E087C394A4-seeklogo.com.png" alt="lucky_strike" className="w-8 object-contain" />
                        <img src="https://seeklogo.com/images/D/djarum-super-logo-788BD92761-seeklogo.com.png" alt="djarum" className="w-8 object-contain" />
                    </span>{" "}
                    by Mike
                </div>
            </div>
        </footer>
    );
};

export default Footer;
