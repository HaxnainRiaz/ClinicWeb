import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { PageHeroCompact } from "@/components/ui/PageHeroCompact";
import { Section, Card } from "@/components/ui/Section";
import { PillButton } from "@/components/ui/PillButton";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { mockImages } from "@/lib/mockImages";

export default function ContactPage() {
    const contactInfo = [
        { icon: MapPin, title: "Our Location", detail: "123 Medical Drive, New York, NY 10001" },
        { icon: Phone, title: "Phone Number", detail: "+1 (800) 123-4567" },
        { icon: Mail, title: "Email Address", detail: "info@medifyclinic.com" },
        { icon: Clock, title: "Working Hours", detail: "Mon - Sat: 8AM - 8PM" },
    ];

    return (
        <main>
            <HeaderNav />
            <PageHeroCompact
                title="Get In Touch"
                subtitle="Have questions or need to book an appointment? Reach out to our team."
                breadcrumb="Home / Contact"
                bgImage={mockImages.pageHeroes.contact}
            />

            <Section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <Card className="p-6 space-y-8 border border-gray-lighter">
                        <h2 className="text-3xl font-black text-gray-darkest">Send us a message</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <p className="text-xs font-black text-brand-muted uppercase tracking-widest pl-4">Full Name</p>
                                <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-pill bg-gray-lightest border-none focus:outline-none font-bold" />
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs font-black text-brand-muted uppercase tracking-widest pl-4">Email Address</p>
                                <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-pill bg-gray-lightest border-none focus:outline-none font-bold" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-xs font-black text-brand-muted uppercase tracking-widest pl-4">Subject</p>
                            <select className="w-full px-6 py-4 rounded-pill bg-gray-lightest border-none focus:outline-none font-bold appearance-none">
                                <option>General Inquiry</option>
                                <option>Appointment Booking</option>
                                <option>Lab Results</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <p className="text-xs font-black text-brand-muted uppercase tracking-widest pl-4">Message</p>
                            <textarea placeholder="Tell us how we can help..." rows={5} className="w-full px-6 py-6 rounded-[24px] bg-gray-lightest border-none focus:outline-none font-bold resize-none" />
                        </div>
                        <PillButton className="w-full py-5 text-lg">Send Message</PillButton>
                    </Card>

                    {/* Contact Info & Map Placeholder */}
                    <div className="space-y-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {contactInfo.map((item, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-black text-gray-darkest">{item.title}</h5>
                                        <p className="font-medium text-gray-dark leading-relaxed">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Map Placeholder */}
                        <div className="relative aspect-[16/10] rounded-[32px] bg-gray-lightest overflow-hidden border border-gray-lighter flex items-center justify-center">
                            <div className="text-center space-y-4">
                                <MapPin size={48} className="text-primary mx-auto opacity-20" />
                                <p className="text-gray-muted font-bold tracking-widest uppercase text-xs">interactive map placeholder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
