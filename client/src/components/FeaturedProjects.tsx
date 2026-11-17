import { useState } from "react";
import { ArrowUpRight, Code2, ExternalLink, Gamepad2, Layers } from "lucide-react";
import { PROJECTS, ProjectItem } from "../data/portfolioData";
import ProjectDetailDrawer from "./ProjectDetailDrawer";

interface FeaturedProjectsProps {
  onOpenPhaserGame: () => void;
}

export default function FeaturedProjects({ onOpenPhaserGame }: FeaturedProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "unreal") return p.category === "unreal" || p.engine.includes("Unreal");
    if (activeFilter === "tools") return p.category === "tools";
    if (activeFilter === "combat") return p.category === "combat";
    return true;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-[#d5e3de]/10 bg-[#090d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 border border-[#16d6bd]/30 bg-[#16d6bd]/5 rounded-sm">
              <span className="text-[11px] font-mono text-[#16d6bd] tracking-widest uppercase">
                01 // FEATURED PORTFOLIO
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#f0f2ed] tracking-tight">
              Featured Projects &amp; Systems
            </h2>
            <p className="text-sm sm:text-base text-[#77847f] mt-2 max-w-2xl font-mono">
              Unreal Engine 5/4 C++ architectures, 6-DOF physics, predictive math, and combat state machines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs" role="tablist">
            {[
              { id: "all", label: "ALL PROJECTS (05)" },
              { id: "unreal", label: "UNREAL ENGINE (04)" },
              { id: "tools", label: "TOOLS & PIPELINES (01)" },
              { id: "combat", label: "COMBAT & AI (02)" }
            ].map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeFilter === tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 rounded-sm transition-all cursor-pointer ${activeFilter === tab.id ? "bg-[#16d6bd] text-[#090d0d] font-bold shadow-[0_0_12px_rgba(22,214,189,0.3)]" : "bg-[#121a19] text-[#77847f] hover:text-[#f0f2ed] border border-[#d5e3de]/10"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Project Grid (2 cols desktop, 1 col mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="group relative flex flex-col bg-[#0e1414] border border-[#d5e3de]/15 hover:border-[#16d6bd]/60 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#16d6bd]/5"
            >
              {/* Card Media Header */}
              <div
                className="relative aspect-[16/9] w-full overflow-hidden bg-black cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.thumbnail}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1414] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Engine Badge & Award Tag */}
                <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 text-[11px] font-mono font-bold tracking-wider text-[#090d0d] bg-[#16d6bd] rounded-sm shadow-md">
                    {project.engine}
                  </span>
                  {project.award && (
                    <span className="px-2.5 py-1 text-[10px] font-mono font-semibold tracking-wider text-[#f0f2ed] bg-[#121a19]/90 border border-[#16d6bd]/30 rounded-sm backdrop-blur-sm">
                      {project.award}
                    </span>
                  )}
                </div>

                {/* Inspect Overlay Trigger */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-[#090d0d] bg-[#16d6bd] rounded-sm shadow-lg">
                    <span>INSPECT C++ BREAKDOWN</span>
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#77847f] mb-2">
                    <span>{project.type}</span>
                    <span>{project.period}</span>
                  </div>

                  <h3
                    className="text-xl sm:text-2xl font-sans font-bold text-[#f0f2ed] group-hover:text-[#16d6bd] transition-colors cursor-pointer mb-3"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#dbe2df]/80 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key Systems Bullets */}
                  <div className="space-y-1.5 mb-5">
                    <span className="text-[11px] font-mono text-[#16d6bd] uppercase tracking-wider block">
                      CORE SYSTEMS IMPLEMENTED:
                    </span>
                    {project.systems.slice(0, 3).map((sys, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#dbe2df]/90 font-mono">
                        <span className="text-[#16d6bd] font-bold">›</span>
                        <span className="leading-snug">{sys}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions & Tags */}
                <div className="pt-4 border-t border-[#d5e3de]/10 flex flex-wrap items-center justify-between gap-3">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono text-[#77847f] bg-[#121a19] border border-[#d5e3de]/10 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {project.links.playableEmbed && (
                      <button
                        onClick={onOpenPhaserGame}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-[#090d0d] bg-[#16d6bd] hover:bg-[#16d6bd]/90 rounded-sm transition-colors cursor-pointer"
                        title="Play City of Aethel in Browser"
                      >
                        <Gamepad2 size={13} />
                        <span>PLAY DEMO</span>
                      </button>
                    )}

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-[#f0f2ed] border border-[#d5e3de]/20 bg-[#121a19] hover:border-[#16d6bd] hover:text-[#16d6bd] rounded-sm transition-colors cursor-pointer"
                    >
                      <Code2 size={13} />
                      <span>DETAILS</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Expandable Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailDrawer
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenPhaserGame={() => {
            setSelectedProject(null);
            onOpenPhaserGame();
          }}
        />
      )}
    </section>
  );
}
