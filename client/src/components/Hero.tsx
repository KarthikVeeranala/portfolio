import { ArrowDown, Download, Play, Terminal } from "lucide-react";
import { assetUrl } from "../data/portfolioData";

interface HeroProps {
  onOpenDemoReel: () => void;
}

export default function Hero({ onOpenDemoReel }: HeroProps) {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-[#d5e3de]/10 bg-[#090d0d]">
      {/* Subtle Terminal Grid Ambient Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#16d6bd12_1px,transparent_1px),linear-gradient(to_bottom,#16d6bd12_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#16d6bd]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Status Chip */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-[#16d6bd]/30 bg-[#16d6bd]/5 rounded-sm">
            <span className="w-2 h-2 rounded-full bg-[#16d6bd] animate-pulse shadow-[0_0_8px_#16d6bd]" />
            <span className="text-xs font-mono text-[#16d6bd] tracking-wider uppercase">
              STATUS: OPEN FOR GAME PROGRAMMER & INTERN ROLES
            </span>
          </div>

          {/* Name & Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-[#f0f2ed] leading-[1.08] mb-4">
            Karthik Veeranala
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-mono font-medium text-[#16d6bd] mb-6 tracking-tight">
            Game Programmer &amp; Gameplay Developer
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#dbe2df]/80 max-w-2xl leading-relaxed mb-8">
            Specializing in <strong className="text-[#f0f2ed] font-semibold">Unreal Engine (5.7 &amp; 4)</strong>, <strong className="text-[#f0f2ed] font-semibold">C++</strong>, gameplay systems, technical problem-solving, and game development tools. Experienced in building 6-DOF physics, predictive vector targeting, Slate/UMG automation, and combat state machines.
          </p>

          {/* 3 Primary Actions */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
            {/* View Projects */}
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-mono font-semibold tracking-wider text-[#090d0d] bg-[#16d6bd] hover:bg-[#16d6bd]/90 transition-all rounded-sm shadow-[0_0_20px_rgba(22,214,189,0.3)] hover:shadow-[0_0_25px_rgba(22,214,189,0.5)] cursor-pointer"
            >
              <span>VIEW PROJECTS</span>
              <ArrowDown size={15} />
            </button>

            {/* Watch Demo Reel */}
            <button
              onClick={onOpenDemoReel}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-mono font-semibold tracking-wider text-[#f0f2ed] border border-[#d5e3de]/30 bg-[#121a19] hover:bg-[#16d6bd]/15 hover:border-[#16d6bd] hover:text-[#16d6bd] transition-all rounded-sm cursor-pointer"
            >
              <Play size={15} className="fill-current text-[#16d6bd]" />
              <span>WATCH DEMO REEL (02:13)</span>
            </button>

            {/* Download Resume (PDF) */}
            <a
              href={assetUrl("Karthik_Veeranala_Resume.pdf")}
              download="Karthik_Veeranala_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-mono font-medium tracking-wider text-[#77847f] hover:text-[#f0f2ed] border border-[#d5e3de]/15 hover:border-[#d5e3de]/40 bg-transparent transition-all rounded-sm"
              title="Download Karthik Veeranala's Resume (PDF)"
            >
              <Download size={15} />
              <span>RESUME (PDF)</span>
            </a>
          </div>

          {/* Factual Technical Highlights Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#d5e3de]/10 font-mono">
            <div className="p-3 bg-[#0e1414] border border-[#d5e3de]/10 rounded-sm">
              <span className="block text-lg sm:text-xl font-bold text-[#16d6bd]">UE 5.7 &amp; C++</span>
              <span className="text-[11px] text-[#77847f]">Primary Specialization</span>
            </div>
            <div className="p-3 bg-[#0e1414] border border-[#d5e3de]/10 rounded-sm">
              <span className="block text-lg sm:text-xl font-bold text-[#f0f2ed]">2 Commercial Roles</span>
              <span className="text-[11px] text-[#77847f]">Cyrus 365 &amp; Aicade</span>
            </div>
            <div className="p-3 bg-[#0e1414] border border-[#d5e3de]/10 rounded-sm">
              <span className="block text-lg sm:text-xl font-bold text-[#f0f2ed]">14+ Prototypes</span>
              <span className="text-[11px] text-[#77847f]">Combat &amp; Physics Systems</span>
            </div>
            <div className="p-3 bg-[#0e1414] border border-[#d5e3de]/10 rounded-sm">
              <span className="block text-lg sm:text-xl font-bold text-[#16d6bd]">IGDC Showcase</span>
              <span className="text-[11px] text-[#77847f]">3x Hackathon Winner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
