import React from "react";
import { Battery, Gauge, MountainSnow, Lightbulb, Workflow, ShieldCheck } from "lucide-react";
import useReveal from "../../hooks/useReveal";

const features = [
  {
    n: "01",
    title: "Powerful Electric Motor",
    body:
      "Smooth acceleration and effortless cruising — designed to glide across beach paths, city streets and longer rides without breaking a sweat.",
    Icon: Lightbulb,
  },
  {
    n: "02",
    title: "25–40 Mile Range",
    body:
      "A full battery covers Venice Beach, Marina del Rey, Santa Monica Pier and back. Long enough to forget you ever needed a car.",
    Icon: Battery,
  },
  {
    n: "03",
    title: "Comfortable Fat Tires",
    body:
      "Wide tires absorb every bump — from beach paths and sidewalks to rough pavement and bike trails. Stable, confident, easy.",
    Icon: MountainSnow,
  },
  {
    n: "04",
    title: "20–28 MPH Top Speed",
    body:
      "Quick enough to feel the air change, slow enough to notice the ocean. Two riding modes for beginners and the more confident.",
    Icon: Gauge,
  },
  {
    n: "05",
    title: "Folding & Portable Frame",
    body:
      "Compact folding design fits effortlessly into trunks, hotel rooms and elevators. Built for the way Angelenos actually move.",
    Icon: Workflow,
  },
  {
    n: "06",
    title: "Safety First, Always",
    body:
      "Front and rear lights, responsive disc brakes, upright seating, stable frame and beginner-friendly controls. Calm rides by design.",
    Icon: ShieldCheck,
  },
];

export const Features = () => {
  const ref = useReveal();
  return (
    <section
      id="bikes"
      ref={ref}
      data-testid="features-section"
      className="relative bg-white px-6 sm:px-8 py-28 sm:py-40"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 sm:mb-24">
          <div>
            <p className="reveal text-xs uppercase tracking-[0.3em] text-[#6F6F6F] mb-6">
              Our E-Bikes
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
              Built for the coast.{" "}
              <span className="italic text-[#6F6F6F]">
                Made for the curious.
              </span>
            </h2>
          </div>
          <p className="reveal reveal-delay-2 text-base sm:text-lg text-[#6F6F6F] max-w-md leading-relaxed">
            High-quality electric bikes engineered for comfort, performance and
            quiet exploration of the Los Angeles coastline. Beginner-friendly,
            quietly powerful, and beautiful to ride.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-[#E5E5E5]">
          {features.map((f, i) => (
            <div
              key={f.n}
              data-testid={`feature-${f.n}`}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative px-2 sm:px-6 py-10 sm:py-14 border-b border-[#E5E5E5] ${
                i % 3 !== 2 ? "lg:border-r" : ""
              } ${i % 2 !== 1 ? "md:border-r lg:border-r" : ""}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="spec-num text-xs text-[#6F6F6F]">{f.n}</span>
                <span className="hairline flex-1" />
                <f.Icon
                  size={18}
                  strokeWidth={1.25}
                  className="text-black transition-transform duration-500 group-hover:rotate-12"
                />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-black leading-tight tracking-tight">
                {f.title}
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[#6F6F6F] leading-relaxed">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
