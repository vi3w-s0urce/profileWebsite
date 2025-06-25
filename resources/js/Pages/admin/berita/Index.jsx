import { TbEditCircle, TbPlus, TbSearch, TbTrash } from "react-icons/tb";
import AdminSidebar from "../../../Layout/AdminSidebar";
import Select from "react-select";
import { FiSave } from "react-icons/fi";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentRoute } from "../../../Redux/slice";
import { Table, Header, HeaderRow, Body, Row, HeaderCell, Cell } from "@table-library/react-table-library/table";
import { useTheme } from "@table-library/react-table-library/theme";
import { usePagination } from "@table-library/react-table-library/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import route from "ziggy-js";
import toast, { Toaster } from "react-hot-toast";
import { FaRegNewspaper } from "react-icons/fa6";
import { AnimatePresence } from "framer-motion";
import ModalConfirm from "../../../Components/ModalConfirm";
import { Inertia } from "@inertiajs/inertia";

const BeritaIndexAdmin = ({ berita }) => {
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

    const [deleteBerita, setDeleteBerita] = useState(null);
    const [searchBerita, setSearchBerita] = useState("");

    const theme = useTheme({
        Table: `
        --data-table-library_grid-template-columns:  0.3fr 2.5fr 1fr 1.2fr 0.8fr 0.5fr;
      `,
    });

    const nodes = berita;

    const data = { nodes: berita.filter((item) => item.judul.toLowerCase().includes(searchBerita.toLowerCase())) };

    const LIMIT = 10;

    const pagination = usePagination(data, {
        state: {
            page: 0,
            size: LIMIT,
        },
    });

    const handleDeleteBerita = () => {
        router.post(route("BeritaDeleteAdmin", { id: deleteBerita }));
        setDeleteBerita(null);
    };

    return (
        <main className="ml-[300px] bg-slate-100 min-h-screen p-12">
            <Toaster />

            {/* TITLE */}
            <Head>
                <title>Berita & Agenda</title>
            </Head>

            {/* SIDEBAR */}
            <AdminSidebar />

            {/* MODAL CONFIRM */}
            <AnimatePresence>
                {deleteBerita && (
                    <ModalConfirm
                        type="delete"
                        title="Hapus Berita Ini?"
                        description="Apakah anda yakin ingin menghapus berita ini?"
                        cancel={() => setDeleteBerita(null)}
                        action={handleDeleteBerita}
                    />
                )}
            </AnimatePresence>

            <h1 className="font-bold text-3xl text-slate-800 mb-8">Berita & Agenda</h1>
            <div className="grid grid-cols-6 gap-8">
                <div className="col-span-6 bg-white rounded-3xl shadow-lg">
                    <div className="flex justify-between items-center px-8 py-6 border-b-2 border-slate-200">
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl text-slate-500 font-semibold">Total Berita & Agenda: </h1>
                            <span className="bg-yellow-100 text-yellow-500 px-2 py-1 rounded-lg font-semibold text-2xl">{berita.length}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <label className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl w-[352px] flex items-center gap-3">
                                <TbSearch fontSize={24} className="text-slate-500" />
                                <input
                                    className="w-full bg-transparent focus:outline-none"
                                    type="text"
                                    placeholder="Cari Berita / Agenda"
                                    onChange={(e) => setSearchBerita(e.target.value)}
                                />
                            </label>
                            <Link
                                href={route("BeritaCreateAdmin")}
                                className="px-4 py-3 flex items-center justify-center gap-3 rounded-xl border-2 border-yellow-400 hover:bg-yellow-50 transition-colors"
                            >
                                <span className="font-semibold text-yellow-400">Buat Berita Baru</span>
                                <TbPlus fontSize={24} className="text-yellow-400" />
                            </Link>
                        </div>
                    </div>
                    {berita.length > 0 ? (
                        <div className="px-8 py-6 flex flex-col gap-4">
                            <Table data={data} theme={theme} layout={{ custom: true }} pagination={pagination}>
                                {(tableList) => (
                                    <>
                                        <Header>
                                            <HeaderRow className="!text-lg !font-semibold !text-slate-500 !bg-slate-100">
                                                <HeaderCell className="!pl-4 !py-4 !border-slate-300 !border-y-2 !border-s-2 !rounded-s-xl">
                                                    No
                                                </HeaderCell>
                                                <HeaderCell className="!py-4 !border-slate-300 !border-y-2">Berita</HeaderCell>
                                                <HeaderCell className="!py-4 !border-slate-300 !border-y-2">Kategori</HeaderCell>
                                                <HeaderCell className="!py-4 !border-slate-300 !border-y-2">Tanggal</HeaderCell>
                                                <HeaderCell className="!py-4 !border-slate-300 !border-y-2">Pengunjung</HeaderCell>
                                                <HeaderCell className="!py-4 !pr-4 !border-slate-300 !border-y-2 !border-e-2 !rounded-e-xl !text-center">
                                                    Aksi
                                                </HeaderCell>
                                            </HeaderRow>
                                        </Header>

                                        <Body>
                                            {tableList.map((item, index) => (
                                                <Row key={item.id} className="!text-lg !font-medium !text-slate-800">
                                                    <Cell className="!pl-4 !py-4 !border-b-2 !border-slate-300">
                                                        {index + 1 + pagination.state.page * 10}.
                                                    </Cell>
                                                    <Cell className="!py-4 !border-b-2 !border-slate-300">
                                                        <div className="!flex !items-center !gap-3">
                                                            <div className="!w-[144px] !h-[81px] !rounded-lg !overflow-hidden">
                                                                <img src={"/storage/beritaImages/" + item.gambar} alt="gambar" />
                                                            </div>
                                                            <span className="!max-w-[380px] !whitespace-normal">{item.judul}</span>
                                                        </div>
                                                    </Cell>
                                                    <Cell className="!py-4 !border-b-2 !border-slate-300">
                                                        <div className="px-4 py-2 rounded-xl !text-yellow-500 !bg-yellow-100 w-fit font-semibold">
                                                            {item.kategori}
                                                        </div>
                                                    </Cell>
                                                    <Cell className="!py-4 !border-b-2 !border-slate-300">
                                                        <div className="px-4 py-2 bg-slate-100 w-fit rounded-xl !text-slate-500">
                                                            {new Date(item.created_at).toLocaleDateString("id-ID", {
                                                                year: "numeric",
                                                                month: "2-digit",
                                                                day: "2-digit",
                                                            })}
                                                        </div>
                                                    </Cell>
                                                    <Cell className="!py-4 !border-b-2 !border-slate-300 !text-yellow-800 !font-bold">
                                                        {item.pengunjung}
                                                    </Cell>
                                                    <Cell className="!py-4 !pr-4 !border-b-2 !border-slate-300">
                                                        <div className="!flex !items-center !gap-1">
                                                            <Link href={route('BeritaEditAdmin', { id: item.id})} className="p-2 rounded-lg hover:bg-yellow-100 text-yellow-500 transition-colors cursor-pointer">
                                                                <TbEditCircle fontSize={32} />
                                                            </Link>
                                                            <div
                                                                onClick={() => setDeleteBerita(item.id)}
                                                                className="p-2 rounded-lg hover:bg-red-100 text-red-400 transition-colors cursor-pointer"
                                                            >
                                                                <TbTrash fontSize={32} />
                                                            </div>
                                                        </div>
                                                    </Cell>
                                                </Row>
                                            ))}
                                        </Body>
                                    </>
                                )}
                            </Table>
                            <div className="flex justify-between">
                                <button
                                    onClick={() => pagination.state.page != 0 && pagination.fns.onSetPage(pagination.state.page - 1)}
                                    className="flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-100 text-slate-500 hover:bg-yellow-100 hover:text-yellow-500 transition-colors"
                                >
                                    <IoIosArrowBack fontSize={24} />
                                    <span className="text-lg font-semibold">Sebelumnya</span>
                                </button>
                                <div className="flex items-center gap-2">
                                    {Array.from({ length: pagination.state.getTotalPages(data.nodes) }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => pagination.fns.onSetPage(index)}
                                            className={`rounded-lg font-semibold text-lg w-[48px] h-[48px] grid place-items-center transition-colors ${
                                                pagination.state.page == index ? "bg-yellow-100 text-yellow-500" : "hover:bg-slate-100 text-slate-500"
                                            }`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={() =>
                                        pagination.state.page != pagination.state.getTotalPages(data.nodes) - 1 &&
                                        pagination.fns.onSetPage(pagination.state.page + 1)
                                    }
                                    className="flex flex-row-reverse items-center gap-3 px-4 py-2 rounded-lg bg-slate-100 text-slate-500 hover:bg-yellow-100 hover:text-yellow-500 transition-colors"
                                >
                                    <IoIosArrowForward fontSize={24} />
                                    <span className="text-lg font-semibold">Selanjutnya</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="px-8 py-28 flex flex-col items-center justify-center">
                            <FaRegNewspaper fontSize={124} className="text-slate-500 mb-4" />
                            <div>
                                <p className="text-slate-500 font-semibold text-2xl text-center">Belum Ada Berita yang Dibuat</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default BeritaIndexAdmin;
