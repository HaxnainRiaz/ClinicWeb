"use client";

import Link from "next/link";
import { mockImages } from "@/lib/mockImages";
import { blogPosts } from "@/lib/data";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export function PartnersRow() {
    // Duplicate array multiple times for smooth infinite scroll
    const arr = [...mockImages.partners, ...mockImages.partners, ...mockImages.partners, ...mockImages.partners];

    return (
        <div className="bg-brand-bg py-6 md:py-10 border-y border-white/40 shadow-sm relative z-10 overflow-hidden">
            <div className="flex animate-slide items-stretch w-max select-none pointer-events-none">
                {arr.map((src, i) => (
                    <div key={i} className="flex-shrink-0 w-[180px] h-[120px] md:w-[320px] md:h-[200px] relative border-r-2 border-white/10 group bg-white/50">
                        <img src={src} alt="Partner Logo" className="w-full h-full object-contain p-8 group-hover:scale-110 transition-all duration-700" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export function BlogPreviewGrid() {
    return (
        <section className="bg-brand-bg py-12 md:py-16">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20 px-4">
                    <div className="space-y-6 flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-soft text-[10px] font-black text-primary uppercase tracking-[0.2em] border border-gray-lighter">
                            Latest Articles <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        </div>
                        <h2 className="text-5xl lg:text-6xl font-black text-gray-darkest leading-tight tracking-tight max-w-2xl">
                            Feel free to explore our clinical insights
                        </h2>
                    </div>
                    <div className="flex flex-col gap-6 items-start lg:items-end">
                        <p className="text-[11px] font-bold text-gray-dark uppercase tracking-widest leading-relaxed max-w-[280px] pt-4 border-l-2 border-primary/20 pl-8">
                            Join our community and explore professional medical advice for a healthier daily life.
                        </p>
                        <Link href="/blog" className="flex items-center gap-3 text-xs font-black text-gray-darkest uppercase tracking-widest hover:text-primary transition-all group">
                            Explore all posts <ArrowRight size={18} strokeWidth={3} className="text-primary group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {blogPosts.slice(0, 3).map((post, i) => (
                        <Link href={`/blog/${post.slug}`} key={i} className="group relative aspect-[4/5] rounded-[40px] overflow-hidden border-4 border-white shadow-soft bg-brand-surface transform transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1 active:scale-95">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                            {/* Author Badge */}
                            <div className="absolute top-8 left-8">
                                <span className="px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md text-[9px] font-black text-primary uppercase tracking-widest shadow-float border border-white/50">
                                    {post.category}
                                </span>
                            </div>

                            {/* Glass overlay card */}
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-white/90 backdrop-blur-xl rounded-[24px] p-6 shadow-3xl border border-white/50 space-y-4">
                                    <div className="space-y-3 text-center">
                                        <h4 className="text-2xl font-black text-gray-darkest tracking-tight leading-snug">
                                            {post.title}
                                        </h4>
                                        <p className="text-[10px] font-black text-gray-dark uppercase tracking-[0.2em] opacity-60">
                                            {post.date} • {post.readTime}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-center gap-4 pt-2 border-t border-gray-lighter">
                                        <span className="text-[11px] font-black text-primary uppercase tracking-widest">
                                            Read Full Article
                                        </span>
                                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/20 transition-transform group-hover:rotate-45">
                                            <ArrowUpRight size={18} strokeWidth={3} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
