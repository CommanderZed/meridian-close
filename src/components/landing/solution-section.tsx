"use client";

import { motion } from "framer-motion";
import { BookOpenCheck, Clock3, ShieldCheck } from "lucide-react";

const items = [
  {
    title: "Why teams stall",
    body: "Close work lives in inboxes, shared drives, and one-off tabs. When evidence moves, context gets lost and reviewers re-open the same questions every cycle.",
    icon: Clock3,
  },
  {
    title: "What we do differently",
    body: "Meridian Close is a single workspace where every reconciliation links to its source, policy, and approver. Status is visible, comments are threaded, and sign-off is explicit.",
    icon: BookOpenCheck,
  },
  {
    title: "How we earn trust",
    body: "You pay for seats and connected entities, not surprise ingestion fees. Implementation is guided, exports are open, and permissions mirror how you already segregate duties.",
    icon: ShieldCheck,
  },
];

export function SolutionSection() {
  return (
    <section className="border-t border-white/[0.06] bg-[#0a0d12] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#d4a853]/90">
            The model
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#f4f1ea] md:text-4xl">
            A calm close is a product decision, not a personality trait.
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-[#a8aebc] md:text-lg">
            We focus on the narrow job that burns the most time: tying numbers to proof, routing exceptions,
            and preserving an audit trail someone else can follow six months later. That focus keeps the
            product sharp and the commercial story simple.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-3 md:gap-10">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-white/[0.07] bg-[#12161f] p-8 md:p-10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d4a853]/25 bg-[#d4a853]/10">
                <item.icon className="h-5 w-5 text-[#d4a853]" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-[#f4f1ea]">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#a8aebc] md:text-[15px] md:leading-relaxed">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
