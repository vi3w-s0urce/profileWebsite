import { TbLogin2 } from "react-icons/tb";
import login_svg from "../../../assets/svg/admin/login.svg";

const Login = () => {
    return (
        <main className="relative flex justify-center min-h-screen bg-yellow-50 overflow-hidden">
            {/* SHAPES */}
            <img src={login_svg} alt="login" className="absolute w-[70vh] bottom-[-40px] left-[15%]" />

            {/* CARD */}
            <div className="bg-white p-8 rounded-2xl shadow-xl absolute z-10 h-fit right-[24%] top-1/2 -translate-y-1/2 border-2 login-card">
                <h1 className="text-2xl font-bold text-center text-slate-800 mb-1">Admin Login</h1>
                <p className="text-base font-medium text-slate-500 max-w-96 text-center mb-4">
                    Silahkan login dengan akun admin untuk mengakses halaman admin.
                </p>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-slate-800" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl"
                            id="username"
                            placeholder="Masukkan Username"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-slate-800" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            className="px-4 py-3 border-2 border-slate-400 bg-slate-100 rounded-xl"
                            id="username"
                            placeholder="Masukkan Password"
                        />
                    </div>
                    <button className="px-4 py-3 flex w-full items-center justify-center gap-3 rounded-xl border-2 border-yellow-200 hover:bg-yellow-500 bg-yellow-400 transition-colors mt-4">
                        <span className="font-bold text-white">Login</span>
                        <TbLogin2 fontSize={24} className="text-white" />
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Login;
