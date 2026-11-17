import { useState } from "react";
import { Check, Copy, Download, ExternalLink, Github, Linkedin, Mail, Send } from "lucide-react";
import { assetUrl } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [senderEmail, setSenderEmail] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText("karthikveeranala09@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || "Game Programmer Opportunity / Inquiry");
    const mailtoBody = encodeURIComponent(
      `Hello Karthik,\n\n${message}\n\nBest regards,\n${senderEmail}`
    );
    window.location.href = `mailto:karthikveeranala09@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 section-with-bg bg-[#131f2d] border-b-[15px] border-[#ff6123]"
      style={{
        backgroundImage: `url(${assetUrl("assets/backgrounds/trent_bg_redfall.jpg")})`,
      }}
    >
      {/* Dark Navy Overlay */}
      <div className="section-overlay-navy pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center md:text-left">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#fafaf9] tracking-tight mb-4">
            GET IN TOUCH
          </h2>
          <div className="w-44 h-3 bg-[#ff6123] mb-6 mx-auto md:mx-0" />

          <p className="text-base sm:text-xl text-[#b0c4de] max-w-2xl leading-relaxed font-normal">
            Currently open for Game Programmer and Gameplay Development Intern opportunities for 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start max-w-5xl">
          {/* Left Column: Direct Links & Email Card */}
          <div className="md:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 sm:p-8 bg-[#172a3f] border-2 border-[#ff6123] rounded-lg shadow-xl space-y-4">
              <span className="font-display text-xs text-[#ff9921] uppercase font-black tracking-wider block">
                DIRECT INBOX
              </span>
              <a
                href="mailto:karthikveeranala09@gmail.com"
                className="font-display text-lg sm:text-xl font-black text-[#fafaf9] hover:text-[#ff6123] transition-colors break-all block"
              >
                karthikveeranala09@gmail.com
              </a>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-4 py-2 font-display text-xs uppercase font-black text-white bg-[#ff6123] hover:bg-[#ff8547] rounded shadow transition-all cursor-pointer"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? "COPIED" : "COPY EMAIL"}</span>
                </button>

                <a
                  href="mailto:karthikveeranala09@gmail.com"
                  className="inline-flex items-center gap-1.5 px-4 py-2 font-display text-xs uppercase font-black text-[#fafaf9] border border-[#20354b] bg-[#20354b] hover:bg-[#ff9921] hover:text-[#172a3f] rounded transition-all"
                >
                  <Mail size={14} />
                  <span>OPEN CLIENT</span>
                </a>
              </div>
            </div>

            {/* Profiles & Resume */}
            <div className="p-6 bg-[#172a3f] border-2 border-[#20354b] rounded-lg shadow-xl space-y-3">
              <span className="text-xs font-bold text-[#b0c4de] uppercase tracking-wider block">
                PROFESSIONAL PROFILES
              </span>

              <div className="space-y-2">
                <a
                  href="https://linkedin.com/in/karthikveeranala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#131f2d] hover:bg-[#20354b] border border-[#20354b] rounded text-sm text-[#fafaf9] transition-all"
                >
                  <span className="flex items-center gap-2 font-bold">
                    <Linkedin size={16} className="text-[#ff6123]" /> LinkedIn Profile
                  </span>
                  <ExternalLink size={14} className="text-[#b0c4de]" />
                </a>

                <a
                  href="https://github.com/KarthikVeeranala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#131f2d] hover:bg-[#20354b] border border-[#20354b] rounded text-sm text-[#fafaf9] transition-all"
                >
                  <span className="flex items-center gap-2 font-bold">
                    <Github size={16} className="text-[#ff6123]" /> GitHub Repositories
                  </span>
                  <ExternalLink size={14} className="text-[#b0c4de]" />
                </a>

                <a
                  href={assetUrl("Karthik_Veeranala_Resume.pdf")}
                  download="Karthik_Veeranala_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#131f2d] hover:bg-[#20354b] border border-[#20354b] rounded text-sm text-[#fafaf9] transition-all"
                >
                  <span className="flex items-center gap-2 font-bold">
                    <Download size={16} className="text-[#ff9921]" /> Resume (PDF)
                  </span>
                  <ExternalLink size={14} className="text-[#b0c4de]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Transmission Form */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSendMail}
              className="p-6 sm:p-8 bg-[#172a3f] border-2 border-[#20354b] rounded-lg shadow-xl space-y-4"
            >
              <h3 className="font-display text-lg uppercase font-black text-[#fafaf9]">
                SEND A MESSAGE
              </h3>

              <div>
                <label className="block text-xs font-bold uppercase text-[#b0c4de] mb-1.5">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="recruiter@studio.com"
                  className="w-full px-4 py-2.5 bg-[#131f2d] border border-[#20354b] focus:border-[#ff6123] rounded text-sm text-[#fafaf9] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#b0c4de] mb-1.5">
                  Subject Line
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Game Programmer Opportunity / Cyrus 365 Follow-up"
                  className="w-full px-4 py-2.5 bg-[#131f2d] border border-[#20354b] focus:border-[#ff6123] rounded text-sm text-[#fafaf9] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#b0c4de] mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Karthik, we reviewed your Unreal Engine projects and would like to talk about..."
                  className="w-full px-4 py-2.5 bg-[#131f2d] border border-[#20354b] focus:border-[#ff6123] rounded text-sm text-[#fafaf9] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#ff6123] hover:bg-[#ff8547] text-white font-display text-sm uppercase font-black rounded shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={15} />
                <span>DISPATCH MESSAGE (MAILTO)</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
