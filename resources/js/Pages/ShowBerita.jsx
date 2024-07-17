import HeroBackground from "../Components/HeroBackground";
import Header from "../Layout/Header";
import berita_1_img from "../../assets/image/berita_1.jpeg";
import berita_2_img from "../../assets/image/berita_2.jpeg";
import berita_3_img from "../../assets/image/berita_3.jpeg";
import berita_4_img from "../../assets/image/berita_4.jpeg";
import { motion } from "framer-motion";
import { BsDot } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import dot_yellow_svg from "../../assets/svg/shapes/dot_yellow.svg";
import ellipse_outline_yellow_svg from "../../assets/svg/shapes/ellipse_outline_yellow.svg";
import line_yellow_svg from "../../assets/svg/shapes/hero_line_yellow.svg";
import box_yellow_svg from "../../assets/svg/shapes/hero_rectangle.svg";
import line_pattern_svg from "../../assets/svg/shapes/line_pattern.svg";
import blob_yellow_svg from "../../assets/svg/shapes/blob_yellow_line.svg";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import RevealText from "../Components/RevealText";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../Layout/Footer";
import { Head, Link as InertiaLink } from "@inertiajs/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import BackToTopButton from "../Components/BackToTopButton";
import { html } from "@yoopta/exports";
import { useMemo } from "react";
import YooptaEditor, { createYooptaEditor } from "@yoopta/editor";
import Paragraph from "@yoopta/paragraph";
import { HeadingOne, HeadingTwo, HeadingThree } from "@yoopta/headings";
import { NumberedList, BulletedList } from "@yoopta/lists";
import { Bold, Italic, CodeMark, Underline, Strike, Highlight } from "@yoopta/marks";
import Link from "@yoopta/link";
import ActionMenuList, { DefaultActionMenuRender } from "@yoopta/action-menu-list";
import Toolbar, { DefaultToolbarRender } from "@yoopta/toolbar";
import LinkTool, { DefaultLinkToolRender } from "@yoopta/link-tool";
import route from "ziggy-js";
import ReactGA from "react-ga4";


const ShowBerita = ({ berita, beritaLainnya }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

    const dot_yellow = useRef();
    const ellipse_outline_yellow = useRef();
    const box_yellow = useRef();
    const line_yellow = useRef();
    const line_pattern = useRef();
    const blob_yellow = useRef();
    const y_line = useRef();
    const x_line = useRef();
    const y_line_2 = useRef();
    const x_line_2 = useRef();

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: berita.judul });

        window.scrollTo({ top: 0, left: 0, behavior: "instant" });

        setTimeout(() => {
            gsap.to(dot_yellow.current, {
                scrollTrigger: {
                    trigger: dot_yellow.current,
                    start: "top bottom",
                    end: "bottom 20%",
                    scrub: 1,
                },
                right: "200px",
            });

            gsap.to(ellipse_outline_yellow.current, {
                scrollTrigger: {
                    trigger: ellipse_outline_yellow.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
                top: "-=200px",
            });

            gsap.to(box_yellow.current, {
                scrollTrigger: {
                    trigger: box_yellow.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
                top: "-=300px",
                rotate: "-=180",
            });

            gsap.from(line_yellow.current, {
                scrollTrigger: {
                    trigger: line_yellow.current,
                    start: "top 80%",
                },
                width: 0,
                duration: 5,
                delay: 0.2,
                ease: "power2.out",
            });

            gsap.to(line_pattern.current, {
                scrollTrigger: {
                    trigger: line_pattern.current,
                    start: "top bottom",
                    end: "bottom 20%",
                    scrub: 1,
                },
            });

            gsap.to(blob_yellow.current, {
                scrollTrigger: {
                    trigger: blob_yellow.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
                right: "+=100px",
                rotate: "-=50",
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: y_line.current,
                    start: "top 80%",
                    end: "bottom 20%",
                },
            })
                .to(y_line.current, {
                    height: "32px",
                    duration: 0.5,
                    ease: "power3.inOut",
                })
                .to(x_line.current, {
                    width: "100%",
                    duration: 1.5,
                    ease: "power3.inOut",
                });

            gsap.timeline({
                scrollTrigger: {
                    trigger: y_line_2.current,
                    start: "top bottom",
                    end: "bottom 20%",
                },
            })
                .to(y_line_2.current, {
                    height: "32px",
                    duration: 0.5,
                    ease: "power3.inOut",
                })
                .to(x_line_2.current, {
                    width: "100%",
                    duration: 1.5,
                    ease: "power3.inOut",
                });
        }, 100);
    }, []);

    const [beritaContent, setBeritaContent] = useState(JSON.parse(berita.content));

    const editor = useMemo(() => createYooptaEditor(), []);
    const plugins = [Paragraph, HeadingOne, HeadingTwo, HeadingThree, NumberedList, BulletedList, Link];
    const MARKS = [Bold, Italic, CodeMark, Underline, Strike, Highlight];
    const TOOLS = {
        ActionMenu: {
            render: DefaultActionMenuRender,
            tool: ActionMenuList,
        },
        Toolbar: {
            render: DefaultToolbarRender,
            tool: Toolbar,
        },
        LinkTool: {
            render: DefaultLinkToolRender,
            tool: LinkTool,
        },
    };

    const convertContent = (content) => {
        const json = JSON.parse(content);

        let plainText = "";

        Object.values(json)[0].value[0].children[0].text;

        Object.values(json).forEach((element) => {
            plainText += element.value[0].children[0].text + " ";
        });

        return plainText.length > 180 ? plainText.substring(0, 180) + "..." : plainText;
    };

    return (
        <main className="main overflow-hidden">
            {/* TITLE */}
            <Head>
                <title>{berita.judul}</title>
            </Head>

            {/* HEADER */}
            <Header />

            {/* MAIN CONTENT */}
            <section className="relative">
                {/* SHAPES */}
                <HeroBackground />
                {!isMobile && <img src={dot_yellow_svg} alt="dot_yellow" className="absolute top-[720px] right-[500px] -z-10" ref={dot_yellow} />}
                <img
                    src={ellipse_outline_yellow_svg}
                    alt="ellipse"
                    className={`absolute -z-10 ${isMobile ? "top-[800px] left-[-62px]" : "top-[1200px] left-[-62px]"}`}
                    ref={ellipse_outline_yellow}
                />
                <img
                    src={box_yellow_svg}
                    alt="box_yellow"
                    className={`absolute -z-10 ${isMobile ? "top-[1500px] right-[-30px]" : "top-[1700px] right-[12px] "}`}
                    ref={box_yellow}
                />
                <img
                    src={line_yellow_svg}
                    alt="line_yellow"
                    className={`absolute left-1/2 -translate-x-1/2 -z-10 object-cover ${
                        isMobile ? "bottom-[-26px] w-[168px] h-[23px]" : "bottom-8 w-[168px] h-[23px]"
                    }`}
                    ref={line_yellow}
                />

                <div className={`relative flex flex-col w-full ${isMobile ? "px-4 py-8 gap-3" : "px-32 py-24 gap-8"}`}>
                    <div className={`w-full flex flex-col items-center justify-center ${isMobile ? "gap-3" : "gap-8"}`}>
                        <motion.div
                            className={`overflow-hidden rounded-3xl group shadow-2xl ${
                                isMobile ? "w-full h-[184px]" : "max-w-[1382px] w-full h-[777px]"
                            }`}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={"/storage/beritaImages/" + berita.path_gambar}
                                className="w-full h-full object-cover group-hover:scale-[1.1] transition-all"
                                alt="berita"
                            />
                        </motion.div>
                        <div className={`flex items-center mb-3 ${isMobile ? "gap-1" : "gap-2"}`}>
                            <p className={`font-semibold text-yellow-800 ${isMobile ? "text-xs" : "text-sm"}`}>{berita.kategori}</p>
                            <BsDot fontSize={24} />
                            <div className="flex gap-2 items-center text-slate-500">
                                <FiClock fontSize={18} />
                                <span className={`font-medium ${isMobile ? "text-xs" : "text-sm"}`}>
                                    {new Date(berita.tanggal).toLocaleDateString("id-ID", {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full flex flex-col ${isMobile ? 'bg-white p-3 rounded-xl bg-opacity-50 gap-4' : 'gap-12'}`}>
                        <RevealText
                            className={`font-bold text-slate-800 text-center ${isMobile ? "text-2xl" : "text-5xl"}`}
                            scroll={true}
                            type="words"
                            stagger={0.05}
                        >
                            {berita.judul}
                        </RevealText>
                        <YooptaEditor
                            editor={editor}
                            plugins={plugins}
                            marks={MARKS}
                            tools={TOOLS}
                            value={beritaContent}
                            readOnly
                            className="w-full"
                        />
                    </div>
                </div>
            </section>

            {/* BERITA LAIN SECTION */}
            <section className={`relative ${isMobile && "mt-12"}`}>
                {/* SHAPES */}
                {!isMobile && (
                    <>
                        <img src={line_pattern_svg} alt="line_pattern" className="absolute bottom-[150px] left-[-200px] -z-10" ref={line_pattern} />
                        <img src={blob_yellow_svg} alt="blob_yellow" className="absolute top-0 right-[-200px] rotate-90 -z-10" ref={blob_yellow} />
                    </>
                )}

                {/* CONTENT */}
                <div className={`flex flex-col ${isMobile ? "py-8 px-4 gap-8" : "px-32 py-24 gap-16"}`}>
                    <div className={`flex items-center ${isMobile ? "gap-4" : "gap-8"}`}>
                        <div>
                            <h1 className={`font-bold ${isMobile ? "text-base" : "text-3xl"}`}>Berita & Agenda Lainnya</h1>
                        </div>
                        <div className="flex items-center grow">
                            <div className="w-[5px] h-0 bg-yellow-200 rounded-2xl" ref={y_line}></div>
                            <div className="h-[5px] w-0 bg-yellow-200 rounded-se-2xl rounded-ee-2xl" ref={x_line}></div>
                        </div>
                    </div>
                    {isMobile ? (
                        <div>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                modules={[Autoplay]}
                                autoplay={{ delay: 5000 }}
                                className="h-fit w-full rounded-3xl"
                            >
                                {beritaLainnya.map((item, index) => (
                                    <SwiperSlide>
                                        <InertiaLink href={route("BeritaRead", { slug: item.slug })} key={item._id}>
                                            <motion.div
                                                className="bg-white rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
                                                initial={{ y: 100, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                                                viewport={{ once: true }}
                                            >
                                                <div className={`w-full overflow-hidden rounded-3xl ${isMobile ? "h-[184px]" : "h-[288px]"}`}>
                                                    <img
                                                        src={"/storage/beritaImages/" + item.path_gambar}
                                                        alt="berita"
                                                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all"
                                                    />
                                                </div>
                                                <div className={`${isMobile ? "p-6" : "p-8"}`}>
                                                    <div className={`flex items-center mb-3 ${isMobile ? "gap-1" : "gap-2"}`}>
                                                        <p className={`font-semibold text-yellow-800 ${isMobile ? "text-xs" : "text-sm"}`}>
                                                            {item.kategori}
                                                        </p>
                                                        <BsDot fontSize={24} />
                                                        <div className="flex gap-2 items-center text-slate-500">
                                                            <FiClock fontSize={18} />
                                                            <span className={`font-medium ${isMobile ? "text-xs" : "text-sm"}`}>
                                                                {new Date(item.tanggal).toLocaleDateString("id-ID", {
                                                                    weekday: "long",
                                                                    year: "numeric",
                                                                    month: "long",
                                                                    day: "numeric",
                                                                })}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-3 mb-4">
                                                        <h2 className={`font-bold text-slate-800 ${isMobile ? "text-xl" : "text-2xl"}`}>
                                                            {item.judul}
                                                        </h2>
                                                        <p className={`text-slate-800 ${isMobile && "text-sm"}`}>{convertContent(item.content)}</p>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className={`text-yellow-500 font-semibold flex items-center gap-2 ${
                                                            isMobile ? "text-base" : "text-lg"
                                                        }`}
                                                    >
                                                        Baca Selengkapnya <IoIosArrowForward className="group-hover:translate-x-2 transition-all" />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        </InertiaLink>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 gap-16">
                            {beritaLainnya.map((item, index) => (
                                <InertiaLink href={route("BeritaRead", { slug: item.slug })} key={item._id}>
                                    <motion.div
                                        className="bg-white rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                                        viewport={{ once: true }}
                                    >
                                        <div className={`w-full overflow-hidden rounded-3xl ${isMobile ? "h-[184px]" : "h-[288px]"}`}>
                                            <img
                                                src={"/storage/beritaImages/" + item.path_gambar}
                                                alt="berita"
                                                className="w-full h-full object-cover group-hover:scale-[1.1] transition-all"
                                            />
                                        </div>
                                        <div className={`${isMobile ? "p-6" : "p-8"}`}>
                                            <div className={`flex items-center mb-3 ${isMobile ? "gap-1" : "gap-2"}`}>
                                                <p className={`font-semibold text-yellow-800 ${isMobile ? "text-xs" : "text-sm"}`}>{item.kategori}</p>
                                                <BsDot fontSize={24} />
                                                <div className="flex gap-2 items-center text-slate-500">
                                                    <FiClock fontSize={18} />
                                                    <span className={`font-medium ${isMobile ? "text-xs" : "text-sm"}`}>
                                                        {new Date(item.tanggal).toLocaleDateString("id-ID", {
                                                            weekday: "long",
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric",
                                                        })}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3 mb-4">
                                                <h2 className={`font-bold text-slate-800 ${isMobile ? "text-xl" : "text-2xl"}`}>{item.judul}</h2>
                                                <p className={`text-slate-800 ${isMobile && "text-sm"}`}>{convertContent(item.content)}</p>
                                            </div>
                                            <button
                                                type="button"
                                                className={`text-yellow-500 font-semibold flex items-center gap-2 ${
                                                    isMobile ? "text-base" : "text-lg"
                                                }`}
                                            >
                                                Baca Selengkapnya <IoIosArrowForward className="group-hover:translate-x-2 transition-all" />
                                            </button>
                                        </div>
                                    </motion.div>
                                </InertiaLink>
                            ))}
                        </div>
                    )}
                    <div className="flex items-center gap-8">
                        <div className="flex items-center grow justify-end">
                            <div className="h-[5px] w-0 bg-yellow-200 rounded-ss-2xl rounded-es-2xl" ref={x_line_2}></div>
                            <div className="w-[5px] h-0 bg-yellow-200 rounded-2xl" ref={y_line_2}></div>
                        </div>
                        <div>
                            <InertiaLink
                                href={route("Berita")}
                                className="text-white bg-yellow-400 w-fit flex items-center gap-3 py-3 px-6 rounded-2xl cursor-pointer hover:bg-yellow-500 transition-colors group"
                            >
                                <span className={`font-bold ${isMobile ? "text-xs" : "text-lg"}`}>Selengkapnya</span>
                                <IoIosArrowForward style={{ fontSize: "24px" }} className="group-hover:translate-x-2 transition-all" />
                            </InertiaLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <Footer />

            {/* BACK TO TOP BUTTON */}
            <BackToTopButton />
        </main>
    );
};

export default ShowBerita;
