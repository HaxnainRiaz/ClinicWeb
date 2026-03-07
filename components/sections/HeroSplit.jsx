"use client";

import Link from "next/link";
import { mockImages } from "@/lib/mockImages";
import { ShieldCheck, Star, Heart, Calendar, Plus, Activity, Play, ArrowUpRight, CheckCircle2, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSplit() {
    return (
        <section className="relative pt-24 pb-10 md:pt-20 md:pb-12 overflow-hidden bg-brand-bg">
            <div className="container-custom relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Content Column */}
                <div className="lg:col-span-5 space-y-12 relative z-10 -mt-48">

                    {/* Top Tagline */}
                    <div className="flex items-start gap-6">
                        <div className="uppercase text-[10px] font-black text-gray-dark tracking-[0.25em] leading-[1.8]">
                            <span className="inline-block w-8 h-[2px] bg-primary align-middle mr-3"></span>
                            Trusted Medical<br />
                            Care Solutions For<br />
                            Modern Families
                        </div>
                        <div className="pt-1">
                            <Star size={18} className="text-primary flex-shrink-0 animate-pulse" fill="currentColor" />
                        </div>
                    </div>

                    {/* Headline */}
                    <div className="relative">
                        <h1 className="text-gray-darkest relative z-10 font-black leading-[0.95] tracking-tight">
                            Trusted Specialist<br />
                            for Every <span className="text-primary">Medical</span>
                            <br />
                            Need
                        </h1>
                        <div className="absolute -bottom-6 -left-4 -z-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                    </div>

                    {/* Multi-Step trust indicator */}
                    <div className="flex items-center gap-6 bg-white/50 backdrop-blur-md p-6 rounded-[40px] border border-white shadow-soft w-max">
                        <div className="flex -space-x-4">
                            {[0, 1, 2].map((i) => (
                                <div key={i} className="w-14 h-14 rounded-full border-4 border-white overflow-hidden bg-white shadow-lg relative transform hover:scale-110 transition-transform">
                                    <img src={mockImages.doctors[i]} alt="User" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="pr-4">
                            <div className="flex items-center gap-1.5 mb-1">
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} className="fill-yellow-400 text-yellow-400" />)}
                                </div>
                                <span className="text-[11px] font-black text-gray-darkest">4.9/5</span>
                            </div>
                            <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest">12k+ Global Reviews</p>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5 pt-4">
                        <Link href="/appointments" className="group flex items-center gap-4 bg-gray-darkest text-white px-2 py-2 pr-8 rounded-full shadow-2xl hover:bg-primary transition-all duration-500 hover:-translate-y-1">
                            <div className="w-10 h-10 bg-primary group-hover:bg-white group-hover:text-primary rounded-full flex items-center justify-center border-2 border-gray-darkest group-hover:border-transparent transition-all">
                                <Calendar size={18} strokeWidth={3} />
                            </div>
                            <span className="font-black text-[13px] uppercase tracking-widest">Schedule Visit</span>
                        </Link>

                        <Link href="/doctors" className="group flex items-center gap-4 bg-white border-2 border-gray-lighter hover:border-primary text-gray-darkest hover:text-primary px-2 py-2 pr-8 rounded-full shadow-soft transition-all duration-500 hover:-translate-y-1">
                            <div className="w-10 h-10 bg-brand-bg rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <Search size={18} strokeWidth={3} />
                            </div>
                            <span className="font-black text-[13px] uppercase tracking-widest">Find Specialty</span>
                        </Link>
                    </div>
                </div>

                {/* Right Media Column */}
                <div className="lg:col-span-7 relative min-h-[300px] w-full mt-12 lg:mt-0 z-10 lg:-mr-10">

                    {/* Main Image Container */}
                    <div className="relative w-full rounded-[60px] overflow-hidden shadow-3xl border-[8px] border-white bg-white group">
                        <img
                            src={mockImages.heroMain}
                            alt="Professional Clinic"
                            className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/10" />
                    </div>

                    {/* Floating Elements with Links */}

                    {/* Lung Disease */}
                    <div className="absolute top-12 lg:-left-4 z-20 px-5 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-3xl flex items-center gap-3 border border-white animate-in slide-in-from-left duration-1000">
                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 shadow-inner">
                            <Activity size={14} strokeWidth={3} />
                        </div>
                        <span className="text-[11px] font-black text-gray-darkest tracking-widest uppercase pr-3">Advanced Diagnostics</span>
                    </div>

                    {/* Orthopedics Link Card */}
                    <Link href="/contact" className="absolute top-1/4 left-6 lg:-left-12 z-20 p-6 bg-white rounded-[40px] shadow-3xl border border-white/50 animate-in zoom-in duration-1000 delay-300 w-[240px] group transition-all hover:-translate-y-2">
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-500 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <Heart size={20} fill="currentColor" />
                            </div>
                            <div>
                                <p className="text-sm font-black text-gray-darkest tracking-tight">Emergency Care</p>
                                <p className="text-[9px] font-black text-primary uppercase tracking-widest mt-0.5">24/7 Available</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex -space-x-3">
                                {[3, 0, 1].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                                        <img src={mockImages.doctors[i]} alt="doctor" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <ArrowUpRight size={14} strokeWidth={3} />
                            </div>
                        </div>
                    </Link>

                    {/* Extraordinary Medical Card */}
                    <div className="absolute top-1/2 right-2 lg:right-0 -translate-y-1/2 z-20 w-[220px] p-6 bg-gray-darkest text-white rounded-[40px] shadow-3xl border border-white/10 animate-in slide-in-from-right duration-1000 delay-500 group">
                        <div className="w-14 h-14 relative mb-4 bg-white/10 border-2 border-white/20 shadow-2xl rounded-2xl overflow-hidden">
                            <img src={mockImages.doctors[1]} alt="doctor" className="w-full h-full object-cover" />
                            <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-darkest z-10 animate-pulse" />
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                            <span className="text-[9px] font-black text-green-500 uppercase tracking-widest">System Active</span>
                        </div>
                        <p className="text-xs font-black leading-snug mb-5 tracking-tight group-hover:text-primary transition-colors">Personalized Recovery Planning & Specialized Care.</p>
                        <Link href="/doctors" className="flex items-center gap-3 py-2 border-t border-white/10 group-hover:border-primary/30 transition-colors">
                            <div className="w-7 h-7 rounded-full overflow-hidden border border-white/20">
                                <img src={mockImages.doctors[2]} alt="doctor" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">Meet Specialists</span>
                        </Link>
                    </div>

                    {/* Bottom Edge Specialty Tabs */}
                    <div className="absolute bottom-10 left-1/2 lg:left-[50%] -translate-x-1/2 z-30 flex items-center bg-white/80 backdrop-blur-xl rounded-full p-2 shadow-3xl border border-white">
                        {["Appointments", "Doctors", "Laboratory", "Inquiry"].map((tag, i) => (
                            <Link
                                key={i}
                                href={tag === "Doctors" ? "/doctors" : tag === "Appointments" ? "/appointments" : tag === "Laboratory" ? "/labresults" : "/contact"}
                                className={cn(
                                    "px-4 py-2 rounded-full text-[10px] font-black transition-all whitespace-nowrap tracking-widest uppercase",
                                    tag === "Appointments" ? "bg-primary text-white shadow-lg" : "text-gray-muted hover:text-primary hover:bg-primary/5"
                                )}
                            >
                                {tag}
                            </Link>
                        ))}
                    </div>

                </div>
            </div>

            {/* Background elements */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full blur-[140px] opacity-60 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] opacity-40 pointer-events-none" />
        </section>
    );
}
