import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const RevealText = ({ children, className = "", delay = 0, bottom = 100, scroll = false, type = "chars", stagger = 0.05 }) => {
    const text = useRef();

    useEffect(() => {
        const textSplit = SplitType.create(text.current, type === 'chars' ? { types: "chars" } : type === 'words' ? { types: "words" } : null );

        if (type === "chars") {
            if (scroll) {
                gsap.fromTo(
                    textSplit.chars,
                    {
                        y: bottom,
                    },
                    {
                        scrollTrigger: {
                            trigger: textSplit.chars,
                        },
                        y: 0,
                        stagger: stagger,
                        duration: 0.5,
                        delay: delay,
                        ease: "back.inOut(1)",
                    }
                );
            } else {
                gsap.fromTo(
                    textSplit.chars,
                    {
                        y: bottom,
                    },
                    {
                        y: 0,
                        stagger: stagger,
                        duration: 0.5,
                        delay: delay,
                        ease: "back.inOut(1)",
                    }
                );
            }
        } else if (type === "words") {
            if (scroll) {
                gsap.set(textSplit.words, { whiteSpace: 'nowrap', y: 20 });
                gsap.fromTo(
                    textSplit.words,
                    {
                        y: bottom,
                        opacity: 0,
                    },
                    {
                        scrollTrigger: {
                            trigger: textSplit.words,
                        },
                        y: 0,
                        stagger: stagger,
                        duration: 1,
                        opacity: 1,
                        delay: delay,
                        ease: "power3.inOut",
                    }
                );
            } else {
                gsap.fromTo(
                    textSplit.words,
                    {
                        y: bottom,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        stagger: stagger,
                        duration: 0.5,
                        opacity: 1,
                        delay: delay,
                        ease: "power3.inOut",
                    }
                );
            }
        }
    }, []);

    return (
        <p className={`${className} pb-[3px]`} style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }} ref={text}>
            {children}
        </p>
    );
};

export default RevealText;
