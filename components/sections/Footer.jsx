import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, Heart, Phone, Mail, MapPin, Calendar } from "lucide-react";

const FOOTER_LINKS = {
    clinical: [
        { label: "Our Services", href: "/services" },
        { label: "Specialists", href: "/doctors" },
        { label: "Book Appointment", href: "/appointments" },
        { label: "Lab Results", href: "/login" },
        { label: "FAQ", href: "/faq" },
    ],
    company: [
        { label: "About Us", href: "/about" },
        { label: "Medical Blog", href: "/blog" },
        { label: "Careers", href: "/contact" },
        { label: "Contact Us", href: "/contact" },
    ],
};

const SOCIAL_LINKS = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-lighter">
            <div className="container-custom">

                {/* ── Main grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 py-14 lg:py-16">

                    {/* Brand column */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center gap-2.5 group w-fit">
                            <div className="w-10 h-10 rounded-[14px] bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20 group-hover:shadow-primary/35 transition-all">
                                <div className="w-4.5 h-4.5 rounded-full border-[2.5px] border-white flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                </div>
                            </div>
                            <div>
                                <p className="text-[19px] font-bold tracking-tight text-gray-darkest leading-none">Medify</p>
                                <p className="text-[9px] font-semibold text-primary uppercase tracking-[0.18em] leading-none mt-0.5">Specialist Clinic</p>
                            </div>
                        </Link>

                        <p className="text-[14.5px] text-gray-muted leading-[1.7] max-w-sm">
                            Delivering compassionate, expert healthcare to patients and families — with a modern, patient-first approach.
                        </p>

                        {/* Contact details */}
                        <div className="space-y-2.5">
                            <div className="flex items-center gap-2.5 text-[13.5px] text-gray-medium">
                                <Phone size={14} className="text-primary shrink-0" strokeWidth={2} />
                                <span>+1 (800) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-[13.5px] text-gray-medium">
                                <Mail size={14} className="text-primary shrink-0" strokeWidth={2} />
                                <span>hello@medifyclinic.com</span>
                            </div>
                            <div className="flex items-start gap-2.5 text-[13.5px] text-gray-medium">
                                <MapPin size={14} className="text-primary shrink-0 mt-0.5" strokeWidth={2} />
                                <span>123 Medical District, New York, NY 10001</span>
                            </div>
                        </div>

                        {/* Social links */}
                        <div className="flex items-center gap-2.5 pt-1">
                            {SOCIAL_LINKS.map(({ Icon, href, label }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 rounded-[10px] bg-gray-lightest flex items-center justify-center text-gray-muted hover:bg-primary hover:text-white transition-all duration-200 border border-gray-lighter hover:border-primary"
                                >
                                    <Icon size={15} strokeWidth={2} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Clinical links */}
                    <div className="lg:col-span-2 space-y-5">
                        <h5 className="text-[11px] font-semibold text-gray-darkest uppercase tracking-[0.2em] flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            Clinical
                        </h5>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.clinical.map(({ label, href }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-[13.5px] text-gray-muted hover:text-primary transition-colors font-medium flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-3 h-[1.5px] bg-primary transition-all duration-300 block" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company links */}
                    <div className="lg:col-span-2 space-y-5">
                        <h5 className="text-[11px] font-semibold text-gray-darkest uppercase tracking-[0.2em] flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            Company
                        </h5>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.company.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-[13.5px] text-gray-muted hover:text-primary transition-colors font-medium flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-3 h-[1.5px] bg-primary transition-all duration-300 block" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Card */}
                    <div className="lg:col-span-4">
                        <div className="bg-gray-darkest rounded-[20px] p-6 text-white h-full flex flex-col justify-between relative overflow-hidden min-h-[220px]">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/15 rounded-full blur-[60px] -mr-10 -mt-10" />
                            <div className="relative z-10 space-y-3 mb-6">
                                <div className="w-10 h-10 rounded-[12px] bg-white/10 flex items-center justify-center">
                                    <Calendar size={20} className="text-primary-light" strokeWidth={2} />
                                </div>
                                <h4 className="text-white leading-snug">Book Your Appointment Today</h4>
                                <p className="text-[13px] text-white/55 leading-[1.65]">
                                    Schedule a visit with one of our specialists and start your path to better health.
                                </p>
                            </div>
                            <Link
                                href="/appointments"
                                className="relative z-10 flex items-center justify-center gap-2 w-full py-3 bg-white text-gray-darkest text-[13px] font-semibold rounded-[12px] hover:bg-primary hover:text-white transition-all duration-200 shadow-md"
                            >
                                Book Appointment <ArrowRight size={14} strokeWidth={2.5} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── Trust Bar ── */}
                <div className="bg-gray-lightest rounded-[16px] px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 mb-8 border border-gray-lighter/60">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                        {["Clinical Grade Security", "HIPAA Compliant Data", "Patient Privacy Protected"].map(item => (
                            <div key={item} className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                </div>
                                <span className="text-[12px] font-medium text-gray-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                    <Link href="/contact" className="flex items-center gap-2 text-[12.5px] font-semibold text-primary hover:underline underline-offset-2 shrink-0">
                        Emergency Support <ArrowRight size={13} strokeWidth={2.5} />
                    </Link>
                </div>

                {/* ── Bottom bar ── */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-gray-lighter">
                    <p className="text-[12px] text-gray-muted font-medium">
                        © {new Date().getFullYear()} Medify Clinic. All rights reserved.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="/terms-and-conditions" className="text-[12px] text-gray-muted hover:text-primary transition-colors font-medium">
                            Terms of Service
                        </Link>
                        <Link href="/privacy-policy" className="text-[12px] text-gray-muted hover:text-primary transition-colors font-medium">
                            Privacy Policy
                        </Link>
                        <Link href="/faq" className="text-[12px] text-gray-muted hover:text-primary transition-colors font-medium">
                            Help Center
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
