import Link from "next/link";
import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { PillButton } from "@/components/ui/PillButton";
import { Section } from "@/components/ui/Section";
import { Search, Home, Stethoscope, FileText, HelpCircle, ArrowRight } from "lucide-react";

export default function NotFound() {
    return (
        <main className="bg-brand-bg min-h-screen flex flex-col">
            <HeaderNav />

            <Section className="flex-1 flex flex-col items-center justify-center py-16">
                <div className="max-w-4xl w-full text-center space-y-10">

                    {/* Visual 404 */}
                    <div className="relative inline-block">
                        <h1 className="text-[100px] lg:text-[180px] font-black text-primary/10 tracking-tight leading-none pointer-events-none">404</h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="space-y-4">
                                <h2 className="text-4xl lg:text-5xl font-black text-gray-darkest tracking-tight">Diagnosis: Page Not Found</h2>
                                <p className="text-xl font-medium text-gray-dark max-w-lg mx-auto leading-relaxed">
                                    The requested clinical resource or medical document could not be located on our secure clinical network.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Search */}
                    <div className="container-custom max-w-2xl mx-auto">
                        <form action="/search" className="bg-white p-2 rounded-full shadow-soft border border-gray-lighter focus-within:ring-8 focus-within:ring-primary/5 transition-all flex items-center group">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-focus-within:bg-primary group-focus-within:text-white transition-colors">
                                <Search size={20} />
                            </div>
                            <input
                                name="q"
                                type="text"
                                placeholder="Try searching doctors or services..."
                                className="flex-1 px-8 bg-transparent text-lg font-black text-gray-darkest focus:outline-none placeholder:text-gray-muted tracking-tight"
                            />
                            <button type="submit" className="h-12 px-8 rounded-full bg-gray-darkest text-white text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-primary/10">
                                Global Search
                            </button>
                        </form>
                    </div>

                    {/* Navigation Suggestions */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                        {[
                            { label: "Homepage", icon: Home, href: "/" },
                            { label: "Doctors", icon: Stethoscope, href: "/doctors" },
                            { label: "Our Blog", icon: FileText, href: "/blog" },
                            { label: "FAQ Center", icon: HelpCircle, href: "/faq" }
                        ].map(item => (
                            <Link href={item.href} key={item.label} className="group p-6 bg-white rounded-[32px] border border-gray-lighter hover:border-primary transition-all shadow-soft active:scale-95 duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-brand-bg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm mx-auto mb-6">
                                    <item.icon size={24} />
                                </div>
                                <div className="space-y-2 text-center">
                                    <h4 className="text-[13px] font-black text-gray-darkest uppercase tracking-widest group-hover:text-primary transition-colors">{item.label}</h4>
                                    <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-gray-muted uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                        Head over <ArrowRight size={14} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="pt-8">
                        <Link href="/">
                            <PillButton className="px-12 shadow-2xl shadow-primary/20 uppercase tracking-widest text-xs font-black">
                                Return to Medify Portal
                            </PillButton>
                        </Link>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
