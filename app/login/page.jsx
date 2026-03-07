"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthShell } from "@/components/sections/AuthShell";
import { FormField, Input, PasswordInput } from "@/components/ui/Form";
import { PillButton } from "@/components/ui/PillButton";
import { Loader2 } from "lucide-react";
import { mockImages } from "@/lib/mockImages";

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        // Simulate simple validation
        if (!email || !password) {
            setTimeout(() => {
                setError("Invalid email or password. Please try again.");
                setLoading(false);
            }, 800);
            return;
        }

        // Simulate Auth Success logic (Mock)
        setTimeout(() => {
            setLoading(false);
            localStorage.setItem("medify_logged_in", "true");
            router.push("/"); // Redirect to home on mock success
        }, 1500);
    };

    return (
        <AuthShell
            title="Welcome Back"
            subtitle="Log in to your account with your credentials."
            image={mockImages.pageHeroes.auth}
        >
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                {/* Demo Credentials Helper */}
                <div className="bg-brand-surface border border-primary/20 p-4 rounded-3xl space-y-3">
                    <p className="text-[10px] font-black text-gray-darkest uppercase tracking-widest">Demo Credentials</p>
                    <div className="flex flex-wrap gap-2">
                        <button
                            type="button"
                            onClick={() => { setEmail("patient@medify.com"); setPassword("password123"); }}
                            className="bg-white border border-gray-lighter px-4 py-2 rounded-full text-[10px] font-black text-primary hover:border-primary transition-all uppercase tracking-widest"
                        >
                            Patient Account (Auto-fill)
                        </button>
                    </div>
                </div>

                <FormField label="Email Address" error={error ? "" : null}>
                    <Input
                        type="email"
                        placeholder="example@medify.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormField>

                <div className="space-y-2">
                    <PasswordInput
                        label="Password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex justify-end pr-4">
                        <Link
                            href="/forgot-password"
                            className="text-xs font-black text-primary uppercase tracking-widest hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 px-6 py-4 rounded-3xl text-xs font-bold flex items-center gap-3">
                        <AlertCircle size={16} />
                        {error}
                    </div>
                )}

                <div className="space-y-4">
                    <PillButton
                        className="w-full h-14 text-md tracking-wider"
                        disabled={loading}
                    >
                        {loading ? <Loader2 size={24} className="animate-spin" /> : "Log In"}
                    </PillButton>

                    <div className="flex flex-col items-center gap-6">
                        <div className="relative w-full text-center">
                            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gray-lighter" />
                            <span className="relative z-10 bg-brand-bg px-4 text-[10px] font-black text-gray-light uppercase tracking-widest">
                                Or login with
                            </span>
                        </div>

                        <div className="flex gap-4 w-full">
                            <button type="button" className="flex-1 h-14 rounded-pill border-2 border-gray-lighter bg-white hover:border-primary transition-all flex items-center justify-center gap-3 group">
                                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-black text-xs group-hover:bg-red-500 group-hover:text-white transition-colors">G</div>
                                <span className="text-[11px] font-black uppercase tracking-widest text-gray-darkest group-hover:text-primary transition-colors">Google</span>
                            </button>
                            <button type="button" className="flex-1 h-14 rounded-pill border-2 border-gray-lighter bg-white hover:border-primary transition-all flex items-center justify-center gap-3 group">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-black text-xs group-hover:bg-blue-500 group-hover:text-white transition-colors">f</div>
                                <span className="text-[11px] font-black uppercase tracking-widest text-gray-darkest group-hover:text-primary transition-colors">Facebook</span>
                            </button>
                        </div>
                    </div>

                    <p className="text-center text-[11px] font-black text-gray-dark uppercase tracking-widest pt-2">
                        Don't have an account? <Link href="/signup" className="text-primary hover:underline">Sign Up</Link>
                    </p>
                </div>
            </form>
        </AuthShell>
    );
}

function AlertCircle({ size }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
    );
}
