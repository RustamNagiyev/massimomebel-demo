import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { IMAGES, BRAND } from '../data/content';
import { Language } from '../types';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const content = {
    az: {
      label: 'BAKI · LÜKS MEBEL',
      heading: 'İncəsənət kimi yaşayın.',
      subtext: 'Dünya brendlərinin Bakıdakı ünvanı. Zərif dizayn, mükəmməl keyfiyyət, sizin məkanınız üçün.',
      ctaPrimary: 'Kolleksiyalara bax',
      ctaSecondary: 'Showroom-a gəlin',
      scroll: 'Aşağı diyirləyin',
    },
    en: {
      label: 'BAKU · LUXURY FURNITURE',
      heading: 'Live in works of art.',
      subtext: 'The home of world-renowned brands in Baku. Refined aesthetics and bespoke craftsmanship for your space.',
      ctaPrimary: 'Explore Collections',
      ctaSecondary: 'Visit Showroom',
      scroll: 'Scroll to explore',
    },
    ru: {
      label: 'БАКУ · ЛЮКСОВАЯ МЕБЕЛЬ',
      heading: 'Живите как в искусстве.',
      subtext: 'Адрес мировых брендов в Баку. Утонченный дизайн, безупречное качество для вашего пространства.',
      ctaPrimary: 'Смотреть коллекции',
      ctaSecondary: 'Посетить шоурум',
      scroll: 'Листайте вниз',
    },
  }[currentLang];

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#0B0B0C]">
      {/* Background cinematic image with subtle zoom / parallax illusion */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Massimo Mebel lüks qonaq otağı və zərif interyer dizaynı"
          fetchPriority="high"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08] scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        {/* Editorial gradient overlays for cinematic mood and WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/45 to-[#0B0B0C]/65" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/70 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-3xl text-left">
          {/* Small champagne gold label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-[1px] bg-[#B89B5E]" aria-hidden="true" />
            <span className="text-[11px] lg:text-xs uppercase tracking-[0.32em] text-[#B89B5E] font-medium font-sans">
              {content.label}
            </span>
          </div>

          {/* Huge Serif Heading */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#EDE9E1] leading-[1.08] tracking-tight mb-7">
            {content.heading}
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg lg:text-xl text-[#EDE9E1]/85 font-light max-w-2xl leading-relaxed mb-10">
            {content.subtext}
          </p>

          {/* Action buttons (Anti-slop zero-pill discipline) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <a
              href="#kolleksiyalar"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#B89B5E] text-[#EDE9E1] hover:text-[#0B0B0C] hover:bg-[#B89B5E] text-xs uppercase tracking-[0.24em] transition-all duration-400 font-sans cursor-pointer group"
            >
              <span>{content.ctaPrimary}</span>
            </a>

            <a
              href="#elaqe"
              className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.22em] text-[#EDE9E1]/90 hover:text-[#B89B5E] transition-colors duration-300 py-4 group"
            >
              <span>{content.ctaSecondary}</span>
              <ArrowUpRight
                size={16}
                className="text-[#B89B5E] transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Thin Animated Scroll Cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <a
          href="#haqqimizda"
          className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[#8E8A82] hover:text-[#B89B5E] transition-colors"
          aria-label={content.scroll}
        >
          <span className="hidden sm:inline font-sans">{content.scroll}</span>
          <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
            <div className="w-full h-1/2 bg-[#B89B5E] absolute top-0 animate-[moveDown_2s_cubic-bezier(0.65,0,0.35,1)_infinite]" />
          </div>
        </a>
      </div>

      <style>{`
        @keyframes moveDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};
