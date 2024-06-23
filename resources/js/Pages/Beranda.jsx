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
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import foto_utama from "../../assets/svg/profil/main.svg";
import profile_ellipse_svg from "../../assets/svg/shapes/profile_ellipse.svg";
import profile_title_svg from "../../assets/svg/shapes/profile_title.svg";
import line_yellow_svg from "../../assets/svg/shapes/hero_line_yellow.svg";
import berita_section_wave_svg from "../../assets/svg/shapes/berita_section_wave.svg";
import berita_ellipes_bottom_svg from "../../assets/svg/shapes/berita_ellipse_bottom.svg";
import berita_text_round_svg from "../../assets/svg/shapes/berita_text_round.svg";
import berita_background_pattern_svg from "../../assets/svg/shapes/berita_background_pattern.svg";
import berita_title_outline_svg from "../../assets/svg/shapes/berita_title_outline.svg";
import berita_title_filled_svg from "../../assets/svg/shapes/berita_title_filled.svg";
import dot_brown_svg from "../../assets/svg/shapes/dot_brown.svg";
import youtube_title_filled from "../../assets/svg/shapes/youtube_title_filled.svg";
import youtube_title_outline from "../../assets/svg/shapes/youtube_title_outline.svg";
import MediaSocialSection from "../Layout/MediaSocialSection";
import Footer from "../Layout/Footer";

const Beranda = () => {
    const profile_ellipse = useRef();
    const line_yellow = useRef();
    const berita_text_round = useRef();
    const berita_button = useRef();
    const berita_background_pattern = useRef();
    const dot_brown = useRef();

    const berita_array = 4;

    useEffect(() => {
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
        }, 100);
    }, []);

    return (
        <main className="main overflow-hidden">
            {/* HEADER */}
            <Header />

            {/* HERO */}
            <section className="relative">
                <HeroBackground />
                <div className="relative flex flex-col w-full px-32 py-24 gap-16">
                    <div className="flex flex-col gap-2 items-center">
                        <RevealText className="text-2xl font-semibold text-slate-400" type="words" stagger={0.1}>
                            Selamat datang di website resmi
                        </RevealText>
                        <RevealText className="text-5xl font-bold text-yellow-900" delay={1}>
                            Prof. Drs. H. Ganefri, M.Pd., Ph.D
                        </RevealText>
                    </div>
                    <div className="flex items-center justify-between">
                        <motion.div
                            className="swiper-button-prev text-slate-400 hover:text-yellow-500 hover:bg-yellow-100 rounded-2xl cursor-pointer transition-colors"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5, ease: "backInOut" }}
                        >
                            <IoIosArrowBack style={{ fontSize: "96px" }} />
                        </motion.div>
                        <motion.div
                            className="relative w-[80%]"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 1, ease: "backInOut" }}
                        >
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                                autoplay={{ delay: 5000 }}
                                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                                pagination={{
                                    el: ".custom-pagination",
                                    clickable: true,
                                    renderBullet: (index, className) => {
                                        return `<span class="${className} custom-bullet w-[16px] h-[16px] rounded-full bg-slate-400 hover:bg-yellow-400 cursor-pointer transition-all"></span>`;
                                    },
                                }}
                                className="h-[777px] w-full rounded-3xl"
                            >
                                <SwiperSlide>
                                    <img
                                        src="https://picsum.photos/1280/720?img=1"
                                        alt="Slide 1"
                                        className="w-full h-full object-cover rounded-3xl"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="https://picsum.photos/1280/720?img=2"
                                        alt="Slide 1"
                                        className="w-full h-full object-cover rounded-3xl"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="https://picsum.photos/1280/720?img=3"
                                        alt="Slide 1"
                                        className="w-full h-full object-cover rounded-3xl"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://picsum.photos/800/300?img=4" alt="Slide 1" className="w-full h-full object-cover rounded-3xl" />
                                </SwiperSlide>
                            </Swiper>
                            <div className="custom-pagination flex justify-center gap-3 mt-7"></div>
                        </motion.div>
                        <motion.div
                            className="swiper-button-next text-slate-400 hover:text-yellow-500 hover:bg-yellow-100 rounded-2xl cursor-pointer transition-colors"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5, ease: "backInOut" }}
                        >
                            <IoIosArrowForward style={{ fontSize: "96px" }} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PROFILE SECTION */}
            <section className="relative">
                {/* SHAPES */}
                <img src={profile_ellipse_svg} className="absolute -z-10 top-[50px] right-[-79px]" ref={profile_ellipse}></img>
                <img src={line_yellow_svg} className="absolute -z-10 top-[497px] right-[196px]" ref={line_yellow}></img>
                <img src={profile_title_svg} className="absolute -z-10 top-3 left-3"></img>

                {/* CONTENT */}
                <div className="px-32 py-24 flex items-center gap-44">
                    <motion.img
                        src={foto_utama}
                        className="w-[366px] h-[433px]"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.5, ease: "backInOut" } }}
                        viewport={{ once: true }}
                    />
                    <div className="flex flex-col">
                        <RevealText className="font-semibold text-2xl text-slate-400 mb-3" scroll={true} type="words" stagger={0.1}>
                            Perkenalan Saya
                        </RevealText>
                        <RevealText className="font-bold text-5xl text-yellow-900 mb-2" delay={0.5} scroll={true}>
                            Ganefri
                        </RevealText>
                        <RevealText className="font-medium text-lg text-slate-800 mb-8" type="words" scroll={true} stagger={0.01} bottom={50}>
                            Prof. Drs. H. Ganefri, M.Pd., Ph.D. gelar Datuak Djunjungan Nan Bagadiang (lahir 17 Desember 1963) adalah seorang dosen,
                            pengajar, dan akademisi teknik Indonesia. Ia merupakan Rektor Universitas Negeri Padang (UNP) dua periode sejak 2016
                            hingga 2024 dan menjabat Ketua Majelis Rektor Perguruan Tinggi Negeri Indonesia periode 2022–2024. Ia tercatat sebagai
                            Ketua Badan Pembina Universitas Bung Hatta.
                        </RevealText>
                        <motion.div
                            className="text-white bg-yellow-400 w-fit flex items-center gap-3 py-3 px-6 rounded-2xl cursor-pointer hover:bg-yellow-500 transition-colors group"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="font-bold text-lg">Selengkapnya</span>
                            <IoIosArrowForward style={{ fontSize: "24px" }} className="group-hover:translate-x-2 transition-all" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* BERITA SECTION */}
            <section className="relative mb-20">
                {/* SHAPES */}
                <img src={berita_section_wave_svg} className="absolute -z-10 w-full top-0" />
                <img
                    src={berita_background_pattern_svg}
                    className="absolute -z-10 w-screen h-[1091px] inset-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
                    ref={berita_background_pattern}
                />
                <div className="absolute h-5/6 bg-yellow-400 rounded-es-[36px] rounded-ee-[36px] -z-20 w-full bottom-0"></div>
                <div className="absolute top-3 left-3">
                    <img src={berita_title_outline_svg} />
                    <img src={berita_title_filled_svg} className="absolute top-0 left-0 -z-30" />
                </div>
                <div
                    className="absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2 w-[218px] h-[152px] group cursor-pointer berita-button"
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
                </div>

                {/* CONTENT */}
                <div className="px-32 py-24 flex flex-col items-center gap-16">
                    <div className="flex items-center justify-center flex-col gap-2">
                        <h2 className="text-3xl font-bold text-slate-800">Berita dan Agenda Terakhir</h2>
                        <p className="text-xl font-medium text-slate-500 max-w-[537px] text-center">
                            Kumpulan berita beserta beserta agenda terakhir tentang Ganefri
                        </p>
                    </div>
                    <div className={`w-full grid ${berita_array == 1 ? "grid-cols-1" : berita_array > 1 ? "grid-cols-2" : null} gap-6`}>
                        {berita_array == 1 ? (
                            <motion.div
                                className="group cursor-pointer"
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
                                viewport={{ once: true }}
                            >
                                <div className="w-full h-[720px] rounded-3xl overflow-hidden mb-6">
                                    <img
                                        src="https://picsum.photos/1280/720?img=4"
                                        className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                    />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-2 items-center">
                                        <p className="font-semibold text-lg text-yellow-800">Agenda</p>
                                        <BsDot fontSize={24} />
                                        <div className="flex gap-2 items-center text-slate-500">
                                            <FiClock fontSize={24} />
                                            <span className="font-medium text-lg">Senin, 10 Juni 2024</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h1 className="text-4xl text-slate-800 font-bold">Lorem ipsum dolor sit amet consectetur.</h1>
                                        <p className="text-lg text-slate-800 leading-6">
                                            Lorem ipsum dolor sit amet consectetur. Nunc ultrices dictum maecenas molestie varius a. Erat orci diam
                                            magna sed. Nibh eget amet etiam amet semper. Cursus arcu vulputate mauris blandit sollicitudin turpis...
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ) : berita_array == 2 ? (
                            <>
                                <motion.div
                                    className="group cursor-pointer"
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
                                    viewport={{ once: true }}
                                >
                                    <div className="w-full h-[720px] rounded-3xl overflow-hidden mb-6">
                                        <img
                                            src="https://picsum.photos/1280/720?img=4"
                                            className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex gap-2 items-center">
                                            <p className="font-semibold text-lg text-yellow-800">Agenda</p>
                                            <BsDot fontSize={24} />
                                            <div className="flex gap-2 items-center text-slate-500">
                                                <FiClock fontSize={24} />
                                                <span className="font-medium text-lg">Senin, 10 Juni 2024</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <h1 className="text-4xl text-slate-800 font-bold">Lorem ipsum dolor sit amet consectetur.</h1>
                                            <p className="text-lg text-slate-800 leading-6">
                                                Lorem ipsum dolor sit amet consectetur. Nunc ultrices dictum maecenas molestie varius a. Erat orci
                                                diam magna sed. Nibh eget amet etiam amet semper. Cursus arcu vulputate mauris blandit sollicitudin
                                                turpis...
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="group cursor-pointer"
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7 } }}
                                    viewport={{ once: true }}
                                >
                                    <div className="w-full h-[720px] rounded-3xl overflow-hidden mb-6">
                                        <img
                                            src="https://picsum.photos/1280/720?img=5"
                                            className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex gap-2 items-center">
                                            <p className="font-semibold text-lg text-yellow-800">Agenda</p>
                                            <BsDot fontSize={24} />
                                            <div className="flex gap-2 items-center text-slate-500">
                                                <FiClock fontSize={24} />
                                                <span className="font-medium text-lg">Senin, 10 Juni 2024</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <h1 className="text-4xl text-slate-800 font-bold">Lorem ipsum dolor sit amet consectetur.</h1>
                                            <p className="text-lg text-slate-800 leading-6">
                                                Lorem ipsum dolor sit amet consectetur. Nunc ultrices dictum maecenas molestie varius a. Erat orci
                                                diam magna sed. Nibh eget amet etiam amet semper. Cursus arcu vulputate mauris blandit sollicitudin
                                                turpis...
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        ) : berita_array === 3 ? (
                            <>
                                <motion.div
                                    className="group cursor-pointer"
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
                                    viewport={{ once: true }}
                                >
                                    <div className="w-full h-[720px] rounded-3xl overflow-hidden mb-6">
                                        <img
                                            src="https://picsum.photos/1280/720?img=4"
                                            className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex gap-2 items-center">
                                            <p className="font-semibold text-lg text-yellow-800">Agenda</p>
                                            <BsDot fontSize={24} />
                                            <div className="flex gap-2 items-center text-slate-500">
                                                <FiClock fontSize={24} />
                                                <span className="font-medium text-lg">Senin, 10 Juni 2024</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <h1 className="text-4xl text-slate-800 font-bold">Lorem ipsum dolor sit amet consectetur.</h1>
                                            <p className="text-lg text-slate-800 leading-6">
                                                Lorem ipsum dolor sit amet consectetur. Nunc ultrices dictum maecenas molestie varius a. Erat orci
                                                diam magna sed. Nibh eget amet etiam amet semper. Cursus arcu vulputate mauris blandit sollicitudin
                                                turpis...
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                                <div className="flex flex-col gap-6">
                                    <motion.div
                                        className="group cursor-pointer"
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7 } }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="w-full h-[334px] rounded-3xl overflow-hidden mb-6">
                                            <img
                                                src="https://picsum.photos/1280/720?img=5"
                                                className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <div className="flex gap-2 items-center">
                                                <p className="font-semibold text-lg text-yellow-800">Agenda</p>
                                                <BsDot fontSize={24} />
                                                <div className="flex gap-2 items-center text-slate-500">
                                                    <FiClock fontSize={24} />
                                                    <span className="font-medium text-lg">Senin, 10 Juni 2024</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <h1 className="text-4xl text-slate-800 font-bold">Lorem ipsum dolor sit amet consectetur.</h1>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        className="group cursor-pointer"
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.9 } }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="w-full h-[334px] rounded-3xl overflow-hidden mb-6">
                                            <img
                                                src="https://picsum.photos/1280/720?img=6"
                                                className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <div className="flex gap-2 items-center">
                                                <p className="font-semibold text-lg text-yellow-800">Agenda</p>
                                                <BsDot fontSize={24} />
                                                <div className="flex gap-2 items-center text-slate-500">
                                                    <FiClock fontSize={24} />
                                                    <span className="font-medium text-lg">Senin, 10 Juni 2024</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <h1 className="text-4xl text-slate-800 font-bold">Lorem ipsum dolor sit amet consectetur.</h1>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </>
                        ) : berita_array === 4 ? (
                            <>
                                <motion.div
                                    className="group cursor-pointer"
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
                                    viewport={{ once: true }}
                                >
                                    <div className="w-full h-[720px] rounded-3xl overflow-hidden mb-6">
                                        <img
                                            src="https://picsum.photos/1280/720?img=4"
                                            className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex gap-2 items-center">
                                            <p className="font-semibold text-lg text-yellow-800">Agenda</p>
                                            <BsDot fontSize={24} />
                                            <div className="flex gap-2 items-center text-slate-500">
                                                <FiClock fontSize={24} />
                                                <span className="font-medium text-lg">Senin, 10 Juni 2024</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <h1 className="text-4xl text-slate-800 font-bold">Lorem ipsum dolor sit amet consectetur.</h1>
                                            <p className="text-lg text-slate-800 leading-6">
                                                Lorem ipsum dolor sit amet consectetur. Nunc ultrices dictum maecenas molestie varius a. Erat orci
                                                diam magna sed. Nibh eget amet etiam amet semper. Cursus arcu vulputate mauris blandit sollicitudin
                                                turpis...
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                                <div className="flex flex-col gap-6">
                                    <motion.div
                                        className="group cursor-pointer"
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7 } }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="w-full h-[334px] rounded-3xl overflow-hidden mb-6">
                                            <img
                                                src="https://picsum.photos/1280/720?img=5"
                                                className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <div className="flex gap-2 items-center">
                                                <p className="font-semibold text-lg text-yellow-800">Agenda</p>
                                                <BsDot fontSize={24} />
                                                <div className="flex gap-2 items-center text-slate-500">
                                                    <FiClock fontSize={24} />
                                                    <span className="font-medium text-lg">Senin, 10 Juni 2024</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <h1 className="text-4xl text-slate-800 font-bold">Lorem ipsum dolor sit amet consectetur.</h1>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <motion.div
                                            className="group cursor-pointer"
                                            initial={{ y: 100, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="w-full h-[334px] rounded-3xl overflow-hidden mb-6">
                                                <img
                                                    src="https://picsum.photos/1280/720?img=6"
                                                    className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <div className="flex gap-2 items-center">
                                                    <p className="font-semibold text-lg text-yellow-800">Agenda</p>
                                                    <BsDot fontSize={24} />
                                                    <div className="flex gap-2 items-center text-slate-500">
                                                        <FiClock fontSize={24} />
                                                        <span className="font-medium text-lg">Senin, 10 Juni 2024</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <h1 className="text-2xl text-slate-800 font-bold">Lorem ipsum dolor sit amet consectetur.</h1>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            className="group cursor-pointer"
                                            initial={{ y: 100, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.6 } }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="w-full h-[334px] rounded-3xl overflow-hidden mb-6">
                                                <img
                                                    src="https://picsum.photos/1280/720?img=7"
                                                    className="object-cover w-full h-full group-hover:scale-[1.1] transition-all"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <div className="flex gap-2 items-center">
                                                    <p className="font-semibold text-lg text-yellow-800">Agenda</p>
                                                    <BsDot fontSize={24} />
                                                    <div className="flex gap-2 items-center text-slate-500">
                                                        <FiClock fontSize={24} />
                                                        <span className="font-medium text-lg">Senin, 10 Juni 2024</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <h1 className="text-2xl text-slate-800 font-bold">Lorem ipsum dolor sit amet consectetur.</h1>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            </section>

            {/* YOUTUBE OVERLAY */}
            <section className="relative">
                {/* SHAPES */}
                <img src={dot_brown_svg} alt="dot_brown" className="absolute bottom-[8px] right-[-11px] -z-10" ref={dot_brown} />
                <img src={youtube_title_filled} alt="dot_brown" className="absolute top-3 left-3 -z-10" />
                <img src={youtube_title_outline} alt="dot_brown" className="absolute top-3 left-3" />

                {/* CONTENT */}
                <div className="px-32 py-24">
                    <div className="bg-yellow-400 w-full flex items-center p-16 rounded-3xl gap-6">
                        <div className="w-1/2 overflow-hidden border-yellow-600 rounded-2xl border-2">
                            <iframe
                                src="https://www.youtube.com/embed/Px_XYlEMqxs?si=cYdSA18LNWs0m8dD"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="w-full h-[425px]"
                            ></iframe>
                        </div>
                        <div className="w-1/2 flex flex-col">
                            <motion.a
                                href="youtube.com"
                                className="text-slate-800 flex gap-3 items-center border-b-2 py-4 border-yellow-500 hover:text-white transition-colors"
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
                                viewport={{ once: true }}
                            >
                                <FaYoutube fontSize={48} />
                                <span className="text-xl font-bold">Lorem ipsum dolor sit amet consectetur. Dignissim sed</span>
                            </motion.a>
                            <motion.a
                                href="youtube.com"
                                className="text-slate-800 flex gap-3 items-center border-b-2 py-4 border-yellow-500 hover:text-white transition-colors"
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
                                viewport={{ once: true }}
                            >
                                <FaYoutube fontSize={48} />
                                <span className="text-xl font-bold">Lorem ipsum dolor sit amet consectetur. Dignissim sed</span>
                            </motion.a>
                            <motion.a
                                href="youtube.com"
                                className="text-slate-800 flex gap-3 items-center border-b-2 py-4 border-yellow-500 hover:text-white transition-colors"
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
                                viewport={{ once: true }}
                            >
                                <FaYoutube fontSize={48} />
                                <span className="text-xl font-bold">Lorem ipsum dolor sit amet consectetur. Dignissim sed</span>
                            </motion.a>
                            <motion.a
                                href="youtube.com"
                                className="text-slate-800 flex gap-3 items-center border-b-2 py-4 border-yellow-500 hover:text-white transition-colors"
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
                                viewport={{ once: true }}
                            >
                                <FaYoutube fontSize={48} />
                                <span className="text-xl font-bold">Lorem ipsum dolor sit amet consectetur. Dignissim sed</span>
                            </motion.a>
                            <motion.a
                                href="youtube.com"
                                className="text-slate-800 flex gap-3 items-center border-b-2 py-4 border-yellow-500 hover:text-white transition-colors"
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
                                viewport={{ once: true }}
                            >
                                <FaYoutube fontSize={48} />
                                <span className="text-xl font-bold">Lorem ipsum dolor sit amet consectetur. Dignissim sed</span>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </section>

            {/* MEDIA SOCTIAL SECTION */}
            <MediaSocialSection />

            {/* FOOTER */}
            <Footer />
        </main>
    );
};

export default Beranda;
