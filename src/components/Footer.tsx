import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Youtube, Instagram, ArrowUpRight, Sparkles, Heart } from 'lucide-react';
import rootsproutLogo from '../assets/rootsprout-logo.svg';

const Footer = () => {
  return (
    <footer className="relative py-20 bg-[#050507] border-t border-white/10 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[#FFC300]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl overflow-hidden bg-[#0A0B10] border border-[#FFC300]/40 flex items-center justify-center p-2 shadow-[0_0_20px_rgba(255,195,0,0.2)]">
                <img src={rootsproutLogo} alt="Rootsprouthub logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold font-display tracking-tight text-white">
                Rootsprouthub
              </span>
            </div>
            <p className="text-white/60 text-sm max-w-md leading-relaxed">
              An open-source ecosystem dedicated to building low-level systems from scratch. Empowering developers to understand internal architectures through hands-on creation.
            </p>

            {/* Social Icons */}
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
                  className="w-10 h-10 rounded-xl glass border-white/10 flex items-center justify-center text-white/70 hover:text-[#FFC300] hover:border-[#FFC300]/40 hover:scale-110 transition-all duration-300 shadow-lg" 
                  aria-label={`Rootsprout on ${social.label}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#FFC300] font-bold">Platform</div>
            <ul className="space-y-3 text-sm text-white/60 font-medium">
              <li><Link to="/projects" className="hover:text-white transition-colors flex items-center gap-1">Projects <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
              <li><Link to="/blogs" className="hover:text-white transition-colors flex items-center gap-1">Blogs & Insights <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
              <li><Link to="/books" className="hover:text-white transition-colors flex items-center gap-1">Rootsprouthub Originals <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
              <li><Link to="/videos" className="hover:text-white transition-colors flex items-center gap-1">Video Tutorials <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#FFC300] font-bold">Community & Impact</div>
            <ul className="space-y-3 text-sm text-white/60 font-medium">
              <li><Link to="/events" className="hover:text-white transition-colors flex items-center gap-1">Events & Workshops <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
              <li><Link to="/partners" className="hover:text-white transition-colors flex items-center gap-1">Partnerships <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors flex items-center gap-1">Join Ecosystem <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
              <li><Link to="/sponsorship" className="hover:text-white transition-colors flex items-center gap-1">Sponsorship <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div className="flex items-center gap-2">
            <span>© 2026 Rootsprouthub Ecosystem. Built with passion for open source.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
