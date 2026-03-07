"use client";

import { useState } from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FormField({ label, error, children, className }) {
    return (
        <div className={cn("space-y-2", className)}>
            {label && (
                <label className="block text-[11px] font-black text-gray-dark uppercase tracking-[0.15em] pl-4">
                    {label}
                </label>
            )}
            <div className="relative group">
                {children}
            </div>
            {error && (
                <p className="flex items-center gap-1.5 text-xs font-bold text-red-500 pl-4 mt-2">
                    <AlertCircle size={14} />
                    {error}
                </p>
            )}
        </div>
    );
}

export function Input({ className, ...props }) {
    return (
        <input
            className={cn(
                "w-full px-8 py-4.5 rounded-pill bg-white border border-gray-lighter focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 font-bold text-sm text-gray-darkest transition-all placeholder:text-gray-light placeholder:font-bold",
                className
            )}
            {...props}
        />
    );
}

export function PasswordInput({ label, error, ...props }) {
    const [show, setShow] = useState(false);

    return (
        <FormField label={label} error={error}>
            <Input
                type={show ? "text" : "password"}
                className="pr-16"
                {...props}
            />
            <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute top-1/2 right-6 -translate-y-1/2 p-2 text-gray-light hover:text-gray-dark transition-colors"
            >
                {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
        </FormField>
    );
}
