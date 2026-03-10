import { Suspense } from "react";
import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { PageHeroCompact } from "@/components/ui/PageHeroCompact";
import { AppointmentFlow } from "@/components/sections/AppointmentFlow";
import { Section } from "@/components/ui/Section";
import { mockImages } from "@/lib/mockImages";

export const dynamic = "force-dynamic";

export default function AppointmentPage() {
    return (
        <main className="bg-brand-bg min-h-screen">
            <HeaderNav />
            <PageHeroCompact
                title="Book Appointment"
                subtitle="Complete the simple 4-step process below to schedule your visit with a specialist."
                breadcrumb="Home / Appointments"
                bgImage={mockImages.pageHeroes.appointments}
            />

            <Section className="pb-16 lg:pb-12">
                <Suspense fallback={<div>Loading booking flow...</div>}>
                    <AppointmentFlow />
                </Suspense>
            </Section>

            <Footer />
        </main>
    );
}

