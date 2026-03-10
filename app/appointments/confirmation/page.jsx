import { Suspense } from "react";
import ConfirmationContent from "./ConfirmationContent";
import { HeaderNav } from "@/components/sections/HeaderNav";
import { Footer } from "@/components/sections/Footer";
import { Section } from "@/components/ui/Section";

export const dynamic = "force-dynamic";

export default function AppointmentConfirmationPage() {
    return (
        <main className="bg-brand-bg min-h-screen flex flex-col">
            <HeaderNav />

            <Section className="flex-1 flex flex-col items-center justify-center py-16">
                <Suspense fallback={<div>Loading confirmation details...</div>}>
                    <ConfirmationContent />
                </Suspense>
            </Section>

            <Footer />
        </main>
    );
}


