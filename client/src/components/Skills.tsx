import { Code2, Gamepad2, Terminal, Zap } from "lucide-react";
import { SKILL_CATEGORIES } from "../data/portfolioData";

export default function Skills() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 size={18} className="text-[#16d6bd]" />;
      case "Gamepad2":
        return <Gamepad2 size={18} className="text-[#16d6bd]" />;
      case "Zap":
        return <Zap size={18} className="text-[#16d6bd]" />;
      case "Terminal":
        return <Terminal size={18} className="text-[#16d6bd]" />;
      default:
        return <Code2 size={18} className="text-[#16d6bd]" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-[#d5e3de]/10 bg-[#090d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 border border-[#16d6bd]/30 bg-[#16d6bd]/5 rounded-sm">
            <span className="text-[11px] font-mono text-[#16d6bd] tracking-widest uppercase">
              02 // TECHNICAL COMPETENCIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#f0f2ed] tracking-tight">
            Technical Skills &amp; Engine Stack
          </h2>
          <p className="text-sm sm:text-base text-[#77847f] mt-2 max-w-2xl font-mono">
            Directly demonstrable competencies backed by production internships, hackathon victories, and live prototypes. No arbitrary percentage ratings.
          </p>
        </div>

        {/* 4 Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-[#0e1414] border border-[#d5e3de]/15 hover:border-[#16d6bd]/40 rounded-sm transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#121a19] border border-[#d5e3de]/10 rounded-sm">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-sans font-bold text-[#f0f2ed]">
                      {category.title}
                    </h3>
                    <span className="text-xs text-[#77847f] font-mono">{category.description}</span>
                  </div>
                </div>

                {/* Skills Tag List */}
                <div className="mt-5 space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 bg-[#121a19] border border-[#d5e3de]/10 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 transition-colors hover:border-[#16d6bd]/30"
                    >
                      <div className="flex items-center gap-2 font-mono text-xs">
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#16d6bd] shadow-[0_0_6px_#16d6bd]" />
                        )}
                        <span className={`font-semibold ${skill.highlight ? "text-[#16d6bd]" : "text-[#f0f2ed]"}`}>
                          {skill.name}
                        </span>
                      </div>
                      {skill.context && (
                        <span className="text-[11px] font-mono text-[#77847f] sm:text-right">
                          {skill.context}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Evidence Footer */}
              <div className="mt-6 pt-3 border-t border-[#d5e3de]/10 flex items-center justify-between text-[11px] font-mono text-[#77847f]">
                <span>VERIFIED VIA:</span>
                <span className="text-[#16d6bd]">PROJECT CODE &amp; REPOSITORIES</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
