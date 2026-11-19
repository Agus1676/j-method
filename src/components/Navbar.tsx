import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Zap } from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Skill Map (Test)', href: '#skill-map', highlight: true },
    { name: 'Planes & Precios', href: '#programas' },
    { name: 'Sobre Jorge', href: '#coach' },
    { name: 'Preguntas', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-2.5 shadow-xl' : 'bg-[#0B0D0E]/80 backdrop-blur-md py-3.5 border-b border-white/5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#CCFF00] flex items-center justify-center text-black font-extrabold text-base shadow-md shadow-[#CCFF00]/20 group-hover:scale-105 transition-transform">
              <Zap className="w-4 h-4 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl tracking-tighter text-white group-hover:text-[#CCFF00] transition-colors leading-none">
                J-METHOD
              </span>
              <span className="text-[9px] uppercase font-mono tracking-widest text-[#8E9AA7]">
                COACHING SW
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-[#CCFF00] ${
                  link.highlight
                    ? 'text-[#CCFF00] bg-[#CCFF00]/10 px-3 py-1 rounded-full border border-[#CCFF00]/25'
                    : 'text-slate-300'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppLink('Hola Jorge! Vengo de la web J-METHOD y quiero consultar por los planes de coaching.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#CCFF00] text-black font-bold text-xs hover:bg-[#b8e600] transition-all shadow-md shadow-[#CCFF00]/20"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Directo</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={getWhatsAppLink('Hola Jorge! Vengo de la web J-METHOD.')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-lg bg-[#CCFF00]/15 text-[#CCFF00] border border-[#CCFF00]/30"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-[#CCFF00]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-4 py-4 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                link.highlight
                  ? 'bg-[#CCFF00]/10 text-[#CCFF00] font-semibold'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <a
              href={getWhatsAppLink('Hola Jorge! Vengo de la web J-METHOD.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#CCFF00] text-black font-bold text-center text-xs"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chatear con Jorge (+54 9 387 466-7930)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
