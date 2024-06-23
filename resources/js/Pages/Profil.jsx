import { useEffect, useRef } from "react";
import Header from "../Layout/Header";
import HeroSection from "../Layout/HeroSection";
import { gsap } from "gsap";
import RevealText from "../Components/RevealText";
import "swiper/css";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import foto_utama from "../../assets/svg/profil/main.svg";
import profile_ellipse_svg from "../../assets/svg/shapes/profile_ellipse.svg";
import profile_title_svg from "../../assets/svg/shapes/profile_title.svg";
import line_yellow_svg from "../../assets/svg/shapes/hero_line_yellow.svg";
import profil_1_img from "../../assets/image/profil_1.jpg";
import box_twin_svg from "../../assets/svg/shapes/box_twin.svg";
import dot_brown_svg from "../../assets/svg/shapes/dot_brown.svg";
import line_pattern_svg from "../../assets/svg/shapes/line_pattern.svg";
import { ScrollTrigger } from "gsap/all";

const Profil = () => {
    const profile_ellipse = useRef();
    const line_yellow = useRef();
    const box_twin = useRef();
    const dot_brown = useRef();
    const line_pattern = useRef();
    const container = useRef();
    const box = useRef();
    const box2 = useRef();

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

        setTimeout(() => {
            const tl1 = gsap.timeline();
            tl1.to(box.current, { bottom: "50%", duration: 1 })
            .addPause(1)
            .to(box.current, { bottom: "100%", duration: 1 });

            const tl2 = gsap.timeline();
            tl2.to(box2.current, { left: "0", duration: 1 })
            .to(box2.current, { left: "+=100", duration: 1 });

            ScrollTrigger.create({
                trigger: container.current,
                pin: true,
                scrub: 1,
                animation: tl1,
            });

            ScrollTrigger.create({
                trigger: container.current,
                scrub: 1,
                start: "top top",
                // markers: true,
                animation: tl2,
            });
        }, []);
    }, []);

    return (
        <main className="main overflow-hidden h-[5000px]">
            {/* HEADER */}
            <Header />

            {/* HERO */}
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
            <section className="relative">
                {/* SHAPES */}

                {/* CONTENT */}
                <div className="px-32 py-24 h-screen w-full bg-yellow-400" ref={container}>
                    <div className="relative bg-white w-full h-full rounded-[30px] bg-gradient-to-br from-white via-white via-30% to-yellow-200">
                        <div className="bg-yellow-800 w-8 h-8 absolute bottom-0 left-1/2 -translate-x-1/2" ref={box}></div>
                        <div className="bg-yellow-800 w-8 h-8 absolute bottom-0 left-[100px]" ref={box2}></div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Profil;
