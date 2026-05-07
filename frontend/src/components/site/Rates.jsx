import React from "react";
import useReveal from "../../hooks/useReveal";
import { ArrowUpRight } from "lucide-react";

const tiers = [
  {
    id: "hourly",
    name: "Hourly",
    price: "25",
    unit: "/ hour",
    blurb: "A quick coastline cruise.",
    items: ["Helmet & lock", "Quick safety briefing", "Beach-path map"],
  },
  {
    id: "half-day",
    name: "Half Day",
    price: "65",
    unit: "/ 4 hours",
    blurb: "Venice → Santa Monica → back, easy.",
    items: ["Helmet & lock", "Phone mount", "Suggested routes"],
    featured: true,
  },
  {
    id: "full-day",
    name: "Full Day",
    price: "95",
    unit: "/ 8 hours",
    blurb: "All the beaches. One charge.",
    items: ["Helmet & lock", "Phone mount", "Pannier bag", "Curated playlist"],
  },
  {
    id: "multi-day",
    name: "Multi-Day",
    price: "75",
    unit: "/ day · 2+ days",
    blurb: "Hotel-friendly, fold-and-store.",
    items: ["Free folding tutorial", "Spare key", "Concierge support"],
  },
];

export const Rates = () => {
  const ref = useReveal();
  return (
    <section
      id="rates"
      ref={ref}
      data-testid="rates-section"
      className="relative bg-white px-6 sm:px-8 py-28 sm:py-40 border-t border-[#E5E5E5]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 sm:mb-24">
          <div>
            <p className="reveal text-xs uppercase tracking-[0.3em] text-[#6F6F6F] mb-6">
              Rates
            </p>
            <h2
              className="reveal reveal-delay-1 font-display text-black"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                lineHeight: 0.95,
                letterSpacing: "-1.6px",
                maxWidth: "44rem",
              }}
            >
              Honest pricing.{" "}
              <span className="italic text-[#6F6F6F]">No surprises.</span>
            </h2>
          </div>
          <p className="reveal reveal-delay-2 text-base sm:text-lg text-[#6F6F6F] max-w-md leading-relaxed">
            Tax included. Helmet, lock and a brief tutorial come with every
            rental. Group discounts available for 4+ riders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
          {tiers.map((t, i) => (
            <div
              key={t.id}
              data-testid={`rate-tier-${t.id}`}
              className={`reveal reveal-delay-${(i % 4) + 1} relative bg-white p-8 sm:p-10 flex flex-col min-h-[420px] transition-colors duration-500 ${
                t.featured ? "lg:bg-black lg:text-white" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs uppercase tracking-[0.25em] ${
                    t.featured ? "lg:text-white/70 text-[#6F6F6F]" : "text-[#6F6F6F]"
                  }`}
                >
                  {t.name}
                </span>
                {t.featured && (
                  <span className="hidden lg:inline-flex text-[10px] tracking-[0.25em] uppercase border border-white/40 rounded-full px-2 py-0.5">
                    Most picked
                  </span>
                )}
              </div>

              <div className="mt-10 flex items-end gap-2">
                <span
                  className={`font-display text-6xl sm:text-7xl leading-none ${
                    t.featured ? "lg:text-white text-black" : "text-black"
                  }`}
                >
                  ${t.price}
                </span>
                <span
                  className={`text-sm mb-2 ${
                    t.featured ? "lg:text-white/70 text-[#6F6F6F]" : "text-[#6F6F6F]"
                  }`}
                >
                  {t.unit}
                </span>
              </div>

              <p
                className={`mt-3 text-sm ${
                  t.featured ? "lg:text-white/80 text-[#6F6F6F]" : "text-[#6F6F6F]"
                }`}
              >
                {t.blurb}
              </p>

              <ul
                className={`mt-8 space-y-3 text-sm flex-1 ${
                  t.featured ? "lg:text-white/85 text-black" : "text-black"
                }`}
              >
                {t.items.map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`mt-2 inline-block w-2 h-px ${
                        t.featured ? "lg:bg-white/60 bg-black" : "bg-black"
                      }`}
                    />
                    {i}
                  </li>
                ))}
              </ul>

              <a
                href="#reach"
                data-testid={`rate-cta-${t.id}`}
                className={`mt-10 inline-flex items-center justify-between border-t pt-5 text-sm group transition-colors ${
                  t.featured
                    ? "lg:border-white/30 lg:text-white border-black text-black"
                    : "border-black text-black"
                }`}
              >
                <span>Reserve {t.name}</span>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.25}
                  className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rates;
