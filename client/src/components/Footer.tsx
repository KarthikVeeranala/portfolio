import { ArrowUp, Download } from "lucide-react";
import { assetUrl } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 bg-[#060808] border-t border-[#d5e3de]/10 text-xs font-mono text-[#77847f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Monogram & Copyright */}
        <div className="flex items-center gap-3">
          <span className="w-5 h-5 flex items-center justify-center border border-[#16d6bd]/40 bg-[#16d6bd]/10 text-[#16d6bd] text-[10px] font-bold">
            KV
          </span>
          <span>© {new Date().getFullYear()} KARTHIK VEERANALA // GAME PROGRAMMER</span>
        </div>

        {/* Center: Resume Link */}
        <div className="flex items-center gap-4">
          <a
            href={assetUrl("Karthik_Veeranala_Resume.pdf")}
            download="Karthik_Veeranala_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#16d6bd] transition-colors inline-flex items-center gap-1"
          >
            <Download size={12} />
            <span>Resume (PDF)</span>
          </a>
          <span>•</span>
          <a
            href="https://github.com/KarthikVeeranala"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#16d6bd] transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="https://linkedin.com/in/karthikveeranala"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#16d6bd] transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1 bg-[#121a19] hover:bg-[#16d6bd]/15 text-[#77847f] hover:text-[#16d6bd] border border-[#d5e3de]/10 hover:border-[#16d6bd]/30 rounded-sm transition-colors cursor-pointer"
          aria-label="Back to top of page"
        >
          <span>TOP</span>
          <ArrowUp size={12} />
        </button>
      </div>
    </footer>
  );
}
