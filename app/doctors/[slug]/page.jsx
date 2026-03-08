"use client";

import { use } from "react";
import { doctors } from "@/lib/data";
import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import {
    Star, Clock, GraduationCap, Globe,
    CheckCircle2, ChevronRight, Calendar,
    ShieldCheck, Activity, Award, CheckCircle, Info
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mockImages } from "@/lib/mockImages";

export default function DoctorDetailPage({ params }) {
    const resolvedParams = use(params);
    const doctor = doctors.find(d => d.slug === resolvedParams.slug);

    if (!doctor) return notFound();

    return (
        <main className="bg-brand-bg min-h-screen pt-[76px]">
            <HeaderNav />

            {/* ── Doctor Hero Profile ── */}
            <section className="bg-white border-b border-gray-lighter py-10 md:py-16">
                <div className="container-custom max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                        {/* Visual Profile */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32">
                            <div className="aspect-[4/5] rounded-[24px] overflow-hidden bg-gray-50 shadow-sm border border-gray-lighter relative">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-full object-cover object-top"
                                />
                                {/* Experience Badge */}
                                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-[12px] shadow-sm border border-white/50 flex flex-col items-center">
                                    <span className="text-[10px] font-semibold text-gray-muted uppercase tracking-wider mb-0.5">Experience</span>
                                    <span className="text-[15px] font-bold text-primary">{doctor.experience}</span>
                                </div>
                            </div>
                        </div>

                        {/* Content Profile */}
                        <div className="lg:col-span-8 flex flex-col h-full space-y-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[11.5px] font-semibold">
                                        {doctor.specialty} Specialist
                                    </span>
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100/50 text-amber-600">
                                        <Star size={13} className="fill-amber-400 text-amber-400" />
                                        <span className="text-[11.5px] font-bold">{doctor.rating}</span>
                                        <span className="text-[11.5px] font-medium text-amber-600/70">({doctor.reviews} reviews)</span>
                                    </div>
                                </div>
                                <h1 className="text-gray-darkest mb-3">{doctor.name}</h1>
                                <p className="text-[18px] font-medium text-gray-medium max-w-2xl leading-[1.6]">
                                    Dedicated to providing high-quality, compassionate care through advanced medical techniques and patient education.
                                </p>
                            </div>

                            {/* Key Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-8 border-b border-gray-lighter">
                                {[
                                    { icon: GraduationCap, label: "Education", value: "MD / PhD" },
                                    { icon: Activity, label: "Specialty", value: doctor.specialty },
                                    { icon: Globe, label: "Languages", value: doctor.languages.join(', ') },
                                    { icon: Award, label: "Board Status", value: "Certified" }
                                ].map((stat, i) => (
                                    <div key={stat.label} className="flex flex-col gap-1.5">
                                        <div className="flex items-center gap-2 text-gray-muted mb-1">
                                            <stat.icon size={16} />
                                            <span className="text-[11px] font-semibold uppercase tracking-wider">{stat.label}</span>
                                        </div>
                                        <p className="text-[14px] font-bold text-gray-darkest truncate">{stat.value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Booking CTA Area */}
                            <div className="bg-brand-bg rounded-[20px] p-6 lg:p-8 flex flex-col sm:flex-row gap-6 items-center justify-between border border-primary/10">
                                <div className="space-y-1 text-center sm:text-left">
                                    <h4 className="text-[18px] text-gray-darkest">Ready for a consultation?</h4>
                                    <p className="text-[13.5px] text-gray-muted">Book online or contact our team directly.</p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                    <Link href={`/appointments?doctor=${doctor.slug}`} className="btn-primary shrink-0 justify-center">
                                        Book Appointment <ChevronRight size={16} strokeWidth={2.5} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Doctor Details & Info ── */}
            <section className="section-pad">
                <div className="container-custom max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

                        {/* Left Column: Bio & Services */}
                        <div className="lg:col-span-7 space-y-12">
                            {/* Bio */}
                            <div className="space-y-4">
                                <h3 className="text-gray-darkest">Clinical Biography</h3>
                                <p className="text-[16px] text-gray-muted leading-[1.75]">
                                    {doctor.about}
                                </p>
                            </div>

                            {/* Services */}
                            <div className="space-y-6">
                                <h3 className="text-gray-darkest">Specialized Services</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {doctor.services.map((service, i) => (
                                        <div key={service} className="p-4 rounded-[16px] bg-white border border-gray-lighter shadow-sm flex items-start gap-4">
                                            <div className="mt-0.5 text-primary shrink-0">
                                                <CheckCircle2 size={20} strokeWidth={2.5} />
                                            </div>
                                            <span className="text-[14px] font-medium text-gray-darkest leading-snug">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Insurance & Hours */}
                        <div className="lg:col-span-5 space-y-8">

                            {/* Insurance Panel */}
                            <div className="card space-y-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                        <ShieldCheck size={20} strokeWidth={2} />
                                    </div>
                                    <h4 className="text-gray-darkest m-0">Accepted Insurance</h4>
                                </div>

                                {doctor.insurances && doctor.insurances.length > 0 ? (
                                    <div className="flex flex-wrap gap-2">
                                        {doctor.insurances.map(ins => (
                                            <span key={ins} className="px-3 py-1.5 bg-gray-lightest border border-gray-lighter rounded-[8px] text-[13px] font-medium text-gray-darkest flex items-center gap-1.5">
                                                <CheckCircle size={14} className="text-green-500" /> {ins}
                                            </span>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-[14px] text-gray-muted">No insurance data available.</p>
                                )}

                                {/* Out of network notice */}
                                <div className="mt-4 p-4 rounded-[12px] bg-amber-50 border border-amber-200 flex items-start gap-3">
                                    <Info size={18} className="text-amber-600 shrink-0 mt-0.5" />
                                    <div className="space-y-1">
                                        <p className="text-[13px] font-semibold text-amber-900 leading-tight">Out of Network?</p>
                                        <p className="text-[12px] text-amber-700 leading-relaxed">
                                            If your plan is not listed, our team will coordinate with you to verify your direct-pay or out-of-network options before confirming the appointment.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Availability Panel */}
                            <div className="card space-y-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-full bg-brand-surface flex items-center justify-center text-gray-darkest">
                                        <Clock size={20} strokeWidth={2} />
                                    </div>
                                    <h4 className="text-gray-darkest m-0">Standard Clinical Hours</h4>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-gray-lighter/60">
                                        <span className="text-[14px] font-medium text-gray-medium flex items-center gap-2"><Calendar size={16} /> Days</span>
                                        <span className="text-[14px] font-semibold text-gray-darkest">{doctor.availability[0]}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-[14px] font-medium text-gray-medium flex items-center gap-2"><Clock size={16} /> Hours</span>
                                        <span className="text-[14px] font-semibold text-gray-darkest">{doctor.availability[1]}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
