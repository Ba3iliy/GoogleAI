import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about', label: 'О компании' },
  { href: '#products', label: 'Продукция' },
  { href: '#services', label: 'Услуги' },
  { href: '#docs', label: 'Документы' },
  { href: '#contacts', label: 'Контакты' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    setMobileMenuOpen(false);

    // If it's the logo or empty hash, scroll to top
    if (href === '#' || href === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // 80px offset for the sticky header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-bg/90 backdrop-blur-md border-white/10 py-3 shadow-lg shadow-black/50' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => handleScrollTo(e, '#')}
          className="flex items-center gap-3 group"
          aria-label="Робокон XXI"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 group-hover:border-accent/50 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.15)]">
            <Cpu className="w-6 h-6 text-accent transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-white leading-none tracking-tight">
              РОБОКОН <span className="text-accent">XXI</span>
            </span>
            <span className="text-[10px] font-medium text-muted tracking-[0.2em] leading-none mt-1 group-hover:text-white transition-colors">
              AUTOMATION
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="px-4 py-2 text-sm font-medium text-muted hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <div className="w-px h-4 bg-white/10 mx-2" />
          <a 
            href="#en" 
            onClick={(e) => e.preventDefault()} // Placeholder functionality
            className="px-3 py-1 text-xs font-bold text-accent border border-accent/30 rounded hover:bg-accent/10 transition-all cursor-pointer"
          >
            EN
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-panel border-b border-white/10 shadow-2xl backdrop-blur-xl p-4 flex flex-col gap-2 animate-in slide-in-from-top-5 fade-in duration-200">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="block px-4 py-3 text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};