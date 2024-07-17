import { Link, useForm, usePage } from "@inertiajs/react";
import AdminSidebar from "../../../Layout/AdminSidebar";
import { IoIosArrowBack } from "react-icons/io";
import { FiSave } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

const AkunEdit = ({ dataUser }) => {
    const { flash } = usePage().props;

    useEffect(() => {
        const { success, error, info } = flash;
        if (success) toast.success(success);
        if (error) toast.error(error);
        if (info) toast(info);
    }, [flash]);

    const formUser = useForm({
        name: dataUser.name,
        email: dataUser.email,
        username: dataUser.username,
        password: '',
        confirmPassword: '',
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (formUser.data.password === formUser.data.confirmPassword) {
            if (formUser.data.password.length < 8 || formUser.data.confirmPassword.length < 8) {
                toast.error("Password minimal 8 karakter!");
            } else {
                formUser.put(route("AkunAdminUpdate", { id: dataUser._id }));
            }
        } else {
            toast.error("Konfirmasi password tidak cocok!");
        }
    };

    return (
        <main className="ml-[300px] bg-slate-100 min-h-screen p-12">
            <Toaster />

            {/* SIDEBAR */}
            <AdminSidebar />

            <div className="flex items-center gap-6 mb-8">
                <Link href={route("PengaturanAdmin")} className="p-2 text-slate-500 hover:bg-slate-200 rounded-lg transition-colors">
                    <IoIosArrowBack fontSize={32} />
                </Link>
                <h1 className="font-bold text-3xl text-slate-800">Edit Akun Admin</h1>
            </div>
            <div className="grid grid-cols-6 gap-8">
                <form className="col-span-6 bg-white rounded-3xl shadow-lg px-8 py-6 flex flex-col gap-4" onSubmit={handleOnSubmit}>
                    <div className="flex flex-col gap-3 grow">
                        <label className="font-medium text-slate-800" htmlFor="nama">
                            Nama
                        </label>
                        <input
                            type="text"
                            className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl"
                            placeholder="Masukkan Nama Lengkap"
                            id="nama"
                            onChange={(e) => formUser.setData("name", e.target.value)}
                            value={formUser.data.name}
                            required
                        />
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-3 grow">
                            <label className="font-medium text-slate-800" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl"
                                placeholder="Masukkan Email"
                                id="email"
                                onChange={(e) => formUser.setData("email", e.target.value)}
                                value={formUser.data.email}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3 grow">
                            <label className="font-medium text-slate-800" htmlFor="username">
                                Username
                            </label>
                            <input
                                type="text"
                                className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl"
                                placeholder="Masukkan judul berita / agenda"
                                id="username"
                                onChange={(e) => formUser.setData("username", e.target.value)}
                                value={formUser.data.username}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-3 grow">
                            <label className="font-medium text-slate-800" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl"
                                placeholder="Masukkan Password"
                                id="password"
                                onChange={(e) => formUser.setData("password", e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3 grow">
                            <label className="font-medium text-slate-800" htmlFor="password_2">
                                Konfirmasi Password
                            </label>
                            <input
                                type="password"
                                className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl"
                                placeholder="Masukkan password yang sama"
                                id="password_2"
                                onChange={(e) => formUser.setData("confirmPassword", e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-3 px-4 py-3 bg-green-400 border-2 border-green-200 rounded-xl font-semibold text-white hover:bg-green-500 transition-colors"
                        >
                            Edit Akun <FiSave fontSize={24} />
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default AkunEdit;
