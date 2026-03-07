"use client";

import { useState } from "react";
import { blogPosts } from "@/lib/data";
import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { PageHeroCompact } from "@/components/ui/PageHeroCompact";
import { Section } from "@/components/ui/Section";
import { mockImages } from "@/lib/mockImages";
import { PillButton } from "@/components/ui/PillButton";
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const categories = ["All Posts", "Clinical Updates", "Health Care", "Technology", "Wellness"];

export default function BlogPage() {
    const [search, setSearch] = useState("");
    const [activeTab, setActiveTab] = useState("All Posts");

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(search.toLowerCase());
        const matchesTab = activeTab === "All Posts" || post.category === activeTab;
        return matchesSearch && matchesTab;
    });

    return (
        <main className="bg-brand-bg min-h-screen">
            <HeaderNav />
            <PageHeroCompact
                title="Clinical Insights"
                subtitle="The latest medical research, health updates, and clinic news from the Medify expert team."
                breadcrumb="Home / Blog"
                bgImage={mockImages.pageHeroes.blog}
            />

            <Section className="pb-16 lg:pb-12">
                <div className="container-custom">

                    {/* ── Filters & Search ── */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
                        <div className="flex flex-wrap gap-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveTab(cat)}
                                    className={cn(
                                        "px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all",
                                        activeTab === cat
                                            ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105"
                                            : "bg-white border border-gray-lighter text-gray-muted hover:border-primary/40 hover:text-primary shadow-soft"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full lg:w-96 group">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-primary" size={18} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-14 pr-6 py-3 rounded-full bg-white border border-gray-lighter focus:border-primary focus:outline-none focus:ring-8 focus:ring-primary/5 font-bold text-sm text-gray-darkest transition-all shadow-soft"
                            />
                        </div>
                    </div>

                    {/* ── Post Grid ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {filteredPosts.map((post, i) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                className="group bg-white rounded-[40px] border border-gray-lighter overflow-hidden shadow-soft hover:shadow-2xl hover:border-primary/20 transition-all flex flex-col"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-1.5 rounded-full bg-primary/95 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest shadow-lg">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-1 space-y-4">
                                    <div className="flex items-center gap-4 text-[10px] font-black text-gray-muted uppercase tracking-widest">
                                        <span className="flex items-center gap-1.5"><Calendar size={12} className="text-primary" /> {post.date}</span>
                                        <span className="flex items-center gap-1.5"><Clock size={12} className="text-primary" /> {post.readTime}</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-darkest tracking-tight leading-[1.1] group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm font-medium text-gray-dark leading-relaxed line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="pt-4 mt-auto">
                                        <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                            Read Article <ArrowRight size={14} strokeWidth={3} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="py-32 text-center space-y-6">
                            <div className="w-20 h-20 rounded-full bg-brand-surface flex items-center justify-center text-primary mx-auto">
                                <Search size={32} />
                            </div>
                            <h3 className="text-3xl font-black text-gray-darkest tracking-tight">No articles found</h3>
                            <p className="text-lg font-medium text-gray-dark max-w-md mx-auto">
                                We couldn't find any articles matching your search query. Try adjusting your filters or keywords.
                            </p>
                            <PillButton onClick={() => { setSearch(""); setActiveTab("All Posts"); }} className="px-10">Clear all filters</PillButton>
                        </div>
                    )}

                </div>
            </Section>

            {/* ── Newsletter Section ── */}
            <Section className="py-16 bg-gray-darkest overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-1/4" />
                <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shadow-2xl backdrop-blur-xl border border-white/10">
                            <Tag size={28} />
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-[0.95]">
                            Get the clinical<br />
                            edge in your inbox.
                        </h2>
                        <p className="text-xl font-medium text-white/50 leading-relaxed max-w-xl">
                            Join 5,000+ medical professionals and patients receiving our weekly digest on HealthTech and clinical best practices.
                        </p>
                    </div>
                    <form className="flex flex-col sm:flex-row gap-4 p-2 bg-white/5 rounded-[40px] border border-white/10 backdrop-blur-md">
                        <input
                            required
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-transparent px-8 py-5 text-white focus:outline-none font-bold placeholder:text-white/30"
                        />
                        <button className="px-10 py-5 bg-white text-gray-darkest rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl shadow-black/20">
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
