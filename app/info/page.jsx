"use client";

import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { PageHeroCompact } from "@/components/ui/PageHeroCompact";
import { Section, Card } from "@/components/ui/Section";
import {
    Clock, MapPin, Phone, Mail,
    Calendar, CheckCircle2, Info,
    ChevronRight, ArrowRight, Share2, Globe
} from "lucide-react";
import Link from "next/link";
import { mockImages } from "@/lib/mockImages";

export default function InfoPage() {
    return (
        <main className="bg-brand-bg min-h-screen">
            <HeaderNav />
            <PageHeroCompact
                title="Clinical Directory"
                subtitle="Essential clinic information, operating hours, location details and contact protocols."
                breadcrumb="Home / Clinic Info"
                bgImage={mockImages.fallback}
            />

            <Section className="pb-16 lg:pb-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* ── Left Content: Essential Details ── */}
                    <div className="lg:col-span-8 space-y-12">

                        <div className="space-y-6">
                            <h2 className="text-4xl font-black text-gray-darkest tracking-tight">Accessing Medify Clinic</h2>
                            <p className="text-xl font-medium text-gray-dark leading-relaxed">
                                Our facility is strategically located in the heart of the Medical District, designed to be accessible for all patients while providing a serene environment for recovery.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    label: "Operating Hours",
                                    icon: Clock,
                                    content: "Mon - Fri: 8 AM - 8 PM",
                                    sub: "Sat: 9 AM - 4 PM | Sun: Emergency Only"
                                },
                                {
                                    label: "Contact Channels",
                                    icon: Phone,
                                    content: "+1 (555) 000-1234",
                                    sub: "priority-support@medify.com"
                                },
                                {
                                    label: "Global Location",
                                    icon: MapPin,
                                    content: "Global Medical District",
                                    sub: "7th Avenue, NY 10001, USA"
                                },
                                {
                                    label: "Clinical Network",
                                    icon: Globe,
                                    content: "Medify Intranet v4.2",
                                    sub: "Secure Patient Node: 192.168.1.1"
                                }
                            ].map((item, i) => (
                                <Card key={i} className="p-6 rounded-[32px] border border-gray-lighter shadow-float group hover:border-primary transition-all">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                        <item.icon size={22} />
                                    </div>
                                    <h5 className="text-[10px] font-black text-gray-muted uppercase tracking-[0.2em] mb-2">{item.label}</h5>
                                    <p className="text-lg font-black text-gray-darkest tracking-tight mb-1">{item.content}</p>
                                    <p className="text-xs font-medium text-gray-dark/60">{item.sub}</p>
                                </Card>
                            ))}
                        </div>

                        {/* Clinic Policy Strip */}
                        <div className="bg-white p-8 rounded-[40px] border border-gray-lighter shadow-soft space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                                    <Info size={20} />
                                </div>
                                <h3 className="text-2xl font-black text-gray-darkest tracking-tight">Clinical Protocols</h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                                {[
                                    "Pre-appointment screening",
                                    "Insurance verification required",
                                    "Lab result digital access",
                                    "24-hour cancellation policy",
                                    "EMR Data Privacy Shield",
                                    "Emergency triage prioritization"
                                ].map((protocol, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                                        <span className="text-sm font-black text-gray-darkest tracking-tight uppercase tracking-wider">{protocol}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Right Sidebar: Interaction ── */}
                    <div className="lg:col-span-4 space-y-8">
                        <Card className="p-8 rounded-[40px] bg-primary text-white space-y-8 shadow-3xl overflow-hidden relative border-none">
                            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full -mb-16 -mr-16" />
                            <div className="space-y-4">
                                <h4 className="text-3xl font-black tracking-tight leading-tight">Need Urgent Assistance?</h4>
                                <p className="text-white/70 text-sm font-medium leading-relaxed">
                                    Our clinical response team is available for active patients 24/7 via the secure portal.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <Link href="/appointments" className="block">
                                    <button className="w-full h-14 bg-white text-primary rounded-full text-xs font-black uppercase tracking-widest hover:bg-brand-surface transition-all flex items-center justify-center gap-3 shadow-xl">
                                        Priority Booking <Calendar size={16} />
                                    </button>
                                </Link>
                                <Link href="/contact" className="block">
                                    <button className="w-full h-14 bg-transparent border border-white/20 text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                                        Contact Hotline
                                    </button>
                                </Link>
                            </div>
                        </Card>

                        <div className="p-8 rounded-[40px] bg-white border border-gray-lighter shadow-soft space-y-8">
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-brand-bg shadow-soft">
                                    <img src={mockImages.doctors[0]} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h5 className="font-black text-gray-darkest tracking-tight">Medify Clinical Hub</h5>
                                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mt-1">Verified Registry</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="w-10 h-10 rounded-full border border-gray-lighter flex items-center justify-center text-gray-muted hover:text-primary transition-all">
                                        <Share2 size={16} />
                                    </button>
                                    <button className="w-10 h-10 rounded-full border border-gray-lighter flex items-center justify-center text-gray-muted hover:text-primary transition-all">
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>

            <Footer />
        </main>
    );
}
