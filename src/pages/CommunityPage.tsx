import React from 'react';
import { motion } from 'motion/react';
import { Github, Globe, Users, Trophy, Zap, Shield, Star, Youtube, Instagram, Linkedin } from 'lucide-react';

const CommunityPage = () => {
  const stats = [
    { label: 'Members In Community', value: '500+', icon: Users },
    { label: 'GitHub Stars', value: '100+', icon: Star },
    { label: 'Collaborations', value: '10+', icon: Globe },
    { label: 'YouTube Subs', value: '900+', icon: Youtube },
  ];

  return (
    <div className="pt-36 pb-28 bg-[#070709] text-white min-h-screen bg-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display mb-6 leading-tight break-normal whitespace-normal tracking-tight">
              A Community <br />
              <span className="text-gradient-gold">Without Borders.</span>
            </h1>
            <p className="text-base sm:text-lg text-white/60 mb-8 leading-relaxed">
              At Rootsprouthub, we believe the best way to truly learn is to start from the roots — break things down to their fundamentals, and then grow them back up into fully working production systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/RootSprout"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-[#FFC300] to-[#FF9900] text-black px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl hover:scale-[1.03] transition-all"
              >
                Contribute on GitHub <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/root-sprout"
                target="_blank"
                rel="noreferrer"
                className="glass border border-white/15 text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all flex items-center gap-2"
              >
                Connect on LinkedIn <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono text-white/60">
              <a href="https://github.com/RootSprout" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#FFC300] transition-colors">
                <Github className="w-4 h-4 text-[#FFC300]" /> github.com/RootSprout
              </a>
              <a href="https://www.linkedin.com/company/root-sprout" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#FFC300] transition-colors">
                <Linkedin className="w-4 h-4 text-[#FFC300]" /> LinkedIn
              </a>
              <a href="https://www.youtube.com/@meerthika" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#FFC300] transition-colors">
                <Youtube className="w-4 h-4 text-[#FFC300]" /> YouTube
              </a>
              <a href="https://www.instagram.com/rootsprouthub/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#FFC300] transition-colors">
                <Instagram className="w-4 h-4 text-[#FFC300]" /> Instagram
              </a>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 sm:p-8 rounded-3xl border-white/10 text-center"
              >
                <div className="w-12 h-12 bg-[#FFC300]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#FFC300]">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold font-display mb-1 text-white">{stat.value}</div>
                <div className="text-[10px] font-mono text-white/50 font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-center mb-16 break-normal">
            Why Join <span className="text-gradient-gold">Rootsprouthub?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-3xl border-white/10">
              <div className="w-12 h-12 bg-[#FFC300]/10 rounded-2xl flex items-center justify-center mb-6 text-[#FFC300]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-3 text-white">Learn From First Principles</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Break systems down to their fundamentals and rebuild them to truly understand how production software works.
              </p>
            </div>
            <div className="glass-card p-8 rounded-3xl border-white/10">
              <div className="w-12 h-12 bg-[#FFC300]/10 rounded-2xl flex items-center justify-center mb-6 text-[#FFC300]">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-3 text-white">Build Real Systems</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Work on low-level projects that teach you the internals of compilers, databases, networks, and OS concepts.
              </p>
            </div>
            <div className="glass-card p-8 rounded-3xl border-white/10">
              <div className="w-12 h-12 bg-[#FFC300]/10 rounded-2xl flex items-center justify-center mb-6 text-[#FFC300]">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-3 text-white">Grow With Community</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Collaborate, share, and contribute to open-source projects that grow organically and sustainably.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
