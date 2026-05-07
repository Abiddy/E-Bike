import { useEffect, useRef } from "react";

/**
 * useReveal — toggles `is-visible` on elements with the `.reveal` class
 * once they intersect the viewport. Pair with /src/styles/theme.css `.reveal`.
 */
export default function useReveal(rootMargin = "-10% 0px") {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const els = node.querySelectorAll(".reveal");
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold: 0.05 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [rootMargin]);

  return ref;
}
