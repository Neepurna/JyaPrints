import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Jya Store — Wear Your Roots",
  description: "Nepali and Newari mythology, recoded as limited modern streetwear. Jya Store Volume 01.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={montserrat.variable}><div className="grain" aria-hidden="true" />{children}</body></html>;
}
