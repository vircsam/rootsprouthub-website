import React from 'react';
import { motion } from 'motion/react';
import { Mail, Calendar, Mic, Sparkles, ArrowRight, Award, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import speakerPortrait from '../assets/speaker_contact.png';

interface SpeakerSectionProps {
  className?: string;
  isStandalone?: boolean;
}

const SpeakerSection: React.FC<SpeakerSectionProps> = ({ className = '', isStandalone = false }) => {
  return (
    <section 
      id="speaker-contact" 
      className={`${isStandalone ? 'py-4 sm:py-8' : 'py-16 sm:py-28 border-t border-white/5'} relative bg-[#070709] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 relative z-10">
        <div className="rounded-[28px] sm:rounded-[36px] p-5 sm:p-10 md:p-14 relative overflow-hidden bg-[#0E0E14] border border-white/10">
          
          {/* Subtle Ambient Lighting Glow behind centered image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#FFC300]/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/40 text-[#FFC300] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Mic className="w-3.5 h-3.5 text-[#FFC300]" />
              <span>KEYNOTES & TECHNICAL TALKS</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white leading-tight mb-3 break-words">
              Contact for <span className="text-gradient-gold">Speaker</span>
            </h2>
            
            <p className="text-xs sm:text-base text-white/70 leading-relaxed max-w-2xl mx-auto font-normal px-2">
              Book Meerthika SR for keynotes, guest sessions, university workshops, and technical conferences on Linux Kernels, Low-Level Systems, and Open-Source Architecture.
            </p>
          </div>

          {/* Centered Speaker Image (Enlarged & Perfectly Aligned for Mobile & Desktop) */}
          <div className="flex flex-col items-center justify-center relative z-10 w-full">
            <div className="relative mb-4 group flex flex-col items-center justify-center w-full">
              
              {/* Floating Keynote Speaker Badge positioned directly above head */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="-mb-12 sm:-mb-20 md:-mb-24 relative z-20 bg-gradient-to-r from-[#FFC300] to-[#FF9900] text-black px-4 py-1.5 rounded-full font-mono font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-xl border border-black/10"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                <span>Keynote Speaker</span>
              </motion.div>

              {/* Direct Transparent Portrait Image - Enlarged & Zoomed in */}
              <div className="relative flex justify-center items-center w-full max-w-[380px] sm:max-w-xl md:max-w-2xl">
                <img 
                  src={speakerPortrait} 
                  alt="Meerthika SR - Speaker" 
                  className="h-[480px] sm:h-[600px] md:h-[680px] w-auto max-w-full object-contain filter brightness-105 contrast-105 group-hover:scale-[1.03] transition-transform duration-500 block drop-shadow-[0_25px_40px_rgba(0,0,0,0.7)]" 
                />
              </div>

              {/* Centered Speaker Name & Title directly below portrait */}
              <div className="text-center mt-4 sm:mt-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
                  Meerthika SR
                </h3>
                <div className="text-xs sm:text-sm font-mono text-[#FFC300] flex items-center justify-center gap-1.5 mt-1">
                  <Award className="w-4 h-4 text-[#FFC300]" />
                  <span>Founder & Systems Engineer</span>
                </div>
              </div>
            </div>

            {/* Action CTAs: Contact Email Link & Previous Events Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md mt-2">
              {/* 1. Contact Email Button */}
              <a
                href="mailto:rootsprout1@gmail.com"
                className="w-full sm:w-auto flex-1 py-4 px-7 rounded-full bg-gradient-to-r from-[#FFC300] via-[#FFB800] to-[#FF9900] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 hover:scale-[1.03] active:scale-[0.98] transition-all border border-black/10 shadow-lg text-center"
              >
                <Mail className="w-4 h-4 text-black" />
                <span>Contact via Email</span>
              </a>

              {/* 2. Previous Events Button */}
              <Link
                to="/events"
                className="w-full sm:w-auto flex-1 py-4 px-7 rounded-full glass border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 hover:bg-white/10 hover:border-[#FFC300]/50 hover:text-[#FFC300] hover:scale-[1.03] active:scale-[0.98] transition-all text-center"
              >
                <Calendar className="w-4 h-4 text-[#FFC300]" />
                <span>Previous Events</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Email display hint */}
            <div className="mt-4 text-xs font-mono text-white/50 flex flex-wrap items-center justify-center gap-1.5 text-center">
              <Send className="w-3.5 h-3.5 text-[#FFC300]" />
              <span>Direct Email: <a href="mailto:rootsprout1@gmail.com" className="text-white hover:text-[#FFC300] underline transition-colors">rootsprout1@gmail.com</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;

