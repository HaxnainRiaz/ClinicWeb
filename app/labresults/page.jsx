"use client";

import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { PageHeroCompact } from "@/components/ui/PageHeroCompact";
import { Section, Card } from "@/components/ui/Section";
import { PillButton } from "@/components/ui/PillButton";
import {
    FileText, Download, Eye, Calendar,
    ArrowRight, Lock, ShieldCheck, Activity,
    ChevronRight, AlertCircle
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { mockImages } from "@/lib/mockImages";

const results = [
    { id: "LAB-9921", date: "Mar 05, 2024", type: "Blood Panel", status: "Ready", doctor: "Dr. Sarah Chen" },
    { id: "LAB-8810", date: "Feb 28, 2024", type: "Lipid Profile", status: "Ready", doctor: "Dr. James Wilson" },
    { id: "IMG-4421", date: "Feb 15, 2024", type: "MRI Scan", status: "Processing", doctor: "Dr. Sarah Chen" },
    { id: "LAB-2201", date: "Jan 12, 2024", type: "Urinalysis", status: "Ready", doctor: "Dr. Michael Ross" },
];

export default function LabResultsPage() {
    return (
        <main className="bg-brand-bg min-h-screen">
            <HeaderNav />
            <PageHeroCompact
                title="Clinical Lab Results"
                subtitle="Secure access to your sensitive medical diagnostics and laboratory reports."
                breadcrumb="Portal / Lab Results"
                bgImage={mockImages.pageHeroes.labresults}
            />

            <Section className="pb-16 lg:pb-12">
                <div className="max-w-6xl mx-auto space-y-12">

                    {/* ── Status Header ── */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-6 rounded-[32px] border border-gray-lighter shadow-soft">
                        <div className="flex items-center gap-6 text-center md:text-left">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                                <ShieldCheck size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-gray-darkest tracking-tight">Active Clinical Portal</h3>
                                <p className="text-xs font-bold text-gray-muted uppercase tracking-widest mt-1">Verified HIPAA Compliant Connection</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] font-black text-gray-muted uppercase tracking-[0.2em]">Live Status:</span>
                            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 text-[10px] font-black uppercase tracking-widest border border-green-500/20 animate-pulse">
                                Secure
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* ── Results List ── */}
                        <div className="lg:col-span-8 space-y-6">
                            <div className="flex items-center justify-between px-4">
                                <h4 className="text-[11px] font-black text-gray-darkest uppercase tracking-[0.25em]">Recent Reports</h4>
                                <span className="text-[10px] font-bold text-primary group cursor-pointer hover:translate-x-1 transition-transform inline-flex items-center gap-2">View History <ArrowRight size={12} /></span>
                            </div>

                            <div className="space-y-4">
                                {results.map((item, i) => (
                                    <div key={i} className="group bg-white p-5 rounded-[24px] border border-gray-lighter hover:border-primary transition-all shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6">
                                        <div className="flex items-center gap-6">
                                            <div className={cn(
                                                "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                                                item.status === "Ready" ? "bg-primary/5 text-primary" : "bg-orange-50 text-orange-500"
                                            )}>
                                                {item.status === "Ready" ? <FileText size={20} /> : <Activity size={20} className="animate-spin-slow" />}
                                            </div>
                                            <div className="space-y-1">
                                                <h5 className="font-black text-gray-darkest tracking-tight">{item.type}</h5>
                                                <p className="text-[10px] font-bold text-gray-muted uppercase tracking-widest">{item.id} • {item.date}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-6">
                                            <div className="text-right hidden sm:block">
                                                <p className="text-[9px] font-black text-gray-muted uppercase tracking-widest mb-1">In-Charge</p>
                                                <p className="text-xs font-black text-gray-darkest tracking-tight">{item.doctor}</p>
                                            </div>
                                            <div className="flex gap-2">
                                                {item.status === "Ready" ? (
                                                    <>
                                                        <button className="w-10 h-10 rounded-full bg-brand-bg text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                                                            <Eye size={18} />
                                                        </button>
                                                        <button className="w-10 h-10 rounded-full bg-brand-bg text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                                                            <Download size={18} />
                                                        </button>
                                                    </>
                                                ) : (
                                                    <span className="px-5 py-2.5 rounded-full bg-orange-50 text-orange-600 text-[10px] font-black uppercase tracking-widest">Pending</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── Sidebar: Security ── */}
                        <div className="lg:col-span-4 space-y-8">
                            <Card className="bg-gray-darkest p-8 rounded-[40px] text-white space-y-8 shadow-3xl overflow-hidden relative border-none">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] -mr-16 -mt-16" />
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary border border-white/5">
                                        <Lock size={20} />
                                    </div>
                                    <h4 className="text-2xl font-black tracking-tight leading-tight">Your data is encrypted.</h4>
                                    <p className="text-white/50 text-sm font-medium leading-relaxed">
                                        Clinical results are protected by 256-bit AES encryption. Only you and your authorized medical specialist can view these documents.
                                    </p>
                                </div>
                                <PillButton className="w-full bg-white text-gray-darkest hover:bg-primary hover:text-white">Security Documentation</PillButton>
                            </Card>

                            <div className="p-8 rounded-[40px] bg-white border border-gray-lighter shadow-soft space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <AlertCircle size={18} />
                                    </div>
                                    <h5 className="text-[12px] font-black text-gray-darkest uppercase tracking-widest leading-tight">Need assistance with your report?</h5>
                                </div>
                                <p className="text-xs font-medium text-gray-dark leading-relaxed">
                                    If you notice any discrepancies or have questions regarding your diagnosis, contact our support team immediately.
                                </p>
                                <Link href="/contact" className="block">
                                    <div className="flex items-center gap-3 text-[10px] font-black text-primary uppercase tracking-widest hover:translate-x-2 transition-transform cursor-pointer">
                                        Contact Support <ChevronRight size={14} strokeWidth={3} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>

            <Footer />
        </main>
    );
}
