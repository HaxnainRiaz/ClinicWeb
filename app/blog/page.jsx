"use client";

import { useState } from "react";
import { blogPosts } from "@/lib/data";
import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { PageHeroCompact } from "@/components/ui/PageHeroCompact";
import { mockImages } from "@/lib/mockImages";
import { Calendar, Clock, ArrowRight, ArrowUpRight, Search, Mail } from "lucide-react";
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
                subtitle="Explore our latest medical articles, health advice, and clinical updates written by our expert team of doctors."
                breadcrumb="Home / Clinical Insights"
                bgImage={mockImages.pageHeroes.blog}
            />

            <section className="section-pad pb-16 lg:pb-24">
                <div className="container-custom">

                    {/* ── Filters & Search ── */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
                        {/* Tabs */}
                        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveTab(cat)}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 border",
                                        activeTab === cat
                                            ? "bg-primary text-white border-primary shadow-sm"
                                            : "bg-white text-gray-medium border-gray-lighter hover:border-primary/30 hover:text-primary shadow-sm"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search Input */}
                        <div className="relative w-full lg:w-[320px] shrink-0 object-right">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-light" size={16} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-11 pr-4 py-2.5 rounded-[12px] bg-white border border-gray-lighter focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 text-[14px] text-gray-darkest transition-all shadow-sm placeholder:text-gray-light"
                            />
                        </div>
                    </div>

                    {/* ── Post Grid ── */}
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-16">
                            {filteredPosts.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.slug}`}
                                    className="group card !p-0 overflow-hidden hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-lighter">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-semibold text-primary shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-5 flex flex-col flex-1 gap-3 space-y-0 text-left">
                                        <div className="flex items-center gap-2 text-[11.5px] text-gray-muted">
                                            <span className="flex items-center gap-1.5"><Calendar size={13} /> {post.date}</span>
                                            <span className="w-1 h-1 rounded-full bg-gray-lighter" />
                                            <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readTime}</span>
                                        </div>
                                        <h4 className="text-gray-darkest leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h4>
                                        <p className="text-[13.5px] text-gray-muted leading-[1.65] line-clamp-2 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between pt-3 border-t border-gray-lighter mt-auto">
                                            <span className="text-[12.5px] font-semibold text-primary flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                                                Read Article <ArrowUpRight size={13} strokeWidth={2.5} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        /* Empty State */
                        <div className="py-20 text-center space-y-4 bg-white rounded-[24px] border border-gray-lighter shadow-sm">
                            <div className="w-16 h-16 rounded-full bg-brand-bg flex items-center justify-center text-primary mx-auto mb-2">
                                <Search size={24} />
                            </div>
                            <h3 className="text-gray-darkest">No articles found</h3>
                            <p className="text-[15px] text-gray-muted max-w-sm mx-auto">
                                We couldn't find any articles matching your search query. Try adjusting your filters.
                            </p>
                            <button
                                onClick={() => { setSearch(""); setActiveTab("All Posts"); }}
                                className="btn-secondary text-[13px] !px-5 !py-2.5 mt-4"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}

                </div>
            </section>

            {/* ── Newsletter Section ── */}
            <section className="section-pad bg-gray-darkest text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -mr-[250px] -mt-[250px]" />

                <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-5 max-w-lg">
                        <div className="w-12 h-12 rounded-[14px] bg-white/10 flex items-center justify-center text-white mb-2">
                            <Mail size={22} strokeWidth={2} />
                        </div>
                        <h2 className="text-white">Stay informed on your health</h2>
                        <p className="text-[16px] text-white/70 leading-[1.7]">
                            Subscribe to receive the latest health tips, clinical updates, and evidence-based wellness guidance directly in your inbox.
                        </p>
                    </div>

                    <div className="card bg-white/5 border border-white/10 backdrop-blur-md p-6 lg:p-8 rounded-[24px]">
                        <h4 className="text-white mb-6">Join our newsletter</h4>
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                required
                                type="email"
                                placeholder="Email address"
                                className="flex-1 bg-white px-5 py-3.5 rounded-[12px] text-[14px] text-gray-darkest focus:outline-none focus:ring-4 focus:ring-primary/20 placeholder:text-gray-light font-medium"
                            />
                            <button className="btn-primary shrink-0 !min-h-[48px] !px-8 text-[14px]">
                                Subscribe
                            </button>
                        </form>
                        <p className="text-[12px] text-white/40 mt-4 text-center sm:text-left">
                            We respect your privacy. No spam, just valuable insights.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
