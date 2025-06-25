import { TbPlus, TbTrash } from "react-icons/tb";
import AdminSidebar from "../../Layout/AdminSidebar";
import Select from "react-select";
import { FiSave } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCurrentRoute } from "../../Redux/slice";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { FaRegNewspaper } from "react-icons/fa6";
import route from "ziggy-js";
import toast, { Toaster } from "react-hot-toast";

const HalamanBeranda = ({ dataHerosection, dataCarouselBerita, dataYoutube, dataMediaSocial, dataBerita }) => {
    const { flash } = usePage().props;

    useEffect(() => {
        const { success, error, info } = flash;
        if (success) toast.success(success);
        if (error) toast.error(error);
        if (info) toast(info);
    }, [flash]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentRoute("HalamanBeranda"));
    }, []);

    const db_judul = dataHerosection ? dataHerosection.find((item) => item.type == "judulBeranda").content : '';
    const db_subJudul = dataHerosection ? dataHerosection.find((item) => item.type == "subJudulBeranda").content : '';
    const db_youtubeUtama = dataYoutube ? dataYoutube.find((item) => item.type == "utama").link : '';
    const db_youtubeLainnya = dataYoutube.filter((item) => item.type == "lainnya");
    const db_carouselBerita = dataCarouselBerita.map((item) => item.berita_id);

    const formHalamanBeranda = useForm({
        hero_section: {
            judul: db_judul,
            subJudul: db_subJudul,
            carouselBerita: db_carouselBerita,
        },
        youtube: {
            videoUtama: db_youtubeUtama,
            videoLainnya: db_youtubeLainnya,
        },
        media_social: dataMediaSocial,
    });

    console.log(formHalamanBeranda.data);
    

    let carouselBeritaOption = [];
    dataBerita.forEach((berita) => {
        carouselBeritaOption.push({ value: berita.id, label: berita.judul, gambar: berita.gambar });
    });

    const carouselBeritaSelectFormat = ({ label, gambar }) => (
        <div className="w-full flex items-center gap-4">
            <img src={"/storage/beritaImages/" + gambar} alt="image" className="w-[160px] h-[90px] object-cover rounded-lg" />
            <h1 className="text-slate-800 text-xl font-semibold whitespace-normal">{label}</h1>
        </div>
    );

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (formHalamanBeranda.data.hero_section.carouselBerita.length == 0) {
            toast.error("Carousel Berita Tidak Boleh Kosong!");
        } else if (
            !formHalamanBeranda.data.media_social[0].isVisible &&
            !formHalamanBeranda.data.media_social[1].isVisible &&
            !formHalamanBeranda.data.media_social[2].isVisible &&
            !formHalamanBeranda.data.media_social[3].isVisible &&
            !formHalamanBeranda.data.media_social[4].isVisible
        ) {
            toast.error("Media Sosial Tidak Boleh Kosong!");
        } else if (formHalamanBeranda.data.youtube.videoLainnya.length == 0) {
            toast.error("Video Lainnya Setidaknya Berisikan Satu Video!");
        } else {
            formHalamanBeranda.post(route("AdminUpdateHalamanBeranda"));
        }
    };

    return (
        <main className="ml-[300px] bg-slate-100 min-h-screen p-12">
            {/* SIDEBAR */}
            <AdminSidebar />

            {/* TITLE */}
            <Head>
                <title>Halaman Beranda</title>
            </Head>

            <Toaster />

            <h1 className="font-bold text-3xl text-slate-800 mb-8">Pengaturan Halaman Beranda</h1>
            <form className="grid grid-cols-6 gap-8" onSubmit={handleOnSubmit}>
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
                                    value={formHalamanBeranda.data.hero_section.subJudul}
                                    onChange={(e) =>
                                        formHalamanBeranda.setData((prevData) => ({
                                            ...prevData,
                                            hero_section: {
                                                ...prevData.hero_section,
                                                subJudul: e.target.value,
                                            },
                                        }))
                                    }
                                    id="subJudul"
                                    placeholder="Masukkan Sub Judul"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-3 grow">
                                <label className="font-medium text-slate-800" htmlFor="judul">
                                    Judul
                                </label>
                                <input
                                    type="text"
                                    className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl"
                                    value={formHalamanBeranda.data.hero_section.judul}
                                    onChange={(e) =>
                                        formHalamanBeranda.setData((prevData) => ({
                                            ...prevData,
                                            hero_section: {
                                                ...prevData.hero_section,
                                                judul: e.target.value,
                                            },
                                        }))
                                    }
                                    id="judul"
                                    placeholder="Masukkan Judul"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium text-slate-800 mb-1">Carousel Berita</label>
                            <p className="text-sm font-medium text-slate-400">
                                *Thumbnail berita akan ditampilkan pada carousel di halaman beranda (maximal 5 berita)
                            </p>
                            {dataBerita == 0 ? (
                                <div className="px-8 py-12 flex flex-col items-center justify-center">
                                    <FaRegNewspaper fontSize={64} className="text-slate-500 mb-4" />
                                    <div className="flex flex-col items-center">
                                        <p className="text-slate-500 font-semibold text-2xl text-center mb-4">Belum Ada Berita yang Dibuat</p>
                                        <Link
                                            href={route("BeritaIndexAdmin")}
                                            className="cursor-pointer w-fit px-4 py-3 flex items-center justify-center gap-3 rounded-xl border-2 border-yellow-400 hover:bg-yellow-50 transition-colors"
                                        >
                                            <span className="font-medium text-yellow-400">Buat Berita</span>
                                            <TbPlus fontSize={24} className="text-yellow-400" />
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-4 mt-3">
                                    {formHalamanBeranda.data.hero_section.carouselBerita.map((item, index) => {
                                        const filteredOptions = carouselBeritaOption.filter((option) => {
                                            return !formHalamanBeranda.data.hero_section.carouselBerita.includes(option.value);
                                        });
                                        return (
                                            <div className="flex w-full gap-3" key={index}>
                                                <Select
                                                    classNamePrefix="react-select"
                                                    className="w-full"
                                                    placeholder="Pilih Berita Yang Ingin Ditampilkan"
                                                    options={filteredOptions}
                                                    formatOptionLabel={carouselBeritaSelectFormat}
                                                    value={carouselBeritaOption.find((opt) => opt.value === item)}
                                                    onChange={(selected) => {
                                                        const newCarouselBerita = [...formHalamanBeranda.data.hero_section.carouselBerita];
                                                        newCarouselBerita[index] = selected.value;
                                                        formHalamanBeranda.setData("hero_section", {
                                                            ...formHalamanBeranda.data.hero_section,
                                                            carouselBerita: newCarouselBerita,
                                                        });
                                                    }}
                                                    required
                                                />
                                                <div
                                                    className="w-[44px] h-[44px] border-2 border-red-400 grid place-items-center rounded-xl hover:bg-red-100 transition-colors cursor-pointer"
                                                    onClick={() => {
                                                        const newCarouselBerita = formHalamanBeranda.data.hero_section.carouselBerita.filter(
                                                            (_, i) => i !== index
                                                        );
                                                        formHalamanBeranda.setData("hero_section", {
                                                            ...formHalamanBeranda.data.hero_section,
                                                            carouselBerita: newCarouselBerita,
                                                        });
                                                    }}
                                                >
                                                    <TbTrash fontSize={24} className="text-red-400" />
                                                </div>
                                            </div>
                                        );
                                    })}
                                    {formHalamanBeranda.data.hero_section.carouselBerita.length < 5 && (
                                        <div
                                            className="cursor-pointer px-4 py-3 flex w-full items-center justify-center gap-3 rounded-xl border-2 border-yellow-400 hover:bg-yellow-50 transition-colors"
                                            onClick={() => {
                                                const newCarouselBerita = [...formHalamanBeranda.data.hero_section.carouselBerita, ""];
                                                formHalamanBeranda.setData("hero_section", {
                                                    ...formHalamanBeranda.data.hero_section,
                                                    carouselBerita: newCarouselBerita,
                                                });
                                            }}
                                        >
                                            <span className="font-medium text-yellow-400">Tambah Berita</span>
                                            <TbPlus fontSize={24} className="text-yellow-400" />
                                        </div>
                                    )}
                                </div>
                            )}
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
                                value={formHalamanBeranda.data.youtube.videoUtama}
                                onChange={(e) =>
                                    formHalamanBeranda.setData((prevData) => ({
                                        ...prevData,
                                        youtube: {
                                            ...prevData.youtube,
                                            videoUtama: e.target.value,
                                        },
                                    }))
                                }
                                id="yt_utama"
                                placeholder="Link Youtube (Contoh: https://youtu.be/Rc4t5dCBsQE?si=jIQmTDLVSf8MSfN8)"
                                required
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
                                {formHalamanBeranda.data.youtube.videoLainnya.map((item, index) => (
                                    <div className="flex items-center gap-3" key={index}>
                                        <input
                                            type="text"
                                            className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                            value={formHalamanBeranda.data.youtube.videoLainnya[index].nama}
                                            onChange={(e) => {
                                                const newVideoLainnya = [...formHalamanBeranda.data.youtube.videoLainnya];
                                                newVideoLainnya[index].nama = e.target.value;
                                                formHalamanBeranda.setData((prevData) => ({
                                                    ...prevData,
                                                    youtube: {
                                                        ...prevData.youtube,
                                                        videoLainnya: newVideoLainnya,
                                                    },
                                                }));
                                            }}
                                            placeholder="Masukkan Nama Video"
                                            required
                                        />
                                        <input
                                            type="url"
                                            className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl grow"
                                            value={formHalamanBeranda.data.youtube.videoLainnya[index].link}
                                            onChange={(e) => {
                                                const newVideoLainnya = [...formHalamanBeranda.data.youtube.videoLainnya];
                                                newVideoLainnya[index].link = e.target.value;
                                                formHalamanBeranda.setData((prevData) => ({
                                                    ...prevData,
                                                    youtube: {
                                                        ...prevData.youtube,
                                                        videoLainnya: newVideoLainnya,
                                                    },
                                                }));
                                            }}
                                            placeholder="Masukkan Link Youtube"
                                            required
                                        />
                                        <div
                                            className="w-[52px] h-[52px] border-2 border-red-400 grid place-items-center rounded-xl hover:bg-red-100 transition-colors cursor-pointer"
                                            onClick={() => {
                                                const newVideoLainnya = formHalamanBeranda.data.youtube.videoLainnya.filter((_, i) => i !== index);
                                                formHalamanBeranda.setData("youtube", {
                                                    ...formHalamanBeranda.data.youtube,
                                                    videoLainnya: newVideoLainnya,
                                                });
                                            }}
                                        >
                                            <TbTrash fontSize={24} className="text-red-400" />
                                        </div>
                                    </div>
                                ))}
                                {formHalamanBeranda.data.youtube.videoLainnya.length < 5 && (
                                    <div
                                        className="cursor-pointer px-4 py-3 flex w-full items-center justify-center gap-3 rounded-xl border-2 border-yellow-400 hover:bg-yellow-50 transition-colors"
                                        onClick={() => {
                                            const newVideoLainnya = [...formHalamanBeranda.data.youtube.videoLainnya, { nama: "", link: "" }];
                                            formHalamanBeranda.setData("youtube", {
                                                ...formHalamanBeranda.data.youtube,
                                                videoLainnya: newVideoLainnya,
                                            });
                                        }}
                                    >
                                        <span className="font-medium text-yellow-400">Tambah Video</span>
                                        <TbPlus fontSize={24} className="text-yellow-400" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* MEDIA SOCIAL */}
                <div className="col-span-6 bg-white rounded-3xl shadow-lg">
                    <div className="px-8 py-6 border-b-2 border-slate-200">
                        <h1 className="text-2xl text-slate-500 font-semibold">Media Sosial</h1>
                    </div>
                    <div className="px-8 py-6 flex gap-4">
                        {/* FACEBOOK */}
                        <div className="flex flex-col grow gap-3">
                            <div className="flex items-center gap-2">
                                <label className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        className="checkbox-native"
                                        checked={formHalamanBeranda.data.media_social[0].isVisible}
                                        onChange={(e) =>
                                            formHalamanBeranda.setData("media_social", [
                                                {
                                                    ...formHalamanBeranda.data.media_social[0],
                                                    isVisible: e.target.checked,
                                                },
                                                ...formHalamanBeranda.data.media_social.slice(1),
                                            ])
                                        }
                                    />
                                    <div className="checkbox-custom"></div>
                                </label>
                                <label
                                    className={`font-semibold text-lg ${
                                        formHalamanBeranda.data.media_social[0].isVisible ? "text-slate-800" : "text-slate-400"
                                    }`}
                                >
                                    Facebook
                                </label>
                            </div>
                            <input
                                type="text"
                                className={`px-4 py-3 border-2 border-slate-200 bg-slate-100 rounded-xl grow disabled:text-slate-400 ${
                                    !formHalamanBeranda.data.media_social[0].isVisible ? "border-slate-200" : "border-slate-400"
                                }`}
                                placeholder="Nama Facebook"
                                value={formHalamanBeranda.data.media_social[0].nama}
                                onChange={(e) =>
                                    formHalamanBeranda.setData("media_social", [
                                        {
                                            ...formHalamanBeranda.data.media_social[0],
                                            nama: e.target.value,
                                        },
                                        ...formHalamanBeranda.data.media_social.slice(1),
                                    ])
                                }
                                disabled={!formHalamanBeranda.data.media_social[0].isVisible}
                                required
                            />
                            <input
                                type="url"
                                className={`px-4 py-3 border-2 border-slate-200 bg-slate-100 rounded-xl grow disabled:text-slate-400 ${
                                    !formHalamanBeranda.data.media_social[0].isVisible ? "border-slate-200" : "border-slate-400"
                                }`}
                                placeholder="Link Facebook"
                                value={formHalamanBeranda.data.media_social[0].link}
                                onChange={(e) =>
                                    formHalamanBeranda.setData("media_social", [
                                        {
                                            ...formHalamanBeranda.data.media_social[0],
                                            link: e.target.value,
                                        },
                                        ...formHalamanBeranda.data.media_social.slice(1),
                                    ])
                                }
                                disabled={!formHalamanBeranda.data.media_social[0].isVisible}
                                required
                            />
                        </div>
                        {/* INSTAGRAM */}
                        <div className="flex flex-col grow gap-3">
                            <div className="flex items-center gap-2">
                                <label className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        className="checkbox-native"
                                        checked={formHalamanBeranda.data.media_social[1].isVisible}
                                        onChange={(e) =>
                                            formHalamanBeranda.setData("media_social", [
                                                ...formHalamanBeranda.data.media_social.slice(0, 1),
                                                {
                                                    ...formHalamanBeranda.data.media_social[1],
                                                    isVisible: e.target.checked,
                                                },
                                                ...formHalamanBeranda.data.media_social.slice(2),
                                            ])
                                        }
                                    />
                                    <div className="checkbox-custom"></div>
                                </label>
                                <label
                                    className={`font-semibold text-lg ${
                                        formHalamanBeranda.data.media_social[1].isVisible ? "text-slate-800" : "text-slate-400"
                                    }`}
                                >
                                    Instagram
                                </label>
                            </div>
                            <input
                                type="text"
                                className={`px-4 py-3 border-2 border-slate-200 bg-slate-100 rounded-xl grow disabled:text-slate-400 ${
                                    !formHalamanBeranda.data.media_social[1].isVisible ? "border-slate-200" : "border-slate-400"
                                }`}
                                placeholder="Nama Instagram"
                                value={formHalamanBeranda.data.media_social[1].nama}
                                onChange={(e) =>
                                    formHalamanBeranda.setData("media_social", [
                                        ...formHalamanBeranda.data.media_social.slice(0, 1),
                                        {
                                            ...formHalamanBeranda.data.media_social[1],
                                            nama: e.target.value,
                                        },
                                        ...formHalamanBeranda.data.media_social.slice(2),
                                    ])
                                }
                                disabled={!formHalamanBeranda.data.media_social[1].isVisible}
                                required
                            />
                            <input
                                type="url"
                                className={`px-4 py-3 border-2 border-slate-200 bg-slate-100 rounded-xl grow disabled:text-slate-400 ${
                                    !formHalamanBeranda.data.media_social[1].isVisible ? "border-slate-200" : "border-slate-400"
                                }`}
                                placeholder="Link Instagram"
                                value={formHalamanBeranda.data.media_social[1].link}
                                onChange={(e) =>
                                    formHalamanBeranda.setData("media_social", [
                                        ...formHalamanBeranda.data.media_social.slice(0, 1),
                                        {
                                            ...formHalamanBeranda.data.media_social[1],
                                            link: e.target.value,
                                        },
                                        ...formHalamanBeranda.data.media_social.slice(2),
                                    ])
                                }
                                disabled={!formHalamanBeranda.data.media_social[1].isVisible}
                                required
                            />
                        </div>
                        {/* TWITTER */}
                        <div className="flex flex-col grow gap-3">
                            <div className="flex items-center gap-2">
                                <label className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        className="checkbox-native"
                                        checked={formHalamanBeranda.data.media_social[2].isVisible}
                                        onChange={(e) =>
                                            formHalamanBeranda.setData("media_social", [
                                                ...formHalamanBeranda.data.media_social.slice(0, 2),
                                                {
                                                    ...formHalamanBeranda.data.media_social[2],
                                                    isVisible: e.target.checked,
                                                },
                                                ...formHalamanBeranda.data.media_social.slice(3),
                                            ])
                                        }
                                    />
                                    <div className="checkbox-custom"></div>
                                </label>
                                <label
                                    className={`font-semibold text-lg ${
                                        formHalamanBeranda.data.media_social[2].isVisible ? "text-slate-800" : "text-slate-400"
                                    }`}
                                >
                                    Twitter
                                </label>
                            </div>
                            <input
                                type="text"
                                className={`px-4 py-3 border-2 border-slate-200 bg-slate-100 rounded-xl grow disabled:text-slate-400 ${
                                    !formHalamanBeranda.data.media_social[2].isVisible ? "border-slate-200" : "border-slate-400"
                                }`}
                                placeholder="Name Twitter"
                                value={formHalamanBeranda.data.media_social[2].nama}
                                onChange={(e) =>
                                    formHalamanBeranda.setData("media_social", [
                                        ...formHalamanBeranda.data.media_social.slice(0, 2),
                                        {
                                            ...formHalamanBeranda.data.media_social[2],
                                            nama: e.target.value,
                                        },
                                        ...formHalamanBeranda.data.media_social.slice(3),
                                    ])
                                }
                                disabled={!formHalamanBeranda.data.media_social[2].isVisible}
                                required
                            />
                            <input
                                type="url"
                                className={`px-4 py-3 border-2 border-slate-200 bg-slate-100 rounded-xl grow disabled:text-slate-400 ${
                                    !formHalamanBeranda.data.media_social[2].isVisible ? "border-slate-200" : "border-slate-400"
                                }`}
                                placeholder="Link Twitter"
                                value={formHalamanBeranda.data.media_social[2].link}
                                onChange={(e) =>
                                    formHalamanBeranda.setData("media_social", [
                                        ...formHalamanBeranda.data.media_social.slice(0, 2),
                                        {
                                            ...formHalamanBeranda.data.media_social[2],
                                            link: e.target.value,
                                        },
                                        ...formHalamanBeranda.data.media_social.slice(3),
                                    ])
                                }
                                disabled={!formHalamanBeranda.data.media_social[2].isVisible}
                                required
                            />
                        </div>
                        {/* EMAIL */}
                        <div className="flex flex-col grow gap-3">
                            <div className="flex items-center gap-2">
                                <label className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        className="checkbox-native"
                                        checked={formHalamanBeranda.data.media_social[3].isVisible}
                                        onChange={(e) =>
                                            formHalamanBeranda.setData("media_social", [
                                                ...formHalamanBeranda.data.media_social.slice(0, 3),
                                                {
                                                    ...formHalamanBeranda.data.media_social[3],
                                                    isVisible: e.target.checked,
                                                },
                                                ...formHalamanBeranda.data.media_social.slice(4),
                                            ])
                                        }
                                    />
                                    <div className="checkbox-custom"></div>
                                </label>
                                <label
                                    className={`font-semibold text-lg ${
                                        formHalamanBeranda.data.media_social[3].isVisible ? "text-slate-800" : "text-slate-400"
                                    }`}
                                >
                                    Email
                                </label>
                            </div>
                            <input
                                type="email"
                                className={`px-4 py-3 border-2 border-slate-200 bg-slate-100 rounded-xl disabled:text-slate-400 h-fit w-full ${
                                    !formHalamanBeranda.data.media_social[3].isVisible ? "border-slate-200" : "border-slate-400"
                                }`}
                                value={formHalamanBeranda.data.media_social[3].link}
                                onChange={(e) =>
                                    formHalamanBeranda.setData("media_social", [
                                        ...formHalamanBeranda.data.media_social.slice(0, 3),
                                        {
                                            ...formHalamanBeranda.data.media_social[3],
                                            link: e.target.value,
                                        },
                                        ...formHalamanBeranda.data.media_social.slice(4),
                                    ])
                                }
                                placeholder="Masukkan Email"
                                disabled={!formHalamanBeranda.data.media_social[3].isVisible}
                                required
                            />
                        </div>
                        {/* YOUTUBE */}
                        <div className="flex flex-col grow gap-3">
                            <div className="flex items-center gap-2">
                                <label className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        className="checkbox-native"
                                        checked={formHalamanBeranda.data.media_social[4].isVisible}
                                        onChange={(e) =>
                                            formHalamanBeranda.setData("media_social", [
                                                ...formHalamanBeranda.data.media_social.slice(0, 4),
                                                {
                                                    ...formHalamanBeranda.data.media_social[4],
                                                    isVisible: e.target.checked,
                                                },
                                            ])
                                        }
                                    />
                                    <div className="checkbox-custom"></div>
                                </label>
                                <label
                                    className={`font-semibold text-lg ${
                                        formHalamanBeranda.data.media_social[4].isVisible ? "text-slate-800" : "text-slate-400"
                                    }`}
                                >
                                    Youtube
                                </label>
                            </div>
                            <input
                                type="text"
                                className={`px-4 py-3 border-2 border-slate-200 bg-slate-100 rounded-xl grow disabled:text-slate-400 ${
                                    !formHalamanBeranda.data.media_social[4].isVisible ? "border-slate-200" : "border-slate-400"
                                }`}
                                value={formHalamanBeranda.data.media_social[4].nama}
                                onChange={(e) =>
                                    formHalamanBeranda.setData("media_social", [
                                        ...formHalamanBeranda.data.media_social.slice(0, 4),
                                        {
                                            ...formHalamanBeranda.data.media_social[4],
                                            nama: e.target.value,
                                        },
                                    ])
                                }
                                placeholder="Nama Youtube"
                                disabled={!formHalamanBeranda.data.media_social[4].isVisible}
                                required
                            />
                            <input
                                type="url"
                                className={`px-4 py-3 border-2 border-slate-200 bg-slate-100 rounded-xl grow disabled:text-slate-400 ${
                                    !formHalamanBeranda.data.media_social[4].isVisible ? "border-slate-200" : "border-slate-400"
                                }`}
                                placeholder="Link Youtube"
                                value={formHalamanBeranda.data.media_social[4].link}
                                onChange={(e) =>
                                    formHalamanBeranda.setData("media_social", [
                                        ...formHalamanBeranda.data.media_social.slice(0, 4),
                                        {
                                            ...formHalamanBeranda.data.media_social[4],
                                            link: e.target.value,
                                        },
                                    ])
                                }
                                disabled={!formHalamanBeranda.data.media_social[4].isVisible}
                                required
                            />
                        </div>
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

export default HalamanBeranda;
