import React from "react";

const items = [
  "Venice Beach",
  "Marina del Rey",
  "Santa Monica Pier",
  "Venice Canals",
  "Hermosa Beach",
  "Manhattan Beach",
  "Playa del Rey",
  "Pacific Palisades",
];

export const Marquee = () => {
  const row = [...items, ...items, ...items];
  return (
    <section
      data-testid="marquee-section"
      aria-hidden="true"
      className="relative w-full overflow-hidden border-y border-[#E5E5E5] bg-white py-6 sm:py-8"
    >
      <div className="flex marquee-track gap-12 whitespace-nowrap">
        {row.map((it, i) => (
          <span
            key={`${it}-${i}`}
            className="font-display text-3xl sm:text-5xl text-black/90"
          >
            <span className="italic text-[#6F6F6F] mr-3">·</span>
            {it}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
