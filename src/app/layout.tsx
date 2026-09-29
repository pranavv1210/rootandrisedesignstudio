import type { Metadata } from "next";
import { displayFont, bodyFont } from "@/lib/fonts";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import PresentationMode from "@/components/presentation/PresentationMode";

export const metadata: Metadata = {
  title: "Root & Rise Design Studio | Designing Beyond Structures",
  description: "Root & Rise creates thoughtful residential, lifestyle and workplace environments designed around people, purpose and experience.",
  metadataBase: new URL("https://rootandrisedesignstudio.vercel.app"),
  manifest: "/manifest.webmanifest",
  icons: { icon: "/brand/favicon.svg", apple: "/brand/apple-touch-icon.svg" },
  openGraph: { title: "Root & Rise Design Studio", description: "Designing beyond structures. We design for Monday mornings.", type: "website" },
  twitter: { card: "summary_large_image", title: "Root & Rise Design Studio", description: "Designing beyond structures." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}><body className="font-sans bg-background text-foreground overflow-x-hidden w-full selection:bg-accent selection:text-background flex flex-col min-h-screen"><Navigation /><PresentationMode /><main className="flex-grow w-full">{children}</main><Footer /></body></html>;
}
