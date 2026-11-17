import { useEffect, useState } from "react";
import { Check, Copy, ExternalLink, Gamepad2, Play, Video, X } from "lucide-react";
import { ProjectItem } from "../data/portfolioData";

interface ProjectDetailDrawerProps {
  project: ProjectItem;
  isOpen?: boolean;
  onClose: () => void;
  onPlayPhaser?: () => void;
  onOpenPhaserGame?: () => void;
}

export default function ProjectDetailDrawer({
  project,
  onClose,
  onPlayPhaser,
  onOpenPhaserGame,
}: ProjectDetailDrawerProps) {
  const [copied, setCopied] = useState(false);
  const [selectedMediaIdx, setSelectedMediaIdx] = useState(0);

  const handlePlayPhaser = onPlayPhaser || onOpenPhaserGame;

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
        className="relative w-full max-w-5xl bg-[#172a3f] border-4 border-[#ff6123] rounded-lg shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-4 bg-[#131f2d] border-b-2 border-[#20354b]">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-[#ff6123] rounded-sm" />
            <div>
              <span className="text-[11px] font-bold text-[#ff9921] uppercase tracking-wider block">
                {project.engine} // {project.type}
              </span>
              <h3 id="modal-title" className="font-display text-lg sm:text-2xl font-black text-[#fafaf9] uppercase">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {project.links.playableEmbed && handlePlayPhaser && (
              <button
                onClick={handlePlayPhaser}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold uppercase text-[#172a3f] bg-[#ff6123] hover:bg-[#ff8547] rounded transition-all cursor-pointer"
              >
                <Gamepad2 size={15} />
                <span>PLAY WEBGL BUILD</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 text-[#b0c4de] hover:text-[#fafaf9] hover:bg-[#20354b] border border-[#20354b] rounded transition-colors cursor-pointer"
              aria-label="Close project details"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-8 text-sm">
          
          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 bg-[#131f2d] border border-[#20354b] rounded">
                <span className="block font-display text-sm sm:text-base font-black text-[#ff6123] truncate">
                  {m.value}
                </span>
                <span className="text-[10px] text-[#b0c4de] uppercase font-bold tracking-wider">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* MEDIA FIRST: VISUAL EVIDENCE, GAMEPLAY REEL & SCREENSHOTS AT TOP   */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <div className="p-4 sm:p-6 bg-[#131f2d] border border-[#20354b] rounded-lg">
            <h4 className="font-display text-xs uppercase font-black text-[#ff6123] tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff6123]" /> 01 // GAMEPLAY &amp; SYSTEM MEDIA REEL
            </h4>

            {/* Main Active Media Viewport */}
            <div className="relative aspect-[16/9] w-full bg-black rounded overflow-hidden border border-[#20354b] mb-4">
              {activeMedia?.type === "video" ? (
                <video
                  controls
                  autoPlay
                  muted
                  playsInline
                  src={activeMedia.url}
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={activeMedia?.url}
                  alt={activeMedia?.title || project.title}
                  className="w-full h-full object-contain bg-black"
                />
              )}
            </div>

            {/* Active Media Caption */}
            {activeMedia && (
              <div className="flex items-center justify-between gap-4 p-3 bg-[#172a3f] border border-[#20354b] rounded mb-4">
                <div>
                  <h5 className="font-bold text-sm text-[#fafaf9]">{activeMedia.title}</h5>
                  <p className="text-xs text-[#b0c4de]">{activeMedia.caption}</p>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#ff9921] bg-[#20354b] rounded shrink-0">
                  {activeMedia.type === "video" ? "VIDEO" : "SCREENSHOT"}
                </span>
              </div>
            )}

            {/* Media Thumbnails Filmstrip */}
            {project.gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {project.gallery.map((media, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedMediaIdx(idx)}
                    className={`relative w-24 h-16 sm:w-28 sm:h-18 shrink-0 rounded overflow-hidden border-2 transition-all cursor-pointer ${
                      selectedMediaIdx === idx
                        ? "border-[#ff6123] scale-105 shadow-md"
                        : "border-[#20354b] opacity-60 hover:opacity-100"
                    }`}
                  >
                    {media.type === "video" ? (
                      <div className="w-full h-full bg-[#20354b] flex items-center justify-center">
                        <Video size={18} className="text-[#ff6123]" />
                      </div>
                    ) : (
                      <img
                        src={media.url}
                        alt={media.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SECTION 02: PROJECT OVERVIEW & SCOPE                                */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <div className="p-4 sm:p-6 bg-[#131f2d] border border-[#20354b] rounded-lg">
            <h4 className="font-display text-xs uppercase font-black text-[#ff6123] tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff6123]" /> 02 // PROJECT OVERVIEW &amp; SCOPE
            </h4>
            <p className="text-[#fafaf9] text-sm sm:text-base leading-relaxed mb-4">
              {project.overview.summary}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 bg-[#172a3f] border border-[#20354b] rounded text-xs">
              <div>
                <span className="text-[#b0c4de] block text-[10px] uppercase font-bold">Role</span>
                <strong className="text-[#fafaf9]">{project.role}</strong>
              </div>
              <div>
                <span className="text-[#b0c4de] block text-[10px] uppercase font-bold">Period</span>
                <strong className="text-[#fafaf9]">{project.period}</strong>
              </div>
              <div>
                <span className="text-[#b0c4de] block text-[10px] uppercase font-bold">Platform</span>
                <strong className="text-[#fafaf9]">{project.overview.platform}</strong>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SECTION 03: PERSONAL ENGINEERING CONTRIBUTIONS                     */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <div className="p-4 sm:p-6 bg-[#131f2d] border border-[#20354b] rounded-lg">
            <h4 className="font-display text-xs uppercase font-black text-[#ff6123] tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff6123]" /> 03 // PERSONAL ENGINEERING CONTRIBUTIONS
            </h4>
            <div className="space-y-3">
              {project.contributions.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 bg-[#172a3f] border border-[#20354b] rounded"
                >
                  <span className="font-display text-xs text-[#ff6123] font-black mt-0.5 shrink-0">
                    #{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-[#fafaf9] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SECTION 04: ARCHITECTURE & C++ CODE BREAKDOWN                      */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <div className="p-4 sm:p-6 bg-[#131f2d] border border-[#20354b] rounded-lg">
            <h4 className="font-display text-xs uppercase font-black text-[#ff6123] tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff6123]" /> 04 // ARCHITECTURAL BREAKDOWN &amp; CODE SNIPPET
            </h4>
            <p className="text-xs sm:text-sm text-[#b0c4de] leading-relaxed mb-4">
              {project.technicalBreakdown.architecture}
            </p>

            <div className="relative bg-[#0d1722] border border-[#20354b] rounded overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#172a3f] border-b border-[#20354b]">
                <span className="text-xs font-bold text-[#fafaf9]">
                  {project.technicalBreakdown.codeSnippetTitle}
                </span>
                <button
                  onClick={copyCode}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold uppercase text-[#ff6123] hover:text-white bg-[#20354b] hover:bg-[#ff6123] rounded transition-colors cursor-pointer"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? "COPIED" : "COPY CODE"}</span>
                </button>
              </div>
              <pre className="p-4 text-xs font-mono text-[#b0c4de] overflow-x-auto leading-relaxed">
                <code>{project.technicalBreakdown.codeSnippet}</code>
              </pre>
            </div>
          </div>

          {/* Links & Repository Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#20354b]">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 font-display text-xs uppercase font-black text-white bg-[#ff6123] hover:bg-[#ff8547] rounded shadow-sm transition-all"
              >
                <span>VIEW GITHUB REPOSITORY</span>
                <ExternalLink size={14} />
              </a>
            )}

            {project.links.build && (
              <a
                href={project.links.build}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 font-display text-xs uppercase font-black text-[#fafaf9] border border-[#ff9921] bg-[#20354b] hover:bg-[#ff9921] hover:text-[#172a3f] rounded transition-all"
              >
                <span>DOWNLOAD STANDALONE BUILD</span>
                <ExternalLink size={14} />
              </a>
            )}

            {project.links.playableEmbed && handlePlayPhaser && (
              <button
                onClick={handlePlayPhaser}
                className="inline-flex items-center gap-1.5 px-4 py-2 font-display text-xs uppercase font-black text-white bg-[#ff6123] hover:bg-[#ff8547] rounded shadow-sm transition-all cursor-pointer"
              >
                <Gamepad2 size={14} />
                <span>LAUNCH WEBGL PLAYABLE DEMO</span>
              </button>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#131f2d] border-t border-[#20354b] flex items-center justify-between">
          <span className="text-xs text-[#b0c4de]">Press ESC to close</span>
          <button
            onClick={onClose}
            className="px-5 py-2 font-display text-xs uppercase font-black text-white bg-[#ff6123] hover:bg-[#ff8547] rounded transition-colors cursor-pointer"
          >
            CLOSE BREAKDOWN
          </button>
        </div>
      </div>
    </div>
  );
}
