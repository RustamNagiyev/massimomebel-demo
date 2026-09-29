import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { COLLECTIONS } from '../data/content';
import { Category, Language } from '../types';

interface CollectionsProps {
  currentLang: Language;
  onSelectCategory: (category: Category) => void;
}

export const Collections: React.FC<CollectionsProps> = ({ currentLang, onSelectCategory }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const titles = {
    az: {
      kicker: 'KOLLEKSİYALAR',
      heading: 'Hər məkan üçün bir hekayə',
      subtext: 'İtalyan zövqü ilə hazırlanmış, müasir və aristokratik həyat tərzinə uyğun eksklüziv mebel xətləri.',
      explore: 'Kəşf et',
      viewAll: 'Kolleksiyanı vərəqləyin',
    },
    en: {
      kicker: 'COLLECTIONS',
      heading: 'A story for every space',
      subtext: 'Bespoke Italian furniture collections tailored for refined modern and classical lifestyles.',
      explore: 'Explore',
      viewAll: 'Browse Collection',
    },
    ru: {
      kicker: 'КОЛЛЕКЦИИ',
      heading: 'История для каждого пространства',
      subtext: 'Эксклюзивные итальянские мебельные серии для современного и классического образа жизни.',
      explore: 'Исследовать',
      viewAll: 'Смотреть коллекцию',
    },
  }[currentLang];

  // Grid spans for editorial asymmetry:
  // Card 0: col-span-12 lg:col-span-7 (large showcase)
  // Card 1: col-span-12 lg:col-span-5
  // Card 2: col-span-12 lg:col-span-5
  // Card 3: col-span-12 lg:col-span-7
  // Card 4: col-span-12 lg:col-span-6
  // Card 5: col-span-12 lg:col-span-6
  const getGridClass = (index: number) => {
    switch (index) {
      case 0:
        return 'lg:col-span-7 h-[420px] lg:h-[500px]';
      case 1:
        return 'lg:col-span-5 h-[420px] lg:h-[500px]';
      case 2:
        return 'lg:col-span-5 h-[420px] lg:h-[480px]';
      case 3:
        return 'lg:col-span-7 h-[420px] lg:h-[480px]';
      case 4:
        return 'lg:col-span-6 h-[400px] lg:h-[460px]';
      case 5:
        return 'lg:col-span-6 h-[400px] lg:h-[460px]';
      default:
        return 'lg:col-span-6 h-[420px]';
    }
  };

  return (
    <section id="kolleksiyalar" className="py-28 lg:py-36 bg-[#0B0B0C] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#B89B5E]" aria-hidden="true" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-medium font-sans">
                {titles.kicker}
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#EDE9E1] tracking-tight">
              {titles.heading}
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-sm text-[#8E8A82] font-light leading-relaxed">
            {titles.subtext}
          </p>
        </div>

        {/* Asymmetric Editorial Grid of 6 Categories */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {COLLECTIONS.map((cat, idx) => {
            const isHovered = hoveredId === cat.id;
            const categoryName = currentLang === 'en' ? cat.nameEn : currentLang === 'ru' ? cat.nameRu : cat.name;

            return (
              <div
                key={cat.id}
                className={`col-span-12 ${getGridClass(idx)} relative group overflow-hidden cursor-pointer bg-[#141416]`}
                onMouseEnter={() => setHoveredId(cat.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectCategory(cat)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectCategory(cat);
                  }
                }}
                aria-label={`${categoryName} kolleksiyasına bax`}
              >
                {/* Background Image with 700ms scale transition */}
                <img
                  src={cat.image}
                  alt={`Massimo Mebel - ${cat.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center filter brightness-[0.8] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:via-black/30 transition-all duration-500" />

                {/* 1px subtle border container */}
                <div className="absolute inset-0 border border-white/5 pointer-events-none group-hover:border-[#B89B5E]/30 transition-colors duration-500" />

                {/* Card Content (Leading directly with title, zero pills) */}
                <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-between z-10">
                  {/* Top metadata unboxed with typographic separator */}
                  <div className="flex items-center justify-between text-xs text-[#EDE9E1]/70 font-sans tracking-widest uppercase">
                    <span className="text-[#B89B5E] text-[11px] font-medium tracking-[0.25em]">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] text-[#8E8A82] tracking-wider">
                      {cat.itemCount}
                    </span>
                  </div>

                  {/* Bottom title & reveal CTA */}
                  <div>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#EDE9E1] font-light tracking-wide mb-2 transition-transform duration-500 group-hover:-translate-y-1">
                      {categoryName}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-[#8E8A82] line-clamp-1 max-w-md font-light mb-4 transition-colors group-hover:text-[#EDE9E1]/90">
                      {cat.subtitle}
                    </p>

                    {/* Gold underline and "Kəşf et →" */}
                    <div className="relative pt-2 flex items-center justify-between">
                      {/* Gold line drawing in */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10">
                        <div
                          className={`h-[1px] bg-[#B89B5E] transition-all duration-500 ease-out ${
                            isHovered ? 'w-full' : 'w-0'
                          }`}
                        />
                      </div>

                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#B89B5E] font-sans font-medium transition-all duration-300 transform group-hover:translate-x-1">
                        <span>{titles.explore}</span>
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </div>

                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#8E8A82]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {titles.viewAll}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
