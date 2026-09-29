import React from 'react';
import { STATS } from '../data/content';
import { Language } from '../types';

interface BrandStatementProps {
  currentLang: Language;
}

export const BrandStatement: React.FC<BrandStatementProps> = ({ currentLang }) => {
  const content = {
    az: {
      kicker: 'HAQQIMIZDA · MASSIMO GROUP MMC',
      statement:
        'Massimo Mebel — zərifliyin, sənətkarlığın və müasir memarlıq dəyərlərinin təcəssümüdür. İtaliya və Avropanın ən mötəbər mebel evlərinin unikal kolleksiyalarını Bakıda bir araya gətirərək, yaşayış məkanlarınıza zamansız lüks bəxş edirik.',
      stats: [
        { value: '94 B+', label: 'Instagram İzləyicisi', note: '@massimomebel.az auditoriyası' },
        { value: 'Dünya brendləri', label: 'İtaliya & Avropa istehsalı', note: 'Eksklüziv tərəfdaşlıq' },
        { value: 'Babək prospekti, Bakı', label: 'Flaqman Showroom', note: 'Geniş ekspozisiya zalı' },
      ],
    },
    en: {
      kicker: 'ABOUT US · MASSIMO GROUP LLC',
      statement:
        'Massimo Mebel embodies refinement, bespoke craftsmanship, and contemporary architectural elegance. Bringing the world’s most prestigious Italian and European furniture houses to Baku, we curate timeless luxury for exceptional spaces.',
      stats: [
        { value: '94 K+', label: 'Instagram Community', note: '@massimomebel.az followers' },
        { value: 'Global Brands', label: 'Italian & European origin', note: 'Curated showroom partners' },
        { value: 'Babek Avenue, Baku', label: 'Flagship Showroom', note: 'Elite design gallery' },
      ],
    },
    ru: {
      kicker: 'О БРЕНДЕ · MASSIMO GROUP MMC',
      statement:
        'Massimo Mebel — воплощение утонченности, безупречного мастерства и современных архитектурных канонов. Объединяя в Баку уникальные коллекции ведущих мебельных домов Италии и Европы, мы создаем вневременной уют для вашего дома.',
      stats: [
        { value: '94 тыс.+', label: 'Подписчиков в Instagram', note: 'Аудитория @massimomebel.az' },
        { value: 'Мировые бренды', label: 'Производство Италии и Европы', note: 'Эксклюзивные фабрики' },
        { value: 'Проспект Бабека, Баку', label: 'Флагманский шоурум', note: 'Просторная экспозиция' },
      ],
    },
  }[currentLang];

  return (
    <section id="haqqimizda" className="relative bg-[#F4F1EC] text-[#151515] py-24 sm:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section kicker */}
        <div className="text-center mb-8">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#B89B5E] font-medium font-sans">
            {content.kicker}
          </p>
        </div>

        {/* Centered Large Serif Statement Paragraph */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-light leading-[1.35] tracking-tight text-[#151515]">
            “{content.statement}”
          </blockquote>
          <div className="mt-8 flex justify-center">
            <div className="w-16 h-[1px] bg-[#B89B5E]" />
          </div>
        </div>

        {/* 3 Minimal Stats separated by thin lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#151515]/15 divide-y md:divide-y-0 md:divide-x divide-[#151515]/15">
          {content.stats.map((stat, idx) => (
            <div key={idx} className="py-8 md:py-10 px-6 sm:px-10 text-center flex flex-col justify-center">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#151515] mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#151515]/85 mb-1 font-sans">
                {stat.label}
              </span>
              <span className="text-xs text-[#8E8A82] font-light">
                {stat.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
