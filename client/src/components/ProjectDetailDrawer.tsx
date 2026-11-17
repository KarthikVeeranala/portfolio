import { useEffect, useState } from "react";
import { Check, Copy, ExternalLink, Gamepad2, Play, Video, X } from "lucide-react";
import { ProjectItem } from "../data/portfolioData";

interface ProjectDetailDrawerProps {
  project: ProjectItem;
  onClose: () => void;
  onOpenPhaserGame?: () => void;
}

export default function ProjectDetailDrawer({ project, onClose, onOpenPhaserGame }: ProjectDetailDrawerProps) {
  const [copied, setCopied] = useState(false);
  const [selectedMediaIdx, setSelectedMediaIdx] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const copyCode = () => {
    navigator.clipboard.writeText(project.technicalBreakdown.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activeMedia = project.gallery[selectedMediaIdx] || project.gallery[0];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-5xl bg-[#0e1414] border border-[#16d6bd]/40 rounded-sm shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-4 bg-[#090d0d] border-b border-[#d5e3de]/15">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#16d6bd] shadow-[0_0_8px_#16d6bd]" />
            <div>
              <span className="text-[10px] sm:text-xs font-mono text-[#16d6bd] uppercase tracking-wider block">
                {project.engine} // {project.type}
              </span>
              <h3 id="modal-title" className="text-base sm:text-xl font-sans font-bold text-[#f0f2ed]">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {project.links.playableEmbed && onOpenPhaserGame && (
              <button
                onClick={onOpenPhaserGame}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-[#090d0d] bg-[#16d6bd] hover:bg-[#16d6bd]/90 rounded-sm cursor-pointer"
              >
                <Gamepad2 size={14} />
                <span>PLAY WEBGL BUILD</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 text-[#77847f] hover:text-[#f0f2ed] hover:bg-[#16d6bd]/10 border border-[#d5e3de]/15 rounded-sm transition-colors cursor-pointer"
              aria-label="Close project details"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-8 text-sm">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 bg-[#121a19] border border-[#d5e3de]/10 rounded-sm font-mono">
                <span className="block text-xs sm:text-sm font-bold text-[#16d6bd] truncate">{m.value}</span>
                <span className="text-[10px] text-[#77847f] uppercase">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Section 1: Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase text-[#16d6bd] tracking-widest mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#16d6bd]" /> 01 // Project Overview &amp; Scope
            </h4>
            <p className="text-[#dbe2df] text-sm sm:text-base leading-relaxed mb-4">
              {project.overview.summary}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-3 bg-[#121a19] border border-[#d5e3de]/10 rounded-sm font-mono text-xs">
              <div><span className="text-[#77847f]">Role:</span> <strong className="text-[#f0f2ed]">{project.role}</strong></div>
              <div><span className="text-[#77847f]">Period:</span> <strong className="text-[#f0f2ed]">{project.period}</strong></div>
              <div><span className="text-[#77847f]">Platform:</span> <strong className="text-[#f0f2ed]">{project.overview.platform}</strong></div>
            </div>
          </div>

          {/* Section 2: Personal Contributions */}
          <div>
            <h4 className="text-xs font-mono uppercase text-[#16d6bd] tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#16d6bd]" /> 02 // Personal Engineering Contributions
            </h4>
            <div className="space-y-2">
              {project.contributions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-[#121a19] border border-[#d5e3de]/10 rounded-sm">
                  <span className="text-xs font-mono text-[#16d6bd] font-bold mt-0.5">#{idx + 1}</span>
                  <p className="text-xs sm:text-sm text-[#dbe2df] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Technical Breakdown & C++ Snippet */}
          <div>
            <h4 className="text-xs font-mono uppercase text-[#16d6bd] tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#16d6bd]" /> 03 // Technical Architecture &amp; Implementation
            </h4>
            <div className="p-4 bg-[#121a19] border border-[#d5e3de]/10 rounded-sm space-y-3 mb-4">
              <div>
                <strong className="text-xs font-mono text-[#16d6bd] uppercase block mb-1">Architecture &amp; System Flow</strong>
                <p className="text-xs sm:text-sm text-[#dbe2df] leading-relaxed">{project.technicalBreakdown.architecture}</p>
              </div>
              <div className="pt-2 border-t border-[#d5e3de]/10">
                <strong className="text-xs font-mono text-[#16d6bd] uppercase block mb-1">Technical Challenge &amp; Solution</strong>
                <p className="text-xs sm:text-sm text-[#dbe2df] leading-relaxed">{project.technicalBreakdown.challenges}</p>
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="border border-[#16d6bd]/30 rounded-sm overflow-hidden bg-[#090d0d]">
              <div className="flex items-center justify-between px-4 py-2 bg-[#121a19] border-b border-[#d5e3de]/15">
                <span className="text-xs font-mono text-[#16d6bd] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#16d6bd]/80" />
                  {project.technicalBreakdown.codeSnippetTitle}
                </span>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-[#77847f] hover:text-[#f0f2ed] border border-[#d5e3de]/15 hover:border-[#16d6bd] rounded-sm transition-colors cursor-pointer"
                >
                  {copied ? <Check size={12} className="text-[#16d6bd]" /> : <Copy size={12} />}
                  <span>{copied ? "COPIED" : "COPY CODE"}</span>
                </button>
              </div>
              <pre className="p-4 text-xs font-mono text-[#dbe2df] overflow-x-auto leading-relaxed max-h-80 bg-[#090d0d]">
                <code>{project.technicalBreakdown.codeSnippet}</code>
              </pre>
            </div>
          </div>

          {/* Section 4: Media Gallery & Evidence */}
          <div>
            <h4 className="text-xs font-mono uppercase text-[#16d6bd] tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#16d6bd]" /> 04 // Gameplay Footage &amp; Editor Evidence
            </h4>

            {/* Primary Selected Media Display */}
            <div className="border border-[#d5e3de]/15 rounded-sm overflow-hidden bg-black mb-3">
              {activeMedia.type === "video" ? (
                <div className="relative aspect-video bg-black flex items-center justify-center">
                  <video
                    src={activeMedia.url}
                    controls
                    playsInline
                    className="w-full h-full object-contain"
                    title={activeMedia.title}
                  />
                </div>
              ) : (
                <div className="relative aspect-video bg-black flex items-center justify-center">
                  <img
                    src={activeMedia.url}
                    alt={activeMedia.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-3 bg-[#121a19] border-t border-[#d5e3de]/10 flex items-center justify-between">
                <div>
                  <strong className="text-xs font-mono text-[#f0f2ed] block">{activeMedia.title}</strong>
                  <span className="text-[11px] text-[#77847f]">{activeMedia.caption}</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 border border-[#16d6bd]/30 text-[#16d6bd] uppercase">
                  {activeMedia.type}
                </span>
              </div>
            </div>

            {/* Gallery Thumbnails Carousel / Strip */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {project.gallery.map((media, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedMediaIdx(idx)}
                  className={`relative aspect-video rounded-sm overflow-hidden border transition-all cursor-pointer ${selectedMediaIdx === idx ? "border-[#16d6bd] ring-1 ring-[#16d6bd]" : "border-[#d5e3de]/15 hover:border-[#d5e3de]/40 opacity-75 hover:opacity-100"}`}
                  aria-label={`View slide ${idx + 1}: ${media.title}`}
                >
                  {media.type === "video" ? (
                    <div className="w-full h-full bg-[#121a19] flex flex-col items-center justify-center text-[#16d6bd]">
                      <Video size={16} />
                      <span className="text-[9px] font-mono mt-1">VIDEO</span>
                    </div>
                  ) : (
                    <img src={media.url} alt={media.title} className="w-full h-full object-cover" loading="lazy" />
                  )}
                  {selectedMediaIdx === idx && (
                    <div className="absolute inset-0 bg-[#16d6bd]/10 pointer-events-none" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Section 5: Verified Links & Repository Notice */}
          <div className="p-4 bg-[#121a19] border border-[#d5e3de]/15 rounded-sm flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="max-w-xl">
              <span className="text-[#77847f] block mb-1">VERIFIED CODE &amp; BUILD STATUS:</span>
              <p className="text-[#dbe2df] text-[11px] leading-relaxed">{project.links.note}</p>
            </div>
            <div className="flex items-center gap-2">
              {project.links.playableEmbed && onOpenPhaserGame && (
                <button
                  onClick={onOpenPhaserGame}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#090d0d] bg-[#16d6bd] hover:bg-[#16d6bd]/90 rounded-sm cursor-pointer shadow-md"
                >
                  <Gamepad2 size={14} />
                  <span>PLAY DEMO (WEBGL)</span>
                </button>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#f0f2ed] border border-[#d5e3de]/20 bg-[#0e1414] hover:border-[#16d6bd] hover:text-[#16d6bd] rounded-sm transition-colors"
                >
                  <span>GITHUB REPO</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3 bg-[#090d0d] border-t border-[#d5e3de]/15 font-mono text-xs">
          <span className="text-[#77847f]">PRESS ESC TO CLOSE</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs text-[#090d0d] bg-[#16d6bd] hover:bg-[#16d6bd]/90 rounded-sm font-semibold cursor-pointer"
          >
            CLOSE BREAKDOWN
          </button>
        </div>
      </div>
    </div>
  );
}
