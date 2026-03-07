import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { PageHeroCompact } from "@/components/ui/PageHeroCompact";
import { Section } from "@/components/ui/Section";
import { ShieldCheck, Lock, Eye, FileText, ChevronRight } from "lucide-react";
import { mockImages } from "@/lib/mockImages";

const policySections = [
    {
        title: "1. Data Collection",
        icon: Eye,
        content: "Medify Clinic collects personal information that you provide to us when you register on our website, book an appointment, or contact our support team. This includes your name, contact information, insurance details, and medical history shared for clinical purposes."
    },
    {
        title: "2. How We Use Data",
        icon: FileText,
        content: "We use your information to provide medical services, process billing, manage your account, and improve our patient care standards. We also use clinical data in an anonymized format for medical research and internal quality assessments."
    },
    {
        title: "3. Data Security",
        icon: Lock,
        content: "We implement a variety of security measures to maintain the safety of your personal information. Your clinical data is encrypted using 256-bit AES encryption and stored on HIPAA-compliant servers with restricted access."
    },
    {
        title: "4. Third-Party Sharing",
        icon: ShieldCheck,
        content: "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted partners who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential."
    }
];

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-brand-bg min-h-screen">
            <HeaderNav />
            <PageHeroCompact
                title="Privacy Policy"
                subtitle="Your health data is protected by the highest clinical and digital security standards."
                breadcrumb="Home / Privacy"
                bgImage={mockImages.fallback}
            />

            <Section className="pb-16 lg:pb-12">
                <div className="max-w-4xl mx-auto space-y-10">

                    {/* Intro Card */}
                    <div className="bg-white p-6 lg:p-8 rounded-[40px] shadow-soft border border-gray-lighter space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 animate-pulse" />
                        <h2 className="text-4xl font-black text-gray-darkest tracking-tight">Our Commitment to Privacy</h2>
                        <p className="text-xl font-medium text-gray-dark leading-relaxed">
                            At Medify, we understand that medical information is highly sensitive. This policy outlines our professional clinical protocol for data handling and is compliant with international patient safety and digital protection acts.
                        </p>
                    </div>

                    {/* Policy Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {policySections.map((section, i) => (
                            <div key={i} className="p-6 rounded-[32px] bg-white border border-gray-lighter hover:border-primary transition-all shadow-float group">
                                <div className="w-16 h-16 rounded-[24px] bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                    <section.icon size={28} />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-black text-gray-darkest tracking-tight">{section.title}</h4>
                                    <p className="text-lg font-medium text-gray-dark leading-relaxed opacity-80">{section.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Contact */}
                    <div className="bg-gray-darkest p-6 lg:p-8 rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-12 shadow-3xl">
                        <div className="space-y-4 max-w-xl text-center md:text-left">
                            <h3 className="text-3xl font-black tracking-tight leading-tight">Questions about your data?</h3>
                            <p className="text-lg font-medium text-white/50">Contact our dedicated Data Protection Officer for any queries regarding HIPAA compliance or data inquiries.</p>
                        </div>
                        <div className="flex flex-col gap-4 w-full md:w-auto">
                            <button className="h-16 px-12 rounded-full bg-primary text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-3">
                                Email Privacy Team <ChevronRight size={18} />
                            </button>
                            <button className="h-16 px-12 rounded-full border-2 border-white/20 text-white text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                                Download PDF Policy
                            </button>
                        </div>
                    </div>

                </div>
            </Section>

            <Footer />
        </main>
    );
}
