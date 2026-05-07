import React from "react";
import "@/styles/fonts.css";
import "@/styles/theme.css";
import "@/App.css";

import Navigation from "@/components/site/Navigation";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import Features from "@/components/site/Features";
import Editorial from "@/components/site/Editorial";
import Rates from "@/components/site/Rates";
import Locations from "@/components/site/Locations";
import Testimonials from "@/components/site/Testimonials";
import BookingCTA from "@/components/site/BookingCTA";
import Footer from "@/components/site/Footer";

function App() {
  return (
    <div className="App bg-white text-black font-body min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Editorial />
        <Rates />
        <Locations />
        <Testimonials />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
