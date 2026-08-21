import React from 'react';
import { motion } from 'motion/react';
import { BOOKS } from '../constants';
import { Star, ShoppingCart } from 'lucide-react';

const BooksPage = () => {
  return (
    <div className="pt-36 pb-28 bg-[#070709] text-white min-h-screen bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="text-xs font-mono text-[#FFC300] uppercase tracking-widest font-bold mb-2">
            ( PUBLICATIONS & BLUEPRINTS )
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold font-display tracking-tight mb-6">
            Rootsprouthub <span className="text-gradient-gold">Originals</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed font-normal">
            Exclusive publications from the Rootsprouthub community, crafted to elevate your low-level system design expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BOOKS.map((book) => (
            <motion.div 
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group glass-card rounded-3xl p-6 glass-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[3/4] mb-6 rounded-2xl overflow-hidden bg-[#0D0E14] border border-white/10">
                  <img 
                    src={book.coverImage} 
                    alt={book.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10">
                    <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#FFC300] border border-white/10">
                      <Star className="w-3.5 h-3.5 fill-[#FFC300]" /> {book.rating}
                    </div>
                    <div className="text-white font-bold bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs border border-white/10">
                      {book.price}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 mb-3">
                  {book.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-[#FFC300]/10 text-[#FFC300] text-[10px] font-mono font-bold rounded-md uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold font-display mb-1 text-white group-hover:text-[#FFC300] transition-colors">{book.title}</h3>
                {book.subtitle && <p className="text-xs text-white/60 mb-2 font-mono">{book.subtitle}</p>}
                <p className="text-xs text-white/40 mb-3 font-mono">By {book.author}</p>
                <p className="text-xs text-white/60 mb-6 line-clamp-3 leading-relaxed">
                  {book.description}
                </p>
              </div>

              <div>
                <a
                  href={book.buyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FFC300] to-[#FF9900] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] transition-transform"
                >
                  <ShoppingCart className="w-4 h-4" /> Get Copy
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
