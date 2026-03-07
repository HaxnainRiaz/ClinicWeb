"use client";

import { use } from "react";
import { services } from "@/lib/data";
import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { PillButton } from "@/components/ui/PillButton";
import { Section } from "@/components/ui/Section";
import {
    CheckCircle2, ChevronRight, Download,
    HelpCircle, ShieldCheck, Activity, Star
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mockImages } from "@/lib/mockImages";

export default function ServiceDetailPage({ params }) {
    const resolvedParams = use(params);
    const service = services.find(s => s.slug === resolvedParams.slug);

    if (!service) return notFound();

    return (
        <main className="bg-brand-bg min-h-screen">
            <HeaderNav />

            {/* ── Service Detail Hero ── */}
            <Section className="relative border-b border-gray-lighter pb-12 lg:pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={mockImages.pageHeroes.services}
                        alt=""
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
                </div>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    <div className="lg:col-span-7 space-y-10 order-last lg:order-first">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="px-5 py-2 rounded-full bg-brand-bg text-primary text-[10px] font-black uppercase tracking-[0.2em] shadow-sm border border-primary/10">
                                    {service.category} Service
                                </span>
                                <div className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-white border border-gray-lighter shadow-sm">
                                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                                    <span className="text-[10px] font-black text-gray-darkest uppercase tracking-widest">Top Rated Care</span>
                                </div>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-black text-gray-darkest tracking-tight leading-[0.95]">{service.name}</h1>
                            <p className="text-xl font-medium text-gray-dark max-w-2xl leading-relaxed">
                                {service.overview}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <Link href="/appointments">
                                <PillButton className="h-14 px-12 text-[12px] tracking-widest font-black uppercase shadow-2xl shadow-primary/30">
                                    Book Service <ChevronRight size={18} strokeWidth={3} />
                                </PillButton>
                            </Link>
                            <Link href="/contact" className="h-14 px-12 rounded-pill border-2 border-primary text-primary font-black text-[12px] tracking-widest uppercase hover:bg-primary/5 transition-all inline-flex items-center justify-center gap-3">
                                <HelpCircle size={18} /> Ask a Specialist
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative group">
                        <div className="aspect-[4/5] rounded-[40px] overflow-hidden border-[6px] border-white shadow-3xl relative animate-in zoom-in duration-700">
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>

                </div>
            </Section>

            {/* ── Content Sections ── */}
            <Section className="py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Benefits & Procedures */}
                    <div className="lg:col-span-8 space-y-12">
                        <div className="space-y-10">
                            <h3 className="text-4xl font-black text-gray-darkest tracking-tight">Key Benefits</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.benefits.map((benefit, i) => (
                                    <div key={i} className="p-6 rounded-[32px] bg-white border border-gray-lighter shadow-soft space-y-4 group hover:border-primary transition-all">
                                        <div className="w-16 h-16 rounded-[24px] bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                            <Activity size={28} />
                                        </div>
                                        <p className="text-lg font-black text-gray-darkest tracking-tight leading-snug">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-10">
                            <h3 className="text-4xl font-black text-gray-darkest tracking-tight">Procedure Steps</h3>
                            <div className="space-y-4 max-w-3xl">
                                {service.procedure.map((step, i) => (
                                    <div key={i} className="flex items-start gap-8 p-6 rounded-[24px] bg-white border border-gray-lighter hover:shadow-float transition-all group">
                                        <div className="w-12 h-12 rounded-full bg-gray-darkest text-white flex items-center justify-center text-sm font-black flex-shrink-0 group-hover:bg-primary transition-colors">
                                            0{i + 1}
                                        </div>
                                        <div className="flex flex-col gap-1 py-1">
                                            <p className="font-bold text-lg text-gray-darkest">{step}</p>
                                            <p className="text-sm font-medium text-gray-dark opacity-60">Professional evaluation and clinical guidance provided by our expert team.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-10 pt-10">
                            <h3 className="text-4xl font-black text-gray-darkest tracking-tight">FAQs</h3>
                            <div className="space-y-6">
                                {service.faq.map((item, i) => (
                                    <div key={i} className="bg-brand-surface p-6 rounded-[32px] border border-primary/10 space-y-3">
                                        <h5 className="text-xl font-black text-gray-darkest tracking-tight font-bold">{item.q}</h5>
                                        <p className="text-lg font-medium text-gray-dark leading-relaxed opacity-80">{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-primary p-8 rounded-[40px] text-white space-y-8 shadow-3xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 animate-pulse" />
                                <div className="space-y-4 text-center">
                                    <h4 className="text-3xl font-black tracking-tight leading-tight">Ready to get started?</h4>
                                    <p className="text-white/80 font-medium">Schedule your consultation today and take the first step towards better health.</p>
                                </div>
                                <div className="space-y-4">
                                    <Link href="/appointments" className="block">
                                        <PillButton className="w-full h-14 bg-white text-primary hover:bg-brand-surface text-xs font-black uppercase tracking-widest shadow-lg">
                                            Start Appointment Flow
                                        </PillButton>
                                    </Link>
                                    <button className="w-full h-14 rounded-pill border-2 border-white/20 text-white hover:bg-white/10 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3">
                                        <Download size={18} /> Service Brochure
                                    </button>
                                </div>
                            </div>

                            <div className="p-8 rounded-[40px] bg-white border border-gray-lighter flex items-center gap-6 shadow-soft">
                                <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center text-primary shrink-0 transition-transform hover:scale-110">
                                    <ShieldCheck size={24} />
                                </div>
                                <p className="text-[11px] font-black text-gray-darkest uppercase tracking-widest leading-normal">
                                    Guaranteed professional protocol and patient safety standards at every stage.
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
