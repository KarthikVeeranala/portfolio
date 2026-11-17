import { useEffect, useState } from "react";
import { Menu, X, Linkedin, Github, Mail, Instagram, Youtube } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "home" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "career" },
  { id: "skills", label: "skills" },
  { id: "certifications", label: "certifications" },
  { id: "about", label: "about" },
  { id: "contact", label: "contact" }
];

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/karthikveeranala",
    icon: Linkedin,
    label: "in"
  },
  {
    name: "GitHub",
    href: "https://github.com/karthikveeranala",
    icon: Github,
    label: "gh"
  },
  {
    name: "Gmail",
    href: "mailto:veeranalakarthik@gmail.com",
    icon: Mail,
    label: "gm"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/karthikkkk.v/",
    icon: Instagram,
    label: "ig"
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@karthikkkk.v",
    icon: Youtube,
    label: "yt"
  }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
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
        { rootMargin: "-20% 0px -60% 0px" }
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#172a3f] border-b-[12px] border-[#ff6123] shadow-xl">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Brand Monogram / Title (Simplified to KARTHIK V) */}
        <button
          onClick={() => scrollToSection("hero")}
          className="text-left focus:outline-none transition-transform hover:scale-[1.02] flex items-center gap-2"
          aria-label="Karthik V Home"
        >
          <span className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-[#ff6123]">
            KARTHIK V
          </span>
        </button>

        {/* Center: Desktop Navigation Links (lowercase Archivo) */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Desktop Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-bold tracking-normal transition-colors lowercase cursor-pointer relative py-1 ${
                  isActive ? "text-[#ff6123]" : "text-[#fafaf9] hover:text-[#ff6123]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#ff6123]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Social Icon Buttons (Orange rounded squares) */}
        <div className="hidden sm:flex items-center gap-2">
          {SOCIAL_LINKS.map((soc) => {
            const Icon = soc.icon;
            return (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-[#ff6123] hover:bg-[#ff8547] text-[#fafaf9] rounded-md transition-all shadow-sm hover:-translate-y-0.5"
                title={soc.name}
                aria-label={soc.name}
              >
                <Icon size={17} />
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#fafaf9] hover:text-[#ff6123] bg-[#20354b] rounded-md transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#172a3f] border-t border-[#20354b] px-4 py-4 space-y-2 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#20354b]">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-3 py-2 rounded font-bold text-sm lowercase transition-colors ${
                  activeSection === item.id
                    ? "bg-[#ff6123] text-[#fafaf9]"
                    : "text-[#b0c4de] hover:text-[#fafaf9] hover:bg-[#20354b]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Social Icons */}
          <div className="flex items-center justify-center gap-3 pt-2">
            {SOCIAL_LINKS.map((soc) => {
              const Icon = soc.icon;
              return (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-[#ff6123] text-[#fafaf9] rounded-md"
                  aria-label={soc.name}
                >
                  <Icon size={19} />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
