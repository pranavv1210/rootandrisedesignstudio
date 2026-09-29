import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Shell from "@/components/Shell";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--display", weight: ["400", "500", "600"], style: ["normal", "italic"] });
const body = Manrope({ subsets: ["latin"], variable: "--body" });
export const metadata: Metadata = { title: { default: "Root & Rise Design Studio | Designing Beyond Structures", template: "%s | Root & Rise" }, description: "Root & Rise Design Studio creates thoughtful residential, lifestyle and workplace environments designed around people, purpose and experience.", metadataBase: new URL("https://rootandrisedesignstudio.vercel.app"), manifest: "/manifest.webmanifest", icons: { icon: "/brand/favicon.svg", apple: "/brand/app-icon.svg" }, openGraph: { title: "Root & Rise Design Studio", description: "Designing beyond structures. We design for Monday mornings.", type: "website" }, twitter: { card: "summary_large_image" } };
export const viewport: Viewport = { themeColor: "#171918", width: "device-width", initialScale: 1 };
export default function Layout({ children }: { children: React.ReactNode }) { return <html lang="en" className={`${display.variable} ${body.variable}`}><body><Shell>{children}</Shell></body></html>; }
