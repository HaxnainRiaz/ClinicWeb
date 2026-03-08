"use client";

import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import {
    Calendar, CheckCircle2, ShieldCheck,
    AlertCircle, Search, Filter, Wallet,
    FileText, Check, X, Clock, Eye
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const ADMIN_APPOINTMENTS = [
    {
        id: "APT-10492",
        patient: "Olivia Reynolds",
        doctor: "Dr. Sarah Johnson",
        date: "Today",
        time: "09:00 AM",
        paymentType: "insurance",
        provider: "BlueCross BlueShield",
        planInfo: "HMO • Member #BCB98202",
        status: "Verification Pending",
    },
    {
        id: "APT-10493",
        patient: "James Wright",
        doctor: "Dr. Michael Chen",
        date: "Today",
        time: "11:30 AM",
        paymentType: "self-pay",
        provider: "Direct",
        planInfo: "Self-Pay Patient",
        status: "Confirmed",
    },
    {
        id: "APT-10494",
        patient: "Emma Thompson",
        doctor: "Dr. Alex Maba",
        date: "Tomorrow",
        time: "10:00 AM",
        paymentType: "insurance",
        provider: "Aetna",
        planInfo: "PPO • Member #AET40029",
        status: "Verified",
    },
    {
        id: "APT-10495",
        patient: "William Davis",
        doctor: "Dr. Sarah Johnson",
        date: "Mar 15, 2024",
        time: "02:00 PM",
        paymentType: "insurance",
        provider: "Cigna",
        planInfo: "HMO • Member #CIG77312",
        status: "Verification Pending",
    }
];

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("all");
    const [selectedAppt, setSelectedAppt] = useState(null);

    return (
        <main className="bg-brand-bg min-h-screen pt-[76px]">
            <HeaderNav />

            {/* ── Admin Header ── */}
            <div className="bg-white border-b border-gray-lighter py-6 lg:py-8">
                <div className="container-custom max-w-[1400px] flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-brand-bg text-primary rounded-[8px] text-[11px] font-bold uppercase tracking-wider">Staff Portal</span>
                            <span className="text-[14px] font-semibold text-gray-medium">Clinic Operations</span>
                        </div>
                        <h1 className="text-[28px] lg:text-[32px] text-gray-darkest m-0 leading-tight">Appointment Management</h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="h-[44px] px-6 rounded-[12px] bg-white border border-gray-lighter hover:border-primary/30 text-[13px] font-bold text-gray-darkest shadow-sm flex items-center gap-2 transition-all">
                            <Calendar size={16} /> Schedule View
                        </button>
                    </div>
                </div>
            </div>

            <section className="section-pad py-8 lg:py-12">
                <div className="container-custom max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-8 relative">

                    {/* ── Left Column: Appointment List view ── */}
                    <div className={cn(
                        "transition-all duration-300",
                        selectedAppt ? "hidden lg:block lg:col-span-7 xl:col-span-8 space-y-6" : "lg:col-span-12 space-y-6"
                    )}>

                        {/* Filters & Actions */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex bg-white rounded-[14px] p-1 shadow-sm border border-gray-lighter w-full sm:w-auto">
                                {[
                                    { id: "all", label: "All Appointments" },
                                    { id: "pending", label: "Pending Verification", count: 2 },
                                    { id: "confirmed", label: "Confirmed" }
                                ].map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={cn(
                                            "flex-1 sm:flex-none px-4 py-2 rounded-[10px] text-[12px] font-bold transition-all relative flex items-center justify-center gap-2",
                                            activeTab === tab.id
                                                ? "bg-brand-bg text-primary-dark shadow-sm border border-primary/10"
                                                : "text-gray-medium hover:text-gray-dark"
                                        )}
                                    >
                                        {tab.label}
                                        {tab.count && (
                                            <span className="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-[6px] text-[10px] ml-1">{tab.count}</span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                                <div className="relative w-full sm:w-64">
                                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-medium" />
                                    <input
                                        type="text"
                                        placeholder="Search patient or ID..."
                                        className="w-full h-[40px] pl-9 pr-4 rounded-[12px] bg-white border border-gray-lighter focus:border-primary focus:ring-2 focus:ring-primary/10 text-[13px] outline-none"
                                    />
                                </div>
                                <button className="w-10 h-10 rounded-[12px] bg-white border border-gray-lighter flex items-center justify-center text-gray-dark hover:border-primary/30 shadow-sm shrink-0">
                                    <Filter size={16} />
                                </button>
                            </div>
                        </div>

                        {/* List Content */}
                        <div className="bg-white rounded-[24px] shadow-sm border border-gray-lighter overflow-hidden">

                            {/* Table Header */}
                            <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b border-gray-lighter bg-gray-50/50 text-[11px] font-bold uppercase tracking-wider text-gray-medium">
                                <div className="col-span-3 lg:col-span-3">Patient / ID</div>
                                <div className="col-span-3 lg:col-span-3">Doctor / Specialty</div>
                                <div className="col-span-2 lg:col-span-2">Date / Time</div>
                                <div className="col-span-2 lg:col-span-2">Payment / Status</div>
                                <div className="col-span-2 lg:col-span-2 text-right">Actions</div>
                            </div>

                            {/* Table Rows */}
                            <div className="divide-y divide-gray-lighter">
                                {ADMIN_APPOINTMENTS.map(apt => (
                                    <div
                                        key={apt.id}
                                        onClick={() => setSelectedAppt(apt.id)}
                                        className={cn(
                                            "p-4 md:p-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center transition-colors hover:bg-brand-bg/50 cursor-pointer",
                                            selectedAppt === apt.id ? "bg-brand-bg/80 border-l-[3px] border-l-primary" : "border-l-[3px] border-l-transparent"
                                        )}
                                    >
                                        <div className="md:col-span-3 flex flex-col gap-1">
                                            <span className="font-bold text-[14px] text-gray-darkest">{apt.patient}</span>
                                            <span className="text-[12px] font-medium text-gray-muted">{apt.id}</span>
                                        </div>

                                        <div className="md:col-span-3 flex flex-col gap-1">
                                            <span className="font-semibold text-[13px] text-gray-darkest">{apt.doctor}</span>
                                            <span className="text-[12px] text-gray-medium">{apt.paymentType === 'insurance' ? apt.provider : 'Self-Pay'}</span>
                                        </div>

                                        <div className="md:col-span-2 flex flex-col gap-1">
                                            <span className="font-bold text-[13px] text-gray-darkest">{apt.date}</span>
                                            <span className="text-[12px] text-gray-medium">{apt.time}</span>
                                        </div>

                                        <div className="md:col-span-2 flex flex-col items-start gap-2">
                                            {/* Status Badge */}
                                            {apt.status === "Verification Pending" && (
                                                <span className="px-2.5 py-1 bg-amber-50 text-amber-700 text-[11px] font-bold rounded-[6px] border border-amber-100 flex items-center gap-1.5 whitespace-nowrap">
                                                    <AlertCircle size={10} strokeWidth={2.5} /> Pending
                                                </span>
                                            )}
                                            {apt.status === "Confirmed" && (
                                                <span className="px-2.5 py-1 bg-green-50 text-green-700 text-[11px] font-bold rounded-[6px] border border-green-100 flex items-center gap-1.5 whitespace-nowrap">
                                                    <CheckCircle2 size={10} strokeWidth={2.5} /> Confirmed
                                                </span>
                                            )}
                                            {apt.status === "Verified" && (
                                                <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold rounded-[6px] border border-blue-100 flex items-center gap-1.5 whitespace-nowrap">
                                                    <CheckCircle2 size={10} strokeWidth={2.5} /> Ins. Verified
                                                </span>
                                            )}
                                        </div>

                                        <div className="md:col-span-2 text-right hidden md:block">
                                            <button className="text-primary hover:text-primary-dark p-2 rounded-[8px] hover:bg-primary/5 transition-colors">
                                                <Eye size={18} strokeWidth={2} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* ── Right Column: Insurance Verification Panel ── */}
                    {selectedAppt && (
                        <div className="lg:col-span-5 xl:col-span-4 h-full relative">
                            {/* Mobile close button overlay */}
                            <div className="lg:hidden absolute top-4 right-4 z-50">
                                <button
                                    onClick={() => setSelectedAppt(null)}
                                    className="p-2 border border-gray-lighter bg-white rounded-[12px] text-gray-darkest shadow-sm"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="bg-white rounded-[24px] shadow-sm border border-gray-lighter overflow-hidden sticky lg:top-32 animate-in slide-in-from-right-8 fade-in duration-300">

                                {ADMIN_APPOINTMENTS.map(apt => apt.id === selectedAppt && (
                                    <div key={apt.id} className="flex flex-col h-full max-h-[calc(100vh-140px)]">

                                        {/* Panel Header */}
                                        <div className="p-6 border-b border-gray-lighter bg-brand-bg/50">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-[12px] bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                                                    <FileText size={20} strokeWidth={2} />
                                                </div>
                                                <div>
                                                    <h3 className="text-[18px] text-gray-darkest leading-tight m-0">{apt.patient}</h3>
                                                    <p className="text-[13px] font-bold text-primary">{apt.id}</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 p-4 rounded-[16px] bg-white border border-gray-lighter shadow-soft">
                                                <div>
                                                    <span className="text-[10px] font-bold text-gray-muted uppercase tracking-wider mb-1 block">To see</span>
                                                    <span className="text-[13px] font-bold text-gray-darkest">{apt.doctor}</span>
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-bold text-gray-muted uppercase tracking-wider mb-1 block">When</span>
                                                    <span className="text-[13px] font-bold text-gray-darkest">{apt.date} • {apt.time}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Panel Content (Scrollable) */}
                                        <div className="p-6 space-y-8 overflow-y-auto flex-1 custom-scrollbar">

                                            {/* Payment & Insurance Section */}
                                            {apt.paymentType === 'insurance' ? (
                                                <div className="space-y-5">
                                                    <div className="flex items-center gap-2">
                                                        <ShieldCheck size={18} className="text-gray-darkest" />
                                                        <h4 className="text-[15px] font-bold text-gray-darkest m-0">Insurance Information</h4>
                                                    </div>

                                                    <div className="space-y-4">
                                                        <div className="grid grid-cols-2 gap-y-4 gap-x-4 border-b border-gray-lighter/60 pb-4">
                                                            <div className="col-span-2">
                                                                <span className="text-[11px] font-semibold text-gray-muted uppercase tracking-wider block mb-1">Provider</span>
                                                                <span className="text-[14px] font-bold text-gray-darkest">{apt.provider}</span>
                                                            </div>
                                                            <div className="col-span-2">
                                                                <span className="text-[11px] font-semibold text-gray-muted uppercase tracking-wider block mb-1">Plan & Member ID</span>
                                                                <span className="text-[14px] font-bold text-gray-darkest tracking-wide">{apt.planInfo}</span>
                                                            </div>
                                                            <div>
                                                                <span className="text-[11px] font-semibold text-gray-muted uppercase tracking-wider block mb-1">Subscriber</span>
                                                                <span className="text-[13px] font-semibold text-gray-dark">Self</span>
                                                            </div>
                                                            <div>
                                                                <span className="text-[11px] font-semibold text-gray-muted uppercase tracking-wider block mb-1">Uploaded Card</span>
                                                                <span className="text-[13px] font-bold text-primary cursor-pointer hover:underline flex items-center gap-1">
                                                                    View Front/Back
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {apt.status === "Verification Pending" && (
                                                            <div className="p-4 bg-amber-50 rounded-[14px] border border-amber-100 flex items-start gap-3">
                                                                <Clock className="text-amber-600 shrink-0 mt-0.5" size={16} />
                                                                <p className="text-[13px] text-amber-800 font-medium leading-relaxed">
                                                                    Staff needs to verify patient eligibility in clearinghouse. Proceed down below when verified.
                                                                </p>
                                                            </div>
                                                        )}
                                                        {apt.status === "Verified" && (
                                                            <div className="p-4 bg-green-50 rounded-[14px] border border-green-100 flex items-start gap-3">
                                                                <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={16} />
                                                                <p className="text-[13px] text-green-800 font-medium leading-relaxed">
                                                                    Insurance verified. Coverages applied to estimate.
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="space-y-5">
                                                    <div className="flex items-center gap-2">
                                                        <Wallet size={18} className="text-gray-darkest" />
                                                        <h4 className="text-[15px] font-bold text-gray-darkest m-0">Self-Pay Details</h4>
                                                    </div>

                                                    <div className="p-5 border border-gray-lighter rounded-[16px] bg-gray-50 flex flex-col items-center justify-center text-center space-y-2">
                                                        <Wallet size={24} className="text-gray-medium mb-1" />
                                                        <p className="text-[14px] font-bold text-gray-darkest">Direct-Pay Patient</p>
                                                        <p className="text-[13px] text-gray-medium">Patient opted out of insurance. Standard clinic rates apply. Requires full payment at check-in.</p>
                                                    </div>
                                                </div>
                                            )}

                                        </div>

                                        {/* Action Buttons Footer */}
                                        <div className="p-6 bg-white border-t border-gray-lighter space-y-3 shrink-0">
                                            {apt.status === "Verification Pending" && apt.paymentType === 'insurance' && (
                                                <>
                                                    <button className="w-full h-[48px] rounded-[14px] bg-green-600 hover:bg-green-700 text-white text-[14px] font-bold shadow-soft transition-colors flex items-center justify-center gap-2">
                                                        <Check size={18} strokeWidth={2.5} /> Mark as Verified & Confirm
                                                    </button>
                                                    <button className="w-full h-[48px] rounded-[14px] bg-white border border-gray-lighter hover:border-red-500 hover:text-red-500 text-gray-darkest text-[14px] font-bold transition-all flex items-center justify-center gap-2">
                                                        Deny / Action Required
                                                    </button>
                                                </>
                                            )}

                                            {(apt.status === "Confirmed" || apt.status === "Verified") && (
                                                <>
                                                    <button className="w-full h-[48px] rounded-[14px] bg-primary hover:bg-primary-dark text-white text-[14px] font-bold shadow-soft transition-colors flex items-center justify-center gap-2">
                                                        Send Patient Reminder
                                                    </button>
                                                    <button className="w-full h-[48px] rounded-[14px] bg-white border border-gray-lighter hover:border-primary/50 text-gray-darkest text-[14px] font-bold transition-all flex items-center justify-center gap-2">
                                                        Reschedule
                                                    </button>
                                                </>
                                            )}
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </section>

        </main>
    );
}
