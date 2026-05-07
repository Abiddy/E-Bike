import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

// Faststart-optimized copy served from same origin (public/hero.mp4)
const VIDEO_URL = "/hero.mp4";

export const Hero = () => {
  const videoRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const FADE = 0.5; // seconds — fade-in/out window per loop

    const tick = () => {
      const v = videoRef.current;
      if (!v) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const t = v.currentTime;
      const d = v.duration;
      let opacity = 1;
      if (Number.isFinite(d) && d > 0) {
        if (t < FADE) opacity = Math.max(0, Math.min(1, t / FADE));
        else if (d - t < FADE) opacity = Math.max(0, Math.min(1, (d - t) / FADE));
        else opacity = 1;
      } else {
        // Defensive fallback while metadata loads
        opacity = 1;
      }
      v.style.opacity = String(opacity);
      rafRef.current = requestAnimationFrame(tick);
    };

    const handleEnded = () => {
      const v = videoRef.current;
      if (!v) return;
      v.style.opacity = "0";
      setTimeout(() => {
        try {
          v.currentTime = 0;
          const p = v.play();
          if (p && typeof p.catch === "function") p.catch(() => {});
        } catch (e) {
          /* noop */
        }
      }, 100);
    };

    const handleError = () => {
      // If decode fails, show poster instead of staying blank
      const v = videoRef.current;
      if (!v) return;
      v.style.opacity = "1";
    };

    video.addEventListener("ended", handleEnded);
    video.addEventListener("error", handleError);

    video.muted = true;
    const p = video.play();
    if (p && typeof p.catch === "function") p.catch(() => {});

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative w-full bg-white"
    >
      <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[100svh] lg:min-h-screen">
        {/* LEFT — editorial text */}
        <div
          data-testid="hero-left"
          className="order-2 lg:order-1 relative bg-white flex items-center"
        >
          <div className="w-full px-8 sm:px-12 lg:px-20 xl:px-24 py-16 sm:py-20 lg:py-32 max-w-[760px]">
            <p
              data-testid="hero-eyebrow"
              className="animate-fade-rise text-xs sm:text-[13px] uppercase tracking-[0.32em] text-[#6F6F6F] mb-10"
            >
              Los Angeles · Coastal E-Bike Rentals
            </p>

            <h1
              data-testid="hero-headline"
              className="font-display animate-fade-rise font-normal text-black"
              style={{
                fontSize: "clamp(3rem, 6.6vw, 7.25rem)",
                lineHeight: 0.95,
                letterSpacing: "-2px",
              }}
            >
              Beyond{" "}
              <span className="italic" style={{ color: "#6F6F6F" }}>
                traffic,
              </span>
              <br />
              we ride{" "}
              <span className="italic" style={{ color: "#6F6F6F" }}>
                the coast.
              </span>
            </h1>

            <p
              data-testid="hero-description"
              className="animate-fade-rise-delay text-base sm:text-lg max-w-xl mt-10 leading-relaxed"
              style={{ color: "#6F6F6F" }}
            >
              Paradise Worldwide rents premium folding e-bikes for the people
              who believe Los Angeles is best seen at fifteen miles per hour.
              Skip the traffic. Find the ocean. Ride for hours.
            </p>

            <div className="animate-fade-rise-delay-2 mt-12 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
              <a
                href="#reach"
                data-testid="hero-cta-begin-journey"
                className="btn-pill px-12 py-4 sm:py-5 text-base self-start"
              >
                Begin Journey
              </a>
              <a
                href="#bikes"
                data-testid="hero-cta-explore-bikes"
                className="text-sm tracking-wide text-[#6F6F6F] hover:text-black inline-flex items-center gap-1.5 transition-colors self-start sm:self-auto"
              >
                Explore the bikes
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </a>
            </div>

            <div
              data-testid="hero-stats"
              className="animate-fade-rise-delay-3 mt-20 sm:mt-24 grid grid-cols-3 gap-6 sm:gap-10 max-w-xl"
            >
              {[
                { k: "25–40", v: "Mile range" },
                { k: "20–28", v: "MPH top speed" },
                { k: "4.9★", v: "Guest rating" },
              ].map((s) => (
                <div key={s.v} className="border-t border-[#E5E5E5] pt-5">
                  <div className="font-display text-3xl sm:text-4xl text-black leading-none">
                    {s.k}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm text-[#6F6F6F] tracking-wide">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — contained video on white so the bike fits fully in frame */}
        <div
          data-testid="hero-right"
          className="order-1 lg:order-2 relative bg-white w-full h-[55vh] sm:h-[65vh] lg:h-auto overflow-hidden flex items-center justify-center"
        >
          <video
            ref={videoRef}
            data-testid="hero-video"
            src={VIDEO_URL}
            poster="/popcycle-rider.jpg"
            autoPlay
            muted
            playsInline
            loop={false}
            preload="auto"
            className="w-full h-full object-contain"
            style={{ opacity: 1, transition: "opacity 80ms linear" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
