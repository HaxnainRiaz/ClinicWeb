import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, Heart, Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-lighter py-10 lg:pb-8">
            <div className="container-custom">

                {/* ── Top Footer Section: Grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">

                    {/* Left: Brand & Vision */}
                    <div className="lg:col-span-4 space-y-12">
                        <Link href="/" className="flex items-center gap-3 shrink-0 group">
                            <div className="w-12 h-12 rounded-[18px] bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/30 group-hover:rotate-12 transition-transform duration-500">
                                <div className="w-5 h-5 rounded-full border-[3px] border-white flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[22px] font-black tracking-tight text-gray-darkest leading-none">Medify</span>
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] leading-none mt-1">Specialist Clinic</span>
                            </div>
                        </Link>

                        <p className="text-xl font-medium text-gray-dark leading-relaxed max-w-sm">
                            Redefining modern healthcare with advanced clinical research and personalized patient experiences.
                        </p>

                        <div className="flex items-center gap-5 pt-4">
                            {[
                                { Icon: Facebook, href: "#" },
                                { Icon: Twitter, href: "#" },
                                { Icon: Instagram, href: "#" },
                                { Icon: Linkedin, href: "#" }
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center text-gray-dark hover:bg-primary hover:text-white transition-all shadow-sm border border-transparent hover:border-primary hover:shadow-xl hover:shadow-primary/20"
                                >
                                    <Icon size={18} strokeWidth={2.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Middle: Links Grid */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <h5 className="text-[11px] font-black text-gray-darkest uppercase tracking-[0.25em] flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                Clinical
                            </h5>
                            <ul className="space-y-5">
                                {[
                                    { label: "Our Services", href: "/services" },
                                    { label: "Specialists", href: "/doctors" },
                                    { label: "Appointments", href: "/appointments" },
                                    { label: "Lab Results", href: "/login" },
                                    { label: "Insurance", href: "/faq" }
                                ].map(({ label, href }) => (
                                    <li key={label}>
                                        <Link href={href} className="text-[13px] font-black text-gray-muted hover:text-primary transition-colors flex items-center gap-3 group uppercase tracking-widest">
                                            <div className="h-0.5 w-0 group-hover:w-4 bg-primary transition-all duration-300" />
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-8">
                            <h5 className="text-[11px] font-black text-gray-darkest uppercase tracking-[0.25em] flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                Company
                            </h5>
                            <ul className="space-y-5">
                                {[
                                    { label: "Our Story", href: "/about" },
                                    { label: "Medical Blog", href: "/blog" },
                                    { label: "Career Info", href: "/contact" },
                                    { label: "FAQ Support", href: "/faq" },
                                    { label: "Clinical Team", href: "/doctors" }
                                ].map(({ label, href }) => (
                                    <li key={label}>
                                        <Link href={href} className="text-[13px] font-black text-gray-muted hover:text-primary transition-colors flex items-center gap-3 group uppercase tracking-widest">
                                            <div className="h-0.5 w-0 group-hover:w-4 bg-primary transition-all duration-300" />
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: Quick Action Card */}
                    <div className="lg:col-span-4 h-full">
                        <div className="bg-gray-darkest p-6 rounded-[60px] text-white flex flex-col justify-between h-full relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] group">
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[80px] -mr-16 -mt-16 group-hover:bg-primary/40 transition-colors" />

                            <div className="space-y-6 relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-primary border border-white/5">
                                    <ShieldCheck size={28} />
                                </div>
                                <h4 className="text-3xl font-black tracking-tight leading-tight">Secured Medical Portal Access</h4>
                                <p className="text-white/40 text-[13px] font-medium leading-relaxed">
                                    Login to your clinical dashboard to view laboratory results and historical recovery trends.
                                </p>
                            </div>

                            <Link href="/login" className="mt-12 relative z-10">
                                <button className="w-full h-14 bg-white text-gray-darkest text-xs font-black uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-all shadow-xl shadow-black/20 flex items-center justify-center gap-3">
                                    Member Login <ArrowRight size={16} strokeWidth={3} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── Mid Footer Section: Trust Bar ── */}
                <div className="bg-brand-bg/50 rounded-[40px] px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-8 mb-12 border border-gray-lighter/30">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 size={20} className="text-primary" />
                            <span className="text-[11px] font-black uppercase tracking-widest text-gray-darkest">Clinical Grade Security</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 size={20} className="text-primary" />
                            <span className="text-[11px] font-black uppercase tracking-widest text-gray-darkest">HIPAA Compliant Data</span>
                        </div>
                    </div>
                    <div className="h-0.5 flex-1 bg-gray-lighter/50 mx-10 hidden md:block" />
                    <Link href="/contact" className="flex items-center gap-4 group cursor-pointer">
                        <span className="text-[11px] font-black uppercase tracking-widest text-primary">Emergency Support</span>
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg animate-pulse">
                            <ArrowRight size={16} strokeWidth={3} />
                        </div>
                    </Link>
                </div>

                {/* ── Bottom Footer: Legal & Copyright ── */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 border-t border-gray-lighter pt-8">

                    {/* Copyright & Location */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <p className="text-[11px] font-black text-gray-darkest uppercase tracking-widest">
                            © 2024 MEDIFY CLINIC. ALL RIGHTS RESERVED
                        </p>
                        <div className="h-4 w-[1px] bg-gray-lighter hidden md:block" />
                        <p className="text-[10px] font-bold text-gray-muted uppercase tracking-[0.2em]">
                            Global Medical District, NY 10001
                        </p>
                    </div>

                    {/* Legal Links */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="/terms-and-conditions">
                            <button className="h-14 px-10 rounded-[20px] bg-white border border-gray-lighter text-gray-dark text-[10px] font-black uppercase tracking-widest hover:border-primary hover:text-primary transition-all shadow-sm">
                                Terms of Protocol
                            </button>
                        </Link>
                        <Link href="/privacy-policy">
                            <button className="h-14 px-10 rounded-[20px] bg-white border border-gray-lighter text-gray-dark text-[10px] font-black uppercase tracking-widest hover:border-primary hover:text-primary transition-all shadow-sm">
                                Clinical Privacy
                            </button>
                        </Link>
                        <Link href="/faq">
                            <button className="h-14 px-10 rounded-[20px] bg-white border border-gray-lighter text-gray-dark text-[10px] font-black uppercase tracking-widest hover:border-primary hover:text-primary transition-all shadow-sm">
                                Help Center
                            </button>
                        </Link>
                    </div>

                </div>
            </div>

            {/* Final aesthetic lift: Floating Heart and Cross on extreme bottom edges */}
            <div className="container-custom relative">
                <div className="absolute -bottom-2 right-0 opacity-10 pointer-events-none">
                    <Heart size={120} strokeWidth={1} className="text-primary" />
                </div>
            </div>
        </footer>
    );
}
