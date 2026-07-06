import type { Metadata } from "next";
import { Anton, Noto_Sans_Devanagari, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-body" });
const devanagari = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-devanagari" });

export const metadata: Metadata = {
  title: "JYA Prints — Wear Your Roots",
  description: "Nepali and Newari mythology, recoded as limited modern streetwear. JYA Prints Volume 01.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable} ${devanagari.variable}`}><div className="grain" aria-hidden="true" />{children}</body></html>;
}
