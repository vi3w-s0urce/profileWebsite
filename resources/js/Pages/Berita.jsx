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
import line_pattern_svg from "../../assets/svg/shapes/line_pattern.svg";
import { BsDot } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "@inertiajs/react";
import Footer from "../Layout/Footer";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Berita = () => {
    const dot_brown = useRef();
    const line_pattern = useRef();

    useEffect(() => {
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

    return (
        <main className="main overflow-hidden">
            {/* HEADER */}
            <Header />

            {/* HERO */}
            <HeroSection text="Berita & Agenda" />

            {/* MAIN CONTENT */}
            <section className="relative px-32 py-24">
                {/* SHAPES */}
                <img src={berita_title_filled} alt="berita_title" className="absolute top-3 left-3 -z-10"/>
                <img src={dot_brown_svg} alt="dot_brows" className="absolute top-[600px] right-0 -z-10" ref={dot_brown}/>
                <img src={line_pattern_svg} alt="line_pattern" className="absolute top-[1226px] left-[-200px] -z-10" ref={line_pattern}/>

                <div className="grid grid-cols-3 gap-16">
                    <motion.div
                        className="bg-white rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                        viewport={{ once: true }}
                    >
                        <div className="w-full h-[288px] overflow-hidden rounded-3xl">
                            <img src={berita_1_img} alt="berita" className="w-full h-full object-cover group-hover:scale-[1.1] transition-all" />
                        </div>
                        <div className="p-8">
                            <div className="flex gap-2 items-center mb-3">
                                <p className="font-semibold text-sm text-yellow-800">Agenda</p>
                                <BsDot fontSize={24} />
                                <div className="flex gap-2 items-center text-slate-500">
                                    <FiClock fontSize={18} />
                                    <span className="font-medium text-sm">Senin, 10 Juni 2024</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-2xl font-bold text-slate-800">Lorem ipsum dolor sit amet consectetur.</h2>
                                <p className="text-slate-800">
                                    Lorem ipsum dolor sit amet consectetur. Nunc ultrices dictum maecenas molestie varius a. Erat orci diam magna sed.
                                    Nibh eget amet etiam amet semper. Cursus arcu vulputate mauris blandit sollicitudin turpis...
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="bg-white rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                        viewport={{ once: true }}
                    >
                        <div className="w-full h-[288px] overflow-hidden rounded-3xl">
                            <img src={berita_2_img} alt="berita" className="w-full h-full object-cover group-hover:scale-[1.1] transition-all" />
                        </div>
                        <div className="p-8">
                            <div className="flex gap-2 items-center mb-3">
                                <p className="font-semibold text-sm text-yellow-800">Agenda</p>
                                <BsDot fontSize={24} />
                                <div className="flex gap-2 items-center text-slate-500">
                                    <FiClock fontSize={18} />
                                    <span className="font-medium text-sm">Senin, 10 Juni 2024</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-2xl font-bold text-slate-800">Lorem ipsum dolor sit amet consectetur.</h2>
                                <p className="text-slate-800">
                                    Lorem ipsum dolor sit amet consectetur. Nunc ultrices dictum maecenas molestie varius a. Erat orci diam magna sed.
                                    Nibh eget amet etiam amet semper. Cursus arcu vulputate mauris blandit sollicitudin turpis...
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="bg-white rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                        viewport={{ once: true }}
                    >
                        <div className="w-full h-[288px] overflow-hidden rounded-3xl">
                            <img src={berita_3_img} alt="berita" className="w-full h-full object-cover group-hover:scale-[1.1] transition-all" />
                        </div>
                        <div className="p-8">
                            <div className="flex gap-2 items-center mb-3">
                                <p className="font-semibold text-sm text-yellow-800">Agenda</p>
                                <BsDot fontSize={24} />
                                <div className="flex gap-2 items-center text-slate-500">
                                    <FiClock fontSize={18} />
                                    <span className="font-medium text-sm">Senin, 10 Juni 2024</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-2xl font-bold text-slate-800">Lorem ipsum dolor sit amet consectetur.</h2>
                                <p className="text-slate-800">
                                    Lorem ipsum dolor sit amet consectetur. Nunc ultrices dictum maecenas molestie varius a. Erat orci diam magna sed.
                                    Nibh eget amet etiam amet semper. Cursus arcu vulputate mauris blandit sollicitudin turpis...
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="bg-white rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                        viewport={{ once: true }}
                    >
                        <div className="w-full h-[288px] overflow-hidden rounded-3xl">
                            <img src={berita_4_img} alt="berita" className="w-full h-full object-cover group-hover:scale-[1.1] transition-all" />
                        </div>
                        <div className="p-8">
                            <div className="flex gap-2 items-center mb-3">
                                <p className="font-semibold text-sm text-yellow-800">Agenda</p>
                                <BsDot fontSize={24} />
                                <div className="flex gap-2 items-center text-slate-500">
                                    <FiClock fontSize={18} />
                                    <span className="font-medium text-sm">Senin, 10 Juni 2024</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-2xl font-bold text-slate-800">Lorem ipsum dolor sit amet consectetur.</h2>
                                <p className="text-slate-800">
                                    Lorem ipsum dolor sit amet consectetur. Nunc ultrices dictum maecenas molestie varius a. Erat orci diam magna sed.
                                    Nibh eget amet etiam amet semper. Cursus arcu vulputate mauris blandit sollicitudin turpis...
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="bg-white rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                        viewport={{ once: true }}
                    >
                        <div className="w-full h-[288px] overflow-hidden rounded-3xl">
                            <img src={berita_5_img} alt="berita" className="w-full h-full object-cover group-hover:scale-[1.1] transition-all" />
                        </div>
                        <div className="p-8">
                            <div className="flex gap-2 items-center mb-3">
                                <p className="font-semibold text-sm text-yellow-800">Agenda</p>
                                <BsDot fontSize={24} />
                                <div className="flex gap-2 items-center text-slate-500">
                                    <FiClock fontSize={18} />
                                    <span className="font-medium text-sm">Senin, 10 Juni 2024</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-2xl font-bold text-slate-800">Lorem ipsum dolor sit amet consectetur.</h2>
                                <p className="text-slate-800">
                                    Lorem ipsum dolor sit amet consectetur. Nunc ultrices dictum maecenas molestie varius a. Erat orci diam magna sed.
                                    Nibh eget amet etiam amet semper. Cursus arcu vulputate mauris blandit sollicitudin turpis...
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="bg-white rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                        viewport={{ once: true }}
                    >
                        <div className="w-full h-[288px] overflow-hidden rounded-3xl">
                            <img src={berita_6_img} alt="berita" className="w-full h-full object-cover group-hover:scale-[1.1] transition-all" />
                        </div>
                        <div className="p-8">
                            <div className="flex gap-2 items-center mb-3">
                                <p className="font-semibold text-sm text-yellow-800">Agenda</p>
                                <BsDot fontSize={24} />
                                <div className="flex gap-2 items-center text-slate-500">
                                    <FiClock fontSize={18} />
                                    <span className="font-medium text-sm">Senin, 10 Juni 2024</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-2xl font-bold text-slate-800">Lorem ipsum dolor sit amet consectetur.</h2>
                                <p className="text-slate-800">
                                    Lorem ipsum dolor sit amet consectetur. Nunc ultrices dictum maecenas molestie varius a. Erat orci diam magna sed.
                                    Nibh eget amet etiam amet semper. Cursus arcu vulputate mauris blandit sollicitudin turpis...
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    className="flex items-center justify-center mt-24"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                    viewport={{ once: true }}
                >
                    <div className="flex px-6 py-3 items-center justify-between bg-yellow-200 rounded-2xl min-w-[328px] gap-16">
                        <IoIosArrowBack fontSize={36} className="text-yellow-500 hover:bg-white p-1 rounded-lg transition-colors" />
                        <div className="flex items-center justify-center gap-8">
                            <Link
                                href="#"
                                className="font-medium text-xl w-8 h-8 flex items-center justify-center bg-yellow-400 text-white rounded-lg"
                            >
                                1
                            </Link>
                            <Link
                                href="#"
                                className="font-medium text-xl w-8 h-8 flex items-center justify-center text-slate-800 rounded-lg hover:bg-white hover:text-yellow-500 transition-colors"
                            >
                                2
                            </Link>
                            <Link
                                href="#"
                                className="font-medium text-xl w-8 h-8 flex items-center justify-center text-slate-800 rounded-lg hover:bg-white hover:text-yellow-500 transition-colors"
                            >
                                3
                            </Link>
                            <Link
                                href="#"
                                className="font-medium text-xl w-8 h-8 flex items-center justify-center text-slate-800 rounded-lg hover:bg-white hover:text-yellow-500 transition-colors"
                            >
                                4
                            </Link>
                            <Link
                                href="#"
                                className="font-medium text-xl w-8 h-8 flex items-center justify-center text-slate-800 rounded-lg hover:bg-white hover:text-yellow-500 transition-colors"
                            >
                                5
                            </Link>
                        </div>
                        <IoIosArrowForward fontSize={36} className="text-yellow-500 hover:bg-white p-1 rounded-lg transition-colors" />
                    </div>
                </motion.div>
            </section>

            {/* FOOTER */}
            <Footer />
        </main>
    );
};

export default Berita;
