import React, { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home", active: true },
  { label: "Bikes", href: "#bikes" },
  { label: "Rates", href: "#rates" },
  { label: "Locations", href: "#locations" },
  { label: "Reach Us", href: "#reach" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navigation"
      className={`fixed top-0 inset-x-0 z-30 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 border-b border-[#E5E5E5]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 py-5">
        <a
          href="#home"
          data-testid="brand-logo"
          className="font-display text-2xl sm:text-3xl tracking-tight text-black leading-none"
        >
          Paradise Worldwide
          <sup className="text-[10px] sm:text-xs align-super ml-0.5 text-black">
            ®
          </sup>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={`nav-link text-sm transition-colors ${
                l.active ? "text-black" : "text-[#6F6F6F] hover:text-black"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#reach"
          data-testid="nav-cta-begin-journey"
          className="btn-pill px-5 sm:px-6 py-2.5 text-sm"
        >
          Begin Journey
        </a>
      </div>
    </header>
  );
};

export default Navigation;
