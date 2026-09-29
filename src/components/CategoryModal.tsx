import React, { useEffect } from 'react';
import { X, MessageSquare, Check, Sparkles, MapPin } from 'lucide-react';
import { Category, Language } from '../types';
import { BRAND, PRODUCTS } from '../data/content';

interface CategoryModalProps {
  category: Category | null;
  onClose: () => void;
  currentLang: Language;
}

export const CategoryModal: React.FC<CategoryModalProps> = ({ category, onClose, currentLang }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (category) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [category, onClose]);

  if (!category) return null;

  const categoryName = currentLang === 'en' ? category.nameEn : currentLang === 'ru' ? category.nameRu : category.name;
  
  // Find products matching this category
  const matchingProducts = PRODUCTS.filter(
    (p) => p.categoryId === category.id || p.category.toLowerCase().includes(category.name.toLowerCase())
  );

  const content = {
    az: {
      highlightsTitle: 'Kolleksiyanın üstünlükləri',
      inquireCategory: 'Kolleksiya barədə məlumat alın',
      visitShowroom: 'Showroom-da ekspozisiyaya baxın',
      modelsCount: 'təqdim olunan model sayı',
    },
    en: {
      highlightsTitle: 'Collection Distinctives',
      inquireCategory: 'Inquire About Collection',
      visitShowroom: 'Experience at Flagship Showroom',
      modelsCount: 'curated models available',
    },
    ru: {
      highlightsTitle: 'Особенности коллекции',
      inquireCategory: 'Запросить каталог коллекции',
      visitShowroom: 'Посмотреть в шоуруме',
      modelsCount: 'представленных моделей',
    },
  }[currentLang];

  const whatsappMessage = encodeURIComponent(
    `Salam, Massimo Mebel. Mən "${category.name}" kolleksiyası və mövcud kataloqlar haqqında məlumat almaq istəyirəm.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl bg-[#141416] border border-[#B89B5E]/30 shadow-2xl z-10 overflow-hidden max-h-[90vh] flex flex-col md:flex-row text-left">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-[#0B0B0C]/80 border border-white/10 text-[#EDE9E1] hover:text-[#B89B5E] hover:border-[#B89B5E] transition-colors cursor-pointer"
          aria-label="Pəncərəni bağla"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {/* Left: Category Photo */}
        <div className="w-full md:w-1/2 relative bg-black/50 min-h-[280px] md:min-h-[500px]">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent md:hidden" />
          <div className="absolute bottom-4 left-4 text-xs text-[#EDE9E1]/80 bg-[#0B0B0C]/85 px-3 py-1.5 border border-white/10">
            {category.itemCount} · {content.modelsCount}
          </div>
        </div>

        {/* Right: Category Narrative & Features */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10 overflow-y-auto flex flex-col justify-between space-y-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.26em] text-[#B89B5E] font-medium font-sans mb-1.5">
              MASSIMO EXCLUSIVE
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#EDE9E1] font-light tracking-wide mb-2">
              {categoryName}
            </h2>

            <p className="text-xs uppercase tracking-wider text-[#8E8A82] mb-5 font-sans">
              {category.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-[#8E8A82] leading-relaxed font-light mb-6">
              {category.description}
            </p>

            {/* Highlights */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B89B5E] font-sans font-medium block mb-3">
                {content.highlightsTitle}
              </span>
              <ul className="space-y-2.5">
                {category.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs text-[#EDE9E1]/90 font-light">
                    <span className="w-1.5 h-1.5 bg-[#B89B5E]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <a
              href={`${BRAND.whatsappUrl}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#B89B5E] text-[#0B0B0C] hover:bg-[#D4BE84] text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare size={15} />
              <span>{content.inquireCategory}</span>
            </a>

            <a
              href="#elaqe"
              onClick={onClose}
              className="w-full py-3 border border-white/15 hover:border-[#B89B5E] text-[#EDE9E1] text-xs uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2"
            >
              <MapPin size={14} className="text-[#B89B5E]" />
              <span>{content.visitShowroom}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
