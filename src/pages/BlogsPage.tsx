import React from 'react';
import { motion } from 'motion/react';
import { BLOGS } from '../constants';
import { ArrowRight } from 'lucide-react';

const BlogsPage = () => {
  return (
    <div className="pt-36 pb-28 bg-[#070709] text-white min-h-screen bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="text-xs font-mono text-[#FFC300] uppercase tracking-widest font-bold mb-2">
            ( KNOWLEDGE ARCHIVE )
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold font-display tracking-tight mb-6">
            Rootsprouthub <span className="text-gradient-gold">Insights</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed font-normal">
            Deep dives into open source systems, low-level engineering culture, and internal architecture patterns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((blog) => (
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
                  <div className="absolute top-4 left-4 flex gap-2">
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
