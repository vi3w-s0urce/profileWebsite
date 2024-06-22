import HeroBackground from "../Components/HeroBackground";
import RevealText from "../Components/RevealText";

const HeroSection = ({text = null}) => {
    return (
        <section className="relative">
            <HeroBackground />
            <div className="relative flex items-center justify-center h-[480px] mb-10">
                <RevealText className="font-bold text-5xl text-yellow-900 mb-5" delay={0.5}>{text}</RevealText>
            </div>
        </section>
    );
};

export default HeroSection;
