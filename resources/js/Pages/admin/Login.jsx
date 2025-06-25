import { TbLogin2 } from "react-icons/tb";
import login_svg from "../../../assets/svg/admin/login.svg";
import { Head, useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const { flash } = usePage().props;

    const formLogin = useForm({
        username: "",
        password: "",
    });

    useEffect(() => {
        const { success, error, info } = flash;
        if (success) toast.success(success);
        if (error) toast.error(error);
        if (info) toast(info);
    }, [flash]);

    const handleLogin = (e) => {
        e.preventDefault();
        formLogin.post(route("LoginAdmin"));
    };

    return (
        <main className="relative flex justify-center min-h-screen bg-yellow-50 overflow-hidden">
            <Toaster />

            {/* TITLE */}
            <Head>
                <title>Login Admin</title>
            </Head>

            {/* SHAPES */}
            <img src={login_svg} alt="login" className="absolute w-[70vh] bottom-[-40px] left-[15%]" />

            {/* CARD */}
            <div className="bg-white p-8 rounded-2xl shadow-xl absolute z-10 h-fit right-[24%] top-1/2 -translate-y-1/2 border-2 login-card">
                <h1 className="text-2xl font-bold text-center text-slate-800 mb-1">Admin Login</h1>
                <p className="text-base font-medium text-slate-500 max-w-96 text-center mb-4">
                    Silahkan login dengan akun admin untuk mengakses halaman admin.
                </p>
                <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-slate-800" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl"
                            id="username"
                            placeholder="Masukkan Username"
                            onChange={(e) => formLogin.setData("username", e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-slate-800" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl"
                            id="password"
                            placeholder="Masukkan Password"
                            onChange={(e) => formLogin.setData("password", e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-3 flex w-full items-center justify-center gap-3 rounded-xl border-2 border-yellow-200 hover:bg-yellow-500 bg-yellow-400 transition-colors mt-4"
                    >
                        <span className="font-bold text-white">Login</span>
                        <TbLogin2 fontSize={24} className="text-white" />
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Login;
