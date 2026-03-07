"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { doctors, specialties } from "@/lib/data";
import { PillButton } from "@/components/ui/PillButton";
import { FormField, Input } from "@/components/ui/Form";
import {
    ChevronRight, ArrowLeft, Calendar, Clock,
    User, CheckCircle2, ChevronLeft, MapPin
} from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
    { id: 1, title: "Specialist", icon: User },
    { id: 2, title: "Booking", icon: Calendar },
    { id: 3, title: "Your Info", icon: Clock },
    { id: 4, title: "Confirm", icon: CheckCircle2 }
];

export function AppointmentFlow() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        specialty: "",
        doctorId: null,
        date: "",
        time: "",
        name: "",
        email: "",
        phone: "",
        notes: ""
    });

    // Filter doctors based on selected specialty
    const filteredDoctors = useMemo(() => {
        if (!formData.specialty) return doctors;
        return doctors.filter(doc => doc.specialty === formData.specialty);
    }, [formData.specialty]);

    const selectedDoctor = useMemo(() =>
        doctors.find(d => d.id === formData.doctorId),
        [formData.doctorId]
    );

    const nextStep = () => setStep(s => Math.min(s + 1, 4));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    const updateForm = (updates) => setFormData(p => ({ ...p, ...updates }));

    const handleSubmit = () => {
        // Final mock submission
        setTimeout(() => {
            router.push("/appointments/confirmation");
        }, 1000);
    };

    return (
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">

            {/* ── Left Sidebar: Progress ── */}
            <div className="lg:col-span-3 space-y-8">
                <div className="flex flex-col gap-3">
                    {STEPS.map((s, i) => (
                        <div
                            key={s.id}
                            className={cn(
                                "flex items-center gap-4 p-4 rounded-3xl border-2 transition-all",
                                step === s.id
                                    ? "bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105"
                                    : i < step - 1
                                        ? "bg-primary/5 border-primary/20 text-primary"
                                        : "bg-white border-gray-lighter text-gray-dark"
                            )}
                        >
                            <div className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center border-2",
                                step === s.id ? "bg-white/20 border-white" : "bg-white border-transparent"
                            )}>
                                <s.icon size={18} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Step 0{s.id}</span>
                                <span className="text-sm font-black tracking-tight">{s.title}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Selected Summary Preview */}
                {step > 1 && (
                    <div className="bg-brand-surface p-5 rounded-[24px] border border-primary/10 space-y-6">
                        <h5 className="text-[10px] font-black uppercase text-brand-muted tracking-[0.2em]">Booking Detail</h5>
                        <div className="space-y-4">
                            {formData.specialty && (
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <p className="text-xs font-bold text-gray-darkest uppercase tracking-widest">{formData.specialty}</p>
                                </div>
                            )}
                            {selectedDoctor && (
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white overflow-hidden relative border-2 border-white shadow-sm shrink-0">
                                        <img src={selectedDoctor.image} className="w-full h-full object-cover" />
                                    </div>
                                    <p className="text-xs font-black text-gray-darkest">{selectedDoctor.name}</p>
                                </div>
                            )}
                            {formData.date && (
                                <div className="flex items-center gap-3 text-gray-dark">
                                    <Calendar size={14} className="text-primary" />
                                    <p className="text-xs font-bold">{formData.date} {formData.time && `at ${formData.time}`}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* ── Main Panel ── */}
            <div className="lg:col-span-9 space-y-12">

                {/* Step Content */}
                <div className="min-h-[500px] animate-in slide-in-from-right duration-500">

                    {/* STEP 1: Select Specialty & Doctor */}
                    {step === 1 && (
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-black text-gray-darkest tracking-tight">Select your specialist</h2>
                                <div className="flex flex-wrap gap-3">
                                    {specialties.map(spec => (
                                        <button
                                            key={spec}
                                            onClick={() => updateForm({ specialty: spec, doctorId: null })}
                                            className={cn(
                                                "px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all",
                                                formData.specialty === spec
                                                    ? "bg-primary text-white shadow-xl shadow-primary/20 scale-110"
                                                    : "bg-white border border-gray-lighter text-gray-dark hover:border-primary hover:text-primary shadow-soft"
                                            )}
                                        >
                                            {spec}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {filteredDoctors.map(doc => (
                                    <button
                                        key={doc.id}
                                        onClick={() => updateForm({ doctorId: doc.id })}
                                        className={cn(
                                            "flex items-center gap-6 p-4 rounded-[32px] border-4 text-left transition-all group overflow-hidden relative",
                                            formData.doctorId === doc.id
                                                ? "bg-white border-primary shadow-2xl scale-105 z-10"
                                                : "bg-white border-transparent shadow-soft hover:border-primary/20"
                                        )}
                                    >
                                        <div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden relative border-4 border-white shadow-soft shrink-0">
                                            <img src={doc.image} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest">{doc.specialty}</p>
                                            <h4 className="text-xl font-black text-gray-darkest tracking-tight">{doc.name}</h4>
                                            <div className="flex items-center gap-4 text-[10px] font-bold text-gray-dark uppercase tracking-widest">
                                                <span className="flex items-center gap-1.5"><Clock size={12} className="text-primary" /> {doc.availability[0]}</span>
                                            </div>
                                        </div>
                                        {formData.doctorId === doc.id && (
                                            <div className="absolute top-4 right-4 text-primary bg-primary/10 p-2 rounded-full">
                                                <CheckCircle2 size={24} />
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP 2: Delivery Dates & Times */}
                    {step === 2 && (
                        <div className="space-y-12">
                            <h2 className="text-3xl font-black text-gray-darkest tracking-tight">Choose your time slot</h2>

                            <div className="space-y-8">
                                <h5 className="text-[11px] font-black uppercase text-gray-dark tracking-[0.2em] pl-2">Select Date</h5>
                                <div className="flex gap-4 overflow-x-auto pb-4 pt-2 -mx-2 px-2 mask-linear-r">
                                    {["Monday, Mar 10", "Tuesday, Mar 11", "Wednesday, Mar 12", "Thursday, Mar 13", "Friday, Mar 14"].map(date => (
                                        <button
                                            key={date}
                                            onClick={() => updateForm({ date })}
                                            className={cn(
                                                "px-6 py-4 rounded-[24px] text-center border-2 transition-all shadow-soft flex flex-col gap-2 shrink-0",
                                                formData.date === date
                                                    ? "bg-primary border-primary text-white scale-110 shadow-xl shadow-primary/30"
                                                    : "bg-white border-gray-lighter text-gray-dark hover:border-primary/40"
                                            )}
                                        >
                                            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{date.split(',')[0]}</span>
                                            <span className="text-md font-black tracking-tight">{date.split(',')[1]}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h5 className="text-[11px] font-black uppercase text-gray-dark tracking-[0.2em] pl-2">Select Time</h5>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "03:45 PM", "05:00 PM"].map(time => (
                                        <button
                                            key={time}
                                            onClick={() => updateForm({ time })}
                                            className={cn(
                                                "px-6 py-4 rounded-pill text-center border-2 transition-all font-black text-sm uppercase tracking-widest",
                                                formData.time === time
                                                    ? "bg-brand-bg border-primary text-primary"
                                                    : "bg-white border-gray-lighter text-gray-darkest hover:border-primary/40"
                                            )}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 3: Patient Info */}
                    {step === 3 && (
                        <div className="space-y-12 max-w-2xl">
                            <h2 className="text-3xl font-black text-gray-darkest tracking-tight">Patient details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <FormField label="Patient Full Name">
                                    <Input placeholder="John Doe" value={formData.name} onChange={e => updateForm({ name: e.target.value })} />
                                </FormField>
                                <FormField label="Phone Number">
                                    <Input placeholder="+1 (800) 000-0000" type="tel" value={formData.phone} onChange={e => updateForm({ phone: e.target.value })} />
                                </FormField>
                                <div className="md:col-span-2">
                                    <FormField label="Email Address">
                                        <Input placeholder="john@example.com" type="email" value={formData.email} onChange={e => updateForm({ email: e.target.value })} />
                                    </FormField>
                                </div>
                                <div className="md:col-span-2">
                                    <FormField label="Additional Notes (Optional)">
                                        <textarea
                                            className="w-full px-8 py-6 rounded-[30px] bg-white border border-gray-lighter focus:border-primary focus:outline-none font-bold text-sm resize-none h-40 shadow-soft"
                                            placeholder="Tell us more about your symptoms..."
                                            value={formData.notes}
                                            onChange={e => updateForm({ notes: e.target.value })}
                                        />
                                    </FormField>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 4: Review & Confirm */}
                    {step === 4 && (
                        <div className="space-y-12">
                            <h2 className="text-3xl font-black text-gray-darkest tracking-tight">Review & Confirm</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="bg-white p-10 rounded-[60px] border border-gray-lighter shadow-float space-y-8">
                                    <div className="flex items-center gap-6 pb-8 border-b border-gray-lighter">
                                        <div className="w-24 h-24 rounded-full bg-blue-50 overflow-hidden relative border-4 border-white shadow-soft">
                                            <img src={selectedDoctor.image} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest">{selectedDoctor.specialty}</p>
                                            <h4 className="text-2xl font-black text-gray-darkest">{selectedDoctor.name}</h4>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-6">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                                <Calendar size={20} />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-black text-gray-dark uppercase tracking-widest leading-none mb-1.5">Date & Time</span>
                                                <span className="font-black text-gray-darkest tracking-tight">{formData.date} • {formData.time}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-primary/20 flex items-center justify-center text-primary">
                                                <MapPin size={20} />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-black text-gray-dark uppercase tracking-widest leading-none mb-1.5">Location</span>
                                                <span className="font-black text-gray-darkest tracking-tight">Main Clinic, New York</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8 pt-6 lg:pt-10">
                                    <div className="p-10 rounded-[60px] bg-brand-surface border border-primary/10 space-y-6">
                                        <h5 className="text-[11px] font-black uppercase text-brand-muted tracking-[0.2em]">Patient Summary</h5>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-[9px] font-black text-gray-dark uppercase tracking-widest opacity-60">Full Name</p>
                                                <p className="font-black text-lg text-gray-darkest tracking-tight">{formData.name || "N/A"}</p>
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-black text-gray-dark uppercase tracking-widest opacity-60">Phone</p>
                                                <p className="font-black text-lg text-gray-darkest tracking-tight">{formData.phone || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-xs font-bold text-brand-muted text-center max-w-sm mx-auto leading-relaxed">
                                        By confirming this appointment, you agree to our Terms and that you will receive reminders via email and SMS.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

                {/* Action Bar */}
                <div className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-xl border-t border-gray-lighter py-6 z-40 lg:relative lg:bg-transparent lg:border-none lg:py-0">
                    <div className="container-custom lg:px-0 flex items-center justify-between">
                        <button
                            onClick={prevStep}
                            disabled={step === 1}
                            className="flex items-center gap-2 px-8 py-3 text-[11px] font-black text-gray-dark uppercase tracking-widest hover:text-primary transition-all disabled:opacity-0"
                        >
                            <ChevronLeft size={16} strokeWidth={3} /> Back
                        </button>

                        {step < 4 ? (
                            <PillButton
                                className="h-16 px-12 text-[12px] tracking-widest uppercase font-black"
                                onClick={nextStep}
                                disabled={step === 1 ? !formData.doctorId : step === 2 ? !formData.time : !formData.name}
                            >
                                Continue <ChevronRight size={18} strokeWidth={3} />
                            </PillButton>
                        ) : (
                            <PillButton
                                className="h-16 px-16 text-[12px] tracking-widest uppercase font-black bg-gray-darkest hover:bg-black"
                                onClick={handleSubmit}
                            >
                                Confirm Appointment
                            </PillButton>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
