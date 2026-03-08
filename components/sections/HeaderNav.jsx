"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Search, Menu, X, Calendar, ChevronRight } from "lucide-react";
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
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        setIsLoggedIn(localStorage.getItem("medify_logged_in") === "true");
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* Close mobile menu on route change */
    useEffect(() => { setMobileOpen(false); setSearchOpen(false); }, [pathname]);

    /* Prevent body scroll when drawer is open */
    useEffect(() => {
        if (mobileOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

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
                "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/96 backdrop-blur-2xl border-b border-gray-lighter/80 shadow-soft"
                    : "bg-transparent border-b border-transparent"
            )}
            style={{ height: "76px" }}
        >
            <div className="container-custom h-full flex items-center">
                <nav className="flex items-center justify-between gap-6 w-full">

                    {/* ── Logo ── */}
                    <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
                        <div className="w-10 h-10 rounded-[14px] bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-all duration-300">
                            <div className="w-4.5 h-4.5 rounded-full border-[2.5px] border-white flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[19px] font-bold tracking-tight text-gray-darkest leading-none">Medify</span>
                            <span className="text-[9px] font-semibold text-primary uppercase tracking-[0.18em] leading-none mt-0.5">Specialist Clinic</span>
                        </div>
                    </Link>

                    {/* ── Desktop Nav Links ── */}
                    <div className="hidden lg:flex items-center gap-1">
                        {NAV_LINKS.map(({ label, href }) => (
                            <Link
                                key={href}
                                href={href}
                                className={cn(
                                    "px-4 py-2 rounded-full text-[13.5px] font-medium transition-all duration-200 whitespace-nowrap",
                                    isActive(href)
                                        ? "bg-primary text-white shadow-sm shadow-primary/20"
                                        : "text-gray-medium hover:text-primary hover:bg-primary/6"
                                )}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* ── Desktop Right Actions ── */}
                    <div className="hidden lg:flex items-center gap-3 shrink-0">
                        {/* Search */}
                        <button
                            onClick={() => setSearchOpen(!searchOpen)}
                            aria-label="Search"
                            className={cn(
                                "w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200",
                                searchOpen ? "bg-gray-darkest text-white" : "bg-gray-lightest text-gray-muted hover:bg-primary/8 hover:text-primary"
                            )}
                        >
                            {searchOpen ? <X size={15} /> : <Search size={15} />}
                        </button>

                        {isLoggedIn ? (
                            <>
                                <Link
                                    href="/labresults"
                                    className="px-4 py-2 text-[13px] font-medium text-gray-medium hover:text-primary transition-colors"
                                >
                                    My Results
                                </Link>
                                <button
                                    onClick={() => {
                                        localStorage.removeItem("medify_logged_in");
                                        setIsLoggedIn(false);
                                        router.push("/");
                                    }}
                                    className="px-4 py-2 text-[13px] font-medium text-gray-medium border border-gray-lighter rounded-full hover:border-red-300 hover:text-red-500 transition-all"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="px-4 py-2 text-[13px] font-medium text-gray-medium hover:text-primary transition-colors"
                                >
                                    Login
                                </Link>
                            </>
                        )}

                        <Link
                            href="/appointments"
                            className="btn-primary text-[13px] !px-5 !py-2.5 !min-h-[40px] !rounded-[12px]"
                        >
                            <Calendar size={14} strokeWidth={2.5} />
                            Book Appointment
                        </Link>
                    </div>

                    {/* ── Mobile Actions ── */}
                    <div className="flex lg:hidden items-center gap-2">
                        <Link
                            href="/appointments"
                            className="flex items-center gap-1.5 px-4 py-2 bg-primary text-white rounded-full text-[12px] font-semibold shadow-sm shadow-primary/20"
                        >
                            <Calendar size={13} strokeWidth={2.5} />
                            Book
                        </Link>
                        <button
                            aria-label="Open menu"
                            className="w-9 h-9 rounded-full bg-gray-lightest flex items-center justify-center text-gray-dark"
                            onClick={() => setMobileOpen((p) => !p)}
                        >
                            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </nav>
            </div>

            {/* ── Search Overlay ── */}
            {searchOpen && (
                <div className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-3xl border-b border-gray-lighter py-6 shadow-lg animate-in slide-in-from-top duration-300">
                    <div className="container-custom max-w-3xl">
                        <form onSubmit={handleSearch} className="relative">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-light" size={20} />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Search specialists, services, or articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-32 py-4 rounded-[14px] bg-gray-lightest text-[15px] font-medium text-gray-darkest focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-light"
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white px-5 py-2 rounded-[10px] text-xs font-semibold shadow-sm hover:bg-primary-dark transition-colors"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* ── Mobile Drawer ── */}
            <div className={cn(
                "fixed inset-0 z-[60] lg:hidden transition-all duration-300 ease-in-out pointer-events-none",
                mobileOpen ? "opacity-100" : "opacity-0"
            )}>
                {/* Backdrop */}
                <div
                    className={cn(
                        "absolute inset-0 bg-gray-darkest/40 backdrop-blur-sm",
                        mobileOpen ? "pointer-events-auto" : "pointer-events-none"
                    )}
                    onClick={() => setMobileOpen(false)}
                />

                {/* Drawer */}
                <div className={cn(
                    "absolute top-0 right-0 w-[82vw] max-w-[360px] h-full bg-white shadow-2xl p-6 flex flex-col transform transition-transform duration-300 ease-out",
                    mobileOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
                )}>
                    {/* Drawer Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-[10px] bg-primary flex items-center justify-center text-white">
                                <div className="w-3.5 h-3.5 rounded-full border-2 border-white flex items-center justify-center">
                                    <div className="w-1 h-1 rounded-full bg-white" />
                                </div>
                            </div>
                            <span className="text-[16px] font-bold text-gray-darkest">Medify</span>
                        </div>
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="w-9 h-9 rounded-full bg-gray-lightest flex items-center justify-center text-gray-muted"
                            aria-label="Close menu"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Nav Links */}
                    <div className="flex flex-col gap-1 flex-1">
                        {NAV_LINKS.map(({ label, href }) => (
                            <Link
                                key={href}
                                href={href}
                                className={cn(
                                    "flex items-center justify-between px-4 py-3 rounded-[12px] text-[15px] font-medium transition-all duration-200",
                                    isActive(href)
                                        ? "bg-primary text-white shadow-sm"
                                        : "text-gray-dark hover:bg-gray-lightest hover:text-primary"
                                )}
                            >
                                {label}
                                <ChevronRight size={16} className={isActive(href) ? "opacity-80" : "opacity-30"} />
                            </Link>
                        ))}
                    </div>

                    {/* Drawer Footer */}
                    <div className="space-y-3 pt-6 border-t border-gray-lighter mt-6">
                        {isLoggedIn ? (
                            <>
                                <Link
                                    href="/labresults"
                                    className="block w-full py-3.5 text-center text-sm font-semibold rounded-[12px] border border-primary/20 text-primary hover:bg-primary-subtle transition-all"
                                >
                                    My Clinical Results
                                </Link>
                                <button
                                    onClick={() => {
                                        localStorage.removeItem("medify_logged_in");
                                        setIsLoggedIn(false);
                                        router.push("/");
                                    }}
                                    className="block w-full py-3.5 text-center text-sm font-semibold rounded-[12px] border border-red-100 text-red-500 hover:bg-red-50 transition-all"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="block w-full py-3.5 text-center text-sm font-semibold rounded-[12px] border border-gray-lighter text-gray-dark hover:bg-gray-lightest transition-all"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/signup"
                                    className="block w-full py-3.5 text-center text-sm font-semibold rounded-[12px] border border-primary/20 text-primary hover:bg-primary-subtle transition-all"
                                >
                                    Create Account
                                </Link>
                            </>
                        )}
                        <Link
                            href="/appointments"
                            className="flex items-center justify-center gap-2 w-full py-3.5 text-center text-sm font-semibold rounded-[12px] bg-primary text-white shadow-md shadow-primary/20"
                        >
                            <Calendar size={15} strokeWidth={2.5} />
                            Book Appointment
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
