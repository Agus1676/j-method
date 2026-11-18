import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Zap, ShieldCheck } from 'lucide-react';
import { COACH_DATA, getWhatsAppLink } from '../data/content';

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
    { name: 'El Método', href: '#metodo' },
    { name: 'Skills', href: '#skills' },
    { name: 'Programas', href: '#programas' },
    { name: 'Sobre Jorge', href: '#coach' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#CCFF00] to-[#8aff1e] flex items-center justify-center text-black font-extrabold text-xl shadow-lg shadow-[#CCFF00]/20 group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-2xl tracking-tighter text-white group-hover:text-[#CCFF00] transition-colors">
                J-METHOD
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#8E9AA7] -mt-1">
                CALISTHENICS COACH
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#CCFF00] ${
                  link.highlight
                    ? 'text-[#CCFF00] bg-[#CCFF00]/10 px-3 py-1.5 rounded-full border border-[#CCFF00]/25 font-semibold'
                    : 'text-slate-300'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getWhatsAppLink('Hola Jorge! Vengo de la web J-METHOD y quiero consultar por los planes de coaching.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#CCFF00] text-black font-semibold text-sm hover:bg-[#b8e600] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#CCFF00]/20"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={getWhatsAppLink('Hola Jorge! Vengo de la web J-METHOD y quiero consultar por los planes.')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 rounded-xl bg-[#CCFF00]/15 text-[#CCFF00] border border-[#CCFF00]/30"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#CCFF00] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                link.highlight
                  ? 'bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/30 font-semibold'
                  : 'text-slate-200 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10">
            <a
              href={getWhatsAppLink('Hola Jorge! Vengo de la web J-METHOD y quiero consultar por los planes.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#CCFF00] text-black font-bold text-center text-sm shadow-lg shadow-[#CCFF00]/20"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Escribir a Jorge (+54 9 387 466-7930)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
