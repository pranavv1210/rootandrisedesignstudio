import type { Metadata } from "next";
import { displayFont, bodyFont } from "@/lib/fonts";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Root & Rise Design Studio | Designing Beyond Structures",
  description: "Root & Rise creates spaces that people don't just occupy — they experience, remember, and return to. We design for Monday mornings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-sans bg-background text-foreground overflow-x-hidden w-full selection:bg-accent selection:text-background flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
