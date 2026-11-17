import { Code2, Gamepad2, Terminal, Zap } from "lucide-react";
import { SKILL_CATEGORIES, assetUrl } from "../data/portfolioData";

export default function Skills() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 size={20} className="text-[#ff4d00]" />;
      case "Gamepad2":
        return <Gamepad2 size={20} className="text-[#ff4d00]" />;
      case "Zap":
        return <Zap size={20} className="text-[#ff4d00]" />;
      case "Terminal":
        return <Terminal size={20} className="text-[#ff4d00]" />;
      default:
        return <Code2 size={20} className="text-[#ff4d00]" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 section-with-bg bg-[#080808] border-b-[15px] border-[#ff4d00]"
      style={{
        backgroundImage: `url(${assetUrl("assets/backgrounds/trent_bg_steel_hunters.png")})`,
      }}
    >
      {/* Dark Carbon Overlay */}
      <div className="section-overlay-navy pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#f4f4f5] tracking-tight mb-4">
            TECHNICAL SKILLS
          </h2>
          <div className="w-44 h-3 bg-[#ff4d00] mb-6" />

          <p className="text-base sm:text-xl text-[#a1a1aa] max-w-3xl leading-relaxed font-normal">
            Directly demonstrable competencies backed by commercial internships at Cyrus 365 and Aicade, hackathon victories, and playable Unreal Engine C++ prototypes. Zero arbitrary percentages.
          </p>
        </div>

        {/* 4 Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="p-6 sm:p-8 bg-[#101012] border-2 border-[#27272a] hover:border-[#ff4d00] rounded-lg transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-[#27272a]">
                  <div className="p-2.5 bg-[#1a1a1e] border border-[rgba(255,255,255,0.10)] rounded-md">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-black text-[#f4f4f5] uppercase tracking-tight">
                      {category.title}
                    </h3>
                    <span className="text-xs text-[#a1a1aa] font-medium">{category.description}</span>
                  </div>
                </div>

                {/* Skills Tag List */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 bg-[#080808] border border-[#27272a] hover:border-[#ff4d00]/60 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        {skill.highlight && (
                          <span className="w-2 h-2 rounded-full bg-[#ff4d00] shadow-[0_0_6px_#ff4d00]" />
                        )}
                        <span
                          className={`text-xs sm:text-sm font-bold ${
                            skill.highlight ? "text-[#ff4d00]" : "text-[#f4f4f5]"
                          }`}
                        >
                          {skill.name}
                        </span>
                      </div>
                      {skill.context && (
                        <span className="text-[11px] text-[#a1a1aa] sm:text-right font-medium">
                          {skill.context}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Evidence Footer */}
              <div className="mt-6 pt-4 border-t border-[#27272a] flex items-center justify-between text-xs font-bold text-[#a1a1aa]">
                <span className="uppercase tracking-wider">VERIFIED IN PRODUCTION:</span>
                <span className="text-[#ff7700]">C++ CODE &amp; REPOSITORIES</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
