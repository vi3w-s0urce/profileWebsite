import hero_wave from "../../assets/svg/hero_wave.svg";
import hero_wave_line from "../../assets/svg/hero_wave_line.svg";
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

const HeroBackground = () => {
    gsap.registerPlugin(ScrollTrigger);

    const ellipse = useRef();
    const ellipse_outline = useRef();
    const line_yellow = useRef();
    const line_white = useRef();
    const dot_grid = useRef();
    const blob = useRef();
    const rectangle = useRef();
    const wave_line = useRef();

    useEffect(() => {
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

        gsap.from(wave_line.current, { width: 0, duration: 3 });

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
    }, []);

    return (
        <div className="absolute w-screen -z-20">
            <div className="relative">
                <div className="w-full bg-yellow-200 h-[45vh]"></div>
                <div id="shape">
                    <img src={hero_rectangle} className="absolute top-[324px] right-[398px] w-[68px] h-[68px]" ref={rectangle}></img>
                    <img src={hero_line_white} className="absolute top-[221px] right-[300px]" ref={line_white}></img>
                    <img src={hero_blob} className="absolute top-[-84px] right-[-150px]" ref={blob}></img>
                    <img src={hero_line_yellow} className="absolute top-[289px] left-[289px]" ref={line_yellow}></img>
                    <img src={hero_dot_grid} className="absolute top-[-22px] left-[557px]" ref={dot_grid}></img>
                    <img src={hero_ellipse_outline} className="absolute top-[52px] left-[337px] w-[61px] h-[61px]" ref={ellipse_outline}></img>
                    <img src={hero_ellipse} className="absolute top-[-150px] left-[-188px]" ref={ellipse}></img>
                </div>
                <div id="wave">
                    <img src={hero_wave} className="absolute -z-10 bottom-[-82px] w-full h-[121px]"></img>
                    <img
                        src={hero_wave_line}
                        className="absolute bottom-[-102px] w-full h-[173px] overflow-hidden left-0 object-cover object-left"
                        ref={wave_line}
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default HeroBackground;
