import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { PageHeroCompact } from "@/components/ui/PageHeroCompact";
import { Section } from "@/components/ui/Section";
import { FileCheck, ShieldAlert, Gavel, Scale, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { mockImages } from "@/lib/mockImages";

const terms = [
    {
        title: "Medical Representation",
        icon: Scale,
        content: "Medify Clinic provides clinical healthcare services. All information on this website is for informational purposes and should not be considered self-diagnosis or direct medical advice without a consultation."
    },
    {
        title: "Patient Responsibility",
        icon: FileCheck,
        content: "Patients are responsible for providing accurate medical history, contact information, and insurance details. Failure to provide truthful information may result in termination of clinical services."
    },
    {
        title: "Appointment Cancellation",
        icon: ShieldAlert,
        content: "Cancellations must be made at least 24 hours in advance. Late cancellations or 'no-shows' may be subject to a nominal administrative fee as per our clinical board regulations."
    },
    {
        title: "Service Termination",
        icon: Gavel,
        content: "Medify reserves the right to terminate services due to non-payment, disruptive behavior, or clinical risks that exceed the facility's specialized capabilities."
    }
];

export default function TermsPage() {
    return (
        <main className="bg-brand-bg min-h-screen">
            <HeaderNav />
            <PageHeroCompact
                title="Terms of Service"
                subtitle="Guidelines and legal protocols for every clinical interaction on the Medify platform."
                breadcrumb="Home / Terms"
                bgImage={mockImages.fallback}
            />

            <Section className="pb-16 lg:pb-12">
                <div className="max-w-4xl mx-auto space-y-10">

                    {/* Header Card */}
                    <div className="bg-white p-6 lg:p-8 rounded-[40px] shadow-soft border border-gray-lighter space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 animate-pulse" />
                        <h2 className="text-4xl font-black text-gray-darkest tracking-tight">Legal Clinical Framework</h2>
                        <p className="text-xl font-medium text-gray-dark leading-relaxed">
                            By using Medify's digital or physical facilities, you agree to comply with our professional healthcare standards and the regulations outlined in this service agreement.
                        </p>
                    </div>

                    {/* Terms Stack */}
                    <div className="space-y-6">
                        {terms.map((term, i) => (
                            <div key={i} className="group p-6 lg:p-8 bg-white rounded-[40px] border border-gray-lighter hover:border-primary shadow-float transition-all flex flex-col md:flex-row gap-8 items-start md:items-center">
                                <div className="w-20 h-20 rounded-[32px] bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm shrink-0">
                                    <term.icon size={36} />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-3xl font-black text-gray-darkest tracking-tight leading-none">{term.title}</h4>
                                    <p className="text-xl font-medium text-gray-dark leading-relaxed opacity-80">{term.content}</p>
                                </div>
                                <div className="ml-auto w-12 h-12 rounded-full border border-gray-lighter flex items-center justify-center text-gray-muted opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Acceptance */}
                    <div className="bg-gray-darkest p-6 lg:p-8 rounded-[40px] text-white space-y-8 shadow-3xl text-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] border border-white/5">
                                Effective Date: January 2024
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-[0.95]">Ready to proceed professionally?</h2>
                            <p className="text-xl font-medium text-white/50 leading-relaxed max-w-2xl mx-auto">
                                By continuing to use our services or booking an appointment, you implicitly accept these professional healthcare terms.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                            <Link href="/">
                                <button className="h-18 px-14 rounded-full bg-primary text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-xl shadow-primary/20">
                                    Accept Terms & Start <ChevronRight size={18} />
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="h-18 px-14 rounded-full border-2 border-white/20 text-white text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                                    Legal Inquiry
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </Section>

            <Footer />
        </main>
    );
}
