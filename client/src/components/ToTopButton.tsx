import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

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
      className="fixed bottom-6 right-6 z-50 bg-[#ff4d00] hover:bg-[#ff661a] text-[#f4f4f5] p-3 sm:p-3.5 rounded-full border-4 border-[#f4f4f5] shadow-2xl transition-all hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center"
      aria-label="Scroll back to top"
      title="Back to top"
    >
      <ArrowUp size={22} className="stroke-[3]" />
    </button>
  );
}
