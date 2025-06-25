import { useMediaQuery } from "react-responsive";
import HeroBackground from "../Components/HeroBackground";
import RevealText from "../Components/RevealText";

const HeroSection = ({ text = null, type = null }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
    const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

    return (
        <section className="relative">
            <HeroBackground />
            <div className="relative flex items-center justify-center px-4 h-[45vh] w-full mb-24">
                {type == "profile" ? (
                    <>
                        {!isDesktop ? (
                            <RevealText
                                className={`font-bold translate-y-[20px] text-center text-[32px] xl:text-5xl text-yellow-900 mb-5`}
                                delay={1}
                            >
                                Profil Lengkap <br /> Ganferi
                            </RevealText>
                        ) : (
                            <RevealText className={`font-bold translate-y-[20px] text-[32px] xl:text-5xl text-yellow-900 mb-5`} delay={1}>
                                Profil Lengkap Ganefri
                            </RevealText>
                        )}
                    </>
                ) : (
                    <RevealText className={`font-bold translate-y-[20px] text-[32px] xl:text-5xl text-yellow-900 mb-5`} delay={1}>
                        {text}
                    </RevealText>
                )}
            </div>
        </section>
    );
};

export default HeroSection;
