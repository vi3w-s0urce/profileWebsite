import RevealText from "../Components/RevealText";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import ms_title_svg from "../../assets/svg/shapes/ms_title.svg";
import box_twin_svg from "../../assets/svg/shapes/box_twin.svg";
import line_pattern_svg from "../../assets/svg/shapes/line_pattern.svg";
import ellipse_outline_svg from "../../assets/svg/shapes/ellipse_outline_yellow.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const MediaSocialSection = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

    const box_twin = useRef();
    const line_pattern = useRef();
    const ellipse_outline = useRef();

    useEffect(() => {
        setTimeout(() => {
            gsap.to(box_twin.current, {
                scrollTrigger: {
                    trigger: box_twin.current,
                    start: "0% bottom",
                    end: "bottom 50%",
                    scrub: 1,
                },
                bottom: isMobile ? "-38px" : "-73px",
                right: isMobile ? "-31px" : "-118px",
                rotate: 20,
                duration: 1,
            });

            gsap.to(line_pattern.current, {
                scrollTrigger: {
                    trigger: line_pattern.current,
                    start: "0% bottom",
                    end: "bottom 50%",
                    scrub: 1,
                },
                left: isMobile ? "-21px" : "-38px",
                duration: 1,
            });

            gsap.to(ellipse_outline.current, {
                scrollTrigger: {
                    trigger: ellipse_outline.current,
                    start: "0% bottom",
                    end: "bottom 30%",
                    scrub: 1,
                },
                left: isMobile ? "" : "547px",
                duration: 1,
            });
        }, 100);
    }, []);

    return (
        <section className="relative">
            {/* SHAPES */}
            <img src={ms_title_svg} alt="title" className={`absolute -z-20 ${isMobile ? 'w-[184px] h-[118px] top-1 left-1' : 'top-3 left-3'}`} />
            <img src={box_twin_svg} alt="box_twin" className={`absolute ${isMobile ? 'w-[147px] h-[156px] bottom-[-100px] right-[-100px]' : 'bottom-[-100px] right-[-200px]'}`} ref={box_twin} />
            <img src={line_pattern_svg} alt="line_pattern" className={`absolute -z-10 ${isMobile ? 'w-[131px] h-[50px] bottom-[71px] left-[-100px]' : 'bottom-[77px] left-[-200px]'}`} ref={line_pattern} />
            <img src={ellipse_outline_svg} alt="ellipse" className={`absolute -z-10 ${isMobile ? 'w-[112px] h-[112px] top-[-24px] right-[12px]' : 'top-[-44px] left-[250px]'}`} ref={ellipse_outline} />

            {/* CONTENT */}
            <div className={`${isMobile ? "px-4 py-8" : "px-32 py-24"}`}>
                <div className={`w-full flex ${isMobile ? "gap-8 flex-col" : "gap-x-96 gap-y-16 justify-around flex-wrap"}`}>
                    <motion.a className={`flex items-center group ${isMobile ? "mx-auto" : "mx-6"}`} href="#">
                        <FaFacebook
                            fontSize={isMobile ? 52 : 112}
                            className={`text-slate-300 group-hover:text-yellow-400 transition-all ${isMobile ? "-mx-6 group-hover:mx-2" : "-mx-12 group-hover:mx-4"}`}
                        />
                        <div className={`flex flex-col ${isMobile ? "gap-0" : "gap-1"}`}>
                            <RevealText className={`font-bold text-yellow-900 ${isMobile ? "text-xl" : "text-4xl"}`} scroll={true}>
                                Facebook
                            </RevealText>
                            <RevealText
                                className={`font-medium text-slate-500 ${isMobile ? "text-xs" : "text-2xl"}`}
                                type="words"
                                scroll={true}
                                delay={0.2}
                            >
                                Ganefri Ganteng
                            </RevealText>
                        </div>
                    </motion.a>
                    <motion.a className={`flex items-center group ${isMobile ? "mx-auto" : "mx-6"}`} href="#">
                        <RiInstagramFill
                            fontSize={isMobile ? 52 : 112}
                            className={`text-slate-300 group-hover:text-yellow-400 transition-all ${isMobile ? "-mx-6 group-hover:mx-2" : "-mx-12 group-hover:mx-4"}`}
                        />
                        <div className={`flex flex-col ${isMobile ? "gap-0" : "gap-1"}`}>
                            <RevealText className={`font-bold text-yellow-900 ${isMobile ? "text-xl" : "text-4xl"}`} scroll={true}>
                                Instagram
                            </RevealText>
                            <RevealText
                                className={`font-medium text-slate-500 ${isMobile ? "text-xs" : "text-2xl"}`}
                                type="words"
                                scroll={true}
                                delay={0.2}
                            >
                                @itss.ganefri
                            </RevealText>
                        </div>
                    </motion.a>
                    <motion.a className={`flex items-center group ${isMobile ? "mx-auto" : "mx-6"}`} href="#">
                        <BsTwitterX
                            fontSize={isMobile ? 52 : 112}
                            className={`text-slate-300 group-hover:text-yellow-400 transition-all ${isMobile ? "-mx-6 group-hover:mx-2" : "-mx-12 group-hover:mx-4"}`}
                        />
                        <div className={`flex flex-col ${isMobile ? "gap-0" : "gap-1"}`}>
                            <RevealText className={`font-bold text-yellow-900 ${isMobile ? "text-xl" : "text-4xl"}`} scroll={true}>
                                Twitter
                            </RevealText>
                            <RevealText
                                className={`font-medium text-slate-500 ${isMobile ? "text-xs" : "text-2xl"}`}
                                type="words"
                                scroll={true}
                                delay={0.2}
                            >
                                @ganefriii
                            </RevealText>
                        </div>
                    </motion.a>
                    <motion.a className={`flex items-center group ${isMobile ? "mx-auto" : "mx-6"}`} href="#">
                        <MdEmail
                            fontSize={isMobile ? 52 : 112}
                            className={`text-slate-300 group-hover:text-yellow-400 transition-all ${isMobile ? "-mx-6 group-hover:mx-2" : "-mx-12 group-hover:mx-4"}`}
                        />
                        <div className={`flex flex-col ${isMobile ? "gap-0" : "gap-1"}`}>
                            <RevealText className={`font-bold text-yellow-900 ${isMobile ? "text-xl" : "text-4xl"}`} scroll={true}>
                                Email
                            </RevealText>
                            <RevealText
                                className={`font-medium text-slate-500 ${isMobile ? "text-xs" : "text-2xl"}`}
                                type="words"
                                scroll={true}
                                delay={0.2}
                            >
                                loremipsum@gmail.com
                            </RevealText>
                        </div>
                    </motion.a>
                    <motion.a className={`flex items-center group ${isMobile ? "mx-auto" : "mx-6"}`} href="#">
                        <FaYoutube
                            fontSize={isMobile ? 52 : 112}
                            className={`text-slate-300 group-hover:text-yellow-400 transition-all ${isMobile ? "-mx-6 group-hover:mx-2" : "-mx-12 group-hover:mx-4"}`}
                        />
                        <div className={`flex flex-col ${isMobile ? "gap-0" : "gap-1"}`}>
                            <RevealText className={`font-bold text-yellow-900 ${isMobile ? "text-xl" : "text-4xl"}`} scroll={true}>
                                Youtube
                            </RevealText>
                            <RevealText
                                className={`font-medium text-slate-500 ${isMobile ? "text-xs" : "text-2xl"}`}
                                type="words"
                                scroll={true}
                                delay={0.2}
                            >
                                Ganefri Mantab
                            </RevealText>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default MediaSocialSection;
