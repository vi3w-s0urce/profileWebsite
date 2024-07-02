import { useMediaQuery } from "react-responsive";
import HeroBackground from "../Components/HeroBackground";
import RevealText from "../Components/RevealText";

const HeroSection = ({ text = null, type = null }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

    return (
        <section className="relative">
            <HeroBackground />
            <div className="relative flex items-center justify-center px-4 h-[45vh] w-full mb-24">
                {type == "profile" ? (
                    <>
                        {isMobile ? (
                            <RevealText
                                className={`font-bold translate-y-[20px] text-center ${!isMobile ? "text-5xl" : null} text-yellow-900 mb-5`}
                                style={isMobile ? { fontSize: 32 } : null}
                                delay={0.5}
                            >
                                Profile Lengkap <br /> Ganferi
                            </RevealText>
                        ) : (
                            <RevealText
                                className={`font-bold translate-y-[20px] ${!isMobile ? "text-5xl" : null} text-yellow-900 mb-5`}
                                style={isMobile ? { fontSize: 32 } : null}
                                delay={0.5}
                            >
                                Profile Lengkap Ganefri
                            </RevealText>
                        )}
                    </>
                ) : (
                    <RevealText
                        className={`font-bold translate-y-[20px] ${!isMobile ? "text-5xl" : null} text-yellow-900 mb-5`}
                        style={isMobile ? { fontSize: 32 } : null}
                        delay={0.5}
                    >
                        {text}
                    </RevealText>
                )}
            </div>
        </section>
    );
};

export default HeroSection;
