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
        className={`relative w-full ${isFullscreen ? "max-w-full h-full" : "max-w-5xl h-[88vh]"} bg-[#141416] border-4 border-[#9e0b0b] rounded-lg shadow-2xl overflow-hidden my-auto flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#101012] border-b-2 border-[#27272a]">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 bg-[#9e0b0b] rounded-sm" />
            <div>
              <h3 id="game-modal-title" className="font-display text-sm sm:text-base font-black text-white uppercase">
                CITY OF AETHEL // PLAYABLE BUILD (PHASER 3 &amp; MATTER.JS)
              </h3>
              <span className="text-[10px] text-[#a1a1aa] font-bold uppercase">
                IGDC 2025 SHOWCASE SELECTION // AICADE INTERNSHIP
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 text-[#a1a1aa] hover:text-white border border-[#27272a] rounded transition-colors cursor-pointer"
              aria-label={isFullscreen ? "Exit fullscreen" : "Toggle fullscreen"}
            >
              <Maximize2 size={16} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#a1a1aa] hover:text-white hover:bg-[#27272a] border border-[#27272a] rounded transition-colors cursor-pointer"
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
        <div className="px-4 py-3 bg-[#101012] border-t border-[#27272a] flex flex-wrap items-center justify-between gap-3 text-xs text-[#a1a1aa]">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <span><strong className="text-white">MOVE:</strong> A/D or Arrow Keys</span>
            <span><strong className="text-white">JUMP:</strong> W or Space</span>
            <span><strong className="text-white">ATTACK (5-HIT COMBO):</strong> J / Z</span>
            <span><strong className="text-white">DODGE (180ms i-FRAME):</strong> K / X</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold uppercase text-white bg-[#9e0b0b] hover:bg-[#bf1515] rounded cursor-pointer"
          >
            EXIT GAME
          </button>
        </div>
      </div>
    </div>
  );
}
