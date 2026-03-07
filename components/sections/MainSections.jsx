"use client";

import { useState } from "react";
import Link from "next/link";
import { mockImages } from "@/lib/mockImages";
import { Play, ArrowUpRight, Search, Plus, ExternalLink, Activity, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { doctors } from "@/lib/data";
import { Section, Card } from "../ui/Section";

export function MainSections() {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        }, 1500);
    };

    return (
        <section className="bg-brand-bg py-8 relative">
            <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                {/* Left Column (Team & Newsletter) */}
                <div className="flex flex-col gap-8 h-full">

                    {/* Team Mini Card */}
                    <Link href="/doctors" className="group bg-white rounded-3xl p-6 shadow-soft flex-1 flex flex-col justify-between border border-white hover:border-primary transition-all">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-surface text-[9px] font-black text-primary uppercase tracking-[0.2em] mb-6 shadow-sm border border-brand-bg">
                                Our Team <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            </div>
                            <h3 className="text-gray-darkest font-black leading-[1.15] mb-8 pr-10">
                                Our team <span className="font-medium text-brand-muted">can help you get best consultant</span>
                            </h3>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                            <div className="flex -space-x-4">
                                {[0, 1, 2, 3].map(i => (
                                    <div key={i} className="w-14 h-14 rounded-full border-4 border-white overflow-hidden bg-gray-100 relative shadow-soft">
                                        <img src={mockImages.doctors[i]} alt={`Doctor ${i}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-gray-lighter flex items-center justify-center text-gray-dark group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all shadow-sm">
                                <ArrowUpRight size={16} strokeWidth={2.5} />
                            </div>
                        </div>
                    </Link>

                    {/* Newsletter Bonus Card */}
                    <div className="bg-white rounded-3xl p-6 shadow-soft flex-1 flex flex-col justify-between border border-white">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-surface text-[9px] font-black text-primary uppercase tracking-[0.2em] mb-6 shadow-sm border border-brand-bg">
                                Get A Bonus <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            </div>
                            <h3 className="text-gray-darkest font-black leading-[1.15] mb-2 pr-10">
                                Discover <span className="text-brand-muted font-medium">our latest medical heath news.</span>
                            </h3>
                        </div>

                        <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row bg-white p-1.5 rounded-full border shadow-soft w-full overflow-hidden relative">
                            <input
                                required
                                type="email"
                                placeholder="Email"
                                className="flex-1 px-4 py-2.5 bg-transparent text-gray-darkest focus:outline-none placeholder:text-gray-muted text-sm font-bold"
                            />
                            <button
                                disabled={submitting || success}
                                className={cn(
                                    "px-8 py-2.5 transition-all text-white rounded-full text-xs font-black shadow-md uppercase tracking-widest flex items-center justify-center gap-2",
                                    success ? "bg-green-500 shadow-green-100/50" : "bg-[#4F84FF] hover:bg-primary-dark shadow-primary/30"
                                )}
                            >
                                {submitting ? <Loader2 size={16} className="animate-spin" /> : success ? <CheckCircle2 size={16} /> : "Subscribe"}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Column (Media Feature) */}
                <div className="relative h-full min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden shadow-float group">
                    <img
                        src={mockImages.facility}
                        alt="Medical innovation"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />

                    {/* Top Right floating icon */}
                    <Link href="/about" className="absolute top-8 right-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-float cursor-pointer hover:scale-110 transition-transform">
                        <ArrowUpRight size={18} strokeWidth={3} />
                    </Link>

                    {/* Center Play Button */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <button className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50 shadow-float group transition-transform hover:scale-110">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                                <Play size={18} fill="currentColor" className="ml-1" />
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export function SupportSplit() {
    return (
        <section className="bg-brand-bg py-8 relative overflow-hidden">
            <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* Left Side (Doctor portrait & Specialty cards) */}
                <div className="relative">
                    {/* Floating Innovation Pill */}
                    <div className="absolute top-10 left-0 lg:-left-6 z-20 px-4 py-2 bg-brand-bg rounded-full shadow-float flex items-center gap-2 border border-white">
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white">
                            <ExternalLink size={10} strokeWidth={3} />
                        </div>
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] px-2">Team Up And Innovate</span>
                    </div>

                    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-brand-surface shadow-float z-10">
                        <img src={mockImages.doctors[0]} alt="Doctor smiling" className="w-full h-full object-cover object-top" />
                    </div>

                    {/* Contact Button floating */}
                    <Link href="/contact" className="absolute bottom-16 -left-4 lg:-left-12 z-20 bg-white text-[10px] font-black text-gray-darkest uppercase tracking-widest px-6 py-3 rounded-full shadow-float border border-gray-lighter hover:border-primary flex items-center gap-2 transition-all">
                        Contact With Us <div className="w-4 h-4 bg-brand-surface rounded-full flex items-center justify-center"><ArrowUpRight size={10} className="text-primary" /></div>
                    </Link>

                    {/* 2 Small Cards row */}
                    <div className="grid grid-cols-2 gap-4 relative z-20">
                        {[
                            { title: "Specialties in Digestive System", bg: "bg-white", href: "/services/general-consultation" },
                            { title: "Treats Skin-Related Issues", bg: "bg-brand-surface", href: "/services/general-consultation" }
                        ].map((item, i) => (
                            <Link href={item.href} key={i} className={`p-4 rounded-2xl shadow-soft border border-white/50 group block transition-all hover:scale-105 active:scale-95 ${item.bg}`}>
                                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                                    <Plus size={16} strokeWidth={3} />
                                </div>
                                <h5 className="text-[13px] font-black tracking-tight text-gray-darkest mb-4 leading-snug">{item.title}</h5>
                                <div className="text-[10px] uppercase font-bold text-gray-dark group-hover:text-primary tracking-widest border-b border-gray-light pb-0.5 w-max">Learn More</div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Side Info */}
                <div className="space-y-10 lg:pl-10">
                    <div className="inline-flex items-center gap-4">
                        <div className="uppercase text-[9px] font-bold text-brand-muted tracking-[0.2em] leading-relaxed">
                            Reach out to us with any questions or to schedule a visit
                        </div>
                    </div>

                    <h2 className="text-gray-darkest leading-tight tracking-tight">
                        We are here to support your health at every stage and look forward
                    </h2>

                    <div className="flex flex-col sm:flex-row bg-white rounded-[32px] p-4 shadow-soft gap-6 items-center border border-white group">
                        <div className="flex-1 space-y-4 sm:pr-6 sm:border-r border-brand-surface w-full sm:w-auto">
                            <div className="w-10 h-10 rounded-xl bg-brand-surface flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                                <Activity size={20} strokeWidth={2.5} />
                            </div>
                            <h4 className="text-[14px] font-black uppercase text-gray-darkest tracking-[0.1em]">Neurologist</h4>
                            <Link href="/services" className="inline-flex px-4 py-1.5 border border-brand-surface rounded-full text-[9px] font-black text-gray-dark uppercase tracking-widest hover:bg-primary hover:text-white transition-all items-center gap-2">
                                Learn More <Plus size={10} />
                            </Link>
                        </div>
                        <div className="flex-1 space-y-4">
                            <p className="text-[10px] font-bold text-gray-dark uppercase tracking-widest leading-relaxed">
                                Expert in treating disorders of the nervous system, including the brain and spinal cord
                            </p>
                            <div className="flex gap-2">
                                <Link href="/doctors/dr-emily-white" className="w-8 h-8 rounded-full bg-gray-darkest text-white flex items-center justify-center shadow-sm hover:bg-primary transition-colors"><ArrowUpRight size={14} /></Link>
                                <button className="w-8 h-8 rounded-full bg-white border border-gray-lighter text-gray-darkest flex items-center justify-center shadow-sm hover:bg-gray-50"><ArrowUpRight size={14} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function TeamPreview() {
    return (
        <Section light className="relative">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
                    <div className="space-y-6 max-w-xl text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-soft text-[10px] font-black text-primary uppercase tracking-[0.2em] border border-gray-lighter">
                            Our Team <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        </div>
                        <h2 className="text-gray-darkest leading-tight">Our team can help you get best consultant</h2>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="flex -space-x-3">
                            {[0, 1, 2, 3].map(i => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-100 relative shadow-sm">
                                    <img src={mockImages.doctors[i]} alt="Doctor" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <Link href="/doctors" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-soft border border-gray-lighter cursor-pointer hover:bg-primary hover:text-white transition-all">
                            <ArrowUpRight size={20} />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {doctors.map((doc, i) => (
                        <Link href={`/doctors/${doc.slug}`} key={i}>
                            <Card noPadding className="group overflow-hidden hover:border-primary transition-all hover:scale-105 active:scale-95 duration-500">
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Plus size={20} />
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                                <div className="p-6 space-y-1">
                                    <h5 className="text-lg font-black text-gray-darkest tracking-tight">{doc.name}</h5>
                                    <p className="text-[9px] font-black text-brand-muted uppercase tracking-widest leading-none">{doc.title}</p>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </Section>
    );
}
