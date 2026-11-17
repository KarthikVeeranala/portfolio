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
import DemoReelModal from "./components/DemoReelModal";
import PhaserGameModal from "./components/PhaserGameModal";
import LogicBeastModal from "./components/LogicBeastModal";

export default function App() {
  const [isDemoReelOpen, setIsDemoReelOpen] = useState(false);
  const [isPhaserGameOpen, setIsPhaserGameOpen] = useState(false);
  const [isLogicBeastOpen, setIsLogicBeastOpen] = useState(false);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#090d0d] text-[#dbe2df] font-sans selection:bg-[#16d6bd] selection:text-[#090d0d] relative overflow-x-hidden">
        {/* Navigation */}
        <Navbar />

        {/* Single-Page Scroll Content */}
        <main>
          {/* Section 00: Hero */}
          <Hero onOpenDemoReel={() => setIsDemoReelOpen(true)} />

          {/* Section 01: Featured Projects */}
          <FeaturedProjects onOpenPhaserGame={() => setIsPhaserGameOpen(true)} />

          {/* Section 02: Technical Skills */}
          <Skills />

          {/* Section 03: Professional Experience */}
          <Experience />

          {/* Section 04: Achievements & Honors */}
          <Achievements onOpenLogicBeast={() => setIsLogicBeastOpen(true)} />

          {/* Section 05: About Me */}
          <About />

          {/* Section 06: Contact & Transmission */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Modals & Contained Playable Experiences */}
        <DemoReelModal
          isOpen={isDemoReelOpen}
          onClose={() => setIsDemoReelOpen(false)}
        />

        <PhaserGameModal
          isOpen={isPhaserGameOpen}
          onClose={() => setIsPhaserGameOpen(false)}
        />

        <LogicBeastModal
          isOpen={isLogicBeastOpen}
          onClose={() => setIsLogicBeastOpen(false)}
        />
      </div>
    </ErrorBoundary>
  );
}
