import { CircleDot } from "lucide-react";

type BrandMarkProps = {
  className?: string;
  size?: number;
};

/** Lucide CircleDot inside the same frame as app/icon.tsx for favicon parity. */
export function BrandMark({ className = "", size = 36 }: BrandMarkProps) {
  const iconSize = Math.round(size * 0.52);
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-lg border border-[#d4a853]/30 bg-[#141822] ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <CircleDot
        className="text-[#d4a853]"
        strokeWidth={1.75}
        style={{ width: iconSize, height: iconSize }}
      />
    </div>
  );
}
