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
import { Head, usePage } from "@inertiajs/react";
import toast, { Toaster } from "react-hot-toast";
import { MdToday } from "react-icons/md";

const Dashboard = ({ viewsToday, uniqueVisitors, totalVisitors, topViewsPages, topViewsBerita, statsWeeks, monthlyVisitors, topDevices }) => {
    const { flash } = usePage().props;

    useEffect(() => {
        const { success, error, info } = flash;
        if (success) toast.success(success);
        if (error) toast.error(error);
        if (info) toast(info);
    }, [flash]);

    const arrowStatsMenu = useRef();

    const [isStatsMenuOpen, setIsStatsMenuOpen] = useState(false);
    const [statsOption, setStatsOption] = useState("daily");

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

    let dataStatsBulanIni = [];
    for (const key in monthlyVisitors) {
        if (monthlyVisitors.hasOwnProperty(key)) {
            dataStatsBulanIni.push(monthlyVisitors[key]);
        }
    }

    let dataStatsMingguIni = [0, 0, 0, 0, 0, 0, 0];
    let reversedStatsWeeks = statsWeeks.slice().reverse();
    for (let i = 0; i < reversedStatsWeeks.length; i++) {
        dataStatsMingguIni[dataStatsMingguIni.length - reversedStatsWeeks.length + i - 1] = reversedStatsWeeks[i].screenPageViews;
    }
    
    const setDateInWeek = (decreement) => {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - decreement);
        return currentDate.toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "numeric",
            day: "numeric",
        });
    }

    const dataStatsMonthly = {
        labels: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        datasets: [
            {
                backgroundColor: "#facc15",
                borderColor: "#facc15",
                data: dataStatsBulanIni,
            },
        ],
    };

    const dataStatsDaily = {
        labels: [
            setDateInWeek(6),
            setDateInWeek(5),
            setDateInWeek(4),
            setDateInWeek(3),
            setDateInWeek(2),
            setDateInWeek(1),
            setDateInWeek(0),
        ],
        datasets: [
            {
                backgroundColor: "#facc15",
                borderColor: "#facc15",
                data: dataStatsMingguIni,
            },
        ],
    };

    let labelDevices = [];
    topDevices.forEach(element => {
        labelDevices.push(element.operatingSystem);
    });

    let dataDevicesStats = [];
    topDevices.forEach(element => {
        dataDevicesStats.push(element.screenPageViews);
    });

    const dataDevice = {
        labels: labelDevices,
        datasets: [
            {
                label: "Device Usage",
                data: dataDevicesStats,
                backgroundColor: ["#facc15", "#a16207", "#422006"],
            },
        ],
    };

    return (
        <main className="ml-[300px] bg-slate-100 min-h-screen p-12">
            <Toaster />

            {/* TITLE */}
            <Head>
                <title>Dashboard</title>
            </Head>

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
                                    {statsOption == "daily" ? "Harian" : statsOption == "monthly" ? "Bulanan" : null}
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
                                        {statsOption != "daily" && (
                                            <div
                                                className="px-4 py-3 text-lg font-semibold w-full hover:bg-slate-200 transition-colors cursor-pointer"
                                                onClick={() => changeStatsOption("daily")}
                                            >
                                                Harian
                                            </div>
                                        )}
                                        {statsOption != "monthly" && (
                                            <div
                                                className="px-4 py-3 text-lg font-semibold w-full hover:bg-slate-200 transition-colors cursor-pointer"
                                                onClick={() => changeStatsOption("monthly")}
                                            >
                                                Bulanan
                                            </div>
                                        )}
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>
                        </div>
                    </div>
                    <Bar
                        data={statsOption == 'daily' ? dataStatsDaily : statsOption == 'monthly' ? dataStatsMonthly : null }
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
                <div className="col-span-2 bg-white p-8 rounded-3xl shadow-lg flex flex-col items-center justify-around">
                    <h1 className="font-bold text-3xl text-slate-800 mb-12">Persentase Pengunjung</h1>
                    <div className="w-[320px] h-[320px] mb-8">
                        <Doughnut
                            data={dataDevice}
                            options={{
                                plugins: {
                                    legend: {
                                        // display: false,
                                    },
                                },
                                animation: {
                                    duration: 2000,
                                },
                            }}
                        />
                    </div>
                </div>

                {/* INFORMASI TAMBAHAN */}
                <div className="col-span-2 bg-white p-8 rounded-3xl shadow-lg flex items-center justify-center gap-4">
                    <MdToday fontSize={82} className="text-yellow-400" />
                    <div>
                        <h1 className="text-4xl font-bold text-yellow-900 mb-1">{viewsToday}</h1>
                        <p className="text-slate-500">
                            Jumlah Pengunjungan Hari Ini <br /> (
                            {new Date().toLocaleDateString("id-ID", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                            )
                        </p>
                    </div>
                </div>
                <div className="col-span-2 bg-white p-8 rounded-3xl shadow-lg flex items-center justify-center gap-4">
                    <FiEye fontSize={82} className="text-yellow-400" />
                    <div>
                        <h1 className="text-4xl font-bold text-yellow-900 mb-1">{totalVisitors}</h1>
                        <p className="text-slate-500">Total Pengunjungan</p>
                    </div>
                </div>
                <div className="col-span-2 bg-white p-8 rounded-3xl shadow-lg flex items-center justify-center gap-4">
                    <GoPeople fontSize={82} className="text-yellow-400" />
                    <div>
                        <h1 className="text-4xl font-bold text-yellow-900 mb-1">{uniqueVisitors}</h1>
                        <p className="text-slate-500">Jumlah Pengunjung</p>
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
                            {topViewsPages.map((item, index) => (
                                <div className="flex px-3 py-2 items-center justify-between bg-slate-100 rounded-lg" key={index}>
                                    <p className="font-medium text-slate-800">{item.pageTitle}</p>
                                    <p className="font-semibold text-yellow-900">{item.screenPageViews}</p>
                                </div>
                            ))}
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
                            {topViewsBerita.map((item, index) => (
                                <div className="flex px-4 py-2 items-center justify-between bg-slate-100 rounded-lg">
                                    <p className="font-medium text-slate-800 w-full max-w-[80%]">{item.judul}</p>
                                    <p className="font-semibold text-yellow-900">{item.pengunjung}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
