"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthShell } from "@/components/sections/AuthShell";
import { PasswordInput } from "@/components/ui/Form";
import { PillButton } from "@/components/ui/PillButton";
import { Loader2, CheckCircle2 } from "lucide-react";
import { mockImages } from "@/lib/mockImages";

export default function ResetPasswordPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate reset logic (Mock)
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => router.push("/login"), 3000);
        }, 1500);
    };

    if (success) {
        return (
            <AuthShell title="Password Reset!" subtitle="Your password has been changed successfully." image={mockImages.pageHeroes.auth}>
                <div className="flex flex-col items-center justify-center py-12 space-y-8 animate-in zoom-in duration-500 text-center">
                    <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-green-500 shadow-lg shadow-green-100/50">
                        <CheckCircle2 size={48} strokeWidth={3} />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-darkest tracking-tight">Redirecting to Login...</h3>
                        <Link href="/login" className="text-primary font-bold hover:underline">Click here if you aren't redirected</Link>
                    </div>
                </div>
            </AuthShell>
        );
    }

    return (
        <AuthShell
            title="Create New Password"
            subtitle="Your new password must be different from previous passwords."
            image={mockImages.pageHeroes.auth}
        >
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                <PasswordInput
                    label="New Password"
                    placeholder="At least 8 characters"
                    required
                />

                <PasswordInput
                    label="Confirm New Password"
                    placeholder="Repeat new password"
                    required
                />

                <div className="space-y-6 pt-4">
                    <PillButton
                        className="w-full h-14 text-md tracking-wider"
                        disabled={loading}
                    >
                        {loading ? <Loader2 size={24} className="animate-spin" /> : "Update Password"}
                    </PillButton>

                    <Link
                        href="/login"
                        className="flex items-center justify-center gap-3 text-[11px] font-black text-gray-dark hover:text-primary uppercase tracking-widest transition-colors"
                    >
                        Back to Login
                    </Link>
                </div>
            </form>
        </AuthShell>
    );
}
