import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, Star, Users, Zap, Github, Code2, 
  Shield, Globe, ChevronRight, ShoppingCart, Linkedin, Youtube, 
  Instagram, Play, Clock, Sparkles, Terminal, ArrowUpRight, CheckCircle2,
  Quote, Check, Mail, Send, Bell, Award, BookOpen, Cpu, Layers, ExternalLink, Flame
} from 'lucide-react';
import { BLOGS, PROJECTS, PARTNERS, VIDEOS, REVIEWS } from '../constants';
import { Link } from 'react-router-dom';
import founderPortrait from '../assets/founder_portrait.png';
import latentLayerLogo from '../assets/latent_layer_logo.png';

const MarqueeTicker = () => {
  const items = [
    "ROOTSPROUTHUB",
    "FOUNDER: MEERTHIKA SR",
    "OPEN SOURCE ECOSYSTEM",
    "BUILD LOW-LEVEL SYSTEMS",
    "KERNELS & DATABASES",
    "KERNEL SERIES PART 1.1 & 1.2",
    "FIRST PRINCIPLES",
    "100+ GITHUB STARS",
    "500+ BUILDERS",
    "C, GO & RUST ENGINEERING"
  ];

  return (
    <div className="w-full bg-[#0E0E14] border-y border-white/10 py-3.5 overflow-hidden relative z-20">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 text-xs font-mono tracking-widest uppercase font-bold text-white/70">
            <span className="hover:text-[#FFC300] transition-colors">{item}</span>
            <span className="text-[#FFC300] font-black text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* About the Founder Feature Section with Header Above Card */
const FounderSection = () => {
  return (
    <section id="founder" className="py-16 sm:py-24 relative border-t border-white/10 bg-gradient-to-b from-[#070709] via-[#0B0C12] to-[#070709] overflow-hidden">
      {/* Background Lighting Glows */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#FFC300]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF4D23]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Prominent Section Header Above Card */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white whitespace-normal break-normal">
            About the <span className="text-gradient-gold"> Founder</span>
          </h2>
        </div>

        <div className="glass-card rounded-[32px] sm:rounded-[36px] p-6 sm:p-10 md:p-12 border-white/15 shadow-2xl relative overflow-hidden bg-[#0A0B10]/90">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Founder Photo & Floating Badges */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-sm aspect-square rounded-3xl overflow-hidden border-2 border-[#FFC300]/40 p-2 shadow-[0_0_50px_rgba(255,195,0,0.25)] group">
                <img 
                  src={founderPortrait} 
                  alt="Meerthika SR - Founder of Rootsprouthub" 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-60 rounded-2xl" />
                
                <div className="absolute bottom-3 left-3 right-3 z-10 glass p-3 rounded-xl border-white/15 backdrop-blur-md">
                  <div className="text-sm font-bold font-display text-white">Meerthika SR</div>
                  <div className="text-[11px] font-mono text-[#FFC300]">Founder & Backend Engineer</div>
                </div>
              </div>

              {/* Floating Badge 1: Low-level Enthusiast */}
              <motion.div
                animate={{ y: [0, -8, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -left-2 sm:-left-6 bg-gradient-to-r from-[#FFC300] to-[#FF9900] text-black px-3.5 py-2 rounded-xl sm:rounded-2xl shadow-xl font-mono font-bold text-[10px] sm:text-xs flex items-center gap-1.5 border border-black/10 z-20"
              >
                <Cpu className="w-3.5 h-3.5 text-black" />
                <span>Low-level Enthusiast</span>
              </motion.div>

              {/* Floating Badge 2: Build Systems */}
              <motion.div
                animate={{ y: [0, 8, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 -right-2 sm:-right-6 bg-[#3B82F6] text-white px-3.5 py-2 rounded-xl sm:rounded-2xl shadow-xl font-mono font-bold text-[10px] sm:text-xs flex items-center gap-1.5 border border-white/20 z-20"
              >
                <Layers className="w-3.5 h-3.5 text-white" />
                <span>Build Systems</span>
              </motion.div>
            </div>

            {/* Right Column: Founder Info */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/30 text-[#FFC300] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <Award className="w-3.5 h-3.5" />
                  <span>FOUNDER & MAINTAINER</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
                  Meerthika SR
                </h3>
                <p className="text-xs sm:text-sm font-mono text-white/50 mt-1">
                  Full Stack & Backend Developer (Golang, Java, C, Rust) • CNCF Contributor
                </p>
              </div>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                "I specialize in building high-performance backend systems, distributed microservices, and low-level Linux tools. I founded Rootsprouthub to help developers break complex software down to its first principles and build production-grade engines from scratch."
              </p>

              {/* Key Credentials Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="glass p-3 rounded-xl border-white/10 text-xs font-mono">
                  <div className="text-[#FFC300] font-bold">Maintainer</div>
                  <div className="text-white/50 text-[10px]">at Rootsprouthub</div>
                </div>
                <div className="glass p-3 rounded-xl border-white/10 text-xs font-mono">
                  <div className="text-[#FFC300] font-bold">CNCF Contributor</div>
                  <div className="text-white/50 text-[10px]">Flatcar Linux & sysext</div>
                </div>
                <div className="glass p-3 rounded-xl border-white/10 text-xs font-mono">
                  <div className="text-[#FFC300] font-bold">Author</div>
                  <div className="text-white/50 text-[10px]">Inside NGINX Book</div>
                </div>
              </div>

              {/* Social Links Row */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-mono">
                <a 
                  href="https://github.com/mery-top" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-3.5 py-1.5 rounded-full glass border-white/15 text-white hover:text-[#FFC300] hover:border-[#FFC300]/40 transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5 text-[#FFC300]" /> GitHub (@mery-top)
                </a>
                <a 
                  href="https://www.linkedin.com/in/meerthika" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-3.5 py-1.5 rounded-full glass border-white/15 text-white hover:text-[#FFC300] hover:border-[#FFC300]/40 transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#FFC300]" /> LinkedIn
                </a>
                <a 
                  href="https://medium.com/@meerthika" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-3.5 py-1.5 rounded-full glass border-white/15 text-white hover:text-[#FFC300] hover:border-[#FFC300]/40 transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#FFC300]" /> Medium Articles
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

/* Helper Cloud Icon for AWS */
const CloudIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19px 5 19a4.5 4.5 0 1 1 1.2-8.8 6 6 0 1 1 11.4 2.2 4.5 4.5 0 0 1 0 8.6Z"/></svg>
);

/* Redesigned Hero Section */
const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between pt-28 pb-12 sm:pb-16 overflow-hidden bg-grid">
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/4 -left-32 w-[550px] h-[550px] bg-[#FFC300]/15 rounded-full blur-[160px] animate-ethereal-1 pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-[600px] h-[600px] bg-[#FF4D23]/15 rounded-full blur-[170px] animate-ethereal-2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex-grow flex flex-col justify-center py-8 pb-14 sm:pb-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Title Area */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Ecosystem Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#FFC300]/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FFC300] animate-ping flex-shrink-0" />
              <span className="text-xs font-mono tracking-widest text-[#FFC300] uppercase font-bold">
                OPEN SOURCE SYSTEMS ECOSYSTEM
              </span>
            </div>

            {/* Display Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight leading-[0.96] text-white whitespace-normal break-normal">
              Build. Break. <br />
              Rebuild. <br />
              <span className="text-gradient-ethereal">Learn.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed">
              Rootsprouthub is a free, open-source platform founded by Meerthika SR that helps students and developers build low-level systems from scratch to understand production software architecture.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
              <Link 
                to="/projects" 
                className="bg-gradient-to-r from-[#FFC300] via-[#FFB800] to-[#FF9900] text-black font-bold px-7 sm:px-8 py-4 rounded-full flex items-center gap-3 text-xs sm:text-sm tracking-wider uppercase glow-gold hover:glow-gold-strong hover:scale-[1.03] transition-all duration-300 group shadow-2xl"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#partners"
                className="glass px-7 sm:px-8 py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase text-white hover:bg-white/10 border border-white/15 transition-all duration-300 hover:scale-[1.03] mb-6"
              >
                Latest About Community
              </a>
            </div>
          </motion.div>

          {/* Interactive Floating Elements Container */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex items-center justify-center min-h-[360px] sm:min-h-[440px]">
            {/* Terminal Card */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 glass-card rounded-3xl p-6 sm:p-7 border-[#FFC300]/30 shadow-2xl backdrop-blur-2xl glow-ethereal w-full mb-8 sm:mb-12"
            >
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF4D23]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFB800]" />
                  <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-white/60 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                  <Terminal className="w-3 h-3 text-[#FFC300]" />
                  <span>rootsprouthub v2.0.0</span>
                </div>
              </div>

              <div className="space-y-3.5 font-mono text-xs sm:text-sm">
                <div className="flex gap-2 sm:gap-3 items-center">
                  <span className="text-[#FFC300] font-bold">$</span>
                  <span className="text-white/90">npm install @rootsprouthub/core</span>
                </div>
                <div className="text-white/40 pl-4 sm:pl-6 text-xs">... fetching low-level modules</div>
                <div className="text-emerald-400 pl-4 sm:pl-6 flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" /> Core engine initialized successfully
                </div>
                <div className="flex gap-2 sm:gap-3 items-center pt-2">
                  <span className="text-[#FFC300] font-bold">$</span>
                  <span className="text-white/90">rootsprouthub start --community</span>
                </div>
                <div className="text-[#FFC300] pl-4 sm:pl-6 animate-pulse text-xs">
                  🚀 Launching open-source learning hub...
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -left-3 sm:-top-6 sm:-left-6 z-20 flex items-center justify-center gap-2 bg-[#FF4D23] text-white px-6 py-3 sm:px-7 sm:py-3.5 min-w-[180px] sm:min-w-[230px] rounded-xl sm:rounded-2xl shadow-[0_15px_30px_rgba(255,77,35,0.4)] border border-white/20 font-display font-extrabold text-xs sm:text-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping flex-shrink-0" />
              <span className="whitespace-nowrap">100+ GitHub Stars</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-1 -right-2 sm:-bottom-2 sm:-right-4 z-20 flex items-center justify-center gap-2 bg-[#3B82F6] text-white px-6 py-3 sm:px-7 sm:py-3.5 min-w-[230px] sm:min-w-[280px] rounded-xl sm:rounded-2xl shadow-[0_15px_30px_rgba(59,130,246,0.4)] border border-white/20 font-display font-extrabold text-xs sm:text-sm"
            >
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white flex-shrink-0" />
              <span className="whitespace-nowrap">500+ Community Members</span>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.08, 1], rotate: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -right-4 sm:-right-10 z-20 flex bg-[#FFC300] text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl shadow-[0_15px_30px_rgba(255,195,0,0.4)] border border-black/10 font-mono font-bold text-[10px] sm:text-xs"
            >
              ⚡ 20+ Projects Built
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <MarqueeTicker />
    </section>
  );
};

/* Weekly Newsletter Section: The Latent Layer */
const WeeklyNewsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setSubscribed(true);
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section id="newsletter" className="py-20 sm:py-28 relative border-t border-white/10 bg-[#050507]">
      {/* Hidden iframe for non-refreshing Beehiiv form submission */}
      <iframe name="beehiiv_hidden_frame" id="beehiiv_hidden_frame" className="hidden" aria-hidden="true" title="Beehiiv Submit Frame" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card border border-[#FFC300]/25 rounded-[36px] p-8 sm:p-14 relative overflow-hidden bg-gradient-to-br from-[#0E0E14] via-[#070709] to-[#0E0E14] shadow-[0_0_80px_rgba(255,195,0,0.15)]">
          {/* Ambient Lighting Glow Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC300]/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF4D23]/10 rounded-full blur-[160px] pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content Column with Official Logo */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/40 text-[#FFC300] text-xs font-mono font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(255,195,0,0.2)]">
                  <span className="w-2 h-2 rounded-full bg-[#FFC300] animate-ping" />
                  <Bell className="w-3.5 h-3.5" />
                  <span>THE LATENT LAYER NEWSLETTER</span>
                </div>
                <a
                  href="https://rootsprout.beehiiv.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-white/70 hover:text-[#FFC300] hover:border-[#FFC300]/40 transition-colors"
                >
                  <span>rootsprout.beehiiv.com</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>

              {/* Logo & Headline Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-1">

                <div>
                  <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight whitespace-normal break-normal">
                    The Latent Layer <br />
                    <span className="text-gradient-gold">News Letter</span>
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-white/70 max-w-xl leading-relaxed">
                Subscribe to <strong className="text-[#FFC300] font-bold">The Latent Layer</strong> newsletter. Join with the developers getting our weekly Tech News and deep-dives on AI, System architecture and Design.
              </p>


            </div>

            {/* Right Interactive Subscription Form Column */}
            <div className="lg:col-span-5">
              <div className="glass p-6 sm:p-8 rounded-3xl border-[#FFC300]/30 bg-[#0A0B10]/95 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC300]/10 rounded-full blur-[60px] pointer-events-none" />

                {subscribed ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 bg-[#FFC300]/20 text-[#FFC300] border border-[#FFC300]/40 rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(255,195,0,0.3)] animate-bounce">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-extrabold font-display text-white">Welcome to The Latent Layer!</h3>
                    <p className="text-xs font-mono text-white/70 leading-relaxed">
                      You are officially on the subscriber list. Check your inbox to confirm your subscription!
                    </p>
                  </div>
                ) : (
                  <form 
                    action="https://subscribe-forms.beehiiv.com/api/submit" 
                    method="POST" 
                    target="beehiiv_hidden_frame"
                    onSubmit={handleSubmit}
                    className="space-y-5 relative z-10"
                  >
                    <input type="hidden" name="form_id" value="dfb1244e-40e4-4dd4-a053-5087b72d5233" />
                    
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <img src={latentLayerLogo} alt="Logo" className="w-5 h-5 rounded object-contain border border-[#FFC300]/40" />
                        <span className="text-xs font-mono font-bold uppercase text-[#FFC300] tracking-wider">
                          The Latent Layer
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                        Weekly Edition
                      </span>
                    </div>


                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FFC300] via-[#FFB800] to-[#FF9900] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,195,0,0.3)] hover:shadow-[0_0_45px_rgba(255,195,0,0.5)] hover:scale-[1.02] transition-all cursor-pointer group border border-black/10"
                    >
                      <span>{isSubmitting ? 'Subscribing...' : 'Subscribe to The Latent Layer'}</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    <div className="pt-1 text-[11px] font-mono text-center text-white/40 flex flex-col items-center gap-1.5">
                      <div className="flex items-center gap-2">
                        <span>🔥  Available Weekly</span>
                        <span>•</span>
                        <span>100% Free</span>
                        <span>•</span>
                        <span>Unsubscribe anytime</span>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  const formatStars = (stars?: number) => {
    if (stars === undefined) return '—';
    if (stars < 1000) return `${stars}`;
    return `${(stars / 1000).toFixed(1)}k`;
  };

  return (
    <div className="bg-[#070709] text-white overflow-x-hidden w-full">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. WEEKLY NEWSLETTER SECTION */}
      <WeeklyNewsletter />

      {/* 3. FEATURED PROJECTS */}
      <section id="projects" className="py-20 sm:py-28 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight mb-4 whitespace-normal break-normal">
              Featured <span className="text-gradient-gold">Projects</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Discover high-impact open source repositories maintained by the Rootsprouthub community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project) => (
              <div 
                key={project.id} 
                className="glass-card p-6 sm:p-7 rounded-3xl glass-card-hover relative flex flex-col justify-between"
              >
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Github className="w-14 h-14" />
                </div>

                <div>
                  {project.image && (
                    <div className="aspect-[16/10] mb-6 rounded-2xl overflow-hidden border border-white/10 relative">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        referrerPolicy="no-referrer" 
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFC300]">
                      <Code2 className="w-5 h-5" />
                    </div>
                    {project.trending && (
                      <span className="px-3 py-1 bg-[#FFC300]/10 text-[#FFC300] text-[10px] font-mono font-bold rounded-full border border-[#FFC300]/30 tracking-wider">
                        TRENDING REPO
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold font-display mb-2 text-white">{project.name}</h3>
                  <p className="text-xs text-white/60 mb-6 leading-relaxed line-clamp-3">{project.description}</p>
                </div>

                <div>
                  <div className="flex items-center gap-4 text-xs font-mono text-white/50 mb-6 border-t border-white/10 pt-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FFC300]" />
                      <span>{project.language}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-[#FFC300]" />
                      <span>{formatStars(project.stars)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      <span>{project.contributors ?? '—'}</span>
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl border border-white/15 bg-white/5 font-bold text-xs uppercase tracking-wider text-center block hover:bg-[#FFC300] hover:text-black hover:border-[#FFC300] transition-all duration-300"
                  >
                    Contribute On GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link 
              to="/projects" 
              className="px-8 py-3.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold tracking-wider uppercase text-white hover:bg-[#FFC300] hover:text-black hover:border-[#FFC300] transition-all duration-300 shadow-xl"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* 4. ABOUT THE FOUNDER SECTION (MOVED BEFORE LOVED BY SYSTEM BUILDERS) */}
      <FounderSection />

      {/* 5. COMMUNITY REVIEWS & TESTIMONIALS */}
      <section id="reviews" className="py-20 sm:py-28 relative border-t border-white/5 bg-[#050507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight mb-4 whitespace-normal break-normal">
              Loved by <span className="text-gradient-gold">System Builders</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Here is what software engineers, computer science researchers, and core maintainers say about Rootsprouthub.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FFC300]">
              <div className="flex text-[#FFC300]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FFC300]" />
                ))}
              </div>
              <span>5.0 Average Rating from Engineers</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {REVIEWS.map((rev) => (
              <motion.div 
                key={rev.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 sm:p-8 rounded-3xl glass-card-hover relative flex flex-col justify-between border-white/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <img 
                        src={rev.avatar} 
                        alt={rev.name} 
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#FFC300]/50" 
                      />
                      <div>
                        <h4 className="text-base font-bold font-display text-white">{rev.name}</h4>
                        <p className="text-xs font-mono text-white/50">{rev.role} {rev.company && `• ${rev.company}`}</p>
                      </div>
                    </div>
                    <div className="flex text-[#FFC300]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FFC300]" />
                      ))}
                    </div>
                  </div>

                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-[#FFC300]/20 absolute -top-3 -left-2 pointer-events-none" />
                    <p className="text-sm text-white/80 leading-relaxed italic pl-4 border-l-2 border-[#FFC300]/40">
                      "{rev.review}"
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono">
                  <span className="text-[#FFC300] font-semibold">{rev.projectOrTopic}</span>
                  {rev.verified && (
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Check className="w-3.5 h-3.5" /> Verified Builder
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMUNITY ECOSYSTEM & PARTNERSHIPS */}
      <section id="partners" className="py-20 sm:py-28 border-t border-white/5 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight whitespace-normal break-normal">
              Community <span className="text-gradient-gold">Ecosystem</span>
            </h2>
            <p className="text-white/60 text-xs sm:text-sm mt-2 uppercase tracking-wider">
              SIX SPECIALIZED INITIATIVES. ONE INTEGRATED OPEN SOURCE HUB.
            </p>
          </div>

          <div className="flex justify-start sm:justify-center items-center py-6 overflow-x-auto no-scrollbar">
            <div className="flex -space-x-4 sm:-space-x-8 min-w-max px-4">
              {[
                { label: "KERNEL", sub: "OS Internals" },
                { label: "NET STACK", sub: "TCP/IP & HTTP3" },
                { label: "DB ENGINE", sub: "ACID & Storage" },
                { label: "COMPILER", sub: "AST & Bytecode" },
                { label: "DEVOPS", sub: "Containers & K8s" },
                { label: "AI", sub: "Math & Agents" },
              ].map((circle, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.08, zIndex: 30 }}
                  className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-[#0D0E14]/90 border border-[#FFC300]/40 flex flex-col items-center justify-center p-2 sm:p-4 text-center backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-[#FFC300] hover:shadow-[0_0_30px_rgba(255,195,0,0.3)] relative group cursor-pointer"
                >
                  <span className="text-[10px] sm:text-xs font-mono text-[#FFC300] font-bold tracking-wider mb-0.5 sm:mb-1">0{idx + 1}</span>
                  <span className="text-xs sm:text-sm md:text-base font-extrabold font-display text-white group-hover:text-[#FFC300] transition-colors leading-tight">
                    {circle.label}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-white/50 mt-0.5">{circle.sub}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-8 items-center mt-12 sm:mt-16 opacity-70 hover:opacity-100 transition-opacity">
            {PARTNERS.map((partner) => (
              <div 
                key={partner.id} 
                className="glass p-3 sm:p-4 rounded-2xl border-white/5 flex items-center justify-center grayscale hover:grayscale-0 hover:border-[#FFC300]/30 transition-all duration-300 cursor-pointer"
              >
                <img src={partner.logo} alt={partner.name} className="h-10 sm:h-12 max-w-[120px] sm:max-w-[140px] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LATEST INSIGHTS */}
      <section id="blogs" className="py-20 sm:py-28 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/30 text-[#FFC300] text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <Cpu className="w-3.5 h-3.5" />
                <span>FEATURED SERIES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight whitespace-normal break-normal">
                Latest <span className="text-gradient-gold">Insights</span>
              </h2>
              <p className="text-white/60 text-sm sm:text-base mt-2 max-w-lg">
                Deep dives into Linux filesystems, inodes, memory mapping, and system engineering.
              </p>
            </div>
            <Link 
              to="/blogs" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FFC300] hover:text-white transition-colors group"
            >
              <span>View All Series & Articles</span> 
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BLOGS.slice(0, 3).map((blog) => (
              <motion.div 
                key={blog.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group glass-card rounded-3xl overflow-hidden glass-card-hover flex flex-col justify-between"
              >
                <a href={blog.link} target="_blank" rel="noreferrer" className="block">
                  <div className="aspect-video overflow-hidden relative bg-[#0D0E14]">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                      {blog.isSeries && (
                        <span className="px-2.5 py-1 bg-gradient-to-r from-[#FFC300] to-[#FF9900] text-black font-mono font-extrabold text-[10px] uppercase tracking-wider rounded-md shadow-lg flex items-center gap-1">
                          <Flame className="w-3 h-3 text-black" />
                          {blog.seriesTitle} • {blog.part}
                        </span>
                      )}
                      {blog.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider text-[#FFC300]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-white/40 mb-3">
                    <span className="text-[#FFC300] font-semibold">{blog.author}</span>
                    <span>•</span>
                    <span>{blog.readTime} read</span>
                  </div>

                  <a href={blog.link} target="_blank" rel="noreferrer">
                    <h3 className="text-xl font-bold font-display mb-4 text-white group-hover:text-[#FFC300] transition-colors leading-snug">
                      {blog.title}
                    </h3>
                  </a>

                  <p className="text-xs text-white/60 mb-6 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <a 
                    href={blog.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFC300] group-hover:text-white transition-colors"
                  >
                    <span>Read Article on Medium</span> 
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VIDEO SESSIONS */}
      <section id="videos" className="py-20 sm:py-28 relative border-t border-white/5 bg-[#050507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight whitespace-normal break-normal">
                Breakdown <span className="text-gradient-gold">Videos</span>
              </h2>
              <p className="text-white/60 text-sm sm:text-base mt-2 max-w-lg">
                Short sessions focused on building real systems from scratch.
              </p>
            </div>
            <Link 
              to="/videos" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FFC300] hover:text-white transition-colors group"
            >
              <span>View All Videos</span> 
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {VIDEOS.slice(0, 3).map((video) => (
              <motion.a
                key={video.id}
                href={video.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group glass-card rounded-3xl overflow-hidden glass-card-hover block"
              >
                <div className="aspect-video relative bg-[#0D0E14] flex items-center justify-center overflow-hidden">
                  {video.image && (
                    <img
                      src={video.image}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  
                  <div className="w-14 h-14 rounded-full bg-[#FFC300] text-black flex items-center justify-center shadow-[0_0_30px_rgba(255,195,0,0.5)] group-hover:scale-110 transition-transform relative z-10">
                    <Play className="w-6 h-6 fill-black translate-x-0.5" />
                  </div>

                  <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-mono text-white/80 flex items-center gap-1.5 border border-white/10 z-10">
                    <Clock className="w-3 h-3 text-[#FFC300]" /> {video.duration}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-[10px] font-mono text-[#FFC300] font-bold uppercase tracking-widest mb-2">
                    {video.date}
                  </div>
                  <h3 className="text-xl font-bold font-display mb-3 text-white group-hover:text-[#FFC300] transition-colors leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-xs text-white/50 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SPONSORSHIP SECTION */}
      <section id="sponsorship" className="py-20 sm:py-28 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="glass-card border border-white/15 rounded-3xl p-6 sm:p-10 md:p-14 grid md:grid-cols-12 gap-8 items-center bg-[#0A0B10]">
            <div className="md:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-display text-white whitespace-normal break-normal">
                Support the next wave of builders
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl">
                Empower open-source systems education, hackathons, and global learning opportunities.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                <Link
                  to="/sponsorship"
                  className="px-7 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FFC300] to-[#FF9900] text-black font-bold text-xs uppercase tracking-wider hover:scale-[1.03] transition-all shadow-xl"
                >
                  Become a Sponsor
                </Link>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScxFDu-jxxNVz4DlDkYhsJIh9BA1-8tmJdz1JIsBPIui1OKwg/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 sm:px-8 py-3.5 rounded-full border border-white/15 bg-white/5 font-bold text-xs uppercase tracking-wider text-white hover:bg-[#FFC300] hover:text-black hover:border-[#FFC300] transition-all"
                >
                  Open Sponsorship Form
                </a>
              </div>
            </div>

            <div className="md:col-span-4 glass p-6 rounded-2xl border-white/10 bg-white/[0.02]">
              <div className="text-xs font-mono text-[#FFC300] font-bold uppercase mb-2">SPONSORSHIP DIRECTORY</div>
              <div className="text-lg font-bold font-display text-white mb-2">Rootsprouthub Foundation</div>
              <div className="text-xs text-white/50 leading-relaxed">
                Directly fuel open source development, core infrastructure maintenance, and community grants.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
