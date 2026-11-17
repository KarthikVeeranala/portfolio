import { useEffect, useState } from "react";

export default function ToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-[#ff6123] hover:bg-[#ff8547] text-[#fafaf9] font-display text-[11px] font-black uppercase tracking-wider px-5 py-2.5 rounded-full border-4 border-[#fafaf9] shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
      aria-label="Scroll back to top"
      title="Back to top"
    >
      TO TOP
    </button>
  );
}
