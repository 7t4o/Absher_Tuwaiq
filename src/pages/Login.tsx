import { useState } from 'react';
import { FaEye, FaEyeSlash, FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function TabeerLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('تسجيل الدخول');
    };

    return (
        <div className="flex min-h-screen flex-col lg:flex-row" dir="rtl">
            <div className="flex w-full flex-col items-center justify-center gap-6 bg-linear-to-br from-emerald-500 to-emerald-600 p-10 text-white sm:p-12 lg:w-1/2 relative">
                <img src={`${import.meta.env.BASE_URL}images/Login-Logo.png`} alt="شعار تبيير" className="w-52 sm:w-52 md:w-72" />
                <p className="max-w-xl absolute sm:relative bottom-10 text-center text-2xl font-semibold leading-relaxed sm:text-3xl">
                    تبيير.... روئتك الشاملة لإدارة المخاطر بذكاء
                </p>
            </div>

            <div className="flex w-full items-center justify-center bg-gray-50 p-6 sm:p-10 lg:w-1/2">
                <div className="w-full max-w-lg rounded-2xl border border-gray-400 bg-white p-8 shadow-xl sm:p-10">
                    <h1 className="mb-8 text-right text-2xl font-bold text-gray-800 sm:mb-10 sm:text-3xl">
                        تسجيل الدخول
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                        <div>
                            <label className="mb-2 block text-right text-sm font-semibold text-gray-700 sm:text-base">
                                اسم المستخدم او رقم الهوية
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="اسم المستخدم او رقم الهوية"
                                    className="w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-right text-base transition-colors focus:border-emerald-500 focus:outline-none sm:text-lg"
                                />
                                <FaUser className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-right text-sm font-semibold text-gray-700 sm:text-base">
                                كلمة المرور
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="كلمة المرور"
                                    className="w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-right text-base transition-colors focus:border-emerald-500 focus:outline-none sm:text-lg"
                                />
                                <FaLock className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600"
                                >
                                    {showPassword ? (
                                        <FaEyeSlash className="h-5 w-5" />
                                    ) : (
                                        <FaEye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="text-right">
                            <a href="#" className="text-sm text-emerald-600 transition-colors hover:text-emerald-700 hover:underline sm:text-base">
                                نسيت كلمة المرور؟
                            </a>
                        </div>

                        <Link
                            to="/dashboard"
                            type="submit"
                            className="block w-full rounded-lg bg-emerald-500 py-3.5 text-center text-2xl font-semibold text-white shadow-lg shadow-emerald-500/30 transition-colors hover:bg-emerald-600 sm:text-3xl"
                        >
                            تسجيل الدخول
                        </Link>

                        <Link
                            to="/dashboard"
                            type="button"
                            className="block w-full rounded-lg border-2 border-gray-200 bg-white py-3.5 text-center text-2xl font-semibold text-gray-700 transition-colors hover:bg-gray-50 sm:text-3xl"
                        >
                            مستخدم جديد ؟
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}