import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

const BackToTopButton = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

    const [isVisible, setIsVisible] = useState(false);

    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 300 && currentScrollY < lastScrollY) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

        setLastScrollY(currentScrollY);
    };

    const toggleVisibility = () => {
        if (window.scrollY > isMobile ? 100 : 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    onClick={scrollToTop}
                    className={`fixed border-2 border-yellow-400 bg-white p-2 rounded-full group hover:bg-yellow-400 z-50 shadow-xl transition-colors ${
                        isMobile ? "bottom-8 right-8" : "bottom-12 right-12"
                    }`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <IoIosArrowUp className="text-3xl text-yellow-400 group-hover:text-white" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BackToTopButton;
