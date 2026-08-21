import React from 'react';
import { motion } from 'motion/react';
import { Mail, Calendar, Mic, Sparkles, ArrowRight, Award, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import speakerPortrait from '../assets/speaker_contact.png';

const SpeakerSection = () => {
  return (
    <section id="speaker-contact" className="py-20 sm:py-28 relative border-t border-white/5 bg-[#070709]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="rounded-[36px] p-8 sm:p-14 relative overflow-hidden bg-[#0E0E14] border border-white/10">
          
          {/* Subtle Ambient Lighting Glow behind centered image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#FFC300]/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/40 text-[#FFC300] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Mic className="w-3.5 h-3.5 text-[#FFC300]" />
              <span>KEYNOTES & TECHNICAL TALKS</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white leading-tight mb-4 break-words">
              Contact for <span className="text-gradient-gold">Speaker</span>
            </h2>
            
            <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl mx-auto font-normal">
              Book Meerthika SR for keynotes, guest sessions, university workshops, and technical conferences on Linux Kernels, Low-Level Systems, and Open-Source Architecture.
            </p>
          </div>

          {/* Centered Speaker Image without any surrounding box or border frame */}
          <div className="flex flex-col items-center justify-center relative z-10">
            <div className="relative mb-6 group flex flex-col items-center justify-center">
              
              {/* Floating Keynote Speaker Badge closer to head of image */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="-mb-4 sm:-mb-6 relative z-20 bg-gradient-to-r from-[#FFC300] to-[#FF9900] text-black px-4 py-1.5 rounded-full font-mono font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-lg border border-black/10"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                <span>Keynote Speaker</span>
              </motion.div>

              {/* Direct Transparent Portrait Image - Centered and Borderless */}
              <div className="relative flex justify-center items-center">
                <img 
                  src={speakerPortrait} 
                  alt="Meerthika SR - Speaker" 
                  className="h-[360px] sm:h-[480px] md:h-[540px] w-auto object-contain filter brightness-105 contrast-105 group-hover:scale-[1.02] transition-transform duration-500 block drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]" 
                />
              </div>

              {/* Centered Speaker Name & Title directly below portrait */}
              <div className="text-center mt-6">
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mt-2">
              {/* 1. Contact Email Button */}
              <a
                href="mailto:rootsprout1@gmail.com"
                className="w-full sm:w-auto flex-1 py-4 px-7 rounded-full bg-gradient-to-r from-[#FFC300] via-[#FFB800] to-[#FF9900] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 hover:scale-[1.03] transition-all border border-black/10 shadow-lg"
              >
                <Mail className="w-4 h-4 text-black" />
                <span>Contact via Email</span>
              </a>

              {/* 2. Previous Events Button */}
              <Link
                to="/events"
                className="w-full sm:w-auto flex-1 py-4 px-7 rounded-full glass border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 hover:bg-white/10 hover:border-[#FFC300]/50 hover:text-[#FFC300] hover:scale-[1.03] transition-all"
              >
                <Calendar className="w-4 h-4 text-[#FFC300]" />
                <span>Previous Events</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Email display hint */}
            <div className="mt-5 text-xs font-mono text-white/50 flex items-center gap-2">
              <Send className="w-3 h-3 text-[#FFC300]" />
              <span>Direct Email: <a href="mailto:rootsprout1@gmail.com" className="text-white hover:text-[#FFC300] underline transition-colors">rootsprout1@gmail.com</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;

