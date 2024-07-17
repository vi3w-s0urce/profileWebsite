import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { TbTrash } from "react-icons/tb";

const ModalConfirm = ({ type = "delete", title, description, cancel, action }) => {
    const layout = document.getElementById("app");

    const [domReady, setDomReady] = useState(false);

    useEffect(() => {
        setDomReady(true);
    }, []);

    return (
        domReady &&
        createPortal(
            <div className="fixed top-0 left-0 h-screen w-screen z-50 flex justify-center items-center bg-black bg-opacity-20">
                <motion.div
                    className="bg-white min-h-52 min-w-80 max-w-[30%] rounded-3xl shadow-xl overflow-hidden flex flex-col justify-center items-center py-8 px-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                >
                    <div className="p-5 bg-red-100 rounded-full">
                        <TbTrash fontSize={96} className="text-red-500" />
                    </div>
                    <div className="text-center mt-6 mb-4">
                        <h1 className="text-2xl font-bold text-slate-800 mb-1">{title}</h1>
                        <p className="font-medium text-slate-500 w-80">{description}</p>
                    </div>
                    <div className="flex items-center justify-center gap-3 w-full">
                        <button onClick={cancel} className="grow px-4 py-3 rounded-xl border-2 border-slate-300 hover:bg-slate-100 transition-colors font-semibold text-lg text-slate-500">
                            Batal
                        </button>
                        <button onClick={action} className="grow px-4 py-3 rounded-xl border-2 border-red-200 hover:bg-red-500 bg-red-400 transition-colors font-semibold text-lg text-white">
                            Hapus
                        </button>
                    </div>
                </motion.div>
            </div>,
            layout
        )
    );
};

export default ModalConfirm;
