import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  display: "swap",
});

function getMetadataBase() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.VERCEL_URL?.trim() ||
    "http://localhost:3000";

  const normalizedUrl = /^https?:\/\//i.test(configuredUrl)
    ? configuredUrl
    : `https://${configuredUrl}`;

  return new URL(normalizedUrl);
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: "Vhaniture | Interior Design & Custom Furniture Jakarta",
  description:
    "Vhaniture menghadirkan layanan interior design, interior contractor dan custom furniture untuk hunian dan ruang komersial.",
  openGraph: {
    title: "Vhaniture | Interior Design & Custom Furniture Jakarta",
    description:
      "Solusi interior design, interior contractor dan custom furniture untuk hunian dan ruang komersial.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
