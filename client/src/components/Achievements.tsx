import { Award, Gamepad2, Sparkles, Trophy } from "lucide-react";
import { ACHIEVEMENTS } from "../data/portfolioData";

interface AchievementsProps {
  onOpenLogicBeast: () => void;
}

export default function Achievements({ onOpenLogicBeast }: AchievementsProps) {
  return (
    <section id="achievements" className="py-20 sm:py-28 border-b border-[#d5e3de]/10 bg-[#090d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 border border-[#16d6bd]/30 bg-[#16d6bd]/5 rounded-sm">
              <span className="text-[11px] font-mono text-[#16d6bd] tracking-widest uppercase">
                04 // AWARDS &amp; RECOGNITION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#f0f2ed] tracking-tight">
              Honors &amp; Hackathon Victories
            </h2>
            <p className="text-sm sm:text-base text-[#77847f] mt-2 max-w-2xl font-mono">
              Factual, competitive sprint recognitions and major game developer conference showcase selections.
            </p>
          </div>

          {/* Interactive Arcade Mini-Game CTA */}
          <button
            onClick={onOpenLogicBeast}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold text-[#16d6bd] border border-[#16d6bd]/40 bg-[#16d6bd]/10 hover:bg-[#16d6bd] hover:text-[#090d0d] transition-all rounded-sm cursor-pointer self-start md:self-auto shadow-md"
            title="Launch Break the LOGIC BEAST timing reflex challenge"
          >
            <Gamepad2 size={15} />
            <span>PLAY TIMING CHALLENGE: LOGIC BEAST</span>
          </button>
        </div>

        {/* 4 Achievements Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ACHIEVEMENTS.map((ach, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#0e1414] border border-[#d5e3de]/15 hover:border-[#16d6bd]/50 rounded-sm transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="p-2 bg-[#121a19] border border-[#16d6bd]/30 text-[#16d6bd] rounded-sm">
                    <Trophy size={16} />
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold tracking-wider text-[#090d0d] bg-[#16d6bd] rounded-sm">
                    {ach.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-sans font-bold text-[#f0f2ed] mb-1">
                  {ach.title}
                </h3>

                <div className="text-xs font-mono text-[#16d6bd] font-medium mb-3">
                  {ach.event}
                </div>

                <p className="text-xs text-[#dbe2df]/80 leading-relaxed mb-4">
                  {ach.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#d5e3de]/10 flex items-center justify-between text-[10px] font-mono text-[#77847f]">
                <span>YEAR: {ach.date}</span>
                <span className="text-[#16d6bd]">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
