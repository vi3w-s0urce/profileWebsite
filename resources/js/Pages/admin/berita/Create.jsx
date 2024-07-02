import { IoIosArrowBack } from "react-icons/io";
import AdminSidebar from "../../../Layout/AdminSidebar";
import { Link } from "@inertiajs/react";
import Select from "react-select";
import { GoImage } from "react-icons/go";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useEffect, useState } from "react";
import { FiSave } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setCurrentRoute } from "../../../Redux/slice";

const BeritaCreate = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentRoute("Berita"));
    }, []);

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    return (
        <main className="ml-[300px] bg-slate-100 min-h-screen p-12">
            {/* SIDEBAR */}
            <AdminSidebar />

            <div className="flex items-center gap-6 mb-8">
                <Link href={route('BeritaIndex')} className="p-2 text-slate-500 hover:bg-slate-200 rounded-lg transition-colors">
                    <IoIosArrowBack fontSize={32} />
                </Link>
                <h1 className="font-bold text-3xl text-slate-800">Buat Berita / Agenda Baru</h1>
            </div>
            <div className="grid grid-cols-6 gap-8">
                <div className="col-span-6 bg-white rounded-3xl shadow-lg px-8 py-6 flex flex-col gap-4">
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
                            />
                        </div>
                        <div className="flex flex-col gap-3 grow">
                            <label className="font-medium text-slate-800" htmlFor="judul">
                                Kategori
                            </label>
                            <Select classNamePrefix="react-select" className="w-full" />
                        </div>
                    </div>
                    <div>
                        <p className="mb-3 text-slate-800 font-medium">Gambar</p>
                        <label className="h-[240px] border-2 border-slate-400 flex flex-col items-center justify-center gap-3 rounded-xl cursor-pointer bg-slate-100 grow">
                            <GoImage fontSize={64} className="text-slate-500" />
                            <div className="flex flex-col items-center">
                                <span className="font-semibold text-slate-500">Masukkan Gambar</span>
                                <span className="text-slate-500 text-sm">*Disarankan gambar dengan rasio 16:9</span>
                            </div>
                            <input type="file" className="hidden" />
                        </label>
                    </div>
                    <div>
                        <p className="mb-3 text-slate-800 font-medium">Content</p>
                        <Editor
                            editorState={editorState}
                            onEditorStateChange={setEditorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            toolbar={{
                                options: ["inline", "blockType", "fontSize", "textAlign", "list", "link", "history"],
                            }}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button className="flex items-center justify-center gap-3 px-4 py-3 bg-green-400 border-2 border-green-200 rounded-xl font-semibold text-white hover:bg-green-500 transition-colors">
                            Buat Berita <FiSave fontSize={24} />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BeritaCreate;
