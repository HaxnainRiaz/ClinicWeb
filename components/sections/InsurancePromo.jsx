import Link from "next/link";
import { ArrowRight, ShieldCheck, Wallet, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function InsurancePromo() {
    return (
        <section className="section-pad bg-brand-bg/50 border-t border-gray-lighter">
            <div className="container-custom max-w-6xl">
                <div className="bg-white rounded-[24px] shadow-card border border-gray-lighter p-8 md:p-12 overflow-hidden relative">
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side: Text */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-[11.5px] font-semibold text-primary">
                                <ShieldCheck size={14} strokeWidth={2.5} />
                                Simplified Booking
                            </div>

                            <h2 className="text-gray-darkest leading-tight">
                                Book with Insurance or Self-Pay
                            </h2>

                            <p className="text-[16px] text-gray-muted leading-[1.7]">
                                Choose your payment option, submit your booking details, and our clinic will verify your coverage before confirming your visit.
                            </p>

                            <div className="flex items-start gap-3 mt-4 bg-blue-50/50 p-4 rounded-[16px] border border-blue-100">
                                <Info size={16} className="text-primary mt-0.5 shrink-0" />
                                <p className="text-[13px] text-gray-medium leading-relaxed">
                                    <span className="font-semibold text-gray-darkest">Note:</span> Coverage and final patient responsibility depend on your plan benefits and eligibility verification.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Action Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Card 1: Insurance */}
                            <Link
                                href="/appointments?flow=insurance"
                                className="group flex flex-col p-6 rounded-[20px] bg-white border border-gray-lighter shadow-sm hover:shadow-hover hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-[14px] bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                                    <ShieldCheck size={24} strokeWidth={2} />
                                </div>
                                <h4 className="text-[18px] text-gray-darkest mb-2">Use Insurance</h4>
                                <p className="text-[13.5px] text-gray-muted leading-[1.6] mb-6 flex-1">
                                    Verify your eligibility instantly and pay through your provider network.
                                </p>
                                <div className="flex items-center gap-1.5 text-[13px] font-semibold text-primary mt-auto">
                                    Book Now <ArrowRight size={14} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            {/* Card 2: Self-Pay */}
                            <Link
                                href="/appointments?flow=self-pay"
                                className="group flex flex-col p-6 rounded-[20px] bg-white border border-gray-lighter shadow-sm hover:shadow-hover hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-[14px] bg-brand-surface flex items-center justify-center text-gray-darkest mb-5 group-hover:scale-110 transition-transform">
                                    <Wallet size={24} strokeWidth={2} />
                                </div>
                                <h4 className="text-[18px] text-gray-darkest mb-2">Self-Pay</h4>
                                <p className="text-[13.5px] text-gray-muted leading-[1.6] mb-6 flex-1">
                                    Simple, transparent upfront pricing for patients without accepted insurance.
                                </p>
                                <div className="flex items-center gap-1.5 text-[13px] font-semibold text-gray-darkest mt-auto group-hover:text-primary transition-colors">
                                    Book Now <ArrowRight size={14} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
