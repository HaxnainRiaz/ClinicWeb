"use client";

import { use } from "react";
import { doctors } from "@/lib/data";
import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { PillButton } from "@/components/ui/PillButton";
import { Section } from "@/components/ui/Section";
import {
    Star, Clock, GraduationCap, Globe,
    CheckCircle2, ChevronRight, Calendar,
    ShieldCheck, Activity, Award
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mockImages } from "@/lib/mockImages";

export default function DoctorDetailPage({ params }) {
    const resolvedParams = use(params);
    const doctor = doctors.find(d => d.slug === resolvedParams.slug);

    if (!doctor) return notFound();

    return (
        <main className="bg-brand-bg min-h-screen">
            <HeaderNav />

            {/* ── Doctor Hero Profile ── */}
            <Section className="relative border-b border-gray-lighter pb-12 lg:pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={mockImages.pageHeroes.doctors}
                        alt=""
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
                </div>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Visual Profile */}
                    <div className="lg:col-span-5 relative group">
                        <div className="aspect-[4/5] rounded-[40px] overflow-hidden border-[6px] border-white shadow-3xl relative animate-in zoom-in duration-700">
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Experience Badge */}
                            <div className="absolute top-8 right-8 bg-primary text-white p-6 rounded-[40px] shadow-xl text-center backdrop-blur-md">
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-none mb-1">Experience</p>
                                <p className="text-2xl font-black tracking-tight">{doctor.experience}</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Profile */}
                    <div className="lg:col-span-7 space-y-10">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="px-5 py-2 rounded-full bg-brand-bg text-primary text-[10px] font-black uppercase tracking-[0.2em] shadow-sm border border-primary/10">
                                    {doctor.specialty} Specialist
                                </span>
                                <div className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-white border border-gray-lighter shadow-sm">
                                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                                    <span className="text-[10px] font-black text-gray-darkest uppercase tracking-widest">{doctor.rating} Rating</span>
                                </div>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-black text-gray-darkest tracking-tight leading-[0.95]">{doctor.name}</h1>
                            <p className="text-xl font-medium text-gray-dark max-w-2xl leading-relaxed">
                                Dedicated to providing high-quality, compassionate care through advanced medical techniques and patient education.
                            </p>
                        </div>

                        {/* Fast Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {[
                                { icon: GraduationCap, label: "Education", value: "MD / PhD" },
                                { icon: Activity, label: "Operations", value: "500+" },
                                { icon: Globe, label: "Languages", value: doctor.languages.join(', ') },
                                { icon: Award, label: "Certificates", value: "Board Certified" }
                            ].map((stat, i) => (
                                <div key={stat.label} className="bg-white p-6 rounded-[40px] border border-gray-lighter shadow-soft space-y-3">
                                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <stat.icon size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[8px] font-black text-gray-muted uppercase tracking-widest mb-1">{stat.label}</p>
                                        <p className="text-xs font-black text-gray-darkest tracking-tight">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <Link href="/appointments">
                                <PillButton className="h-14 px-12 text-[12px] tracking-widest font-black uppercase shadow-2xl shadow-primary/30">
                                    Book Now <ChevronRight size={18} strokeWidth={3} />
                                </PillButton>
                            </Link>
                            <Link href="/contact" className="h-14 px-12 rounded-pill border-2 border-primary text-primary font-black text-[12px] tracking-widest uppercase hover:bg-primary/5 transition-all inline-flex items-center justify-center gap-3">
                                <ShieldCheck size={18} /> Instant Consultation
                            </Link>
                        </div>
                    </div>

                </div>
            </Section>

            {/* ── Doctor Core Details ── */}
            <Section className="py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left: About & Services */}
                    <div className="lg:col-span-8 space-y-12">
                        <article className="space-y-8">
                            <h3 className="text-4xl font-black text-gray-darkest tracking-tight">Biography</h3>
                            <p className="text-lg font-medium text-gray-dark leading-relaxed max-w-3xl">
                                {doctor.about}
                            </p>
                        </article>

                        <div className="space-y-8">
                            <h3 className="text-4xl font-black text-gray-darkest tracking-tight">Services Offered</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {doctor.services.map((service, i) => (
                                    <div key={service} className="p-6 rounded-3xl bg-white border border-gray-lighter shadow-soft flex items-center gap-6 group hover:border-primary transition-all">
                                        <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <span className="text-[13px] font-black text-gray-darkest uppercase tracking-widest">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Availability Sticky Card */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-gray-darkest p-8 rounded-[40px] text-white space-y-8 shadow-3xl">
                                <div className="space-y-2 text-center">
                                    <h5 className="text-[11px] font-black uppercase tracking-[0.2em] text-white/60">Schedule Preview</h5>
                                    <h3 className="text-2xl font-black tracking-tight">Next Availability</h3>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-white/10 p-5 rounded-[24px] border border-white/10 flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                                            <Calendar size={20} className="text-white" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-black uppercase tracking-widest text-white/50 mb-1">Next Day</span>
                                            <span className="font-black text-sm tracking-tight">{doctor.availability[0]}</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/10 p-5 rounded-[24px] border border-white/10 flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                                            <Clock size={20} className="text-white" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-black uppercase tracking-widest text-white/50 mb-1">Working Hours</span>
                                            <span className="font-black text-sm tracking-tight">{doctor.availability[1]}</span>
                                        </div>
                                    </div>
                                </div>

                                <PillButton className="w-full h-14 bg-white text-primary hover:bg-brand-surface text-xs font-black uppercase tracking-widest">
                                    Reserve this doctor
                                </PillButton>
                            </div>

                            {/* Trust Pill */}
                            <div className="p-8 rounded-[40px] bg-white border-2 border-primary/10 flex items-center gap-6 shadow-soft">
                                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0">
                                    <CheckCircle2 size={14} />
                                </div>
                                <p className="text-[10px] font-black text-gray-darkest uppercase tracking-widest leading-relaxed">
                                    Verified specialist with board certifications and 100+ positive patient reviews.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>

            <Footer />
        </main>
    );
}
