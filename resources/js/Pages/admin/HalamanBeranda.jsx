import { TbPlus, TbTrash } from "react-icons/tb";
import AdminSidebar from "../../Layout/AdminSidebar";
import Select from "react-select";
import { FiSave } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCurrentRoute } from "../../Redux/slice";

const HalamanBeranda = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentRoute("HalamanBeranda"));
    }, []);

    return (
        <main className="ml-[300px] bg-slate-100 min-h-screen p-12">
            {/* SIDEBAR */}
            <AdminSidebar />

            <h1 className="font-bold text-3xl text-slate-800 mb-8">Pengaturan Halaman Beranda</h1>
            <div className="grid grid-cols-6 gap-8">
                {/* HERO SECTION */}
                <div className="col-span-3 bg-white rounded-3xl shadow-lg">
                    <div className="px-8 py-6 border-b-2 border-slate-200">
                        <h1 className="text-2xl text-slate-500 font-semibold">Hero Section</h1>
                    </div>
                    <div className="px-8 py-6 flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="flex flex-col gap-3 grow">
                                <label className="font-medium text-slate-800" htmlFor="subJudul">
                                    Sub Judul
                                </label>
                                <input
                                    type="text"
                                    className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl"
                                    value={"Selamat Datang Di Website Resmi"}
                                    id="subJudul"
                                />
                            </div>
                            <div className="flex flex-col gap-3 grow">
                                <label className="font-medium text-slate-800" htmlFor="judul">
                                    Judul
                                </label>
                                <input
                                    type="text"
                                    className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl"
                                    value={"Prof. Drs. H. Ganefri, M.Pd., Ph.D"}
                                    id="judul"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium text-slate-800 mb-1">Carousel Berita</label>
                            <p className="text-sm font-medium text-slate-400">
                                *Thumbnail berita akan ditampilkan pada carousel di halaman beranda (maximal 5 berita)
                            </p>
                            <div className="flex flex-col gap-4 mt-3">
                                <div className="flex w-full gap-3">
                                    <Select classNamePrefix="react-select" className="w-full" />
                                    <div className="w-[44px] h-[44px] border-2 border-red-400 grid place-items-center rounded-xl hover:bg-red-100 transition-colors cursor-pointer">
                                        <TbTrash fontSize={24} className="text-red-400" />
                                    </div>
                                </div>
                                <div className="flex w-full gap-3">
                                    <Select classNamePrefix="react-select" className="w-full" />
                                    <div className="w-[44px] h-[44px] border-2 border-red-400 grid place-items-center rounded-xl hover:bg-red-100 transition-colors cursor-pointer">
                                        <TbTrash fontSize={24} className="text-red-400" />
                                    </div>
                                </div>
                                <button className="px-4 py-3 flex w-full items-center justify-center gap-3 rounded-xl border-2 border-yellow-400 hover:bg-yellow-50 transition-colors">
                                    <span className="font-medium text-yellow-400">Tambah Berita Lain</span>
                                    <TbPlus fontSize={24} className="text-yellow-400" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* YOUTUBE */}
                <div className="col-span-3 bg-white rounded-3xl shadow-lg">
                    <div className="px-8 py-6 border-b-2 border-slate-200">
                        <h1 className="text-2xl text-slate-500 font-semibold">Youtube</h1>
                    </div>
                    <div className="px-8 py-6 flex flex-col gap-4">
                        <div className="flex flex-col grow">
                            <label className="font-medium text-slate-800" htmlFor="yt_utama">
                                Video Utama
                            </label>
                            <p className="text-sm font-medium text-slate-400 mb-3">
                                *Video youtube yang ditampilkan pada section youtube di halaman beranda
                            </p>
                            <input
                                type="url"
                                className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl"
                                value={"Link Youtube"}
                                id="yt_utama"
                            />
                        </div>
                        <div className="flex flex-col grow">
                            <label className="font-medium text-slate-800" htmlFor="yt_utama">
                                Video Lainnya
                            </label>
                            <p className="text-sm font-medium text-slate-400 mb-3">
                                *Link video lainnya ditampilkan disebelah video utama (maximal 5)
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                        value={"Judul Video"}
                                    />
                                    <input
                                        type="url"
                                        className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                        value={"Link Youtube"}
                                    />
                                    <div className="w-[52px] h-[52px] border-2 border-red-400 grid place-items-center rounded-xl hover:bg-red-100 transition-colors cursor-pointer">
                                        <TbTrash fontSize={24} className="text-red-400" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                        value={"Judul Video"}
                                    />
                                    <input
                                        type="url"
                                        className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                        value={"Link Youtube"}
                                    />
                                    <div className="w-[52px] h-[52px] border-2 border-red-400 grid place-items-center rounded-xl hover:bg-red-100 transition-colors cursor-pointer">
                                        <TbTrash fontSize={24} className="text-red-400" />
                                    </div>
                                </div>
                                <button className="px-4 py-3 flex w-full items-center justify-center gap-3 rounded-xl border-2 border-yellow-400 hover:bg-yellow-50 transition-colors">
                                    <span className="font-medium text-yellow-400">Tambah Video Lain</span>
                                    <TbPlus fontSize={24} className="text-yellow-400" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MEDIA SOCIAL */}
                <div className="col-span-6 bg-white rounded-3xl shadow-lg">
                    <div className="px-8 py-6 border-b-2 border-slate-200">
                        <h1 className="text-2xl text-slate-500 font-semibold">Media Social</h1>
                    </div>
                    <div className="px-8 py-6 flex gap-4">
                        {/* FACEBOOK */}
                        <div className="flex flex-col grow gap-3">
                            <div className="flex items-center gap-2">
                                <label className="checkbox-container">
                                    <input type="checkbox" className="checkbox-native" />
                                    <div className="checkbox-custom"></div>
                                </label>
                                <label className="font-semibold text-lg text-slate-800">Facebook</label>
                            </div>
                            <input type="text" className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow" value={"Nama Facebook"} />
                            <input type="url" className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl" value={"Link Facebook"} />
                        </div>
                        {/* INSTAGRAM */}
                        <div className="flex flex-col grow gap-3">
                            <div className="flex items-center gap-2">
                                <label className="checkbox-container">
                                    <input type="checkbox" className="checkbox-native" />
                                    <div className="checkbox-custom"></div>
                                </label>
                                <label className="font-semibold text-lg text-slate-800">Instagram</label>
                            </div>
                            <input
                                type="text"
                                className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                value={"Nama Instagram"}
                            />
                            <input type="url" className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl" value={"Link Instagram"} />
                        </div>
                        {/* TWITTER */}
                        <div className="flex flex-col grow gap-3">
                            <div className="flex items-center gap-2">
                                <label className="checkbox-container">
                                    <input type="checkbox" className="checkbox-native" />
                                    <div className="checkbox-custom"></div>
                                </label>
                                <label className="font-semibold text-lg text-slate-800">Instagram</label>
                            </div>
                            <input type="text" className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow" value={"Nama Twitter"} />
                            <input type="url" className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl" value={"Link Twitter"} />
                        </div>
                        {/* EMAIL */}
                        <div className="flex flex-col grow gap-3">
                            <div className="flex items-center gap-2">
                                <label className="checkbox-container">
                                    <input type="checkbox" className="checkbox-native" />
                                    <div className="checkbox-custom"></div>
                                </label>
                                <label className="font-semibold text-lg text-slate-800">Email</label>
                            </div>
                            <input type="text" className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow" value={"Nama Email"} />
                            <input type="url" className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl" value={"Link Email"} />
                        </div>
                        {/* YOUTUBE */}
                        <div className="flex flex-col grow gap-3">
                            <div className="flex items-center gap-2">
                                <label className="checkbox-container">
                                    <input type="checkbox" className="checkbox-native" />
                                    <div className="checkbox-custom"></div>
                                </label>
                                <label className="font-semibold text-lg text-slate-800">Youtube</label>
                            </div>
                            <input type="text" className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow" value={"Nama Youtube"} />
                            <input type="url" className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl" value={"Link Youtube"} />
                        </div>
                    </div>
                </div>

                {/* ACTION BUTTON */}
                <div className="col-span-6 flex justify-end">
                    <button className="flex items-center justify-center gap-3 px-4 py-3 bg-green-400 border-2 border-green-200 rounded-xl font-semibold text-white hover:bg-green-500 transition-colors">
                        Simpan Perubahan <FiSave fontSize={24} />
                    </button>
                </div>
            </div>
        </main>
    );
};

export default HalamanBeranda;
