import { useState } from "react";
import { Check, Copy, Download, ExternalLink, Github, Linkedin, Mail, Send } from "lucide-react";
import { assetUrl } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [senderEmail, setSenderEmail] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText("veeranalakarthik@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || "Game Programmer Opportunity / Portfolio Inquiry");
    const mailtoBody = encodeURIComponent(
      `Hello Karthik,\n\n${message}\n\nBest regards,\n${senderEmail}`
    );
    window.location.href = `mailto:veeranalakarthik@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#090d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 border border-[#16d6bd]/30 bg-[#16d6bd]/5 rounded-sm">
              <span className="text-[11px] font-mono text-[#16d6bd] tracking-widest uppercase">
                06 // TRANSMISSION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#f0f2ed] tracking-tight">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base text-[#77847f] mt-2 font-mono">
              Currently open for Game Programmer and Gameplay Development Intern opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Left Column: Direct Links & Details */}
            <div className="md:col-span-5 space-y-4">
              {/* Primary Email Card */}
              <div className="p-5 bg-[#0e1414] border border-[#16d6bd]/40 rounded-sm space-y-3">
                <span className="text-xs font-mono text-[#16d6bd] font-semibold block uppercase">
                  DIRECT EMAIL INBOX
                </span>
                <a
                  href="mailto:veeranalakarthik@gmail.com"
                  className="text-base sm:text-lg font-mono font-bold text-[#f0f2ed] hover:text-[#16d6bd] transition-colors break-all block"
                >
                  veeranalakarthik@gmail.com
                </a>
                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-[#090d0d] bg-[#16d6bd] hover:bg-[#16d6bd]/90 rounded-sm transition-all cursor-pointer shadow-sm"
                  >
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copied ? "COPIED TO CLIPBOARD" : "COPY EMAIL"}</span>
                  </button>
                  <a
                    href="mailto:veeranalakarthik@gmail.com"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-[#f0f2ed] border border-[#d5e3de]/20 bg-[#121a19] hover:border-[#16d6bd] rounded-sm transition-colors"
                  >
                    <Mail size={13} />
                    <span>OPEN CLIENT</span>
                  </a>
                </div>
              </div>

              {/* Profiles & Resume */}
              <div className="p-5 bg-[#0e1414] border border-[#d5e3de]/15 rounded-sm space-y-3 font-mono text-xs">
                <span className="text-[#77847f] uppercase block font-semibold">VERIFIED PROFESSIONAL PROFILES</span>

                <div className="space-y-2">
                  <a
                    href="https://linkedin.com/in/karthikveeranala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 bg-[#121a19] hover:bg-[#16d6bd]/10 border border-[#d5e3de]/10 hover:border-[#16d6bd]/40 rounded-sm text-[#f0f2ed] transition-colors"
                  >
                    <span className="flex items-center gap-2"><Linkedin size={14} className="text-[#16d6bd]" /> LinkedIn Profile</span>
                    <ExternalLink size={12} className="text-[#77847f]" />
                  </a>

                  <a
                    href="https://github.com/KarthikVeeranala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 bg-[#121a19] hover:bg-[#16d6bd]/10 border border-[#d5e3de]/10 hover:border-[#16d6bd]/40 rounded-sm text-[#f0f2ed] transition-colors"
                  >
                    <span className="flex items-center gap-2"><Github size={14} className="text-[#16d6bd]" /> GitHub Code Repositories</span>
                    <ExternalLink size={12} className="text-[#77847f]" />
                  </a>

                  <a
                    href={assetUrl("Karthik_Veeranala_Resume.pdf")}
                    download="Karthik_Veeranala_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 bg-[#121a19] hover:bg-[#16d6bd]/10 border border-[#d5e3de]/10 hover:border-[#16d6bd]/40 rounded-sm text-[#16d6bd] font-bold transition-colors"
                  >
                    <span className="flex items-center gap-2"><Download size={14} /> Download Resume (PDF)</span>
                    <span className="text-[10px] text-[#77847f]">73.4 KB</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Mailto Dispatcher Form */}
            <div className="md:col-span-7 p-6 bg-[#0e1414] border border-[#d5e3de]/15 rounded-sm">
              <span className="text-xs font-mono text-[#16d6bd] uppercase font-bold block mb-1">
                PRE-FORMATTED MESSAGE TRANSMISSION
              </span>
              <p className="text-xs text-[#77847f] font-mono mb-4">
                Submitting opens your default email client with your message drafted directly to Karthik.
              </p>

              <form onSubmit={handleSendMail} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[#77847f] mb-1.5 uppercase">
                    Your Contact Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="recruiter@studio.com"
                    className="w-full px-3.5 py-2.5 bg-[#121a19] border border-[#d5e3de]/15 focus:border-[#16d6bd] rounded-sm text-xs font-mono text-[#f0f2ed] placeholder-[#46514e] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#77847f] mb-1.5 uppercase">
                    Subject / Role Description
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Game Programmer Internship / Project Inquiry"
                    className="w-full px-3.5 py-2.5 bg-[#121a19] border border-[#d5e3de]/15 focus:border-[#16d6bd] rounded-sm text-xs font-mono text-[#f0f2ed] placeholder-[#46514e] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#77847f] mb-1.5 uppercase">
                    Message Body
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Karthik, I reviewed your Unreal Engine automation suite and combat prototypes and would like to discuss an opportunity..."
                    className="w-full px-3.5 py-2.5 bg-[#121a19] border border-[#d5e3de]/15 focus:border-[#16d6bd] rounded-sm text-xs font-mono text-[#f0f2ed] placeholder-[#46514e] focus:outline-none transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono font-bold tracking-wider text-[#090d0d] bg-[#16d6bd] hover:bg-[#16d6bd]/90 transition-all rounded-sm cursor-pointer shadow-md"
                >
                  <Send size={14} />
                  <span>DISPATCH TRANSMISSION VIA EMAIL CLIENT</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
