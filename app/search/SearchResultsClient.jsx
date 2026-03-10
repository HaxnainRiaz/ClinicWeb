"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { PageHeroCompact } from "@/components/ui/PageHeroCompact";
import { Section, Card } from "@/components/ui/Section";
import { PillButton } from "@/components/ui/PillButton";
import { Search, ArrowRight, Stethoscope, FileText, ChevronRight, Loader2 } from "lucide-react";
import { doctors, services, blogPosts } from "@/lib/data";
import { mockImages } from "@/lib/mockImages";
import Link from "next/link";

export default function SearchResultsClient() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState(query);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, [query]);

    const results = useMemo(() => {
        if (!query) return { doctors: [], services: [], blog: [] };

        const q = query.toLowerCase();

        return {
            doctors: doctors.filter(d => d.name.toLowerCase().includes(q) || d.specialty.toLowerCase().includes(q)),
            services: services.filter(s => s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q)),
            blog: blogPosts.filter(b => b.title.toLowerCase().includes(q) || b.category.toLowerCase().includes(q))
        };
    }, [query]);

    const totalCount = results.doctors.length + results.services.length + results.blog.length;

    return (
        <main className="bg-brand-bg min-h-screen">
            <HeaderNav />
            <PageHeroCompact
                title="Search Results"
                subtitle={query ? `Showing results for: "${query}"` : "Search our medical database"}
                breadcrumb="Home / Search"
                bgImage={mockImages.fallback}
            />

            <Section className="pb-16 lg:pb-12">

                {/* ── Search Input ── */}
                <div className="max-w-4xl mx-auto mb-12 animate-in slide-in-from-top duration-700">
                    <form action="/search" className="bg-white p-2 rounded-full shadow-soft border border-gray-lighter focus-within:ring-8 focus-within:ring-primary/5 transition-all flex items-center group relative">
                        <Search className="absolute ml-8 text-gray-muted group-focus-within:text-primary" size={24} />
                        <input
                            name="q"
                            type="text"
                            placeholder="Search everything..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-1 pl-16 pr-6 py-2 bg-transparent text-lg font-black text-gray-darkest focus:outline-none placeholder:text-gray-muted tracking-tight"
                        />
                        <button type="submit" className="h-14 px-10 rounded-full bg-gray-darkest text-white text-[11px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-primary/10">
                            Apply Search
                        </button>
                    </form>
                </div>

                {isLoading ? (
                    <div className="py-20 flex flex-col items-center justify-center space-y-8">
                        <Loader2 className="animate-spin text-primary" size={64} strokeWidth={1.5} />
                        <p className="text-xl font-black text-gray-dark uppercase tracking-widest">Scanning Databases...</p>
                    </div>
                ) : (
                    <div className="max-w-6xl mx-auto space-y-16 animate-in fade-in duration-500">

                        {/* ── Results Summary ── */}
                        <div className="flex items-center justify-between border-b-2 border-primary/10 pb-6">
                            <h2 className="text-4xl font-black text-gray-darkest tracking-tight">Found {totalCount} relevant matches</h2>
                        </div>

                        {/* ── Section: Doctors ── */}
                        {results.doctors.length > 0 && (
                            <div className="space-y-12 animate-in slide-in-from-bottom duration-700">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <Stethoscope size={28} />
                                    </div>
                                    <h3 className="text-3xl font-black text-gray-darkest tracking-tight">Medical Specialists ({results.doctors.length})</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {results.doctors.map(doc => (
                                        <Link href={`/doctors/${doc.slug}`} key={doc.id}>
                                            <Card className="group hover:bg-primary transition-all duration-700 flex items-center gap-6 p-4 rounded-[32px] border border-gray-lighter shadow-soft">
                                                <div className="w-20 h-20 rounded-3xl overflow-hidden bg-brand-bg transition-transform group-hover:scale-110">
                                                    <img src={doc.image} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-[9px] font-black text-primary uppercase tracking-[0.2em] group-hover:text-white/60 transition-colors">{doc.specialty}</p>
                                                    <h4 className="text-xl font-black text-gray-darkest group-hover:text-white transition-colors">{doc.name}</h4>
                                                    <div className="flex items-center gap-2 pt-2 text-[10px] font-bold text-gray-muted group-hover:text-white/70 transition-colors uppercase tracking-widest">
                                                        View Profile <ChevronRight size={14} />
                                                    </div>
                                                </div>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ── Section: Services ── */}
                        {results.services.length > 0 && (
                            <div className="space-y-12 animate-in slide-in-from-bottom duration-700">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <Stethoscope size={28} />
                                    </div>
                                    <h3 className="text-3xl font-black text-gray-darkest tracking-tight">Clinical Services ({results.services.length})</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {results.services.map(service => (
                                        <Link href={`/services/${service.slug}`} key={service.id}>
                                            <Card className="group hover:bg-gray-darkest transition-all duration-700 p-6 rounded-[32px] border border-gray-lighter shadow-soft space-y-6">
                                                <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                    <ArrowRight size={24} />
                                                </div>
                                                <div className="space-y-2">
                                                    <h4 className="text-2xl font-black text-gray-darkest group-hover:text-white transition-colors">{service.name}</h4>
                                                    <p className="text-sm font-medium text-gray-dark group-hover:text-white/60 transition-colors line-clamp-2">{service.overview}</p>
                                                </div>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ── Section: Blog ── */}
                        {results.blog.length > 0 && (
                            <div className="space-y-12 animate-in slide-in-from-bottom duration-700">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <FileText size={28} />
                                    </div>
                                    <h3 className="text-3xl font-black text-gray-darkest tracking-tight">Medical Insights ({results.blog.length})</h3>
                                </div>
                                <div className="space-y-4">
                                    {results.blog.map(post => (
                                        <Link href={`/blog/${post.slug}`} key={post.id} className="block group">
                                            <div className="p-4 rounded-[32px] bg-white border border-gray-lighter hover:border-primary transition-all flex flex-col md:flex-row items-center gap-8 shadow-soft">
                                                <div className="w-full md:w-32 h-24 rounded-2xl overflow-hidden shadow-sm">
                                                    <img src={post.image} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1 space-y-2">
                                                    <div className="flex items-center gap-4 text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                                                        {post.category} • {post.date}
                                                    </div>
                                                    <h4 className="text-2xl font-black text-gray-darkest group-hover:text-primary transition-colors">{post.title}</h4>
                                                </div>
                                                <PillButton variant="outline" className="px-10 h-14 uppercase tracking-widest text-[10px] font-black">
                                                    Read Article
                                                </PillButton>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ── Empty State ── */}
                        {totalCount === 0 && (
                            <div className="py-20 text-center space-y-10 animate-in zoom-in duration-500">
                                <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center text-gray-200 mx-auto shadow-3xl border border-gray-lighter relative">
                                    <Search size={80} strokeWidth={1} />
                                    <div className="absolute top-0 right-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 border-4 border-white">
                                        !
                                    </div>
                                </div>
                                <div className="space-y-4 max-w-xl mx-auto">
                                    <h3 className="text-5xl font-black text-gray-darkest tracking-tight">No results found for your search</h3>
                                    <p className="text-2xl font-medium text-gray-dark leading-relaxed">
                                        We couldn't find any professional medical profile or clinical service matching <b>"{query}"</b>.
                                    </p>
                                    <div className="pt-8">
                                        <Link href="/">
                                            <PillButton className="h-14 px-16 shadow-2xl shadow-primary/20 uppercase tracking-widest text-xs font-black">Return Home</PillButton>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                )}
            </Section>

            <Footer />
        </main>
    );
}
