import { Trophy } from "lucide-react";
import { ACHIEVEMENTS } from "../data/portfolioData";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32 bg-[#080808] border-b-[15px] border-[#ff4d00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#f4f4f5] tracking-tight mb-4">
            HONORS &amp; RECOGNITION
          </h2>
          <div className="w-44 h-3 bg-[#ff4d00] mb-6" />

          <p className="text-base sm:text-xl text-[#a1a1aa] max-w-3xl leading-relaxed font-normal">
            Factual, competitive sprint recognitions and major game developer conference showcase selections.
          </p>
        </div>

        {/* 4 Achievements Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#101012] border-2 border-[#27272a] hover:border-[#ff4d00] rounded-lg transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="p-2.5 bg-[#1a1a1e] text-[#ff4d00] rounded-md border border-[rgba(255,255,255,0.10)]">
                    <Trophy size={18} />
                  </span>
                  <span className="px-2.5 py-1 font-display text-[11px] font-black tracking-wider uppercase text-white bg-[#ff4d00] rounded">
                    {ach.badge}
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-black text-[#f4f4f5] uppercase mb-1">
                  {ach.title}
                </h3>

                <div className="text-xs font-bold text-[#ff7700] uppercase mb-3">
                  {ach.event}
                </div>

                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed mb-4">
                  {ach.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#27272a] flex items-center justify-between text-xs font-bold text-[#a1a1aa]">
                <span>YEAR: {ach.date}</span>
                <span className="text-[#ff7700]">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
