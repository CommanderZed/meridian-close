import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meridianclose.app"),
  title: "Meridian Close | Continuous close without the chaos",
  description:
    "One workspace for reconciliations, controls, and sign-off. Built for finance teams who outgrew the spreadsheet.",
  openGraph: {
    title: "Meridian Close",
    description: "Your close, without the chaos.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meridian Close",
    description: "Your close, without the chaos.",
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
