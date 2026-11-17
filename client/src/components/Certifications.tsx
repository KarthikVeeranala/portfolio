import { Award, CheckCircle2, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 bg-[#131f2d] border-b-[15px] border-[#ff6123]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#fafaf9] tracking-tight mb-4">
            CERTIFICATIONS
          </h2>
          <div className="w-44 h-3 bg-[#ff6123] mb-6" />

          <p className="text-base sm:text-xl text-[#b0c4de] max-w-3xl leading-relaxed font-normal">
            Verified academic and technical credentials from Harvard University, HarvardX, Udemy, and Infosys.
          </p>
        </div>

        {/* 4 Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-[#172a3f] border-2 border-[#20354b] hover:border-[#ff6123] rounded-lg transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header: Issuer badge & Date */}
                <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#20354b]">
                  <span className="px-3 py-1 font-display text-xs font-black tracking-wider uppercase text-white bg-[#ff6123] rounded">
                    {cert.badge}
                  </span>
                  <span className="text-xs font-bold text-[#ff9921] uppercase">
                    {cert.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="font-display text-xl sm:text-2xl font-black text-[#fafaf9] uppercase mb-1">
                  {cert.title}
                </h3>
                <div className="text-xs font-bold text-[#b0c4de] uppercase mb-4">
                  Issued by {cert.issuer}
                </div>

                {/* Description */}
                <p className="text-sm text-[#b0c4de] leading-relaxed mb-6 font-normal">
                  {cert.description}
                </p>
              </div>

              {/* Skills covered */}
              <div>
                <div className="pt-4 border-t border-[#20354b] flex flex-wrap items-center gap-1.5">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 text-xs font-bold text-[#fafaf9] bg-[#20354b] border border-[rgba(147,184,227,0.18)] rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
