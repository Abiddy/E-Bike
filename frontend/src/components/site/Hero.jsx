import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const VIDEO_URL =
  "https://customer-assets.emergentagent.com/job_5b769d05-4dd4-472a-beea-7df881c7a91b/artifacts/ku52os84_Sky-blue_folding_electric_bike_r%E2%80%A6_202605071400.mp4";

export const Hero = () => {
  const videoRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const FADE = 0.5; // seconds

    const tick = () => {
      const v = videoRef.current;
      if (!v || !v.duration || isNaN(v.duration)) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const t = v.currentTime;
      const d = v.duration;
      let opacity = 1;
      if (t < FADE) {
        opacity = Math.max(0, Math.min(1, t / FADE));
      } else if (d - t < FADE) {
        opacity = Math.max(0, Math.min(1, (d - t) / FADE));
      } else {
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

    video.addEventListener("ended", handleEnded);

    // Kickoff playback (muted autoplay should be allowed)
    video.muted = true;
    const p = video.play();
    if (p && typeof p.catch === "function") p.catch(() => {});

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden bg-white"
    >
      {/* Video layer */}
      <div
        className="absolute z-0"
        style={{ top: "300px", inset: "auto 0 0 0", height: "calc(100% - 300px)" }}
      >
        <video
          ref={videoRef}
          data-testid="hero-video"
          src={VIDEO_URL}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{ opacity: 0, transition: "opacity 80ms linear" }}
        />
        {/* Top-and-bottom white fade so text stays readable & video melts into next section */}
        <div className="absolute inset-0 hero-overlay pointer-events-none" />
      </div>

      {/* Content layer */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ paddingTop: "calc(8rem - 75px)", paddingBottom: "10rem" }}
      >
        {/* Eyebrow */}
        <p
          data-testid="hero-eyebrow"
          className="animate-fade-rise text-xs sm:text-sm uppercase tracking-[0.3em] text-[#6F6F6F] mb-8"
        >
          Los Angeles · Coastal E-Bike Rentals
        </p>

        <h1
          data-testid="hero-headline"
          className="font-display animate-fade-rise font-normal text-black"
          style={{
            fontSize: "clamp(3rem, 9vw, 8rem)",
            lineHeight: 0.95,
            letterSpacing: "-2.46px",
            maxWidth: "80rem",
          }}
        >
          Beyond <span className="italic" style={{ color: "#6F6F6F" }}>traffic,</span>{" "}
          we ride <span className="italic" style={{ color: "#6F6F6F" }}>the coast.</span>
        </h1>

        <p
          data-testid="hero-description"
          className="animate-fade-rise-delay text-base sm:text-lg max-w-2xl mt-8 leading-relaxed"
          style={{ color: "#6F6F6F" }}
        >
          Paradise Worldwide rents premium folding e-bikes for the people who
          believe Los Angeles is best seen at fifteen miles per hour. Skip the
          traffic. Find the ocean. Ride for hours.
        </p>

        <div
          className="animate-fade-rise-delay-2 mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#reach"
            data-testid="hero-cta-begin-journey"
            className="btn-pill px-12 sm:px-14 py-4 sm:py-5 text-base"
          >
            Begin Journey
          </a>
          <a
            href="#bikes"
            data-testid="hero-cta-explore-bikes"
            className="text-sm tracking-wide text-[#6F6F6F] hover:text-black inline-flex items-center gap-1.5 transition-colors"
          >
            Explore the bikes
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
        </div>

        {/* Stat row sitting just above the video */}
        <div
          data-testid="hero-stats"
          className="animate-fade-rise-delay-3 mt-20 grid grid-cols-3 gap-8 sm:gap-16 text-left"
        >
          {[
            { k: "25–40", v: "Mile range" },
            { k: "20–28", v: "MPH top speed" },
            { k: "4.9★", v: "Guest rating" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl sm:text-5xl text-black leading-none">
                {s.k}
              </div>
              <div className="mt-2 text-xs sm:text-sm text-[#6F6F6F] tracking-wide">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
