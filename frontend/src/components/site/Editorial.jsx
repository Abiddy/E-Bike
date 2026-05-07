import React, { useEffect, useRef } from "react";
import useReveal from "../../hooks/useReveal";

const VIDEO_BOARDWALK = "/boardwalk.mp4";
const IMG_RIDER = "/popcycle-rider.jpg";
const IMG_STUDIO = "/popcycle-studio.jpg";

export const Editorial = () => {
  const ref = useReveal();
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }, []);
  return (
    <section
      ref={ref}
      data-testid="editorial-section"
      className="relative bg-white px-6 sm:px-8 py-28 sm:py-40"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
        <div className="lg:col-span-5">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-[#6F6F6F] mb-6">
            A small, deliberate fleet
          </p>
          <h2
            className="reveal reveal-delay-1 font-display text-black"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              lineHeight: 1,
              letterSpacing: "-1.4px",
            }}
          >
            Quiet machines. <br />
            <span className="italic text-[#6F6F6F]">Loud horizons.</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-8 text-base sm:text-lg text-[#6F6F6F] leading-relaxed max-w-md">
            Every bike in the Paradise Worldwide fleet is hand-checked before
            it leaves the studio. Folded frames for easy transport. Soft
            saddles for long afternoons. The kind of details you only notice
            after the ride.
          </p>
          <div className="reveal reveal-delay-3 mt-10 grid grid-cols-2 gap-x-8 gap-y-6 max-w-md">
            {[
              ["Front + rear lights", "Standard"],
              ["Disc brakes", "Hydraulic"],
              ["Riding modes", "Eco · Sport"],
              ["Fits riders", "5'2\" – 6'4\""],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-[#E5E5E5] pt-4">
                <div className="text-xs uppercase tracking-[0.2em] text-[#6F6F6F]">
                  {k}
                </div>
                <div className="mt-1 font-display text-xl text-black">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 relative">
          <div className="reveal reveal-delay-1 relative w-full overflow-hidden bg-[#f4f4f4]">
            <video
              ref={videoRef}
              data-testid="editorial-video"
              src={VIDEO_BOARDWALK}
              poster={IMG_RIDER}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-[420px] sm:h-[560px] object-cover"
            />
          </div>
          <div className="reveal reveal-delay-3 hidden md:block absolute -bottom-16 -left-10 w-[260px] h-[320px] overflow-hidden bg-white border border-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]">
            <img
              src={IMG_STUDIO}
              alt="Popcycle folding electric bike — studio shot"
              className="w-full h-full object-contain p-4"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editorial;
