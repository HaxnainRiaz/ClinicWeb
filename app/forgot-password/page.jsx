"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthShell } from "@/components/sections/AuthShell";
import { FormField, Input } from "@/components/ui/Form";
import { PillButton } from "@/components/ui/PillButton";
import { Loader2, Mail, ArrowLeft } from "lucide-react";
import { mockImages } from "@/lib/mockImages";

export default function ForgotPasswordPage() {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate reset logic (Mock)
        setTimeout(() => {
            setLoading(false);
            setSent(true);
        }, 1500);
    };

    if (sent) {
        return (
            <AuthShell title="Check Your Email" subtitle="We've sent a password reset link to your email address." image={mockImages.pageHeroes.auth}>
                <div className="flex flex-col items-center justify-center py-12 space-y-10 text-center animate-in zoom-in duration-500">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-lg shadow-primary/10">
                        <Mail size={48} />
                    </div>
                    <div className="space-y-6 flex flex-col items-center w-full">
                        <p className="text-gray-dark font-medium px-4">Didn't receive the email? Check your spam folder or try another email address.</p>
                        <PillButton
                            variant="outline"
                            className="w-full text-xs tracking-widest uppercase font-black"
                            onClick={() => setSent(false)}
                        >
                            Resend Email
                        </PillButton>
                        <Link
                            href="/login"
                            className="flex items-center gap-2 text-[10px] font-black text-gray-muted uppercase tracking-widest hover:text-primary transition-colors"
                        >
                            <ArrowLeft size={14} /> Back to Login
                        </Link>
                    </div>
                </div>
            </AuthShell>
        );
    }

    return (
        <AuthShell
            title="Reset Password"
            subtitle="Enter your email and we'll send you a link to reset your password."
            image={mockImages.pageHeroes.auth}
        >
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                <FormField label="Email Address">
                    <Input type="email" placeholder="example@medify.com" required />
                </FormField>

                <div className="space-y-6">
                    <PillButton
                        className="w-full h-14 text-md tracking-wider"
                        disabled={loading}
                    >
                        {loading ? <Loader2 size={24} className="animate-spin" /> : "Send Reset Link"}
                    </PillButton>

                    <Link
                        href="/login"
                        className="flex items-center justify-center gap-3 text-[11px] font-black text-gray-dark uppercase tracking-widest group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Login
                    </Link>
                </div>
            </form>
        </AuthShell>
    );
}
