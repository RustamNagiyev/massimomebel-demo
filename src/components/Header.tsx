import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { BRAND } from '../data/content';
import { Language } from '../types';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#kolleksiyalar', label: currentLang === 'az' ? 'Kolleksiyalar' : currentLang === 'ru' ? 'Коллекции' : 'Collections' },
    { href: '#haqqimizda', label: currentLang === 'az' ? 'Haqqımızda' : currentLang === 'ru' ? 'О бренде' : 'About' },
    { href: '#secilmisler', label: currentLang === 'az' ? 'Məhsullar' : currentLang === 'ru' ? 'Изделия' : 'Pieces' },
    { href: '#interyer', label: currentLang === 'az' ? 'İnteryer' : currentLang === 'ru' ? 'Интерьер' : 'Interior' },
    { href: '#tedbirler', label: currentLang === 'az' ? 'Tədbirlər' : currentLang === 'ru' ? 'События' : 'Events' },
    { href: '#elaqe', label: currentLang === 'az' ? 'Əlaqə' : currentLang === 'ru' ? 'Контакты' : 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0B0B0C]/90 backdrop-blur-md py-4 border-b border-[#B89B5E]/20 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex flex-col group text-left">
          <span className="font-serif text-2xl lg:text-3xl tracking-[0.24em] font-light text-[#EDE9E1] group-hover:text-white transition-colors duration-300">
            MASSIMO
          </span>
          <span className="text-[8.5px] uppercase tracking-[0.38em] text-[#B89B5E] font-sans font-medium -mt-0.5">
            MOBILI LUXURY
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-9" aria-label="Əsas naviqasiya">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.18em] text-[#EDE9E1]/80 hover:text-[#B89B5E] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B89B5E] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Section: Language switcher & Showroom CTA */}
        <div className="hidden lg:flex items-center space-x-7">
          {/* Minimal Language Switcher */}
          <div className="flex items-center text-xs tracking-wider text-[#8E8A82]" aria-label="Dil seçimi">
            <button
              onClick={() => onLanguageChange('az')}
              className={`transition-colors duration-200 cursor-pointer ${
                currentLang === 'az' ? 'text-[#B89B5E] font-medium' : 'hover:text-[#EDE9E1]'
              }`}
            >
              AZ
            </button>
            <span className="mx-2 text-[#8E8A82]/40" aria-hidden="true">·</span>
            <button
              onClick={() => onLanguageChange('en')}
              className={`transition-colors duration-200 cursor-pointer ${
                currentLang === 'en' ? 'text-[#B89B5E] font-medium' : 'hover:text-[#EDE9E1]'
              }`}
            >
              EN
            </button>
            <span className="mx-2 text-[#8E8A82]/40" aria-hidden="true">·</span>
            <button
              onClick={() => onLanguageChange('ru')}
              className={`transition-colors duration-200 cursor-pointer ${
                currentLang === 'ru' ? 'text-[#B89B5E] font-medium' : 'hover:text-[#EDE9E1]'
              }`}
            >
              RU
            </button>
          </div>

          {/* Minimal Rectangular Outline CTA */}
          <a
            href="#elaqe"
            className="border border-[#B89B5E]/50 hover:border-[#B89B5E] text-[#EDE9E1] hover:text-[#0B0B0C] hover:bg-[#B89B5E] px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] transition-all duration-400 font-sans cursor-pointer"
          >
            {currentLang === 'az' ? 'Showroom-a gəlin' : currentLang === 'ru' ? 'В шоурум' : 'Visit Showroom'}
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center space-x-4 lg:hidden">
          <div className="flex items-center text-xs text-[#8E8A82]">
            <button
              onClick={() => onLanguageChange('az')}
              className={`px-1 ${currentLang === 'az' ? 'text-[#B89B5E] font-bold' : ''}`}
            >
              AZ
            </button>
            <span className="text-[#8E8A82]/30">/</span>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-1 ${currentLang === 'en' ? 'text-[#B89B5E] font-bold' : ''}`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#EDE9E1] hover:text-[#B89B5E] p-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B89B5E]"
            aria-label={mobileMenuOpen ? 'Menyunu bağla' : 'Menyunu aç'}
          >
            {mobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Full-Screen Dark Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 top-0 left-0 w-full h-screen bg-[#0B0B0C] z-40 transition-all duration-500 flex flex-col justify-between p-8 pt-24 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-8'
        }`}
      >
        <div className="space-y-6 text-left">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#B89B5E]">Naviqasiya</p>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl text-[#EDE9E1] hover:text-[#B89B5E] tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu bottom contact details */}
        <div className="pt-8 border-t border-white/10 space-y-4">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#B89B5E]">Bakı Flaqman Showroom</p>
          <p className="text-sm text-[#EDE9E1]/80">{BRAND.address}</p>
          <p className="text-xs text-[#8E8A82]">{BRAND.workingHours}</p>

          <div className="flex gap-3 pt-2">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="flex-1 flex items-center justify-center gap-2 border border-[#B89B5E]/40 text-[#EDE9E1] py-3 text-xs uppercase tracking-wider hover:border-[#B89B5E]"
            >
              <Phone size={14} className="text-[#B89B5E]" />
              Zəng et
            </a>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#B89B5E] text-[#0B0B0C] py-3 text-xs uppercase tracking-wider font-medium"
            >
              <MessageSquare size={14} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
