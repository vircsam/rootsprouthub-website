import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BLOGS } from '../constants';
import { ArrowRight, Cpu, Layers, BookOpen, Sparkles } from 'lucide-react';

const BlogsPage = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'series' | 'from-scratch' | 'deep-dive'>('all');

  const seriesBlogs = BLOGS.filter(b => b.isSeries);
  const fromScratchBlogs = BLOGS.filter(b => b.tags.includes('From Scratch'));
  const deepDiveBlogs = BLOGS.filter(b => b.tags.includes('Deep Dive'));

  const displayedBlogs = 
    activeTab === 'series' 
      ? seriesBlogs 
      : activeTab === 'from-scratch' 
        ? fromScratchBlogs 
        : activeTab === 'deep-dive'
          ? deepDiveBlogs
          : BLOGS;

  return (
    <div className="pt-36 pb-28 bg-[#070709] text-white min-h-screen bg-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/30 text-[#FFC300] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE ARCHIVE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold font-display tracking-tight leading-tight mb-4 break-words">
            Rootsprouthub <span className="text-gradient-gold">Insights</span>
          </h1>
          <p className="text-sm sm:text-base text-white/60 max-w-2xl leading-relaxed">
            Deep dives into open source systems, low-level Linux kernel internals, compiler design, and backend engineering architecture.
          </p>

          {/* Series / From Scratch / Deep Dive / All Filter Tabs */}
          <div className="flex flex-wrap items-center gap-3 pt-6">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#FFC300] text-black shadow-lg scale-105'
                  : 'glass text-white/70 hover:text-white border-white/10'
              }`}
            >
              All Insights ({BLOGS.length})
            </button>

            <button
              onClick={() => setActiveTab('series')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'series'
                  ? 'bg-gradient-to-r from-[#FFC300] to-[#FF9900] text-black shadow-lg scale-105'
                  : 'glass text-[#FFC300] border-[#FFC300]/30 hover:border-[#FFC300]'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Kernel Series ({seriesBlogs.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('deep-dive')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'deep-dive'
                  ? 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white shadow-lg scale-105'
                  : 'glass text-[#60A5FA] border-[#3B82F6]/30 hover:border-[#3B82F6]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>Deep Dive ({deepDiveBlogs.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('from-scratch')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'from-scratch'
                  ? 'bg-gradient-to-r from-[#FF4D23] to-[#FF9900] text-white shadow-lg scale-105'
                  : 'glass text-white/80 border-white/15 hover:border-[#FF4D23]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF4D23]" />
              <span>From Scratch ({fromScratchBlogs.length})</span>
            </button>
          </div>
        </div>

        {/* Featured Kernel Series Spotlight Section */}
        <div className="mb-16">
          <div className="glass-card rounded-3xl p-6 sm:p-10 border-[#FFC300]/30 bg-gradient-to-r from-[#0E0E14] via-[#070709] to-[#0E0E14] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFC300]/10 rounded-full blur-[140px] pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/30 text-[#FFC300] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SPECIAL AUTHOR SERIES</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
                  Kernel Series: <span className="text-gradient-gold">Linux Filesystems & OS Internals</span>
                </h2>
                <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-xl">
                  An in-depth article series exploring inodes, directory structures, hard vs symbolic links, ext4, Btrfs, ZFS, and physical storage mechanics.
                </p>
              </div>

              <a 
                href={seriesBlogs[0]?.link} 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FFC300] to-[#FF9900] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl hover:scale-105 transition-transform flex-shrink-0"
              >
                <span>Read Part 1.2</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* All Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedBlogs.map((blog) => (
            <motion.div 
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
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
                      <span className="px-2.5 py-1 bg-gradient-to-r from-[#FFC300] to-[#FF9900] text-black font-mono font-extrabold text-[10px] uppercase tracking-wider rounded-md shadow-lg">
                        {blog.seriesTitle}
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
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>
                <a href={blog.link} target="_blank" rel="noreferrer">
                  <h3 className="text-xl font-bold font-display mb-4 text-white group-hover:text-[#FFC300] transition-colors leading-snug">
                    {blog.title}
                  </h3>
                </a>
                <p className="text-xs text-white/50 mb-6 leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
                <a href={blog.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFC300] group-hover:text-white transition-colors">
                  <span>Read Full Article</span> <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
