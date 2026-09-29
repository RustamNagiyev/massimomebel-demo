import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';
import { Language } from '../types';

interface TestimonialsProps {
  currentLang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const content = {
    az: {
      kicker: 'MÜŞTƏRİ MƏMNUNİYYƏTİ',
      heading: 'Dəyərli qonaqlarımızın rəyləri',
      sampleNotice: 'Nümunəvi rəylər / Müştəri təcrübəsi',
    },
    en: {
      kicker: 'CLIENT TESTIMONIALS',
      heading: 'Reflections from Our Esteemed Guests',
      sampleNotice: 'Sample client testimonials',
    },
    ru: {
      kicker: 'ОТЗЫВЫ КЛИЕНТОВ',
      heading: 'Впечатления наших гостей',
      sampleNotice: 'Примеры отзывов гостей',
    },
  }[currentLang];

  // Auto-advance every 7 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section
      id="reyler"
      className="py-28 lg:py-36 bg-[#0E0E10] border-t border-b border-white/5 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center relative z-10">
        {/* Section Kicker */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-6 h-[1px] bg-[#B89B5E]" aria-hidden="true" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-medium font-sans">
            {content.kicker}
          </span>
          <span className="w-6 h-[1px] bg-[#B89B5E]" aria-hidden="true" />
        </div>

        {/* Big gold quote mark */}
        <div className="flex justify-center mb-6 text-[#B89B5E]">
          <Quote size={48} strokeWidth={1} className="opacity-70 rotate-180" />
        </div>

        {/* Quote text slider */}
        <div className="min-h-[220px] sm:min-h-[180px] flex items-center justify-center mb-10 transition-opacity duration-500">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#EDE9E1] font-light leading-[1.4] tracking-tight max-w-3xl">
            “{activeTestimonial.quote}”
          </p>
        </div>

        {/* Author & District */}
        <div className="space-y-1 mb-10">
          <p className="font-serif text-xl text-[#EDE9E1] font-normal tracking-wide">
            {activeTestimonial.author}
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-[#8E8A82] font-sans">
            <span>{activeTestimonial.district}</span>
            <span aria-hidden="true" className="text-[#B89B5E]">·</span>
            <span className="text-[#B89B5E]/90">{activeTestimonial.project}</span>
          </div>
        </div>

        {/* Dot Indicators & Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#B89B5E] text-[#8E8A82] hover:text-[#EDE9E1] transition-colors cursor-pointer"
            aria-label="Əvvəlki rəy"
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2.5">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? 'w-8 h-[2px] bg-[#B89B5E]'
                    : 'w-2 h-[2px] bg-white/20 hover:bg-white/50'
                }`}
                aria-label={`Rəy ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#B89B5E] text-[#8E8A82] hover:text-[#EDE9E1] transition-colors cursor-pointer"
            aria-label="Növbəti rəy"
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Sample notice footnote */}
        <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-[#8E8A82]/50">
          {content.sampleNotice}
        </p>
      </div>
    </section>
  );
};
