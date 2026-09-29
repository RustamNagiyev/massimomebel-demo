import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PRODUCTS, BRAND } from '../data/content';
import { Product, Language } from '../types';

interface FeaturedProductsProps {
  currentLang: Language;
  onSelectProduct: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ currentLang, onSelectProduct }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const texts = {
    az: {
      kicker: 'SEÇİLMİŞ NÜMUNƏLƏR',
      heading: 'İtalyan zərifliyinin inciləri',
      subtext: 'Flaqman showroom-umuzda sərgilənən ən çox maraq görən eksklüziv modellər.',
      priceOnRequest: 'Qiymət üçün əlaqə saxlayın',
      moreInfo: 'Ətraflı məlumat',
      quickView: 'Sürətli baxış',
    },
    en: {
      kicker: 'FEATURED PIECES',
      heading: 'Masterpieces of Italian Refinement',
      subtext: 'Highlighted exclusive models showcased at our Baku flagship gallery.',
      priceOnRequest: 'Price upon request',
      moreInfo: 'Inquire details',
      quickView: 'Quick view',
    },
    ru: {
      kicker: 'ИЗБРАННЫЕ МОДЕЛИ',
      heading: 'Шедевры итальянского вкуса',
      subtext: 'Эксклюзивные модели, представленные в нашем флагманском шоуруме в Баку.',
      priceOnRequest: 'Цена по запросу',
      moreInfo: 'Подробнее',
      quickView: 'Быстрый просмотр',
    },
  }[currentLang];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const getWhatsAppLink = (productName: string) => {
    const message = encodeURIComponent(
      `Salam, Massimo Mebel. Mən "${productName}" haqqında ətraflı məlumat və qiymət təklifi almaq istəyirəm.`
    );
    return `${BRAND.whatsappUrl}?text=${message}`;
  };

  return (
    <section id="secilmisler" className="py-28 lg:py-36 bg-[#0E0E10] border-t border-b border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Top with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#B89B5E]" aria-hidden="true" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-medium font-sans">
                {texts.kicker}
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#EDE9E1] tracking-tight">
              {texts.heading}
            </h2>
            <p className="mt-3 text-sm text-[#8E8A82] font-light max-w-lg">
              {texts.subtext}
            </p>
          </div>

          {/* Desktop Left / Right Arrow Navigation */}
          <div className="hidden sm:flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 flex items-center justify-center border border-white/15 hover:border-[#B89B5E] text-[#EDE9E1] hover:text-[#B89B5E] transition-all duration-300 cursor-pointer"
              aria-label="Əvvəlki məhsullar"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 flex items-center justify-center border border-white/15 hover:border-[#B89B5E] text-[#EDE9E1] hover:text-[#B89B5E] transition-all duration-300 cursor-pointer"
              aria-label="Növbəti məhsullar"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll-Snap Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 no-scrollbar"
        >
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="snap-start shrink-0 w-[300px] sm:w-[340px] lg:w-[360px] bg-[#141416] border border-white/5 hover:border-[#B89B5E]/30 transition-all duration-500 flex flex-col justify-between group"
            >
              {/* Product Image Container with 1.03 scale hover zoom */}
              <div
                className="relative h-[280px] sm:h-[310px] overflow-hidden bg-black/40 cursor-pointer"
                onClick={() => onSelectProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center filter brightness-[0.9] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Quick view button overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-[#0B0B0C]/85 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] text-[#EDE9E1] py-2 px-4 border border-[#B89B5E]/40 hover:border-[#B89B5E]">
                    {texts.quickView}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-1 justify-between text-left">
                <div>
                  {/* Clean unboxed category label */}
                  <div className="text-[11px] uppercase tracking-[0.24em] text-[#B89B5E] mb-2 font-sans font-medium">
                    {product.category}
                  </div>

                  <h3
                    className="font-serif text-2xl text-[#EDE9E1] font-normal tracking-wide mb-2 hover:text-[#B89B5E] transition-colors cursor-pointer"
                    onClick={() => onSelectProduct(product)}
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#8E8A82] line-clamp-2 leading-relaxed mb-4 font-light">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  {/* Price on request text */}
                  <div className="text-xs text-[#8E8A82] font-light mb-3">
                    {texts.priceOnRequest}
                  </div>

                  {/* WhatsApp chat inquiry link */}
                  <div className="flex items-center justify-between">
                    <a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-[#EDE9E1] hover:text-[#B89B5E] transition-colors font-sans group/link"
                    >
                      <MessageSquare size={13} className="text-[#B89B5E]" />
                      <span className="border-b border-[#B89B5E]/30 pb-0.5 group-hover/link:border-[#B89B5E]">
                        {texts.moreInfo}
                      </span>
                    </a>

                    <button
                      onClick={() => onSelectProduct(product)}
                      className="text-xs text-[#8E8A82] hover:text-[#EDE9E1] transition-colors p-1"
                      aria-label={`${product.name} haqqında ətraflı bax`}
                    >
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Cue */}
        <div className="sm:hidden text-center mt-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#8E8A82]">
            ← Digər modelləri görmək üçün sürüşdürün →
          </p>
        </div>
      </div>
    </section>
  );
};
