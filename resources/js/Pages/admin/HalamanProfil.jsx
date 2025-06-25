import { TbEditCircle, TbFrame, TbPlus, TbTrash, TbX } from "react-icons/tb";
import AdminSidebar from "../../Layout/AdminSidebar";
import Select from "react-select";
import { FiSave } from "react-icons/fi";
import { GoImage } from "react-icons/go";
import { useDispatch } from "react-redux";
import { setCurrentRoute } from "../../Redux/slice";
import { useEffect, useState } from "react";
import { Head, useForm, usePage } from "@inertiajs/react";
import route from "ziggy-js";
import toast, { Toaster } from "react-hot-toast";

const HalamanProfil = ({ dataProfil, dataRiwayat, dataPenghargaan }) => {
    const { flash } = usePage().props;

    useEffect(() => {
        const { success, error, info } = flash;
        if (success) toast.success(success);
        if (error) toast.error(error);
        if (info) toast(info);
    }, [flash]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentRoute("HalamanProfil"));
    }, []);

    const [selectedImageProfil_1, setSelectedImageProfil_1] = useState();
    const [selectedImageProfil_2, setSelectedImageProfil_2] = useState();
    const [selectedPenghargaanImage, setSelectedPenghargaanImage] = useState([]);
    
    const dataProfil_1 = dataProfil.find((item) => item.type === "profil_1");
    const dataProfil_2 = dataProfil.find((item) => item.type === "profil_2");
    const dataRiwayatPendidikan = dataRiwayat.filter((item) => item.type === "pendidikan").map(item => item.list);
    const dataRiwayatPekerjaan = dataRiwayat.filter((item) => item.type === "pekerjaan").map(item => item.list);
    const dataRiwayatOrganisasi = dataRiwayat.filter((item) => item.type === "organisasi").map(item => item.list);

    const formHalamanProfil = useForm({
        profil_1: {
            gambar: dataProfil_1.gambar,
            content: dataProfil_1.content,
        },
        profil_2: {
            gambar: dataProfil_2.gambar,
            content: dataProfil_2.content,
        },
        riwayat_pendidikan: dataRiwayatPendidikan,
        riwayat_pekerjaan: dataRiwayatPekerjaan,
        riwayat_organisasi: dataRiwayatOrganisasi,
        penghargaan: dataPenghargaan,
    });

    const checkSelectedPenghargaanImage = (index) => {
        return selectedPenghargaanImage.find((item) => item.indexGambar === index);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (formHalamanProfil.data.penghargaan.length == 0) {
            toast.error("Penghargaan Masih Kosong!");
        } else if (formHalamanProfil.data.riwayat_pendidikan == 0) {
            toast.error("Riwayat Pendidikan Tidak Boleh Kosong!");
        } else if (formHalamanProfil.data.riwayat_pekerjaan == 0) {
            toast.error("Riwayat Pekerjaan Tidak Boleh Kosong!");
        } else if (formHalamanProfil.data.riwayat_organisasi == 0) {
            toast.error("Riwayat Organisasi Tidak Boleh Kosong!");
        } else {
            formHalamanProfil.post(route("AdminUpdateHalamanProfil"));
        }
    };

    return (
        <main className="ml-[300px] bg-slate-100 min-h-screen p-12">
            {/* SIDEBAR */}
            <AdminSidebar />

            {/* TITLE */}
            <Head>
                <title>Halaman Profil</title>
            </Head>

            <Toaster />

            <h1 className="font-bold text-3xl text-slate-800 mb-8">Pengaturan Halaman Profil</h1>
            <form className="grid grid-cols-6 gap-8" onSubmit={handleOnSubmit}>
                {/* PROFIL */}
                <div className="col-span-6 bg-white rounded-3xl shadow-lg">
                    <div className="px-8 py-6 border-b-2 border-slate-200">
                        <h1 className="text-2xl text-slate-500 font-semibold">Profil</h1>
                    </div>
                    <div className="px-8 py-6 flex gap-4">
                        <div className="flex flex-col w-full gap-3">
                            <span className="font-medium text-slate-800">Section Profil Pertama</span>
                            {selectedImageProfil_1 ? (
                                <div className="relative overflow-hidden h-[240px] border-2 border-slate-400 flex flex-col items-center justify-center gap-3 rounded-xl bg-slate-100 grow group">
                                    <div className="absolute h-full w-full bg-black bg-opacity-10 hidden place-content-center group-hover:grid">
                                        <TbX
                                            className="text-red-500 cursor-pointer p-2 hover:bg-red-200 rounded-xl"
                                            onClick={() => {
                                                setSelectedImageProfil_1(null);
                                                formHalamanProfil.setData("profil_1", {
                                                    ...formHalamanProfil.data.profil_1,
                                                    gambar: null,
                                                });
                                            }}
                                            fontSize={82}
                                        />
                                    </div>
                                    <img src={selectedImageProfil_1} alt="gambar" className="h-full object-cover" />
                                </div>
                            ) : (
                                <label className="relative w-full h-[240px] border-2 border-slate-400 flex flex-col items-center justify-center gap-3 rounded-xl cursor-pointer bg-slate-100 group">
                                    <div className="absolute h-full w-full bg-white bg-opacity-20 hidden place-content-center group-hover:grid">
                                        <TbEditCircle className="text-yellow-500 cursor-pointer p-2 hover:bg-yellow-200 rounded-xl" fontSize={82} />
                                    </div>
                                    <img
                                        src={
                                            dataProfil_1.gambar
                                                ? "/storage/profilImages/" + dataProfil_1.gambar
                                                : "/storage/profilImages/default_1.svg"
                                        }
                                        alt="gambar"
                                        className="h-full object-cover"
                                    />
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onloadend = () => {
                                                    formHalamanProfil.setData("profil_1", {
                                                        ...formHalamanProfil.data.profil_1,
                                                        gambar: file,
                                                    });
                                                    setSelectedImageProfil_1(reader.result);
                                                };
                                                reader.readAsDataURL(file);
                                            }
                                        }}
                                    />
                                </label>
                            )}
                            <textarea
                                name="content-profil-1"
                                className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl min-h-[240px]"
                                placeholder="Isi content untuk section profil pertama"
                                onChange={(e) =>
                                    formHalamanProfil.setData("profil_1", {
                                        ...formHalamanProfil.data.profil_1,
                                        content: e.target.value,
                                    })
                                }
                                value={formHalamanProfil.data.profil_1.content}
                                required
                            ></textarea>
                        </div>

                        <div className="flex flex-col w-full gap-3">
                            <span className="font-medium text-slate-800">Section Profil Kedua</span>
                            {selectedImageProfil_2 ? (
                                <div className="relative overflow-hidden h-[240px] border-2 border-slate-400 flex flex-col items-center justify-center gap-3 rounded-xl bg-slate-100 grow group">
                                    <div className="absolute h-full w-full bg-black bg-opacity-10 hidden place-content-center group-hover:grid">
                                        <TbX
                                            className="text-red-500 cursor-pointer p-2 hover:bg-red-200 rounded-xl"
                                            onClick={() => {
                                                setSelectedImageProfil_2(null);
                                                formHalamanProfil.setData("profil_2", {
                                                    ...formHalamanProfil.data.profil_2,
                                                    gambar: null,
                                                });
                                            }}
                                            fontSize={82}
                                        />
                                    </div>
                                    <img src={selectedImageProfil_2} alt="gambar" className="h-full object-cover" />
                                </div>
                            ) : (
                                <label className="relative w-full h-[240px] border-2 border-slate-400 flex flex-col items-center justify-center gap-3 rounded-xl cursor-pointer bg-slate-100 group">
                                    <div className="absolute h-full w-full bg-white bg-opacity-20 hidden place-content-center group-hover:grid">
                                        <TbEditCircle className="text-yellow-500 cursor-pointer p-2 hover:bg-yellow-200 rounded-xl" fontSize={82} />
                                    </div>
                                    <img
                                        src={
                                            dataProfil_2.gambar
                                                ? "/storage/profilImages/" + dataProfil_2.gambar
                                                : "/storage/profilImages/default_2.jpg"
                                        }
                                        alt="gambar"
                                        className="h-full object-cover"
                                    />
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onloadend = () => {
                                                    formHalamanProfil.setData("profil_2", {
                                                        ...formHalamanProfil.data.profil_2,
                                                        gambar: file,
                                                    });
                                                    setSelectedImageProfil_2(reader.result);
                                                };
                                                reader.readAsDataURL(file);
                                            }
                                        }}
                                    />
                                </label>
                            )}
                            <textarea
                                name="content-profil-1"
                                className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl min-h-[240px]"
                                placeholder="Isi content untuk section profil pertama"
                                onChange={(e) =>
                                    formHalamanProfil.setData("profil_2", {
                                        ...formHalamanProfil.data.profil_2,
                                        content: e.target.value,
                                    })
                                }
                                value={formHalamanProfil.data.profil_2.content}
                                required
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* RIWAYAT */}
                <div className="col-span-6 bg-white rounded-3xl shadow-lg">
                    <div className="px-8 py-6 border-b-2 border-slate-200">
                        <h1 className="text-2xl text-slate-500 font-semibold">Riwayat</h1>
                    </div>
                    <div className="px-8 py-6 flex gap-4">
                        <div className="flex flex-col grow gap-3">
                            <div>
                                <p className="font-medium text-slate-800 mb-1">Riwayat Pendidikan</p>
                                <span className="text-slate-500 text-sm">*maximal 10 list</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                {formHalamanProfil.data.riwayat_pendidikan.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <input
                                            type="text"
                                            className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                            placeholder="Tuliskan riwayat pendidikan"
                                            value={item}
                                            onChange={(e) => {
                                                const newRiwayatPendidikan = [...formHalamanProfil.data.riwayat_pendidikan];
                                                newRiwayatPendidikan[index] = e.target.value;
                                                formHalamanProfil.setData("riwayat_pendidikan", newRiwayatPendidikan);
                                            }}
                                            required
                                        />
                                        <div
                                            className="w-[52px] h-[52px] border-2 border-red-400 grid place-items-center rounded-xl hover:bg-red-100 transition-colors cursor-pointer"
                                            onClick={() => {
                                                const newRiwayatPendidikan = formHalamanProfil.data.riwayat_pendidikan.filter((_, i) => i !== index);
                                                formHalamanProfil.setData("riwayat_pendidikan", newRiwayatPendidikan);
                                            }}
                                        >
                                            <TbTrash fontSize={24} className="text-red-400" />
                                        </div>
                                    </div>
                                ))}
                                {formHalamanProfil.data.riwayat_pendidikan.length < 10 && (
                                    <div
                                        className="px-4 py-3 flex w-full items-center justify-center gap-3 rounded-xl !border-2 border-yellow-400 hover:bg-yellow-50 transition-colors cursor-pointer"
                                        onClick={() => {
                                            const newRiwayatPendidikan = [...formHalamanProfil.data.riwayat_pendidikan, ""];
                                            formHalamanProfil.setData("riwayat_pendidikan", newRiwayatPendidikan);
                                        }}
                                    >
                                        <span className="font-medium text-yellow-400">Tambah Riwayat Pendidikan</span>
                                        <TbPlus fontSize={24} className="text-yellow-400" />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col grow gap-3">
                            <div>
                                <p className="font-medium text-slate-800 mb-1">Riwayat Pekerjaan</p>
                                <span className="text-slate-500 text-sm">*maximal 10 list</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                {formHalamanProfil.data.riwayat_pekerjaan.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <input
                                            type="text"
                                            className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                            placeholder="Tuliskan riwayat pekerjaan"
                                            value={item}
                                            onChange={(e) => {
                                                const newRiwayatPekerjaan = [...formHalamanProfil.data.riwayat_pekerjaan];
                                                newRiwayatPekerjaan[index] = e.target.value;
                                                formHalamanProfil.setData("riwayat_pekerjaan", newRiwayatPekerjaan);
                                            }}
                                            required
                                        />
                                        <div
                                            className="w-[52px] h-[52px] border-2 border-red-400 grid place-items-center rounded-xl hover:bg-red-100 transition-colors cursor-pointer"
                                            onClick={() => {
                                                const newRiwayatPekerjaan = formHalamanProfil.data.riwayat_pekerjaan.filter((_, i) => i !== index);
                                                formHalamanProfil.setData("riwayat_pekerjaan", newRiwayatPekerjaan);
                                            }}
                                        >
                                            <TbTrash fontSize={24} className="text-red-400" />
                                        </div>
                                    </div>
                                ))}
                                {formHalamanProfil.data.riwayat_pendidikan.length < 10 && (
                                    <div
                                        className="px-4 py-3 flex w-full items-center justify-center gap-3 rounded-xl border-2 border-yellow-400 hover:bg-yellow-50 transition-colors cursor-pointer"
                                        onClick={() => {
                                            const newRiwayatPekerjaan = [...formHalamanProfil.data.riwayat_pekerjaan, ""];
                                            formHalamanProfil.setData("riwayat_pekerjaan", newRiwayatPekerjaan);
                                        }}
                                    >
                                        <span className="font-medium text-yellow-400">Tambah Riwayat Pekarjaan</span>
                                        <TbPlus fontSize={24} className="text-yellow-400" />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col grow gap-3">
                            <div>
                                <p className="font-medium text-slate-800 mb-1">Riwayat Organisasi</p>
                                <span className="text-slate-500 text-sm">*maximal 10 list</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                {formHalamanProfil.data.riwayat_organisasi.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <input
                                            type="text"
                                            className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                            placeholder="Tuliskan riwayat organisasi"
                                            value={item}
                                            onChange={(e) => {
                                                const newRiwayatOrganisasi = [...formHalamanProfil.data.riwayat_organisasi];
                                                newRiwayatOrganisasi[index] = e.target.value;
                                                formHalamanProfil.setData("riwayat_organisasi", newRiwayatOrganisasi);
                                            }}
                                            required
                                        />
                                        <div
                                            className="w-[52px] h-[52px] border-2 border-red-400 grid place-items-center rounded-xl hover:bg-red-100 transition-colors cursor-pointer"
                                            onClick={() => {
                                                const newRiwayatOrganisasi = formHalamanProfil.data.riwayat_organisasi.filter((_, i) => i !== index);
                                                formHalamanProfil.setData("riwayat_organisasi", newRiwayatOrganisasi);
                                            }}
                                        >
                                            <TbTrash fontSize={24} className="text-red-400" />
                                        </div>
                                    </div>
                                ))}
                                {formHalamanProfil.data.riwayat_organisasi.length < 10 && (
                                    <div
                                        className="px-4 py-3 flex w-full items-center justify-center gap-3 rounded-xl border-2 border-yellow-400 hover:bg-yellow-50 transition-colors cursor-pointer"
                                        onClick={() => {
                                            const newRiwayatOrganisasi = [...formHalamanProfil.data.riwayat_organisasi, ""];
                                            formHalamanProfil.setData("riwayat_organisasi", newRiwayatOrganisasi);
                                        }}
                                    >
                                        <span className="font-medium text-yellow-400">Tambah Riwayat Organisasi</span>
                                        <TbPlus fontSize={24} className="text-yellow-400" />
                                    </div>
                                )}
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
                        {formHalamanProfil.data.penghargaan.map((item, index) => (
                            <div key={index}>
                                <div className="flex items-center gap-2 mb-3">
                                    <div
                                        className="w-[32px] h-[32px] border-2 border-red-400 grid place-items-center rounded-lg hover:bg-red-100 transition-colors cursor-pointer"
                                        onClick={() => {
                                            const newPenghargaan = formHalamanProfil.data.penghargaan.filter((_, i) => i !== index);
                                            formHalamanProfil.setData("penghargaan", newPenghargaan);
                                        }}
                                    >
                                        <TbTrash fontSize={16} className="text-red-400" />
                                    </div>
                                    <p className="font-semibold text-slate-800 text-lg">Penghargaan {index + 1}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    {formHalamanProfil.data.penghargaan[index].gambar ? (
                                        <>
                                            {checkSelectedPenghargaanImage(index) ? (
                                                <div className="relative h-[240px] border-2 border-slate-400 flex flex-col items-center justify-center gap-3 rounded-xl cursor-pointer bg-slate-100 grow group">
                                                    <div className="absolute h-full w-full bg-black bg-opacity-10 hidden place-content-center group-hover:grid">
                                                        <TbX
                                                            className="text-red-500 cursor-pointer p-2 hover:bg-red-200 rounded-xl"
                                                            onClick={() => {
                                                                const newPenghargaanList = [...formHalamanProfil.data.penghargaan];
                                                                newPenghargaanList[index].gambar = null;
                                                                formHalamanProfil.setData("penghargaan", newPenghargaanList);
                                                                setSelectedPenghargaanImage((prevImages) =>
                                                                    prevImages.filter((item) => item.indexGambar !== index)
                                                                );
                                                            }}
                                                            fontSize={82}
                                                        />
                                                    </div>
                                                    <img
                                                        src={checkSelectedPenghargaanImage(index).gambar}
                                                        alt="gambar"
                                                        className="h-full object-cover"
                                                    />
                                                </div>
                                            ) : (
                                                <label className="relative h-[240px] border-2 border-slate-400 flex flex-col items-center justify-center gap-3 rounded-xl cursor-pointer bg-slate-100 grow group">
                                                    <div className="absolute h-full w-full bg-white bg-opacity-20 hidden place-content-center group-hover:grid">
                                                        <TbEditCircle
                                                            className="text-yellow-500 cursor-pointer p-2 hover:bg-yellow-200 rounded-xl"
                                                            fontSize={82}
                                                        />
                                                    </div>
                                                    <img
                                                        src={
                                                            formHalamanProfil.data.penghargaan[index].gambar &&
                                                            "/storage/penghargaanImages/" + formHalamanProfil.data.penghargaan[index].gambar
                                                        }
                                                        alt="gambar"
                                                        className="h-full object-cover"
                                                    />
                                                    <input
                                                        type="file"
                                                        className="hidden"
                                                        accept="image/*"
                                                        onChange={(e) => {
                                                            const file = e.target.files[0];
                                                            if (file) {
                                                                const reader = new FileReader();
                                                                reader.onloadend = () => {
                                                                    const newPenghargaanList = [...formHalamanProfil.data.penghargaan];
                                                                    newPenghargaanList[index].gambar = file;
                                                                    formHalamanProfil.setData("penghargaan", newPenghargaanList);
                                                                    setSelectedPenghargaanImage([
                                                                        ...selectedPenghargaanImage,
                                                                        {
                                                                            indexGambar: index,
                                                                            gambar: reader.result,
                                                                        },
                                                                    ]);
                                                                };
                                                                reader.readAsDataURL(file);
                                                            }
                                                        }}
                                                    />
                                                </label>
                                            )}
                                        </>
                                    ) : (
                                        <label className="relative h-[240px] border-2 border-slate-400 flex flex-col items-center justify-center gap-3 rounded-xl cursor-pointer bg-slate-100 grow group">
                                            <GoImage fontSize={64} className="text-slate-500" />
                                            <div className="flex flex-col items-center">
                                                <span className="font-semibold text-slate-500">Masukkan Gambar</span>
                                                <span className="text-slate-500 text-sm">*Disarankan gambar dengan rasio 16:9</span>
                                            </div>
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={(e) => {
                                                    const file = e.target.files[0];
                                                    if (file) {
                                                        const reader = new FileReader();
                                                        reader.onloadend = () => {
                                                            const newPenghargaanList = [...formHalamanProfil.data.penghargaan];
                                                            newPenghargaanList[index].gambar = file;
                                                            formHalamanProfil.setData("penghargaan", newPenghargaanList);
                                                            setSelectedPenghargaanImage([
                                                                ...selectedPenghargaanImage,
                                                                {
                                                                    indexGambar: index,
                                                                    gambar: reader.result,
                                                                },
                                                            ]);
                                                        };
                                                        reader.readAsDataURL(file);
                                                    }
                                                }}
                                                required
                                            />
                                        </label>
                                    )}
                                    <div className="flex flex-col gap-3 grow">
                                        <input
                                            type="text"
                                            className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                            placeholder="Judul Penghargaan"
                                            value={formHalamanProfil.data.penghargaan[index].judul}
                                            onChange={(e) => {
                                                const newPenghargaanList = [...formHalamanProfil.data.penghargaan];
                                                newPenghargaanList[index].judul = e.target.value;
                                                formHalamanProfil.setData("penghargaan", newPenghargaanList);
                                            }}
                                            required
                                        />
                                        <textarea
                                            name="content-profil-1"
                                            className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl min-h-[178px]"
                                            placeholder="Deskripsi Penghargaan"
                                            value={formHalamanProfil.data.penghargaan[index].deskripsi}
                                            onChange={(e) => {
                                                const newPenghargaanList = [...formHalamanProfil.data.penghargaan];
                                                newPenghargaanList[index].deskripsi = e.target.value;
                                                formHalamanProfil.setData("penghargaan", newPenghargaanList);
                                            }}
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <span className="font-medium text-slate-500">*maximal 6</span>
                        {formHalamanProfil.data.penghargaan.length < 6 && (
                            <div
                                className="px-4 py-3 flex w-full items-center justify-center gap-3 rounded-xl border-2 border-yellow-400 hover:bg-yellow-50 transition-colors cursor-pointer"
                                onClick={() => {
                                    const newPenghargaan = [
                                        ...formHalamanProfil.data.penghargaan,
                                        {
                                            gambar: null,
                                            judul: "",
                                            deskripsi: "",
                                        },
                                    ];
                                    formHalamanProfil.setData("penghargaan", newPenghargaan);
                                }}
                            >
                                <span className="font-medium text-yellow-400">Tambah Penghargaan</span>
                                <TbPlus fontSize={24} className="text-yellow-400" />
                            </div>
                        )}
                    </div>
                </div>

                {/* ACTION BUTTON */}
                <div className="col-span-6 flex justify-end">
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-3 px-4 py-3 bg-green-400 border-2 border-green-200 rounded-xl font-semibold text-white hover:bg-green-500 transition-colors"
                    >
                        Simpan Perubahan <FiSave fontSize={24} />
                    </button>
                </div>
            </form>
        </main>
    );
};

export default HalamanProfil;
