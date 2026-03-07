import { Section } from "./Section";

export function PageHeroCompact({ title, subtitle, breadcrumb, bgImage }) {
    return (
        <Section className="relative pt-20 pb-12 md:pt-24 md:pb-16 text-center overflow-hidden bg-brand-bg">

            {/* Background Media */}
            {bgImage && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={bgImage}
                        alt=""
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/20 via-transparent to-brand-bg" />
                </div>
            )}

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/60 rounded-full blur-[120px] -mt-40 opacity-50" />

            <div className="relative z-10 space-y-6 max-w-3xl mx-auto px-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-soft border border-gray-lighter text-[10px] font-black text-primary uppercase tracking-[0.2em] animate-in fade-in slide-in-from-bottom duration-700">
                    {breadcrumb || "Medify Clinic"}
                </div>
                <h1 className="text-gray-darkest leading-tight tracking-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-100">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl font-bold text-gray-dark tracking-tight leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
                        {subtitle}
                    </p>
                )}
            </div>
        </Section>
    );
}
