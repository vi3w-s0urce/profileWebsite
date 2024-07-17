import Header from "../Layout/Header";
import HeroSection from "../Layout/HeroSection";
import berita_1_img from "../../assets/image/berita_1.jpeg";
import berita_2_img from "../../assets/image/berita_2.jpeg";
import berita_3_img from "../../assets/image/berita_3.jpeg";
import berita_4_img from "../../assets/image/berita_4.jpeg";
import berita_5_img from "../../assets/image/berita_5.webp";
import berita_6_img from "../../assets/image/berita_6.jpeg";
import berita_title_filled from "../../assets/svg/shapes/berita_title_filled.svg";
import dot_brown_svg from "../../assets/svg/shapes/dot_brown.svg";
import box_outline_svg from "../../assets/svg/shapes/box_outline.svg";
import line_pattern_svg from "../../assets/svg/shapes/line_pattern.svg";
import { BsDot } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Head, Link } from "@inertiajs/react";
import Footer from "../Layout/Footer";
import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useDispatch } from "react-redux";
import { setCurrentRoute } from "../Redux/slice";
import { useMediaQuery } from "react-responsive";
import { IoArrowForward } from "react-icons/io5";
import BackToTopButton from "../Components/BackToTopButton";
import route from "ziggy-js";
import Paragraph from "@yoopta/paragraph";
import ReactGA from "react-ga4";

const Berita = ({ berita }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

    const dot_brown = useRef();
    const line_pattern = useRef();

    const dispatch = useDispatch();

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: 'Berita' });

        window.scrollTo({ top: 0, left: 0, behavior: "instant" });

        dispatch(setCurrentRoute("Berita"));

        gsap.to(dot_brown.current, {
            scrollTrigger: {
                trigger: dot_brown.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            top: "-=300px",
        });

        gsap.to(line_pattern.current, {
            scrollTrigger: {
                trigger: line_pattern.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            left: "+=100px",
        });
    }, []);

    // Description Function
    const convertContent = (content) => {
        const json = JSON.parse(content);

        let plainText = "";

        Object.values(json)[0].value[0].children[0].text;

        Object.values(json).forEach((element) => {
            plainText += element.value[0].children[0].text + " ";
        });

        return plainText.length > 180 ? plainText.substring(0, 180) + "..." : plainText;
    };

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = berita.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(berita.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    return (
        <main className="main overflow-hidden">
            {/* TITLE */}
            <Head>
                <title>Berita & Agenda</title>
            </Head>

            {/* HEADER */}
            <Header />

            {/* HERO */}
            <HeroSection text="Berita & Agenda" />

            {/* MAIN CONTENT */}
            <section className={`relative ${isMobile ? "px-4 py-8" : "px-32 py-24"}`}>
                {/* SHAPES */}
                <img
                    src={berita_title_filled}
                    alt="berita_title"
                    className={`absolute -z-10 ${isMobile ? "w-[234px] h-[118] top-1 left-1" : "top-3 left-3"}`}
                />
                <img
                    src={dot_brown_svg}
                    alt="dot_brows"
                    className={`absolute -z-10 ${isMobile ? "h-[137px] w-[137px] top-[600px] right-0" : "top-[600px] right-0"}`}
                    ref={dot_brown}
                />
                <img
                    src={line_pattern_svg}
                    alt="line_pattern"
                    className={`absolute -z-10 ${isMobile ? "w-[153px] h-[58px] bottom-[100px] left-[-120px]" : "top-[1226px] left-[-200px]"}`}
                    ref={line_pattern}
                />
                {isMobile && <img src={box_outline_svg} alt="box_outline" className={`absolute -z-10 left-[-80px] top-[1080px]`} />}

                <div className={`grid ${isMobile ? "grid-cols-1 gap-6" : "grid-cols-3 gap-16"}`}>
                    {currentItems.map((item) => (
                        <Link href={route("BeritaRead", { slug: item.slug })} key={item._id}>
                            <motion.div
                                className="bg-white rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                                viewport={{ once: true }}
                            >
                                <div className={`w-full overflow-hidden rounded-3xl ${isMobile ? "h-[184px]" : "h-[288px]"}`}>
                                    <img
                                        src={"/storage/beritaImages/" + item.path_gambar}
                                        alt="berita"
                                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all"
                                    />
                                </div>
                                <div className={`${isMobile ? "p-6" : "p-8"}`}>
                                    <div className={`flex items-center mb-3 ${isMobile ? "gap-1" : "gap-2"}`}>
                                        <p className={`font-semibold text-yellow-800 ${isMobile ? "text-xs" : "text-sm"}`}>{item.kategori}</p>
                                        <BsDot fontSize={24} />
                                        <div className="flex gap-2 items-center text-slate-500">
                                            <FiClock fontSize={18} />
                                            <span className={`font-medium ${isMobile ? "text-xs" : "text-sm"}`}>
                                                {new Date(item.tanggal).toLocaleDateString("id-ID", {
                                                    weekday: "long",
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <h2 className={`font-bold text-slate-800 ${isMobile ? "text-xl" : "text-2xl"}`}>{item.judul}</h2>
                                        <p className={`text-slate-800 ${isMobile && "text-sm"}`}>{convertContent(item.content)}</p>
                                    </div>
                                    <button type="button" className={`text-yellow-500 font-semibold flex items-center gap-2 ${isMobile ? "text-base" : "text-lg"}`}>
                                        Baca Selengkapnya <IoIosArrowForward className="group-hover:translate-x-2 transition-all" />
                                    </button>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
                <motion.div
                    className={`flex items-center justify-center ${isMobile ? "mt-16" : "mt-24"}`}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                    viewport={{ once: true }}
                >
                    <div
                        className={`flex items-center justify-between bg-yellow-200 rounded-2xl min-w-[328px] ${
                            isMobile ? "px-4 py-2" : "px-6 py-3 gap-16"
                        }`}
                    >
                        <IoIosArrowBack
                            fontSize={isMobile ? 30 : 36}
                            onClick={() => currentPage != 1 && setCurrentPage(currentPage - 1)}
                            className="cursor-pointer text-yellow-500 hover:bg-white p-1 rounded-lg transition-colors"
                        />
                        <div className={`flex items-center justify-center ${isMobile ? "gap-2" : "gap-8"}`}>
                            {pageNumbers.map((number) => (
                                <div
                                    key={number}
                                    id={number}
                                    onClick={handleClick}
                                    className={`font-medium w-8 h-8 flex items-center justify-center cursor-pointer ${
                                        currentPage === number
                                            ? "bg-yellow-400 text-white"
                                            : "text-slate-800 hover:bg-white hover:text-yellow-500 transition-colors"
                                    } rounded-lg ${isMobile ? "text-xs" : "text-xl"}`}
                                >
                                    {number}
                                </div>
                            ))}
                        </div>
                        <IoIosArrowForward
                            fontSize={isMobile ? 30 : 36}
                            onClick={() => currentPage != pageNumbers.length && setCurrentPage(currentPage + 1)}
                            className="cursor-pointer text-yellow-500 hover:bg-white p-1 rounded-lg transition-colors"
                        />
                    </div>
                </motion.div>
            </section>

            {/* FOOTER */}
            <Footer />

            {/* BACK TO TOP BUTTON */}
            <BackToTopButton />
        </main>
    );
};

export default Berita;
