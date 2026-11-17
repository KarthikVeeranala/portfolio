import { Trophy } from "lucide-react";
import { ACHIEVEMENTS } from "../data/portfolioData";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32 bg-[#131f2d] border-b-[15px] border-[#ff6123]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#fafaf9] tracking-tight mb-4">
            HONORS &amp; RECOGNITION
          </h2>
          <div className="w-44 h-3 bg-[#ff6123] mb-6" />

          <p className="text-base sm:text-xl text-[#b0c4de] max-w-3xl leading-relaxed font-normal">
            Factual, competitive sprint recognitions and major game developer conference showcase selections.
          </p>
        </div>

        {/* 4 Achievements Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#172a3f] border-2 border-[#20354b] hover:border-[#ff6123] rounded-lg transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="p-2.5 bg-[#20354b] text-[#ff6123] rounded-md border border-[rgba(147,184,227,0.18)]">
                    <Trophy size={18} />
                  </span>
                  <span className="px-2.5 py-1 font-display text-[11px] font-black tracking-wider uppercase text-white bg-[#ff6123] rounded">
                    {ach.badge}
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-black text-[#fafaf9] uppercase mb-1">
                  {ach.title}
                </h3>

                <div className="text-xs font-bold text-[#ff9921] uppercase mb-3">
                  {ach.event}
                </div>

                <p className="text-xs sm:text-sm text-[#b0c4de] leading-relaxed mb-4">
                  {ach.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#20354b] flex items-center justify-between text-xs font-bold text-[#b0c4de]">
                <span>YEAR: {ach.date}</span>
                <span className="text-[#ff9921]">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
