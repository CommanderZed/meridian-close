import { BrandMark } from "@/components/brand-mark";

export function SiteHeader() {
  return (
    <header className="shrink-0 border-b border-white/[0.06] bg-[#0c0f14]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-5 md:py-6">
        <div className="flex items-center gap-3">
          <BrandMark size={36} className="shrink-0" />
          <span className="text-lg font-semibold tracking-tight text-[#f4f1ea] md:text-xl">
            Meridian Close
          </span>
        </div>
      </div>
    </header>
  );
}
