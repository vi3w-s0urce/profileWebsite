import HeroBackground from "../Components/HeroBackground";
import Header from "../Layout/Header";
import berita_1_img from "../../assets/image/berita_1.jpeg";
import berita_2_img from "../../assets/image/berita_2.jpeg";
import berita_3_img from "../../assets/image/berita_3.jpeg";
import berita_4_img from "../../assets/image/berita_4.jpeg";
import { motion } from "framer-motion";
import { BsDot } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import dot_yellow_svg from "../../assets/svg/shapes/dot_yellow.svg";
import ellipse_outline_yellow_svg from "../../assets/svg/shapes/ellipse_outline_yellow.svg";
import line_yellow_svg from "../../assets/svg/shapes/hero_line_yellow.svg";
import box_yellow_svg from "../../assets/svg/shapes/hero_rectangle.svg";
import line_pattern_svg from "../../assets/svg/shapes/line_pattern.svg";
import blob_yellow_svg from "../../assets/svg/shapes/blob_yellow_line.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import RevealText from "../Components/RevealText";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../Layout/Footer";

const ShowBerita = () => {
    const dot_yellow = useRef();
    const ellipse_outline_yellow = useRef();
    const box_yellow = useRef();
    const line_yellow = useRef();
    const line_pattern = useRef();
    const blob_yellow = useRef();
    const y_line = useRef();
    const x_line = useRef();
    const y_line_2 = useRef();
    const x_line_2 = useRef();

    useEffect(() => {
        setTimeout(() => {
            gsap.to(dot_yellow.current, {
                scrollTrigger: {
                    trigger: dot_yellow.current,
                    start: "top bottom",
                    end: "bottom 20%",
                    scrub: 1,
                },
                right: "200px",
            });

            gsap.to(ellipse_outline_yellow.current, {
                scrollTrigger: {
                    trigger: ellipse_outline_yellow.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
                top: "-=200px",
            });

            gsap.to(box_yellow.current, {
                scrollTrigger: {
                    trigger: box_yellow.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
                top: "-=300px",
                rotate: "-=180",
            });


            gsap.from(line_yellow.current, {
                scrollTrigger: {
                    trigger: line_yellow.current,
                    start: "top 80%",
                },
                width: 0,
                duration: 2,
                delay: 0.5,
                ease: "power3.out",
            });

            gsap.to(line_pattern.current, {
                scrollTrigger: {
                    trigger: line_pattern.current,
                    start: "top bottom",
                    end: "bottom 20%",
                    scrub: 1,
                },
                
            });
            
            gsap.to(blob_yellow.current, {
                scrollTrigger: {
                    trigger: blob_yellow.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
                right: "+=100px",
                rotate: "-=50",
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: y_line.current,
                    start: "top 80%",
                    end: "bottom 20%",
                },
            })
                .to(y_line.current, {
                    height: "32px",
                    duration: 0.5,
                    ease: "power3.inOut",
                })
                .to(x_line.current, {
                    width: "100%",
                    duration: 1.5,
                    ease: "power3.inOut",
                });

            gsap.timeline({
                scrollTrigger: {
                    trigger: y_line_2.current,
                    start: "top bottom",
                    end: "bottom 20%",
                },
            })
                .to(y_line_2.current, {
                    height: "32px",
                    duration: 0.5,
                    ease: "power3.inOut",
                })
                .to(x_line_2.current, {
                    width: "100%",
                    duration: 1.5,
                    ease: "power3.inOut",
                });
        }, 100);
    }, []);

    return (
        <main className="main overflow-hidden">
            {/* HEADER */}
            <Header />

            {/* MAIN CONTENT */}
            <section className="relative">
                {/* SHAPES */}
                <HeroBackground />
                <img src={dot_yellow_svg} alt="dot_yellow" className="absolute top-[720px] right-[500px] -z-10" ref={dot_yellow} />
                <img src={ellipse_outline_yellow_svg} alt="ellipse" className="absolute top-[1200px] left-[-62px] -z-10" ref={ellipse_outline_yellow} />
                <img src={box_yellow_svg} alt="box_yellow" className="absolute top-[1700px] right-[12px] -z-10" ref={box_yellow} />
                <img src={line_yellow_svg} alt="line_yellow" className="absolute bottom-8 left-1/2 -translate-x-1/2 -z-10 object-cover w-[168px] h-[23px]" ref={line_yellow} />

                <div className="relative flex flex-col w-full px-32 py-24 gap-8">
                    <div className="w-full flex flex-col gap-8 items-center justify-center">
                        <motion.div
                            className="w-[1382px] h-[777px] overflow-hidden rounded-3xl group shadow-2xl"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                            viewport={{ once: true }}
                        >
                            <img src={berita_4_img} className="w-full h-full object-cover group-hover:scale-[1.1] transition-all" alt="berita" />
                        </motion.div>
                        <div className="flex gap-2 items-center">
                            <p className="font-semibold text-lg text-yellow-800">Agenda</p>
                            <BsDot fontSize={24} />
                            <div className="flex gap-2 items-center text-slate-500">
                                <FiClock fontSize={24} />
                                <span className="font-medium text-lg">Senin, 10 Juni 2024</span>
                            </div>
                        </div>
                    </div>
                    <RevealText className="font-bold text-5xl text-slate-800 text-center" scroll={true} stagger={0.01}>
                        Lorem ipsum dolor sit amet consectetur. Potenti quis nibh et eros nec donec.
                    </RevealText>
                    <RevealText className="text-2xl" scroll={true} type="words" stagger={0.003}>
                        Lorem ipsum dolor sit amet consectetur. In feugiat hendrerit ullamcorper nibh sed. Nam posuere cras varius habitasse. Aliquam
                        massa quis adipiscing in sollicitudin. Magna sed at magna egestas consequat nunc sed. Etiam mollis et sed fermentum faucibus
                        adipiscing ultrices. Faucibus bibendum sit adipiscing et iaculis. Etiam magna tristique orci massa vitae arcu aliquam a.
                        Suspendisse magnis semper eu sit in enim sed habitant. Pulvinar pellentesque ac molestie a vel dui sapien urna.
                        <br />
                        <br />
                        In etiam lorem consectetur bibendum. Habitant ligula bibendum libero tempor sed nec pretium. Massa elementum nunc magna ipsum
                        gravida quis facilisi ultricies pretium. Eu justo scelerisque vulputate at lacinia viverra curabitur. Scelerisque elit
                        hendrerit cursus amet placerat a non in. Nulla suspendisse scelerisque rhoncus imperdiet viverra tempus non malesuada neque.
                        Ullamcorper praesent sit eu sollicitudin turpis sit. Nec nunc quam diam egestas pulvinar malesuada.
                        <br />
                        <br />
                        Nibh volutpat nunc ultrices nulla libero lectus laoreet suscipit condimentum. Ac et nascetur ut eu tellus placerat phasellus.
                        Viverra eget consequat odio proin turpis vel lectus. Ut nunc sollicitudin tellus lacus blandit ultricies. Mauris penatibus
                        netus scelerisque adipiscing nec accumsan nisi proin. Nibh massa euismod id feugiat neque. Orci semper volutpat eget at.
                        Volutpat aliquet id id ac cras euismod blandit vitae velit.
                        <br />
                        <br />A diam tristique odio congue vestibulum risus ultricies nisi. Vestibulum fermentum congue euismod congue nulla vel
                        vitae. Mauris netus at luctus a justo. Ornare varius rhoncus mi cras in enim placerat amet pharetra. Rhoncus non gravida eget
                        vitae. Luctus egestas orci habitasse sagittis.
                    </RevealText>
                </div>
            </section>

            {/* BERITA LAIN SECTION */}
            <section className="relative">
                {/* SHAPES */}
                <img src={line_pattern_svg} alt="line_pattern" className="absolute bottom-[150px] left-[-200px] -z-10" ref={line_pattern}/>
                <img src={blob_yellow_svg} alt="blob_yellow" className="absolute top-0 right-[-200px] rotate-90 -z-10" ref={blob_yellow}/>

                {/* CONTENT */}
                <div className="px-32 py-24 flex flex-col gap-16">
                    <div className="flex items-center gap-8">
                        <div>
                            <h1 className="font-bold text-3xl">Berita & Agenda Lainnya</h1>
                        </div>
                        <div className="flex items-center grow">
                            <div className="w-[5px] h-0 bg-yellow-200 rounded-2xl" ref={y_line}></div>
                            <div className="h-[5px] w-0 bg-yellow-200 rounded-se-2xl rounded-ee-2xl" ref={x_line}></div>
                        </div>
                    </div>
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
                                        Lorem ipsum dolor sit amet consectetur. Nunc ultrices dictum maecenas molestie varius a. Erat orci diam magna
                                        sed. Nibh eget amet etiam amet semper. Cursus arcu vulputate mauris blandit sollicitudin turpis...
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
                                        Lorem ipsum dolor sit amet consectetur. Nunc ultrices dictum maecenas molestie varius a. Erat orci diam magna
                                        sed. Nibh eget amet etiam amet semper. Cursus arcu vulputate mauris blandit sollicitudin turpis...
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
                                        Lorem ipsum dolor sit amet consectetur. Nunc ultrices dictum maecenas molestie varius a. Erat orci diam magna
                                        sed. Nibh eget amet etiam amet semper. Cursus arcu vulputate mauris blandit sollicitudin turpis...
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="flex items-center grow justify-end">
                            <div className="h-[5px] w-0 bg-yellow-200 rounded-ss-2xl rounded-es-2xl" ref={x_line_2}></div>
                            <div className="w-[5px] h-0 bg-yellow-200 rounded-2xl" ref={y_line_2}></div>
                        </div>
                        <div>
                            <div className="text-white bg-yellow-400 w-fit flex items-center gap-3 py-3 px-6 rounded-2xl cursor-pointer hover:bg-yellow-500 transition-colors group">
                                <span className="font-bold text-lg">Selengkapnya</span>
                                <IoIosArrowForward style={{ fontSize: "24px" }} className="group-hover:translate-x-2 transition-all" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <Footer />
        </main>
    );
};

export default ShowBerita;
