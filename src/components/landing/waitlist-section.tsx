"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import * as Label from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const problems = [
  {
    id: "time",
    label: "We bleed time on tie-outs, spreadsheets, and chasing attachments.",
  },
  {
    id: "control",
    label: "Sign-off is unclear, so the same reconciliations get reopened.",
  },
  {
    id: "fragmented",
    label: "Our stack is fragmented; I want one narrative from GL to proof.",
  },
] as const;

export function WaitlistSection() {
  const [email, setEmail] = React.useState("");
  const [problem, setProblem] = React.useState<string>("");
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section
      id="waitlist"
      className="scroll-mt-28 border-t border-white/[0.06] bg-[#0c0f14] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#d4a853]/90">
            Early access
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#f4f1ea] md:text-4xl">
            Join The Waitlist
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-[#a8aebc]">
            We onboard in small cohorts so implementation stays hands-on. Leave your work email and tell us
            which pain sounds most familiar. We will reply with a calendar link, not a nurture drip.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.05 }}
          onSubmit={handleSubmit}
          className="mt-14 space-y-10"
        >
          <div className="space-y-3">
            <Label.Root htmlFor="waitlist-email" className="text-sm font-medium text-[#e4e4e8]">
              Work email
            </Label.Root>
            <div className="relative">
              <Mail
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7288]"
                aria-hidden
              />
              <input
                id="waitlist-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/[0.1] bg-[#12161f] py-3.5 pl-11 pr-4 text-sm text-[#f4f1ea] placeholder:text-[#5c6578] outline-none transition focus:border-[#d4a853]/50 focus:ring-1 focus:ring-[#d4a853]/30"
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium text-[#e4e4e8]">What best describes your problem?</p>
            <ToggleGroup.Root
              type="single"
              value={problem}
              onValueChange={(v) => setProblem(v)}
              className="flex flex-col gap-3"
              aria-label="Primary problem"
            >
              {problems.map((p) => (
                <ToggleGroup.Item
                  key={p.id}
                  value={p.id}
                  className="group rounded-xl border border-white/[0.08] bg-[#12161f] px-4 py-4 text-left text-sm leading-relaxed text-[#a8aebc] outline-none transition data-[state=on]:border-[#d4a853]/45 data-[state=on]:bg-[#1a1f2c] data-[state=on]:text-[#f4f1ea] hover:border-white/[0.14] focus-visible:ring-2 focus-visible:ring-[#d4a853]/40"
                >
                  <span className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full border border-[#5c6578] bg-transparent transition group-data-[state=on]:border-[#d4a853] group-data-[state=on]:bg-[#d4a853]" />
                    {p.label}
                  </span>
                </ToggleGroup.Item>
              ))}
            </ToggleGroup.Root>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#d4a853] text-[#141822] hover:bg-[#e0b55e] md:w-auto md:min-w-[200px]"
          >
            Join The Waitlist
          </Button>

          {submitted ? (
            <p className="text-center text-sm text-[#d4a853]" role="status">
              Thanks. We will be in touch within two business days.
            </p>
          ) : (
            <p className="text-center text-xs text-[#6b7288]">
              No spam. Unsubscribe any time. We use your selection to route you to the right specialist.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
