import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { HOME_FAQ } from "@/data/homeFaq";
import { homePageConfig } from "@/site-config/home";
import { Check } from "lucide-react";

export default function Home() {
    const { user, logout } = useAuth();
    const isLoggedIn = Boolean(user);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        specialty: ""
    });

    const [openFaqId, setOpenFaqId] = useState<string | null>(HOME_FAQ[0]?.id ?? null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="min-h-screen bg-[#F8F9FF]">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-green-500/10 backdrop-blur-lg border-b border-green-400 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2">
                            <img src="/BRANDLOGO.svg" alt="Pillmate Logo" className="h-8 w-auto" />
                            <span className="text-xl font-semibold text-gray-900">Pillmate</span>
                        </Link>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center gap-8">
                            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900">Features</a>
                            <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900">How it Works</a>
                            <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900">FAQ</a>
                        </div>

                        {/* Auth Buttons */}
                        <div className="flex items-center gap-3">
                            {isLoggedIn ? (
                                <>
                                    <Link
                                        to="/dashboard"
                                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={logout}
                                        className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                                    >
                                        Log In
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="inline-flex min-h-10 items-center justify-center px-6 py-2.5 text-sm font-semibold leading-none text-white bg-emerald-500 hover:bg-emerald-600 rounded-full shadow-sm shadow-emerald-500/25 transition-all hover:shadow-md"
                                    >
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-fuchsia-50 to-emerald-50 min-h-[calc(100vh-4rem)] flex items-center py-10 lg:py-0">
                {/* Animated texture / background */}
                <div className="pointer-events-none absolute inset-0">
                    {/* Vignette to add depth */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(15,23,42,0.10)_100%)] opacity-40" />

                    {/* Soft grid */}
                    <div
                        className="absolute inset-0 opacity-[0.22] mix-blend-multiply"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(15,23,42,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.10) 1px, transparent 1px)",
                            backgroundSize: "56px 56px",
                            maskImage: "radial-gradient(circle at 30% 20%, black 30%, transparent 68%)",
                            WebkitMaskImage:
                                "radial-gradient(circle at 30% 20%, black 30%, transparent 68%)",
                        }}
                    />

                    {/* Animated mesh sheen */}
                    <div className="absolute inset-0 opacity-60 mix-blend-soft-light">
                        <div className="absolute -inset-40 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(16,185,129,0.20),rgba(168,85,247,0.18),rgba(236,72,153,0.16),rgba(16,185,129,0.20))] blur-3xl animate-[meshSpin_26s_linear_infinite]" />
                    </div>

                    {/* Subtle noise */}
                    <div
                        className="absolute inset-0 opacity-[0.09]"
                        style={{
                            backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
                        }}
                    />

                    {/* Moving gradient blobs */}
                    <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-emerald-400/25 blur-3xl animate-[float_9s_ease-in-out_infinite]" />
                    <div className="absolute -bottom-40 -right-40 h-[560px] w-[560px] rounded-full bg-violet-400/25 blur-3xl animate-[float2_11s_ease-in-out_infinite]" />
                    <div className="absolute top-20 right-[20%] h-[420px] w-[420px] rounded-full bg-fuchsia-400/15 blur-3xl animate-[spin_28s_linear_infinite]" />

                    {/* Sparkles */}
                    <div className="absolute inset-0">
                        <div className="absolute left-[12%] top-[22%] h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.8)] animate-[twinkle_4.8s_ease-in-out_infinite]" />
                        <div className="absolute left-[28%] top-[62%] h-1 w-1 rounded-full bg-white/60 shadow-[0_0_14px_rgba(255,255,255,0.7)] animate-[twinkle_5.6s_ease-in-out_infinite]" />
                        <div className="absolute right-[18%] top-[28%] h-1.5 w-1.5 rounded-full bg-white/60 shadow-[0_0_18px_rgba(255,255,255,0.75)] animate-[twinkle_6.4s_ease-in-out_infinite]" />
                        <div className="absolute right-[30%] bottom-[18%] h-1 w-1 rounded-full bg-white/50 shadow-[0_0_12px_rgba(255,255,255,0.65)] animate-[twinkle_5.1s_ease-in-out_infinite]" />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left Content */}
                        <div className="max-w-2xl mt-4 lg:mt-0">
                            {/* Badge */}
                            <div className="inline-flex flex-wrap items-center gap-2 bg-white/60 backdrop-blur-sm border border-emerald-100/50 shadow-sm rounded-full px-4 py-1.5 mb-8 hover:bg-white/80 transition-colors cursor-pointer w-fit">
                                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                                <span className="text-xs sm:text-sm font-medium text-emerald-700">Pillmate v1.0 is now live — Discover what's new</span>
                                <svg className="w-4 h-4 text-emerald-600 ml-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>

                            {/* Headline */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-4">
                                Clinical Precision.
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
                                    Sophisticated Care.
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-slate-600 leading-relaxed mb-6 max-w-xl">
                                The all-in-one ERP operating system specifically designed for modern pharmacies and clinics. Effortlessly synchronize your inventory, staff, and patients in one beautiful, uncompromising dashboard.
                            </p>

                            {/* Feature Ticks */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                                        <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-sm font-medium text-slate-700">HIPAA Compliant</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                                        <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-sm font-medium text-slate-700">Set up in 48h</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                                        <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-sm font-medium text-slate-700">24/7 Support</span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-5 mt-8">
                                <Link
                                    to={isLoggedIn ? "/dashboard" : "/register"}
                                    className="group relative w-full sm:w-auto overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold px-8 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/40 hover:from-emerald-600 hover:to-teal-600 focus-visible:ring-2 focus-visible:ring-emerald-500/40"
                                >
                                    {/* Always-on subtle shimmer */}
                                    <span className="pointer-events-none absolute -inset-y-4 -left-1/2 w-[140%] rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-[2px] opacity-70 animate-ctaShimmer" />
                                    {/* Hover sparkle */}
                                    <span className="pointer-events-none absolute -inset-1 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_55%)]" />

                                    <span className="relative">Start Your Free Trial</span>
                                    <svg className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </Link>

                                <a 
                                    href="#demo"
                                    className="w-full sm:w-auto border-2 border-slate-200 text-slate-700 font-bold px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-300 transition-all"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Watch Demo
                                </a>
                            </div>

                            {/* Social Proof */}
                            <div className="mt-6 pt-5 border-t border-slate-200/60 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 lg:mb-0">
                                <div className="flex -space-x-3">
                                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=80" alt="Pharmacist" />
                                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=80" alt="Pharmacist" />
                                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&q=80" alt="Medical Professional" />
                                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&q=80" alt="Medical Professional" />
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 shadow-sm">+1k</div>
                                </div>
                                <div className="text-sm">
                                    <div className="flex gap-1 text-amber-400 mb-0.5">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    </div>
                                    <span className="text-slate-600 font-medium">Trusted by 5,000+ facilities globally</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Visual - Premium Image & Floating Badges */}
                        <div className="relative hidden lg:block lg:pl-10">
                            {/* Background Glows */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-400/20 via-teal-400/10 to-violet-400/20 rounded-full blur-[80px] -z-10"></div>

                            {/* Main Image Container */}
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-white/50 aspect-[4/5] bg-slate-100 group">
                                <img
                                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
                                    alt="Modern Healthcare Professional"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Subtle Inner Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Floating Badge 1 - Top Left */}
                            <div className="absolute top-12 -left-8 bg-white/90 backdrop-blur-md border border-white/60 p-4 rounded-2xl shadow-xl shadow-slate-200/50 animate-bounce" style={{ animationDuration: '3s' }}>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">100% Secure</p>
                                        <p className="text-xs text-slate-500">HIPAA Compliant</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge 2 - Bottom Right */}
                            <div className="absolute bottom-24 -right-8 bg-white/90 backdrop-blur-md border border-white/60 p-4 rounded-2xl shadow-xl shadow-slate-200/50 animate-pulse" style={{ animationDuration: '4s' }}>
                                <div className="flex gap-4 items-center">
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">Patient Satisfaction</p>
                                        <div className="flex text-amber-400 mt-1">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge 3 - Bottom Left (Heartbeat/Activity) */}
                            <div className="absolute bottom-8 left-4 bg-white/90 backdrop-blur-md border border-white/60 p-3 rounded-xl shadow-lg shadow-slate-200/50 flex items-center gap-3">
                                <div className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                </div>
                                <span className="text-xs font-semibold text-slate-700">System Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Trust Bar */}
            <section className="bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 text-center overflow-hidden rounded-l-2xl rounded-r-2xl border border-slate-100">
                        {homePageConfig.statsTrustBar.map((item) => {
                            const Icon = item.icon;
                            const theme = item.theme;
                            const bg =
                                theme === "emerald"
                                    ? "bg-emerald-50 hover:bg-emerald-500"
                                    : theme === "violet"
                                        ? "bg-violet-50 hover:bg-violet-500"
                                        : theme === "teal"
                                            ? "bg-teal-50 hover:bg-teal-500"
                                            : "bg-amber-50 hover:bg-amber-500";
                            const accent =
                                theme === "emerald"
                                    ? "text-emerald-500"
                                    : theme === "violet"
                                        ? "text-violet-500"
                                        : theme === "teal"
                                            ? "text-teal-500"
                                            : "text-amber-500";

                            return (
                                <div key={item.key} className={`group ${bg} py-12 transition-colors`}>
                                    <div className="flex flex-col items-center gap-3 px-4">
                                        <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/60 ring-1 ring-black/5 group-hover:bg-white/10 group-hover:ring-white/20 transition-colors">
                                            <Icon className={`w-5 h-5 ${accent} group-hover:text-white`} />
                                        </div>
                                        <p className="text-4xl font-extrabold text-slate-900 leading-none group-hover:text-white transition-colors">
                                            {item.value}
                                            {item.valueSuffix ? (
                                                <span className={`${accent} group-hover:text-white/90 transition-colors`}>{item.valueSuffix}</span>
                                            ) : null}
                                        </p>
                                        <p className="text-sm text-slate-500 font-medium group-hover:text-white/90 transition-colors">{item.label}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Seamless Setup Section */}
            <section id="how-it-works" className=" py-14 bg-gradient-to-b from-white to-blue-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Seamless Setup in Minutes
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Get your clinic running on Pillmate faster than you can write a prescription.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-emerald-600">1</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Create Account</h3>
                            <p className="text-gray-600">
                                Sign up with your email. Takes under 60 seconds. Get immediate access to your personalized dashboard.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-emerald-600">2</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Import Data</h3>
                            <p className="text-gray-600">
                                Upload your existing patient records and inventory lists. Our AI processes and validates the mapping.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-emerald-600">3</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Manage Everything</h3>
                            <p className="text-gray-600">
                                Launch and synchronize your entire operation. Staff permissions, patient records, inventory—centralized.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Powerful Tools Section */}
            <section id="features" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-100/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Powerful Tools for Modern Care
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Everything you need to run your facility with surgical precision. All in one place.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[24rem]">
                        {/* Feature 1: Large Span */}
                        <div className="relative col-span-1 md:col-span-2 bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 rounded-[2rem] overflow-hidden group hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05)_0%,transparent_60%)]"></div>
                            <div className="p-10 z-10 relative flex flex-col h-full">
                                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Proactive Inventory Intelligence</h3>
                                <p className="text-slate-600 max-w-sm mb-8 leading-relaxed">
                                    Real-time stock alerts and automated expiry tracking powered by predictive AI to prevent stockouts and eliminate wastage.
                                </p>
                                {/* Visual Mockup - Floating Cards */}
                                <div className="mt-auto relative w-full h-40">
                                    {/* Top detail to avoid blank space */}
                                    <div className="absolute left-4 right-4 top-0 h-10 rounded-2xl bg-white/70 backdrop-blur border border-slate-100 shadow-sm flex items-center justify-between px-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Inventory Monitor</span>
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 ring-1 ring-emerald-100">
                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                                <span className="text-[11px] font-semibold text-emerald-700">Live</span>
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-500">
                                            <span className="inline-flex items-center gap-1.5">
                                                <span className="h-2 w-2 rounded-full bg-emerald-400/70"></span>In stock
                                            </span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <span className="h-2 w-2 rounded-full bg-amber-400/70"></span>Expiring
                                            </span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <span className="h-2 w-2 rounded-full bg-red-400/70"></span>Low
                                            </span>
                                        </div>
                                    </div>

                                    {/* Soft wave highlight */}
                                    <div className="absolute left-0 right-0 top-8 h-16 opacity-60">
                                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 20">
                                            <path d="M0 12 C 12 6, 24 18, 36 10 S 60 2, 72 12 S 88 18, 100 8 L 100 20 L 0 20 Z" fill="rgba(16,185,129,0.08)" />
                                            <path d="M0 14 C 14 8, 26 18, 38 12 S 62 4, 74 14 S 90 18, 100 10 L 100 20 L 0 20 Z" fill="rgba(14,165,233,0.06)" />
                                        </svg>
                                    </div>

                                    {/* Subtle base panel */}
                                    <div className="absolute inset-x-0 bottom-0 h-24 rounded-2xl bg-gradient-to-r from-emerald-50/80 via-white to-slate-50 border border-slate-100 shadow-sm" />

                                    {/* KPI chips */}
                                    <div className="absolute left-4 top-12 flex items-center gap-2">
                                        <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 border border-slate-100 shadow-sm">
                                            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                                            <span className="text-xs font-semibold text-slate-700">Healthy Stock</span>
                                            <span className="text-xs font-bold text-emerald-700">92%</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1.5 border border-slate-100 shadow-sm">
                                            <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                                            <span className="text-xs font-semibold text-slate-700">Expiring</span>
                                            <span className="text-xs font-bold text-amber-700">18</span>
                                        </div>
                                    </div>

                                    {/* Mini stock bars */}
                                    <div className="absolute left-6 bottom-5 flex items-end gap-1.5">
                                        {[10, 18, 14, 22, 16, 26, 20].map((h, i) => (
                                            <div
                                                key={i}
                                                className="w-2 rounded-t bg-gradient-to-t from-emerald-500/50 to-emerald-400/20 group-hover:from-emerald-600/70 transition-colors"
                                                style={{ height: `${h}px` }}
                                            />
                                        ))}
                                        <div className="ml-2 text-[11px] font-semibold text-slate-500">7d</div>
                                    </div>

                                    <div className="absolute bottom-4 right-10 w-64 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 group-hover:-translate-y-2 transition-transform duration-500 rotate-3 z-10">
                                        <div className="flex justify-between items-center mb-2"><span className="text-xs font-semibold text-slate-500 uppercase">Alert</span><span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span></div>
                                        <p className="text-sm font-bold text-slate-800">Paracetamol 500mg Low</p>
                                        <p className="text-xs text-slate-500 mt-1">Est. depletion: 2 days</p>
                                    </div>
                                    <div className="absolute -bottom-2 right-40 w-64 bg-white/80 backdrop-blur rounded-2xl p-4 shadow-lg border border-slate-100/50 group-hover:translate-x-4 transition-transform duration-700 -rotate-3 blur-[1px] group-hover:blur-none">
                                        <p className="text-sm font-bold text-slate-800">Auto-Reorder Triggered</p>
                                        <p className="text-xs text-emerald-600 mt-1">PO-9923 Sent to Supplier</p>
                                    </div>
                                    <div className="absolute bottom-10 left-10 w-56 bg-white/85 backdrop-blur rounded-2xl p-4 shadow-lg border border-slate-100/60 group-hover:translate-y-1 transition-transform duration-700 -rotate-2">
                                        <div className="flex items-center justify-between mb-2">
                                            <p className="text-xs font-semibold text-slate-500 uppercase">Forecast</p>
                                            <span className="text-[11px] font-bold text-emerald-700">Next 14 days</span>
                                        </div>
                                        <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                                            <div className="h-full w-[72%] bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"></div>
                                        </div>
                                        <p className="text-xs text-slate-600 mt-2">Reorder suggestion: <span className="font-semibold text-slate-800">+120 units</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2: Tall Span */}
                        <div className="relative col-span-1 lg:row-span-2 bg-gradient-to-b from-slate-900 to-slate-800 border border-slate-700 rounded-[2rem] overflow-hidden group hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 transform-gpu">
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent opacity-50"></div>
                            <div className="p-10 z-10 relative flex flex-col h-full text-white">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 shadow-sm ring-1 ring-white/20">
                                    <svg className="w-6 h-6 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white">Revenue & Sales Master</h3>
                                <p className="text-slate-400 leading-relaxed mb-10">
                                    Build faster invoices, instantly parse insurance claims, and control cash-equivalent accounting with unprecedented clarity.
                                </p>
                                {/* Visual Mockup - Abstract Chart */}
                                <div className="mt-auto relative w-full h-[450px] shrink-0 flex items-end justify-between gap-2 px-2 pb-2">
                                    {[40, 70, 45, 90, 65, 100, 85].map((height, i) => (
                                        <div key={i} className="w-1/6 bg-gradient-to-t from-violet-500 to-fuchsia-400 rounded-t-sm group-hover:from-emerald-400 group-hover:to-teal-300 transition-all duration-500 delay-75" style={{ height: `${height}%`, opacity: 0.5 + (i * 0.05) }}></div>
                                    ))}
                                    {/* Overlay line */}
                                    <svg className="absolute inset-0 w-full h-full drop-shadow-md overflow-visible" preserveAspectRatio="none" viewBox="-2 -2 104 104">
                                        <path d="M0 60 Q 15 40, 30 55 T 60 20 T 100 35" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: Standard Square */}
                        <div className="relative col-span-1 border border-slate-200/60 bg-white rounded-[2rem] overflow-hidden group hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full z-0 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(251,191,36,0.12),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="p-8 z-10 relative flex flex-col h-full">
                                <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center mb-5 border border-amber-100 shadow-sm">
                                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Digital Records</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Secure, unified digital health records accessible to authorized personnel from any device.
                                </p>
                                <div className="mt-6 flex items-center justify-between rounded-xl bg-amber-50/60 border border-amber-100 px-3 py-2">
                                    <div className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                                        <span className="text-xs font-semibold text-amber-800">Encrypted</span>
                                    </div>
                                    <span className="text-xs font-bold text-slate-700">2.4M</span>
                                </div>
                                <div className="mt-auto bg-slate-50 rounded-2xl p-4 border border-slate-100 shadow-sm">
                                    <div className="flex items-center justify-between mb-3">
                                        <p className="text-xs font-bold text-slate-700">Recent Activity</p>
                                        <span className="text-[11px] font-semibold text-slate-500">Today</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-emerald-500/80"></span>
                                            <div className="h-2 w-full bg-slate-200/80 rounded-full"></div>
                                            <span className="text-[11px] font-semibold text-slate-500">14</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-blue-500/70"></span>
                                            <div className="h-2 w-4/5 bg-slate-200/80 rounded-full"></div>
                                            <span className="text-[11px] font-semibold text-slate-500">9</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-amber-500/70"></span>
                                            <div className="h-2 w-2/3 bg-slate-200/80 rounded-full"></div>
                                            <span className="text-[11px] font-semibold text-slate-500">6</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 4: Standard Square */}
                        <div className="relative col-span-1 border border-slate-200/60 bg-white rounded-[2rem] overflow-hidden group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full z-0 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.14),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="p-8 z-10 relative flex flex-col h-full">
                                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-5 border border-blue-100 shadow-sm">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Supplier Network</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Streamlined procurement workflows and 1-click supplier restocking directly within the app.
                                </p>
                                <div className="mt-6 flex items-center justify-between rounded-xl bg-blue-50/60 border border-blue-100 px-3 py-2">
                                    <p className="text-xs font-semibold text-blue-800">Restock SLA</p>
                                    <p className="text-xs font-bold text-slate-700">4–8 hrs</p>
                                </div>
                                <div className="mt-auto rounded-2xl bg-slate-50 border border-slate-100 p-4 shadow-sm">
                                    <div className="flex items-center justify-between mb-3">
                                        <p className="text-xs font-bold text-slate-700">Top Suppliers</p>
                                        <span className="text-[11px] font-semibold text-slate-500">Verified</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex -space-x-2">
                                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white"></div>
                                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 border-2 border-white"></div>
                                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 border-2 border-white"></div>
                                            <div className="w-9 h-9 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-700">+12</div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs font-bold text-slate-800">1-click PO</p>
                                            <p className="text-[11px] font-semibold text-slate-500">Auto-match pricing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Built for Enterprise Section */}
            <section className="relative py-28 overflow-hidden bg-slate-900 border-t border-slate-800">
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-full h-[600px] bg-gradient-to-bl from-violet-600/20 via-emerald-500/10 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 mb-6">
                                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                <span className="text-sm font-medium text-slate-300">Enterprise Ready</span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                                Scale Without Limits.
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                                    Uncompromising Security.
                                </span>
                            </h2>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                                Designed for complex, multi-location healthcare operations demanding absolute reliability and total control over their data ecosystem.
                            </p>

                            <div className="space-y-8">
                                {/* Feature 1 */}
                                <div className="flex gap-5 group">
                                    <div className="flex-shrink-0 w-14 h-14 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
                                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">Zero-Trust Architecture</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            Bank-grade AES-256 encryption at rest, TLS 1.3 in transit, and continuous SOC2 compliance auditing.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex gap-5 group">
                                    <div className="flex-shrink-0 w-14 h-14 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center group-hover:bg-violet-500/10 group-hover:border-violet-500/30 transition-colors">
                                        <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">Infinite Scalability</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            Manage 1 clinic or 1,000. Our globally distributed database ensures sub-50ms latency anywhere.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="flex gap-5 group">
                                    <div className="flex-shrink-0 w-14 h-14 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-colors">
                                        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">Automated Compliance</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            Built-in regulatory reporting, automated audit trails, and 1-click export for inspectors.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Visual */}
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                {/* Pharmacist Card */}
                                <div className="relative bg-emerald-400 rounded-3xl overflow-hidden shadow-xl col-span-2 lg:col-span-1 h-64 group">
                                    <img src="/feature-1.jpg" alt="Pharmacist" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/20 to-transparent flex flex-col justify-end p-6">
                                        <p className="text-white font-bold text-xl mb-1">Expert Staff</p>
                                        <p className="text-emerald-200 text-sm">Empowered by technology</p>
                                    </div>
                                </div>

                                {/* Store Image Placeholder */}
                                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl col-span-2 lg:col-span-1 h-64 group">
                                    <img src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=800" alt="Medical Technology" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-6">
                                        <p className="text-white font-bold text-xl mb-1">Modern Equipment</p>
                                        <p className="text-slate-300 text-sm">Seamless integrations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Insights Section */}
            <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-100 rounded-full px-4 py-1.5 mb-5">
                            <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            <span className="text-sm font-medium text-violet-700">Powered by AI</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
                            Intelligence Built Into<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Every Workflow</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Pillmate's AI engine works silently in the background—predicting, alerting, and optimizing your operations around the clock.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="relative bg-gradient-to-br from-violet-600 to-indigo-700 rounded-3xl p-8 text-white overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-violet-200">
                            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10"></div>
                            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Predictive Analytics</h3>
                            <p className="text-violet-200 text-sm leading-relaxed">Anticipate drug demand, forecast patient volumes, and flag compliance gaps—before they become costly problems.</p>
                            <div className="mt-6 bg-white/10 rounded-2xl p-4">
                                <div className="flex justify-between text-xs mb-2"><span className="text-violet-200">Drug Demand Forecast</span><span className="font-semibold">94% Accuracy</span></div>
                                <div className="w-full bg-white/20 rounded-full h-1.5"><div className="bg-white rounded-full h-1.5 w-[94%]"></div></div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative bg-gradient-to-br from-emerald-500 to-teal-700 rounded-3xl p-8 text-white overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-emerald-200">
                            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10"></div>
                            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Smart Alerts</h3>
                            <p className="text-emerald-100 text-sm leading-relaxed">Get context-aware, real-time alerts for expiring medications, critical stock drops, and patient prescription renewals.</p>
                            <div className="mt-6 space-y-2">
                                <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2"><span className="w-2 h-2 rounded-full bg-amber-300"></span><span className="text-xs">Amoxicillin stock critical</span></div>
                                <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2"><span className="w-2 h-2 rounded-full bg-emerald-300"></span><span className="text-xs">3 prescriptions renewed</span></div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative bg-gradient-to-br from-rose-500 to-pink-700 rounded-3xl p-8 text-white overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-rose-200">
                            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10"></div>
                            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Patient Health Insights</h3>
                            <p className="text-rose-100 text-sm leading-relaxed">AI-driven medication adherence tracking and health trend analysis help doctors deliver proactive, personalized care.</p>
                            <div className="mt-6 bg-white/10 rounded-2xl p-4">
                                <div className="flex justify-between text-xs mb-2"><span className="text-rose-200">Adherence Rate</span><span className="font-semibold">↑ 40% avg improvement</span></div>
                                <div className="w-full bg-white/20 rounded-full h-1.5"><div className="bg-white rounded-full h-1.5 w-[80%]"></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrations Section */}
            <section id="integrations" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-1.5 mb-5">
                            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v6h6M20 20v-6h-6M20 4l-6 6M4 20l6-6" />
                            </svg>
                            <span className="text-sm font-medium text-emerald-700">Integrates with your stack</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Connect every workflow</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Bring patients, inventory, and billing together. Pillmate helps you sync data safely and keep teams aligned.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white hover:border-emerald-500 hover:bg-emerald-50 rounded-[2rem] border border-slate-200/60 p-7 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M6 7V5a2 2 0 012-2h8a2 2 0 012 2v2M6 7v14a2 2 0 002 2h8a2 2 0 002-2V7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">EMR & Patient Systems</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Sync patient demographics, prescriptions, and visit notes with minimal setup.
                            </p>
                        </div>

                        <div className="bg-white hover:border-violet-500 hover:bg-violet-50 rounded-[2rem] border border-slate-200/60 p-7 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-violet-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253l7.5 4.5v7.494l-7.5 4.5-7.5-4.5v-7.494l7.5-4.5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v21" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Accounting & Billing</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Export invoices and payments to keep your books accurate and audit-ready.
                            </p>
                        </div>

                        <div className="bg-white hover:border-blue-500 hover:bg-blue-50 rounded-[2rem] border border-slate-200/60 p-7 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L2 12l7.75-5M14.25 17L22 12l-7.75-5" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Suppliers & Stock Feeds</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Automate purchase orders, stock updates, and expiry alerts across stores.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 bg-slate-50 border border-slate-200/60 rounded-[2rem] p-8">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div>
                                <p className="text-sm font-semibold text-slate-700 mb-1">API-first integration</p>
                                <h3 className="text-2xl font-bold text-slate-900">Secure by design</h3>
                            </div>
                            <p className="text-slate-600 max-w-2xl leading-relaxed">
                                Token-based access, audit logs, and role-based permissions help you connect safely without losing control.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gradient-to-br from-indigo-50 to-violet-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Words from the Frontline
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Trusted by healthcare professionals across the globe.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {homePageConfig.testimonials.map((t) => (
                            <div key={t.key} className="bg-white rounded-2xl p-6 border border-gray-100">
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: 5 }).map((_, i) => {
                                        const rating = t.rating ?? 5;
                                        const filled = i < rating;
                                        return (
                                        <svg
                                            key={i}
                                            className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        );
                                    })}
                                </div>
                                <p className="text-gray-700 mb-4">{t.quote}</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <span className="text-emerald-600 font-semibold">{t.initials}</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{t.name}</p>
                                        <p className="text-sm text-gray-600">{t.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-24 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Everything you need to know about setting up and running Pillmate in your practice.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {HOME_FAQ.map((item) => {
                            const isOpen = openFaqId === item.id;
                            return (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaqId((prev) => (prev === item.id ? null : item.id))}
                                        className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4"
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-${item.id}`}
                                    >
                                        <span className="text-xl font-semibold text-slate-900">
                                            {item.question}
                                        </span>
                                        <svg
                                            className={`w-5 h-5 text-emerald-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>

                                    <div
                                        id={`faq-${item.id}`}
                                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className={`${isOpen ? "px-6 sm:px-8 pb-6 sm:pb-8" : "px-6 sm:px-8 pb-0"}`}>
                                                <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-1.5 mb-5">
                            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7H14a3.5 3.5 0 010 7H6" />
                            </svg>
                            <span className="text-sm font-medium text-emerald-700">{homePageConfig.pricing.badgeLabel}</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                            {homePageConfig.pricing.title}
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            {homePageConfig.pricing.subtitle}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {homePageConfig.pricing.plans.map((plan) => {
                            const isPopular = plan.variant === "popular";
                            const cardClass = isPopular
                                ? "group relative bg-gradient-to-b from-emerald-600 to-emerald-500 rounded-[2rem] p-8 text-white border border-emerald-500/60 shadow-xl shadow-emerald-500/10 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
                                : "group relative bg-white rounded-[2rem] border border-slate-200/60 p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300";

                            const glowClass = isPopular
                                ? "pointer-events-none absolute inset-0 opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_55%)]"
                                : plan.key === "enterprise"
                                    ? "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_55%)]"
                                    : "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_55%)]";

                            const featureTextClass = isPopular ? "text-white/90" : "text-slate-700";
                            const descClass = isPopular ? "text-white/90" : "text-slate-600";
                            const priceClass = isPopular ? "text-white" : "text-slate-900";
                            const checkClass = isPopular ? "text-white" : "text-emerald-600";

                            const ctaNode =
                                plan.cta.kind === "link" ? (
                                    <Link
                                        to={plan.cta.to}
                                        className="mt-8 flex justify-center items-center w-full border border-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors"
                                    >
                                        {plan.cta.label}
                                    </Link>
                                ) : plan.cta.kind === "authLink" ? (
                                    <Link
                                        to={isLoggedIn ? plan.cta.toWhenLoggedIn : plan.cta.toWhenLoggedOut}
                                        className="mt-8 flex justify-center items-center w-full bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl border border-white/40 shadow-sm hover:shadow-md hover:bg-white/90 transition-all"
                                    >
                                        {plan.cta.label}
                                    </Link>
                                ) : (
                                    <a
                                        href={plan.cta.href}
                                        className="mt-8 flex justify-center items-center w-full border border-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors"
                                    >
                                        {plan.cta.label}
                                    </a>
                                );

                            return (
                                <div key={plan.key} className={cardClass}>
                                    <div className={glowClass} />
                                    {isPopular ? (
                                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
                                            <span className="w-2 h-2 rounded-full bg-white"></span>
                                            <span className="text-sm font-semibold">{plan.popularLabel ?? "Most Popular"}</span>
                                        </div>
                                    ) : null}
                                    <h3 className={`text-xl font-bold mb-2 ${isPopular ? "" : "text-slate-900"}`}>{plan.name}</h3>
                                    <p className={`${descClass} mb-6`}>{plan.description}</p>
                                    <div className="flex items-end gap-2 mb-6">
                                        <span className={`text-4xl font-extrabold ${priceClass}`}>{plan.price}</span>
                                        {plan.period ? <span className={`text-sm mb-1 ${isPopular ? "text-white/80" : "text-slate-500"}`}>{plan.period}</span> : null}
                                    </div>
                                    <ul className={`space-y-3 ${featureTextClass}`}>
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2">
                                                <Check className={`w-4 h-4 ${checkClass}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    {ctaNode}
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-10 text-center text-sm text-slate-600">
                        {homePageConfig.pricing.footerNote}
                    </div>
                </div>
            </section>

            {/* CTA Section with Form */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '32px 32px'
                    }} />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="text-white">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                                Start Your 1-Month
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Free Trial Today.</span>
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                Experience the future of healthcare. Full access to all enterprise features. Join the 500+ clinics already utilizing Pillmate's premium infrastructure.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 shadow-inner">
                                        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-slate-200 font-medium">AI-Powered Clinical Insights</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 shadow-inner">
                                        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-slate-200 font-medium">24/7 Enterprise-grade Support</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 shadow-inner">
                                        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-slate-200 font-medium">Unlimited Encrypted Patient Records</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="relative">
                            {/* Decorative blur behind form */}
                            <div className="absolute -inset-4 bg-emerald-500/20 rounded-[3rem] blur-2xl z-0"></div>

                            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl z-10">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-emerald-50 mb-2">
                                            Full Name
                                        </label>
                                        <Input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            placeholder="Dr. Jane Smith"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            className="w-full p-4 bg-slate-900/50 border-white/10 text-white placeholder-slate-400 focus:ring-emerald-500 focus:border-emerald-500 h-13 rounded-xl"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-emerald-50 mb-2">
                                            Work Email
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="jane@clinic.example.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full p-4 bg-slate-900/50 border-white/10 text-white placeholder-slate-400 focus:ring-emerald-500 focus:border-emerald-500 h-13 rounded-xl"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-emerald-50 mb-2">
                                            Phone Number
                                        </label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full p-4 bg-slate-900/50 border-white/10 text-white placeholder-slate-400 focus:ring-emerald-500 focus:border-emerald-500 h-13 rounded-xl"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="specialty" className="block text-sm font-medium text-emerald-50 mb-2">
                                            Medical Specialization
                                        </label>
                                        <Input
                                            id="specialty"
                                            name="specialty"
                                            type="text"
                                            placeholder="General Practice, Pharmacy, etc."
                                            value={formData.specialty}
                                            onChange={handleInputChange}
                                            className="w-full p-4 bg-slate-900/50 border-white/10 text-white placeholder-slate-400 focus:ring-emerald-500 focus:border-emerald-500 h-13 rounded-xl"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-900 font-bold py-4 rounded-xl text-lg shadow-[0_0_2rem_-0.5rem_rgba(16,185,129,0.5)] hover:shadow-[0_0_3rem_-0.5rem_rgba(16,185,129,0.6)] transition-all mt-4 border-none"
                                    >
                                        Start Free Trial
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 border-t border-slate-800 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        {/* Brand */}
                        <div>
                            <Link to="/" className="flex items-center gap-2 mb-4">
                                <img src="/BRANDLOGO.svg" alt="Pillmate Logo" className="h-8 w-auto" />
                                <span className="text-xl font-semibold text-white">Pillmate</span>
                            </Link>
                            <p className="text-sm text-slate-400">
                                Healthcare management you actually want to use.
                            </p>
                        </div>

                        {/* Product */}
                        <div>
                            <h4 className="font-semibold text-white mb-4">Product</h4>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li><a href="#features" className="hover:text-emerald-400 transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Integration</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="font-semibold text-white mb-4">Company</h4>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="font-semibold text-white mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li><Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
                                <li><Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-slate-800 pt-8">
                        <p className="text-sm text-slate-500 text-center">
                            © {new Date().getFullYear()} Pillmate. Healthcare built right. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
