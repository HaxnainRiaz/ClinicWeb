"use client";

import { useState, useMemo } from "react";
import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { PageHeroCompact } from "@/components/ui/PageHeroCompact";
import { Search, MapPin, CheckCircle2, Star, ArrowUpRight } from "lucide-react";
import { doctors, specialties, insuranceProviders } from "@/lib/data";
import { mockImages } from "@/lib/mockImages";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function DoctorsPage() {
    const [search, setSearch] = useState("");
    const [selectedSpecialty, setSelectedSpecialty] = useState("All");
    const [selectedInsurance, setSelectedInsurance] = useState("All");
    const [selectedLocation, setSelectedLocation] = useState("All");

    // Mock locations for the filter
    const locations = ["Main Clinic", "Downtown Center", "Westside Hospital"];

    const filteredDoctors = useMemo(() => {
        return doctors.filter(doc => {
            const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase()) ||
                doc.specialty.toLowerCase().includes(search.toLowerCase());
            const matchesSpecialty = selectedSpecialty === "All" || doc.specialty === selectedSpecialty;
            const matchesInsurance = selectedInsurance === "All" || (doc.insurances && doc.insurances.includes(selectedInsurance));
            // Assuming all doctors are at all locations for this mock
            const matchesLocation = selectedLocation === "All" || true;

            return matchesSearch && matchesSpecialty && matchesInsurance && matchesLocation;
        });
    }, [search, selectedSpecialty, selectedInsurance, selectedLocation]);

    return (
        <main className="bg-brand-bg min-h-screen pt-[76px]">
            <HeaderNav />

            <PageHeroCompact
                title="Our Medical Specialists"
                subtitle="Find and book appointments with our experienced, board-certified doctors."
                breadcrumb="Home / Doctors"
                bgImage={mockImages.pageHeroes.doctors}
            />

            <section className="section-pad pb-16 lg:pb-24">
                <div className="container-custom">

                    {/* ── Interactive Filter Bar ── */}
                    <div className="bg-white p-5 md:p-6 rounded-[24px] shadow-sm border border-gray-lighter mb-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Search */}
                            <div className="relative w-full">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-light" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search by name..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full h-[52px] pl-11 pr-4 rounded-[14px] bg-gray-lightest border border-transparent focus:bg-white focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 text-[14px] text-gray-darkest transition-all placeholder:text-gray-light"
                                />
                            </div>

                            {/* Specialty Filter */}
                            <div className="relative w-full">
                                <select
                                    value={selectedSpecialty}
                                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                                    className="w-full h-[52px] px-4 rounded-[14px] bg-gray-lightest border border-transparent focus:bg-white focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 text-[14px] text-gray-darkest transition-all appearance-none cursor-pointer"
                                    aria-label="Filter by Specialty"
                                >
                                    <option value="All">All Specialties</option>
                                    {specialties.map(spec => (
                                        <option key={spec} value={spec}>{spec}</option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-light">
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            {/* Location Filter */}
                            <div className="relative w-full">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-light" size={18} />
                                <select
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                    className="w-full h-[52px] pl-11 pr-4 rounded-[14px] bg-gray-lightest border border-transparent focus:bg-white focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 text-[14px] text-gray-darkest transition-all appearance-none cursor-pointer"
                                    aria-label="Filter by Location"
                                >
                                    <option value="All">All Locations</option>
                                    {locations.map(loc => (
                                        <option key={loc} value={loc}>{loc}</option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-light">
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            {/* Insurance Filter */}
                            <div className="relative w-full">
                                <select
                                    value={selectedInsurance}
                                    onChange={(e) => setSelectedInsurance(e.target.value)}
                                    className="w-full h-[52px] px-4 rounded-[14px] bg-primary/5 border border-primary/20 focus:bg-white focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 text-[14px] font-medium text-primary-dark transition-all appearance-none cursor-pointer"
                                    aria-label="Filter by Insurance"
                                >
                                    <option value="All">All Insurances Accepted</option>
                                    {insuranceProviders.map(provider => (
                                        <option key={provider} value={provider}>{provider}</option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Results Grid ── */}
                    {filteredDoctors.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredDoctors.map((doc, i) => (
                                <Link href={`/doctors/${doc.slug}`} key={i} className="group flex flex-col h-full bg-white rounded-[20px] shadow-sm hover:shadow-hover border border-gray-lighter hover:border-primary/20 transition-all duration-300 overflow-hidden">
                                    {/* Doctor Image */}
                                    <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
                                        <img
                                            src={doc.image}
                                            alt={doc.name}
                                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        />

                                        {/* Rating badge */}
                                        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm">
                                            <Star size={11} className="fill-amber-400 text-amber-400" />
                                            <span className="text-[11px] font-bold text-gray-darkest">{doc.rating}</span>
                                        </div>
                                    </div>

                                    {/* Doctor Info */}
                                    <div className="p-5 flex flex-col flex-1">
                                        <div className="flex-1">
                                            <p className="text-[11.5px] font-semibold text-primary uppercase tracking-wide mb-1">{doc.specialty}</p>
                                            <h4 className="text-[18px] font-bold text-gray-darkest group-hover:text-primary transition-colors leading-snug mb-1.5">{doc.name}</h4>

                                            <div className="flex items-center gap-2 text-[13px] text-gray-muted mb-4">
                                                <MapPin size={13} /> Main Clinic • {doc.experience}
                                            </div>

                                            {/* Insurance Badges */}
                                            {doc.insurances && doc.insurances.length > 0 && (
                                                <div className="mb-5">
                                                    <p className="text-[11px] font-semibold text-gray-light uppercase tracking-wide mb-2">Accepted Insurance</p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {doc.insurances.slice(0, 2).map((ins, idx) => (
                                                            <span key={idx} className="px-2.5 py-1 rounded-[6px] bg-green-50 text-green-700 text-[11px] font-medium border border-green-100 flex items-center gap-1">
                                                                <CheckCircle2 size={10} /> {ins}
                                                            </span>
                                                        ))}
                                                        {doc.insurances.length > 2 && (
                                                            <span className="px-2 py-1 rounded-[6px] bg-gray-lightest text-gray-medium text-[11px] font-medium border border-gray-lighter">
                                                                +{doc.insurances.length - 2} more
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Action Button */}
                                        <div className="pt-4 border-t border-gray-lighter mt-auto">
                                            <div className="w-full h-[44px] flex items-center justify-center gap-2 rounded-[12px] bg-brand-bg text-[13.5px] font-semibold text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                Book Appointment <ArrowUpRight size={15} strokeWidth={2.5} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        /* Empty State */
                        <div className="py-24 text-center space-y-4 bg-white rounded-[24px] border border-gray-lighter shadow-sm">
                            <div className="w-16 h-16 rounded-full bg-brand-bg flex items-center justify-center text-primary mx-auto mb-2">
                                <Search size={24} />
                            </div>
                            <h3 className="text-gray-darkest">No specialists found</h3>
                            <p className="text-[15px] text-gray-muted max-w-sm mx-auto">
                                We couldn't find any doctors matching your selected filters. Try broadening your search.
                            </p>
                            <button
                                onClick={() => { setSearch(""); setSelectedSpecialty("All"); setSelectedInsurance("All"); setSelectedLocation("All"); }}
                                className="btn-secondary text-[13px] !px-5 !py-2.5 mt-4"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}

                </div>
            </section>

            <Footer />
        </main>
    );
}
