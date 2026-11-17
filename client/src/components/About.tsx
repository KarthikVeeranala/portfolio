import { Cpu, GraduationCap, Terminal, Code2 } from "lucide-react";

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
            Gameplay systems architecture, low-level tooling, and deterministic mechanics.
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
                My passion for game programming began with taking apart game mechanics on PC—modding retro classics, inspecting memory buffers, and understanding why certain combat interactions feel responsive while others feel sluggish. That curiosity evolved into a dedicated focus on <strong className="text-white">Unreal Engine and modern C++</strong>.
              </p>
              <p>
                Today, I focus on the engine layers beneath the art: 6-DOF Newtonian flight kinematics, lead-target trajectory vector math, combat input buffering, and automated engine testing. As an intern at Cyrus 365, I built headless test runners that stream GPU frames to FFmpeg on isolated Win32 desktops. At Aicade, I engineered rapid combat prototypes with 5-hit combo buffers and 180ms i-frame rolls.
              </p>
              <div className="pt-4 border-t border-[#27272a] text-xs sm:text-sm text-[#d4d4d8]">
                <strong className="text-white font-display uppercase tracking-wider block mb-1">
                  CAREER OBJECTIVE:
                </strong>
                Seeking Game Programmer and Gameplay Development Intern roles where I can contribute to production engine systems, combat mechanics, and tools engineering in collaborative studio environments.
              </div>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-[#101012] border border-[#27272a] rounded-lg shadow-md">
                <Cpu size={18} className="text-[#9e0b0b] mb-2" />
                <strong className="text-white font-display text-sm uppercase block mb-1">
                  Mechanical Precision
                </strong>
                <span className="text-xs text-[#a1a1aa]">Sub-frame input buffering and deterministic physics.</span>
              </div>
              <div className="p-4 bg-[#101012] border border-[#27272a] rounded-lg shadow-md">
                <Terminal size={18} className="text-[#9e0b0b] mb-2" />
                <strong className="text-white font-display text-sm uppercase block mb-1">
                  Low-Level Tooling
                </strong>
                <span className="text-xs text-[#a1a1aa]">Automated test commandlets and Slate reflection.</span>
              </div>
              <div className="p-4 bg-[#101012] border border-[#27272a] rounded-lg shadow-md">
                <Code2 size={18} className="text-[#9e0b0b] mb-2" />
                <strong className="text-white font-display text-sm uppercase block mb-1">
                  Clean Architecture
                </strong>
                <span className="text-xs text-[#a1a1aa]">Decoupled subsystems and verified C++ standards.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
