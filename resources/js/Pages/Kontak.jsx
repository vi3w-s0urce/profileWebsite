import Header from "../Layout/Header";
import HeroSection from "../Layout/HeroSection";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { LuPenLine } from "react-icons/lu";
import { BsTextParagraph } from "react-icons/bs";
import { TbSend2 } from "react-icons/tb";
import { GrPowerReset } from "react-icons/gr";
import { motion } from "framer-motion";
import kontak_title_filled_svg from "../../assets/svg/shapes/kontak_title_filled.svg";
import kontak_title_outline_svg from "../../assets/svg/shapes/kontak_title_outline.svg";
import blob_yellow_line_svg from "../../assets/svg/shapes/blob_yellow_line.svg";
import dot_yellow_svg from "../../assets/svg/shapes/dot_yellow.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import MediaSocialSection from "../Layout/MediaSocialSection";
import Footer from "../Layout/Footer";
import { Head } from "@inertiajs/react";
import { useDispatch } from "react-redux";
import { setCurrentRoute } from "../Redux/slice";
import { useMediaQuery } from "react-responsive";

const Kontak = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

    const blob_yellow_line = useRef();
    const dot_yellow = useRef();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentRoute("Kontak"));

        gsap.to(blob_yellow_line.current, {
            scrollTrigger: {
                trigger: blob_yellow_line.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            top: "-=200px",
        });

        gsap.to(dot_yellow.current, {
            scrollTrigger: {
                trigger: dot_yellow.current,
                start: "top bottom",
                end: "bottom 60%",
                scrub: 1,
            },
            left: isMobile ? "1px" : "20px",
        });
    }, []);

    return (
        <main className="main overflow-hidden">
            {/* TITLE */}
            <Head>
                <title>Kontak</title>
            </Head>

            {/* HEADER */}
            <Header />

            {/* HERO */}
            <HeroSection text="Masukan & Kontak" />

            {/* MASUKAN FORM */}
            <section className="relative">
                {/* SHAPES */}
                <img src={kontak_title_outline_svg} alt="kontak_title" className={`absolute ${isMobile ? 'w-[263px] h-[118px] top-1 left-1' : 'top-3 left-3'}`} />
                <img src={kontak_title_filled_svg} alt="kontak_title" className={`absolute -z-10 ${isMobile ? 'w-[263px] h-[118px] top-1 left-1' : 'top-3 left-3'}`} />
                <img src={blob_yellow_line_svg} alt="blob_yellow" className={`absolute -z-10 ${isMobile ? 'w-[148px] h-[128px] right-[-24px] top-[200px]' : 'right-[-179px] top-[200px]'}`} ref={blob_yellow_line} />
                <img src={dot_yellow_svg} alt="dot_yellow" className={`absolute -z-10 ${isMobile ? 'w-[134px] h-[115px] bottom-[10px] left-[400px]' : 'top-[650px] left-[500px]'}`} ref={dot_yellow} />

                {/* CONTENT */}
                <div className={`relative flex flex-col items-center z-20 ${isMobile ? "px-4 py-8 gap-8" : "px-32 py-24 gap-16"} `}>
                    <div className="flex items-center justify-center flex-col gap-2 gap">
                        <h2 className={`font-bold text-slate-800 ${isMobile ? "text-xl" : "text-3xl"} `}>Formulir Masukan</h2>
                        <p className={`font-medium text-slate-500 text-center ${isMobile ? "text-sm max-w-[300px]" : "text-xl max-w-[450px]"}`}>
                            Ceritakan apa masukan atau saran anda kepada Ganefri
                        </p>
                    </div>
                    <div className={`bg-gradient-to-br from-yellow-400 to-yellow-200 w-full rounded-3xl ${isMobile ? "p-8" : "py-16 px-36"}`}>
                        <form className="flex flex-col gap-8">
                            <div className={`flex justify-center w-full ${isMobile ? "flex-col gap-4" : "gap-6"}`}>
                                <div className={`flex flex-col ${isMobile ? "gap-4 w-full" : "gap-8 w-1/2"}`}>
                                    <motion.div
                                        className="flex flex-col gap-2"
                                        initial={{ x: -50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
                                        viewport={{ once: true }}
                                    >
                                        <label
                                            htmlFor="nama_lengkap"
                                            className={`font-semibold text-slate-800 flex items-center gap-2 ${isMobile ? "text-xs" : "text-sm"}`}
                                        >
                                            <FaRegUser fontSize={isMobile ? 14 : 12} />
                                            Nama Lengkap
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Masukan nama lengkap anda"
                                            id="nama_lengkap"
                                            className={`px-5 py-3 rounded-xl border-2 border-yellow-500 outline-none focus:border-yellow-600 transition-colors ${
                                                isMobile ? "text-sm" : "text-base"
                                            }`}
                                        />
                                    </motion.div>
                                    <motion.div
                                        className="flex flex-col gap-2"
                                        initial={{ x: -50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
                                        viewport={{ once: true }}
                                    >
                                        <label
                                            htmlFor="alamat_email"
                                            className={`font-semibold text-slate-800 flex items-center gap-2 ${isMobile ? "text-xs" : "text-sm"}`}
                                        >
                                            <MdOutlineEmail fontSize={14} />
                                            Alamat Email
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="Masukan alamat email anda"
                                            id="alamat_email"
                                            className={`px-5 py-3 rounded-xl border-2 border-yellow-500 outline-none focus:border-yellow-600 transition-colors ${
                                                isMobile ? "text-sm" : "text-base"
                                            }`}
                                        />
                                    </motion.div>
                                    <motion.div
                                        className="flex flex-col gap-2"
                                        initial={{ x: -50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
                                        viewport={{ once: true }}
                                    >
                                        <label
                                            htmlFor="nomor_whatsapp"
                                            className={`font-semibold text-slate-800 flex items-center gap-2 ${isMobile ? "text-xs" : "text-sm"}`}
                                        >
                                            <MdOutlinePhone fontSize={14} />
                                            Nomor Whatsapp
                                        </label>
                                        <input
                                            required
                                            type="number"
                                            placeholder="Masukan nomor whatsapp anda"
                                            id="nomor_whatsapp"
                                            className={`px-5 py-3 rounded-xl border-2 border-yellow-500 outline-none focus:border-yellow-600 transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                                                isMobile ? "text-sm" : "text-base"
                                            }`}
                                        />
                                    </motion.div>
                                </div>
                                <div className={`flex flex-col ${isMobile ? "gap-4 w-full" : "gap-8 w-1/2"}`}>
                                    <motion.div
                                        className="flex flex-col gap-2"
                                        initial={{ x: 50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
                                        viewport={{ once: true }}
                                    >
                                        <label
                                            htmlFor="topik"
                                            className={`font-semibold text-slate-800 flex items-center gap-2 ${isMobile ? "text-xs" : "text-sm"}`}
                                        >
                                            <LuPenLine fontSize={14} />
                                            Topik
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Masukan topik dari masukan"
                                            id="topik"
                                            className={`px-5 py-3 rounded-xl border-2 border-yellow-500 outline-none focus:border-yellow-600 transition-colors ${
                                                isMobile ? "text-sm" : "text-base"
                                            }`}
                                        />
                                    </motion.div>
                                    <motion.div
                                        className="flex flex-col gap-2"
                                        initial={{ x: 50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
                                        viewport={{ once: true }}
                                    >
                                        <label
                                            htmlFor="masukan"
                                            className={`font-semibold text-slate-800 flex items-center gap-2 ${isMobile ? "text-xs" : "text-sm"}`}
                                        >
                                            <BsTextParagraph fontSize={14} />
                                            Masukan
                                        </label>
                                        <textarea
                                            placeholder="Isi masukan atau saran yang ingin anda sampaikan"
                                            id="masukan"
                                            className={`px-5 py-3 rounded-xl border-2 border-yellow-500 outline-none focus:border-yellow-600 transition-colors min-h-[165px] ${
                                                isMobile ? "text-sm" : "text-base"
                                            }`}
                                            cols={10}
                                        />
                                    </motion.div>
                                </div>
                            </div>
                            <div className="w-full flex gap-6 justify-end">
                                <motion.button
                                    type="reset"
                                    className={`flex gap-2 items-center border-2 border-red-500 text-red-500 rounded-xl group hover:bg-red-500 hover:bg-opacity-20 transition-colors ${
                                        isMobile ? "w-full flex justify-center px-3 py-2" : "px-6 py-3"
                                    }`}
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                                    viewport={{ once: true }}
                                >
                                    <GrPowerReset fontSize={isMobile ? 12 : 24} className="transform group-hover:rotate-180 transition-all" />
                                    <span className="text-lg font-semibold whitespace-nowrap" style={isMobile ? { fontSize: 10 } : null}>
                                        Reset Formulir
                                    </span>
                                </motion.button>
                                <motion.button
                                    type="submit"
                                    className={`flex gap-2 items-center bg-yellow-400 text-white rounded-xl group hover:bg-yellow-500 transition-colors ${
                                        isMobile ? "w-full flex justify-center px-3 py-2" : "px-6 py-3"
                                    }`}
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                                    viewport={{ once: true }}
                                >
                                    <span className="text-lg font-semibold whitespace-nowrap" style={isMobile ? { fontSize: 10 } : null}>
                                        Kirim Masukan
                                    </span>
                                    <TbSend2 fontSize={isMobile ? 12 : 24} className="group-hover:translate-x-2 transition-all" />
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* MEDIA SOCIAL SECTION */}
            <MediaSocialSection />

            {/* FOOTER */}
            <Footer />
        </main>
    );
};

export default Kontak;
