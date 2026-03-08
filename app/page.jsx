import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { HeroSplit } from "@/components/sections/HeroSplit";
import { StatsStrip, InsightAbout } from "@/components/sections/AboutSections";
import { ServicesGrid, DoctorsPreview, MainSections, SupportSplit } from "@/components/sections/MainSections";
import { PartnersRow, BlogPreviewGrid } from "@/components/sections/ExtraSections";
import { InsurancePromo } from "@/components/sections/InsurancePromo";

export const metadata = {
  title: "Medify Clinic | Expert Medical Care for You and Your Family",
  description:
    "Book appointments with experienced specialists, access personalized care, and get the support you need — with a modern, patient-first clinic experience.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeaderNav />

      <article>
        {/* 1. Hero */}
        <HeroSplit />

        {/* 2. Healthcare stats */}
        <StatsStrip />

        {/* 3. Trust / certifications strip */}
        <PartnersRow />

        {/* 4. About section */}
        <InsightAbout />

        {/* 5. Services / Specialties */}
        <ServicesGrid />

        {/* 6. Doctors preview */}
        <DoctorsPreview />

        {/* 7. Newsletter + facility feature */}
        <MainSections />

        {/* Insurance Promo block */}
        <InsurancePromo />

        {/* 8. Specialist support split */}
        <SupportSplit />

        {/* 9. Blog articles */}
        <BlogPreviewGrid />
      </article>

      <Footer />
    </main>
  );
}
