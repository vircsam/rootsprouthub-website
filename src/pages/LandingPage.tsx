import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, Star, Users, Zap, Github, Code2, Calendar, Trophy, 
  Shield, Globe, ChevronRight, ShoppingCart, Linkedin, Youtube, 
  Instagram, Play, Clock, Sparkles, Terminal, ArrowUpRight, CheckCircle2 
} from 'lucide-react';
import { BLOGS, PROJECTS, EVENTS, PARTNERS, BOOKS, VIDEOS } from '../constants';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-grid">
      {/* Dynamic Ambient Background Lighting */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#FFC300]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] bg-[#FF4D23]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Headline & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8"
        >
          {/* Editorial Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#FFC300]/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#FFC300] animate-ping" />
            <span className="text-xs font-mono tracking-widest text-[#FFC300] uppercase font-bold">
              ( 01 ) OPEN SOURCE ECOSYSTEM
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-display tracking-tight leading-[0.95] text-white">
            Build. Break. <br />
            Rebuild. <br />
            <span className="text-gradient-gold">Learn.</span>
          </h1>

          <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed font-normal">
            Rootsprouthub is a free, open-source platform that helps students and developers build low-level systems from scratch to understand the internal mechanics of production architectures.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link 
              to="/projects" 
              className="bg-gradient-to-r from-[#FFC300] via-[#FFB800] to-[#FF9900] text-black font-bold px-8 py-4 rounded-full flex items-center gap-3 text-sm tracking-wider uppercase glow-gold hover:glow-gold-strong hover:scale-[1.03] transition-all duration-300 group shadow-2xl"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link 
              to="/community" 
              className="glass px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase text-white hover:bg-white/10 border border-white/15 transition-all duration-300 hover:scale-[1.03]"
            >
              Join Community
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Untold-inspired Floating Sticky Metric Cards + Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Terminal Box */}
          <div className="relative z-10 glass-card rounded-3xl p-6 md:p-8 border-white/15 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF4D23]" />
                <div className="w-3 h-3 rounded-full bg-[#FFB800]" />
                <div className="w-3 h-3 rounded-full bg-[#10B981]" />
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-white/50 bg-white/5 px-2.5 py-1 rounded-md">
                <Terminal className="w-3 h-3 text-[#FFC300]" />
                <span>rootsprouthub v2.0.0</span>
              </div>
            </div>

            <div className="space-y-4 font-mono text-xs md:text-sm">
              <div className="flex gap-3 items-center">
                <span className="text-[#FFC300] font-bold">$</span>
                <span className="text-white/90">npm install @rootsprouthub/core</span>
              </div>
              <div className="text-white/40 pl-6 text-xs">... fetching architecture modules</div>
              <div className="text-emerald-400 pl-6 flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5" /> Core engine initialized successfully
              </div>

              <div className="flex gap-3 items-center pt-2">
                <span className="text-[#FFC300] font-bold">$</span>
                <span className="text-white/90">rootsprouthub start --community</span>
              </div>
              <div className="text-[#FFC300] pl-6 animate-pulse text-xs">
                🚀 Launching open-source learning hub...
              </div>
            </div>
          </div>

          {/* Untold-Style Floating Sticky Metric Cards */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-4 md:-right-8 sticky-note-orange p-5 rounded-2xl z-20 max-w-[200px] border border-white/20 transform rotate-3"
          >
            <div className="text-2xl font-black font-display tracking-tight text-white mb-1">100+</div>
            <div className="text-xs font-bold text-white/90 leading-tight">
              GitHub stars powering our open repo.
            </div>
            <div className="mt-2 text-[10px] font-mono text-white/70 italic">(and counting every day)</div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-4 md:-left-8 sticky-note-blue p-5 rounded-2xl z-20 max-w-[210px] border border-white/20 transform -rotate-3"
          >
            <div className="text-2xl font-black font-display tracking-tight text-white mb-1">500+</div>
            <div className="text-xs font-bold text-white/90 leading-tight">
              Developers building systems together.
            </div>
            <div className="mt-2 text-[10px] font-mono text-white/70 italic">(active ecosystem)</div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="hidden sm:block absolute top-1/2 -right-12 sticky-note-gold p-4 rounded-2xl z-20 max-w-[170px] border border-black/10 transform rotate-6"
          >
            <div className="text-xl font-black font-display tracking-tight text-black mb-1">29+</div>
            <div className="text-xs font-bold text-black/80 leading-tight">
              Low-level projects built from scratch.
            </div>
          </motion.div>
        </motion.div>
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
    <div className="bg-[#070709] text-white">
      <Hero />

      {/* SECTION: Rootsprouthub Originals (Books) */}
      <section id="books" className="py-28 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#FFC300]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs font-mono text-[#FFC300] uppercase tracking-widest font-bold mb-2">
                ( 02 / PUBLICATIONS )
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight">
                Rootsprouthub <span className="text-gradient-gold">Originals</span>
              </h2>
              <p className="text-white/60 text-base mt-2 max-w-lg">
                Exclusive books, guides, and architectural blueprints written by community maintainers.
              </p>
            </div>
            <Link 
              to="/books" 
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FFC300] hover:text-white transition-colors group"
            >
              <span>Explore All Originals</span> 
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BOOKS.slice(0, 3).map((book) => (
              <motion.div 
                key={book.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group glass-card rounded-3xl overflow-hidden glass-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[3/4] overflow-hidden relative bg-[#0D0E14]">
                    <img 
                      src={book.coverImage} 
                      alt={book.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-70" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10">
                      <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-[#FFC300] border border-white/10">
                        <Star className="w-3.5 h-3.5 fill-[#FFC300]" /> {book.rating}
                      </div>
                      <div className="text-white font-bold bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-xs border border-white/10">
                        {book.price}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-display mb-2 text-white group-hover:text-[#FFC300] transition-colors line-clamp-1">
                      {book.title}
                    </h3>
                    <p className="text-xs font-mono text-white/50 mb-6">Author: {book.author}</p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={book.buyLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 rounded-xl bg-white/5 border border-white/10 font-bold text-xs uppercase tracking-wider hover:bg-[#FFC300] hover:text-black hover:border-[#FFC300] transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg"
                  >
                    <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span>Get Digital Copy</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Latest Insights (Blogs) */}
      <section id="blogs" className="py-28 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs font-mono text-[#FFC300] uppercase tracking-widest font-bold mb-2">
                ( 03 / KNOWLEDGE )
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight">
                Latest <span className="text-gradient-gold">Insights</span>
              </h2>
              <p className="text-white/60 text-base mt-2 max-w-lg">
                Deep dives into compiler design, kernel execution, distributed consensus, and system engineering.
              </p>
            </div>
            <Link 
              to="/blogs" 
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FFC300] hover:text-white transition-colors group"
            >
              <span>View All Blogs</span> 
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
                    <div className="absolute top-4 left-4 flex gap-2 z-10">
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
                    <span>{blog.author}</span>
                    <span>•</span>
                    <span>{blog.readTime} read</span>
                    <span>•</span>
                    <span>{blog.date}</span>
                  </div>

                  <a href={blog.link} target="_blank" rel="noreferrer">
                    <h3 className="text-xl font-bold font-display mb-4 text-white group-hover:text-[#FFC300] transition-colors leading-snug">
                      {blog.title}
                    </h3>
                  </a>

                  <a 
                    href={blog.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFC300] group-hover:text-white transition-colors"
                  >
                    <span>Read Article</span> 
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link 
              to="/blogs" 
              className="px-8 py-3.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold tracking-wider uppercase text-white hover:bg-[#FFC300] hover:text-black hover:border-[#FFC300] transition-all duration-300 shadow-xl"
            >
              Explore Full Blog Archive
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION: Latest Videos */}
      <section id="videos" className="py-28 relative border-t border-white/5 bg-[#050507]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs font-mono text-[#FFC300] uppercase tracking-widest font-bold mb-2">
                ( 04 / SESSIONS )
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight">
                Video <span className="text-gradient-gold">Sessions</span>
              </h2>
              <p className="text-white/60 text-base mt-2 max-w-lg">
                Hands-on visual tutorials building real production components step by step.
              </p>
            </div>
            <Link 
              to="/videos" 
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FFC300] hover:text-white transition-colors group"
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
                  
                  {/* Play Icon Badge */}
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

      {/* SECTION: Featured Projects */}
      <section id="projects" className="py-28 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-mono text-[#FFC300] uppercase tracking-widest font-bold mb-2">
              ( 05 / REPOSITORIES )
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight mb-4">
              Featured <span className="text-gradient-gold">Projects</span>
            </h2>
            <p className="text-white/60 text-base">
              Discover high-impact open source repositories actively maintained by the Rootsprouthub community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project) => (
              <div 
                key={project.id} 
                className="glass-card p-7 rounded-3xl glass-card-hover relative flex flex-col justify-between"
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

      {/* SECTION: Events */}
      <section id="events" className="py-28 relative border-t border-white/5 bg-[#050507]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="text-xs font-mono text-[#FFC300] uppercase tracking-widest font-bold mb-2">
                  ( 06 / MEETUPS )
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight mb-4">
                  Upcoming <span className="text-gradient-gold">Events</span>
                </h2>
                <p className="text-white/60 text-base max-w-lg">
                  Join global virtual hackathons, live code reviews, and system architecture workshops.
                </p>
              </div>

              <div className="space-y-4">
                {EVENTS.slice(0, 4).map((event) => (
                  <div 
                    key={event.id} 
                    className="glass-card p-5 rounded-2xl border-white/10 hover:border-[#FFC300]/40 transition-all duration-300 flex items-center gap-5 group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFC300] group-hover:bg-[#FFC300] group-hover:text-black transition-all flex-shrink-0">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-mono text-[#FFC300] uppercase tracking-widest font-bold mb-1">
                        {event.type}
                      </div>
                      <h3 className="text-lg font-bold font-display text-white group-hover:text-[#FFC300] transition-colors">
                        {event.title}
                      </h3>
                      <div className="text-xs font-mono text-white/50 mt-1">
                        {event.date} • {event.location}
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#FFC300] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                ))}
              </div>

              <div>
                <Link 
                  to="/events" 
                  className="px-7 py-3 rounded-full border border-white/15 bg-white/5 text-xs font-bold tracking-wider uppercase text-white hover:bg-[#FFC300] hover:text-black hover:border-[#FFC300] transition-all duration-300 inline-block"
                >
                  View All Events
                </Link>
              </div>
            </div>

            {/* Spotlight Banner Card */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] glass-card rounded-3xl overflow-hidden p-3 relative border-white/15 shadow-2xl">
                <img 
                  src={EVENTS[0]?.image} 
                  alt="Event Banner" 
                  className="w-full h-full object-cover rounded-2xl opacity-60" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <div className="glass p-6 rounded-2xl border-white/15 backdrop-blur-xl">
                    <span className="px-2.5 py-1 bg-[#FFC300] text-black text-[10px] font-mono font-bold rounded-md uppercase tracking-wider mb-3 inline-block">
                      SPOTLIGHT EVENT
                    </span>
                    <h4 className="text-xl font-bold font-display text-white mb-2">{EVENTS[0]?.title}</h4>
                    <p className="text-xs font-mono text-white/60">{EVENTS[0]?.date} • {EVENTS[0]?.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Untold-Style Circular Partnerships & Ecosystem */}
      <section id="partners" className="py-28 border-t border-white/5 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-mono text-[#FFC300] uppercase tracking-widest font-bold mb-2">
              ( 07 / PARTNERSHIPS & INITIATIVES )
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight">
              Community <span className="text-gradient-gold">Ecosystem</span>
            </h2>
            <p className="text-white/60 text-sm mt-2">
              SIX SPECIALIZED INITIATIVES. ONE INTEGRATED OPEN SOURCE HUB.
            </p>
          </div>

          {/* Untold-inspired Overlapping Circles */}
          <div className="flex justify-center items-center py-8 overflow-x-auto no-scrollbar">
            <div className="flex -space-x-8 min-w-max px-4">
              {[
                { label: "KERNEL LAB", sub: "OS Internals" },
                { label: "NET STACK", sub: "TCP/IP & HTTP3" },
                { label: "DB ENGINE", sub: "ACID & Storage" },
                { label: "COMPILER", sub: "AST & Bytecode" },
                { label: "DEVOPS", sub: "Containers & K8s" },
                { label: "SECURITY", sub: "Low-level Crypto" },
              ].map((circle, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.08, zIndex: 30 }}
                  className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-[#0D0E14]/90 border border-[#FFC300]/40 flex flex-col items-center justify-center p-4 text-center backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-[#FFC300] hover:shadow-[0_0_30px_rgba(255,195,0,0.3)] relative group cursor-pointer"
                >
                  <span className="text-xs font-mono text-[#FFC300] font-bold tracking-wider mb-1">0{idx + 1}</span>
                  <span className="text-sm md:text-base font-extrabold font-display text-white group-hover:text-[#FFC300] transition-colors">
                    {circle.label}
                  </span>
                  <span className="text-[10px] font-mono text-white/50 mt-1">{circle.sub}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Grid of Partners */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center mt-16 opacity-60 hover:opacity-100 transition-opacity">
            {PARTNERS.map((partner) => (
              <div 
                key={partner.id} 
                className="glass p-4 rounded-2xl border-white/5 flex items-center justify-center grayscale hover:grayscale-0 hover:border-[#FFC300]/30 transition-all duration-300 cursor-pointer"
              >
                <img src={partner.logo} alt={partner.name} className="h-12 max-w-[140px] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Community Revolution CTA */}
      <section id="community" className="py-28 relative border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card rounded-[40px] p-10 md:p-16 border-white/15 relative overflow-hidden shadow-2xl bg-gradient-to-br from-[#0E0E14] to-[#070709]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC300]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-7 space-y-8">
                <div className="text-xs font-mono text-[#FFC300] uppercase tracking-widest font-bold">
                  ( 08 / COMMUNITY )
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold font-display leading-tight">
                  Join the <span className="text-gradient-gold">Rootsprouthub</span> <br className="hidden lg:block" />
                  Revolution.
                </h2>
                <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
                  Whether you're an experienced maintainer or just beginning to explore system engineering, build real-world software together with us.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="https://github.com/RootSprout"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gradient-to-r from-[#FFC300] to-[#FF9900] text-black font-bold px-8 py-4 rounded-full flex items-center gap-3 text-xs uppercase tracking-wider glow-gold hover:glow-gold-strong hover:scale-[1.03] transition-all duration-300 shadow-2xl"
                  >
                    <span>Join GitHub Repo</span>
                    <Github className="w-4 h-4" />
                  </a>
                  <Link 
                    to="/projects"
                    className="glass px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider text-white hover:bg-white/10 border border-white/15 transition-all duration-300"
                  >
                    Contribute Now
                  </Link>
                </div>

                {/* Social Links */}
                <div className="pt-4 flex flex-wrap gap-6 text-xs font-mono text-white/60">
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
              </div>

              <div className="lg:col-span-5 hidden lg:block space-y-6">
                <div className="glass p-7 rounded-3xl border-white/10 space-y-3">
                  <div className="w-11 h-11 bg-[#FFC300]/10 rounded-2xl flex items-center justify-center text-[#FFC300]">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div className="text-xl font-bold font-display text-white">Open Source First</div>
                  <div className="text-xs text-white/60 leading-relaxed">
                    Build completely in public, share codebase architecture, and learn through peer review.
                  </div>
                </div>

                <div className="glass p-7 rounded-3xl border-white/10 space-y-3">
                  <div className="w-11 h-11 bg-[#FFC300]/10 rounded-2xl flex items-center justify-center text-[#FFC300]">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div className="text-xl font-bold font-display text-white">Build From Scratch</div>
                  <div className="text-xs text-white/60 leading-relaxed">
                    Master software internals by implementing virtual memory, binary protocols, and storage algorithms.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Sponsorship */}
      <section id="sponsorship" className="py-28 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card border border-white/15 rounded-3xl p-8 md:p-14 grid md:grid-cols-12 gap-8 items-center bg-[#0A0B10]">
            <div className="md:col-span-8 space-y-4">
              <div className="text-xs font-mono text-[#FFC300] uppercase tracking-widest font-bold">
                ( 09 / SPONSORSHIP )
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white">
                Support the next wave of builders
              </h2>
              <p className="text-white/60 text-base max-w-xl">
                Empower open-source systems education, hackathons, and global learning opportunities.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/sponsorship"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FFC300] to-[#FF9900] text-black font-bold text-xs uppercase tracking-wider hover:scale-[1.03] transition-all shadow-xl"
                >
                  Become a Sponsor
                </Link>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScxFDu-jxxNVz4DlDkYhsJIh9BA1-8tmJdz1JIsBPIui1OKwg/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-3.5 rounded-full border border-white/15 bg-white/5 font-bold text-xs uppercase tracking-wider text-white hover:bg-[#FFC300] hover:text-black hover:border-[#FFC300] transition-all"
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
