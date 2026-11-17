import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";
import { EXPERIENCES, assetUrl } from "../data/portfolioData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 section-with-bg bg-[#080808] border-b-[15px] border-[#9e0b0b]"
      style={{
        backgroundImage: `url(${assetUrl("assets/backgrounds/bg_career_byteoasis.webp")})`,
      }}
    >
      {/* Pure Neutral Dark Carbon Overlay */}
      <div className="section-overlay-navy pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight mb-4">
            CAREER &amp; EXPERIENCE
          </h2>
          <div className="w-44 h-3 bg-[#9e0b0b] mb-6" />

          <p className="text-base sm:text-xl text-[#a1a1aa] max-w-3xl leading-relaxed font-normal">
            Commercial studio internships and collegiate leadership verified against official employment records and resume.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-10 bg-[#101012] border-2 border-[#27272a] hover:border-[#9e0b0b] rounded-lg transition-all shadow-xl"
            >
              {/* Studio & Date Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#27272a] mb-6">
                <div className="flex flex-wrap items-center gap-3">
                  {/* Studio Crimson Badge Pill */}
                  <span className="px-3.5 py-1 font-display text-xs font-black uppercase tracking-wider text-white bg-[#9e0b0b] rounded">
                    {exp.company}
                  </span>
                  <span className="text-xs text-[#a1a1aa] font-semibold flex items-center gap-1">
                    <MapPin size={13} className="text-[#d4d4d8]" /> {exp.location}
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#f4f4f5] bg-[#080808] px-3.5 py-1.5 rounded border border-[#27272a]">
                  <Calendar size={13} className="text-[#d4d4d8]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Role Title with Crimson Underline */}
              <div className="mb-4">
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  {exp.role}
                </h3>
                <div className="w-24 h-1 bg-[#9e0b0b] mt-2 mb-4" />
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed mb-6 font-normal">
                {exp.summary}
              </p>

              {/* Technical Highlights */}
              <div className="space-y-3 mb-6 bg-[#080808] p-4 sm:p-6 rounded-md border border-[#27272a]">
                <span className="text-xs font-display font-black text-[#d4d4d8] uppercase tracking-wider block mb-2">
                  KEY CONTRIBUTIONS &amp; SYSTEMS DELIVERED:
                </span>
                {exp.highlights.map((bullet, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#f4f4f5]">
                    <CheckCircle2 size={16} className="text-[#9e0b0b] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-[#27272a] flex flex-wrap items-center gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-bold text-[#a1a1aa] bg-[#1a1a1e] border border-[rgba(255,255,255,0.10)] rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
