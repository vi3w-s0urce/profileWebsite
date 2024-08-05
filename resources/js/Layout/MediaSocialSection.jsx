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
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { router } from "@inertiajs/react";
import axios from "axios";

const MediaSocialSection = ({ ms_db }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
    const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

    const box_twin = useRef();
    const line_pattern = useRef();
    const ellipse_outline = useRef();

    useEffect(() => {
        if (isDesktop) {
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
                    left: "+=100px",
                    duration: 1,
                });
            }, 100);
        }
    }, []);

    return (
        <section className="relative">
            {/* SHAPES */}
            <img src={ms_title_svg} alt="title" className="absolute -z-20 w-[184px] h-[118px] top-1 left-1 xl:top-3 xl:left-3 xl:w-auto xl:h-auto" />
            <img
                src={box_twin_svg}
                alt="box_twin"
                className="absolute w-[147px] h-[156px] bottom-[-20px] right-[-50px] xl:bottom-[-100px] xl:right-[-200px] xl:w-auto xl:h-auto"
                ref={box_twin}
            />
            <img
                src={line_pattern_svg}
                alt="line_pattern"
                className="absolute -z-10 w-[131px] h-[50px] bottom-[71px] left-[-50px] xl:bottom-[77px] xl:left-[-200px] xl:w-auto xl:h-auto"
                ref={line_pattern}
            />
            <img
                src={ellipse_outline_svg}
                alt="ellipse"
                className="absolute -z-10 w-[82px] h-[82px] top-[52px] left-[12px] xl:top-[-44px] xl:left-[250px] xl:w-auto xl:h-auto"
                ref={ellipse_outline}
            />

            {/* CONTENT */}
            <div className="px-4 py-8 xl:px-32 xl:py-24">
                <div className="w-full flex gap-8 flex-col xl:gap-x-72 xl:gap-y-16 xl:justify-around xl:flex-wrap xl:flex-row">
                    <motion.a className={`flex items-center group mx-auto xl:mx-6 ${!ms_db[0].isVisible ? "hidden" : "flex"}`} href={ms_db[0].link}>
                        <FaFacebook className="text-slate-300 group-hover:text-yellow-400 transition-all -mx-6 group-hover:mx-2 text-[52px] xl:text-[112px] xl:-mx-12 xl:group-hover:mx-4" />
                        <div className="flex flex-col gap-0 xl:gap-1">
                            <RevealText className="font-bold text-yellow-900 text-xl xl:text-4xl" scroll={true}>
                                Facebook
                            </RevealText>
                            <RevealText className="font-medium text-slate-500 text-xs xl:text-2xl" type="words" scroll={true} delay={0.2}>
                                {ms_db[0].nama}
                            </RevealText>
                        </div>
                    </motion.a>
                    <motion.a className={`flex items-center group mx-auto xl:mx-6" ${!ms_db[1].isVisible ? "hidden" : "flex"}`} href={ms_db[1].link}>
                        <RiInstagramFill className="text-slate-300 group-hover:text-yellow-400 transition-all -mx-6 group-hover:mx-2 text-[52px] xl:text-[112px] xl:-mx-12 xl:group-hover:mx-4" />
                        <div className="flex flex-col gap-0 xl:gap-1">
                            <RevealText className="font-bold text-yellow-900 text-xl xl:text-4xl" scroll={true}>
                                Instagram
                            </RevealText>
                            <RevealText className="font-medium text-slate-500 text-xs xl:text-2xl" type="words" scroll={true} delay={0.2}>
                                {ms_db[1].nama}
                            </RevealText>
                        </div>
                    </motion.a>
                    <motion.a className={`flex items-center group mx-auto xl:mx-6" ${!ms_db[2].isVisible ? "hidden" : "flex"}`} href={ms_db[2].link}>
                        <BsTwitterX className="text-slate-300 group-hover:text-yellow-400 transition-all -mx-6 group-hover:mx-2 text-[52px] xl:text-[112px] xl:-mx-12 xl:group-hover:mx-4" />
                        <div className="flex flex-col gap-0 xl:gap-1">
                            <RevealText className="font-bold text-yellow-900 text-xl xl:text-4xl" scroll={true}>
                                Twitter
                            </RevealText>
                            <RevealText className="font-medium text-slate-500 text-xs xl:text-2xl" type="words" scroll={true} delay={0.2}>
                                {ms_db[2].nama}
                            </RevealText>
                        </div>
                    </motion.a>
                    <motion.a
                        className={`flex items-center group mx-auto xl:mx-6" ${!ms_db[3].isVisible ? "hidden" : "flex"}`}
                        href={"mailto:" + ms_db[3].email}
                    >
                        <MdEmail className="text-slate-300 group-hover:text-yellow-400 transition-all -mx-6 group-hover:mx-2 text-[52px] xl:text-[112px] xl:-mx-12 xl:group-hover:mx-4" />
                        <div className="flex flex-col gap-0 xl:gap-1">
                            <RevealText className="font-bold text-yellow-900 text-xl xl:text-4xl" scroll={true}>
                                Email
                            </RevealText>
                            <RevealText className="font-medium text-slate-500 text-xs xl:text-2xl" type="words" scroll={true} delay={0.2}>
                                {ms_db[3].email}
                            </RevealText>
                        </div>
                    </motion.a>
                    <motion.a className={`flex items-center group mx-auto xl:mx-6" ${!ms_db[4].isVisible ? "hidden" : "flex"}`} href={ms_db[4].link}>
                        <FaYoutube className="text-slate-300 group-hover:text-yellow-400 transition-all -mx-6 group-hover:mx-2 text-[52px] xl:text-[112px] xl:-mx-12 xl:group-hover:mx-4" />
                        <div className="flex flex-col gap-0 xl:gap-1">
                            <RevealText className="font-bold text-yellow-900 text-xl xl:text-4xl" scroll={true}>
                                Youtube
                            </RevealText>
                            <RevealText className="font-medium text-slate-500 text-xs xl:text-2xl" type="words" scroll={true} delay={0.2}>
                                {ms_db[4].nama}
                            </RevealText>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default MediaSocialSection;
