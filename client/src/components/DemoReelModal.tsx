import { useEffect, useRef, useState } from "react";
import { Maximize2, Minimize2, Pause, Play, Volume2, VolumeX, X } from "lucide-react";
import { assetUrl } from "../data/portfolioData";

interface DemoReelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CHAPTERS = [
  { time: 0, title: "00:00 — The Interlude (6-DOF Flight Combat)" },
  { time: 42, title: "00:42 — Cyrus 365 (Enterprise UE5 Harness)" },
  { time: 58, title: "00:58 — ByteOasis (Terminal Logic & Puzzles)" },
  { time: 86, title: "01:26 — Geek'O'Wars (Third-Person Cyber Survival)" },
  { time: 107, title: "01:47 — City of Aethel (2D Combat & Boss AI)" }
];

export default function DemoReelModal({ isOpen, onClose }: DemoReelModalProps) {
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loadError, setLoadError] = useState(false);

  const toggleFullscreen = async () => {
    const container = playerContainerRef.current;
    const video = videoRef.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
    try {
      if (!document.fullscreenElement) {
        if (container?.requestFullscreen) {
          await container.requestFullscreen();
        } else if (video?.requestFullscreen) {
          await video.requestFullscreen();
        } else if (video?.webkitEnterFullscreen) {
          video.webkitEnterFullscreen();
        }
      } else if (document.exitFullscreen) {
        await document.exitFullscreen();
      }
    } catch {
      // Fallback: try directly on the video element
      if (video?.requestFullscreen) {
        video.requestFullscreen().catch(() => {});
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !document.fullscreenElement) onClose();
      if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const jumpToChapter = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Determine currently active chapter index
  const activeChapterIdx = CHAPTERS.reduce((acc, ch, idx) => {
    return currentTime >= ch.time - 0.5 ? idx : acc;
  }, 0);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reel-modal-title"
      onClick={onClose}
    >
      <div
        ref={playerContainerRef}
        className={`relative w-full ${
          isFullscreen ? "max-w-none h-screen flex flex-col rounded-none border-0" : "max-w-4xl rounded-lg border-4 border-[#9e0b0b]"
        } bg-[#141416] shadow-2xl overflow-hidden my-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 bg-[#101012] border-b-2 border-[#27272a]">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 bg-[#9e0b0b] rounded-sm" />
            <h3 id="reel-modal-title" className="font-display text-sm sm:text-base font-black text-white uppercase">
              KARTHIK VEERANALA // GAME PROGRAMMER DEMO REEL (02:13)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#a1a1aa] hover:text-white hover:bg-[#27272a] border border-[#27272a] rounded transition-colors cursor-pointer shrink-0"
            aria-label="Close demo reel"
          >
            <X size={18} />
          </button>
        </div>

        {/* Video Player */}
        <div className={`relative ${isFullscreen ? "flex-1 min-h-0" : "aspect-video"} bg-black flex items-center justify-center overflow-hidden`}>
          {loadError ? (
            <div className="p-6 text-center text-xs text-white space-y-2">
              <p>Demo reel video could not be loaded directly in this browser session.</p>
              <a
                href={assetUrl("karthik_veeranala_demo_reel.mp4")}
                download="karthik_veeranala_demo_reel.mp4"
                className="inline-block px-4 py-2 bg-[#9e0b0b] hover:bg-[#bf1515] text-white font-bold rounded"
              >
                Download MP4 Directly
              </a>
            </div>
          ) : (
            <video
              ref={videoRef}
              src={assetUrl("karthik_veeranala_demo_reel.mp4")}
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onError={() => setLoadError(true)}
              onClick={togglePlay}
              onDoubleClick={toggleFullscreen}
              className="w-full h-full object-contain cursor-pointer"
            />
          )}

          {/* Big Play Overlay if paused */}
          {!isPlaying && !loadError && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 group cursor-pointer"
              aria-label="Play demo reel"
            >
              <span className="w-16 h-16 rounded-full bg-[#9e0b0b] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play size={28} className="fill-current ml-1" />
              </span>
            </button>
          )}
        </div>

        {/* Custom Controls Bar */}
        <div className="p-4 bg-[#101012] border-t border-[#27272a] space-y-3 text-xs">
          {/* Progress Seekbar */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold text-white min-w-[38px]">{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={duration || 133}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 h-1.5 bg-[#27272a] rounded-lg appearance-none cursor-pointer accent-[#9e0b0b]"
              aria-label="Seek video progress"
            />
            <span className="text-[11px] text-[#a1a1aa] min-w-[38px]">{formatTime(duration || 133)}</span>
          </div>

          {/* Buttons Row */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="px-4 py-2 bg-[#9e0b0b] hover:bg-[#bf1515] text-white font-bold rounded flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} className="fill-current" />}
                <span>{isPlaying ? "PAUSE" : "PLAY"}</span>
              </button>

              <button
                onClick={toggleMute}
                className="p-2 border border-[#27272a] bg-[#141416] text-[#a1a1aa] hover:text-white rounded cursor-pointer"
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-[#a1a1aa] hidden sm:inline">
                1080p60 H.264 // UNREAL ENGINE 5.7 &amp; UE4
              </span>
              <button
                onClick={toggleFullscreen}
                className="px-3 py-2 border border-[#27272a] hover:border-[#9e0b0b] bg-[#141416] hover:bg-[#9e0b0b] text-white font-bold rounded flex items-center gap-1.5 transition-colors cursor-pointer"
                aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
                title={isFullscreen ? "Exit Fullscreen (F)" : "Fullscreen (F)"}
              >
                {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                <span className="hidden xs:inline">{isFullscreen ? "EXIT FULL" : "FULLSCREEN"}</span>
              </button>
            </div>
          </div>

          {/* Chapter Quick Jump Buttons */}
          <div className="pt-2 border-t border-[#27272a] flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-bold text-[#a1a1aa] mr-1 uppercase">CHAPTERS:</span>
            {CHAPTERS.map((ch, idx) => {
              const isActive = idx === activeChapterIdx;
              return (
                <button
                  key={idx}
                  onClick={() => jumpToChapter(ch.time)}
                  className={`px-2.5 py-1 text-[11px] font-bold border rounded transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#9e0b0b] text-white border-[#9e0b0b]"
                      : "bg-[#141416] hover:bg-[#9e0b0b] text-[#d4d4d8] hover:text-white border-[#27272a]"
                  }`}
                >
                  {ch.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
