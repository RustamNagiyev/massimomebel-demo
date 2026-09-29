import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { EVENTS } from '../data/content';
import { Language } from '../types';

interface EventsProps {
  currentLang: Language;
}

export const Events: React.FC<EventsProps> = ({ currentLang }) => {
  const content = {
    az: {
      kicker: 'SHOWROOM TƏDBİRLƏRİ',
      heading: 'Dizayn görüşləri və təqdimatlar',
      subtext: 'Memarlıq cəmiyyəti və dəyərli qonaqlarımız üçün təşkil olunan eksklüziv tədbirlər.',
      sampleNotice: 'Nümunəvi tədbir / arxiv',
      viewDetails: 'Daha ətraflı',
    },
    en: {
      kicker: 'SHOWROOM EVENTS',
      heading: 'Design gatherings & Premieres',
      subtext: 'Curated intimate evenings and architectural showcases hosted at our Baku salon.',
      sampleNotice: 'Sample archive event',
      viewDetails: 'Read more',
    },
    ru: {
      kicker: 'СОБЫТИЯ ШОУРУМА',
      heading: 'Дизайн-встречи и презентации',
      subtext: 'Эксклюзивные вечера и архитектурные встречи для наших гостей и партнеров.',
      sampleNotice: 'Пример события / архив',
      viewDetails: 'Подробнее',
    },
  }[currentLang];

  return (
    <section id="tedbirler" className="py-28 lg:py-36 bg-[#0E0E10] border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#B89B5E]" aria-hidden="true" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-medium font-sans">
                {content.kicker}
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#EDE9E1] tracking-tight">
              {content.heading}
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#8E8A82] font-light max-w-md">
            {content.subtext}
          </p>
        </div>

        {/* 3 Minimal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENTS.map((event) => (
            <article
              key={event.id}
              className="bg-[#141416] border border-white/5 hover:border-[#B89B5E]/30 transition-all duration-500 flex flex-col group"
            >
              {/* Image Container with 700ms slow scale */}
              <div className="relative h-64 overflow-hidden bg-black/50">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent opacity-80" />

                {/* Sample indicator note (unboxed metadata) */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#B89B5E] bg-[#0B0B0C]/80 px-2.5 py-1 border border-[#B89B5E]/20">
                    {content.sampleNotice}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col flex-1 justify-between text-left">
                <div>
                  {/* Date & Location metadata unboxed with typographic separator */}
                  <div className="flex items-center gap-2 text-xs text-[#8E8A82] mb-3 font-sans">
                    <span className="text-[#EDE9E1]/90">{event.date}</span>
                    <span aria-hidden="true" className="text-[#B89B5E]">·</span>
                    <span className="truncate">{event.location}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#EDE9E1] font-normal leading-snug tracking-wide mb-3 group-hover:text-[#B89B5E] transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8E8A82] font-light leading-relaxed mb-6">
                    {event.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="#elaqe"
                    className="text-xs uppercase tracking-[0.2em] text-[#EDE9E1]/80 hover:text-[#B89B5E] transition-colors"
                  >
                    Dəvət üçün qeydiyyat →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
