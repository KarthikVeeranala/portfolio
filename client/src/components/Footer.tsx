import { Download, Mail } from "lucide-react";
import { assetUrl } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#080808] border-t-4 border-[#1a1a1e] text-xs text-[#a1a1aa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand Monogram */}
        <div>
          <span className="font-display font-black text-lg uppercase text-white block mb-1">
            KARTHIK V
          </span>
          <span className="text-[#a1a1aa]">Hyderabad, India • Game Programmer &amp; Gameplay Developer</span>
        </div>

        {/* Center: Links */}
        <div className="flex items-center gap-4 text-xs font-bold text-[#d4d4d8]">
          <a
            href="mailto:veeranalakarthik@gmail.com"
            className="hover:text-white transition-colors inline-flex items-center gap-1"
          >
            <Mail size={13} />
            <span>veeranalakarthik@gmail.com</span>
          </a>
          <span>•</span>
          <a
            href={assetUrl("Karthik_Veeranala_Resume.pdf")}
            download="Karthik_Veeranala_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors inline-flex items-center gap-1"
          >
            <Download size={13} />
            <span>Resume (PDF)</span>
          </a>
          <span>•</span>
          <a
            href="https://github.com/KarthikVeeranala"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="https://linkedin.com/in/karthikveeranala"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-center md:text-right">
          <span>© {new Date().getFullYear()} Karthik Veeranala. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
