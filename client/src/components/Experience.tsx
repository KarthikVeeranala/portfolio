import { Briefcase, Building2, Calendar, CheckCircle2, MapPin } from "lucide-react";
import { EXPERIENCES } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-[#d5e3de]/10 bg-[#090d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 border border-[#16d6bd]/30 bg-[#16d6bd]/5 rounded-sm">
            <span className="text-[11px] font-mono text-[#16d6bd] tracking-widest uppercase">
              03 // WORK EXPERIENCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#f0f2ed] tracking-tight">
            Professional Experience &amp; Leadership
          </h2>
          <p className="text-sm sm:text-base text-[#77847f] mt-2 max-w-2xl font-mono">
            Commercial internships and collegiate leadership verified against official employment records and resume.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-[#0e1414] border border-[#d5e3de]/15 hover:border-[#16d6bd]/40 rounded-sm transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 bg-[#16d6bd]/15 text-[#16d6bd] border border-[#16d6bd]/30 rounded-sm">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-[#77847f] flex items-center gap-1">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#f0f2ed]">
                    {exp.role}
                  </h3>

                  <div className="text-sm sm:text-base font-mono text-[#16d6bd] font-semibold mt-1">
                    {exp.company}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#121a19] border border-[#d5e3de]/10 rounded-sm font-mono text-xs text-[#f0f2ed] self-start">
                  <Calendar size={13} className="text-[#16d6bd]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-[#dbe2df] leading-relaxed mb-5">
                {exp.summary}
              </p>

              {/* Technical Highlights */}
              <div className="space-y-2 mb-6">
                <span className="text-[11px] font-mono text-[#16d6bd] uppercase tracking-wider block">
                  KEY RESPONSIBILITIES &amp; SYSTEMS DELIVERED:
                </span>
                {exp.highlights.map((bullet, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#dbe2df]/90">
                    <CheckCircle2 size={14} className="text-[#16d6bd] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-[#d5e3de]/10 flex flex-wrap items-center gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-mono text-[#77847f] bg-[#121a19] border border-[#d5e3de]/10 rounded-sm"
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
