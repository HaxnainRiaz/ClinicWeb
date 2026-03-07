"use client";

import { useState } from "react";
import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { PageHeroCompact } from "@/components/ui/PageHeroCompact";
import { Section, Card } from "@/components/ui/Section";
import { PillButton } from "@/components/ui/PillButton";
import { Plus, Minus, Search, MessageSquare, Phone, Mail, HelpCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { mockImages } from "@/lib/mockImages";

const faqData = [
    {
        category: "General Information",
        questions: [
            { q: "What are your clinic opening hours?", a: "We are open Monday through Friday from 8:00 AM to 8:00 PM, and Saturdays from 9:00 AM to 4:00 PM. Our Emergency Diagnostics center is available 24/7." },
            { q: "Where is the clinic located?", a: "Our main facility is located at 123 Health Avenue, Medical District, New York, NY 10001. We also have satellite clinics in Brooklyn and Queens." },
            { q: "How do I create a patient account?", a: "You can sign up via our website's registration page. Once registered, you can track your medical history, book appointments, and communicate with doctors." }
        ]
    },
    {
        category: "Appointments & Booking",
        questions: [
            { q: "How can I book an appointment?", a: "You can book an appointment through our online booking portal, via the patient app, or by calling our reception desk directly." },
            { q: "Can I reschedule or cancel my appointment?", a: "Yes, you can reschedule or cancel up to 24 hours before your scheduled time through your patient dashboard or by calling us." },
            { q: "what should I bring to my first appointment?", a: "Please bring a valid photo ID, your insurance card, and any relevant medical records or current medications you are taking." }
        ]
    },
    {
        category: "Billing & Insurance",
        questions: [
            { q: "Which insurance providers do you accept?", a: "We accept most major insurance providers including Blue Cross, Aetna, Cigna, and UnitedHealthcare. Please check our insurance partners page for a full list." },
            { q: "Do you offer payment plans for surgeries?", a: "Yes, we offer flexible financing options and monthly payment plans for non-emergency surgical procedures through our financial partners." },
            { q: "How can I pay my medical bills?", a: "Bills can be paid online via our secure patient portal, by mail, or in-person at any of our clinic locations." }
        ]
    }
];

export default function FAQPage() {
    const [search, setSearch] = useState("");
    const [openIndex, setOpenIndex] = useState("0-0");

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <main className="bg-brand-bg min-h-screen">
            <HeaderNav />
            <PageHeroCompact
                title="Help & Support Center"
                subtitle="Your comprehensive guide to Medify services, protocols, and patient care information."
                breadcrumb="Home / FAQ"
                bgImage={mockImages.fallback}
            />

            <Section className="pb-16 lg:pb-12">

                {/* ── Help Search ── */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="bg-white p-2 rounded-full shadow-3xl border border-gray-lighter focus-within:ring-8 focus-within:ring-primary/5 transition-all flex items-center group">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-focus-within:bg-primary group-focus-within:text-white transition-colors">
                            <Search size={24} />
                        </div>
                        <input
                            type="text"
                            placeholder="Type your question here (e.g. 'insurance', 'booking')"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="flex-1 px-8 bg-transparent text-xl font-black text-gray-darkest focus:outline-none placeholder:text-gray-muted tracking-tight"
                        />
                        <PillButton className="h-16 px-10 shadow-xl shadow-primary/20 text-xs tracking-widest uppercase font-black">Search FAQ</PillButton>
                    </div>
                </div>

                {/* ── FAQ Categories ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left: Direct Support */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="sticky top-32 space-y-8">
                            <Card className="bg-gray-darkest p-6 rounded-[40px] text-white space-y-8 shadow-3xl overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                                <div className="space-y-4">
                                    <h4 className="text-3xl font-black tracking-tight leading-tight">Couldn't find an answer?</h4>
                                    <p className="text-white/60 font-medium leading-relaxed">Our support specialists are standing by to help you with any clinical or administrative queries.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-white/5 p-4 rounded-[24px] border border-white/5 flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white">
                                            <Phone size={20} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-black uppercase tracking-widest text-white/50 mb-1">Direct Line</span>
                                            <span className="font-black text-lg tracking-tight">+1 (800) 123-4567</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-[24px] border border-white/5 flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                                            <Mail size={20} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-black uppercase tracking-widest text-white/50 mb-1">Official Support</span>
                                            <span className="font-black text-lg tracking-tight">care@medify.clinic</span>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/contact" className="block">
                                    <PillButton className="w-full bg-white text-primary hover:bg-brand-surface text-xs font-black uppercase tracking-widest">
                                        Open Support Ticket
                                    </PillButton>
                                </Link>
                            </Card>

                            <div className="p-6 rounded-[32px] bg-white border border-gray-lighter shadow-soft flex items-center gap-6 group hover:border-primary transition-all">
                                <div className="w-14 h-14 rounded-2xl bg-brand-bg flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                    <MessageSquare size={24} />
                                </div>
                                <p className="text-[11px] font-black text-gray-darkest uppercase tracking-[0.2em] leading-normal">
                                    Chat with our medical concierge live 24/7
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Accordions */}
                    <div className="lg:col-span-8 space-y-16">
                        {faqData.map((cat, catIdx) => (
                            <div key={catIdx} className="space-y-8 animate-in slide-in-from-right duration-700" style={{ animationDelay: `${catIdx * 150}ms` }}>
                                <div className="flex items-center gap-6">
                                    <h3 className="text-3xl font-black text-gray-darkest tracking-tight">{cat.category}</h3>
                                    <div className="h-0.5 flex-1 bg-gray-lighter" />
                                </div>

                                <div className="space-y-4">
                                    {cat.questions.map((item, qIdx) => {
                                        const uniqueIdx = `${catIdx}-${qIdx}`;
                                        const isOpen = openIndex === uniqueIdx;
                                        return (
                                            <div
                                                key={qIdx}
                                                className={cn(
                                                    "bg-white rounded-[32px] border transition-all duration-500 overflow-hidden shadow-soft hover:shadow-2xl",
                                                    isOpen ? "border-primary/20 ring-4 ring-primary/5" : "border-gray-lighter"
                                                )}
                                            >
                                                <button
                                                    onClick={() => toggle(uniqueIdx)}
                                                    className="w-full text-left p-6 lg:p-8 flex items-center justify-between gap-8 focus:outline-none"
                                                >
                                                    <span className={cn(
                                                        "text-xl lg:text-2xl font-black tracking-tight leading-tight transition-colors",
                                                        isOpen ? "text-primary" : "text-gray-darkest"
                                                    )}>
                                                        {item.q}
                                                    </span>
                                                    <div className={cn(
                                                        "w-12 h-12 rounded-full flex items-center justify-center transition-all flex-shrink-0 border-2 shadow-sm",
                                                        isOpen ? "bg-primary text-white border-primary rotate-180" : "bg-brand-bg text-primary border-transparent"
                                                    )}>
                                                        {isOpen ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
                                                    </div>
                                                </button>
                                                <div className={cn(
                                                    "transition-all duration-500 ease-in-out px-10 lg:px-12",
                                                    isOpen ? "max-h-[500px] pb-12 opacity-100" : "max-h-0 opacity-0"
                                                )}>
                                                    <div className="pt-6 border-t border-gray-lighter">
                                                        <p className="text-lg text-gray-dark font-medium leading-relaxed opacity-80 max-w-3xl">
                                                            {item.a}
                                                        </p>
                                                        <div className="flex items-center gap-6 mt-10">
                                                            <div className="flex items-center gap-4 text-[10px] font-black text-gray-muted uppercase tracking-widest">
                                                                Found this helpful?
                                                                <button className="text-primary hover:scale-110 transition-transform">YES</button>
                                                                <button className="hover:scale-110 transition-transform">NO</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </Section>

            {/* ── Visual Outro ── */}
            <Section className="py-24">
                <div className="bg-brand-surface p-6 lg:p-12 rounded-[60px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-float">
                    <div className="space-y-8">
                        <div className="w-16 h-16 rounded-[24px] bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                            <HelpCircle size={32} />
                        </div>
                        <h2 className="font-black text-gray-darkest tracking-tight leading-[1.1]">Still have questions?</h2>
                        <p className="text-2xl font-medium text-gray-dark leading-relaxed max-w-xl">
                            Our team is available round the clock to ensure you have all the information you need for a smooth clinical experience.
                        </p>
                    </div>
                    <div className="relative group">
                        <div className="aspect-square rounded-[40px] overflow-hidden shadow-3xl border-8 border-white transform rotate-2 transition-transform group-hover:rotate-0 duration-700">
                            <img src={mockImages.facility} className="w-full h-full object-cover" />
                        </div>
                        {/* Status Floating Pill */}
                        <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl animate-bounce">
                            Official Support Online
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
