"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { TrendingDown, Users } from "lucide-react";

const barSets = [
  { label: "Hours on manual tie-out", before: 88, after: 34, unit: "hrs / close" },
  { label: "Exception ping-pong threads", before: 62, after: 21, unit: "tickets" },
  { label: "Reviewer turnaround", before: 100, after: 52, unit: "indexed" },
];

function AnimatedBar({
  value,
  max,
  delay,
  tone,
}: {
  value: number;
  max: number;
  delay: number;
  tone: "before" | "after";
}) {
  const spring = useSpring(0, { stiffness: 90, damping: 22 });
  const width = useTransform(spring, (v) => `${(v / max) * 100}%`);

  useEffect(() => {
    const t = setTimeout(() => spring.set(value), delay);
    return () => clearTimeout(t);
  }, [spring, value, delay]);

  return (
    <motion.div
      className="h-2.5 w-full overflow-hidden rounded-full bg-[#1e2431]"
      initial={{ opacity: 0.4 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className={`h-full rounded-full ${
          tone === "before" ? "bg-[#5c6578]" : "bg-[#d4a853]"
        }`}
        style={{ width }}
      />
    </motion.div>
  );
}

export function ChartsSection() {
  return (
    <section className="border-t border-white/[0.06] bg-[#0c0f14] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#d4a853]/90">
              Proof, not promises
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#f4f1ea] md:text-4xl">
              Benchmarks from our design partners.
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-[#a8aebc]">
              These are directional results from a 90-day pilot with three mid-market controllers. Your
              mileage depends on chart of accounts complexity and how clean your source files are. We
              publish methodology so finance leaders can sanity-check the story.
            </p>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-[#8b92a4]">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#5c6578]" />
                Baseline (spreadsheet-led)
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#d4a853]" />
                With Meridian Close
              </span>
            </div>
          </motion.div>

          <div className="space-y-12">
            {barSets.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-2xl border border-white/[0.07] bg-[#12161f] p-8"
              >
                <p className="text-sm font-medium text-[#f4f1ea]">{row.label}</p>
                <p className="mt-1 text-xs text-[#6b7288]">{row.unit}</p>
                <div className="mt-6 space-y-4">
                  <div>
                    <div className="mb-2 flex justify-between text-xs text-[#8b92a4]">
                      <span>Before</span>
                      <span>{row.before}</span>
                    </div>
                    <AnimatedBar value={row.before} max={100} delay={200 + i * 120} tone="before" />
                  </div>
                  <div>
                    <div className="mb-2 flex justify-between text-xs text-[#d4a853]/90">
                      <span>After</span>
                      <span>{row.after}</span>
                    </div>
                    <AnimatedBar value={row.after} max={100} delay={450 + i * 120} tone="after" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-20 grid gap-8 md:grid-cols-2 md:gap-10"
        >
          <div className="rounded-2xl border border-white/[0.07] bg-[#12161f] p-8 md:p-10">
            <div className="flex items-center gap-3 text-[#f4f1ea]">
              <TrendingDown className="h-5 w-5 text-[#d4a853]" strokeWidth={1.75} />
              <span className="text-sm font-semibold">Cost of delay</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#a8aebc]">
              Every day past target close is borrowed from forecasting and board prep. Teams in the pilot
              reported reclaiming roughly two senior days per cycle for analysis instead of clerical follow
              up.
            </p>
            <svg viewBox="0 0 400 120" className="mt-8 w-full text-[#d4a853]" aria-hidden>
              <motion.path
                d="M 20 90 Q 100 20 200 55 T 380 35"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              <motion.path
                d="M 20 95 L 380 95"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </svg>
            <p className="mt-2 text-center text-xs text-[#6b7288]">
              Indexed cycle time (lower is better)
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-[#12161f] p-8 md:p-10">
            <div className="flex items-center gap-3 text-[#f4f1ea]">
              <Users className="h-5 w-5 text-[#d4a853]" strokeWidth={1.75} />
              <span className="text-sm font-semibold">Who buys</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#a8aebc]">
              Primary buyers are controllers and heads of accounting at companies with $15M to $250M in
              revenue who already run on a modern GL and feel the pain of "almost automated" close lists.
            </p>
            <div className="mt-10 space-y-5">
              {[
                { label: "Accounting & close", pct: 52 },
                { label: "Internal audit / SOX", pct: 28 },
                { label: "FP&A partnership", pct: 20 },
              ].map((row, idx) => (
                <div key={row.label}>
                  <div className="mb-2 flex justify-between text-xs text-[#a8aebc]">
                    <span>{row.label}</span>
                    <span>{row.pct}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-[#1e2431]">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#8b7355]/40 to-[#d4a853]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.15 + idx * 0.12, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
