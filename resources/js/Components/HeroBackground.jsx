import hero_wave from "../../assets/svg/hero_wave.svg";
import hero_wave_line from "../../assets/svg/hero_wave_line.svg";
import hero_wave_line_mobile from "../../assets/svg/hero_wave_line_mobile.svg";
import hero_ellipse from "../../assets/svg/shapes/hero_ellipse.svg";
import hero_ellipse_outline from "../../assets/svg/shapes/hero_ellipse_outline.svg";
import hero_dot_grid from "../../assets/svg/shapes/hero_dot_grid.svg";
import hero_line_yellow from "../../assets/svg/shapes/hero_line_yellow.svg";
import hero_line_white from "../../assets/svg/shapes/hero_line_white.svg";
import hero_blob from "../../assets/svg/shapes/hero_blob.svg";
import hero_rectangle from "../../assets/svg/shapes/hero_rectangle.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

const HeroBackground = () => {
    gsap.registerPlugin(ScrollTrigger);

    const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

    const ellipse = useRef();
    const ellipse_outline = useRef();
    const line_yellow = useRef();
    const line_white = useRef();
    const dot_grid = useRef();
    const blob = useRef();
    const rectangle = useRef();
    const wave_line = useRef();

    useEffect(() => {
        if (isDesktop) {
            setTimeout(() => {
                gsap.from(ellipse.current, {
                    top: "-500px",
                    left: "-500px",
                    duration: 1,
                    onComplete: () => {
                        gsap.to(ellipse.current, {
                            scrollTrigger: {
                                trigger: ellipse.current,
                                scrub: 1,
                                start: "bottom 43%",
                                end: "bottom top",
                            },
                            top: "+=25px",
                            left: "+=25px",
                            duration: 0.5,
                        });
                    },
                });

                gsap.from(ellipse_outline.current, {
                    height: 0,
                    width: 0,
                    duration: 0.5,
                    onComplete: () => {
                        gsap.to(ellipse_outline.current, {
                            scrollTrigger: {
                                trigger: ellipse_outline.current,
                                scrub: 1,
                                start: "bottom 25%",
                                end: "200 top",
                            },
                            top: "+=50px",
                            duration: 0.5,
                        });
                    },
                });

                gsap.from(line_yellow.current, {
                    left: -200,
                    duration: 1,
                    delay: 0.5,
                    onComplete: () => {
                        gsap.to(line_yellow.current, {
                            scrollTrigger: {
                                trigger: line_yellow.current,
                                scrub: 1,
                                start: "top 45%",
                                end: "bottom top",
                            },
                            left: "+=100px",
                            duration: 0.5,
                        });
                    },
                });

                gsap.from(dot_grid.current, {
                    top: -100,
                    duration: 1,
                    onComplete: () => {
                        gsap.to(dot_grid.current, {
                            scrollTrigger: {
                                trigger: dot_grid.current,
                                scrub: 2,
                                start: "bottom 22%",
                                end: "bottom top",
                            },
                            left: "-=50px",
                        });
                    },
                });

                gsap.from(blob.current, {
                    top: -400,
                    right: -400,
                    duration: 1.5,
                    onComplete: () => {
                        gsap.to(blob.current, {
                            scrollTrigger: {
                                trigger: blob.current,
                                scrub: 1,
                                start: "bottom 51.35%",
                                end: "bottom top",
                            },
                            top: "+=50px",
                            right: "+=20px",
                            duration: 0.5,
                        });
                    },
                });

                gsap.from(line_white.current, {
                    right: -300,
                    duration: 1,
                    onComplete: () => {
                        gsap.to(line_white.current, {
                            scrollTrigger: {
                                trigger: line_white.current,
                                scrub: 1,
                                start: "bottom 40.4%",
                                end: "bottom top",
                            },
                            right: "+=100px",
                            duration: 0.5,
                        });
                    },
                });

                gsap.from(wave_line.current, { width: 0, duration: 3, delay: 0.3 });

                gsap.from(rectangle.current, {
                    height: 0,
                    width: 0,
                    rotate: -200,
                    duration: 2,
                    onComplete: function () {
                        ScrollTrigger.create({
                            trigger: rectangle.current,
                            scrub: 1,
                            onUpdate: (self) => {
                                gsap.to(rectangle.current, { rotate: self.scroll() * 0.5, duration: 0.5 });
                            },
                        });
                    },
                });
            }, 800);
        }
    }, []);

    return (
        <div className="absolute w-screen -z-20">
            <div className="relative">
                <div className="w-full bg-yellow-200 h-[45vh]"></div>
                <div id="shape">
                    <img
                        src={hero_rectangle}
                        className="absolute top-[205px] right-[61px] w-[32px] h-[32px] xl:top-[324px] xl:right-[398px] xl:w-[68px] xl:h-[68px]"
                        ref={rectangle}
                    ></img>
                    <img
                        src={hero_line_white}
                        className="absolute w-[90px] h-auto top-[146px] right-[20px] xl:top-[221px] xl:right-[300px] xl:w-auto xl:h-auto"
                        ref={line_white}
                    ></img>
                    <img
                        src={hero_blob}
                        className="absolute w-[199px] h-[199px] top-[-44px] right-[-90px] xl:top-[-84px] xl:right-[-150px] xl:w-auto xl:h-auto"
                        ref={blob}
                    ></img>
                    <img
                        src={hero_line_yellow}
                        className="absolute w-[90px] h-auto top-[228px] left-[14px] xl:top-[289px] xl:left-[289px] xl:w-auto xl:h-auto"
                        ref={line_yellow}
                    ></img>
                    <img
                        src={hero_dot_grid}
                        className="absolute w-[75px] h-[97px] object-cover top-[-63px] left-[151px] xl:top-[-22px] xl:left-[557px] xl:w-auto xl:h-auto"
                        ref={dot_grid}
                    ></img>
                    <img
                        src={hero_ellipse_outline}
                        className="absolute w-[24px] h-[24px] top-[89px] left-[120px] xl:w-auto xl:h-auto xl:top-[52px] xl:left-[337px]"
                        ref={ellipse_outline}
                    ></img>
                    <img
                        src={hero_ellipse}
                        className="absolute w-[240px] h-[240px] top-[-145px] left-[-139px] xl:top-[-150px] xl:left-[-188px] xl:w-auto xl:h-auto"
                        ref={ellipse}
                    ></img>
                </div>
                <div id="wave">
                    <img src={hero_wave} className="absolute -z-10 w-full h-[81px] bottom-[-46px] xl:h-[121px] xl:bottom-[-82px]"></img>
                    {!isDesktop ? (
                        <img
                            src={hero_wave_line_mobile}
                            className="absolute bottom-[-46px] w-full h-[100px] sm:h-[200px] overflow-hidden left-0 object-cover object-left"
                            ref={wave_line}
                        ></img>
                    ) : (
                        <img
                            src={hero_wave_line}
                            className="absolute bottom-[-102px] w-full h-[173px] overflow-hidden left-0 object-cover object-left"
                            ref={wave_line}
                        ></img>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeroBackground;
