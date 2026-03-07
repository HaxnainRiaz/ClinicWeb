"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthShell } from "@/components/sections/AuthShell";
import { FormField, Input, PasswordInput } from "@/components/ui/Form";
import { PillButton } from "@/components/ui/PillButton";
import { Loader2, Check } from "lucide-react";
import { mockImages } from "@/lib/mockImages";

export default function SignupPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate Signup logic (Mock)
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => router.push("/login"), 3000);
        }, 1500);
    };

    if (success) {
        return (
            <AuthShell title="Account Created!" subtitle="Your registration was successful. You can now log in to your account." image={mockImages.pageHeroes.auth}>
                <div className="flex flex-col items-center justify-center py-12 space-y-8 animate-in zoom-in duration-500 text-center">
                    <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-green-500 shadow-lg shadow-green-100/50">
                        <Check size={48} strokeWidth={3} />
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
            title="Create Account"
            subtitle="Join Medify and start managing your health journey today."
            reverse={true}
            image={mockImages.pageHeroes.auth}
        >
            <form onSubmit={handleSubmit} className="space-y-6 pt-2">
                <div className="grid grid-cols-2 gap-4">
                    <FormField label="First Name">
                        <Input placeholder="John" required />
                    </FormField>
                    <FormField label="Last Name">
                        <Input placeholder="Doe" required />
                    </FormField>
                </div>

                <FormField label="Email Address">
                    <Input type="email" placeholder="example@medify.com" required />
                </FormField>

                <FormField label="Phone Number">
                    <Input type="tel" placeholder="+1 (800) 000-0000" required />
                </FormField>

                <PasswordInput
                    label="Password"
                    placeholder="Minimum 8 characters"
                    required
                />

                <div className="flex items-start gap-4 p-4 rounded-3xl bg-brand-surface border border-primary/20">
                    <input type="checkbox" className="mt-1 w-5 h-5 rounded-lg accent-primary cursor-pointer" required />
                    <p className="text-[10px] font-bold text-gray-dark uppercase tracking-widest leading-relaxed">
                        I agree to the <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                    </p>
                </div>

                <div className="space-y-6 pt-4">
                    <PillButton
                        className="w-full h-14 text-md tracking-wider"
                        disabled={loading}
                    >
                        {loading ? <Loader2 size={24} className="animate-spin" /> : "Register Now"}
                    </PillButton>

                    <p className="text-center text-[11px] font-black text-gray-dark uppercase tracking-widest">
                        Already have an account? <Link href="/login" className="text-primary hover:underline">Log In</Link>
                    </p>
                </div>
            </form>
        </AuthShell>
    );
}
