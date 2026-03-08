"use client";

import Link from "next/link";
import { mockImages } from "@/lib/mockImages";
import { blogPosts } from "@/lib/data";
import { ArrowRight, ArrowUpRight, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";

export function PartnersRow() {
    // We show a simple "trusted by" strip instead of the scrolling partner images
    // This avoids the unverified logo problem while keeping a visual trust element
    const certifications = [
        "HIPAA Compliant",
        "ISO 9001 Certified",
        "JCI Accredited Facility",
        "Board-Certified Physicians",
        "Patient Privacy Protected",
        "24/7 Clinical Support",
    ];

    return (
        <div className="bg-white py-6 border-y border-gray-lighter overflow-hidden relative">
            <div className="flex animate-slide items-center w-max select-none gap-0" aria-hidden="true">
                {[...certifications, ...certifications, ...certifications, ...certifications].map((item, i) => (
                    <div key={i} className="flex-shrink-0 flex items-center px-8 gap-2.5 border-r border-gray-lighter last:border-r-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-[12px] font-semibold text-gray-medium uppercase tracking-widest whitespace-nowrap">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function BlogPreviewGrid() {
    return (
        <section className="section-pad bg-gray-lightest">
            <div className="container-custom">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
                    <div className="space-y-4 max-w-lg">
                        <div className="section-eyebrow">
                            <Newspaper size={12} strokeWidth={2.5} />
                            Clinical Insights
                        </div>
                        <h2 className="text-gray-darkest">
                            Explore our latest clinical insights
                        </h2>
                        <p className="text-[16px] text-gray-muted leading-[1.7]">
                            Discover the latest health news and clinical insights from our team of specialists.
                        </p>
                    </div>
                    <Link href="/blog" className="btn-secondary text-[14px] !px-5 !py-2.5 !min-h-[44px] !rounded-[12px] shrink-0">
                        All Articles <ArrowRight size={15} strokeWidth={2} />
                    </Link>
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {blogPosts.slice(0, 3).map((post, i) => (
                        <Link
                            href={`/blog/${post.slug}`}
                            key={i}
                            className={cn(
                                "group card !p-0 overflow-hidden hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col",
                                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
                            )}
                        >
                            {/* Image */}
                            <div className="relative aspect-[16/9] overflow-hidden rounded-t-[18px] bg-gray-lighter">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Category badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-semibold text-primary shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1 gap-3">
                                <div className="flex items-center gap-2 text-[11.5px] text-gray-muted">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-lighter" />
                                    <span>{post.readTime}</span>
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
            </div>
        </section>
    );
}
