"use client";

import Link from "next/link";
import { mockImages } from "@/lib/mockImages";
import { ShieldCheck, Star, Calendar, ArrowRight, CheckCircle2, Clock, Users, Stethoscope } from "lucide-react";

export function HeroSplit() {
    const trustItems = [
        { icon: ShieldCheck, label: "Experienced Specialists" },
        { icon: Clock, label: "Same-Day Appointments" },
        { icon: Users, label: "Patient-Focused Care" },
    ];

    return (
        <section className="relative min-h-[calc(100vh-76px)] flex items-center pt-[76px] overflow-hidden bg-white">

            {/* Subtle background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[380px] h-[380px] bg-primary/4 rounded-full blur-[100px]" />
            </div>

            <div className="container-custom relative w-full py-8 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">

                    {/* ── Left Content ── */}
                    <div className="lg:col-span-6 xl:col-span-6 flex flex-col gap-7 max-w-[580px]">

                        {/* Eyebrow */}
                        <div className="section-eyebrow w-fit">
                            <Stethoscope size={12} strokeWidth={2.5} />
                            Trusted Care for Every Stage of Life
                        </div>

                        {/* Headline */}
                        <h1 className="text-gray-darkest">
                            Expert Medical Care for{" "}
                            <span className="text-primary relative inline-block">
                                You and Your Family
                                <svg
                                    className="absolute -bottom-2 left-0 w-full"
                                    viewBox="0 0 340 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path d="M2 5.5C70 2 160 1 338 5.5" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
                                </svg>
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-[17px] text-gray-muted leading-[1.72] max-w-[500px]">
                            Book appointments with experienced specialists, access personalized care, and get the support you need — with a modern, patient-first clinic experience.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3.5 pt-1">
                            <Link href="/appointments" className="btn-primary text-[15px]">
                                <Calendar size={17} strokeWidth={2} />
                                Book Appointment
                            </Link>
                            <Link href="/services" className="btn-secondary text-[15px]">
                                View Specialties
                                <ArrowRight size={16} strokeWidth={2} />
                            </Link>
                        </div>

                        {/* Trust Items */}
                        <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
                            {trustItems.map(({ icon: Icon, label }, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={11} className="text-primary" strokeWidth={2.5} />
                                    </div>
                                    <span className="text-[13.5px] font-medium text-gray-medium">{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Rating badge */}
                        <div className="flex items-center gap-3 pt-1">
                            <div className="flex -space-x-3">
                                {[0, 1, 2].map(i => (
                                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm bg-gray-lightest shrink-0">
                                        <img
                                            src={mockImages.doctors[i]}
                                            alt="Patient"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map(s => (
                                        <Star key={s} size={12} className="fill-amber-400 text-amber-400" />
                                    ))}
                                    <span className="text-[13px] font-semibold text-gray-darkest ml-1">4.9/5</span>
                                </div>
                                <p className="text-[11.5px] text-gray-muted mt-0.5">Rated by our patients</p>
                            </div>
                        </div>
                    </div>

                    {/* ── Right Media ── */}
                    <div className="lg:col-span-6 xl:col-span-6 relative">
                        {/* Main image */}
                        <div className="relative w-full aspect-[4/5] max-h-[580px] rounded-[24px] overflow-hidden shadow-float border-4 border-white bg-gray-lightest">
                            <img
                                src={mockImages.heroMain}
                                alt="Professional medical care at Medify Clinic"
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-darkest/10 to-transparent" />
                        </div>

                        {/* Floating card: Emergency Care */}
                        <div className="absolute -left-4 top-1/4 z-20 bg-white rounded-[18px] p-4 shadow-hover border border-gray-lighter/60 w-[200px] animate-float">
                            <div className="flex items-center gap-3 mb-2.5">
                                <div className="w-9 h-9 rounded-[10px] bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                                    <ShieldCheck size={18} strokeWidth={2} />
                                </div>
                                <div>
                                    <p className="text-[13px] font-semibold text-gray-darkest leading-tight">Emergency Care</p>
                                    <p className="text-[10px] text-primary font-medium mt-0.5">24/7 Available</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 pt-2 border-t border-gray-lighter">
                                <div className="flex -space-x-2">
                                    {[0, 1].map(i => (
                                        <div key={i} className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                                            <img src={mockImages.doctors[i]} alt="doctor" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-[11px] text-gray-muted font-medium">On duty now</span>
                            </div>
                        </div>

                        {/* Floating card: Active consultations */}
                        <div className="absolute -right-3 bottom-1/4 z-20 bg-gray-darkest text-white rounded-[18px] p-4 shadow-hover w-[180px] animate-float-delayed">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-soft-pulse" />
                                <span className="text-[10px] font-semibold text-green-400 uppercase tracking-wide">Active Now</span>
                            </div>
                            <p className="text-[13px] font-semibold leading-snug mb-1">Personalized treatment plans and specialist-led care.</p>
                            <p className="text-[10px] text-white/50 mt-2">12 consultations running</p>
                        </div>

                        {/* Bottom CTA Strip */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 bg-white/90 backdrop-blur-xl rounded-full px-2 py-1.5 shadow-lg border border-gray-lighter/60 flex items-center gap-1 whitespace-nowrap">
                            {[
                                { label: "Appointments", href: "/appointments", active: true },
                                { label: "Doctors", href: "/doctors" },
                                { label: "Lab Results", href: "/labresults" },
                                { label: "Contact Us", href: "/contact" },
                            ].map(({ label, href, active }, i) => (
                                <Link
                                    key={i}
                                    href={href}
                                    className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold transition-all ${active
                                        ? "bg-primary text-white shadow-sm"
                                        : "text-gray-muted hover:text-primary hover:bg-primary/8"
                                        }`}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
