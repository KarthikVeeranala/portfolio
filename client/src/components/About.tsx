import { BookOpen, Code2, Cpu, GraduationCap, MapPin, Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-[#d5e3de]/10 bg-[#090d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading & Academic Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 border border-[#16d6bd]/30 bg-[#16d6bd]/5 rounded-sm">
                <span className="text-[11px] font-mono text-[#16d6bd] tracking-widest uppercase">
                  05 // ABOUT ME
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#f0f2ed] tracking-tight">
                Engineering Foundation &amp; Philosophy
              </h2>
            </div>

            {/* Academic Card */}
            <div className="p-5 bg-[#0e1414] border border-[#d5e3de]/15 rounded-sm font-mono text-xs space-y-3">
              <div className="flex items-center gap-2 text-[#16d6bd] font-bold text-sm">
                <GraduationCap size={16} />
                <span>EDUCATION</span>
              </div>
              <div>
                <strong className="text-sm font-sans font-bold text-[#f0f2ed] block">
                  Institute of Aeronautical Engineering (IARE)
                </strong>
                <span className="text-[#77847f]">B.Tech in Computer Science and Engineering</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#d5e3de]/10 text-[11px]">
                <div><span className="text-[#77847f]">Expected:</span> <strong className="text-[#f0f2ed]">May 2027</strong></div>
                <div><span className="text-[#77847f]">CGPA:</span> <strong className="text-[#16d6bd]">7.5 / 10</strong></div>
                <div><span className="text-[#77847f]">Location:</span> <strong className="text-[#f0f2ed]">Hyderabad, India</strong></div>
                <div><span className="text-[#77847f]">Status:</span> <strong className="text-[#16d6bd]">Active Undergraduate</strong></div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 bg-[#0e1414] border border-[#d5e3de]/15 rounded-sm space-y-4 text-sm sm:text-base text-[#dbe2df] leading-relaxed">
              <p>
                My passion for game programming began with an obsession for taking apart game mechanics on PC—modding retro classics, inspecting memory buffers, and understanding why certain combat interactions feel responsive while others feel sluggish. That curiosity evolved into a dedicated focus on <strong className="text-[#f0f2ed]">Unreal Engine and modern C++</strong>.
              </p>
              <p>
                Today, I focus on the engine layers beneath the art: 6-DOF Newtonian flight kinematics, lead-target trajectory vector math, combat input buffering, and automated engine testing. As an intern at Cyrus 365, I built headless test runners that stream GPU frames to FFmpeg on isolated Win32 desktops. At Aicade, I engineered rapid combat prototypes with 5-hit combo buffers and 180ms i-frame rolls.
              </p>
              <p className="text-xs sm:text-sm font-mono text-[#77847f] pt-2 border-t border-[#d5e3de]/10">
                <strong className="text-[#16d6bd]">Career Objective:</strong> Seeking Game Programmer and Gameplay Development Intern roles where I can contribute to production engine systems, combat mechanics, and tools engineering in collaborative studio environments.
              </p>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3 bg-[#121a19] border border-[#d5e3de]/10 rounded-sm">
                <Cpu size={14} className="text-[#16d6bd] mb-1.5" />
                <strong className="text-[#f0f2ed] block">Mechanical Precision</strong>
                <span className="text-[11px] text-[#77847f]">Sub-frame input buffering and deterministic physics.</span>
              </div>
              <div className="p-3 bg-[#121a19] border border-[#d5e3de]/10 rounded-sm">
                <Terminal size={14} className="text-[#16d6bd] mb-1.5" />
                <strong className="text-[#f0f2ed] block">Low-Level Tooling</strong>
                <span className="text-[11px] text-[#77847f]">Automated test commandlets and Slate reflection.</span>
              </div>
              <div className="p-3 bg-[#121a19] border border-[#d5e3de]/10 rounded-sm">
                <Code2 size={14} className="text-[#16d6bd] mb-1.5" />
                <strong className="text-[#f0f2ed] block">Clean Architecture</strong>
                <span className="text-[11px] text-[#77847f]">Decoupled subsystems and verified C++ standards.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
