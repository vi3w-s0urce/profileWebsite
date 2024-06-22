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

const MediaSocialSection = () => {
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
                bottom: "-73px",
                right: "-118px",
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
                left: "-38px",
                duration: 1,
            });

            gsap.to(ellipse_outline.current, {
                scrollTrigger: {
                    trigger: ellipse_outline.current,
                    start: "0% bottom",
                    end: "bottom 30%",
                    scrub: 1,
                },
                left: "547px",
                duration: 1,
            });
        }, 100);
    }, []);

    return (
        <section className="relative">
            {/* SHAPES */}
            <img src={ms_title_svg} alt="title" className="absolute top-3 left-3 -z-20" />
            <img src={box_twin_svg} alt="box_twin" className="absolute bottom-[-100px] right-[-200px]" ref={box_twin} />
            <img src={line_pattern_svg} alt="line_pattern" className="absolute bottom-[77px] left-[-200px] -z-10" ref={line_pattern} />
            <img src={ellipse_outline_svg} alt="ellipse" className="absolute top-[-44px] left-[250px] -z-10" ref={ellipse_outline} />

            {/* CONTENT */}
            <div className="px-32 py-24">
                <div className="w-full flex justify-around flex-wrap gap-x-96 gap-y-16">
                    <motion.a className="flex items-center group" href="#">
                        <FaFacebook fontSize={112} className="text-slate-300 group-hover:text-yellow-400 -mx-12 group-hover:mx-4 transition-all" />
                        <div className="flex flex-col gap-1">
                            <RevealText className="text-4xl font-bold text-yellow-900" scroll={true}>
                                Facebook
                            </RevealText>
                            <RevealText className="text-2xl font-medium text-slate-500" type="words" scroll={true} delay={0.2}>
                                Ganefri Ganteng
                            </RevealText>
                        </div>
                    </motion.a>
                    <motion.a className="flex items-center group" href="#">
                        <RiInstagramFill
                            fontSize={112}
                            className="text-slate-300 group-hover:text-yellow-400 -mx-12 group-hover:mx-4 transition-all"
                        />
                        <div className="flex flex-col gap-1">
                            <RevealText className="text-4xl font-bold text-yellow-900" scroll={true}>
                                Instagram
                            </RevealText>
                            <RevealText className="text-2xl font-medium text-slate-500" type="words" scroll={true} delay={0.2}>
                                @itss.ganefri
                            </RevealText>
                        </div>
                    </motion.a>
                    <motion.a className="flex items-center group" href="#">
                        <BsTwitterX fontSize={112} className="text-slate-300 group-hover:text-yellow-400 -mx-12 group-hover:mx-4 transition-all" />
                        <div className="flex flex-col gap-1">
                            <RevealText className="text-4xl font-bold text-yellow-900" scroll={true}>
                                Twitter
                            </RevealText>
                            <RevealText className="text-2xl font-medium text-slate-500" type="words" scroll={true} delay={0.2}>
                                @ganefriii
                            </RevealText>
                        </div>
                    </motion.a>
                    <motion.a className="flex items-center group" href="#">
                        <MdEmail fontSize={112} className="text-slate-300 group-hover:text-yellow-400 -mx-12 group-hover:mx-4 transition-all" />
                        <div className="flex flex-col gap-1">
                            <RevealText className="text-4xl font-bold text-yellow-900" scroll={true}>
                                Email
                            </RevealText>
                            <RevealText className="text-2xl font-medium text-slate-500" type="words" scroll={true} delay={0.2}>
                                loremipsum@gmail.com
                            </RevealText>
                        </div>
                    </motion.a>
                    <motion.a className="flex items-center group" href="#">
                        <FaYoutube fontSize={112} className="text-slate-300 group-hover:text-yellow-400 -mx-12 group-hover:mx-4 transition-all" />
                        <div className="flex flex-col gap-1">
                            <RevealText className="text-4xl font-bold text-yellow-900" scroll={true}>
                                Youtube
                            </RevealText>
                            <RevealText className="text-2xl font-medium text-slate-500" type="words" scroll={true} delay={0.2}>
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
