"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { doctors, specialties, insuranceProviders } from "@/lib/data";
import { FormField, Input } from "@/components/ui/Form";
import {
    ChevronRight, ChevronLeft, Calendar, Clock,
    User, CheckCircle2, MapPin, Wallet, ShieldCheck,
    CreditCard, Check, AlertCircle, UploadCloud, Info, CheckCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

// Define all possible logical steps in the booking flow
const STEPS_CONFIG = [
    { id: "visit", title: "Visit Type", icon: ActivityIcon }, // Instead of Activity, just use User for now
    { id: "payment", title: "Payment", icon: CreditCard },
    { id: "insurance_info", title: "Insurance Details", icon: ShieldCheck }, // conditional
    { id: "doctor", title: "Specialist", icon: User },
    { id: "datetime", title: "Date & Time", icon: Clock },
    { id: "patient", title: "Your Info", icon: CheckCircle2 },
    { id: "review", title: "Review", icon: Check }
];

// Fallback icon for Visit Type
function ActivityIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
    )
}

export function AppointmentFlow() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const urlFlow = searchParams?.get('flow');
    const doctorSlug = searchParams?.get('doctor');

    const [formData, setFormData] = useState({
        specialty: "",
        paymentType: urlFlow === 'insurance' || urlFlow === 'self-pay' ? urlFlow : "",
        insuranceProvider: "",
        memberId: "",
        groupNumber: "",
        subscriberName: "",
        relationship: "Self",
        patientDob: "",
        subscriberDob: "",
        hasConsent: false,
        doctorId: null,
        date: "",
        time: "",
        name: "",
        email: "",
        phone: "",
        notes: ""
    });

    // Determine the actual path of steps based on payment selection
    const activeSteps = useMemo(() => {
        const base = ["visit", "payment"];
        if (formData.paymentType === "insurance") {
            base.push("insurance_info");
        }
        base.push("doctor", "datetime", "patient", "review");
        return base;
    }, [formData.paymentType]);

    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const activeStepId = activeSteps[currentStepIndex];

    // Read initial doctor parameter
    useEffect(() => {
        if (doctorSlug && currentStepIndex === 0) {
            const doc = doctors.find(d => d.slug === doctorSlug);
            if (doc) {
                setFormData(prev => ({ ...prev, specialty: doc.specialty, doctorId: doc.id }));
            }
        }
    }, [doctorSlug]);

    const filteredDoctors = useMemo(() => {
        let list = doctors;
        if (formData.specialty) {
            list = list.filter(doc => doc.specialty === formData.specialty);
        }
        if (formData.paymentType === "insurance" && formData.insuranceProvider) {
            // Further filter by accepted insurance
            list = list.filter(doc => doc.insurances?.includes(formData.insuranceProvider));
        }
        return list;
    }, [formData.specialty, formData.paymentType, formData.insuranceProvider]);

    const selectedDoctor = useMemo(() =>
        doctors.find(d => d.id === formData.doctorId),
        [formData.doctorId]
    );

    const nextStep = () => setCurrentStepIndex(s => Math.min(s + 1, activeSteps.length - 1));
    const prevStep = () => setCurrentStepIndex(s => Math.max(s - 1, 0));

    const updateForm = (updates) => {
        setFormData(p => ({ ...p, ...updates }));
    };

    const handleSubmit = () => {
        router.push("/appointments/confirmation");
    };

    // Validation
    const canProceed = () => {
        switch (activeStepId) {
            case "visit": return !!formData.specialty;
            case "payment": return !!formData.paymentType;
            case "insurance_info": return formData.insuranceProvider && formData.memberId && formData.subscriberName && formData.patientDob && formData.hasConsent;
            case "doctor": return !!formData.doctorId;
            case "datetime": return formData.date && formData.time;
            case "patient": return formData.name && formData.phone && formData.email;
            case "review": return true;
            default: return false;
        }
    };

    return (
        <div className="container-custom max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-0 pb-12">

            {/* ── Left Sidebar: Progress Stepper ── */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-max hidden lg:block space-y-8">
                <div className="bg-white rounded-[24px] shadow-sm border border-gray-lighter p-8">
                    <h4 className="text-[16px] text-gray-darkest border-b border-gray-lighter pb-4 mb-6">Booking Progress</h4>
                    <div className="flex flex-col gap-5 relative">
                        {/* Connecting line */}
                        <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-gray-lighter z-0" />

                        {activeSteps.map((stepId, index) => {
                            const conf = STEPS_CONFIG.find(c => c.id === stepId);
                            const isActive = index === currentStepIndex;
                            const isPast = index < currentStepIndex;

                            return (
                                <div key={stepId} className="flex items-center gap-4 relative z-10 group cursor-default">
                                    <div className={cn(
                                        "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                                        isActive ? "bg-primary text-white shadow-md shadow-primary/20 scale-110" :
                                            isPast ? "bg-primary/10 text-primary" : "bg-white border-2 border-gray-lighter text-gray-light"
                                    )}>
                                        {isPast ? <Check size={16} strokeWidth={3} /> : <conf.icon size={16} strokeWidth={isActive ? 2.5 : 2} />}
                                    </div>
                                    <div className="flex flex-col flex-1 pb-1">
                                        <span className={cn(
                                            "text-[10px] font-semibold uppercase tracking-widest",
                                            isActive || isPast ? "text-primary/70" : "text-gray-light"
                                        )}>
                                            Step {index + 1}
                                        </span>
                                        <span className={cn(
                                            "text-[14px] font-bold transition-colors",
                                            isActive ? "text-gray-darkest" :
                                                isPast ? "text-gray-dark" : "text-gray-medium"
                                        )}>
                                            {conf.title}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Selected Summary Preview (Sidebar) */}
                {currentStepIndex > 1 && (
                    <div className="bg-brand-bg p-6 rounded-[24px] border border-gray-lighter space-y-5">
                        <h5 className="text-[12px] font-semibold uppercase text-gray-medium tracking-widest">Your Summary</h5>
                        <div className="space-y-4">
                            {formData.specialty && (
                                <div className="flex items-center gap-3">
                                    <ActivityIcon size={14} className="text-primary shrink-0" />
                                    <p className="text-[13px] font-medium text-gray-darkest">{formData.specialty} Consultation</p>
                                </div>
                            )}
                            {formData.paymentType && (
                                <div className="flex items-center gap-3">
                                    {formData.paymentType === 'insurance' ? <ShieldCheck size={14} className="text-primary shrink-0" /> : <Wallet size={14} className="text-primary shrink-0" />}
                                    <p className="text-[13px] font-medium text-gray-darkest capitalize">{formData.paymentType} Patient</p>
                                </div>
                            )}
                            {selectedDoctor && (
                                <div className="flex items-center gap-3 pt-2 border-t border-gray-lighter/60">
                                    <div className="w-8 h-8 rounded-full bg-white overflow-hidden shrink-0">
                                        <img src={selectedDoctor.image} className="w-full h-full object-cover object-top" />
                                    </div>
                                    <p className="text-[13px] font-bold text-gray-darkest">{selectedDoctor.name}</p>
                                </div>
                            )}
                            {formData.date && (
                                <div className="flex gap-3 text-gray-dark pt-2">
                                    <Calendar size={14} className="text-primary shrink-0 mt-0.5" />
                                    <p className="text-[13px] font-medium leading-tight">{formData.date} <br /><span className="text-gray-medium">{formData.time}</span></p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* ── Main Panel ── */}
            <div className="lg:col-span-8">

                {/* Mobile Stepper Header */}
                <div className="lg:hidden flex items-center justify-between mb-8 pb-4 border-b border-gray-lighter">
                    <div>
                        <p className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-1">Step {currentStepIndex + 1} of {activeSteps.length}</p>
                        <h2 className="text-[22px] font-bold text-gray-darkest m-0">{STEPS_CONFIG.find(c => c.id === activeStepId)?.title}</h2>
                    </div>
                </div>

                {/* Form Content Container */}
                <div className="min-h-[450px] animate-in slide-in-from-right duration-500 mb-20 lg:mb-10">

                    {/* STEP: Visit Type */}
                    {activeStepId === "visit" && (
                        <div className="space-y-8">
                            <div className="hidden lg:block space-y-2 mb-10">
                                <h2 className="text-gray-darkest m-0">Choose Visit Type</h2>
                                <p className="text-gray-muted text-[15px]">Select the medical specialty for your consultation.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {specialties.map(spec => (
                                    <button
                                        key={spec}
                                        onClick={() => updateForm({ specialty: spec, doctorId: null })}
                                        className={cn(
                                            "flex items-center gap-4 p-5 rounded-[16px] border-2 transition-all text-left",
                                            formData.specialty === spec
                                                ? "bg-primary/5 border-primary shadow-sm"
                                                : "bg-white border-gray-lighter hover:border-primary/40 text-gray-dark"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors",
                                            formData.specialty === spec ? "bg-primary text-white" : "bg-gray-lightest text-gray-medium"
                                        )}>
                                            <ActivityIcon size={18} />
                                        </div>
                                        <span className={cn(
                                            "text-[15px] font-bold",
                                            formData.specialty === spec ? "text-primary-dark" : "text-gray-darkest"
                                        )}>{spec}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP: Payment Method */}
                    {activeStepId === "payment" && (
                        <div className="space-y-8">
                            <div className="hidden lg:block space-y-2 mb-10">
                                <h2 className="text-gray-darkest m-0">How would you like to book your visit?</h2>
                                <p className="text-gray-muted text-[15px]">Choose your preferred payment or coverage option.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <button
                                    onClick={() => updateForm({ paymentType: 'insurance', doctorId: null })}
                                    className={cn(
                                        "flex flex-col p-6 lg:p-8 rounded-[20px] border-2 transition-all text-left relative overflow-hidden group",
                                        formData.paymentType === 'insurance'
                                            ? "bg-primary/5 border-primary shadow-sm"
                                            : "bg-white border-gray-lighter hover:border-primary/40 hover:shadow-hover"
                                    )}
                                >
                                    <div className={cn(
                                        "w-14 h-14 rounded-[16px] flex items-center justify-center mb-6 transition-colors",
                                        formData.paymentType === 'insurance' ? "bg-primary text-white" : "bg-brand-bg text-primary group-hover:scale-105"
                                    )}>
                                        <ShieldCheck size={26} strokeWidth={2} />
                                    </div>
                                    <h4 className="text-[18px] text-gray-darkest mb-2 font-bold">Use Insurance</h4>
                                    <p className="text-[14px] text-gray-medium leading-relaxed">
                                        Enter your insurance details and our team will verify your eligibility before confirming the appointment.
                                    </p>
                                    {formData.paymentType === 'insurance' && (
                                        <div className="absolute top-6 right-6 text-primary">
                                            <CheckCircle2 size={24} className="fill-primary/20" />
                                        </div>
                                    )}
                                </button>

                                <button
                                    onClick={() => updateForm({ paymentType: 'self-pay' })}
                                    className={cn(
                                        "flex flex-col p-6 lg:p-8 rounded-[20px] border-2 transition-all text-left relative overflow-hidden group",
                                        formData.paymentType === 'self-pay'
                                            ? "bg-brand-surface border-gray-darkest shadow-sm"
                                            : "bg-white border-gray-lighter hover:border-gray-darkest/40 hover:shadow-hover"
                                    )}
                                >
                                    <div className={cn(
                                        "w-14 h-14 rounded-[16px] flex items-center justify-center mb-6 transition-colors",
                                        formData.paymentType === 'self-pay' ? "bg-gray-darkest text-white" : "bg-gray-100 text-gray-darkest group-hover:scale-105"
                                    )}>
                                        <Wallet size={26} strokeWidth={2} />
                                    </div>
                                    <h4 className="text-[18px] text-gray-darkest mb-2 font-bold">Self-Pay</h4>
                                    <p className="text-[14px] text-gray-medium leading-relaxed">
                                        No insurance? You can still request an appointment as a direct self-pay patient.
                                    </p>
                                    {formData.paymentType === 'self-pay' && (
                                        <div className="absolute top-6 right-6 text-gray-darkest">
                                            <CheckCircle2 size={24} className="fill-gray-darkest/20" />
                                        </div>
                                    )}
                                </button>
                            </div>

                            <div className="mt-6 flex items-start gap-3 p-4 rounded-[16px] bg-blue-50/60 border border-blue-100">
                                <Info size={16} className="text-primary mt-0.5 shrink-0" />
                                <p className="text-[13.5px] text-gray-medium leading-relaxed">
                                    Coverage and patient responsibility vary by plan. Final costs are confirmed after eligibility verification.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* STEP: Insurance Info */}
                    {activeStepId === "insurance_info" && (
                        <div className="space-y-8 animate-in slide-in-from-right">
                            <div className="hidden lg:block space-y-2 mb-8">
                                <h2 className="text-gray-darkest m-0">Insurance Verification</h2>
                                <p className="text-gray-muted text-[15px]">Please provide your primary insurance information.</p>
                            </div>

                            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-gray-lighter shadow-sm space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                                    <div className="md:col-span-2">
                                        <label className="block text-[13px] font-bold text-gray-darkest mb-2">Insurance Provider</label>
                                        <select
                                            value={formData.insuranceProvider}
                                            onChange={(e) => updateForm({ insuranceProvider: e.target.value })}
                                            className="w-full h-[52px] px-4 rounded-[14px] bg-white border border-gray-light/40 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 text-[15px] font-medium text-gray-darkest transition-all appearance-none"
                                        >
                                            <option value="" disabled>Select your provider</option>
                                            {insuranceProviders.map(provider => (
                                                <option key={provider} value={provider}>{provider}</option>
                                            ))}
                                            <option value="Other">Other / Not Listed</option>
                                        </select>
                                    </div>

                                    <FormField label="Member ID">
                                        <Input placeholder="e.g. ABC123456789" value={formData.memberId} onChange={e => updateForm({ memberId: e.target.value })} />
                                    </FormField>

                                    <FormField label="Group Number (Optional)">
                                        <Input placeholder="e.g. 0987654" value={formData.groupNumber} onChange={e => updateForm({ groupNumber: e.target.value })} />
                                    </FormField>

                                    <FormField label="Subscriber Full Name">
                                        <Input placeholder="Name on the card" value={formData.subscriberName} onChange={e => updateForm({ subscriberName: e.target.value })} />
                                    </FormField>

                                    <div>
                                        <label className="block text-[13px] font-bold text-gray-darkest mb-2">Relationship to Subscriber</label>
                                        <select
                                            value={formData.relationship}
                                            onChange={(e) => updateForm({ relationship: e.target.value })}
                                            className="w-full h-[52px] px-4 rounded-[14px] bg-white border border-gray-light/40 focus:border-primary focus:outline-none text-[15px] font-medium text-gray-darkest appearance-none"
                                        >
                                            <option value="Self">Self</option>
                                            <option value="Spouse">Spouse</option>
                                            <option value="Child">Child</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <FormField label="Patient Date of Birth">
                                        <Input type="date" value={formData.patientDob} onChange={e => updateForm({ patientDob: e.target.value })} />
                                    </FormField>

                                    {formData.relationship !== "Self" && (
                                        <FormField label="Subscriber Date of Birth">
                                            <Input type="date" value={formData.subscriberDob} onChange={e => updateForm({ subscriberDob: e.target.value })} />
                                        </FormField>
                                    )}
                                </div>

                                <div className="pt-6 border-t border-gray-lighter">
                                    <label className="block text-[13px] font-bold text-gray-darkest mb-4">Upload Insurance Card (Optional but recommended)</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="border-2 border-dashed border-gray-lighter rounded-[16px] bg-gray-lightest p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/50 transition-colors">
                                            <UploadCloud size={24} className="text-gray-medium mb-2" />
                                            <p className="text-[13px] font-bold text-gray-darkest">Front of Card</p>
                                            <p className="text-[11px] text-gray-medium mt-1">Tap to upload image</p>
                                        </div>
                                        <div className="border-2 border-dashed border-gray-lighter rounded-[16px] bg-gray-lightest p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/50 transition-colors">
                                            <UploadCloud size={24} className="text-gray-medium mb-2" />
                                            <p className="text-[13px] font-bold text-gray-darkest">Back of Card</p>
                                            <p className="text-[11px] text-gray-medium mt-1">Tap to upload image</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 mt-2">
                                    <label className="flex items-start gap-4 cursor-pointer group">
                                        <div className="relative flex items-center justify-center mt-0.5">
                                            <input
                                                type="checkbox"
                                                className="peer sr-only"
                                                checked={formData.hasConsent}
                                                onChange={e => updateForm({ hasConsent: e.target.checked })}
                                            />
                                            <div className="w-6 h-6 rounded-[8px] border-2 border-gray-lighter peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center group-hover:border-primary/50">
                                                <Check size={14} className="text-white opacity-0 peer-checked:opacity-100" strokeWidth={3} />
                                            </div>
                                        </div>
                                        <p className="text-[13px] text-gray-medium leading-relaxed flex-1 select-none pt-0.5">
                                            I consent to Medify verifying my insurance benefits and eligibility prior to my appointment. I understand that verification is not a guarantee of coverage.
                                        </p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP: Doctor Selection */}
                    {activeStepId === "doctor" && (
                        <div className="space-y-8">
                            <div className="hidden lg:block space-y-2 mb-10">
                                <h2 className="text-gray-darkest m-0">Choose a Specialist</h2>
                                <p className="text-gray-muted text-[15px]">Select an available doctor for your consultation.</p>
                            </div>

                            {filteredDoctors.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {filteredDoctors.map(doc => (
                                        <button
                                            key={doc.id}
                                            onClick={() => updateForm({ doctorId: doc.id })}
                                            className={cn(
                                                "flex flex-col sm:flex-row items-center sm:items-start gap-5 p-5 rounded-[20px] border-2 transition-all group overflow-hidden relative text-left",
                                                formData.doctorId === doc.id
                                                    ? "bg-white border-primary shadow-md"
                                                    : "bg-white border-gray-lighter shadow-sm hover:border-primary/30"
                                            )}
                                        >
                                            <div className="w-20 h-20 rounded-full bg-gray-50 overflow-hidden relative shrink-0">
                                                <img src={doc.image} className="w-full h-full object-cover object-top" />
                                            </div>
                                            <div className="space-y-1.5 flex-1 pt-2 sm:pt-0">
                                                <p className="text-[11px] font-semibold text-primary uppercase tracking-wide">{doc.specialty}</p>
                                                <h4 className="text-[18px] font-bold text-gray-darkest leading-snug">{doc.name}</h4>

                                                {/* If insurance flow, show badge if accepted */}
                                                {formData.paymentType === 'insurance' && formData.insuranceProvider && doc.insurances?.includes(formData.insuranceProvider) && (
                                                    <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 bg-green-50 rounded-[6px] border border-green-100">
                                                        <CheckCircle2 size={12} className="text-green-600" />
                                                        <span className="text-[11px] font-medium text-green-700">In-Network</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Selection Indicator */}
                                            {formData.doctorId === doc.id && (
                                                <div className="absolute top-4 right-4 text-primary bg-primary/10 p-1.5 rounded-full">
                                                    <CheckCircle2 size={18} strokeWidth={2.5} />
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-8 rounded-[20px] bg-amber-50 border border-amber-200 text-center">
                                    <AlertCircle size={32} className="text-amber-500 mx-auto mb-4" />
                                    <h4 className="text-amber-900 mb-2">No In-Network Doctors Found</h4>
                                    <p className="text-[14px] text-amber-700 max-w-md mx-auto mb-6">
                                        We couldn't find a specialist matching your selected specialty and insurance provider.
                                    </p>
                                    <button
                                        onClick={() => prevStep()}
                                        className="px-6 py-2.5 bg-white text-amber-900 font-bold text-[13px] rounded-[10px] shadow-sm"
                                    >
                                        Go Back and Edit Filters
                                    </button>
                                </div>
                            )}

                            {formData.paymentType === 'insurance' && filteredDoctors.length > 0 && (
                                <div className="p-4 rounded-[12px] bg-blue-50/50 border border-blue-100 flex items-start gap-3 mt-4">
                                    <Info size={16} className="text-primary mt-0.5 shrink-0" />
                                    <p className="text-[13px] text-gray-medium leading-relaxed">
                                        Only showing doctors grouped within your selected <span className="font-bold">{formData.insuranceProvider}</span> network based on preliminary matching.
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* STEP: Date & Time */}
                    {activeStepId === "datetime" && (
                        <div className="space-y-10">
                            <div className="hidden lg:block space-y-2 mb-8">
                                <h2 className="text-gray-darkest m-0">Choose your time slot</h2>
                                <p className="text-gray-muted text-[15px]">Select a convenient date and time for your appointment.</p>
                            </div>

                            <div className="space-y-6">
                                <h5 className="text-[13px] font-bold text-gray-darkest">Select Date</h5>
                                <div className="flex gap-4 overflow-x-auto pb-4 pt-2 px-1 -mx-1 snap-x mask-linear-r">
                                    {["Monday, Mar 10", "Tuesday, Mar 11", "Wednesday, Mar 12", "Thursday, Mar 13", "Friday, Mar 14"].map(date => (
                                        <button
                                            key={date}
                                            onClick={() => updateForm({ date })}
                                            className={cn(
                                                "px-6 py-4 rounded-[20px] border-2 transition-all flex flex-col gap-1.5 shrink-0 text-left min-w-[140px] snap-start",
                                                formData.date === date
                                                    ? "bg-primary border-primary shadow-md shadow-primary/20 scale-105"
                                                    : "bg-white border-gray-lighter hover:border-primary/30"
                                            )}
                                        >
                                            <span className={cn("text-[11px] font-bold uppercase tracking-wider", formData.date === date ? "text-white/80" : "text-gray-light")}>
                                                {date.split(',')[0]}
                                            </span>
                                            <span className={cn("text-[16px] font-bold", formData.date === date ? "text-white" : "text-gray-darkest")}>
                                                {date.split(',')[1]}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h5 className="text-[13px] font-bold text-gray-darkest">Select Time</h5>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                                    {["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "03:45 PM", "05:00 PM"].map(time => (
                                        <button
                                            key={time}
                                            onClick={() => updateForm({ time })}
                                            className={cn(
                                                "py-3.5 rounded-[14px] text-center border-2 transition-all font-bold text-[14px]",
                                                formData.time === time
                                                    ? "bg-primary/10 border-primary text-primary"
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

                    {/* STEP: Patient Info */}
                    {activeStepId === "patient" && (
                        <div className="space-y-8">
                            <div className="hidden lg:block space-y-2 mb-8">
                                <h2 className="text-gray-darkest m-0">Patient Details</h2>
                                <p className="text-gray-muted text-[15px]">Almost done! Please fill in your contact information.</p>
                            </div>

                            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-gray-lighter shadow-sm">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                    <FormField label="Patient Full Name">
                                        <Input placeholder="John Doe" value={formData.name} onChange={e => updateForm({ name: e.target.value })} />
                                    </FormField>

                                    <FormField label="Phone Number">
                                        <Input placeholder="(555) 000-0000" type="tel" value={formData.phone} onChange={e => updateForm({ phone: e.target.value })} />
                                    </FormField>

                                    <div className="md:col-span-2">
                                        <FormField label="Email Address">
                                            <Input placeholder="john@example.com" type="email" value={formData.email} onChange={e => updateForm({ email: e.target.value })} />
                                        </FormField>
                                    </div>

                                    <div className="md:col-span-2 mt-2">
                                        <FormField label="Reason for Visit / Notes (Optional)">
                                            <textarea
                                                className="w-full px-5 py-4 rounded-[14px] bg-white border border-gray-light/40 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 font-medium text-[15px] text-gray-darkest resize-none h-[120px] transition-all"
                                                placeholder="Briefly describe your symptoms or reason for the appointment..."
                                                value={formData.notes}
                                                onChange={e => updateForm({ notes: e.target.value })}
                                            />
                                        </FormField>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP: Review & Confirm */}
                    {activeStepId === "review" && (
                        <div className="space-y-8">
                            <div className="hidden lg:block space-y-2 mb-8">
                                <h2 className="text-gray-darkest m-0">Review your appointment</h2>
                                <p className="text-gray-muted text-[15px]">Please double-check the details below before confirming.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                                {/* Location & Time Card */}
                                <div className="bg-white p-6 rounded-[24px] border border-gray-lighter shadow-sm flex flex-col items-center text-center space-y-6 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] -mr-10 -mt-10" />

                                    <div className="w-20 h-20 rounded-full bg-brand-bg flex items-center justify-center text-primary mb-2 shadow-sm border border-primary/10 relative z-10">
                                        <Calendar size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-gray-darkest font-black leading-tight m-0 relative z-10">{formData.date} <br /> {formData.time}</h3>

                                    <div className="w-full pt-6 border-t border-gray-lighter/60 flex items-start gap-4 text-left relative z-10">
                                        <MapPin size={20} className="text-gray-medium shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-bold text-gray-darkest mb-1">Medify Main Clinic</p>
                                            <p className="text-[13px] text-gray-muted">123 Healthcare Blvd, Ste 400<br />New York, NY 10001</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Summary Grid */}
                                <div className="space-y-6">
                                    <div className="bg-white p-6 rounded-[24px] border border-gray-lighter shadow-sm space-y-5">
                                        <div>
                                            <p className="text-[12px] font-semibold text-gray-medium uppercase tracking-wider mb-1.5">Consultation With</p>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gray-50 overflow-hidden relative shrink-0">
                                                    <img src={selectedDoctor?.image} className="w-full h-full object-cover object-top" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-darkest">{selectedDoctor?.name}</p>
                                                    <p className="text-[13px] text-gray-muted">{formData.specialty}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-5 border-t border-gray-lighter">
                                            <p className="text-[12px] font-semibold text-gray-medium uppercase tracking-wider mb-2">Patient Details</p>
                                            <p className="font-bold text-[15px] text-gray-darkest mb-1">{formData.name}</p>
                                            <p className="text-[14px] text-gray-muted">Phone: {formData.phone}</p>
                                        </div>

                                        <div className="pt-5 border-t border-gray-lighter">
                                            <p className="text-[12px] font-semibold text-gray-medium uppercase tracking-wider mb-2">Payment Method</p>
                                            {formData.paymentType === 'insurance' ? (
                                                <div className="flex items-center gap-2">
                                                    <ShieldCheck size={16} className="text-primary" />
                                                    <span className="font-bold text-[15px] text-gray-darkest">Insurance: {formData.insuranceProvider}</span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2">
                                                    <Wallet size={16} className="text-gray-darkest" />
                                                    <span className="font-bold text-[15px] text-gray-darkest">Self-Pay (Direct pricing)</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {formData.paymentType === 'insurance' ? (
                                        <div className="p-4 rounded-[16px] bg-brand-surface border border-primary/10 flex items-start gap-3">
                                            <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                                            <p className="text-[12.5px] text-gray-dark leading-relaxed font-medium text-left">
                                                Your insurance details will be verified by our staff. You'll receive a confirmation email once eligibility is confirmed.
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="p-4 rounded-[16px] bg-gray-lightest border border-gray-lighter flex items-start gap-3">
                                            <Info className="text-gray-darkest mt-0.5 shrink-0" size={18} />
                                            <p className="text-[12.5px] text-gray-dark leading-relaxed font-medium text-left">
                                                A self-pay estimate will be provided at the time of your visit. Payment is expected at check-in.
                                            </p>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    )}

                </div>
            </div>

            {/* ── Fixed Bottom Actions ── */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-lighter py-4 md:py-5 px-4 z-40 lg:col-span-12 lg:relative lg:bg-transparent lg:border-none lg:p-0">
                <div className="lg:max-w-none max-w-lg mx-auto flex items-center justify-between lg:justify-end gap-4 lg:gap-8">

                    {currentStepIndex > 0 && (
                        <button
                            onClick={prevStep}
                            className="flex items-center gap-2 px-6 lg:px-8 py-3.5 text-[14px] font-bold text-gray-medium hover:text-gray-darkest hover:bg-gray-100 rounded-[12px] transition-all shrink-0"
                        >
                            <ChevronLeft size={18} strokeWidth={2.5} /> Back
                        </button>
                    )}

                    {activeStepId !== "review" ? (
                        <button
                            className={cn(
                                "flex-1 lg:flex-none btn-primary !h-[52px] !min-h-[52px] lg:px-12 flex items-center justify-center gap-2 text-[15px] shadow-md",
                                !canProceed() ? "opacity-50 cursor-not-allowed" : "hover:-translate-y-0.5"
                            )}
                            onClick={nextStep}
                            disabled={!canProceed()}
                        >
                            Continue <ChevronRight size={18} strokeWidth={2.5} />
                        </button>
                    ) : (
                        <button
                            className="flex-1 lg:flex-none btn-primary !h-[52px] !min-h-[52px] lg:px-16 text-[15px] shadow-md !bg-primary-dark hover:!bg-primary"
                            onClick={handleSubmit}
                        >
                            Confirm Appointment
                        </button>
                    )}
                </div>
            </div>

        </div>
    );
}
