import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";
import { EXPERIENCES, assetUrl } from "../data/portfolioData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 section-with-bg bg-[#131f2d] border-b-[15px] border-[#ff6123]"
      style={{
        backgroundImage: `url(${assetUrl("assets/backgrounds/trent_bg_book_art.jpg")})`,
      }}
    >
      {/* Dark Navy Overlay */}
      <div className="section-overlay-navy pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#fafaf9] tracking-tight mb-4">
            CAREER &amp; EXPERIENCE
          </h2>
          <div className="w-44 h-3 bg-[#ff6123] mb-6" />

          <p className="text-base sm:text-xl text-[#b0c4de] max-w-3xl leading-relaxed font-normal">
            Commercial studio internships and collegiate leadership verified against official employment records and resume.
          </p>
        </div>

        {/* Experience Cards (Trent /career format) */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-10 bg-[#172a3f] border-2 border-[#20354b] hover:border-[#ff6123] rounded-lg transition-all shadow-xl"
            >
              {/* Studio & Date Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#20354b] mb-6">
                <div className="flex flex-wrap items-center gap-3">
                  {/* Studio Orange Badge Pill */}
                  <span className="px-3.5 py-1 font-display text-xs font-black uppercase tracking-wider text-white bg-[#ff6123] rounded">
                    {exp.company}
                  </span>
                  <span className="text-xs text-[#b0c4de] font-semibold flex items-center gap-1">
                    <MapPin size={13} className="text-[#ff9921]" /> {exp.location}
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#fafaf9] bg-[#131f2d] px-3.5 py-1.5 rounded border border-[#20354b]">
                  <Calendar size={13} className="text-[#ff6123]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Role Title with Orange Underline */}
              <div className="mb-4">
                <h3 className="font-display text-2xl sm:text-3xl font-black text-[#fafaf9] uppercase tracking-tight">
                  {exp.role}
                </h3>
                <div className="w-24 h-1 bg-[#ff6123] mt-2 mb-4" />
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-[#b0c4de] leading-relaxed mb-6 font-normal">
                {exp.summary}
              </p>

              {/* Technical Highlights */}
              <div className="space-y-3 mb-6 bg-[#131f2d] p-4 sm:p-6 rounded-md border border-[#20354b]">
                <span className="text-xs font-display font-black text-[#ff9921] uppercase tracking-wider block mb-2">
                  KEY CONTRIBUTIONS &amp; SYSTEMS DELIVERED:
                </span>
                {exp.highlights.map((bullet, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#fafaf9]">
                    <CheckCircle2 size={16} className="text-[#ff6123] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-[#20354b] flex flex-wrap items-center gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-bold text-[#b0c4de] bg-[#20354b] border border-[rgba(147,184,227,0.18)] rounded"
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
