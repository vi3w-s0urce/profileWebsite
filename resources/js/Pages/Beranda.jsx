import HeroBackground from "../Components/HeroBackground";
import Header from "../Layout/Header";
import useRevealText from "../hooks/useRevealText";

const Beranda = () => {
    const { parentRef, childRef, size } = useRevealText();

    return (
        <div className="h-[1920px] overflow-x-hidden">
            <Header />

            {/* HERO */}
            <div className="relative">
                <HeroBackground />
                <div className="absolute flex flex-col w-full top-0 left-0 px-32 py-24 gap-16">
                    <div className="flex flex-col gap-2 items-center">
                        <p className="text-2xl font-semibold text-slate-400">Selamat datang di website resmi</p>
                        <h1 className="text-5xl font-bold text-yellow-900 absolute top-0 left-0 whitespace-nowrap" ref={childRef}>
                            Prof. Drs. H. Ganefri, M.Pd., Ph.D
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Beranda;
