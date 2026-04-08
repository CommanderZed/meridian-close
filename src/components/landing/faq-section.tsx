"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do you replace our ERP or GL?",
    a: "No. Meridian Close sits beside your general ledger. We ingest balances and subledger detail through secure connectors and files, then organize the human work that still has to happen every month.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most Team customers reach first production close in four to six weeks. Multi-entity programs with SSO and more charts land closer to eight to ten weeks because of testing windows with internal IT.",
  },
  {
    q: "What about auditors and exports?",
    a: "Every reconciliation stores its evidence, reviewer comments, and timestamps in an exportable bundle. You can push a ZIP to your audit workspace or grant read-only access with your own access reviews.",
  },
  {
    q: "Is my data isolated from other customers?",
    a: "Yes. Production tenants run on logically separated workspaces with encryption in transit and at rest. Enterprise plans add dedicated infrastructure options if your policy requires it.",
  },
  {
    q: "Who is a bad fit?",
    a: "Teams without a stable chart of accounts or those expecting full autonomous journal entry without human review. We are built for operators who want control, not a black box.",
  },
];

export function FaqSection() {
  return (
    <section className="border-t border-white/[0.06] bg-[#0a0d12] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#d4a853]/90">FAQ</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#f4f1ea] md:text-4xl">
            Questions teams ask before a pilot.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-16"
        >
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((item, i) => (
              <Accordion.Item
                key={item.q}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#12161f] px-5 md:px-6"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-medium text-[#f4f1ea] outline-none transition hover:text-[#d4a853] focus-visible:ring-2 focus-visible:ring-[#d4a853]/35 md:text-[15px] [&[data-state=open]>svg]:rotate-180">
                    {item.q}
                    <ChevronDown
                      className="h-4 w-4 shrink-0 text-[#d4a853] transition-transform duration-200"
                      aria-hidden
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="pb-5 pr-2 text-sm leading-relaxed text-[#a8aebc]">{item.a}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
