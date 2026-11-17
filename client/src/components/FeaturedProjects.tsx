import { useState } from "react";
import { ArrowUpRight, Gamepad2, Wrench, ShieldCheck, Cpu } from "lucide-react";
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
    <section
      id="projects"
      className="relative py-24 sm:py-32 bg-[#080808] border-b-[15px] border-[#9e0b0b]"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight mb-4">
            PROJECTS
          </h2>
          <div className="w-44 h-3 bg-[#9e0b0b] mb-6" />

          <p className="text-base sm:text-xl text-[#a1a1aa] max-w-3xl leading-relaxed font-normal">
            Production gameplay systems, automation tooling, and mechanics developed for Unreal Engine 5.7 and WebGL. Click any project to inspect its C++ code, architecture, and video evidence.
          </p>

          {/* Factual Highlights Bar (Corrected per user instructions) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#27272a]">
            <div className="p-4 bg-[#101012] border border-[#27272a] rounded-md shadow-md">
              <span className="block font-display text-2xl font-black text-white">2+ YEARS</span>
              <span className="text-xs text-[#a1a1aa] font-semibold uppercase tracking-wider">Unreal Engine &amp; C++</span>
            </div>
            <div className="p-4 bg-[#101012] border border-[#27272a] rounded-md shadow-md">
              <span className="block font-display text-2xl font-black text-white">4 PROJECTS</span>
              <span className="text-xs text-[#a1a1aa] font-semibold uppercase tracking-wider">Shipped &amp; Playable</span>
            </div>
            <div className="p-4 bg-[#101012] border border-[#27272a] rounded-md shadow-md">
              <span className="block font-display text-2xl font-black text-white">AUTOMATION PLUGIN</span>
              <span className="text-xs text-[#a1a1aa] font-semibold uppercase tracking-wider">Headless E2E Test Suite for UE5</span>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-8" role="tablist">
            {[
              { id: "all", label: "all projects" },
              { id: "unreal", label: "unreal engine" },
              { id: "tools", label: "tools & automation" },
              { id: "combat", label: "combat & mechanics" },
            ].map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeFilter === tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-bold uppercase rounded-md transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-[#9e0b0b] text-white shadow-md font-black"
                    : "bg-[#101012] text-[#a1a1aa] hover:text-white hover:bg-[#1a1a1e] border border-[#27272a]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Project Grid (2 cols on large screen, 1 col mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="group relative flex flex-col bg-[#101012] border-2 border-[#27272a] hover:border-[#9e0b0b] rounded-lg overflow-hidden transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              {/* 16:9 Thumbnail Header */}
              <div
                className="relative aspect-[16/9] w-full overflow-hidden bg-black cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.thumbnail}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#101012] via-transparent to-transparent opacity-90 pointer-events-none" />

                {/* Engine Badge */}
                <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 font-display text-xs uppercase font-black tracking-wider text-white bg-[#9e0b0b] rounded shadow-md">
                    {project.engine}
                  </span>
                  {project.award && (
                    <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white bg-[#080808]/90 border border-[#27272a] rounded backdrop-blur-sm">
                      {project.award}
                    </span>
                  )}
                </div>

                {/* Inspect Overlay Prompt */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 font-display text-xs font-black uppercase text-white bg-[#9e0b0b] rounded shadow-lg">
                    <span>INSPECT C++ BREAKDOWN</span>
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#d4d4d8] block mb-1">
                    {project.role}
                  </span>
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="font-display text-xl sm:text-2xl font-black uppercase text-white group-hover:text-[#e4e4e7] transition-colors cursor-pointer mb-3"
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Systems Built Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-bold text-[#f4f4f5] bg-[#1a1a1e] border border-[rgba(255,255,255,0.10)] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-[#27272a] flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 font-display text-xs uppercase font-black text-white bg-[#9e0b0b] hover:bg-[#bf1515] rounded transition-all shadow-sm cursor-pointer"
                  >
                    <span>INSPECT DETAILS</span>
                    <ArrowUpRight size={14} />
                  </button>

                  {project.slug === "city-of-aethel" && (
                    <button
                      onClick={onOpenPhaserGame}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold uppercase text-white border border-[#9e0b0b] bg-[#1a1a1e] hover:bg-[#9e0b0b] rounded transition-all cursor-pointer"
                    >
                      <Gamepad2 size={14} />
                      <span>PLAY WEBGL BUILD</span>
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Breakdown Drawer */}
      {selectedProject && (
        <ProjectDetailDrawer
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          onPlayPhaser={onOpenPhaserGame}
        />
      )}
    </section>
  );
}
