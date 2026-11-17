import { Compass, Cpu, GraduationCap, Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#080808] border-b-[15px] border-[#9e0b0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight mb-4">
            ABOUT ME
          </h2>
          <div className="w-44 h-3 bg-[#9e0b0b] mb-6" />

          <p className="text-base sm:text-xl text-[#a1a1aa] max-w-3xl leading-relaxed font-normal">
            Gameplay programming, systems tooling, and player-centered game &amp; technical design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Academic Foundation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 bg-[#101012] border-2 border-[#27272a] rounded-lg shadow-xl space-y-4">
              <div className="flex items-center gap-2.5 text-white font-display font-black text-sm uppercase">
                <GraduationCap size={20} className="text-[#9e0b0b]" />
                <span>EDUCATION</span>
              </div>

              <div>
                <strong className="text-lg sm:text-xl font-display font-black text-white uppercase block mb-1">
                  Institute of Aeronautical Engineering (IARE)
                </strong>
                <span className="text-sm text-[#a1a1aa]">
                  B.Tech in Computer Science and Engineering
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#27272a] text-xs">
                <div>
                  <span className="text-[#a1a1aa] uppercase font-bold text-[10px] block">Expected Graduation</span>
                  <strong className="text-white text-sm">May 2027</strong>
                </div>
                <div>
                  <span className="text-[#a1a1aa] uppercase font-bold text-[10px] block">CGPA</span>
                  <strong className="text-white text-sm">7.5 / 10</strong>
                </div>
                <div>
                  <span className="text-[#a1a1aa] uppercase font-bold text-[10px] block">Location</span>
                  <strong className="text-white text-sm">Hyderabad, India</strong>
                </div>
                <div>
                  <span className="text-[#a1a1aa] uppercase font-bold text-[10px] block">Status</span>
                  <strong className="text-white text-sm">Active Undergraduate</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Core Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 bg-[#101012] border-2 border-[#27272a] rounded-lg shadow-xl space-y-4 text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
              <p>
                I am a game developer and designer currently pursuing a B.Tech in Computer Science and Engineering at IARE Hyderabad (2023–2027), with a deep focus on <strong className="text-white">Unreal Engine C++</strong>, real-time combat feel, gameplay mechanics, and player experience.
              </p>
              <p>
                My journey started on my dad&apos;s PC playing downloaded classics, building logic prototypes in Scratch, and self-learning C++ game architecture. I honed my skills under high-pressure constraints in 24–48 hour competitive hackathons—winning 1st Place at CodeDay 2.0, 2nd Place at HackRush, and Top 3 at MLH FrostHacks—alongside earning an Indie Top 40 selection at IGDC 2025 for <strong className="text-white">City of Aethel</strong>. As President of the Elysium Gaming Club at IARE, I organize campus gaming culture and collegiate esports tournaments.
              </p>
              <p>
                Alongside gameplay programming, I have a strong grasp of <strong className="text-white">Game Design and Technical Design</strong>. Building production E2E automation plugins at Cyrus 365 required me to first deeply dissect how each game works from the inside out—mapping core gameplay loops, player objectives, progression triggers, UI state flows, and edge cases before writing automation code. Combined with designing side-scroller level maps and boss encounters for <strong className="text-white">City of Aethel</strong>, I bridge low-level engineering with player-facing design intent.
              </p>
              <div className="pt-4 border-t border-[#27272a] text-xs sm:text-sm text-[#d4d4d8]">
                <strong className="text-white font-display uppercase tracking-wider block mb-1">
                  CAREER OBJECTIVE:
                </strong>
                Seeking <strong className="text-white">Game Programmer, Gameplay Developer, Game Design, and Technical Design</strong> roles where I can contribute to production engine systems, combat mechanics, tools engineering, and player-centered game design in collaborative studio environments.
              </div>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-[#101012] border border-[#27272a] rounded-lg shadow-md">
                <Cpu size={18} className="text-[#9e0b0b] mb-2" />
                <strong className="text-white font-display text-sm uppercase block mb-1">
                  Gameplay &amp; Combat Feel
                </strong>
                <span className="text-xs text-[#a1a1aa]">6-DOF physics, combo input buffers, and responsive player feedback.</span>
              </div>
              <div className="p-4 bg-[#101012] border border-[#27272a] rounded-lg shadow-md">
                <Terminal size={18} className="text-[#9e0b0b] mb-2" />
                <strong className="text-white font-display text-sm uppercase block mb-1">
                  Systems &amp; Tools
                </strong>
                <span className="text-xs text-[#a1a1aa]">Headless E2E test automation, Slate reflection, and C++ architecture.</span>
              </div>
              <div className="p-4 bg-[#101012] border border-[#27272a] rounded-lg shadow-md">
                <Compass size={18} className="text-[#9e0b0b] mb-2" />
                <strong className="text-white font-display text-sm uppercase block mb-1">
                  Game &amp; Tech Design
                </strong>
                <span className="text-xs text-[#a1a1aa]">Core loops, level mapping, encounter pacing, and player-flow analysis.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
