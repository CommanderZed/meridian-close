"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileStack, Link2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-0 flex-1 flex-col justify-center px-6 pb-8 pt-4 sm:pb-10 sm:pt-6 md:pb-14 md:pt-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-10%,rgba(212,168,83,0.14),transparent)]" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
        <div className="max-w-xl space-y-7 lg:space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-xs font-medium uppercase tracking-[0.2em] text-[#d4a853]/90"
          >
            Continuous close
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-balance text-2xl font-semibold leading-[1.15] tracking-tight text-[#f4f1ea] sm:text-4xl md:text-[2.65rem] md:leading-[1.1]"
          >
            Your close, without the chaos.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-pretty text-base leading-relaxed text-[#a8aebc] md:text-lg md:leading-relaxed"
          >
            We connect your GL, bank files, and supporting workpapers so reconciliations, tick and tie,
            and reviewer sign-off live in one audit-ready thread. Less chasing, fewer restatement risks,
            and a close that finishes on a predictable rhythm.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <Button
              asChild
              className="bg-[#d4a853] text-[#141822] hover:bg-[#e0b55e]"
            >
              <a href="#waitlist" className="no-underline">
                Join Waitlist
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
              </a>
            </Button>
          </motion.div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.15 }}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
      aria-hidden
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#161b26] to-[#0f1218] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] md:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,168,83,0.08),transparent_50%)]" />

        <div className="relative flex h-full flex-col justify-center gap-6">
          <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-wider text-[#6b7288]">
            <span>Source lanes</span>
            <span className="flex items-center gap-1.5 text-[#d4a853]/90">
              <Link2 className="h-3.5 w-3.5" />
              Meridian thread
            </span>
          </div>

          <div className="relative flex min-h-[140px] items-center md:min-h-[160px]">
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#d4a853]/70 to-transparent" />
            <motion.div
              className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-[#d4a853]/25"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0.5 }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4a853] shadow-[0_0_24px_rgba(212,168,83,0.55)]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.35, type: "spring", stiffness: 260, damping: 18 }}
            />

            {(
              [
                { top: "12%", left: "8%", delay: 0.1, rotate: -6 },
                { top: "58%", left: "4%", delay: 0.2, rotate: 4 },
                { top: "18%", right: "6%", delay: 0.15, rotate: 5 },
                { top: "62%", right: "10%", delay: 0.25, rotate: -3 },
              ] as const
            ).map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18, rotate: card.rotate * 2 }}
                animate={{ opacity: 1, y: 0, rotate: card.rotate }}
                transition={{ delay: 0.2 + card.delay, duration: 0.5, ease: "easeOut" }}
                className="absolute flex items-center gap-2 rounded-lg border border-white/[0.07] bg-[#1a1f2c]/95 px-2.5 py-2 shadow-lg backdrop-blur-sm md:px-3 md:py-2.5"
                style={{
                  top: card.top,
                  ...("left" in card && card.left ? { left: card.left } : {}),
                  ...("right" in card && card.right ? { right: card.right } : {}),
                }}
              >
                <FileStack className="h-4 w-4 text-[#d4a853]/85" />
                <div className="h-1.5 w-10 rounded-full bg-[#2d3444] md:w-14" />
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-xs text-[#7c8494] md:text-sm"
          >
            Scattered evidence becomes one signed narrative.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
