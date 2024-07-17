import { TbEditCircle, TbPlus, TbSearch, TbTrash } from "react-icons/tb";
import AdminSidebar from "../../Layout/AdminSidebar";
import Select from "react-select";
import { FiSave } from "react-icons/fi";
import { Link, router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentRoute } from "../../Redux/slice";
import { Table, Header, HeaderRow, Body, Row, HeaderCell, Cell } from "@table-library/react-table-library/table";
import { useTheme } from "@table-library/react-table-library/theme";
import { usePagination } from "@table-library/react-table-library/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import route from "ziggy-js";
import toast, { Toaster } from "react-hot-toast";
import ModalConfirm from "../../Components/ModalConfirm";
import { AnimatePresence } from "framer-motion";

const Pengaturan = ({ akunAdmin }) => {
    const { flash } = usePage().props;

    useEffect(() => {
        const { success, error, info } = flash;
        if (success) toast.success(success);
        if (error) toast.error(error);
        if (info) toast(info);
    }, [flash]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentRoute("PengaturanAdmin"));
    }, []);

    const [deleteAkun, setDeleteAkun] = useState(null);

    const theme = useTheme({
        Table: `
        --data-table-library_grid-template-columns:  0.3fr 1fr 1fr 1fr 0.5fr;
      `,
    });

    const nodes = akunAdmin;

    const data = { nodes };

    const handleDeleteAkun = () => {
        router.delete(route("AkunAdminDelete", { id: deleteAkun }));
        setDeleteAkun(null);
    };

    return (
        <main className="ml-[300px] bg-slate-100 min-h-screen p-12">
            <Toaster />

            {/* SIDEBAR */}
            <AdminSidebar />

            {/* MODAL CONFIRM */}
            <AnimatePresence>
                {deleteAkun && (
                    <ModalConfirm
                        type="delete"
                        title="Hapus Akun Ini?"
                        description="Apakah anda yakin ingin menghapus akun ini?"
                        cancel={() => setDeleteAkun(null)}
                        action={handleDeleteAkun}
                    />
                )}
            </AnimatePresence>

            <h1 className="font-bold text-3xl text-slate-800 mb-8">Pengaturan</h1>
            <div className="grid grid-cols-6 gap-8">
                <div className="col-span-6 bg-white rounded-3xl shadow-lg">
                    <div className="flex justify-between items-center px-8 py-6 border-b-2 border-slate-200">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                                <h1 className="text-2xl text-slate-500 font-semibold">Akun Admin: </h1>
                                <span className="bg-yellow-100 text-yellow-500 px-2 py-1 rounded-lg font-semibold text-2xl">{akunAdmin.length}</span>
                            </div>
                            <p className="text-slate-500 text-sm">*Maximal akun admin hanya 5 akun</p>
                        </div>
                        {akunAdmin.length < 5 && (
                            <Link
                                href={route("AkunAdminCreate")}
                                className="px-4 py-3 flex items-center justify-center gap-3 rounded-xl border-2 border-yellow-400 hover:bg-yellow-50 transition-colors"
                            >
                                <span className="font-semibold text-yellow-400">Buat Akun Baru</span>
                                <TbPlus fontSize={24} className="text-yellow-400" />
                            </Link>
                        )}
                    </div>
                    <div className="px-8 py-6 flex flex-col gap-4">
                        <Table data={data} theme={theme} layout={{ custom: true }}>
                            {(tableList) => (
                                <>
                                    <Header>
                                        <HeaderRow className="!text-lg !font-semibold !text-slate-500 !bg-slate-100">
                                            <HeaderCell className="!pl-4 !py-4 !border-slate-300 !border-y-2 !border-s-2 !rounded-s-xl">
                                                No
                                            </HeaderCell>
                                            <HeaderCell className="!py-4 !border-slate-300 !border-y-2">Nama</HeaderCell>
                                            <HeaderCell className="!py-4 !border-slate-300 !border-y-2">Username</HeaderCell>
                                            <HeaderCell className="!py-4 !border-slate-300 !border-y-2">Email</HeaderCell>
                                            <HeaderCell className="!py-4 !pr-4 !border-slate-300 !border-y-2 !border-e-2 !rounded-e-xl !text-center">
                                                Aksi
                                            </HeaderCell>
                                        </HeaderRow>
                                    </Header>

                                    <Body>
                                        {tableList.map((item, index) => (
                                            <Row key={item._id} item={item} className="!text-lg !font-medium !text-slate-800">
                                                <Cell className="!pl-4 !py-4 !border-b-2 !border-slate-300">{index + 1}.</Cell>
                                                <Cell className="!py-4 !border-b-2 !border-slate-300">
                                                    {index == 0 ? (
                                                        <div className="flex flex-col gap-1">
                                                            <div className="flex items-center gap-1">
                                                                {item.name}
                                                                <span className="text-slate-500 text-xs">(Akun Utama)</span>
                                                            </div>
                                                            {item.defaultPassword && (
                                                                <span className="text-xs text-red-500 font-semibold">
                                                                    *Sangat disarankan untuk mengganti password bawaan!
                                                                </span>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <>{item.name}</>
                                                    )}
                                                </Cell>
                                                <Cell className="!py-4 !border-b-2 !border-slate-300">{item.username}</Cell>
                                                <Cell className="!py-4 !border-b-2 !border-slate-300">
                                                    <div className="px-4 py-2 bg-slate-100 w-fit rounded-xl !text-slate-500">{item.email}</div>
                                                </Cell>
                                                <Cell className="!py-4 !pr-4 !border-b-2 !border-slate-300">
                                                    <div className="!flex !items-center !justify-center !gap-1">
                                                        <Link
                                                            href={route("AkunAdminEdit", { id: item._id })}
                                                            className="p-2 rounded-lg hover:bg-yellow-100 text-yellow-500 transition-colors cursor-pointer"
                                                        >
                                                            <TbEditCircle fontSize={32} />
                                                        </Link>
                                                        {!index == 0 && (
                                                            <div
                                                                className="p-2 rounded-lg hover:bg-red-100 text-red-400 transition-colors cursor-pointer"
                                                                onClick={() => setDeleteAkun(item._id)}
                                                            >
                                                                <TbTrash fontSize={32} />
                                                            </div>
                                                        )}
                                                    </div>
                                                </Cell>
                                            </Row>
                                        ))}
                                    </Body>
                                </>
                            )}
                        </Table>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Pengaturan;
