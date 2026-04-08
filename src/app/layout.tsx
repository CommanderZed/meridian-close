import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const ogImageAlt =
  "Meridian Close: continuous close without the chaos";

/** Canonical production host when not running on Vercel (no VERCEL_URL). */
const PRIMARY_VERCEL_ORIGIN = "https://meridian-close.vercel.app";

function siteOrigin(): string {
  const custom = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (custom) return custom;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  if (process.env.NODE_ENV === "production") return PRIMARY_VERCEL_ORIGIN;
  return "http://localhost:3000";
}

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: "Meridian Close | Continuous close without the chaos",
  description:
    "One workspace for reconciliations, controls, and sign-off. Built for finance teams who outgrew the spreadsheet.",
  openGraph: {
    title: "Meridian Close",
    description: "Your close, without the chaos.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: ogImageAlt,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meridian Close",
    description: "Your close, without the chaos.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: ogImageAlt,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden bg-[#0c0f14] text-[#f4f1ea]">
        {children}
      </body>
    </html>
  );
}
