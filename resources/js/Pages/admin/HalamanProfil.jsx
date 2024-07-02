import { TbFrame, TbPlus, TbTrash } from "react-icons/tb";
import AdminSidebar from "../../Layout/AdminSidebar";
import Select from "react-select";
import { FiSave } from "react-icons/fi";
import { GoImage } from "react-icons/go";
import { useDispatch } from "react-redux";
import { setCurrentRoute } from "../../Redux/slice";
import { useEffect } from "react";

const HalamanProfil = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentRoute("HalamanProfil"));
    }, []);

    return (
        <main className="ml-[300px] bg-slate-100 min-h-screen p-12">
            {/* SIDEBAR */}
            <AdminSidebar />

            <h1 className="font-bold text-3xl text-slate-800 mb-8">Pengaturan Halaman Profil</h1>
            <div className="grid grid-cols-6 gap-8">
                {/* PROFIL */}
                <div className="col-span-6 bg-white rounded-3xl shadow-lg">
                    <div className="px-8 py-6 border-b-2 border-slate-200">
                        <h1 className="text-2xl text-slate-500 font-semibold">Profil</h1>
                    </div>
                    <div className="px-8 py-6 flex gap-4">
                        <div className="flex flex-col grow gap-3">
                            <span className="font-medium text-slate-800">Section Profil Pertama</span>
                            <label className="w-full h-[240px] border-2 border-slate-400 flex flex-col items-center justify-center gap-3 rounded-xl cursor-pointer bg-slate-100">
                                <GoImage fontSize={64} className="text-slate-500" />
                                <span className="font-semibold text-slate-500">Masukkan Gambar</span>
                                <input type="file" className="hidden" />
                            </label>
                            <textarea
                                name="content-profil-1"
                                className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl min-h-[96px]"
                                placeholder="Isi content untuk section profil pertama"
                            ></textarea>
                        </div>
                        <div className="flex flex-col grow gap-3">
                            <span className="font-medium text-slate-800">Section Profil Kedua</span>
                            <label className="w-full h-[240px] border-2 border-slate-400 flex flex-col items-center justify-center gap-3 rounded-xl cursor-pointer bg-slate-100">
                                <GoImage fontSize={64} className="text-slate-500" />
                                <span className="font-semibold text-slate-500">Masukkan Gambar</span>
                                <input type="file" className="hidden" />
                            </label>
                            <textarea
                                name="content-profil-1"
                                className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl min-h-[96px]"
                                placeholder="Isi content untuk section profil pertama"
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* RIWAYAT */}
                <div className="col-span-6 bg-white rounded-3xl shadow-lg">
                    <div className="px-8 py-6 border-b-2 border-slate-200">
                        <h1 className="text-2xl text-slate-500 font-semibold">Profil</h1>
                    </div>
                    <div className="px-8 py-6 flex gap-4">
                        <div className="flex flex-col grow gap-3">
                            <div>
                                <p className="font-medium text-slate-800 mb-1">Riwayat Pendidikan</p>
                                <span className="text-slate-500 text-sm">*maximal 10 list</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                        value={"List 1"}
                                    />
                                    <div className="w-[52px] h-[52px] border-2 border-red-400 grid place-items-center rounded-xl hover:bg-red-100 transition-colors cursor-pointer">
                                        <TbTrash fontSize={24} className="text-red-400" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                        value={"List 1"}
                                    />
                                    <div className="w-[52px] h-[52px] border-2 border-red-400 grid place-items-center rounded-xl hover:bg-red-100 transition-colors cursor-pointer">
                                        <TbTrash fontSize={24} className="text-red-400" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                        value={"List 1"}
                                    />
                                    <div className="w-[52px] h-[52px] border-2 border-red-400 grid place-items-center rounded-xl hover:bg-red-100 transition-colors cursor-pointer">
                                        <TbTrash fontSize={24} className="text-red-400" />
                                    </div>
                                </div>
                                <button className="px-4 py-3 flex w-full items-center justify-center gap-3 rounded-xl border-2 border-yellow-400 hover:bg-yellow-50 transition-colors">
                                    <span className="font-medium text-yellow-400">Tambah List</span>
                                    <TbPlus fontSize={24} className="text-yellow-400" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col grow gap-3">
                            <div>
                                <p className="font-medium text-slate-800 mb-1">Riwayat Pekerjaan</p>
                                <span className="text-slate-500 text-sm">*maximal 10 list</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                        value={"List 1"}
                                    />
                                    <div className="w-[52px] h-[52px] border-2 border-red-400 grid place-items-center rounded-xl hover:bg-red-100 transition-colors cursor-pointer">
                                        <TbTrash fontSize={24} className="text-red-400" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                        value={"List 1"}
                                    />
                                    <div className="w-[52px] h-[52px] border-2 border-red-400 grid place-items-center rounded-xl hover:bg-red-100 transition-colors cursor-pointer">
                                        <TbTrash fontSize={24} className="text-red-400" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                        value={"List 1"}
                                    />
                                    <div className="w-[52px] h-[52px] border-2 border-red-400 grid place-items-center rounded-xl hover:bg-red-100 transition-colors cursor-pointer">
                                        <TbTrash fontSize={24} className="text-red-400" />
                                    </div>
                                </div>
                                <button className="px-4 py-3 flex w-full items-center justify-center gap-3 rounded-xl border-2 border-yellow-400 hover:bg-yellow-50 transition-colors">
                                    <span className="font-medium text-yellow-400">Tambah List</span>
                                    <TbPlus fontSize={24} className="text-yellow-400" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col grow gap-3">
                            <div>
                                <p className="font-medium text-slate-800 mb-1">Riwayat Organisasi</p>
                                <span className="text-slate-500 text-sm">*maximal 10 list</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                        value={"List 1"}
                                    />
                                    <div className="w-[52px] h-[52px] border-2 border-red-400 grid place-items-center rounded-xl hover:bg-red-100 transition-colors cursor-pointer">
                                        <TbTrash fontSize={24} className="text-red-400" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                        value={"List 1"}
                                    />
                                    <div className="w-[52px] h-[52px] border-2 border-red-400 grid place-items-center rounded-xl hover:bg-red-100 transition-colors cursor-pointer">
                                        <TbTrash fontSize={24} className="text-red-400" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                        value={"List 1"}
                                    />
                                    <div className="w-[52px] h-[52px] border-2 border-red-400 grid place-items-center rounded-xl hover:bg-red-100 transition-colors cursor-pointer">
                                        <TbTrash fontSize={24} className="text-red-400" />
                                    </div>
                                </div>
                                <button className="px-4 py-3 flex w-full items-center justify-center gap-3 rounded-xl border-2 border-yellow-400 hover:bg-yellow-50 transition-colors">
                                    <span className="font-medium text-yellow-400">Tambah List</span>
                                    <TbPlus fontSize={24} className="text-yellow-400" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PENGHARGAAN */}
                <div className="col-span-6 bg-white rounded-3xl shadow-lg">
                    <div className="px-8 py-6 border-b-2 border-slate-200">
                        <h1 className="text-2xl text-slate-500 font-semibold">Penghargaan</h1>
                    </div>
                    <div className="px-8 py-6 flex flex-col gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-[32px] h-[32px] border-2 border-red-400 grid place-items-center rounded-lg hover:bg-red-100 transition-colors cursor-pointer">
                                    <TbTrash fontSize={16} className="text-red-400" />
                                </div>
                                <p className="font-semibold text-slate-800 text-lg">Penghargaan 1</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <label className="h-[240px] border-2 border-slate-400 flex flex-col items-center justify-center gap-3 rounded-xl cursor-pointer bg-slate-100 grow">
                                    <GoImage fontSize={64} className="text-slate-500" />
                                    <div className="flex flex-col items-center">
                                        <span className="font-semibold text-slate-500">Masukkan Gambar</span>
                                        <span className="text-slate-500 text-sm">*Disarankan gambar dengan rasio 16:9</span>
                                    </div>
                                    <input type="file" className="hidden" />
                                </label>
                                <div className="flex flex-col gap-3 grow">
                                    <input
                                        type="text"
                                        className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                        value={"Judul Penghargaan"}
                                    />
                                    <textarea
                                        name="content-profil-1"
                                        className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl min-h-[178px]"
                                        placeholder="Deskripsi Penghargaan"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-[32px] h-[32px] border-2 border-red-400 grid place-items-center rounded-lg hover:bg-red-100 transition-colors cursor-pointer">
                                    <TbTrash fontSize={16} className="text-red-400" />
                                </div>
                                <p className="font-semibold text-slate-800 text-lg">Penghargaan 2</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <label className="h-[240px] border-2 border-slate-400 flex flex-col items-center justify-center gap-3 rounded-xl cursor-pointer bg-slate-100 grow">
                                    <GoImage fontSize={64} className="text-slate-500" />
                                    <div className="flex flex-col items-center">
                                        <span className="font-semibold text-slate-500">Masukkan Gambar</span>
                                        <span className="text-slate-500 text-sm">*Disarankan gambar dengan rasio 16:9</span>
                                    </div>
                                    <input type="file" className="hidden" />
                                </label>
                                <div className="flex flex-col gap-3 grow">
                                    <input
                                        type="text"
                                        className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                        value={"Judul Penghargaan"}
                                    />
                                    <textarea
                                        name="content-profil-1"
                                        className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl min-h-[178px]"
                                        placeholder="Deskripsi Penghargaan"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <span className="font-medium text-slate-500">*maximal 6</span>
                        <button className="px-4 py-3 flex w-full items-center justify-center gap-3 rounded-xl border-2 border-yellow-400 hover:bg-yellow-50 transition-colors">
                            <span className="font-medium text-yellow-400">Tambah List</span>
                            <TbPlus fontSize={24} className="text-yellow-400" />
                        </button>
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

export default HalamanProfil;
