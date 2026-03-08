import Image from "next/image";
import Link from "next/link";
import { mockImages } from "@/lib/mockImages";
import { CheckCircle2, ArrowRight, Activity } from "lucide-react";

export function StatsStrip() {
    const stats = [
        { value: "12,000+", label: "Patients Supported" },
        { value: "20+", label: "Medical Specialties" },
        { value: "60+", label: "Experienced Doctors" },
        { value: "4.9/5", label: "Patient Satisfaction" },
    ];

    return (
        <div className="bg-gray-darkest py-10 md:py-12">
            <div className="container-custom">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center text-center space-y-1.5">
                            <p className="text-[clamp(1.75rem,4vw,2.625rem)] font-bold text-white leading-none tracking-tight">
                                {stat.value}
                            </p>
                            <p className="text-[12px] font-medium text-white/50 uppercase tracking-widest">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function InsightAbout() {
    const highlights = [
        "Board-certified specialists with global training",
        "Patient-tailored care and treatment planning",
        "Advanced diagnostics and clinical technology",
        "Compassionate, transparent care experience",
    ];

    return (
        <section className="section-pad bg-white">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left: Image with subtle overlay card */}
                    <div className="relative">
                        <div className="relative aspect-[5/4] rounded-[22px] overflow-hidden shadow-card border border-gray-lighter/50">
                            <Image
                                src={mockImages.services[0]}
                                alt="Medical team working together"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/6" />
                        </div>

                        {/* Floating insight card */}
                        <div className="absolute bottom-6 left-4 right-4 md:left-auto md:right-auto md:bottom-8 md:-right-6 z-10 bg-white rounded-[16px] p-4 shadow-hover border border-gray-lighter/50 max-w-[240px]">
                            <p className="text-[10px] font-semibold text-gray-muted uppercase tracking-widest mb-1.5">Latest Update</p>
                            <h5 className="text-[13px] font-semibold text-gray-darkest leading-snug mb-3">
                                We are here to support your health at every stage of life.
                            </h5>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary hover:underline underline-offset-2"
                            >
                                Learn More <ArrowRight size={11} strokeWidth={2.5} />
                            </Link>
                        </div>
                    </div>

                    {/* Right: About text */}
                    <div className="space-y-6">
                        <div className="section-eyebrow">
                            <Activity size={12} strokeWidth={2.5} />
                            About Medify
                        </div>

                        <h2 className="text-gray-darkest">
                            Our team of highly trained{" "}
                            <span className="text-primary">medical professionals</span>{" "}
                            is here to provide the best possible care.
                        </h2>

                        <p className="text-[16px] text-gray-muted leading-[1.72]">
                            At Medify, we believe that every patient deserves personalized attention, evidence-based care, and a compassionate team dedicated to their well-being — from routine checkups to complex specialist care.
                        </p>

                        <ul className="space-y-3 pt-1">
                            {highlights.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle2 size={11} className="text-primary" strokeWidth={2.5} />
                                    </div>
                                    <span className="text-[14.5px] text-gray-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-3 pt-2">
                            <Link href="/about" className="btn-primary text-[14px] !px-5 !py-2.5 !min-h-[44px] !rounded-[12px]">
                                Our Story <ArrowRight size={15} strokeWidth={2} />
                            </Link>
                            <Link href="/doctors" className="btn-secondary text-[14px] !px-5 !py-2.5 !min-h-[44px] !rounded-[12px]">
                                Meet Our Doctors
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
