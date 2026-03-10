"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
    useEffect(() => {
        console.error("Global Error Captured:", error);
    }, [error]);

    return (
        <html lang="en">
            <body className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
                <div className="max-w-md w-full text-center space-y-6">
                    <h1 className="text-4xl font-bold text-gray-900 tracking-tight">System Error</h1>
                    <p className="text-lg text-gray-600">
                        An unexpected clinical system error occurred. We apologize for the inconvenience.
                    </p>
                    <div className="pt-4">
                        <button
                            onClick={() => reset()}
                            className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all"
                        >
                            Attempt Recovery
                        </button>
                    </div>
                </div>
            </body>
        </html>
    );
}
