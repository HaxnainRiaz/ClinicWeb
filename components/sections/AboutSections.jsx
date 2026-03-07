import Image from "next/image";
import { mockImages } from "@/lib/mockImages";
import { Plus, ArrowRight, Activity, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatsStrip() {
    const stats = [
        { value: "30M+", label: "Patients Served" },
        { value: "30%", label: "Up to Savings ratio" },
        { value: "$100M", label: "Capital raised" },
        { value: "60+", label: "Team Members" }
    ];

    return (
        <div className="bg-brand-bg/60 border-t border-brand-surface py-6 md:py-6">
            <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 items-center">
                {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center justify-center text-center space-y-3">
                        <h2 className="text-gray-darkest tracking-tight font-black">{stat.value}</h2>
                        <p className="text-[10px] font-bold text-brand-muted uppercase tracking-[0.2em]">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function InsightAbout() {
    return (
        <section className="py-10 md:py-12 bg-white relative overflow-hidden">
            <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* Left Insight Image */}
                <div className="lg:col-span-6 relative">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-float w-full max-w-[400px] mx-auto border-[6px] border-white z-10">
                        <Image
                            src={mockImages.services[0]}
                            alt="Surgeon working"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
                    </div>

                    {/* Floating top right INSIGHT pill */}
                    <div className="absolute top-12 md:right-4 lg:right-[-20px] z-20 px-3 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-float flex items-center gap-3 border border-gray-lighter">
                        <span className="text-[10px] font-black text-gray-darkest tracking-[0.2em] uppercase pl-2">Insight</span>
                        <div className="w-6 h-6 rounded-full bg-brand-surface flex items-center justify-center text-primary border border-white">
                            <Plus size={12} strokeWidth={3} />
                        </div>
                    </div>

                    {/* Floating bottom left Card */}
                    <div className="absolute bottom-6 md:left-2 lg:left-[-20px] z-20 w-[240px] p-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-float border border-gray-lighter">
                        <p className="text-[9px] font-bold text-gray-muted mb-2 tracking-widest">08/11/2024</p>
                        <h4 className="text-[13px] font-black text-gray-darkest leading-snug mb-4">We are here to support your health</h4>
                        <button className="flex items-center justify-between w-[110px] bg-white border border-gray-lighter px-3 py-2 font-bold text-[9px] rounded-full shadow-sm hover:bg-gray-50 transition-colors uppercase tracking-wider">
                            Learn More
                            <div className="w-5 h-5 rounded-full bg-gray-darkest flex items-center justify-center text-white">
                                <ArrowUpRight size={10} strokeWidth={3} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Right About Us Text */}
                <div className="lg:col-span-6 space-y-6 lg:space-y-8 max-w-lg lg:pr-10">
                    <div className="inline-flex px-3 py-1.5 rounded-full bg-brand-surface text-[9px] font-black text-primary uppercase tracking-[0.3em] border border-white shadow-soft">
                        <Activity size={10} className="mr-2 inline" /> About Us
                    </div>
                    <h2 className="text-gray-darkest leading-tight">
                        Our team of highly trained <span className="text-primary/10 relative"><span className="absolute inset-0 bg-primary/10 rounded-lg -z-10"></span><span className="text-primary z-10 relative">medical</span></span> professionals is here to provide the best possible care.
                    </h2>
                    <button className="flex items-center gap-4 bg-white border border-gray-lighter text-gray-darkest px-2 py-2 pr-6 rounded-full shadow-soft hover:bg-gray-50 transition-colors uppercase tracking-wider font-bold text-[10px]">
                        Learn More
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                            <ArrowRight size={12} strokeWidth={3} />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}
