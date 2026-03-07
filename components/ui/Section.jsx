import { cn } from "@/lib/utils";

export function Section({ children, className, containerClassName, id, dark = false, light = false }) {
    return (
        <section
            id={id}
            className={cn(
                "py-10 md:py-12 overflow-hidden",
                dark ? "bg-gray-darkest text-white" : light ? "bg-brand-bg/40" : "bg-white",
                className
            )}
        >
            <div className={cn("container-custom", containerClassName)}>
                {children}
            </div>
        </section>
    );
}

export function Card({ children, className, glass = false, noPadding = false }) {
    return (
        <div
            className={cn(
                "rounded-card transition-all duration-500 border border-gray-lighter",
                glass ? "glass-card" : "bg-white shadow-soft",
                !noPadding && "p-5 lg:p-6",
                className
            )}
        >
            {children}
        </div>
    );
}
