# Paradise Worldwide® — E-Bike Rentals Landing Page

## Original problem statement
Build a cinematic single-page hero (per provided spec) adapted for "Paradise Worldwide E-Bike Rentals" — an LA coastline e-bike rental brand. White bg, Instrument Serif + Inter, italic gray emphasis, looping video, black pill CTA.

User choices:
- Full site: Hero, Features, Editorial, Rates, Locations, Testimonials, Booking CTA, Footer
- No booking form — Begin Journey CTA only
- Headline: "Beyond traffic, we ride the coast." (italic gray on emphasized words)
- Hero refined to strict 50/50 split, hard vertical divider, video edge-to-edge right, mobile stacks with video on top

## Architecture
- React (CRA + craco) frontend — `/app/frontend`
- No backend integration (template untouched)
- Hero video served from `/app/frontend/public/hero.mp4` (faststart-optimized H.264+AAC)
- `framer-motion`, `lucide-react` available; reveal-on-scroll via custom IntersectionObserver hook (`useReveal`)
- Styles split into `/src/styles/fonts.css` (Instrument Serif + Inter) and `/src/styles/theme.css` (fade-rise + reveal helpers)

## Sections built
- `Navigation` — sticky transparent → blur-on-scroll, 5 anchor links, Begin Journey pill
- `Hero` — strict 50/50 split, left = editorial text, right = full-bleed video; mobile stacks (video top)
- `Marquee` — scrolling LA location ribbon
- `Features` — 6 spec cards in editorial grid
- `Editorial` — lifestyle imagery + spec list
- `Rates` — 4 pricing tiers, Half-Day featured (black bg)
- `Locations` — 3 alternating photo-text routes
- `Testimonials` — 3 oversized serif quote cards
- `BookingCTA` — black hero with WhatsApp + tel CTAs
- `Footer` — 4-column with brand wordmark

## Status (2026-05-07)
- All sections render correctly at desktop/tablet/mobile (verified by testing_agent_v3 + screenshots)
- Hero video plays in real browsers (H.264 baseline, AAC, faststart). Headless Playwright Chromium reports MEDIA_ERR_SRC_NOT_SUPPORTED due to missing proprietary codecs in test build — mitigated with poster image + onError fallback
- Console clean, no horizontal overflow at 1440 / 768 / 390

## Personas
- LA tourists / hotel guests wanting a coastal ride
- Locals seeking a car-free coast experience
- Hotel concierges referring guests

## Backlog (P0 / P1)
- P1: Hook Begin Journey to a real booking flow (calendar + email/WA)
- P1: Replace placeholder Unsplash images with branded photography
- P2: Add /journal blog section (currently link in footer)
- P2: Real number/email/WhatsApp link

## Next tasks
- Validate hero video on a real browser (Chrome/Safari)
- Replace WhatsApp / phone placeholders with real contact info
