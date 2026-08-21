import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import rootsproutLogo from '../assets/rootsprout-logo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Blogs', href: '/blogs' },
    { name: 'Videos', href: '/videos' },
    { name: 'Projects', href: '/projects' },
    { name: 'Books', href: '/books' },
    { name: 'Events', href: '/events' },
    { name: 'Partners', href: '/partners' },
    { name: 'Community', href: '/community' },
    { name: 'Sponsorship', href: '/sponsorship' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 max-w-full ${isScrolled ? 'glass py-3 border-b border-white/10 shadow-2xl backdrop-blur-xl bg-[#070709]/90' : 'bg-transparent py-5 sm:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer max-w-[70%] sm:max-w-none">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-[#0A0B10] border border-[#FFC300]/40 glow-gold group-hover:border-[#FFC300] transition-all duration-300 flex items-center justify-center p-1.5 flex-shrink-0">
            <img src={rootsproutLogo} alt="Rootsprouthub logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-base sm:text-lg font-bold font-display tracking-tight text-white group-hover:text-[#FFC300] transition-colors truncate">
              Rootsprouthub
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/40 -mt-1 truncate">Ecosystem</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive 
                    ? 'text-black font-bold bg-[#FFC300] shadow-[0_0_15px_rgba(255,195,0,0.4)]' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Action button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/projects"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FFC300] to-[#FF9900] text-black font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,195,0,0.5)] hover:scale-[1.03]"
          >
            <span>Explore Hub</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl glass border-white/10 flex items-center justify-center text-white hover:text-[#FFC300] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Overlay Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#070709]/98 backdrop-blur-2xl border-b border-white/10 p-5 lg:hidden shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                    location.pathname === link.href ? 'bg-[#FFC300] text-black font-bold' : 'text-white/80 hover:bg-white/5'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
                <Link
                  to="/projects"
                  className="w-full py-3 rounded-xl bg-[#FFC300] text-black font-bold text-center text-sm shadow-[0_0_20px_rgba(255,195,0,0.3)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Explore Projects
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
