import { IoIosArrowBack } from "react-icons/io";
import AdminSidebar from "../../../Layout/AdminSidebar";
import { Head, Link as InertiaLink, useForm, usePage } from "@inertiajs/react";
import Select from "react-select";
import { GoImage } from "react-icons/go";
import { useEffect, useMemo, useRef, useState } from "react";
import { FiSave } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setCurrentRoute } from "../../../Redux/slice";
import { TbX } from "react-icons/tb";
import toast, { Toaster } from "react-hot-toast";
import YooptaEditor, { createYooptaEditor } from "@yoopta/editor";
import Paragraph from "@yoopta/paragraph";
import { HeadingOne, HeadingTwo, HeadingThree } from "@yoopta/headings";
import { NumberedList, BulletedList } from "@yoopta/lists";
import ActionMenuList, { DefaultActionMenuRender } from "@yoopta/action-menu-list";
import Toolbar, { DefaultToolbarRender } from "@yoopta/toolbar";
import LinkTool, { DefaultLinkToolRender } from "@yoopta/link-tool";
import Link from "@yoopta/link";
import { Bold, Italic, CodeMark, Underline, Strike, Highlight } from "@yoopta/marks";

const BeritaCreateAdmin = () => {
    const { flash } = usePage().props;

    useEffect(() => {
        const { success, error, info } = flash;
        if (success) toast.success(success);
        if (error) toast.error(error);
        if (info) toast(info);
    }, [flash]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentRoute("Berita"));
    }, []);

    const [selectedImage, setSelectedImage] = useState(null);
    const [contentLine, setContentLine] = useState(0);

    const formBerita = useForm({
        judul: "",
        kategori: "",
        gambar: null,
        content: null,
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                formBerita.setData("gambar", file);
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const editor = useMemo(() => createYooptaEditor(), []);
    const plugins = [Paragraph, HeadingOne, HeadingTwo, HeadingThree, NumberedList, BulletedList, Link];
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
    const MARKS = [Bold, Italic, CodeMark, Underline, Strike, Highlight];

    const kategoriOptions = [
        { value: "Agenda", label: "Agenda" },
        { value: "Berita", label: "Berita" },
    ];

    function handleEditorChange(value) {
        formBerita.setData((prevState) => ({
            ...prevState,
            content: JSON.stringify(value),
        }));
        setContentLine(Object.values(value).length);
    }

    useEffect(() => {
        editor.on("change", handleEditorChange);
        return () => {
            editor.off("change", handleEditorChange);
        };
    }, [editor]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (contentLine < 2) {
            toast.error("Isi Berita Minimal 2 block!");
        } else if (!selectedImage) {
            toast.error("Gambar harus diisi!");
        } else {
            formBerita.post(route("BeritaStoreAdmin"));
        }
    };

    return (
        <main className="ml-[300px] bg-slate-100 min-h-screen p-12">
            <Toaster />

            {/* TITLE */}
            <Head>
                <title>Berita & Agenda Create</title>
            </Head>

            {/* SIDEBAR */}
            <AdminSidebar />

            <div className="flex items-center gap-6 mb-8">
                <InertiaLink href={route("BeritaIndexAdmin")} className="p-2 text-slate-500 hover:bg-slate-200 rounded-lg transition-colors">
                    <IoIosArrowBack fontSize={32} />
                </InertiaLink>
                <h1 className="font-bold text-3xl text-slate-800">Buat Berita / Agenda Baru</h1>
            </div>
            <div className="grid grid-cols-6 gap-8">
                <form className="col-span-6 bg-white rounded-3xl shadow-lg px-8 py-6 flex flex-col gap-4" onSubmit={handleOnSubmit}>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-3 grow">
                            <label className="font-medium text-slate-800" htmlFor="judul">
                                Judul
                            </label>
                            <input
                                type="text"
                                className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl"
                                placeholder="Masukkan judul berita / agenda"
                                id="judul"
                                onChange={(e) => formBerita.setData("judul", e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3 grow">
                            <label className="font-medium text-slate-800" htmlFor="judul">
                                Kategori
                            </label>
                            <Select
                                classNamePrefix="react-select"
                                className="w-full"
                                options={kategoriOptions}
                                placeholder="Pilih Kategori"
                                onChange={(selected) => formBerita.setData("kategori", selected && selected.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="mb-3 text-slate-800 font-medium">Gambar</p>
                        {selectedImage ? (
                            <div className="max-h-[512px] relative overflow-hidden h-full border-2 border-slate-400 flex flex-col items-center justify-center gap-3 rounded-xl bg-slate-100 grow group">
                                <div className="absolute h-full w-full bg-black bg-opacity-10 hidden place-content-center group-hover:grid">
                                    <TbX
                                        className="text-red-500 cursor-pointer p-2 hover:bg-red-200 rounded-xl"
                                        onClick={() => setSelectedImage(null)}
                                        fontSize={82}
                                    />
                                </div>
                                <img src={selectedImage} alt="gambar" className="h-full object-cover" />
                            </div>
                        ) : (
                            <label className="h-[240px] border-2 border-slate-400 flex flex-col items-center justify-center gap-3 rounded-xl cursor-pointer bg-slate-100 grow">
                                <GoImage fontSize={64} className="text-slate-500" />
                                <div className="flex flex-col items-center">
                                    <span className="font-semibold text-slate-500">Masukkan Gambar</span>
                                    <span className="text-slate-500 text-sm">*Disarankan gambar dengan rasio 16:9</span>
                                </div>
                                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" required />
                            </label>
                        )}
                    </div>
                    <div>
                        <p className="mb-3 text-slate-800 font-medium">Content</p>
                        <div className="border-2 border-slate-400 rounded-xl min-h-[200px] px-14 py-4">
                            <YooptaEditor editor={editor} plugins={plugins} tools={TOOLS} marks={MARKS} placeholder="Tuliskan Isi Berita..." />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-3 px-4 py-3 bg-green-400 border-2 border-green-200 rounded-xl font-semibold text-white hover:bg-green-500 transition-colors"
                        >
                            Buat Berita <FiSave fontSize={24} />
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default BeritaCreateAdmin;
