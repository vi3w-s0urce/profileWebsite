import { TbEditCircle, TbPlus, TbSearch, TbTrash } from "react-icons/tb";
import AdminSidebar from "../../../Layout/AdminSidebar";
import Select from "react-select";
import { FiSave } from "react-icons/fi";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentRoute } from "../../../Redux/slice";
import { Table, Header, HeaderRow, Body, Row, HeaderCell, Cell } from "@table-library/react-table-library/table";
import { useTheme } from "@table-library/react-table-library/theme";
import { usePagination } from "@table-library/react-table-library/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import route from "ziggy-js";

const BeritaIndex = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentRoute("Berita"));
    }, []);

    const theme = useTheme({
        Table: `
        --data-table-library_grid-template-columns:  0.3fr 2.5fr 1fr 1.2fr 0.8fr 0.5fr;
      `,
    });

    const nodes = [
        {
            id: "0",
            judul: "Judul Berita Judul BeritaJudul BeritaJudul BeritaJudul BeritaJudul BeritaJudul BeritaJudul BeritaJudul BeritaJudul BeritaJudul BeritaJudul BeritaJudul Berita",
            kategori: "Agenda",
            tanggal: new Date(2020, 1, 15),
            pengunjung: 12,
        },
        {
            id: "1",
            judul: "Judul Berita 2",
            kategori: "Berita",
            tanggal: new Date(2020, 1, 15),
            pengunjung: 12,
        },
    ];

    const data = { nodes };

    const LIMIT = 10;

    const pagination = usePagination(
        data,
        {
          state: {
            page: 0,
            size: LIMIT,
          },
          onChange: onPaginationChange,
        },
        {
          isServer: true,
        }
      );
    
      function onPaginationChange(action, state) {
        doGet({
          offset: state.page * LIMIT,
          limit: LIMIT,
        });
      }

    return (
        <main className="ml-[300px] bg-slate-100 min-h-screen p-12">
            {/* SIDEBAR */}
            <AdminSidebar />

            <h1 className="font-bold text-3xl text-slate-800 mb-8">Berita & Agenda</h1>
            <div className="grid grid-cols-6 gap-8">
                <div className="col-span-6 bg-white rounded-3xl shadow-lg">
                    <div className="flex justify-between items-center px-8 py-6 border-b-2 border-slate-200">
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl text-slate-500 font-semibold">Total Berita & Agenda: </h1>
                            <span className="bg-yellow-100 text-yellow-500 px-2 py-1 rounded-lg font-semibold text-2xl">6</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <label className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl w-[352px] flex items-center gap-3">
                                <TbSearch fontSize={24} className="text-slate-500" />
                                <input className="w-full bg-transparent focus:outline-none" type="text" placeholder="Cari Berita / Agenda" />
                            </label>
                            <Link
                                href={route('BeritaCreate')}
                                className="px-4 py-3 flex items-center justify-center gap-3 rounded-xl border-2 border-yellow-400 hover:bg-yellow-50 transition-colors"
                            >
                                <span className="font-semibold text-yellow-400">Buat Berita Baru</span>
                                <TbPlus fontSize={24} className="text-yellow-400" />
                            </Link>
                        </div>
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
                                            <Row key={item.id} item={item} className="!text-lg !font-medium !text-slate-800">
                                                <Cell className="!pl-4 !py-4 !border-b-2 !border-slate-300">{index + 1}.</Cell>
                                                <Cell className="!py-4 !border-b-2 !border-slate-300">
                                                    <div className="!flex !items-center !gap-3">
                                                        <div className="!w-[144px] !h-[81px] !bg-slate-400 !rounded-lg"></div>
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
                                                        {item.tanggal.toLocaleDateString("id-ID", {
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
                                                        <Link className="p-2 rounded-lg hover:bg-yellow-100 text-yellow-500 transition-colors cursor-pointer">
                                                            <TbEditCircle fontSize={32} />
                                                        </Link>
                                                        <div className="p-2 rounded-lg hover:bg-red-100 text-red-400 transition-colors cursor-pointer">
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
                            <button className="flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-100 text-slate-500"><IoIosArrowBack fontSize={24} /><span className="text-lg font-semibold">Sebelumnya</span></button>
                            <div className="flex items-center gap-2">
                                <button className="rounded-lg bg-yellow-100 text-yellow-500 font-semibold text-lg w-[48px] h-[48px] grid place-items-center ">1</button>
                                <button className="rounded-lg font-semibold text-lg w-[48px] h-[48px] grid place-items-center hover:bg-slate-100 text-slate-500">2</button>
                                <button className="rounded-lg font-semibold text-lg w-[48px] h-[48px] grid place-items-center hover:bg-slate-100 text-slate-500">3</button>
                            </div>
                            <button className="flex flex-row-reverse items-center gap-3 px-4 py-2 rounded-lg bg-yellow-100 text-yellow-500"><IoIosArrowForward fontSize={24} /><span className="text-lg font-semibold">Selanjutnya</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BeritaIndex;
