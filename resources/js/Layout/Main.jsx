import Header from "./Header";
import Footer from "./Footer";
import BackToTopButton from "../Components/BackToTopButton";
import { useEffect, useState } from "react";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import { Inertia } from "@inertiajs/inertia";
import { router } from "@inertiajs/react";

const Main = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        // Handle initial load
        const handleInitialLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        };

        if (isInitialLoad) {
            window.addEventListener("load", handleInitialLoad);
            setIsInitialLoad(false);
        } else {
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        }

        return () => {
            window.removeEventListener("load", handleInitialLoad);
        };
    }, [isInitialLoad]);

    // router.on("start", () => {
    //     setIsLoading(true);
    //     gsap.fromTo("#loading_screen", { height: 0, duration: 0.5 }, { height: "100vh" });
    // });

    return (
        <main className="main overflow-hidden">
            <AnimatePresence>
                {isLoading && (
                    <div className="fixed top-0 left-0 w-screen h-screen z-[99] flex justify-center items-center">
                        <motion.div
                            className="bg-yellow-400 w-screen h-screen z-[99] flex flex-col items-center justify-center gap-5 overflow-hidden rounded-full"
                            initial={{ height: 0, width: 0 }}
                            animate={{ height: 5000, width: 5000, transitionTimingFunction: easeOut }}
                            exit={{ height: 0, width: 0 }}
                            transition={{ duration: 0.8 }}
                            id="loading_screen"
                        >
                            <div className="flex gap-4">
                                <div className="bg-white w-[12px] h-[12px] rounded-full dot-loading"></div>
                                <div className="bg-white w-[12px] h-[12px] rounded-full dot-loading"></div>
                                <div className="bg-white w-[12px] h-[12px] rounded-full dot-loading"></div>
                            </div>
                            <h1 className="text-xl font-bold text-white">Loading</h1>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* HEADER */}
            <Header />

            {children}

            {/* FOOTER */}
            <Footer />

            {/* BACK TO TOP BUTTON */}
            <BackToTopButton />
        </main>
    );
};

export default Main;
