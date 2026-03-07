"use client";

import { use } from "react";
import { blogPosts } from "@/lib/data";
import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { Section } from "@/components/ui/Section";
import {
    Calendar, Clock, Bookmark, Share2,
    ChevronLeft, ArrowRight, Facebook, Twitter, Linkedin
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mockImages } from "@/lib/mockImages";

export default function BlogDetailPage({ params }) {
    const resolvedParams = use(params);
    const post = blogPosts.find(p => p.slug === resolvedParams.slug);

    if (!post) return notFound();

    return (
        <main className="bg-brand-bg min-h-screen">
            <HeaderNav />

            {/* ── Article Header ── */}
            <Section className="relative pb-0 pt-20 lg:pt-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={mockImages.pageHeroes.blog}
                        alt=""
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto space-y-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-xs font-black text-gray-dark hover:text-primary transition-colors uppercase tracking-widest group"
                    >
                        <ChevronLeft size={16} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="px-6 py-2.5 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20">
                                {post.category}
                            </span>
                            <div className="h-0.5 w-12 bg-gray-lighter" />
                            <div className="flex items-center gap-6 text-[11px] font-black text-gray-muted uppercase tracking-[0.2em]">
                                <span className="flex items-center gap-2"><Calendar size={14} className="text-primary" /> {post.date}</span>
                                <span className="flex items-center gap-2"><Clock size={14} className="text-primary" /> {post.readTime}</span>
                            </div>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-black text-gray-darkest tracking-tight leading-[0.95]">{post.title}</h1>
                    </div>
                </div>
            </Section>

            {/* ── Article Visual ── */}
            <Section className="py-12 lg:py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="relative aspect-[21/9] rounded-[40px] overflow-hidden shadow-3xl animate-in zoom-in duration-1000">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </Section>

            {/* ── Article Content ── */}
            <Section className="pb-16">
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative">

                    {/* Share Content Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="lg:sticky lg:top-40 flex lg:flex-col items-center gap-4">
                            <button className="w-12 h-12 rounded-full border-2 border-gray-lighter bg-white text-gray-muted flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                                <Share2 size={18} />
                            </button>
                            <button className="w-12 h-12 rounded-full border-2 border-gray-lighter bg-white text-gray-muted flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                                <Facebook size={18} />
                            </button>
                            <button className="w-12 h-12 rounded-full border-2 border-gray-lighter bg-white text-gray-muted flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                                <Twitter size={18} />
                            </button>
                            <button className="w-12 h-12 rounded-full border-2 border-gray-lighter bg-white text-gray-muted flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                                <Linkedin size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <article className="lg:col-span-11 space-y-12">
                        <div className="prose prose-2xl prose-brand max-w-none text-gray-darkest font-medium leading-relaxed space-y-10">
                            <p className="text-2xl font-bold leading-relaxed text-gray-dark">
                                {post.excerpt}
                            </p>
                            <p>{post.content}</p>

                            <div className="bg-brand-bg border-l-[12px] border-primary p-6 rounded-r-[40px] my-16 shadow-soft">
                                <p className="text-3xl font-black tracking-tight text-gray-darkest italic leading-snug">
                                    "Our mission is to democratize high-end medical knowledge and provide families with the tools they need to stay healthy, long-term."
                                </p>
                            </div>

                            <p>Modern clinical practices have evolved beyond just treatment. Now, predictive analytics and AI-driven monitoring systems allow us to catch vulnerabilities before they become active health problems.</p>

                            <h3 className="text-4xl font-black tracking-tight pt-8">Next-Gen Patient Monitoring</h3>
                            <p>We're seeing a shift toward decentralized care. Patients no longer need to wait weeks for a results panel. Many of these metrics are now available via wearable diagnostics and instant cloud-analysis systems.</p>
                        </div>

                        {/* Article Footer Flags */}
                        <div className="pt-20 border-t border-gray-lighter flex flex-wrap gap-3">
                            {["HealthTech", "Medicine", "Research", "Wellness"].map(tag => (
                                <span key={tag} className="px-6 py-3 rounded-full bg-white border border-gray-lighter text-[11px] font-black text-gray-muted uppercase tracking-widest hover:border-primary hover:text-primary transition-all cursor-pointer">
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Author/Share Bar */}
                        <div className="bg-gray-darkest p-6 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-8 text-white">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-primary text-xl font-black border border-white/10 shadow-float">
                                    M
                                </div>
                                <div>
                                    <h5 className="text-xl font-black tracking-tight">Medify Editorial Team</h5>
                                    <p className="text-sm font-medium text-white/50">{post.date}</p>
                                </div>
                            </div>
                            <button className="px-10 py-5 rounded-full bg-white text-gray-darkest text-xs font-black uppercase tracking-widest hover:bg-brand-surface transition-all flex items-center gap-3">
                                Share Article <Share2 size={16} />
                            </button>
                        </div>
                    </article>

                </div>
            </Section>

            {/* ── Related Reading ── */}
            <Section className="bg-white/50 py-16">
                <div className="container-custom space-y-16">
                    <div className="flex items-end justify-between">
                        <div className="space-y-4">
                            <p className="text-sm font-black text-primary uppercase tracking-[0.2em]">Next Exploration</p>
                            <h2 className="text-3xl font-black text-gray-darkest tracking-tight">Related Articles</h2>
                        </div>
                        <Link href="/blog" className="hidden md:flex items-center gap-4 text-xs font-black text-gray-darkest uppercase tracking-widest hover:text-primary transition-all">
                            View all posts <ArrowRight size={18} strokeWidth={3} className="text-primary" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.slice(0, 3).map((related, i) => (
                            <Link
                                href={`/blog/${related.slug}`}
                                key={related.id}
                                className="group space-y-6"
                            >
                                <div className="aspect-[4/3] rounded-[32px] overflow-hidden border-4 border-white shadow-soft relative transition-transform duration-700 group-hover:scale-[0.98]">
                                    <img src={related.image} alt={related.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <div className="space-y-4 px-4 text-center">
                                    <h4 className="text-2xl font-black text-gray-darkest tracking-tight leading-snug group-hover:text-primary transition-colors">{related.title}</h4>
                                    <p className="text-xs font-black text-brand-muted uppercase tracking-widest">{related.date} • {related.readTime}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
