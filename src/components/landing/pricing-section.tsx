"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Team",
    price: "$899",
    cadence: "per month, billed annually",
    note: "$1,090 if billed monthly. Includes 8 seats, 2 entities, standard bank connectors.",
    highlights: [
      "Close workspace with threaded reconciliations",
      "Reviewer queues and electronic sign-off",
      "CSV and SFTP ingestion, 24-month retention",
      "Email support with next business day SLA",
    ],
    cta: "Join Waitlist",
    featured: false,
  },
  {
    name: "Multi-entity",
    price: "$2,400",
    cadence: "per month, billed annually",
    note: "$2,899 monthly. Up to 25 seats, 8 entities, priority onboarding.",
    highlights: [
      "Everything in Team",
      "Intercompany elimination worksheets",
      "SSO (SAML) and SCIM provisioning",
      "Shared success manager through first two closes",
    ],
    cta: "Join Waitlist",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "annual agreement",
    note: "Regional data residency, custom ERP adapters, and dedicated technical account lead.",
    highlights: [
      "Volume pricing for seats and entities",
      "Private VPC or on-prem bridge options",
      "Custom retention and legal hold exports",
      "Named support with 4-hour Sev-1 window",
    ],
    cta: "Talk to us",
    featured: false,
  },
];

export function PricingSection() {
  return (
    <section className="border-t border-white/[0.06] bg-[#0a0d12] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#d4a853]/90">
            Pricing
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#f4f1ea] md:text-4xl">
            Clear packaging, no mystery line items.
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-[#a8aebc]">
            Implementation for Team and Multi-entity is a one-time $4,500 setup that covers workspace
            design, connector mapping, and a guided first close. Enterprise setup is scoped after a short
            technical review.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3 lg:gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className={`relative flex flex-col rounded-2xl border p-8 md:p-10 ${
                tier.featured
                  ? "border-[#d4a853]/45 bg-[#141822] shadow-[0_0_0_1px_rgba(212,168,83,0.12)]"
                  : "border-white/[0.07] bg-[#12161f]"
              }`}
            >
              {tier.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-[#d4a853]/35 bg-[#1a1f2e] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#d4a853]">
                  Most common
                </span>
              ) : null}
              <h3 className="text-lg font-semibold text-[#f4f1ea]">{tier.name}</h3>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-[#f4f1ea]">
                  {tier.price}
                </span>
              </div>
              <p className="mt-2 text-sm text-[#8b92a4]">{tier.cadence}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#a8aebc]">{tier.note}</p>
              <ul className="mt-8 flex-1 space-y-4">
                {tier.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-[#c9ced9]">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#d4a853]"
                      strokeWidth={2}
                      aria-hidden
                    />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`mt-10 w-full ${
                  tier.featured
                    ? "bg-[#d4a853] text-[#141822] hover:bg-[#e0b55e]"
                    : "border border-white/[0.12] bg-transparent text-[#f4f1ea] hover:bg-white/[0.04]"
                }`}
              >
                <a href="#waitlist" className="no-underline">
                  {tier.cta}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
