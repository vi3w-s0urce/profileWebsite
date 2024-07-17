import { useEffect, useRef } from "react";
import HeroBackground from "../Components/HeroBackground";
import Header from "../Layout/Header";
import { gsap } from "gsap";
import SplitType from "split-type";
import RevealText from "../Components/RevealText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { FaRegNewspaper, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import foto_utama from "../../assets/svg/profil/main.svg";
import profile_ellipse_svg from "../../assets/svg/shapes/profile_ellipse.svg";
import profile_title_svg from "../../assets/svg/shapes/profile_title.svg";
import line_yellow_svg from "../../assets/svg/shapes/hero_line_yellow.svg";
import berita_section_wave_svg from "../../assets/svg/shapes/berita_section_wave.svg";
import berita_section_wave_mobile_svg from "../../assets/svg/shapes/berita_section_wave_mobile.svg";
import berita_ellipes_bottom_svg from "../../assets/svg/shapes/berita_ellipse_bottom.svg";
import berita_text_round_svg from "../../assets/svg/shapes/berita_text_round.svg";
import berita_background_pattern_svg from "../../assets/svg/shapes/berita_background_pattern.svg";
import berita_background_pattern_mobile_svg from "../../assets/svg/shapes/berita_background_pattern_mobile.svg";
import berita_title_outline_svg from "../../assets/svg/shapes/berita_title_outline.svg";
import berita_title_filled_svg from "../../assets/svg/shapes/berita_title_filled.svg";
import dot_brown_svg from "../../assets/svg/shapes/dot_brown.svg";
import youtube_title_filled from "../../assets/svg/shapes/youtube_title_filled.svg";
import youtube_title_outline from "../../assets/svg/shapes/youtube_title_outline.svg";
import MediaSocialSection from "../Layout/MediaSocialSection";
import Footer from "../Layout/Footer";
import { Head, Link, router } from "@inertiajs/react";
import { useDispatch } from "react-redux";
import { setCurrentRoute } from "../Redux/slice";
import { useMediaQuery } from "react-responsive";
import BackToTopButton from "../Components/BackToTopButton";
import route from "ziggy-js";
import { TbCarouselHorizontal } from "react-icons/tb";
import ReactGA from "react-ga4";

const Beranda = ({ hero_section_db, carousel_berita_db, profil_1_db, berita_db, youtube_db, media_social_db }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
    const profile_ellipse = useRef();
    const line_yellow = useRef();
    const berita_text_round = useRef();
    const berita_button = useRef();
    const berita_background_pattern = useRef();
    const dot_brown = useRef();

    const berita_length = berita_db.length;

    const dispatch = useDispatch();

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Beranda" });

        window.scrollTo({ top: 0, left: 0, behavior: "instant" });

        dispatch(setCurrentRoute("Beranda"));

        gsap.to(profile_ellipse.current, {
            scrollTrigger: {
                trigger: profile_ellipse.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            top: "-=180px",
        });

        gsap.to(line_yellow.current, {
            scrollTrigger: {
                trigger: line_yellow.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            right: "+=200px",
        });

        gsap.to(dot_brown.current, {
            scrollTrigger: {
                trigger: dot_brown.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            bottom: "+=300px",
        });

        gsap.from(berita_background_pattern.current, {
            scrollTrigger: {
                trigger: berita_background_pattern.current,
                start: "top 70%",
            },
            width: 0,
            duration: 4,
            ease: "power3.out",
        });

        setTimeout(() => {
            gsap.to(berita_text_round.current, {
                scrollTrigger: {
                    trigger: berita_text_round.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
                rotate: "+=250",
            });
        }, 500);
    }, []);

    const formatText = (text) => {
        return text.split("\n").map((line, index) => (
            <span key={index}>
                {line}
                <br />
            </span>
        ));
    };

    const convertContent = (content) => {
        const json = JSON.parse(content);

        let plainText = "";

        Object.values(json)[0].value[0].children[0].text;

        Object.values(json).forEach((element) => {
            plainText += element.value[0].children[0].text + " ";
        });

        return plainText.length > 280 ? plainText.substring(0, 280) + "..." : plainText;
    };

    const convertIframeLink = (link) => {
        let address = link.split("/");
        let iframeLink = "https://www.youtube.com/embed/" + address[address.length - 1];
        return iframeLink;
    };

    return (
        <main className="main overflow-hidden">
            {/* TITLE */}
            <Head>
                <title>Ganefri</title>
            </Head>

            {/* HEADER */}
            <Header />

            {/* HERO */}
            <section className="relative">
                <HeroBackground />
                <div className={`relative flex flex-col w-full ${isMobile ? "px-4 py-8 gap-8" : "px-32 py-24 gap-16"}`}>
                    <div className="flex flex-col gap-2 items-center">
                        <RevealText
                            className={`font-semibold text-slate-400 text-center ${isMobile ? "text-base" : "text-2xl"}`}
                            type="words"
                            stagger={0.1}
                        >
                            {hero_section_db.subJudul}
                        </RevealText>
                        {isMobile ? (
                            <div className="flex flex-col items-center">
                                <RevealText
                                    className="font-bold text-yellow-900 text-center"
                                    type="words"
                                    stagger={0.1}
                                    style={{ fontSize: 32 }}
                                    delay={1}
                                >
                                    {hero_section_db.judul}
                                </RevealText>
                            </div>
                        ) : (
                            <RevealText className="text-5xl font-bold text-yellow-900" delay={1}>
                                {hero_section_db.judul}
                            </RevealText>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        {!isMobile && (
                            <motion.div
                                className="swiper-button-prev text-slate-400 hover:text-yellow-500 hover:bg-yellow-100 rounded-2xl cursor-pointer transition-colors"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5, ease: "backInOut" }}
                            >
                                <IoIosArrowBack style={{ fontSize: "96px" }} />
                            </motion.div>
                        )}
                        <motion.div
                            className={`relative ${isMobile ? "w-full" : "w-[80%]"}`}
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 1, ease: "backInOut" }}
                        >
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                                autoplay={{ delay: 5000 }}
                                navigation={!isMobile && { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                                pagination={{
                                    el: ".custom-pagination",
                                    clickable: true,
                                    renderBullet: (index, className) => {
                                        return `<span class="${className} custom-bullet w-[16px] h-[16px] rounded-full bg-slate-400 hover:bg-yellow-400 cursor-pointer transition-all"></span>`;
                                    },
                                }}
                                className={`w-full rounded-3xl ${isMobile ? "h-[222px]" : "h-[777px]"}`}
                            >
                                {carousel_berita_db.length > 0 ? (
                                    <>
                                        {carousel_berita_db.map((item, index) => (
                                            <SwiperSlide className="relative group" key={index}>
                                                <Link href={route("BeritaRead", { slug: item.berita.slug })}>
                                                    <div
                                                        className={`w-full h-full bg-gradient-to-t from-[#0000007c] via-transparent to-transparent absolute z-10 flex items-end ${
                                                            isMobile ? "p-4" : "p-12"
                                                        }`}
                                                    >
                                                        <h1 className={`text-5xl text-white font-bold ${isMobile ? "text-base" : "text-5xl"}`}>
                                                            {item.berita.judul}
                                                        </h1>
                                                    </div>
                                                    <img
                                                        src={"/storage/beritaImages/" + item.berita.path_gambar}
                                                        alt="Slide 1"
                                                        className="w-full h-full object-cover rounded-3xl group-hover:scale-[1.1] transition-all"
                                                    />
                                                </Link>
                                            </SwiperSlide>
                                        ))}
                                    </>
                                ) : (
                                    <SwiperSlide className="relative bg-slate-300">
                                        <div className="w-full h-full flex flex-col items-center justify-center">
                                            <TbCarouselHorizontal fontSize={isMobile ? 64 : 124} className="text-slate-500" />
                                            <p className={`text-center mt-4 font-semibold text-slate-500 ${isMobile ? "text-sm" : "text-xl"}`}>
                                                Carousel Berita Belum Ditambahkan
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                            <div className="custom-pagination flex justify-center gap-3 mt-7"></div>
                        </motion.div>
                        {!isMobile && (
                            <motion.div
                                className="swiper-button-next text-slate-400 hover:text-yellow-500 hover:bg-yellow-100 rounded-2xl cursor-pointer transition-colors"
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5, ease: "backInOut" }}
                            >
                                <IoIosArrowForward style={{ fontSize: "96px" }} />
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* PROFILE SECTION */}
            <section className="relative">
                {/* SHAPES */}
                <img
                    src={profile_ellipse_svg}
                    className={`absolute -z-10 ${isMobile ? "w-[180px] h-[180px] top-[80px] right-[-64px]" : "top-[50px] right-[-79px]"}`}
                    ref={profile_ellipse}
                ></img>
                <img
                    src={line_yellow_svg}
                    className={`absolute -z-10 ${isMobile ? "top-[360px] right-[-200px]" : "top-[497px] right-[196px]"}`}
                    ref={line_yellow}
                ></img>
                <img src={profile_title_svg} className={`absolute -z-10 ${isMobile ? "w-[186px] h-[59px] top-1 left-1" : "top-3 left-3"}`}></img>

                {/* CONTENT */}
                <div className={`flex items-center ${isMobile ? "px-4 py-8 flex-col gap-4" : "px-32 py-24 gap-44"}`}>
                    {profil_1_db.gambar ? (
                        <motion.img
                            src={"/storage/profilImages/" + profil_1_db.gambar}
                            className={`object-cover rounded-2xl shadow-2xl ${isMobile ? "w-full h-[200px]" : "h-[433px] w-[679px]"}`}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }}
                            viewport={{ once: true }}
                        />
                    ) : (
                        <motion.img
                            src={"/storage/profilImages/default_1.svg"}
                            className={`object-cover ${isMobile ? "w-[258px] h-[305px]" : "w-[366px] h-[433px]"}`}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.5, ease: "backInOut" } }}
                            viewport={{ once: true }}
                        />
                    )}
                    <div className="flex flex-col">
                        <RevealText
                            className={`font-semibold text-slate-400 ${isMobile ? "text-base mb-1" : "text-2xl mb-3"}`}
                            scroll={true}
                            type="words"
                            stagger={0.1}
                        >
                            Perkenalan Saya
                        </RevealText>
                        <RevealText
                            className={`font-bold text-yellow-900 ${!isMobile && "text-5xl mb-2"}`}
                            style={isMobile ? { fontSize: 34 } : null}
                            delay={0.5}
                            scroll={true}
                        >
                            Ganefri
                        </RevealText>
                        <RevealText
                            className={`font-medium text-slate-800 ${isMobile ? "text-sm  mb-5" : "text-lg mb-8"}`}
                            type="words"
                            scroll={true}
                            stagger={0.01}
                            bottom={50}
                        >
                            {formatText(profil_1_db.deskripsi)}
                        </RevealText>
                        <Link href={route("Profil")} preserveScroll={false}>
                            <motion.div
                                className="text-white bg-yellow-400 w-fit flex items-center gap-3 py-3 px-6 rounded-2xl cursor-pointer hover:bg-yellow-500 transition-colors group"
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className={`font-bold ${isMobile ? "text-sm" : "text-lg"}`}>Selengkapnya</span>
                                <IoIosArrowForward style={{ fontSize: "24px" }} className="group-hover:translate-x-2 transition-all" />
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* BERITA SECTION */}
            <section className="relative mb-20 mt-8">
                {/* SHAPES */}
                {isMobile ? (
                    <>
                        <img src={berita_section_wave_mobile_svg} className={`absolute -z-10 w-full top-0`} />
                        <img
                            src={berita_background_pattern_mobile_svg}
                            className="absolute -z-10 w-[120%] h-[800px] inset-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
                            ref={berita_background_pattern}
                        />
                    </>
                ) : (
                    <>
                        <img src={berita_section_wave_svg} className={`absolute -z-10 w-full top-0`} />
                        <img
                            src={berita_background_pattern_svg}
                            className="absolute -z-10 w-screen h-[1091px] inset-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
                            ref={berita_background_pattern}
                        />
                    </>
                )}
                <div className="absolute h-5/6 bg-yellow-400 rounded-es-[36px] rounded-ee-[36px] -z-20 w-full bottom-0"></div>
                <img src={berita_title_outline_svg} className={`absolute -z-10 ${isMobile ? "top-1 left-1 w-[258px] h-[112px]" : "top-3 left-3"}`} />
                <img src={berita_title_filled_svg} className={`absolute -z-30 ${isMobile ? "top-1 left-1 w-[258px] h-[112px]" : "top-3 left-3"}`} />
                <Link
                    href={route("Berita")}
                    preserveScroll={false}
                    className="absolute scale-[0.8] bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2 w-[218px] h-[152px] group cursor-pointer berita-button"
                    ref={berita_button}
                >
                    <IoIosArrowDown
                        fontSize={52}
                        className="absolute -z-10 inset-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-800 group-hover:text-white transition-colors"
                    />
                    <img
                        src={berita_text_round_svg}
                        className="absolute -z-10 inset-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 berita-text-round"
                        ref={berita_text_round}
                    />
                    <img src={berita_ellipes_bottom_svg} className="absolute -z-20 top-0 left-0" />
                </Link>

                {/* CONTENT */}
                <div className={`flex flex-col items-center ${isMobile ? "px-4 py-8 gap-8 pb-16" : "px-32 py-24 gap-16"}`}>
                    <div className="flex items-center justify-center flex-col gap-2">
                        <h2 className={`font-bold text-slate-800 ${isMobile ? "text-xl" : "text-3xl"}`}>Berita dan Agenda Terakhir</h2>
                        <p className={`font-medium text-slate-500 max-w-[537px] text-center ${isMobile ? "text-sm" : "text-xl"}`}>
                            Kumpulan berita beserta beserta agenda terakhir tentang Ganefri
                        </p>
                    </div>
                    {berita_db.length > 0 ? (
                        <div
                            className={`w-full grid ${
                                !isMobile && berita_length == 1
                                    ? "grid-cols-1"
                                    : !isMobile && berita_length > 1
                                    ? "grid-cols-2"
                                    : isMobile
                                    ? "grid-cols-1"
                                    : null
                            } gap-6`}
                        >
                            {!isMobile && berita_length == 1 ? (
                                <Link href={route("BeritaRead", { slug: berita_db[0].slug })}>
                                    <motion.div
                                        className="group cursor-pointer"
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="w-full h-[720px] rounded-3xl overflow-hidden mb-6">
                                            <img
                                                src={"/storage/beritaImages/" + berita_db[0].path_gambar}
                                                className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <div className="flex gap-2 items-center">
                                                <p className="font-semibold text-lg text-yellow-800">{berita_db[0].kategori}</p>
                                                <BsDot fontSize={24} />
                                                <div className="flex gap-2 items-center text-slate-500">
                                                    <FiClock fontSize={24} />
                                                    <span className="font-medium text-lg">
                                                        {new Date(berita_db[0].tanggal).toLocaleDateString("id-ID", {
                                                            weekday: "long",
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric",
                                                        })}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <h1 className="text-4xl text-slate-800 font-bold">{berita_db[0].judul}</h1>
                                                <p className="text-lg text-slate-800 leading-6">{convertContent(berita_db[0].content)}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ) : !isMobile && berita_length == 2 ? (
                                <>
                                    <Link href={route("BeritaRead", { slug: berita_db[0].slug })}>
                                        <motion.div
                                            className="group cursor-pointer"
                                            initial={{ y: 100, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="w-full h-[720px] rounded-3xl overflow-hidden mb-6">
                                                <img
                                                    src={"/storage/beritaImages/" + berita_db[0].path_gambar}
                                                    className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <div className="flex gap-2 items-center">
                                                    <p className="font-semibold text-lg text-yellow-800">{berita_db[0].kategori}</p>
                                                    <BsDot fontSize={24} />
                                                    <div className="flex gap-2 items-center text-slate-500">
                                                        <FiClock fontSize={24} />
                                                        <span className="font-medium text-lg">
                                                            {new Date(berita_db[0].tanggal).toLocaleDateString("id-ID", {
                                                                weekday: "long",
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                            })}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <h1 className="text-4xl text-slate-800 font-bold">{berita_db[0].judul}</h1>
                                                    <p className="text-lg text-slate-800 leading-6">{convertContent(berita_db[0].content)}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </Link>
                                    <Link href={route("BeritaRead", { slug: berita_db[1].slug })}>
                                        <motion.div
                                            className="group cursor-pointer"
                                            initial={{ y: 100, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7 } }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="w-full h-[720px] rounded-3xl overflow-hidden mb-6">
                                                <img
                                                    src={"/storage/beritaImages/" + berita_db[1].path_gambar}
                                                    className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <div className="flex gap-2 items-center">
                                                    <p className="font-semibold text-lg text-yellow-800">{berita_db[1].kategori}</p>
                                                    <BsDot fontSize={24} />
                                                    <div className="flex gap-2 items-center text-slate-500">
                                                        <FiClock fontSize={24} />
                                                        <span className="font-medium text-lg">
                                                            {new Date(berita_db[1].tanggal).toLocaleDateString("id-ID", {
                                                                weekday: "long",
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                            })}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <h1 className="text-4xl text-slate-800 font-bold">{berita_db[1].judul}</h1>
                                                    <p className="text-lg text-slate-800 leading-6">{convertContent(berita_db[1].content)}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </Link>
                                </>
                            ) : !isMobile && berita_length === 3 ? (
                                <>
                                    <Link href={route("BeritaRead", { slug: berita_db[0].slug })}>
                                        <motion.div
                                            className="group cursor-pointer"
                                            initial={{ y: 100, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="w-full h-[720px] rounded-3xl overflow-hidden mb-6">
                                                <img
                                                    src={"/storage/beritaImages/" + berita_db[0].path_gambar}
                                                    className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <div className="flex gap-2 items-center">
                                                    <p className="font-semibold text-lg text-yellow-800">{berita_db[0].kategori}</p>
                                                    <BsDot fontSize={24} />
                                                    <div className="flex gap-2 items-center text-slate-500">
                                                        <FiClock fontSize={24} />
                                                        <span className="font-medium text-lg">
                                                            {new Date(berita_db[0].tanggal).toLocaleDateString("id-ID", {
                                                                weekday: "long",
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                            })}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <h1 className="text-4xl text-slate-800 font-bold">{berita_db[0].judul}</h1>
                                                    <p className="text-lg text-slate-800 leading-6">{convertContent(berita_db[0].content)}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </Link>
                                    <div className="flex flex-col gap-6">
                                        <Link href={route("BeritaRead", { slug: berita_db[1].slug })}>
                                            <motion.div
                                                className="group cursor-pointer"
                                                initial={{ y: 100, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7 } }}
                                                viewport={{ once: true }}
                                            >
                                                <div className="w-full h-[334px] rounded-3xl overflow-hidden mb-6">
                                                    <img
                                                        src={"/storage/beritaImages/" + berita_db[1].path_gambar}
                                                        className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <div className="flex gap-2 items-center">
                                                        <p className="font-semibold text-lg text-yellow-800">{berita_db[1].kategori}</p>
                                                        <BsDot fontSize={24} />
                                                        <div className="flex gap-2 items-center text-slate-500">
                                                            <FiClock fontSize={24} />
                                                            <span className="font-medium text-lg">
                                                                {new Date(berita_db[1].tanggal).toLocaleDateString("id-ID", {
                                                                    weekday: "long",
                                                                    year: "numeric",
                                                                    month: "long",
                                                                    day: "numeric",
                                                                })}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-3">
                                                        <h1 className="text-4xl text-slate-800 font-bold">{berita_db[1].judul}</h1>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </Link>
                                        <Link href={route("BeritaRead", { slug: berita_db[2].slug })}>
                                            <motion.div
                                                className="group cursor-pointer"
                                                initial={{ y: 100, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.9 } }}
                                                viewport={{ once: true }}
                                            >
                                                <div className="w-full h-[334px] rounded-3xl overflow-hidden mb-6">
                                                    <img
                                                        src={"/storage/beritaImages/" + berita_db[2].path_gambar}
                                                        className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <div className="flex gap-2 items-center">
                                                        <p className="font-semibold text-lg text-yellow-800">{berita_db[2].kategori}</p>
                                                        <BsDot fontSize={24} />
                                                        <div className="flex gap-2 items-center text-slate-500">
                                                            <FiClock fontSize={24} />
                                                            <span className="font-medium text-lg">
                                                                {new Date(berita_db[1].tanggal).toLocaleDateString("id-ID", {
                                                                    weekday: "long",
                                                                    year: "numeric",
                                                                    month: "long",
                                                                    day: "numeric",
                                                                })}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-3">
                                                        <h1 className="text-4xl text-slate-800 font-bold">{berita_db[2].judul}</h1>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </Link>
                                    </div>
                                </>
                            ) : !isMobile && berita_length === 4 ? (
                                <>
                                    <Link href={route("BeritaRead", { slug: berita_db[0].slug })}>
                                        <motion.div
                                            className="group cursor-pointer"
                                            initial={{ y: 100, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="w-full h-[720px] rounded-3xl overflow-hidden mb-6">
                                                <img
                                                    src={"/storage/beritaImages/" + berita_db[0].path_gambar}
                                                    className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <div className="flex gap-2 items-center">
                                                    <p className="font-semibold text-lg text-yellow-800">{berita_db[0].kategori}</p>
                                                    <BsDot fontSize={24} />
                                                    <div className="flex gap-2 items-center text-slate-500">
                                                        <FiClock fontSize={24} />
                                                        <span className="font-medium text-lg">
                                                            {new Date(berita_db[0].tanggal).toLocaleDateString("id-ID", {
                                                                weekday: "long",
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                            })}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <h1 className="text-4xl text-slate-800 font-bold">{berita_db[0].judul}</h1>
                                                    <p className="text-lg text-slate-800 leading-6">{convertContent(berita_db[0].content)}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </Link>
                                    <div className="flex flex-col gap-6">
                                        <Link href={route("BeritaRead", { slug: berita_db[1].slug })}>
                                            <motion.div
                                                className="group cursor-pointer"
                                                initial={{ y: 100, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7 } }}
                                                viewport={{ once: true }}
                                            >
                                                <div className="w-full h-[334px] rounded-3xl overflow-hidden mb-6">
                                                    <img
                                                        src={"/storage/beritaImages/" + berita_db[1].path_gambar}
                                                        className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <div className="flex gap-2 items-center">
                                                        <p className="font-semibold text-lg text-yellow-800">{berita_db[1].kategori}</p>
                                                        <BsDot fontSize={24} />
                                                        <div className="flex gap-2 items-center text-slate-500">
                                                            <FiClock fontSize={24} />
                                                            <span className="font-medium text-lg">
                                                                {new Date(berita_db[1].tanggal).toLocaleDateString("id-ID", {
                                                                    weekday: "long",
                                                                    year: "numeric",
                                                                    month: "long",
                                                                    day: "numeric",
                                                                })}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-3">
                                                        <h1 className="text-4xl text-slate-800 font-bold">{berita_db[1].judul}</h1>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </Link>
                                        <div className="grid grid-cols-2 gap-6">
                                            <Link href={route("BeritaRead", { slug: berita_db[2].slug })}>
                                                <motion.div
                                                    className="group cursor-pointer"
                                                    initial={{ y: 100, opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
                                                    viewport={{ once: true }}
                                                >
                                                    <div className="w-full h-[334px] rounded-3xl overflow-hidden mb-6">
                                                        <img
                                                            src={"/storage/beritaImages/" + berita_db[2].path_gambar}
                                                            className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-3">
                                                        <div className="flex gap-2 items-center">
                                                            <p className="font-semibold text-lg text-yellow-800">{berita_db[2].kategori}</p>
                                                            <BsDot fontSize={24} />
                                                            <div className="flex gap-2 items-center text-slate-500">
                                                                <FiClock fontSize={24} />
                                                                <span className="font-medium text-lg">
                                                                    {new Date(berita_db[2].tanggal).toLocaleDateString("id-ID", {
                                                                        weekday: "long",
                                                                        year: "numeric",
                                                                        month: "long",
                                                                        day: "numeric",
                                                                    })}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-3">
                                                            <h1 className="text-2xl text-slate-800 font-bold">{berita_db[2].judul}</h1>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </Link>
                                            <Link href={route("BeritaRead", { slug: berita_db[3].slug })}>
                                                <motion.div
                                                    className="group cursor-pointer"
                                                    initial={{ y: 100, opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.6 } }}
                                                    viewport={{ once: true }}
                                                >
                                                    <div className="w-full h-[334px] rounded-3xl overflow-hidden mb-6">
                                                        <img
                                                            src={"/storage/beritaImages/" + berita_db[3].path_gambar}
                                                            className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-3">
                                                        <div className="flex gap-2 items-center">
                                                            <p className="font-semibold text-lg text-yellow-800">{berita_db[3].kategori}</p>
                                                            <BsDot fontSize={24} />
                                                            <div className="flex gap-2 items-center text-slate-500">
                                                                <FiClock fontSize={24} />
                                                                <span className="font-medium text-lg">
                                                                    {new Date(berita_db[3].tanggal).toLocaleDateString("id-ID", {
                                                                        weekday: "long",
                                                                        year: "numeric",
                                                                        month: "long",
                                                                        day: "numeric",
                                                                    })}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-3">
                                                            <h1 className="text-2xl text-slate-800 font-bold">{berita_db[3].judul}</h1>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            ) : isMobile ? (
                                <Swiper spaceBetween={50} slidesPerView={1} modules={[Autoplay]} autoplay={{ delay: 5000 }} className="h-fit w-full">
                                    {berita_db.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <Link href={route("BeritaRead", { slug: item.slug })}>
                                                <motion.div
                                                    className="group cursor-pointer"
                                                    initial={{ y: 100, opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                                                    viewport={{ once: true }}
                                                >
                                                    <div className="w-full h-[328px] rounded-3xl overflow-hidden mb-4">
                                                        <img
                                                            src={"/storage/beritaImages/" + item.path_gambar}
                                                            className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-3">
                                                        <div className={`flex items-center mb-3 ${isMobile ? "gap-1" : "gap-2"}`}>
                                                            <p className={`font-semibold text-yellow-800 ${isMobile ? "text-xs" : "text-sm"}`}>
                                                                {item.kategori}
                                                            </p>
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
                                                        <div className="flex flex-col gap-1 mb-4">
                                                            <h2 className={`font-bold text-slate-800 ${isMobile ? "text-xl" : "text-2xl"}`}>
                                                                {item.judul}
                                                            </h2>
                                                            <p className={`text-slate-800 ${isMobile && "text-sm"}`}>
                                                                {convertContent(item.content)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </Link>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            ) : null}
                        </div>
                    ) : (
                        <div className="px-8 py-28 flex flex-col items-center justify-center min-h-[820px]">
                            <FaRegNewspaper fontSize={124} className="text-slate-500 mb-4" />
                            <div>
                                <p className="text-slate-500 font-semibold text-2xl text-center">Belum Ada Berita yang Dibuat</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* YOUTUBE OVERLAY */}
            <section className="relative">
                {/* SHAPES */}
                <img
                    src={dot_brown_svg}
                    alt="dot_brown"
                    className={`absolute -z-10 ${isMobile ? "w-[146px] h-[120px] bottom-[-50px] right-[-11px]" : "bottom-[8px] right-[-11px]"}`}
                    ref={dot_brown}
                />
                <img
                    src={youtube_title_filled}
                    alt="dot_brown"
                    className={`absolute -z-10 ${isMobile ? "w-[245px] h-[59px] top-1 left-1" : "top-3 left-3"}`}
                />
                <img
                    src={youtube_title_outline}
                    alt="dot_brown"
                    className={`absolute ${isMobile ? "w-[245px] h-[59px] top-1 left-1" : "top-3 left-3"}`}
                />

                {/* CONTENT */}
                <div className={`${isMobile ? "px-4 py-8" : "px-32 py-24"}`}>
                    {youtube_db.videoUtama ? (
                        <div className={`bg-yellow-400 w-full flex rounded-3xl ${isMobile ? "flex-col p-6 gap-3" : "p-16 gap-6"}`}>
                            <div className={`overflow-hidden border-yellow-600 rounded-2xl border-2 ${isMobile ? "w-full" : "w-1/2"}`}>
                                <iframe
                                    src={convertIframeLink(youtube_db.videoUtama)}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className={`w-full ${isMobile ? "h-[200px]" : "h-[425px]"}`}
                                ></iframe>
                            </div>
                            <div className={`w-1/2 flex flex-col ${isMobile ? "w-full" : "w-1/2"}`}>
                                {youtube_db.videoLainnya.map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.link}
                                        className={`text-slate-800 flex gap-3 items-center border-b-2 border-yellow-500 hover:text-white transition-colors ${
                                            isMobile ? "py-2" : "py-4"
                                        }`}
                                        initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
                                        viewport={{ once: true }}
                                    >
                                        <FaYoutube fontSize={isMobile ? 32 : 48} />
                                        <span className={`font-bold ${isMobile ? "text-xs" : "text-xl"}`}>{item.nama}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className={`bg-yellow-400 w-full flex flex-col justify-center items-center rounded-3xl min-h-[429px]`}>
                            <FaYoutube fontSize={124} className="text-slate-500" />
                            <p className="text-center text-xl mt-4 font-semibold text-slate-500">Section Youtube Belum Ditambahkan</p>
                        </div>
                    )}
                </div>
            </section>

            {/* MEDIA SOCTIAL SECTION */}
            <MediaSocialSection ms_db={media_social_db} />

            {/* FOOTER */}
            <Footer />

            {/* BACK TO TOP BUTTON */}
            <BackToTopButton />
        </main>
    );
};

export default Beranda;
