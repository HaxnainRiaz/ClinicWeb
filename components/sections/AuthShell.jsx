"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { mockImages } from "@/lib/mockImages";

export function AuthShell({ children, title, subtitle, image = mockImages.pageHeroes.auth, reverse = false }) {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-brand-bg">
            {/* ── Left Content (Forms) ── */}
            <div className={`flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 ${reverse ? "lg:order-last" : ""}`}>
                <div className="max-w-md w-full mx-auto space-y-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-bold text-gray-dark hover:text-primary transition-colors mb-4 group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <div className="space-y-4">
                        <h1 className="text-4xl font-black text-gray-darkest tracking-tight leading-tight">{title}</h1>
                        {subtitle && <p className="text-gray-dark font-medium leading-relaxed">{subtitle}</p>}
                    </div>

                    <div className="auth-form-container">
                        {children}
                    </div>
                </div>
            </div>

            {/* ── Right Content (Visual Panel) ── */}
            <div className="hidden lg:block lg:w-[45%] xl:w-[50%] relative overflow-hidden bg-primary">
                <img
                    src={image}
                    alt="Medical professional"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />

                <div className="absolute bottom-16 left-16 right-16 space-y-6 text-white max-w-lg">
                    <div className="w-16 h-1 w-12 bg-white rounded-full" />
                    <h2 className="text-3xl font-black leading-tight">Your Health, Our Priority</h2>
                    <p className="text-lg font-medium text-white/80 leading-relaxed">
                        Join thousands of individuals who trust Medify for their healthcare needs. Access premium specialists, book appointments instantly, and manage your health journey in one place.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-6">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 size={20} className="text-brand-surface" />
                            <span className="text-xs font-bold uppercase tracking-widest">Expert Care</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 size={20} className="text-brand-surface" />
                            <span className="text-xs font-bold uppercase tracking-widest">Global Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
