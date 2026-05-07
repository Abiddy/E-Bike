import React from "react";
import useReveal from "../../hooks/useReveal";

const IMG_VENICE =
  "https://images.unsplash.com/photo-1622995449969-dae1185a1d1c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHw0fHx2ZW5pY2UlMjBiZWFjaCUyMGxvcyUyMGFuZ2VsZXN8ZW58MHx8fHwxNzc4MTg3OTIzfDA&ixlib=rb-4.1.0&q=85";
const IMG_SANTA =
  "https://images.unsplash.com/photo-1611290883988-835639d69db9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwxfHxzYW50YSUyMG1vbmljYSUyMHBpZXIlMjBzdW5yaXNlfGVufDB8fHx8MTc3ODE4NzkyM3ww&ixlib=rb-4.1.0&q=85";

const routes = [
  {
    id: "venice-loop",
    title: "Venice Beach Loop",
    miles: "6 miles",
    minutes: "~ 45 min",
    blurb:
      "Start at the boardwalk, drift past the canals, end with iced coffee on Abbot Kinney.",
    image: IMG_VENICE,
    align: "left",
  },
  {
    id: "marina-canals",
    title: "Marina del Rey → Venice Canals",
    miles: "9 miles",
    minutes: "~ 1 hr",
    blurb:
      "Glassy harbor mornings, palm-lined paths, and the quietest canals in Los Angeles.",
    image: IMG_SANTA,
    align: "right",
  },
  {
    id: "santa-monica",
    title: "Santa Monica Pier Cruise",
    miles: "12 miles",
    minutes: "~ 1.5 hr",
    blurb:
      "From Venice to the pier and back. Sunset advised. Bring a friend.",
    image: IMG_VENICE,
    align: "left",
  },
];

export const Locations = () => {
  const ref = useReveal();
  return (
    <section
      id="locations"
      ref={ref}
      data-testid="locations-section"
      className="relative bg-white px-6 sm:px-8 py-28 sm:py-40 border-t border-[#E5E5E5]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-24 max-w-3xl">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-[#6F6F6F] mb-6">
            Locations & routes
          </p>
          <h2
            className="reveal reveal-delay-1 font-display text-black"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-1.6px",
            }}
          >
            The coast,{" "}
            <span className="italic text-[#6F6F6F]">in three movements.</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-8 text-base sm:text-lg text-[#6F6F6F] leading-relaxed">
            Curated rides across Venice, Marina del Rey and Santa Monica —
            handpicked by riders who have done them at every hour of the day.
          </p>
        </div>

        <div className="space-y-24 sm:space-y-32">
          {routes.map((r, i) => (
            <div
              key={r.id}
              data-testid={`location-${r.id}`}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                r.align === "right" ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div
                className={`reveal lg:col-span-7 [direction:ltr] ${
                  r.align === "right" ? "lg:order-2" : ""
                }`}
              >
                <div className="relative w-full overflow-hidden bg-[#f4f4f4]">
                  <img
                    src={r.image}
                    alt={r.title}
                    loading="lazy"
                    className="w-full h-[300px] sm:h-[460px] object-cover transition-transform duration-[1200ms] hover:scale-105"
                  />
                </div>
              </div>
              <div className="reveal reveal-delay-2 lg:col-span-5 [direction:ltr]">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#6F6F6F]">
                  <span className="spec-num">{`0${i + 1}`}</span>
                  <span className="hairline flex-1" />
                  <span>{r.miles}</span>
                  <span>·</span>
                  <span>{r.minutes}</span>
                </div>
                <h3
                  className="mt-6 font-display text-black"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    lineHeight: 1,
                    letterSpacing: "-1px",
                  }}
                >
                  {r.title}
                </h3>
                <p className="mt-6 text-base sm:text-lg text-[#6F6F6F] leading-relaxed max-w-md">
                  {r.blurb}
                </p>
                <a
                  href="#reach"
                  data-testid={`location-cta-${r.id}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm text-black border-b border-black pb-1 hover:gap-3 transition-all"
                >
                  Plan this ride →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
