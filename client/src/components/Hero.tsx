import { ArrowDown, Download, Play, Linkedin, Github, Mail, Instagram, Youtube } from "lucide-react";
import { assetUrl } from "../data/portfolioData";

interface HeroProps {
  onOpenDemoReel: () => void;
}

const FLOATING_SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/karthikveeranala",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/karthikkkk.v/",
    icon: Instagram,
  },
  {
    name: "GitHub",
    href: "https://github.com/karthikveeranala",
    icon: Github,
  },
  {
    name: "Gmail",
    href: "mailto:veeranalakarthik@gmail.com",
    icon: Mail,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@karthikkkk.v",
    icon: Youtube,
  },
];

export default function Hero({ onOpenDemoReel }: HeroProps) {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden section-with-bg bg-[#131f2d]"
      style={{
        backgroundImage: `url(${assetUrl("assets/backgrounds/trent_bg_hero_sh.png")})`,
      }}
    >
      {/* Warm Orange / Duotone Tint Overlay */}
      <div className="absolute inset-0 bg-[#e6531b]/65 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#172a3f]/50 via-transparent to-[#131f2d]/90 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center">
        
        {/* Center Box: Orange Fill with 16px Solid Navy Border */}
        <div className="w-full max-w-4xl bg-[#ff6123] border-[16px] border-[#172a3f] rounded-lg shadow-2xl p-6 sm:p-10 md:p-14 text-left transition-transform hover:scale-[1.005]">
          
          {/* Main Title: HI, I'M KARTHIK! */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-[1.05] mb-5">
            HI, I'M KARTHIK!
          </h1>

          {/* Paragraph / Intro Copy */}
          <p className="text-white font-medium text-base sm:text-xl md:text-2xl leading-snug sm:leading-relaxed mb-8 max-w-3xl">
            I build responsive gameplay mechanics, combat systems, and custom automation tooling — specializing in <span className="font-black text-white underline decoration-2 underline-offset-4">Unreal Engine 5</span> and modern <span className="font-black text-white underline decoration-2 underline-offset-4">C++</span> for high-performance action titles.
          </p>

          {/* 3 Action Buttons (Dark Navy with White Text) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* View Projects */}
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#172a3f] hover:bg-[#20354b] text-white font-display text-xs sm:text-sm uppercase font-black tracking-wide rounded-md transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              <span>VIEW PROJECTS</span>
              <ArrowDown size={16} />
            </button>

            {/* Watch Demo Reel */}
            <button
              onClick={onOpenDemoReel}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#172a3f] hover:bg-[#20354b] text-white font-display text-xs sm:text-sm uppercase font-black tracking-wide rounded-md transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              <Play size={16} className="fill-current text-[#ff6123]" />
              <span>WATCH DEMO REEL (02:13)</span>
            </button>

            {/* Resume (PDF) */}
            <a
              href={assetUrl("Karthik_Veeranala_Resume.pdf")}
              download="Karthik_Veeranala_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#172a3f] hover:bg-[#20354b] text-white font-display text-xs sm:text-sm uppercase font-black tracking-wide rounded-md transition-all shadow-md hover:-translate-y-0.5"
              title="Download Karthik Veeranala's Resume"
            >
              <Download size={16} />
              <span>RESUME (PDF)</span>
            </a>
          </div>
        </div>

        {/* Row of Floating White Rounded-Square Social Icons */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          {FLOATING_SOCIALS.map((soc) => {
            const Icon = soc.icon;
            return (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-13 sm:h-13 flex items-center justify-center bg-white text-[#172a3f] hover:bg-[#ff9921] hover:text-white rounded-xl shadow-xl transition-all hover:-translate-y-1"
                aria-label={soc.name}
                title={soc.name}
              >
                <Icon size={22} className="stroke-[2.2]" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Diagonal / Angled Bottom Divider Stroke (#ff6123) */}
      <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          className="w-full h-full text-[#ff6123] fill-current"
        >
          <polygon points="0,40 1200,40 1200,0 0,28" />
        </svg>
      </div>
    </section>
  );
}
