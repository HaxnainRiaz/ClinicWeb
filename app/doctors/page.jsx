"use client";

import { useState, useMemo } from "react";
import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { PageHeroCompact } from "@/components/ui/PageHeroCompact";
import { Section, Card } from "@/components/ui/Section";
import { PillButton } from "@/components/ui/PillButton";
import { Search, Filter, Plus, MessageCircle, ArrowUpRight } from "lucide-react";
import { doctors, specialties } from "@/lib/data";
import { mockImages } from "@/lib/mockImages";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function DoctorsPage() {
    const [search, setSearch] = useState("");
    const [selectedSpecialty, setSelectedSpecialty] = useState("All");

    const filteredDoctors = useMemo(() => {
        return doctors.filter(doc => {
            const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase()) ||
                doc.specialty.toLowerCase().includes(search.toLowerCase());
            const matchesSpecialty = selectedSpecialty === "All" || doc.specialty === selectedSpecialty;
            return matchesSearch && matchesSpecialty;
        });
    }, [search, selectedSpecialty]);

    return (
        <main className="bg-brand-bg min-h-screen">
            <HeaderNav />
            <PageHeroCompact
                title="Our Medical Specialists"
                subtitle="Meet our diverse team of certified doctors covering all medical branches."
                breadcrumb="Home / Doctors"
                bgImage={mockImages.pageHeroes.doctors}
            />

            <Section className="pb-16 lg:pb-12">

                {/* ── Interactive Filter Bar ── */}
                <div className="bg-white p-6 rounded-[40px] shadow-soft border border-gray-lighter mb-16 space-y-8 animate-in slide-in-from-top duration-700">
                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                        <div className="relative w-full lg:max-w-xl group">
                            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-muted group-focus-within:text-primary transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Search by name or specialty..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-16 pr-8 py-4 rounded-pill bg-gray-lightest border-none focus:outline-none focus:ring-4 focus:ring-primary/5 font-black text-sm text-gray-darkest placeholder:text-gray-light tracking-tight transition-all"
                            />
                        </div>

                        <div className="flex items-center gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                            {["All", ...specialties.slice(0, 5)].map(spec => (
                                <button
                                    key={spec}
                                    onClick={() => setSelectedSpecialty(spec)}
                                    className={cn(
                                        "px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all whitespace-nowrap",
                                        selectedSpecialty === spec
                                            ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105"
                                            : "bg-gray-lightest text-gray-dark hover:bg-gray-lighter"
                                    )}
                                >
                                    {spec}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Results Grid ── */}
                {filteredDoctors.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredDoctors.map((doc, i) => (
                            <Link href={`/doctors/${doc.slug}`} key={i} className="group">
                                <Card noPadding className="overflow-hidden border-4 border-transparent hover:border-primary/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-[40px] bg-white h-full flex flex-col">
                                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                                        <img
                                            src={doc.image}
                                            alt={doc.name}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />

                                        {/* Status Badge */}
                                        <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black text-primary uppercase tracking-widest border border-white/50 shadow-sm flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                            Available Today
                                        </div>

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                                                <Plus size={24} strokeWidth={3} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-4 flex-1 flex flex-col">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{doc.specialty}</p>
                                            <h4 className="text-2xl font-black text-gray-darkest tracking-tight leading-none group-hover:text-primary transition-colors">{doc.name}</h4>
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-lighter mt-auto">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center text-primary">
                                                    <Plus size={14} />
                                                </div>
                                                <span className="text-[11px] font-black text-gray-darkest uppercase tracking-widest">Book Now</span>
                                            </div>
                                            <ArrowUpRight size={20} className="text-gray-light group-hover:text-primary transition-colors" />
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="py-32 text-center space-y-8 animate-in zoom-in duration-500">
                        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-gray-300 mx-auto">
                            <Search size={48} />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-3xl font-black text-gray-darkest tracking-tight">No specialists found</h3>
                            <p className="text-lg font-medium text-gray-dark">Try adjusting your filters or search keywords.</p>
                            <PillButton onClick={() => { setSearch(""); setSelectedSpecialty("All") }} variant="outline" className="px-10 h-16 uppercase tracking-widest text-[11px]">Clear All Filters</PillButton>
                        </div>
                    </div>
                )}
            </Section>

            {/* ── Help CTA ── */}
            <Section className="pb-16 pt-8">
                <div className="bg-gray-darkest p-6 lg:p-10 rounded-[60px] text-white overflow-hidden relative shadow-3xl">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] border border-white/5">
                                24/7 Support Desk <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,1)]" />
                            </div>
                            <h2 className="font-black tracking-tight leading-[1.1]">Can't find the right specialist?</h2>
                            <p className="text-xl font-medium text-white/70 leading-relaxed max-w-xl">
                                Our medical concierge team is available to help you find the perfect doctor for your specific symptoms and medical needs.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 lg:justify-end">
                            <Link href="/contact">
                                <PillButton className="px-8 py-3 bg-primary text-white hover:bg-white hover:text-primary shadow-xl shadow-primary/20 text-xs font-black uppercase tracking-widest flex items-center gap-3 group">
                                    <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" /> Live Consultancy
                                </PillButton>
                            </Link>
                            <Link href="/appointments">
                                <PillButton variant="outline" className="px-8 py-3 border-2 border-white/20 text-white hover:bg-white/10 text-xs font-black uppercase tracking-widest">
                                    Quick Booking
                                </PillButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
