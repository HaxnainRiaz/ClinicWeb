"use client";

import { useState, useMemo } from "react";
import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { PageHeroCompact } from "@/components/ui/PageHeroCompact";
import { Section, Card } from "@/components/ui/Section";
import { services } from "@/lib/data";
import { mockImages } from "@/lib/mockImages";
import { PillButton } from "@/components/ui/PillButton";
import * as Icons from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState("All Services");
    const categories = ["All Services", "Primary Care", "Surgery", "Diagnostics", "Specialized"];

    const filteredServices = useMemo(() => {
        if (activeTab === "All Services") return services;
        return services.filter(s => s.category === activeTab);
    }, [activeTab]);

    return (
        <main className="bg-brand-bg min-h-screen">
            <HeaderNav />
            <PageHeroCompact
                title="Our Medical Services"
                subtitle="Explore our comprehensive range of specialized medical treatments and innovative healthcare solutions."
                breadcrumb="Home / Services"
                bgImage={mockImages.pageHeroes.services}
            />

            <Section className="pb-16 lg:pb-12">
                {/* ── Tabs ── */}
                <div className="flex flex-wrap justify-center gap-3 mb-16 animate-in slide-in-from-top duration-700">
                    {categories.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all",
                                activeTab === tab
                                    ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105"
                                    : "bg-white border border-gray-lighter text-gray-dark hover:border-primary/40 shadow-soft"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* ── Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredServices.map((service, i) => {
                        const Icon = Icons[service.icon] || Icons.Activity;
                        return (
                            <Link href={`/services/${service.slug}`} key={service.id}>
                                <Card className="group flex flex-col h-full bg-white border border-gray-lighter hover:border-primary transition-all duration-700 hover:-translate-y-4 rounded-[40px] p-6 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary transition-all duration-700 ease-in-out" />

                                    <div className="relative z-10 space-y-8">
                                        <div className="w-16 h-16 rounded-[24px] bg-primary/10 flex items-center justify-center text-primary group-hover:bg-white group-hover:scale-110 shadow-sm transition-all duration-500">
                                            <Icon size={28} strokeWidth={2.5} />
                                        </div>
                                        <div className="space-y-4">
                                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] group-hover:text-white/60 transition-colors">{service.category}</p>
                                            <h3 className="text-2xl font-black text-gray-darkest tracking-tight leading-none group-hover:text-white transition-colors">{service.name}</h3>
                                            <p className="text-sm text-gray-dark font-medium leading-relaxed group-hover:text-white/80 transition-colors line-clamp-3">
                                                {service.overview}
                                            </p>
                                        </div>
                                        <div className="pt-6 border-t border-gray-lighter group-hover:border-white/20 flex items-center justify-between transition-colors">
                                            <span className="text-[11px] font-black text-gray-darkest uppercase tracking-widest group-hover:text-white">Learn More</span>
                                            <div className="w-8 h-8 rounded-full border border-gray-lighter group-hover:border-white/30 flex items-center justify-center text-gray-muted group-hover:text-white transition-all">
                                                <Icons.ArrowUpRight size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </Section>

            {/* ── FAQ Section ── */}
            <Section light className="py-16">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-soft text-[10px] font-black text-primary uppercase tracking-[0.2em] border border-gray-lighter">
                            F.A.Q <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        </div>
                        <h2 className="font-black text-gray-darkest leading-tight tracking-tight">Need help for choosing?</h2>
                        <p className="text-lg text-gray-dark font-medium leading-relaxed">Everything you need to know about our medical services and patient protocols.</p>
                        <PillButton className="w-full py-4 text-sm uppercase tracking-widest">View All FAQ</PillButton>
                    </div>

                    <div className="lg:col-span-8 space-y-6">
                        {[
                            { q: "How do I book a specialized service?", a: "You can book directly via our online booking system or by contacting our help desk at +1 (800) 123-4567." },
                            { q: "Is insurance accepted for all services?", a: "Most specialized services are covered by major insurers. We recommend checking with your provider using our service ID." },
                            { q: "What should I bring for a checkup?", a: "Please bring your ID, insurance card, and any relevant previous medical records or test results." },
                            { q: "Are emergency services available 24/7?", a: "Yes, our trauma and emergency diagnostics center operates around the clock for all critical patient needs." }
                        ].map((item, i) => (
                            <div key={i} className="group bg-white p-6 rounded-[32px] border border-gray-lighter hover:border-primary/20 transition-all cursor-pointer shadow-soft hover:shadow-2xl">
                                <div className="flex items-center justify-between gap-6">
                                    <h5 className="text-xl lg:text-2xl font-black text-gray-darkest tracking-tight">{item.q}</h5>
                                    <div className="w-9 h-9 rounded-full bg-brand-bg flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                                        <Icons.Plus size={16} />
                                    </div>
                                </div>
                                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
                                    <p className="text-lg text-gray-dark font-medium pt-8 leading-relaxed opacity-80">{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
