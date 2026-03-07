import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { HeroSplit } from "@/components/sections/HeroSplit";
import { StatsStrip, InsightAbout } from "@/components/sections/AboutSections";
import { MainSections, SupportSplit } from "@/components/sections/MainSections";
import { PartnersRow, BlogPreviewGrid } from "@/components/sections/ExtraSections";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg selection:bg-primary/20">
      <HeaderNav />

      <article>
        <HeroSplit />

        <StatsStrip />

        <InsightAbout />

        <MainSections />

        <SupportSplit />

        <PartnersRow />

        <BlogPreviewGrid />
      </article>

      <Footer />
    </main>
  );
}
