"use client";

import { use } from "react";
import { blogPosts } from "@/lib/data";
import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import {
    Calendar, Clock, Share2,
    ChevronLeft, ArrowRight, Facebook, Twitter, Linkedin,
    ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mockImages } from "@/lib/mockImages";
import { cn } from "@/lib/utils";

export default function BlogDetailPage({ params }) {
    const resolvedParams = use(params);
    const post = blogPosts.find(p => p.slug === resolvedParams.slug);

    if (!post) return notFound();

    return (
        <main className="bg-white min-h-screen pt-[76px]">
            <HeaderNav />

            {/* ── Article Header ── */}
            <section className="bg-brand-bg pt-12 pb-16 md:pt-16 md:pb-24 border-b border-gray-lighter">
                <div className="container-custom max-w-4xl">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-gray-medium hover:text-primary transition-colors mb-8 group"
                    >
                        <ChevronLeft size={16} strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Clinical Insights
                    </Link>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 flex-wrap">
                            <span className="px-3 py-1.5 rounded-full bg-primary/10 text-[11.5px] font-semibold text-primary">
                                {post.category}
                            </span>
                            <div className="h-1 w-1 rounded-full bg-gray-lighter" />
                            <div className="flex items-center gap-4 text-[12.5px] font-medium text-gray-muted">
                                <span className="flex items-center gap-1.5"><Calendar size={14} className="text-gray-light" /> {post.date}</span>
                                <span className="flex items-center gap-1.5"><Clock size={14} className="text-gray-light" /> {post.readTime}</span>
                            </div>
                        </div>

                        <h1 className="text-gray-darkest leading-[1.1]">{post.title}</h1>
                    </div>
                </div>
            </section>

            {/* ── Article Visual ── */}
            <section className="container-custom max-w-5xl -mt-10 md:-mt-16 relative z-10 mb-12 md:mb-16">
                <div className="relative aspect-[21/9] md:aspect-[2.5/1] rounded-[24px] overflow-hidden shadow-card border border-gray-lighter bg-white">
                    <img
                        src={post.image || mockImages.facility}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* ── Article Content ── */}
            <section className="section-pad pt-0">
                <div className="container-custom max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

                    {/* Share Content Sidebar */}
                    <div className="hidden lg:block lg:col-span-1 border-r border-gray-lighter pr-6">
                        <div className="sticky top-32 flex flex-col items-center gap-4">
                            <span className="text-[10px] font-semibold text-gray-medium uppercase tracking-widest mb-2 rotated-text" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                                Share
                            </span>
                            {[
                                { icon: Facebook, label: "Facebook" },
                                { icon: Twitter, label: "Twitter" },
                                { icon: Linkedin, label: "LinkedIn" },
                                { icon: Share2, label: "Copy Link" }
                            ].map((social, i) => (
                                <button
                                    key={i}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-gray-lightest text-gray-muted flex flex-col items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
                                >
                                    <social.icon size={16} strokeWidth={2} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Body */}
                    <article className="lg:col-span-8 space-y-8">
                        {/* We use standard typography classes for the content instead of Tailwind Typography plugin
                            to ensure it exactly matches the custom Medify design system. */}

                        <p className="text-[18px] md:text-[20px] font-medium text-gray-darkest leading-[1.7]">
                            {post.excerpt}
                        </p>

                        <p className="text-[16px] text-gray-muted leading-[1.75]">
                            {post.content}
                        </p>

                        <div className="bg-brand-bg rounded-[20px] p-6 md:p-8 my-10 border-l-[6px] border-primary">
                            <h4 className="text-primary-dark font-medium leading-snug italic mb-4">
                                "Our commitment is to provide patient-tailored care supported by advanced diagnostics, ensuring you have the clarity and support needed for long-term health."
                            </h4>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                    M
                                </div>
                                <div>
                                    <p className="text-[13px] font-semibold text-gray-darkest">Medify Clinical Board</p>
                                    <p className="text-[12px] text-gray-muted">Chief of Medicine</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-[16px] text-gray-muted leading-[1.75]">
                            Modern clinical practices have evolved to focus heavily on preventive care. By utilizing predictive health monitoring and regular specialist checkups, we can catch vulnerabilities and address them before they become active health problems.
                        </p>

                        <h3 className="text-gray-darkest mt-12 mb-4">Advanced Patient Monitoring</h3>
                        <p className="text-[16px] text-gray-muted leading-[1.75]">
                            We are seeing a significant improvement in patient outcomes through continuous care. Our facility integrates the latest clinical technology so that patients no longer need to wait weeks for vital test results. Many metrics are now processed rapidly, ensuring immediate and accurate treatment pathways.
                        </p>

                        {/* Article Footer Tags */}
                        <div className="pt-10 mt-12 border-t border-gray-lighter flex flex-wrap gap-2.5">
                            {["Clinical Care", "Medicine", "Research", "Wellness"].map(tag => (
                                <span key={tag} className="px-4 py-1.5 bg-gray-lightest rounded-[8px] text-[12px] font-semibold text-gray-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Mobile Share (visible only on md and below) */}
                        <div className="lg:hidden pt-8 flex items-center gap-3">
                            <span className="text-[12px] font-semibold text-gray-medium mr-2">Share:</span>
                            {[Facebook, Twitter, Linkedin, Share2].map((Icon, i) => (
                                <button key={i} className="w-10 h-10 rounded-full bg-gray-lightest text-gray-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                    <Icon size={16} strokeWidth={2} />
                                </button>
                            ))}
                        </div>
                    </article>

                    {/* Right Rail CTA */}
                    <div className="lg:col-span-3 mt-12 lg:mt-0">
                        <div className="sticky top-32 card bg-gray-darkest text-white border-0 overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] -mr-10 -mt-10" />
                            <div className="relative z-10 space-y-4">
                                <h4 className="text-white">Need a clinical consultation?</h4>
                                <p className="text-[13.5px] text-white/60 leading-relaxed">
                                    Our specialists are here to discuss your symptoms and provide an evidence-based care plan.
                                </p>
                                <Link href="/appointments" className="flex items-center justify-center gap-2 w-full py-3 bg-white text-gray-darkest text-[13px] font-semibold rounded-[12px] hover:bg-primary hover:text-white transition-all shadow-md mt-4">
                                    Book Appointment <ArrowRight size={14} strokeWidth={2.5} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Related Reading ── */}
            <section className="section-pad bg-brand-bg border-t border-gray-lighter">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                        <div className="space-y-3">
                            <h3 className="text-gray-darkest">More Clinical Insights</h3>
                        </div>
                        <Link href="/blog" className="btn-secondary text-[13.5px] !px-5 !py-2.5 !min-h-[44px] !rounded-[12px]">
                            View All Articles <ArrowRight size={15} strokeWidth={2} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                        {blogPosts.slice(0, 3).map((related, i) => (
                            <Link
                                href={`/blog/${related.slug}`}
                                key={related.id}
                                className="group card !p-0 overflow-hidden hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
                            >
                                <div className="relative aspect-[16/9] overflow-hidden bg-gray-lighter">
                                    <img
                                        src={related.image}
                                        alt={related.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5 flex flex-col flex-1 gap-3">
                                    <div className="flex items-center gap-2 text-[11.5px] text-gray-muted">
                                        <span>{related.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-lighter" />
                                        <span>{related.readTime}</span>
                                    </div>
                                    <h4 className="text-gray-darkest leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                                        {related.title}
                                    </h4>
                                    <div className="flex items-center gap-1.5 text-[12.5px] font-semibold text-primary mt-auto pt-3">
                                        Read Article <ArrowUpRight size={13} strokeWidth={2.5} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
