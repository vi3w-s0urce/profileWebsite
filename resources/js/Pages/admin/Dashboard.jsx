import { IoIosArrowDown } from "react-icons/io";
import AdminSidebar from "../../Layout/AdminSidebar";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Chart from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
import { FiEye } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { LuClock4 } from "react-icons/lu";
import { setCurrentRoute } from "../../Redux/slice";
import { useDispatch } from "react-redux";

const Dashboard = () => {
    const arrowStatsMenu = useRef();

    const [isStatsMenuOpen, setIsStatsMenuOpen] = useState(false);
    const [statsOption, setStatsOption] = useState("day");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentRoute("Dashboard"));
    }, []);

    const handleStatsMenuOpen = () => {
        if (isStatsMenuOpen) {
            setIsStatsMenuOpen(false);
        } else {
            setIsStatsMenuOpen(true);
        }
        gsap.to(arrowStatsMenu.current, {
            rotate: "+=180",
            duration: 0.5,
            ease: "power3.out",
        });
    };

    const changeStatsOption = (option) => {
        setStatsOption(option);
        setIsStatsMenuOpen(false);
        gsap.to(arrowStatsMenu.current, {
            rotate: "+=180",
            duration: 0.5,
            ease: "power3.out",
        });
    };

    const dataStats = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                backgroundColor: "#facc15",
                borderColor: "#facc15",
                data: [0, 10, 5, 2, 20, 30, 45],
            },
        ],
    };

    const dataDevice = {
        labels: ["Desktop", "Tablet", "Mobile"],
        datasets: [
            {
                label: "Device Usage",
                data: [123, 23, 90],
                backgroundColor: ["#facc15", "#a16207", "#422006"],
            },
        ],
    };

    return (
        <main className="ml-[300px] bg-slate-100 min-h-screen p-12">
            {/* SIDEBAR */}
            <AdminSidebar />

            <div className="grid grid-cols-6 gap-8">
                {/* STATISTIK PENGUNJUNG */}
                <div className="col-span-4 bg-white p-8 rounded-3xl shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                        <h1 className="font-bold text-3xl text-slate-800">Statistik Pengunjung</h1>
                        <div className="relative w-44">
                            <div
                                className="flex items-center justify-between px-4 py-3 gap-3 bg-yellow-100 text-yellow-500 rounded-xl cursor-pointer"
                                onClick={() => handleStatsMenuOpen()}
                            >
                                <span className="text-lg font-semibold">
                                    {statsOption == "day"
                                        ? "Hari Ini"
                                        : statsOption == "week"
                                        ? "Minggu Ini"
                                        : statsOption == "month"
                                        ? "Bulan Ini"
                                        : null}
                                </span>
                                <div ref={arrowStatsMenu}>
                                    <IoIosArrowDown fontSize={24} />
                                </div>
                            </div>
                            <AnimatePresence>
                                {isStatsMenuOpen ? (
                                    <motion.div
                                        className="absolute w-full bg-white border-2 shadow-xl mt-2 rounded-xl text-slate-800 overflow-hidden"
                                        initial={{ height: 0 }}
                                        animate={{ height: "initial" }}
                                        exit={{ height: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {statsOption != "day" && (
                                            <div
                                                className="px-4 py-3 text-lg font-semibold w-full hover:bg-slate-200 transition-colors cursor-pointer"
                                                onClick={() => changeStatsOption("day")}
                                            >
                                                Hari Ini
                                            </div>
                                        )}
                                        {statsOption != "week" && (
                                            <div
                                                className="px-4 py-3 text-lg font-semibold w-full hover:bg-slate-200 transition-colors cursor-pointer"
                                                onClick={() => changeStatsOption("week")}
                                            >
                                                Minggu Ini
                                            </div>
                                        )}
                                        {statsOption != "month" && (
                                            <div
                                                className="px-4 py-3 text-lg font-semibold w-full hover:bg-slate-200 transition-colors cursor-pointer"
                                                onClick={() => changeStatsOption("month")}
                                            >
                                                Bulan Ini
                                            </div>
                                        )}
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>
                        </div>
                    </div>
                    <Bar
                        data={dataStats}
                        options={{
                            animation: {
                                duration: 2000,
                            },
                            plugins: {
                                legend: {
                                    display: false,
                                },
                                title: {
                                    display: false,
                                },
                            },
                        }}
                    />
                </div>

                {/* PERSENTASE PENGUNJUNG */}
                <div className="col-span-2 bg-white p-8 rounded-3xl shadow-lg flex flex-col items-center">
                    <h1 className="font-bold text-3xl text-slate-800 mb-12">Persentase Pengunjung</h1>
                    <div className="w-[320px] h-[320px] mb-8">
                        <Doughnut
                            data={dataDevice}
                            options={{
                                plugins: {
                                    legend: {
                                        display: false,
                                    },
                                },
                                animation: {
                                    duration: 2000,
                                },
                            }}
                        />
                    </div>
                    <div className="flex flex-wrap gap-8">
                        <div className="flex items-center gap-3">
                            <div className="w-[16px] h-[16px] bg-yellow-400 rounded-full" />
                            <span className="font-medium text-slate-800">Desktop</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-[16px] h-[16px] bg-yellow-700 rounded-full" />
                            <span className="font-medium text-slate-800">Tablet</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-[16px] h-[16px] bg-yellow-950 rounded-full" />
                            <span className="font-medium text-slate-800">Mobile</span>
                        </div>
                    </div>
                </div>

                {/* INFORMASI TAMBAHAN */}
                <div className="col-span-2 bg-white p-8 rounded-3xl shadow-lg flex items-center justify-center gap-4">
                    <FiEye fontSize={82} className="text-yellow-400" />
                    <div>
                        <h1 className="text-4xl font-bold text-yellow-900 mb-1">722</h1>
                        <p className="text-slate-500">Total Pengunjungan</p>
                    </div>
                </div>
                <div className="col-span-2 bg-white p-8 rounded-3xl shadow-lg flex items-center justify-center gap-4">
                    <GoPeople fontSize={82} className="text-yellow-400" />
                    <div>
                        <h1 className="text-4xl font-bold text-yellow-900 mb-1">117</h1>
                        <p className="text-slate-500">Jumlah Pengunjung</p>
                    </div>
                </div>
                <div className="col-span-2 bg-white p-8 rounded-3xl shadow-lg flex items-center justify-center gap-4">
                    <LuClock4 fontSize={82} className="text-yellow-400" />
                    <div>
                        <h1 className="text-4xl font-bold text-yellow-900 mb-1">2 Menit</h1>
                        <p className="text-slate-500">Rata Rata Durasi Pengunjungan</p>
                    </div>
                </div>

                {/* TOP PAGES */}
                <div className="col-span-3 bg-white p-8 rounded-3xl shadow-lg">
                    <h1 className="font-bold text-3xl text-slate-800 mb-8">Top Halaman yang Dikunjungi</h1>
                    <div className="text-xl">
                        <div className="mb-6 flex items-center justify-between">
                            <p className="font-semibold text-slate-500">URL</p>
                            <p className="font-semibold text-slate-500">Jumlah Pengunjungan</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex px-3 py-2 items-center justify-between bg-slate-100 rounded-lg">
                                <p className="font-medium text-slate-800">/</p>
                                <p className="font-semibold text-yellow-900">324</p>
                            </div>
                            <div className="flex px-3 py-2 items-center justify-between bg-slate-100 rounded-lg">
                                <p className="font-medium text-slate-800">/</p>
                                <p className="font-semibold text-yellow-900">324</p>
                            </div>
                            <div className="flex px-3 py-2 items-center justify-between bg-slate-100 rounded-lg">
                                <p className="font-medium text-slate-800">/</p>
                                <p className="font-semibold text-yellow-900">324</p>
                            </div>
                            <div className="flex px-3 py-2 items-center justify-between bg-slate-100 rounded-lg">
                                <p className="font-medium text-slate-800">/</p>
                                <p className="font-semibold text-yellow-900">324</p>
                            </div>
                            <div className="flex px-3 py-2 items-center justify-between bg-slate-100 rounded-lg">
                                <p className="font-medium text-slate-800">/</p>
                                <p className="font-semibold text-yellow-900">324</p>
                            </div>
                            <div className="flex px-3 py-2 items-center justify-between bg-slate-100 rounded-lg">
                                <p className="font-medium text-slate-800">/</p>
                                <p className="font-semibold text-yellow-900">324</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 bg-white p-8 rounded-3xl shadow-lg">
                    <h1 className="font-bold text-3xl text-slate-800 mb-8">Top Berita dan Agenda</h1>
                    <div className="text-xl">
                        <div className="mb-6 flex items-center justify-between">
                            <p className="font-semibold text-slate-500">Judul</p>
                            <p className="font-semibold text-slate-500">Jumlah Pengunjungan</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex px-3 py-2 items-center justify-between bg-slate-100 rounded-lg">
                                <p className="font-medium text-slate-800">/</p>
                                <p className="font-semibold text-yellow-900">324</p>
                            </div>
                            <div className="flex px-3 py-2 items-center justify-between bg-slate-100 rounded-lg">
                                <p className="font-medium text-slate-800">/</p>
                                <p className="font-semibold text-yellow-900">324</p>
                            </div>
                            <div className="flex px-3 py-2 items-center justify-between bg-slate-100 rounded-lg">
                                <p className="font-medium text-slate-800">/</p>
                                <p className="font-semibold text-yellow-900">324</p>
                            </div>
                            <div className="flex px-3 py-2 items-center justify-between bg-slate-100 rounded-lg">
                                <p className="font-medium text-slate-800">/</p>
                                <p className="font-semibold text-yellow-900">324</p>
                            </div>
                            <div className="flex px-3 py-2 items-center justify-between bg-slate-100 rounded-lg">
                                <p className="font-medium text-slate-800">/</p>
                                <p className="font-semibold text-yellow-900">324</p>
                            </div>
                            <div className="flex px-3 py-2 items-center justify-between bg-slate-100 rounded-lg">
                                <p className="font-medium text-slate-800">/</p>
                                <p className="font-semibold text-yellow-900">324</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
