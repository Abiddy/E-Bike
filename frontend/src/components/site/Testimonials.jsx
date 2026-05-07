import React from "react";
import useReveal from "../../hooks/useReveal";

const quotes = [
  {
    id: "amelia",
    text:
      "We rode from Venice to the pier at sunset and didn't say a word the whole way. Just the ocean and these whisper-quiet bikes.",
    name: "Amelia R.",
    role: "Hotel guest · Marina del Rey",
  },
  {
    id: "daniel",
    text:
      "I've lived in LA twelve years. This is the first time I felt like a tourist again — in the best way.",
    name: "Daniel K.",
    role: "Local · Santa Monica",
  },
  {
    id: "sasha",
    text:
      "Folded the bikes into the trunk for a hotel weekend. Unfolded into the best memory of the trip.",
    name: "Sasha & Theo",
    role: "Visiting from London",
  },
];

export const Testimonials = () => {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      data-testid="testimonials-section"
      className="relative bg-white px-6 sm:px-8 py-28 sm:py-40 border-t border-[#E5E5E5]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-24 max-w-3xl">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-[#6F6F6F] mb-6">
            What riders are saying
          </p>
          <h2
            className="reveal reveal-delay-1 font-display text-black"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-1.6px",
            }}
          >
            Notes from{" "}
            <span className="italic text-[#6F6F6F]">the boardwalk.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
          {quotes.map((q, i) => (
            <figure
              key={q.id}
              data-testid={`testimonial-${q.id}`}
              className={`reveal reveal-delay-${(i % 3) + 1} bg-white p-8 sm:p-12 flex flex-col justify-between min-h-[360px]`}
            >
              <blockquote
                className="font-display text-black"
                style={{
                  fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.5px",
                }}
              >
                <span className="italic text-[#6F6F6F]">“</span>
                {q.text}
                <span className="italic text-[#6F6F6F]">”</span>
              </blockquote>
              <figcaption className="mt-10 flex items-center justify-between">
                <div>
                  <div className="text-sm text-black">{q.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#6F6F6F] mt-1">
                    {q.role}
                  </div>
                </div>
                <span className="text-xs text-[#6F6F6F] tracking-[0.2em]">
                  {`0${i + 1} / 03`}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
