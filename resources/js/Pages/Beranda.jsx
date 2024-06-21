import { useEffect, useRef } from "react";
import HeroBackground from "../Components/HeroBackground";
import Header from "../Layout/Header";
import { gsap } from "gsap";
import SplitType from "split-type";
import RevealText from "../Components/RevealText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import foto_utama from "../../assets/svg/profil/main.svg";
import profile_ellipse_svg from "../../assets/svg/shapes/profile_ellipse.svg";
import profile_title_svg from "../../assets/svg/shapes/profile_title.svg";
import line_yellow_svg from "../../assets/svg/shapes/hero_line_yellow.svg";

const Beranda = () => {
    const profile_ellipse = useRef();
    const line_yellow = useRef();

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
    }, []);

    return (
        <div className="h-[3000px] overflow-x-hidden">
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
        </div>
    );
};

export default Beranda;
