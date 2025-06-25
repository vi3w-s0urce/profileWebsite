import { useEffect, useRef, useState } from "react";
import Header from "../Layout/Header";
import HeroSection from "../Layout/HeroSection";
import { gsap } from "gsap";
import RevealText from "../Components/RevealText";
import "swiper/css";
import { IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import foto_utama from "../../assets/svg/profil/main.svg";
import profile_ellipse_svg from "../../assets/svg/shapes/profile_ellipse.svg";
import profile_title_svg from "../../assets/svg/shapes/profile_title.svg";
import line_yellow_svg from "../../assets/svg/shapes/hero_line_yellow.svg";
import riwayat_background_pattern_svg from "../../assets/svg/shapes/berita_background_pattern.svg";
import riwayat_title_filled_svg from "../../assets/svg/shapes/riwayat_title_filled.svg";
import riwayat_title_outline_svg from "../../assets/svg/shapes/riwayat_title_outline.svg";
import profil_1_img from "../../assets/image/profil_1.jpg";
import box_twin_svg from "../../assets/svg/shapes/box_twin.svg";
import dot_brown_svg from "../../assets/svg/shapes/dot_brown.svg";
import line_pattern_svg from "../../assets/svg/shapes/line_pattern.svg";
import riwayat_blob_svg from "../../assets/svg/shapes/riwayat_blob.svg";
import riwayat_pendidikan_svg from "../../assets/svg/riwayat/riwayat_pendidikan.svg";
import riwayat_karier_img from "../../assets/image/riwayat/briefcase.png";
import riwayat_organization_img from "../../assets/image/riwayat/organization.png";
import penghargaan_1_img from "../../assets/image/penghargaan_1.jpg";
import penghargaan_2_img from "../../assets/image/penghargaan_2.jpeg";
import penghargaan_wave_svg from "../../assets/svg/shapes/penghargaan_wave.svg";
import penghargaan_title_outline_svg from "../../assets/svg/shapes/penghargaan_title_outline.svg";
import penghargaan_title_filled_svg from "../../assets/svg/shapes/penghargaan_title_filled.svg";
import ellipse_gradient_yellow_svg from "../../assets/svg/shapes/ellipse_gradient_yellow.svg";
import riwayat_background_pattern_mobile_svg from "../../assets/svg/shapes/berita_background_pattern_mobile.svg";
import { MdOutlineSchool, MdOutlineWorkOutline, MdPeopleOutline } from "react-icons/md";
import { ScrollTrigger } from "gsap/all";
import Footer from "../Layout/Footer";
import { Head } from "@inertiajs/react";
import { useDispatch } from "react-redux";
import { setCurrentRoute } from "../Redux/slice";
import { useMediaQuery } from "react-responsive";
import BackToTopButton from "../Components/BackToTopButton";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { TbAward } from "react-icons/tb";
import ReactGA from "react-ga4";
import Main from "../Layout/Main";

const Profil = ({ profil_1_db, profil_2_db, riwayat_pendidikan_db, riwayat_pekerjaan_db, riwayat_organisasi_db, penghargaan_db }) => {
    const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

    const profile_ellipse = useRef();
    const line_yellow = useRef();
    const box_twin = useRef();
    const dot_brown = useRef();
    const line_pattern = useRef();
    const container = useRef();
    const riwayat_blob = useRef();
    const riwayat_ellipse = useRef();
    const riwayat_ellipse_outline = useRef();
    const riwayat_line_yellow = useRef();
    const riwayat_pendidikan = useRef();
    const riwayat_karier = useRef();
    const riwayat_organization = useRef();
    const box_yellow = useRef();
    const riwayat_background_pattern = useRef();
    const ellipse_gradient_yellow = useRef();

    const variants_riwayat_bar = {
        open: !isDesktop ? { width: 64, height: 8, backgroundColor: "#facc15" } : { height: 64, width: 8, backgroundColor: "#facc15" },
        closed: !isDesktop ? { width: 32, height: 8, backgroundColor: "#d6d3d1" } : { height: 32, width: 8, backgroundColor: "#d6d3d1" },
    };

    const [riwayatSection, setRiwayatSection] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Profil" });

        dispatch(setCurrentRoute("Profil"));

        if (isDesktop) {
            setTimeout(() => {
                gsap.to(profile_ellipse.current, {
                    scrollTrigger: {
                        trigger: profile_ellipse.current,
                        start: "top 76%",
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

                gsap.to(box_twin.current, {
                    scrollTrigger: {
                        trigger: box_twin.current,
                        start: "top 80%",
                        end: "bottom top",
                        scrub: 1,
                    },
                    top: "-=100px",
                    rotate: "-=40deg",
                });

                gsap.from(dot_brown.current, {
                    scrollTrigger: {
                        trigger: dot_brown.current,
                        start: "top bottom",
                        end: "-160% top",
                        scrub: 1,
                    },
                    top: "+=220px",
                });

                gsap.from(line_pattern.current, {
                    scrollTrigger: {
                        trigger: line_pattern.current,
                        start: "top bottom",
                        end: "-160% top",
                        scrub: 1,
                    },
                    left: "-400px",
                });

                gsap.from(riwayat_background_pattern.current, {
                    scrollTrigger: {
                        trigger: riwayat_background_pattern.current,
                        start: "top 70%",
                    },
                    width: 0,
                    duration: 4,
                    ease: "power3.out",
                });

                gsap.from(ellipse_gradient_yellow.current, {
                    scrollTrigger: {
                        trigger: ellipse_gradient_yellow.current,
                        start: "top bottom",
                        end: "top top",
                        scrub: 1,
                    },
                    bottom: "-400px",
                    right: "-600px",
                    ease: "power3.out",
                });
            }, 500);
        }

        // Riwayat Animation
        setTimeout(() => {
            if (!isDesktop) {
                const riwayat_timeline = gsap.timeline();
                riwayat_timeline
                    .fromTo(riwayat_pendidikan.current, { opacity: 0, scale: 0.5, x: -100 }, { opacity: 1, scale: 1, x: 0, duration: 1 })
                    .fromTo(
                        riwayat_pendidikan.current,
                        { opacity: 1, scale: 1, x: 0 },
                        {
                            opacity: 0,
                            scale: 0.5,
                            x: 100,
                            duration: 1,
                            delay: 1,
                            onComplete: () => {
                                setRiwayatSection(1);
                            },
                            onReverseComplete: () => {
                                setRiwayatSection(0);
                            },
                        }
                    )
                    .fromTo(riwayat_karier.current, { opacity: 0, scale: 0.5, x: -100 }, { opacity: 1, scale: 1, x: 0, duration: 1 })
                    .fromTo(
                        riwayat_karier.current,
                        { opacity: 1, scale: 1, x: 0 },
                        {
                            opacity: 0,
                            scale: 0.5,
                            x: 100,
                            duration: 1,
                            delay: 1,
                            onComplete: () => {
                                setRiwayatSection(2);
                            },
                            onReverseComplete: () => {
                                setRiwayatSection(1);
                            },
                        }
                    )
                    .fromTo(riwayat_organization.current, { opacity: 0, scale: 0.5, x: -100 }, { opacity: 1, scale: 1, x: 0, duration: 1 })
                    .fromTo(riwayat_organization.current, { opacity: 1, scale: 1, x: 0 }, { opacity: 0, scale: 0.5, x: 100, duration: 1, delay: 1 });

                ScrollTrigger.create({
                    trigger: container.current,
                    pin: container.current,
                    scrub: 1,
                    end: "200%",
                    animation: riwayat_timeline,
                });
            } else {
                const riwayat_timeline = gsap.timeline();
                riwayat_timeline
                    .fromTo(riwayat_pendidikan.current, { opacity: 0, scale: 0.5, y: 250 }, { opacity: 1, scale: 1, y: 0, duration: 1 })
                    .fromTo(
                        riwayat_pendidikan.current,
                        { opacity: 1, scale: 1, y: 0 },
                        {
                            opacity: 0,
                            scale: 0.5,
                            y: -250,
                            duration: 1,
                            delay: 1,
                            onComplete: () => {
                                setRiwayatSection(1);
                            },
                            onReverseComplete: () => {
                                setRiwayatSection(0);
                            },
                        }
                    )
                    .fromTo(riwayat_karier.current, { opacity: 0, scale: 0.5, y: 250 }, { opacity: 1, scale: 1, y: 0, duration: 1 })
                    .fromTo(
                        riwayat_karier.current,
                        { opacity: 1, scale: 1, y: 0 },
                        {
                            opacity: 0,
                            scale: 0.5,
                            y: -250,
                            duration: 1,
                            delay: 1,
                            onComplete: () => {
                                setRiwayatSection(2);
                            },
                            onReverseComplete: () => {
                                setRiwayatSection(1);
                            },
                        }
                    )
                    .fromTo(riwayat_organization.current, { opacity: 0, scale: 0.5, y: 250 }, { opacity: 1, scale: 1, y: 0, duration: 1 })
                    .fromTo(riwayat_organization.current, { opacity: 1, scale: 1, y: 0 }, { opacity: 0, scale: 0.5, y: -250, duration: 1, delay: 1 });

                ScrollTrigger.create({
                    trigger: container.current,
                    pin: container.current,
                    scrub: 1,
                    end: "200%",
                    animation: riwayat_timeline,
                });
            }

            const blob_anim = gsap.to(riwayat_blob.current, { rotate: -90 });

            const box_yellow_anim = gsap
                .timeline()
                .from(box_yellow.current, { scale: 0, delay: 0.5, duration: 1 })
                .to(box_yellow.current, { rotate: "+=30" });

            const riwayat_ellipse_outline_anim = gsap.from(riwayat_ellipse_outline.current, {
                scale: 0,
                x: "-=50px",
                y: "+=50px",
                duration: 1,
            });

            const riwayat_ellipse_anim = gsap.from(riwayat_ellipse.current, {
                scale: 0,
                y: "+=90px",
            });

            const riwayat_line_yellow_anim = gsap.from(riwayat_line_yellow.current, {
                width: 0,
            });

            gsap.from(riwayat_blob.current, {
                scrollTrigger: {
                    trigger: riwayat_blob.current,
                },
                scale: 0,
                duration: 1,
                onComplete: () => {
                    blob_anim;
                },
            });

            ScrollTrigger.create({
                trigger: container.current,
                scrub: 1,
                start: "top top",
                end: "200%",
                animation: blob_anim,
            });

            ScrollTrigger.create({
                trigger: container.current,
                scrub: 1,
                start: "top 50%",
                end: "200%",
                animation: box_yellow_anim,
            });

            ScrollTrigger.create({
                trigger: container.current,
                scrub: 1,
                start: "top 50%",
                end: "200%",
                animation: riwayat_ellipse_outline_anim,
            });

            ScrollTrigger.create({
                trigger: container.current,
                scrub: 1,
                start: "top 100%",
                end: "200%",
                animation: riwayat_ellipse_anim,
            });

            ScrollTrigger.create({
                trigger: container.current,
                scrub: 1,
                start: "top 70%",
                end: "200%",
                animation: riwayat_line_yellow_anim,
            });
        }, 200);
    }, []);

    const penghargaanContainerRef = useRef(null);
    const [scrollOpen, setScrollOpen] = useState(true);

    useEffect(() => {
        const container = penghargaanContainerRef.current;

        NativeFancybox.bind(container);
    }, []);

    useEffect(() => {
        if (scrollOpen) {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            setScrollOpen(false);
        }
    }, [scrollOpen]);

    const formatText = (text) => {
        return text.split("\n").map((line, index) => (
            <>
                {line}
                <br />
            </>
        ));
    };

    return (
        <Main>
            {/* TITLE */}
            <Head>
                <title>Profil Lengkap</title>
            </Head>

            {/* HERO */}
            <HeroSection type="profile" />

            {/* PROFIL SECTION */}
            <section className="relative">
                {/* SHAPES */}
                <img
                    src={profile_ellipse_svg}
                    className="absolute -z-10 w-[180px] h-[180px] top-[-26px] right-[-64px] xl:top-[50px] xl:right-[-79px] xl:w-auto xl:h-auto"
                    ref={profile_ellipse}
                ></img>
                <img
                    src={line_yellow_svg}
                    className="absolute -z-10 top-[360px] right-[-10px] xl:top-[497px] xl:right-[196px]"
                    ref={line_yellow}
                ></img>
                <img src={profile_title_svg} className="absolute -z-10 w-[186px] h-[59px] top-1 left-1 xl:w-auto xl:h-auto xl:top-3 xl:left-3"></img>

                {/* CONTENT */}
                <div className="flex items-center px-4 py-8 flex-col gap-4 xl:flex-row xl:px-32 xl:py-24 xl:gap-44">
                    {profil_1_db.gambar ? (
                        <motion.img
                            src={"/storage/profilImages/" + profil_1_db.gambar}
                            className="object-cover rounded-2xl shadow-2xl w-full h-[200px] xl:h-[433px] xl:w-[679px]"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }}
                            viewport={{ once: true }}
                        />
                    ) : (
                        <motion.img
                            src={"/storage/profilImages/default_1.svg"}
                            className="object-cover w-[258px] h-[305px] xl:w-[366px] xl:h-[433px]"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.5, ease: "backInOut" } }}
                            viewport={{ once: true }}
                        />
                    )}
                    <div className="flex flex-col">
                        <RevealText
                            className="font-semibold text-slate-400 text-base mb-1 xl:text-2xl xl:mb-3"
                            scroll={true}
                            type="words"
                            stagger={0.1}
                        >
                            Perkenalan Saya
                        </RevealText>
                        <RevealText className="font-bold text-yellow-900 text-[34px] mb-2 xl:text-5xl xl:mb-2" delay={0.5} scroll={true}>
                            Ganefri
                        </RevealText>
                        <RevealText
                            className="font-medium text-slate-800 text-sm mb-5 xl:text-lg xl:mb-8"
                            type="words"
                            scroll={true}
                            stagger={0.01}
                            bottom={50}
                        >
                            {formatText(profil_1_db.content)}
                        </RevealText>
                    </div>
                </div>
            </section>
            <section className="relative">
                {/* SHAPES */}
                <img
                    src={box_twin_svg}
                    alt="box_twin"
                    className="absolute -z-10 w-[128px] h-[137px] top-[51px] left-[-39px] xl:w-auto xl:h-auto xl:top-[-137px] xl:left-[-178px]"
                    ref={box_twin}
                />
                <img
                    src={dot_brown_svg}
                    alt="dot_brown"
                    className="absolute -z-10 w-[137px] h-[137px] top-[580px] right-0 xl:h-auto xl:w-auto xl:top-[50px] xl:right-0"
                    ref={dot_brown}
                />
                <img
                    src={line_pattern_svg}
                    alt="dot_brown"
                    className="absolute -z-10 w-[71px] h-[27px] bottom-[369px] left-[-10px] xl:w-auto xl:h-auto xl:bottom-[12px] xl:left-[-41px]"
                    ref={line_pattern}
                />

                {/* CONTENT */}
                <div className="items-center flex gap-2 px-4 py-8 flex-col xl:justify-between xl:px-32 xl:py-24 xl:gap-12 xl:flex-row">
                    <div className="w-full">
                        <RevealText
                            className="font-medium text-slate-800 whitespace-pre-wrap text-sm mb-5 xl:text-lg xl:mb-8 w-full"
                            type="words"
                            scroll={true}
                            stagger={0.01}
                            bottom={50}
                        >
                            {formatText(profil_2_db.content)}
                        </RevealText>
                    </div>
                    <motion.img
                        src={profil_2_db.gambar ? "/storage/profilImages/" + profil_2_db.gambar : "/storage/profilImages/default_2.jpg"}
                        className="object-cover rounded-2xl shadow-2xl max-w-[342px] w-full h-[200px] xl:h-[433px] xl:max-w-[50%]"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }}
                        viewport={{ once: true }}
                    />
                </div>
            </section>

            {/* RIWAYAT */}
            <section className="relative overflow-hidden" ref={container}>
                {/* SHAPES */}
                {!isDesktop ? (
                    <img
                        src={riwayat_background_pattern_mobile_svg}
                        className="absolute z-0 w-[120%] h-[800px] inset-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
                        ref={riwayat_background_pattern}
                    />
                ) : (
                    <img
                        src={riwayat_background_pattern_svg}
                        className="absolute z-0 w-screen h-[1091px] inset-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
                        ref={riwayat_background_pattern}
                    />
                )}
                <img
                    src={riwayat_title_filled_svg}
                    alt="riwayat"
                    className="absolute z-0 w-[235px] h-[59px] top-1 left-1 xl:w-auto xl:h-auto xl:top-3 xl:left-3"
                />
                <img
                    src={riwayat_title_outline_svg}
                    alt="riwayat"
                    className="absolute z-30 w-[235px] h-[59px] top-1 left-1 xl:w-auto xl:h-auto xl:top-3 xl:left-3"
                />

                {/* CONTENT */}
                <div className="h-screen w-full bg-yellow-400 px-4 py-8 xl:px-32 xl:py-24">
                    <div className="relative z-20 bg-white w-full h-full rounded-[30px] bg-gradient-to-br from-white via-white via-30% to-yellow-200 flex justify-between items-center flex-col px-4 py-8 xl:flex-row xl:px-12 xl:py-0 xl:gap-12">
                        <div className="flex items-center flex-col gap-4 xl:flex-row xl:gap-12">
                            <div className="flex items-end gap-2 flex-row xl:flex-col">
                                <div className="flex items-center flex-col gap-2 xl:flex-row xl:gap-3">
                                    <MdOutlineSchool
                                        fontSize={32}
                                        className={`text-yellow-400 ${riwayatSection == 0 ? "opacity-100" : "opacity-0"} transition-all`}
                                    />
                                    <motion.div
                                        className="bg-yellow-400 rounded-full w-[64px] h-[8px] xl:w-[8px] xl:h-[64px]"
                                        variants={variants_riwayat_bar}
                                        animate={riwayatSection == 0 ? "open" : "closed"}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                                <div className="flex items-center flex-col gap-2 xl:flex-row xl:gap-3">
                                    <MdOutlineWorkOutline
                                        fontSize={32}
                                        className={`text-yellow-400 ${riwayatSection == 1 ? "opacity-100" : "opacity-0"} transition-all`}
                                    />
                                    <motion.div
                                        className="bg-slate-300 rounded-full h-[8px] w-[32px] xl:w-[8px] xl:h-[32px]"
                                        variants={variants_riwayat_bar}
                                        animate={riwayatSection == 1 ? "open" : "closed"}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                                <div className="flex items-center flex-col gap-2 xl:flex-row xl:gap-3">
                                    <MdPeopleOutline
                                        fontSize={32}
                                        className={`text-yellow-400 ${riwayatSection == 2 ? "opacity-100" : "opacity-0"} transition-all`}
                                    />
                                    <motion.div
                                        className="bg-slate-300 rounded-full h-[8px] w-[32px] xl:w-[8px] xl:h-[32px]"
                                        variants={variants_riwayat_bar}
                                        animate={riwayatSection == 2 ? "open" : "closed"}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                            </div>
                            <div className="relative flex justify-center items-center w-[292px] h-[318px] xl:w-[433px] xl:h-[433px]">
                                {/* SHAPES */}
                                <div
                                    className="absolute left-[0px] top-[50px] bg-yellow-300 rotate-[25deg] w-[46px] h-[46px] rounded-xl xl:w-[82px] xl:h-[82px] xl:rounded-3xl"
                                    ref={box_yellow}
                                ></div>
                                <img src={riwayat_blob_svg} alt="riwayat_blob" className="absolute left-1/2 -translate-x-1/2" ref={riwayat_blob} />
                                <div
                                    className="absolute left-[24px] bottom-[24px] bg-yellow-400 rounded-full w-[22px] h-[22px] xl:w-[38px] xl:h-[38px]"
                                    ref={riwayat_ellipse}
                                ></div>
                                <div
                                    className="absolute right-[24px] top-[24px] border-2 border-yellow-800 w-[52px] h-[52px] rounded-full"
                                    ref={riwayat_ellipse_outline}
                                ></div>
                                <img
                                    src={line_yellow_svg}
                                    className="absolute right-[0] bottom-[0] object-cover w-[166px] h-[24px]"
                                    ref={riwayat_line_yellow}
                                />

                                {/* IMAGE */}
                                <img src={riwayat_pendidikan_svg} alt="pendidkan" className="absolute z-10 w-[512px]" ref={riwayat_pendidikan} />
                                <img src={riwayat_karier_img} alt="karier" className="absolute z-10 object-cover" ref={riwayat_karier} />
                                <img
                                    src={riwayat_organization_img}
                                    alt="organization"
                                    className="absolute z-10 object-cover w-[250px] xl:w-[300px]"
                                    ref={riwayat_organization}
                                />
                            </div>
                        </div>
                        <div className="relative max-w-[700px] h-full w-full flex items-center">
                            <AnimatePresence>
                                {riwayatSection == 0 ? (
                                    <motion.div
                                        className="flex flex-col absolute gap-2 xl:gap-6"
                                        initial={{ opacity: 0, x: -200, scale: 0.8 }}
                                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: 200, scale: 0.8 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <h1 className="flex items-center gap-2 xl:gap-4">
                                            <MdOutlineSchool className="text-yellow-400 text-[32px] xl:text-[42px]" />
                                            <span className="font-bold text-yellow-900 text-xl xl:text-3xl">Riwayat Pendidikan</span>
                                        </h1>
                                        <ol className="list-disc flex flex-col ms-4 gap-1 xl:ms-7 xl:gap-2">
                                            {riwayat_pendidikan_db.map((item, index) => (
                                                <li className="font-medium text-slate-800 text-xs xl:text-base">{item.list}</li>
                                            ))}
                                        </ol>
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>
                            <AnimatePresence>
                                {riwayatSection == 1 ? (
                                    <motion.div
                                        className="flex flex-col absolute gap-2 xl:gap-6"
                                        initial={{ opacity: 0, x: -200, scale: 0.8 }}
                                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: 200, scale: 0.8 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <h1 className="flex items-center gap-2 xl:gap-4">
                                            <MdOutlineWorkOutline className="text-yellow-400 text-[32px] xl:text-[42px]" />
                                            <span className="font-bold text-yellow-900 text-xl xl:text-3xl">Riwayat Pekerjaan</span>
                                        </h1>
                                        <ol className="list-disc flex flex-col ms-4 gap-1 xl:ms-7 xl:gap-2">
                                            {riwayat_pekerjaan_db.map((item, index) => (
                                                <li className="font-medium text-slate-800 text-xs xl:text-base">{item.list}</li>
                                            ))}
                                        </ol>
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>
                            <AnimatePresence>
                                {riwayatSection == 2 && (
                                    <motion.div
                                        className="flex flex-col absolute gap-2 xl:gap-6"
                                        initial={{ opacity: 0, x: -200, scale: 0.8 }}
                                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: 200, scale: 0.8 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <h1 className="flex items-center gap-2 xl:gap-4">
                                            <MdPeopleOutline className="text-yellow-400 text-[32px] xl:text-[42px]" />
                                            <span className="font-bold text-yellow-900 text-xl xl:text-3xl">Riwayat Organisasi</span>
                                        </h1>
                                        <ol className="list-disc flex flex-col list-inside gap-1 overflow-y-auto max-h-[30vh] xl:overflow-y-auto xl:ms-7 xl:gap-2 xl:max-h-[50vh]">
                                            {riwayat_organisasi_db.map((item, index) => (
                                                <li className="font-medium text-slate-800 text-xs xl:text-base">{item.list}</li>
                                            ))}
                                        </ol>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* PENGHARGAAN */}
            <section className="relative">
                {/* SHAPES */}
                <img src={penghargaan_wave_svg} alt="wave" className="absolute top-0 left-0 -z-10" />
                <img
                    src={penghargaan_title_filled_svg}
                    alt="wave"
                    className="absolute -z-20 top-1 left-1 w-[337px] h-[49px] xl:top-3 xl:left-3 xl:w-auto xl:h-auto"
                />
                <img
                    src={penghargaan_title_outline_svg}
                    alt="wave"
                    className="absolute -z-10 top-1 left-1 w-[337px] h-[49px] xl:top-3 xl:left-3 xl:w-auto xl:h-auto"
                />
                <img
                    src={ellipse_gradient_yellow_svg}
                    alt="wave"
                    className="absolute -z-10 w-[214px] h-[214px] bottom-[-50px] right-[-50px] xl:bottom-[-255px] xl:right-[-428px] xl:w-auto xl:h-auto"
                    ref={ellipse_gradient_yellow}
                />

                {/* CONTENT */}
                <div className="flex flex-col items-center px-4 py-8 gap-8 xl:px-32 xl:py-24 xl:gap-16">
                    <div className="flex items-center justify-center flex-col gap-2">
                        <h2 className="font-bold text-center text-slate-800 text-xl xl:text-3xl">Penghargaan Yang di Raih Ganefri</h2>
                        <p className="font-medium text-slate-500 max-w-[450px] text-center text-sm xl:text-xl">
                            Sejumlah penghargaan yang berhasil di Terima oleh Ganefri
                        </p>
                    </div>
                    <div
                        ref={penghargaanContainerRef}
                        className="flex flex-wrap items-center justify-center gap-8 flex-col w-full xl:gap-16 xl:flex-row"
                    >
                        {penghargaan_db != 0 ? (
                            <>
                                {penghargaan_db.map((item, index) => (
                                    <motion.a
                                        data-fancybox="penghargaan"
                                        href={"/storage/penghargaanImages/" + item.gambar}
                                        data-caption={item.judul + ": " + item.deskripsi}
                                        className="flex flex-col items-center gap-4 group"
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 } }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="rounded-3xl overflow-hidden max-w-[342px] w-full h-[192px] xl:w-[597px] xl:h-[336px] xl:max-w-none">
                                            <img
                                                src={"/storage/penghargaanImages/" + item.gambar}
                                                alt="penghargaan"
                                                className="w-full h-full object-cover group-hover:scale-[1.2] transition-all"
                                            />
                                        </div>
                                        <p className="text-center font-medium text-slate-800 text-xl xl:text-2xl">{item.judul}</p>
                                    </motion.a>
                                ))}
                            </>
                        ) : (
                            <div className="bg-slate-300 rounded-3xl flex flex-col items-center justify-center max-w-[342px] w-full h-[192px] xl:w-[597px] xl:h-[336px] xl:max-w-none">
                                <TbAward className="text-slate-500 text-center text-[48px] xl:text-[112px]" />
                                <p className="text-center mt-4 font-semibold text-slate-500 text-base xl:text-xl">Penghargaan belum ditambahkan</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </Main>
    );
};

export default Profil;
