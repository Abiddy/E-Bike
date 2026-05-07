import React from "react";
import useReveal from "../../hooks/useReveal";
import { ArrowUpRight } from "lucide-react";

export const BookingCTA = () => {
  const ref = useReveal();
  return (
    <section
      id="reach"
      ref={ref}
      data-testid="booking-cta-section"
      className="relative bg-black text-white px-6 sm:px-8 py-32 sm:py-48 overflow-hidden"
    >
      {/* Soft grain / vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      <div className="relative max-w-7xl mx-auto text-center">
        <p className="reveal text-xs uppercase tracking-[0.35em] text-white/60 mb-8">
          Reserve your ride
        </p>
        <h2
          className="reveal reveal-delay-1 font-display"
          style={{
            fontSize: "clamp(2.75rem, 9vw, 8rem)",
            lineHeight: 0.95,
            letterSpacing: "-2.46px",
          }}
        >
          Begin the <span className="italic text-white/60">journey.</span>
        </h2>

        <p className="reveal reveal-delay-2 mt-10 mx-auto max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
          Tell us when you'd like to ride. We'll prepare the bikes, the
          helmets, and a quietly beautiful route along the Pacific.
        </p>

        <div className="reveal reveal-delay-3 mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/13105550143?text=Hi%20Paradise%20Worldwide%2C%20I%27d%20like%20to%20rent%20an%20e-bike."
            target="_blank"
            rel="noopener noreferrer"
            data-testid="booking-cta-primary"
            className="btn-pill bg-white text-black px-12 sm:px-14 py-5 text-base"
            style={{ background: "#FFFFFF", color: "#000000" }}
          >
            Begin Journey
          </a>
          <a
            href="tel:+13105550143"
            data-testid="booking-cta-call"
            className="text-sm tracking-wide text-white/70 hover:text-white inline-flex items-center gap-1.5 transition-colors"
          >
            Or call (310) 555-0143
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
        </div>

        <div className="reveal reveal-delay-3 mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-left border-t border-white/15 pt-10">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/50">
              Studio
            </div>
            <div className="mt-3 font-display text-2xl">
              Venice Beach, CA
            </div>
            <div className="mt-1 text-sm text-white/70">Pickup & drop-off daily</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/50">
              Hours
            </div>
            <div className="mt-3 font-display text-2xl">8 AM — 8 PM</div>
            <div className="mt-1 text-sm text-white/70">Sunrise rides on request</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/50">
              Reach us
            </div>
            <div className="mt-3 font-display text-2xl">hello@paradiseww.co</div>
            <div className="mt-1 text-sm text-white/70">Replies within an hour</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
