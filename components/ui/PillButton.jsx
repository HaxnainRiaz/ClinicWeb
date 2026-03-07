import { cn } from "@/lib/utils";

export function PillButton({ children, variant = "primary", className, ...props }) {
    const variants = {
        primary: "bg-primary text-white hover:bg-primary-dark shadow-soft",
        secondary: "bg-brand-surface text-primary hover:bg-white border-none",
        dark: "bg-gray-darkest text-white hover:bg-black",
        outline: "bg-transparent text-gray-darkest border-2 border-gray-lighter hover:border-primary hover:text-primary",
    };

    return (
        <button
            className={cn(
                "px-6 py-2.5 rounded-pill font-bold transition-all duration-300 active:scale-95 disabled:opacity-50 inline-flex items-center justify-center gap-2",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
