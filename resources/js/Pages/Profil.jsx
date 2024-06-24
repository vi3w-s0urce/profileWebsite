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
import { MdOutlineSchool, MdOutlineWorkOutline, MdPeopleOutline } from "react-icons/md";
import { ScrollTrigger } from "gsap/all";
import Footer from "../Layout/Footer";

const Profil = () => {
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
        open: { height: 64, backgroundColor: "#facc15" },
        closed: { height: 32, backgroundColor: "#d6d3d1" },
    };

    const [riwayatSection, setRiwayatSection] = useState(0);

    useEffect(() => {
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
            rotate: -40,
        });

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
            left: "-100px",
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

        setTimeout(() => {
            gsap.from(ellipse_gradient_yellow.current, {
                scrollTrigger: {
                    trigger: ellipse_gradient_yellow.current,
                    start: "top 70%",
                    end: 'top 20%',
                    scrub: 1,
                },
                bottom: "-400px",
                right: "-600px",
                ease: "power3.out",
            });
        }, 200);

        setTimeout(() => {
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
                pin: container.current,
                scrub: 1,
                end: "200%",
                animation: riwayat_timeline,
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
        }, 100);
    }, []);

    return (
        <main className="main overflow-hidden">
            {/* HEADER */}
            <Header />

            {/* HERO */}
            {/* { mobile ? () : () } */}
            <HeroSection text="Profil Lengkap Ganefri" />

            {/* PROFIL SECTION */}
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
                    </div>
                </div>
            </section>
            <section className="relative">
                {/* SHAPES */}
                <img src={box_twin_svg} alt="box_twin" className="absolute -z-10 top-[-137px] left-[-178px]" ref={box_twin} />
                <img src={dot_brown_svg} alt="dot_brown" className="absolute -z-10 top-[400px] right-0" ref={dot_brown} />
                <img src={line_pattern_svg} alt="dot_brown" className="absolute -z-10 bottom-[12px] left-[-200px]" ref={line_pattern} />

                {/* CONTENT */}
                <div className="px-32 py-24 flex items-center gap-44">
                    <div>
                        <RevealText className="font-medium text-lg text-slate-800 mb-8" type="words" scroll={true} stagger={0.01} bottom={50}>
                            Ganefri terlahir sebagai anak ketiga dari empat bersaudara. Saat berusia 5 tahun, ia telah menjadi yatim. Beruntung saat
                            itu, pepatah Minangkabau, "anak dipangku kamanakan dibimbiang" masih kental dijalankan di kampung halamannya, Payakumbuh.
                            <br />
                            <br />
                            Saat kelas IV SD, ia meninggalkan Payakumbuh dan pergi merantau ke Tanjung Pinang, Kepulauan Riau untuk melanjutkan
                            sekolah bersama etek-nya. Sedari dulu, orang tua di kampungnya telah menanamkan budaya pendidikan adalah hal utama bagi
                            anak, “Biarlah kurang makan asal anak sekolah”.
                            <br />
                            <br />
                            Ganefri menyelesaikan pendidikan SD (1976) dan SMP Belakang Padang (1980) di Batam. Ia lalu menyelesaikan pendidikan SLTA
                            di Tanjung Pinang (1983). Ia menyelesaikan studi S1 Pendidikan Elektro dari IKIP Padang (1988) dan S2 Pendidikan Teknik
                            dan Kejuruan dari IKIP Yogyakarta (1996). Ia berhasil menamatkan studi S3 Pendidikan Teknikal Vokational dari UKM Malaysia
                            (2011).
                        </RevealText>
                    </div>
                    <motion.img
                        src={profil_1_img}
                        className="w-[679px] h-[433px] object-cover rounded-2xl shadow-2xl"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }}
                        viewport={{ once: true }}
                    />
                </div>
            </section>

            {/* RIWAYAT */}
            <section className="relative overflow-hidden" ref={container}>
                {/* SHAPES */}
                <img
                    src={riwayat_background_pattern_svg}
                    className="absolute z-0 w-screen h-[1091px] inset-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
                    ref={riwayat_background_pattern}
                />
                <img src={riwayat_title_filled_svg} alt="riwayat" className="absolute top-3 left-3 z-0" />
                <img src={riwayat_title_outline_svg} alt="riwayat" className="absolute top-3 left-3 z-30" />

                {/* CONTENT */}
                <div className="px-32 py-24 h-screen w-full bg-yellow-400">
                    <div className="relative z-20 bg-white w-full h-full rounded-[30px] bg-gradient-to-br from-white via-white via-30% to-yellow-200 flex justify-center items-center gap-44">
                        <div className="flex items-center gap-12">
                            <div className="flex flex-col items-end gap-2">
                                <div className="flex items-center gap-3">
                                    <MdOutlineSchool
                                        fontSize={32}
                                        className={`text-yellow-400 ${riwayatSection == 0 ? "opacity-100" : "opacity-0"} transition-all`}
                                    />
                                    <motion.div
                                        className="w-[8px] h-[64px] bg-yellow-400 rounded-full"
                                        variants={variants_riwayat_bar}
                                        animate={riwayatSection == 0 ? "open" : "closed"}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                                <div className="flex items-center gap-3">
                                    <MdOutlineWorkOutline
                                        fontSize={32}
                                        className={`text-yellow-400 ${riwayatSection == 1 ? "opacity-100" : "opacity-0"} transition-all`}
                                    />
                                    <motion.div
                                        className="w-[8px] h-[32px] bg-slate-300 rounded-full"
                                        variants={variants_riwayat_bar}
                                        animate={riwayatSection == 1 ? "open" : "closed"}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                                <div className="flex items-center gap-3">
                                    <MdPeopleOutline
                                        fontSize={32}
                                        className={`text-yellow-400 ${riwayatSection == 2 ? "opacity-100" : "opacity-0"} transition-all`}
                                    />
                                    <motion.div
                                        className="w-[8px] h-[32px] bg-slate-300 rounded-full"
                                        variants={variants_riwayat_bar}
                                        animate={riwayatSection == 2 ? "open" : "closed"}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                            </div>
                            <div className="relative flex justify-center items-center w-[433px] h-[433px]">
                                {/* SHAPES */}
                                <div
                                    className="absolute left-[0px] top-[50px] bg-yellow-300 w-[82px] h-[82px] rounded-3xl rotate-[25deg]"
                                    ref={box_yellow}
                                ></div>
                                <img src={riwayat_blob_svg} alt="riwayat_blob" className="absolute left-1/2 -translate-x-1/2" ref={riwayat_blob} />
                                <div
                                    className="absolute left-[24px] bottom-[24px] bg-yellow-400 w-[38px] h-[38px] rounded-full"
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
                                    className="absolute z-10 object-cover w-[300px]"
                                    ref={riwayat_organization}
                                />
                            </div>
                        </div>
                        <div className="relative max-w-[700px] h-full w-full flex items-center">
                            <AnimatePresence>
                                {riwayatSection == 0 ? (
                                    <motion.div
                                        className="flex flex-col gap-6 absolute"
                                        initial={{ opacity: 0, x: -200, scale: 0.8 }}
                                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: 200, scale: 0.8 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <h1 className="flex items-center gap-4">
                                            <MdOutlineSchool fontSize={46} className="text-yellow-400" />
                                            <span className=" font-bold text-4xl text-yellow-900">Riwayat Pendidikan</span>
                                        </h1>
                                        <ol className="list-disc ms-7 flex flex-col gap-2">
                                            <li className="font-medium text-slate-800 text-xl">SD Belakang Padang (1976)</li>
                                            <li className="font-medium text-slate-800 text-xl">SMP Belakang Padang  (1980)</li>
                                            <li className="font-medium text-slate-800 text-xl">SLTA Tanjung Pinang (1983)</li>
                                            <li className="font-medium text-slate-800 text-xl">S1 Pendidikan Elektro dari IKIP Padang (1988)</li>
                                            <li className="font-medium text-slate-800 text-xl">
                                                S2 Pendidikan Teknik dan Kejuruan dari IKIP Yogyakarta (1996)
                                            </li>
                                            <li className="font-medium text-slate-800 text-xl">
                                                S3 Pendidikan Teknikal Vokational dari UKM Malaysia  (2011)
                                            </li>
                                        </ol>
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>
                            <AnimatePresence>
                                {riwayatSection == 1 ? (
                                    <motion.div
                                        className="flex flex-col gap-6 absolute"
                                        initial={{ opacity: 0, x: -200, scale: 0.8 }}
                                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: 200, scale: 0.8 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <h1 className="flex items-center gap-4">
                                            <MdOutlineWorkOutline fontSize={46} className="text-yellow-400" />
                                            <span className=" font-bold text-4xl text-yellow-900">Riwayat Pekerjaan</span>
                                        </h1>
                                        <ol className="list-disc ms-7 flex flex-col gap-2">
                                            <li className="font-medium text-slate-800 text-xl">
                                                Dosen Pembimbing di IKIP Padang(kini Universitas Negeri Padang) sejak 1989
                                            </li>
                                            <li className="font-medium text-slate-800 text-xl">
                                                Kepala Laboratorium Komputer Fakultas Teknik (FT) IKIP Padang (1992 – 1997)
                                            </li>
                                            <li className="font-medium text-slate-800 text-xl">SLTA Tanjung Pinang (1983)</li>
                                            <li className="font-medium text-slate-800 text-xl">
                                                Sekretaris Jurusan Teknik Elektro FT UNP (1999 – 2004)
                                            </li>
                                            <li className="font-medium text-slate-800 text-xl">Pembantu Dekan II FT UNP (2004 - 2007)</li>
                                            <li className="font-medium text-slate-800 text-xl">Dekan FT UNP (2007 - 2014)</li>
                                            <li className="font-medium text-slate-800 text-xl">Rektor Universitas Negeri Padang (2012 - 2024)</li>
                                        </ol>
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>
                            <AnimatePresence>
                                {riwayatSection == 2 ? (
                                    <motion.div
                                        className="flex flex-col gap-6 absolute"
                                        initial={{ opacity: 0, x: -200, scale: 0.8 }}
                                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: 200, scale: 0.8 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <h1 className="flex items-center gap-4">
                                            <MdPeopleOutline fontSize={46} className="text-yellow-400" />
                                            <span className=" font-bold text-4xl text-yellow-900">Riwayat Organisasi</span>
                                        </h1>
                                        <ol className="list-disc ms-7 flex flex-col gap-2">
                                            <li className="font-medium text-slate-800 text-xl">
                                                Ketua III Lembaga Karate-Do Indonesia (LEMKARI) Sumatera Barat pada 2006–2010
                                            </li>
                                            <li className="font-medium text-slate-800 text-xl">
                                                Sekretaris Jenderal Ikatan Alumni FT UNP pada 2004–2009
                                            </li>
                                            <li className="font-medium text-slate-800 text-xl">
                                                Sekjen Ikatan Alumni UNP selama dua periode, 2009–2014 dan 2014–2018
                                            </li>
                                            <li className="font-medium text-slate-800 text-xl">
                                                Ketua Umum Asosiasi Pendidikan Teknologi Kejuruan Indonesia (APTEKINDO) pada 2008 sampai sekarang
                                            </li>
                                            <li className="font-medium text-slate-800 text-xl">
                                                Ketua Umum Pengprov Keluarga Olahraga Tarung Drajat (Kodrat) Sumatera Barat 2013–2017 dan 2017–2021
                                            </li>
                                            <li className="font-medium text-slate-800 text-xl">
                                                Koordinator Bidang Usaha Dewan Pimpinan Pusat (DPP) Ikatan Sarjana Pendidikan Indonesia (ISPI) masa
                                                bakti 2014–2019
                                            </li>
                                            <li className="font-medium text-slate-800 text-xl">
                                                Ketua Tanfidziyah Pengurus Wilayah Nahdlatul Ulama (PWNU) Sumatera Barat masa khidmat 2019–2024
                                            </li>
                                            <li className="font-medium text-slate-800 text-xl">
                                                Pembina Ikatan Ahli Informatika Indonesia DPW Sumatera Barat periode 2019–2022
                                            </li>
                                        </ol>
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* PENGHARGAAN */}
            <section className="relative">
                {/* SHAPES */}
                <img src={penghargaan_wave_svg} alt="wave" className="absolute top-0 left-0 -z-10" />
                <img src={penghargaan_title_filled_svg} alt="wave" className="absolute top-3 left-3 -z-20" />
                <img src={penghargaan_title_outline_svg} alt="wave" className="absolute top-3 left-3 -z-10" />
                <img
                    src={ellipse_gradient_yellow_svg}
                    alt="wave"
                    className="absolute bottom-[-255px] right-[-428px] -z-10"
                    ref={ellipse_gradient_yellow}
                />

                {/* CONTENT */}
                <div className="px-32 py-24 flex flex-col gap-16 items-center">
                    <div className="flex items-center justify-center flex-col gap-2">
                        <h2 className="text-3xl font-bold text-slate-800">Penghargaan Yang di Raih Ganefri</h2>
                        <p className="text-xl font-medium text-slate-500 max-w-[450px] text-center">
                            Sejumlah penghargaan yang berhasil di Terima oleh Ganefri
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-16">
                        <motion.div
                            className="flex flex-col items-center gap-4 group"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 } }}
                            viewport={{ once: true }}
                        >
                            <div className="w-[597px] h-[336px] rounded-3xl overflow-hidden">
                                <img
                                    src={penghargaan_1_img}
                                    alt="penghargaan"
                                    className="w-full h-full object-cover group-hover:scale-[1.2] transition-all"
                                />
                            </div>
                            <p className="font-medium text-2xl text-slate-800">Certified Lorem Ipsum Mantap, 2024</p>
                        </motion.div>
                        <motion.div
                            className="flex flex-col items-center gap-4 group"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 } }}
                            viewport={{ once: true }}
                        >
                            <div className="w-[597px] h-[336px] rounded-3xl overflow-hidden">
                                <img
                                    src={penghargaan_2_img}
                                    alt="penghargaan"
                                    className="w-full h-full object-cover group-hover:scale-[1.2] transition-all"
                                />
                            </div>
                            <p className="font-medium text-2xl text-slate-800">Certified Lorem Ipsum Mantap, 2024</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <Footer />
        </main>
    );
};

export default Profil;
