"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Search, Menu, X, Calendar, User, LogIn, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Doctors", href: "/doctors" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

export function HeaderNav() {
    const pathname = usePathname();
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll, { passive: true });
        setIsLoggedIn(localStorage.getItem("medify_logged_in") === "true");
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* Close mobile menu on route change */
    useEffect(() => { setMobileOpen(false); setSearchOpen(false); }, [pathname]);

    const isActive = (href) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
            setSearchOpen(false);
            setSearchQuery("");
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-500",
                scrolled
                    ? "bg-white/95 backdrop-blur-2xl shadow-soft border-b border-gray-lighter py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container-custom">
                <nav className="flex items-center justify-between gap-8">

                    {/* ── Logo ── */}
                    <Link href="/" className="flex items-center gap-3 shrink-0 group">
                        <div className="w-11 h-11 rounded-[16px] bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/30 group-hover:rotate-12 transition-transform duration-500">
                            <div className="w-5 h-5 rounded-full border-[3px] border-white flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[20px] font-black tracking-tight text-gray-darkest leading-none">Medify</span>
                            <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] leading-none mt-1">Specialist Clinic</span>
                        </div>
                    </Link>

                    {/* ── Desktop pill nav ── */}
                    <div className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-md rounded-full px-2 py-2 shadow-soft border border-gray-lighter/50">
                        {NAV_LINKS.map(({ label, href }) => (
                            <Link
                                key={href}
                                href={href}
                                className={cn(
                                    "px-4 py-1.5 rounded-full text-[12px] font-black transition-all duration-300 whitespace-nowrap tracking-wide uppercase",
                                    isActive(href)
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "text-gray-muted hover:text-primary hover:bg-primary/5"
                                )}
                            >
                                {label}
                            </Link>
                        ))}

                        {/* Search Toggle */}
                        <button
                            onClick={() => setSearchOpen(!searchOpen)}
                            className={cn(
                                "ml-2 w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0",
                                searchOpen ? "bg-gray-darkest text-white rotate-90" : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
                            )}
                        >
                            {searchOpen ? <X size={16} /> : <Search size={16} strokeWidth={3} />}
                        </button>
                    </div>

                    {/* ── Desktop right actions ── */}
                    <div className="hidden lg:flex items-center gap-3 shrink-0">
                        {isLoggedIn ? (
                            <>
                                <Link
                                    href="/labresults"
                                    className="px-6 py-2 text-[11px] font-black text-primary hover:bg-primary/5 rounded-full transition-all uppercase tracking-[0.2em]"
                                >
                                    My Results
                                </Link>
                                <button
                                    onClick={() => {
                                        localStorage.removeItem("medify_logged_in");
                                        setIsLoggedIn(false);
                                        router.push("/");
                                    }}
                                    className="px-6 py-2 text-[11px] font-black border-2 border-gray-lighter rounded-full text-gray-darkest hover:border-red-500 hover:text-red-500 transition-all uppercase tracking-[0.2em]"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="px-6 py-2 text-[11px] font-black text-gray-darkest hover:text-primary transition-all uppercase tracking-[0.2em]"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/signup"
                                    className="px-6 py-2 text-[11px] font-black rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all uppercase tracking-[0.2em]"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                        <Link
                            href="/appointments"
                            className="flex items-center gap-3 px-6 py-2 text-[11px] font-black rounded-full bg-gray-darkest text-white shadow-2xl hover:bg-primary hover:shadow-primary/30 transition-all duration-500 uppercase tracking-[0.2em]"
                        >
                            <Calendar size={14} strokeWidth={3} />
                            Booking
                        </Link>
                    </div>

                    {/* ── Mobile hamburger ── */}
                    <div className="flex lg:hidden items-center gap-3">
                        <button
                            onClick={() => setSearchOpen(!searchOpen)}
                            className="w-11 h-11 rounded-full bg-white border border-gray-lighter shadow-soft flex items-center justify-center text-gray-muted"
                        >
                            <Search size={18} />
                        </button>
                        <button
                            className="w-11 h-11 rounded-full bg-primary text-white shadow-lg shadow-primary/20 flex items-center justify-center"
                            onClick={() => setMobileOpen((p) => !p)}
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </nav>
            </div>

            {/* ── Search Overlay ── */}
            {searchOpen && (
                <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-3xl border-b border-gray-lighter py-10 shadow-3xl animate-in slide-in-from-top duration-500 overflow-hidden">
                    <div className="container-custom max-w-4xl">
                        <form onSubmit={handleSearch} className="relative group">
                            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-primary" size={28} strokeWidth={3} />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Search specialists, services, or clinical articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-20 pr-10 py-6 rounded-[30px] bg-brand-bg text-xl font-black text-gray-darkest focus:outline-none focus:ring-8 focus:ring-primary/5 transition-all placeholder:text-gray-light tracking-tight"
                            />
                            <button type="submit" className="absolute right-6 top-1/2 -translate-y-1/2 bg-primary text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20">
                                Global Search
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* ── Mobile Side Navigation Drawer ── */}
            <div className={cn(
                "fixed inset-0 z-[60] lg:hidden transition-all duration-500 ease-in-out pointer-events-none",
                mobileOpen ? "opacity-100" : "opacity-0"
            )}>
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-gray-darkest/40 backdrop-blur-md pointer-events-auto"
                    onClick={() => setMobileOpen(false)}
                />

                {/* Content */}
                <div className={cn(
                    "absolute top-0 right-0 w-[80%] h-full bg-white shadow-2xl p-6 flex flex-col pointer-events-auto transform transition-transform duration-500 ease-out",
                    mobileOpen ? "translate-x-0" : "translate-x-full"
                )}>
                    <div className="flex items-center justify-between mb-16">
                        <span className="text-xl font-black text-gray-darkest tracking-tight">Medify Menu</span>
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-primary"
                        >
                            <X size={24} strokeWidth={3} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-2">
                        {NAV_LINKS.map(({ label, href }) => (
                            <Link
                                key={href}
                                href={href}
                                className={cn(
                                    "flex items-center justify-between px-6 py-3 rounded-[30px] text-lg font-black tracking-tight transition-all",
                                    isActive(href)
                                        ? "bg-primary text-white shadow-xl shadow-primary/20 scale-[1.02]"
                                        : "text-gray-dark hover:bg-brand-bg"
                                )}
                            >
                                {label}
                                <ChevronRight size={18} opacity={isActive(href) ? 1 : 0.2} />
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto space-y-4">
                        {isLoggedIn ? (
                            <>
                                <Link
                                    href="/labresults"
                                    className="block w-full py-6 text-center text-sm font-black rounded-[30px] border-2 border-primary text-primary hover:bg-brand-bg uppercase tracking-widest transition-all"
                                >
                                    My Clinical Results
                                </Link>
                                <button
                                    onClick={() => {
                                        localStorage.removeItem("medify_logged_in");
                                        setIsLoggedIn(false);
                                        router.push("/");
                                    }}
                                    className="block w-full py-6 text-center text-sm font-black rounded-[30px] border-2 border-red-100 text-red-500 hover:bg-red-50 uppercase tracking-widest transition-all"
                                >
                                    Logout of Portal
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="block w-full py-6 text-center text-sm font-black rounded-[30px] border-2 border-gray-lighter text-gray-darkest hover:bg-gray-50 uppercase tracking-widest transition-all"
                                >
                                    Login to Portal
                                </Link>
                                <Link
                                    href="/signup"
                                    className="block w-full py-6 text-center text-sm font-black rounded-[30px] border-2 border-primary text-primary hover:bg-brand-bg uppercase tracking-widest transition-all"
                                >
                                    Create Account
                                </Link>
                            </>
                        )}
                        <Link
                            href="/appointments"
                            className="block w-full py-6 text-center text-sm font-black rounded-[30px] bg-primary text-white shadow-2xl shadow-primary/30 uppercase tracking-widest"
                        >
                            Book Appointment
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
