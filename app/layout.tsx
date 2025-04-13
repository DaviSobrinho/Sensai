import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import { Toaster } from "sonner";

const inter = Inter({
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Sensai - AI Career Coach",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider appearance={{
            baseTheme: dark
        }}>
            <html lang="en" suppressHydrationWarning>
                <body
                    className={`${inter.className}`}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Header/>

                        <main className="min-h-screen pt-16">
                            {children}
                        </main>

                        <Toaster richColors/>
                        <footer className="bg-muted/50 py-12">
                            <div className="container mx-auto px-4 text-center text-gray-200">
                            </div>
                        </footer>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
