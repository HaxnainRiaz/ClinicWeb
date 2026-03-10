"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { PillButton } from "@/components/ui/PillButton";
import { CheckCircle2, Calendar, Clock, MapPin, Share2, Download } from "lucide-react";

export default function ConfirmationContent() {
    const searchParams = useSearchParams();
    const [bookingId, setBookingId] = useState("MED-94281-Z");

    useEffect(() => {
        const id = searchParams.get("id") || searchParams.get("appointmentId");
        if (id) setBookingId(id);
    }, [searchParams]);

    return (
        <div className="max-w-xl w-full text-center space-y-8 animate-in fade-in duration-700">
            {/* Success Icon */}
            <div className="relative inline-block">
                <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center text-green-500 shadow-xl shadow-green-100/50 animate-in zoom-in duration-700">
                    <CheckCircle2 size={64} strokeWidth={3} />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center text-primary animate-bounce">
                    <Share2 size={16} />
                </div>
            </div>

            <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-black text-gray-darkest tracking-tight">Confirmed!</h1>
                <p className="text-xl font-bold text-gray-dark tracking-tight">Your appointment request has been scheduled.</p>
                <p className="text-xs font-black text-brand-muted uppercase tracking-[0.2em] pt-4">Booking ID: #{bookingId}</p>
            </div>

            <div className="bg-white p-6 rounded-[32px] border border-gray-lighter shadow-float text-left space-y-8 animate-in slide-in-from-bottom duration-700">
                <h5 className="text-[11px] font-black text-gray-darkest uppercase tracking-[0.2em]">Appointment Summary</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <Calendar size={20} />
                        </div>
                        <div>
                            <p className="text-[9px] font-black text-gray-muted uppercase tracking-widest leading-none mb-1">Date</p>
                            <p className="font-black text-gray-darkest">March 12, 2024</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <Clock size={20} />
                        </div>
                        <div>
                            <p className="text-[9px] font-black text-gray-muted uppercase tracking-widest leading-none mb-1">Time</p>
                            <p className="font-black text-gray-darkest">10:30 AM</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 md:col-span-2">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-[9px] font-black text-gray-muted uppercase tracking-widest leading-none mb-1">Location</p>
                            <p className="font-black text-gray-darkest">Main Clinic, 123 Health Ave, New York</p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-lighter flex flex-wrap gap-4">
                    <button className="flex-1 px-8 py-5 rounded-3xl bg-gray-lightest text-[11px] font-black text-gray-darkest uppercase tracking-widest hover:bg-gray-lighter transition-all flex items-center justify-center gap-2">
                        <Download size={14} /> Download PDF
                    </button>
                    <button className="flex-1 px-8 py-5 rounded-3xl bg-gray-lightest text-[11px] font-black text-gray-darkest uppercase tracking-widest hover:bg-gray-lighter transition-all flex items-center justify-center gap-2">
                        Add to Google Calendar
                    </button>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-8">
                <Link href="/">
                    <PillButton className="h-14 px-16 text-[12px] tracking-widest font-black uppercase shadow-xl shadow-primary/20">
                        Return to Homepage
                    </PillButton>
                </Link>
                <Link href="/doctors">
                    <PillButton variant="outline" className="h-14 px-16 text-[12px] tracking-widest font-black uppercase bg-white">
                        All Specialists
                    </PillButton>
                </Link>
            </div>
        </div>
    );
}
