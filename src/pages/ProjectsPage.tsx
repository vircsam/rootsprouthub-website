import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { Github, Code2, Star, Users, ExternalLink } from 'lucide-react';

const ProjectsPage = () => {
  const formatStars = (stars?: number) => {
    if (stars === undefined) return '—';
    if (stars < 1000) return `${stars}`;
    return `${(stars / 1000).toFixed(1)}k`;
  };

  return (
    <div className="pt-36 pb-28 bg-[#070709] text-white min-h-screen bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="text-xs font-mono text-[#FFC300] uppercase tracking-widest font-bold mb-2">
            ( REPOSITORIES & SYSTEMS )
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold font-display tracking-tight mb-6">
            Open Source <span className="text-gradient-gold">Projects</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed font-normal">
            Explore and contribute to low-level systems, kernel drivers, query engines, and networking stacks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="glass-card p-7 rounded-3xl glass-card-hover relative flex flex-col justify-between"
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Github className="w-16 h-16" />
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
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFC300]">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div className="flex gap-2">
                    {project.trending && (
                      <span className="px-2.5 py-1 bg-[#FFC300]/10 text-[#FFC300] text-[10px] font-mono font-bold rounded-md border border-[#FFC300]/30 tracking-wider">
                        TRENDING
                      </span>
                    )}
                    <span className="px-2.5 py-1 bg-white/5 text-white/60 text-[10px] font-mono font-bold rounded-md border border-white/10 uppercase tracking-wider">
                      {project.difficulty}
                    </span>
                  </div>
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

                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-grow py-3.5 rounded-xl bg-gradient-to-r from-[#FFC300] to-[#FF9900] text-black font-bold text-xs uppercase tracking-wider text-center block shadow-xl hover:scale-[1.02] transition-transform"
                  >
                    Contribute Now
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl glass border-white/10 text-white hover:text-[#FFC300] transition-colors"
                    aria-label={`Open ${project.name} on GitHub`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
