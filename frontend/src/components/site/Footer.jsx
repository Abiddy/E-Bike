import React from "react";

const cols = [
  {
    title: "Studio",
    items: ["Venice Beach", "Marina del Rey", "Santa Monica", "Hotel partners"],
  },
  {
    title: "Rides",
    items: ["Hourly", "Half day", "Full day", "Multi-day"],
  },
  {
    title: "Company",
    items: ["About", "Journal", "Press", "Sustainability"],
  },
  {
    title: "Reach Us",
    items: ["hello@paradiseww.co", "(310) 555-0143", "Instagram", "WhatsApp"],
  },
];

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="bg-white border-t border-[#E5E5E5] px-6 sm:px-8 pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-2">
            <div className="font-display text-3xl sm:text-4xl text-black tracking-tight leading-none">
              Paradise Worldwide
              <sup className="text-xs align-super ml-0.5">®</sup>
            </div>
            <p className="mt-5 text-sm text-[#6F6F6F] leading-relaxed max-w-sm">
              Premium folding e-bike rentals along the Los Angeles coastline.
              Quiet machines, loud horizons.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs uppercase tracking-[0.25em] text-[#6F6F6F] mb-5">
                {c.title}
              </div>
              <ul className="space-y-3 text-sm text-black">
                {c.items.map((it) => (
                  <li key={it}>
                    <a
                      href="#reach"
                      className="hover:text-[#6F6F6F] transition-colors"
                    >
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-[#6F6F6F] tracking-wide">
            © {new Date().getFullYear()} Paradise Worldwide®. All rides reserved.
          </div>
          <div className="text-xs text-[#6F6F6F] tracking-wide">
            Los Angeles · California
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
