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
import { FaRegNewspaper } from "react-icons/fa";
import Main from "../Layout/Main";

const Berita = ({ berita }) => {
    const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

    const dot_brown = useRef();
    const line_pattern = useRef();

    const dispatch = useDispatch();

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Berita" });

        window.scrollTo({ top: 0, left: 0, behavior: "instant" });

        dispatch(setCurrentRoute("Berita"));

        if (isDesktop) {
            setTimeout(() => {
                gsap.from(dot_brown.current, {
                    scrollTrigger: {
                        trigger: dot_brown.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                    top: "+=100px",
                });

                gsap.from(line_pattern.current, {
                    scrollTrigger: {
                        trigger: line_pattern.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                    left: "-=100px",
                });
            }, 200);
        }
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
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = berita.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(berita.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <Main>
            {/* TITLE */}
            <Head>
                <title>Berita & Agenda</title>
            </Head>

            {/* HERO */}
            <HeroSection text="Berita & Agenda" />

            {/* MAIN CONTENT */}
            <section className="relative px-4 py-8 xl:px-32 xl:py-24">
                {/* SHAPES */}
                <img
                    src={berita_title_filled}
                    alt="berita_title"
                    className="absolute -z-10 w-[234px] h-[118] top-1 left-1 xl:w-auto xl:h-auto xl:top-3 xl:left-3"
                />
                <img
                    src={dot_brown_svg}
                    alt="dot_brows"
                    className="absolute -z-10 h-[137px] w-[137px] top-[500px] right-[-62px] xl:w-auto xl:h-auto xl:top-[500px] xl:right-0"
                    ref={dot_brown}
                />
                <img
                    src={line_pattern_svg}
                    alt="line_pattern"
                    className="absolute -z-10 w-[153px] h-[58px] bottom-[100px] left-[-50px] xl:w-auto xl:h-auto xl:bottom-[70px] xl:left-[-100px]"
                    ref={line_pattern}
                />
                {!isDesktop && <img src={box_outline_svg} alt="box_outline" className={`absolute -z-10 left-[-80px] top-[1080px]`} />}
                {currentItems.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
                            {currentItems.map((item) => (
                                <Link href={route("BeritaRead", { slug: item.slug })} key={item._id}>
                                    <motion.div
                                        className="bg-white rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="w-full overflow-hidden rounded-3xl h-[184px] xl:h-[288px]">
                                            <img
                                                src={"/storage/beritaImages/" + item.gambar}
                                                alt="berita"
                                                className="w-full h-full object-cover group-hover:scale-[1.1] transition-all"
                                            />
                                        </div>
                                        <div className="p-6 xl:p-8">
                                            <div className="flex items-center mb-3 gap-1 xl:gap-2">
                                                <p className="font-semibold text-yellow-800 text-xs xl:text-sm">{item.kategori}</p>
                                                <BsDot fontSize={24} />
                                                <div className="flex gap-2 items-center text-slate-500">
                                                    <FiClock fontSize={18} />
                                                    <span className="font-medium text-xs xl:text-sm">
                                                        {new Date(item.created_at).toLocaleDateString("id-ID", {
                                                            weekday: "long",
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric",
                                                        })}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3 mb-4">
                                                <h2 className="font-bold text-slate-800 text-xl xl:text-2xl">{item.judul}</h2>
                                                <p className="text-slate-800 text-sm xl:text-base">{convertContent(item.content)}</p>
                                            </div>
                                            <button
                                                type="button"
                                                className="text-yellow-500 font-semibold flex items-center gap-2 text-base xl:text-lg"
                                            >
                                                Baca Selengkapnya <IoIosArrowForward className="group-hover:translate-x-2 transition-all" />
                                            </button>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>

                        <motion.div
                            className="flex items-center justify-center mt-16 xl:mt-24"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center justify-between bg-yellow-200 rounded-2xl min-w-[328px] px-4 py-2 xl:px-6 xl:py-3 xl:gap-16">
                                <IoIosArrowBack
                                    onClick={() => currentPage != 1 && setCurrentPage(currentPage - 1)}
                                    className="cursor-pointer text-yellow-500 hover:bg-white p-1 rounded-lg transition-colors text-[30px] xl:text-[36px]"
                                />
                                <div className="flex items-center justify-center gap-2 xl:gap-8">
                                    {pageNumbers.map((number) => (
                                        <div
                                            key={number}
                                            id={number}
                                            onClick={handleClick}
                                            className={`font-medium w-8 h-8 flex items-center justify-center cursor-pointer rounded-lg text-xs xl:text-xl ${
                                                currentPage === number
                                                    ? "bg-yellow-400 text-white"
                                                    : "text-slate-800 hover:bg-white hover:text-yellow-500 transition-colors"
                                            }`}
                                        >
                                            {number}
                                        </div>
                                    ))}
                                </div>
                                <IoIosArrowForward
                                    onClick={() => currentPage != pageNumbers.length && setCurrentPage(currentPage + 1)}
                                    className="cursor-pointer text-yellow-500 hover:bg-white p-1 rounded-lg transition-colors text-[30px] xl:text-[36px]"
                                />
                            </div>
                        </motion.div>
                    </>
                ) : (
                    <div className="px-8 py-28 flex flex-col items-center justify-center min-h-[520px]">
                        <FaRegNewspaper className="text-slate-500 mb-4 text-[62px] xl:text-[124px]" />
                        <div>
                            <p className="text-slate-500 font-semibold text-center text-base xl:text-2xl">Belum Ada Berita yang Dibuat</p>
                        </div>
                    </div>
                )}
            </section>
        </Main>
    );
};

export default Berita;
