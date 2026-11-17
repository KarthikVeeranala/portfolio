import { useEffect, useState } from "react";
import { Gamepad2, Maximize2, X } from "lucide-react";
import { assetUrl } from "../data/portfolioData";

interface PhaserGameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PhaserGameModal({ isOpen, onClose }: PhaserGameModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="game-modal-title"
    >
      <div
        className={`relative w-full ${isFullscreen ? "max-w-full h-full" : "max-w-5xl h-[88vh]"} bg-[#0e1414] border border-[#16d6bd]/40 rounded-sm shadow-2xl overflow-hidden my-auto flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#090d0d] border-b border-[#d5e3de]/15">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 bg-[#16d6bd] shadow-[0_0_8px_#16d6bd]" />
            <div>
              <h3 id="game-modal-title" className="text-sm sm:text-base font-mono font-bold text-[#f0f2ed]">
                CITY OF AETHEL // PLAYABLE BUILD (PHASER 3 &amp; MATTER.JS)
              </h3>
              <span className="text-[10px] font-mono text-[#77847f]">
                IGDC 2025 SHOWCASE SELECTION // AICADE INTERNSHIP
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 text-[#77847f] hover:text-[#f0f2ed] border border-[#d5e3de]/15 rounded-sm transition-colors cursor-pointer"
              aria-label={isFullscreen ? "Exit fullscreen" : "Toggle fullscreen"}
            >
              <Maximize2 size={16} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#77847f] hover:text-[#f0f2ed] hover:bg-[#16d6bd]/10 border border-[#d5e3de]/15 rounded-sm transition-colors cursor-pointer"
              aria-label="Close game modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Game Iframe Container */}
        <div className="relative flex-1 bg-black overflow-hidden flex items-center justify-center">
          <iframe
            src={assetUrl("aicade/city_of_aethel/index.html")}
            title="City of Aethel Playable WebGL Game"
            className="w-full h-full border-0"
            allow="autoplay; fullscreen"
          />
        </div>

        {/* Controls Guide Footer */}
        <div className="px-4 py-2.5 bg-[#090d0d] border-t border-[#d5e3de]/15 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-[#77847f]">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <span><strong className="text-[#16d6bd]">MOVE:</strong> A/D or Arrow Keys</span>
            <span><strong className="text-[#16d6bd]">JUMP:</strong> W or Space</span>
            <span><strong className="text-[#16d6bd]">ATTACK (5-HIT COMBO):</strong> J / Z</span>
            <span><strong className="text-[#16d6bd]">DODGE (180ms i-FRAME):</strong> K / X</span>
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1 text-xs text-[#090d0d] bg-[#16d6bd] hover:bg-[#16d6bd]/90 rounded-sm font-semibold cursor-pointer"
          >
            EXIT GAME
          </button>
        </div>
      </div>
    </div>
  );
}
