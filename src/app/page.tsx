import { SiteHeader } from "@/components/landing/site-header";
import { HeroSection } from "@/components/landing/hero-section";
import { SolutionSection } from "@/components/landing/solution-section";
import { ChartsSection } from "@/components/landing/charts-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { WaitlistSection } from "@/components/landing/waitlist-section";
import { FaqSection } from "@/components/landing/faq-section";
import { SiteFooter } from "@/components/landing/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-[#0c0f14]">
      <SiteHeader />
      <HeroSection />
      <main className="flex flex-col">
        <SolutionSection />
        <ChartsSection />
        <PricingSection />
        <WaitlistSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  );
}
