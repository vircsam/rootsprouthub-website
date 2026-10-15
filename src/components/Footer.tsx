import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Youtube, Instagram, ArrowUpRight } from 'lucide-react';
import rootsproutLogo from '../assets/rootsprout-logo.svg';

const Footer = () => {
  return (
    <footer className="relative bg-[#050507] text-white pt-24 pb-12 overflow-hidden border-t border-white/10">
      {/* Top Gold Ambient Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFC300] to-transparent opacity-60" />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FFC300]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#FF4D23]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Huge Architectural Brand Watermark Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.02] text-[15vw] font-black font-display tracking-tighter text-white whitespace-nowrap leading-none">
        ROOTSPROUTHUB
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Brand Info & Mission */}
          <div className="md:col-span-6 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-xl overflow-hidden bg-[#0A0B10] border border-[#FFC300]/40 flex items-center justify-center p-2 shadow-[0_0_25px_rgba(255,195,0,0.25)] group-hover:border-[#FFC300] group-hover:scale-105 transition-all duration-300">
                <img src={rootsproutLogo} alt="Rootsprouthub logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold font-display tracking-tight text-white group-hover:text-[#FFC300] transition-colors">
                  Rootsprouthub
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 -mt-1">Open Source Ecosystem</span>
              </div>
            </Link>

            <p className="text-white/60 text-sm max-w-md leading-relaxed">
              An open-source ecosystem dedicated to building low-level systems from scratch. Empowering developers to understand production architectures through hands-on creation.
            </p>

            {/* Social Media Pills */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Github, href: "https://github.com/RootSprout", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/root-sprout", label: "LinkedIn" },
                { icon: Youtube, href: "https://www.youtube.com/@meerthika", label: "YouTube" },
                { icon: Instagram, href: "https://www.instagram.com/rootsprouthub/", label: "Instagram" },
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-xl glass border-white/10 flex items-center justify-center text-white/70 hover:text-[#FFC300] hover:border-[#FFC300]/50 hover:bg-[#FFC300]/10 hover:scale-110 transition-all duration-300 shadow-lg" 
                  aria-label={`Rootsprout on ${social.label}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 1: Platform Links */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#FFC300] font-bold">Platform</div>
            <ul className="space-y-3 text-sm text-white/60 font-medium">
              <li><Link to="/projects" className="hover:text-[#FFC300] transition-colors inline-flex items-center gap-1">Projects <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
              <li><Link to="/blogs" className="hover:text-[#FFC300] transition-colors inline-flex items-center gap-1">Blogs & Insights <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
              <li><Link to="/books" className="hover:text-[#FFC300] transition-colors inline-flex items-center gap-1">Original Publications <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
              <li><Link to="/videos" className="hover:text-[#FFC300] transition-colors inline-flex items-center gap-1">Video Tutorials <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
            </ul>
          </div>

          {/* Column 2: Ecosystem */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#FFC300] font-bold">Ecosystem</div>
            <ul className="space-y-3 text-sm text-white/60 font-medium">
              <li><Link to="/events" className="hover:text-[#FFC300] transition-colors inline-flex items-center gap-1">Events & Talks <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
              <li><Link to="/partners" className="hover:text-[#FFC300] transition-colors inline-flex items-center gap-1">Partnerships <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
              <li><Link to="/community" className="hover:text-[#FFC300] transition-colors inline-flex items-center gap-1">Community Hub <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
              <li><Link to="/speaker" className="hover:text-[#FFC300] transition-colors inline-flex items-center gap-1">Keynote Speaker <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
              <li><Link to="/sponsorship" className="hover:text-[#FFC300] transition-colors inline-flex items-center gap-1">Sponsorship <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Ticker & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div className="flex items-center gap-2 text-center md:text-left">
            <span>© 2026 Rootsprouthub Ecosystem. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Open Source License</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
