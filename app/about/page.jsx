"use client";

import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { PageHeroCompact } from "@/components/ui/PageHeroCompact";
import { InsightAbout } from "@/components/sections/AboutSections";
import { TeamPreview } from "@/components/sections/MainSections";
import { Section, Card } from "@/components/ui/Section";
import { mockImages } from "@/lib/mockImages";
import { Target, Eye, Award, CheckCircle2, ShieldCheck, HeartPulse, Microscope } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="bg-brand-bg min-h-screen">
            <HeaderNav />
            <PageHeroCompact
                title="Our Clinical Heritage"
                subtitle="Rooted in research and compassion, Medify provides specialized medical excellence for everyone."
                breadcrumb="Home / About"
                bgImage={mockImages.pageHeroes.about}
            />

            <InsightAbout />

            {/* ── Mission & Values Grid ── */}
            <Section className="py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            icon: Target,
                            title: "Our Mission",
                            desc: "To deliver clinical healthcare with unwavering compassion and research-driven excellence.",
                            color: "bg-blue-50 text-blue-600"
                        },
                        {
                            icon: Eye,
                            title: "Our Vision",
                            desc: "To redefine the patient journey through digital innovation and humane medical practices.",
                            color: "bg-primary/5 text-primary"
                        },
                        {
                            icon: Award,
                            title: "Excellence",
                            desc: "Maintaining the highest international accreditation for patient safety and clinical quality.",
                            color: "bg-pink-50 text-pink-500"
                        }
                    ].map((v, i) => (
                        <Card key={i} className="text-center p-6 space-y-6 rounded-[40px] border border-gray-lighter shadow-soft hover:shadow-2xl transition-all hover:-translate-y-2 group">
                            <div className={`w-24 h-24 rounded-3xl mx-auto flex items-center justify-center transition-transform group-hover:rotate-12 duration-500 ${v.color}`}>
                                <v.icon size={48} strokeWidth={1.5} />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl font-black text-gray-darkest tracking-tight">{v.title}</h3>
                                <p className="text-xl font-medium text-gray-dark leading-relaxed opacity-60">{v.desc}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* ── Visual Feature Section ── */}
            <Section className="bg-white py-12 md:py-16 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
                        <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-3xl border-[8px] border-brand-bg transform -rotate-3 transition-transform group-hover:rotate-0 duration-1000">
                            <img src={mockImages.facility} alt="Facility" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </div>
                        {/* Status Floating Pill */}
                        <div className="absolute -bottom-4 -right-4 bg-gray-darkest text-white p-6 rounded-[24px] shadow-3xl animate-in slide-in-from-right duration-700">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest leading-none">ISO Certified</p>
                                    <p className="text-[10px] font-medium text-white/50 mt-1 uppercase tracking-widest">Global Safety Standard</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-gray-darkest text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight">Experience clinical care at its peak</h2>
                            <p className="text-2xl font-medium text-gray-dark leading-relaxed opacity-80">
                                Our facility is a 200,000 sq ft clinical ecosystem equipped with the latest robotic surgery suites and genetic research laboratories.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { icon: HeartPulse, label: "Cardiac Monitoring" },
                                { icon: Microscope, label: "DNA Lab Analysis" },
                                { icon: ShieldCheck, label: "Data Privacy" },
                                { icon: CheckCircle2, label: "24/7 Support" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-5 p-6 rounded-[30px] bg-brand-bg/50 border border-gray-lighter hover:border-primary transition-all group">
                                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                                        <item.icon size={20} strokeWidth={2.5} />
                                    </div>
                                    <span className="text-[13px] font-black text-gray-darkest uppercase tracking-widest">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            <TeamPreview />

            <Footer />
        </main>
    );
}
