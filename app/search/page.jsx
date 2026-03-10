import { Suspense } from "react";
import SearchResultsClient from "./SearchResultsClient";
import { Loader2 } from "lucide-react";

export const dynamic = "force-dynamic";

export default function SearchResultsPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-brand-bg flex items-center justify-center">
                <Loader2 className="animate-spin text-primary" size={64} strokeWidth={1.5} />
            </div>
        }>
            <SearchResultsClient />
        </Suspense>
    );
}

