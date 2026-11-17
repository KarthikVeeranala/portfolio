import { useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ToTopButton from "./components/ToTopButton";
import DemoReelModal from "./components/DemoReelModal";
import PhaserGameModal from "./components/PhaserGameModal";

export default function App() {
  const [isDemoReelOpen, setIsDemoReelOpen] = useState(false);
  const [isPhaserGameOpen, setIsPhaserGameOpen] = useState(false);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#131f2d] text-[#fafaf9] font-body selection:bg-[#ff6123] selection:text-[#172a3f] relative overflow-x-hidden">
        {/* Navigation */}
        <Navbar />

        {/* Single-Page Scroll Content */}
        <main>
          {/* Section 00: Hero Landing */}
          <Hero onOpenDemoReel={() => setIsDemoReelOpen(true)} />

          {/* Section 01: Featured Projects */}
          <FeaturedProjects onOpenPhaserGame={() => setIsPhaserGameOpen(true)} />

          {/* Section 02: Technical Skills */}
          <Skills />

          {/* Section 03: Professional Experience */}
          <Experience />

          {/* Section 04: Achievements & Honors */}
          <Achievements />

          {/* Section 05: About Me */}
          <About />

          {/* Section 06: Contact & Transmission */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Trent Polack Floating TO TOP Pill Button */}
        <ToTopButton />

        {/* Demo Reel Modal */}
        <DemoReelModal
          isOpen={isDemoReelOpen}
          onClose={() => setIsDemoReelOpen(false)}
        />

        {/* Contained Playable Phaser Game Modal (City of Aethel) */}
        <PhaserGameModal
          isOpen={isPhaserGameOpen}
          onClose={() => setIsPhaserGameOpen(false)}
        />
      </div>
    </ErrorBoundary>
  );
}
