"use client";

import { useState } from "react";
import Link from "next/link";
import { mockImages } from "@/lib/mockImages";
import { doctors } from "@/lib/data";
import { services } from "@/lib/data";
import {
    ArrowRight, ArrowUpRight, CheckCircle2, Loader2,
    Activity, Heart, Brain, Eye, Bone, Smile, Baby, Stethoscope,
    Star, Calendar
} from "lucide-react";
import { cn } from "@/lib/utils";

// ── Services / Specialties Section ─────────────────────────────────────────
const SERVICE_CARDS = [
    { icon: Heart, title: "Cardiology", desc: "Comprehensive heart care, including diagnostics, monitoring, and treatment of cardiovascular conditions.", href: "/services/cardiac-screening", color: "text-red-500", bg: "bg-red-50" },
    { icon: Brain, title: "Neurology", desc: "Specialized care for brain, spine, and nervous system disorders with advanced diagnostic support.", href: "/services/general-consultation", color: "text-violet-500", bg: "bg-violet-50" },
    { icon: Baby, title: "Pediatrics", desc: "Compassionate, evidence-based healthcare for infants, children, and adolescents.", href: "/services/general-consultation", color: "text-blue-500", bg: "bg-blue-50" },
    { icon: Bone, title: "Orthopedics", desc: "Expert care for musculoskeletal conditions, sports injuries, and joint health.", href: "/services/general-consultation", color: "text-amber-600", bg: "bg-amber-50" },
    { icon: Smile, title: "Dentistry", desc: "Full-service dental care — from preventive cleanings to advanced restorative procedures.", href: "/services/dental-surgery", color: "text-teal-500", bg: "bg-teal-50" },
    { icon: Eye, title: "Ophthalmology", desc: "Vision care and treatment for eye conditions by experienced ophthalmologists.", href: "/services/general-consultation", color: "text-cyan-500", bg: "bg-cyan-50" },
];

export function ServicesGrid() {
    return (
        <section className="section-pad bg-brand-bg">
            <div className="container-custom">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-4 max-w-lg">
                        <div className="section-eyebrow">
                            <Stethoscope size={12} strokeWidth={2.5} />
                            Our Specialties
                        </div>
                        <h2 className="text-gray-darkest">Trusted care across specialties</h2>
                        <p className="text-[16px] text-gray-muted leading-[1.7]">
                            Access expert care across a full range of medical specialties — all under one roof.
                        </p>
                    </div>
                    <Link href="/services" className="btn-secondary text-[14px] !px-5 !py-2.5 !min-h-[44px] !rounded-[12px] shrink-0">
                        View All Specialties <ArrowRight size={15} strokeWidth={2} />
                    </Link>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {SERVICE_CARDS.map(({ icon: Icon, title, desc, href, color, bg }, i) => (
                        <Link
                            href={href}
                            key={i}
                            className="group card p-6 hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
                        >
                            <div className={cn("w-11 h-11 rounded-[12px] flex items-center justify-center shrink-0", bg)}>
                                <Icon size={20} className={color} strokeWidth={2} />
                            </div>
                            <div>
                                <h4 className="text-gray-darkest mb-2 group-hover:text-primary transition-colors">{title}</h4>
                                <p className="text-[14px] text-gray-muted leading-[1.65]">{desc}</p>
                            </div>
                            <div className="flex items-center gap-1.5 text-[12.5px] font-semibold text-primary mt-auto pt-2">
                                Learn More <ArrowUpRight size={13} strokeWidth={2.5} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ── Doctors Preview Section ─────────────────────────────────────────────────
export function DoctorsPreview() {
    return (
        <section className="section-pad bg-white">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-4 max-w-lg">
                        <div className="section-eyebrow">
                            <Activity size={12} strokeWidth={2.5} />
                            Our Doctors
                        </div>
                        <h2 className="text-gray-darkest">Meet our experienced specialists</h2>
                        <p className="text-[16px] text-gray-muted leading-[1.7]">
                            Our team helps you connect with the right specialist — board-certified, highly experienced, and patient-first.
                        </p>
                    </div>
                    <Link href="/doctors" className="btn-secondary text-[14px] !px-5 !py-2.5 !min-h-[44px] !rounded-[12px] shrink-0">
                        Meet Our Doctors <ArrowRight size={15} strokeWidth={2} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                    {doctors.map((doc, i) => (
                        <Link href={`/doctors/${doc.slug}`} key={i} className="group card !p-0 overflow-hidden hover:shadow-hover hover:-translate-y-1 transition-all duration-300">
                            {/* Image */}
                            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[18px]">
                                <img
                                    src={doc.image}
                                    alt={doc.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-darkest/30 to-transparent" />
                                {/* Rating badge */}
                                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm">
                                    <Star size={11} className="fill-amber-400 text-amber-400" />
                                    <span className="text-[11px] font-semibold text-gray-darkest">{doc.rating}</span>
                                </div>
                            </div>
                            {/* Info */}
                            <div className="p-5">
                                <h5 className="text-gray-darkest mb-0.5">{doc.name}</h5>
                                <p className="text-[12px] font-medium text-primary uppercase tracking-wide mb-3">{doc.specialty}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-[12px] text-gray-muted">{doc.experience} exp.</span>
                                    <div className="flex items-center gap-1 text-[11px] font-semibold text-primary group-hover:gap-2 transition-all">
                                        Book <ArrowUpRight size={12} strokeWidth={2.5} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ── Newsletter / Support Section ─────────────────────────────────────────────
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
        <section className="section-pad bg-brand-bg">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

                    {/* Left: Team Card */}
                    <Link href="/doctors" className="group card flex flex-col justify-between hover:shadow-hover hover:border-primary/20 transition-all duration-300 min-h-[260px]">
                        <div>
                            <div className="section-eyebrow w-fit mb-5 text-[10px]">
                                Our Team
                            </div>
                            <h3 className="text-gray-darkest mb-2 pr-8">Connect with the right specialist for your care</h3>
                            <p className="text-[14px] text-gray-muted leading-[1.65] pr-6">
                                Our team helps you connect with the right specialist, ensuring you receive expert, personalized care.
                            </p>
                        </div>
                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-lighter">
                            <div className="flex -space-x-3">
                                {[0, 1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-lightest shadow-sm">
                                        <img src={mockImages.doctors[i]} alt={`Doctor ${i + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-1.5 text-[13px] font-semibold text-primary group-hover:gap-2.5 transition-all">
                                Meet Our Doctors <ArrowUpRight size={14} strokeWidth={2.5} />
                            </div>
                        </div>
                    </Link>

                    {/* Right: Newsletter Card */}
                    <div className="card flex flex-col justify-between min-h-[260px]">
                        <div>
                            <div className="section-eyebrow w-fit mb-5 text-[10px]">
                                Stay Informed
                            </div>
                            <h3 className="text-gray-darkest mb-2 pr-8">Discover the latest health news and clinical insights.</h3>
                            <p className="text-[14px] text-gray-muted leading-[1.65]">
                                Subscribe for expert health tips, clinic updates, and evidence-based wellness guidance.
                            </p>
                        </div>

                        <form onSubmit={handleSubscribe} className="mt-6 flex items-center bg-gray-lightest rounded-[14px] p-1.5 gap-2">
                            <input
                                required
                                type="email"
                                placeholder="Your email address"
                                aria-label="Email address"
                                className="flex-1 px-4 py-2.5 bg-transparent text-[14px] font-medium text-gray-darkest focus:outline-none placeholder:text-gray-light min-w-0"
                            />
                            <button
                                type="submit"
                                disabled={submitting || success}
                                className={cn(
                                    "flex items-center justify-center gap-2 px-5 py-2.5 rounded-[10px] text-[12.5px] font-semibold text-white transition-all shrink-0 min-h-[40px]",
                                    success ? "bg-green-500" : "bg-primary hover:bg-primary-dark"
                                )}
                            >
                                {submitting
                                    ? <Loader2 size={15} className="animate-spin" />
                                    : success
                                        ? <><CheckCircle2 size={15} /> Subscribed!</>
                                        : "Subscribe"
                                }
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom: Feature Image */}
                <div className="mt-6 relative rounded-[22px] overflow-hidden h-[260px] md:h-[320px] shadow-card group">
                    <img
                        src={mockImages.facility}
                        alt="Medify clinic facility — modern and patient-friendly environment"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-darkest/60 to-transparent flex items-center">
                        <div className="p-8 md:p-12 max-w-lg">
                            <p className="text-[13px] font-semibold text-white/70 uppercase tracking-widest mb-2">Our Facility</p>
                            <h3 className="text-white mb-4">A modern clinic built around your comfort and care.</h3>
                            <Link href="/about" className="inline-flex items-center gap-2 text-[13px] font-semibold text-white hover:text-primary transition-colors">
                                Learn About Us <ArrowRight size={14} strokeWidth={2.5} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ── Specialties / Support Split Section ──────────────────────────────────────
export function SupportSplit() {
    return (
        <section className="section-pad bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left: Image with cards */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative w-full aspect-[4/5] rounded-[22px] overflow-hidden shadow-card border border-gray-lighter/50">
                            <img
                                src={mockImages.doctors[0]}
                                alt="Doctor providing specialist consultation"
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-darkest/20 to-transparent" />
                        </div>

                        {/* Floating contact CTA */}
                        <Link
                            href="/contact"
                            className="absolute bottom-6 -left-2 md:-left-6 z-20 bg-white rounded-full px-5 py-3 shadow-hover border border-gray-lighter flex items-center gap-2 hover:border-primary/30 transition-all text-[12.5px] font-semibold text-gray-darkest hover:text-primary"
                        >
                            Contact Us <ArrowUpRight size={13} strokeWidth={2.5} className="text-primary" />
                        </Link>

                        {/* Two specialty cards */}
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            {[
                                { title: "Digestive & GI Care", href: "/services/general-consultation" },
                                { title: "Dermatology & Skin", href: "/services/general-consultation" },
                            ].map((item, i) => (
                                <Link
                                    href={item.href}
                                    key={i}
                                    className="group card !p-5 hover:shadow-hover hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    <div className="w-8 h-8 rounded-[10px] bg-primary/8 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                        <Stethoscope size={16} strokeWidth={2} />
                                    </div>
                                    <h5 className="text-gray-darkest text-[13px] font-semibold leading-snug mb-3">{item.title}</h5>
                                    <span className="text-[11px] font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Learn More <ArrowRight size={10} strokeWidth={2.5} />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-7 order-1 lg:order-2">
                        <div className="section-eyebrow">
                            <Activity size={12} strokeWidth={2.5} />
                            Specialist Care
                        </div>

                        <h2 className="text-gray-darkest">
                            We are here to support your health at every stage of life.
                        </h2>

                        <p className="text-[16px] text-gray-muted leading-[1.72]">
                            Reach out to us with any questions or to schedule a visit. Our compassionate team is ready to help you find the right specialist and care path.
                        </p>

                        {/* Featured specialty card */}
                        <div className="card flex flex-col sm:flex-row gap-5 sm:items-start border-l-4 border-l-primary !rounded-l-none">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-[10px] bg-primary/10 flex items-center justify-center text-primary">
                                        <Brain size={16} strokeWidth={2} />
                                    </div>
                                    <h5 className="text-gray-darkest font-semibold">Neurology</h5>
                                </div>
                                <p className="text-[13.5px] text-gray-muted leading-[1.6]">
                                    Expert care for brain and nervous system disorders, including migraine, epilepsy, and cognitive health.
                                </p>
                                <Link href="/services" className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-primary mt-3 hover:underline underline-offset-2">
                                    View Specialties <ArrowRight size={12} strokeWidth={2.5} />
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link href="/appointments" className="btn-primary text-[14px] !px-5 !py-2.5 !min-h-[44px] !rounded-[12px]">
                                <Calendar size={15} strokeWidth={2} />
                                Book Appointment
                            </Link>
                            <Link href="/contact" className="btn-secondary text-[14px] !px-5 !py-2.5 !min-h-[44px] !rounded-[12px]">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ── Team Preview (used on homepage via page.jsx if needed) ───────────────────
export function TeamPreview() {
    return <DoctorsPreview />;
}
