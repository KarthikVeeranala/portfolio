import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { assetUrl } from "../data/portfolioData";

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", ...NAV_ITEMS.map((item) => item.id)];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-[#090d0d]/95 backdrop-blur-md border-b border-[#d5e3de]/10 shadow-lg shadow-black/40" : "bg-transparent border-b border-[#d5e3de]/5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Monogram */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3 group text-left focus:outline-none"
          aria-label="Karthik Veeranala Home"
        >
          <span className="relative w-7 h-7 flex items-center justify-center border border-[#16d6bd]/40 bg-[#16d6bd]/10 group-hover:border-[#16d6bd] transition-colors">
            <span className="text-[#16d6bd] font-mono text-xs font-bold tracking-wider">KV</span>
            <span className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-[#16d6bd]" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-[#16d6bd]" />
          </span>
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-tight text-[#f0f2ed]">
            KARTHIK VEERANALA <span className="text-[#16d6bd] text-xs font-normal hidden sm:inline">// GAME PROGRAMMER</span>
          </span>
        </button>

        {/* Desktop Navigation Links (>= 860px) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Desktop Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors rounded-sm ${isActive ? "text-[#16d6bd] font-semibold" : "text-[#77847f] hover:text-[#f0f2ed]"}`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#16d6bd] shadow-[0_0_8px_#16d6bd]" />
                )}
              </button>
            );
          })}

          {/* Direct Resume Download CTA */}
          <a
            href={assetUrl("Karthik_Veeranala_Resume.pdf")}
            download="Karthik_Veeranala_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-[#16d6bd] border border-[#16d6bd]/40 bg-[#16d6bd]/10 hover:bg-[#16d6bd] hover:text-[#090d0d] transition-all rounded-sm shadow-[0_0_12px_rgba(22,214,189,0.15)]"
            title="Download Karthik Veeranala's Resume (PDF)"
          >
            <Download size={13} />
            <span>RESUME</span>
          </a>
        </nav>

        {/* Mobile Hamburger Toggle (< md) */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={assetUrl("Karthik_Veeranala_Resume.pdf")}
            download="Karthik_Veeranala_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono text-[#16d6bd] border border-[#16d6bd]/40 bg-[#16d6bd]/10 rounded-sm"
            aria-label="Download Resume"
          >
            <Download size={12} />
            <span>PDF</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#16d6bd] hover:text-white border border-[#16d6bd]/30 rounded-sm bg-[#16d6bd]/5"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090d0d]/98 border-b border-[#d5e3de]/15 px-4 pt-3 pb-5 space-y-1 shadow-2xl backdrop-blur-xl">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-sm font-mono text-xs tracking-wider uppercase transition-colors flex items-center justify-between ${activeSection === item.id ? "bg-[#16d6bd]/15 text-[#16d6bd] border-l-2 border-[#16d6bd]" : "text-[#77847f] hover:text-[#f0f2ed] hover:bg-[#121a19]"}`}
            >
              <span>{item.label}</span>
              <span className="text-[10px] text-[#46514e]">#0{NAV_ITEMS.findIndex((n) => n.id === item.id) + 1}</span>
            </button>
          ))}
          <div className="pt-2">
            <a
              href={assetUrl("Karthik_Veeranala_Resume.pdf")}
              download="Karthik_Veeranala_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-medium text-[#090d0d] bg-[#16d6bd] hover:bg-[#16d6bd]/90 transition-all rounded-sm shadow-md"
            >
              <Download size={14} />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
