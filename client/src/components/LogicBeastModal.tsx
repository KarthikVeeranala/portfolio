import { useEffect, useRef, useState } from "react";
import { RefreshCw, Shield, Swords, X } from "lucide-react";

interface LogicBeastModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LogicBeastModal({ isOpen, onClose }: LogicBeastModalProps) {
  const [bossHp, setBossHp] = useState(100);
  const [playerHp, setPlayerHp] = useState(100);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [message, setMessage] = useState("WATCH THE TELEGRAPH BAR — PARRY IN THE GOLD ZONE!");
  const [bossState, setBossState] = useState<"idle" | "telegraph" | "lunging" | "stunned" | "hurt" | "dead">("idle");
  const [telegraphProgress, setTelegraphProgress] = useState(0);
  const [isParryWindow, setIsParryWindow] = useState(false);

  const bossStateRef = useRef(bossState);
  bossStateRef.current = bossState;
  const isParryWindowRef = useRef(isParryWindow);
  isParryWindowRef.current = isParryWindow;
  const isAlive = bossHp > 0 && playerHp > 0;
  const isEnraged = bossHp < 50 && bossHp > 0;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === " " || e.key.toLowerCase() === "p") {
        e.preventDefault();
        handleParry();
      }
      if (e.key.toLowerCase() === "a") {
        e.preventDefault();
        handleAttack();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Boss Attack Cycle
  useEffect(() => {
    if (!isOpen || !isAlive) return;

    let progressInterval: number | null = null;
    let lungeTimeout: number | null = null;
    let returnTimeout: number | null = null;

    const attackTimer = window.setInterval(() => {
      if (bossStateRef.current !== "idle") return;

      setBossState("telegraph");
      let p = 0;
      const tickMs = isEnraged ? 45 : 55;

      progressInterval = window.setInterval(() => {
        p += 2.5;
        setTelegraphProgress(p);

        // Gold parry window between 68% and 92%
        if (p >= 68 && p <= 92) {
          setIsParryWindow(true);
        } else {
          setIsParryWindow(false);
        }

        if (p >= 100) {
          clearInterval(progressInterval!);
          setIsParryWindow(false);
          setTelegraphProgress(0);

          // Boss Lunges forward
          setBossState("lunging");
          setMessage("⚠️ BOSS LUNGES FORWARD!");

          lungeTimeout = window.setTimeout(() => {
            if (bossStateRef.current === "lunging") {
              const dmg = isEnraged ? 22 : 14;
              setPlayerHp((prev) => Math.max(0, prev - dmg));
              setCombo(0);
              setMessage(`💥 HIT! Took -${dmg} damage. Combo broken!`);

              returnTimeout = window.setTimeout(() => {
                if (bossStateRef.current === "lunging") {
                  setBossState("idle");
                }
              }, 600);
            }
          }, 350);
        }
      }, tickMs);
    }, isEnraged ? 2200 : 3000);

    return () => {
      window.clearInterval(attackTimer);
      if (progressInterval) window.clearInterval(progressInterval);
      if (lungeTimeout) window.clearTimeout(lungeTimeout);
      if (returnTimeout) window.clearTimeout(returnTimeout);
    };
  }, [isOpen, isAlive, isEnraged]);

  const handleParry = () => {
    if (!isAlive) return;

    if (isParryWindowRef.current && bossStateRef.current === "telegraph") {
      // Successful Parry
      setBossState("stunned");
      setIsParryWindow(false);
      setTelegraphProgress(0);
      const newCombo = combo + 1;
      setCombo(newCombo);
      const points = 250 * newCombo;
      setScore((s) => s + points);
      setMessage(`⚡ PERFECT PARRY! Boss STUNNED! Land attacks now! (+${points} pts)`);

      // Boss stays stunned for 3.5 seconds
      window.setTimeout(() => {
        if (bossStateRef.current === "stunned") {
          setBossState("idle");
          setMessage("Boss recovered. Prepare your timing!");
        }
      }, 3500);
    } else {
      // Missed Parry
      setMessage("❌ MISTIMED PARRY! Must parry inside the GOLD ZONE!");
    }
  };

  const handleAttack = () => {
    if (!isAlive) return;

    if (bossState === "stunned") {
      // Critical damage while stunned
      const dmg = 25;
      const points = 150 * (combo + 1);
      setBossHp((hp) => {
        const next = Math.max(0, hp - dmg);
        if (next === 0) {
          setBossState("dead");
          setMessage("🏆 VICTORY! LOGIC BEAST DEFEATED!");
        }
        return next;
      });
      setScore((s) => s + points);
      setMessage(`⚔️ CRITICAL STRIKE! Dealt ${dmg} damage to stunned boss!`);
    } else {
      // Normal attack
      const dmg = 8;
      setBossHp((hp) => {
        const next = Math.max(0, hp - dmg);
        if (next === 0) {
          setBossState("dead");
          setMessage("🏆 VICTORY! LOGIC BEAST DEFEATED!");
        }
        return next;
      });
      setScore((s) => s + 50);
      setMessage(`⚔️ Attack landed (-${dmg} HP). Watch for telegraphs!`);
    }
  };

  const handleReset = () => {
    setBossHp(100);
    setPlayerHp(100);
    setScore(0);
    setCombo(0);
    setBossState("idle");
    setTelegraphProgress(0);
    setIsParryWindow(false);
    setMessage("RESET: WATCH THE TELEGRAPH BAR — PARRY IN THE GOLD ZONE!");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="beast-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0e1414] border border-[#16d6bd]/40 rounded-sm shadow-2xl overflow-hidden my-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#090d0d] border-b border-[#d5e3de]/15">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#16d6bd] shadow-[0_0_8px_#16d6bd]" />
            <h3 id="beast-modal-title" className="text-sm sm:text-base font-mono font-bold text-[#f0f2ed]">
              COMBAT PROTOCOL // BREAK THE {isEnraged ? "ENRAGED BEAST" : "LOGIC BEAST"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#77847f] hover:text-[#f0f2ed] border border-[#d5e3de]/15 rounded-sm transition-colors cursor-pointer"
            aria-label="Close combat challenge"
          >
            <X size={18} />
          </button>
        </div>

        {/* Game Arena Screen */}
        <div className="p-4 sm:p-6 bg-[#090d0d] space-y-4">
          {/* Health Bars */}
          <div className="grid grid-cols-2 gap-3 font-mono text-xs">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-[#16d6bd] font-bold">PLAYER INTEGRITY</span>
                <span>{playerHp}%</span>
              </div>
              <div className="h-2.5 bg-[#121a19] rounded-sm overflow-hidden border border-[#d5e3de]/15">
                <div
                  className="h-full bg-[#16d6bd] transition-all duration-200"
                  style={{ width: `${playerHp}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className={`font-bold ${isEnraged ? "text-[#c26f53]" : "text-[#dbe2df]"}`}>
                  {isEnraged ? "ENRAGED BEAST" : "LOGIC BEAST"}
                </span>
                <span>{bossHp}%</span>
              </div>
              <div className="h-2.5 bg-[#121a19] rounded-sm overflow-hidden border border-[#d5e3de]/15">
                <div
                  className={`h-full transition-all duration-200 ${isEnraged ? "bg-[#c26f53]" : "bg-red-500"}`}
                  style={{ width: `${bossHp}%` }}
                />
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex items-center justify-between p-2.5 bg-[#121a19] border border-[#d5e3de]/10 rounded-sm font-mono text-xs">
            <div>SCORE: <strong className="text-[#16d6bd]">{score}</strong></div>
            <div>COMBO MULTIPLIER: <strong className="text-[#f0f2ed]">{combo}x</strong></div>
            <div>STATE: <span className="text-[#16d6bd] uppercase font-bold">{bossState}</span></div>
          </div>

          {/* Combat Visual Stage */}
          <div className="relative h-44 bg-[#090d0d] border border-[#d5e3de]/15 rounded-sm flex items-center justify-center overflow-hidden">
            <div className="text-center font-mono">
              {bossState === "dead" ? (
                <div className="text-xl sm:text-2xl font-bold text-[#16d6bd] animate-bounce">
                  🏆 LOGIC BEAST PURGED!
                </div>
              ) : playerHp === 0 ? (
                <div className="text-xl sm:text-2xl font-bold text-[#c26f53]">
                  💀 SYSTEM INTEGRITY ZERO
                </div>
              ) : bossState === "stunned" ? (
                <div className="text-lg sm:text-xl font-bold text-[#f0f2ed] animate-pulse">
                  ⭐ STUNNED! ATTACK RAPIDLY! ⭐
                </div>
              ) : bossState === "lunging" ? (
                <div className="text-xl font-bold text-[#c26f53] animate-ping">
                  💥 CLAW STRIKE! 💥
                </div>
              ) : bossState === "telegraph" ? (
                <div className="text-sm sm:text-base font-bold text-[#16d6bd]">
                  {isParryWindow ? "⚡ GOLDEN PARRY ZONE NOW! ⚡" : "CHARGING ATTACK..."}
                </div>
              ) : (
                <div className="text-sm text-[#77847f]">
                  [LOGIC BEAST IDLE — CALCULATING STRIKE VECTOR]
                </div>
              )}
            </div>

            {/* Telegraph Bar at Bottom of Stage */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#121a19] border-t border-[#d5e3de]/15">
              {/* Golden Parry Window Highlight (68% to 92%) */}
              <div
                className="absolute top-0 bottom-0 bg-amber-400/35 border-x-2 border-amber-400 z-10"
                style={{ left: "68%", width: "24%" }}
                title="Golden Parry Zone"
              />
              {/* Progress Indicator */}
              <div
                className={`h-full transition-all duration-75 ${isParryWindow ? "bg-amber-400" : "bg-[#16d6bd]"}`}
                style={{ width: `${telegraphProgress}%` }}
              />
            </div>
          </div>

          {/* Message Prompt */}
          <div className="p-2.5 bg-[#121a19] border border-[#d5e3de]/10 rounded-sm font-mono text-xs text-center text-[#dbe2df]">
            {message}
          </div>

          {/* Interactive Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleParry}
              disabled={!isAlive}
              className={`px-5 py-3 text-xs sm:text-sm font-mono font-bold tracking-wider rounded-sm flex items-center gap-2 cursor-pointer transition-all shadow-md ${isParryWindow ? "bg-amber-400 text-[#090d0d] animate-pulse scale-105" : "bg-[#16d6bd] text-[#090d0d] hover:bg-[#16d6bd]/90"}`}
            >
              <Shield size={16} />
              <span>PARRY (KEY: P / SPACE)</span>
            </button>

            <button
              onClick={handleAttack}
              disabled={!isAlive}
              className="px-5 py-3 text-xs sm:text-sm font-mono font-bold tracking-wider rounded-sm flex items-center gap-2 bg-[#121a19] text-[#f0f2ed] border border-[#d5e3de]/20 hover:border-[#16d6bd] hover:text-[#16d6bd] cursor-pointer transition-all"
            >
              <Swords size={16} />
              <span>ATTACK (KEY: A)</span>
            </button>

            <button
              onClick={handleReset}
              className="px-3.5 py-3 text-xs font-mono text-[#77847f] hover:text-[#f0f2ed] border border-[#d5e3de]/10 hover:border-[#d5e3de]/30 rounded-sm flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw size={14} />
              <span>RESET</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
