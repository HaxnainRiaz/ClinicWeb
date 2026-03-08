"use client";

import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { PageHeroCompact } from "@/components/ui/PageHeroCompact";
import { mockImages } from "@/lib/mockImages";
import { Calendar, Clock, MapPin, CheckCircle2, AlertCircle, ShieldCheck, Wallet, ChevronRight, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const APPOINTMENTS = [
    {
        id: "APT-10492",
        doctor: "Dr. Sarah Johnson",
        specialty: "Cardiology",
        date: "Monday, Mar 10",
        time: "09:00 AM",
        type: "insurance",
        provider: "BlueCross BlueShield",
        status: "Pending Insurance Verification",
        isPast: false,
    },
    {
        id: "APT-10381",
        doctor: "Dr. Michael Chen",
        specialty: "Pediatrics",
        date: "Wednesday, Mar 12",
        time: "02:30 PM",
        type: "self-pay",
        status: "Confirmed",
        isPast: false,
    },
    {
        id: "APT-09822",
        doctor: "Dr. Alex Maba",
        specialty: "Dentistry",
        date: "Friday, Feb 28",
        time: "10:30 AM",
        type: "insurance",
        provider: "Delta Dental",
        status: "Completed",
        isPast: true,
    }
];

export default function PatientDashboard() {
    return (
        <main className="bg-brand-bg min-h-screen pt-[76px]">
            <HeaderNav />

            <PageHeroCompact
                title="Patient Portal"
                subtitle="Manage your upcoming appointments and coverage details."
                breadcrumb="Home / Patient Dashboard"
                bgImage={mockImages.pageHeroes.labresults}
            />

            <section className="section-pad pb-16 lg:pb-24">
                <div className="container-custom max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                        {/* ── Left Sidebar: Navigation & Fast Links ── */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-white rounded-[24px] shadow-sm border border-gray-lighter p-6">
                                <h4 className="border-b border-gray-lighter pb-4 mb-4 text-[16px]">Portal Menu</h4>
                                <div className="space-y-1">
                                    <button className="w-full flex items-center justify-between p-3 rounded-[12px] bg-primary/5 text-primary font-bold transition-all">
                                        <div className="flex items-center gap-3">
                                            <Calendar size={18} />
                                            <span className="text-[14px]">Appointments</span>
                                        </div>
                                    </button>
                                    <Link href="/labresults" className="w-full flex items-center justify-between p-3 rounded-[12px] text-gray-dark hover:bg-gray-lightest font-medium transition-all">
                                        <div className="flex items-center gap-3">
                                            <FileText size={18} />
                                            <span className="text-[14px]">Clinical Results</span>
                                        </div>
                                    </Link>
                                    <button className="w-full flex items-center justify-between p-3 rounded-[12px] text-gray-dark hover:bg-gray-lightest font-medium transition-all">
                                        <div className="flex items-center gap-3">
                                            <ShieldCheck size={18} />
                                            <span className="text-[14px]">Coverage & Billing</span>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 rounded-[24px] bg-gray-darkest text-white shadow-soft relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[40px] -mr-16 -mt-16" />
                                <div className="relative z-10 space-y-4 text-center">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary mx-auto">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <h5 className="text-white">Need care today?</h5>
                                        <p className="text-[13px] text-white/70 leading-relaxed mt-2">
                                            Book a new consultation with one of our available specialists.
                                        </p>
                                    </div>
                                    <Link href="/appointments" className="btn-primary w-full justify-center !h-[44px] !min-h-[44px] text-[13px] mt-2">
                                        Book Appointment
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* ── Main Panel: Appointments List ── */}
                        <div className="lg:col-span-8 space-y-8">

                            <div className="flex items-center justify-between border-b border-gray-lighter pb-4">
                                <h2 className="text-[24px] text-gray-darkest m-0">Your Appointments</h2>
                            </div>

                            <div className="space-y-5">
                                {APPOINTMENTS.map((apt) => (
                                    <div
                                        key={apt.id}
                                        className={cn(
                                            "card !p-0 overflow-hidden border-2 transition-all group",
                                            apt.isPast ? "opacity-75 bg-gray-50 border-transparent" : "bg-white border-transparent hover:border-primary/20 shadow-sm"
                                        )}
                                    >
                                        <div className="p-5 md:p-6 flex flex-col sm:flex-row justify-between gap-6">

                                            {/* Details Left */}
                                            <div className="space-y-4 flex-1">
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <span className="text-[11px] font-bold text-gray-muted uppercase tracking-wider">{apt.id}</span>

                                                    {/* Status Badge System */}
                                                    <span className={cn(
                                                        "px-3 py-1 rounded-[8px] text-[11px] font-bold flex items-center gap-1.5",
                                                        apt.status === "Pending Insurance Verification" && "bg-amber-50 text-amber-600 border border-amber-100",
                                                        apt.status === "Confirmed" && "bg-green-50 text-green-700 border border-green-100",
                                                        apt.status === "Completed" && "bg-gray-100 text-gray-darkest border border-gray-200"
                                                    )}>
                                                        {apt.status === "Pending Insurance Verification" && <AlertCircle size={12} />}
                                                        {apt.status === "Confirmed" && <CheckCircle2 size={12} />}
                                                        {apt.status}
                                                    </span>
                                                </div>

                                                <div>
                                                    <h4 className="text-[18px] text-gray-darkest mb-1">{apt.doctor}</h4>
                                                    <p className="text-[13.5px] font-medium text-primary">{apt.specialty} Consultation</p>
                                                </div>

                                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-[13px]">
                                                    <div className="flex items-center gap-2 text-gray-darkest font-semibold">
                                                        <Calendar size={15} className="text-gray-medium" /> {apt.date}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-gray-darkest font-semibold">
                                                        <Clock size={15} className="text-gray-medium" /> {apt.time}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Actions & Payment Right */}
                                            <div className="sm:text-right flex flex-col sm:w-[200px] sm:items-end justify-between border-t sm:border-t-0 sm:border-l border-gray-lighter pt-4 sm:pt-0 sm:pl-6 shrink-0 gap-4 sm:gap-2">

                                                <div className="flex flex-col sm:items-end gap-1.5">
                                                    <span className="text-[10px] uppercase font-bold text-gray-light tracking-wide">Payment Flow</span>
                                                    <div className={cn(
                                                        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-[12px] font-bold",
                                                        apt.type === "insurance" ? "bg-primary/10 text-primary-dark" : "bg-gray-100 text-gray-800"
                                                    )}>
                                                        {apt.type === "insurance" ? <ShieldCheck size={14} /> : <Wallet size={14} />}
                                                        {apt.type === "insurance" ? "Insurance" : "Self-Pay"}
                                                    </div>
                                                    {apt.type === "insurance" && (
                                                        <span className="text-[11px] font-medium text-gray-medium mt-0.5">{apt.provider}</span>
                                                    )}
                                                </div>

                                                {!apt.isPast && (
                                                    <button className="text-[13px] font-bold text-primary flex items-center justify-center sm:justify-end gap-1.5 hover:text-primary-dark transition-colors w-full sm:w-auto mt-auto pt-2">
                                                        Manage <ChevronRight size={16} strokeWidth={2.5} />
                                                    </button>
                                                )}
                                                {apt.isPast && (
                                                    <button className="text-[13px] font-bold text-gray-dark flex items-center justify-center sm:justify-end gap-1.5 hover:text-gray-darkest transition-colors w-full sm:w-auto mt-auto pt-2">
                                                        View Summary <ChevronRight size={16} strokeWidth={2.5} />
                                                    </button>
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
