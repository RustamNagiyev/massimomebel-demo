import React, { useEffect } from 'react';
import { X, MessageSquare, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { Product, Language } from '../types';
import { BRAND } from '../data/content';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  currentLang: Language;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, currentLang }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const content = {
    az: {
      originLabel: 'İstehsalçı ölkə',
      materialsLabel: 'Material və tərtibat',
      dimensionsLabel: 'Ölçülər',
      priceLabel: 'Qiymət sorğusu',
      priceNotice: 'Eksklüziv kolleksiya olduğu üçün qiymətlər fərdi layihə və material seçiminə əsasən təqdim olunur.',
      whatsappCta: 'WhatsApp ilə qiymət sorğusu verin',
      showroomVisit: 'Showroom-da canlı baxmaq üçün qeydiyyat',
      authentic: '100% Orijinal İtaliya & Avropa istehsalı',
    },
    en: {
      originLabel: 'Country of Origin',
      materialsLabel: 'Materials & Finishes',
      dimensionsLabel: 'Dimensions',
      priceLabel: 'Price Inquiry',
      priceNotice: 'As an exclusive bespoke series, pricing is tailored to custom material and layout selection.',
      whatsappCta: 'Request Price on WhatsApp',
      showroomVisit: 'Schedule Private Showroom Viewing',
      authentic: '100% Authentic Italian & European Heritage',
    },
    ru: {
      originLabel: 'Страна производства',
      materialsLabel: 'Материалы и отделка',
      dimensionsLabel: 'Размеры',
      priceLabel: 'Запрос цены',
      priceNotice: 'Эксклюзивная коллекция. Стоимость формируется на основе выбранной конфигурации и отделочных материалов.',
      whatsappCta: 'Узнать цену в WhatsApp',
      showroomVisit: 'Записаться на просмотр в шоуруме',
      authentic: '100% Оригинальное европейское производство',
    },
  }[currentLang];

  const whatsappMessage = encodeURIComponent(
    `Salam, Massimo Mebel. Mən "${product.name}" (${product.category}) haqqında qiymət və mövcudluq barədə məlumat almaq istəyirəm.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#141416] border border-[#B89B5E]/30 shadow-2xl z-10 overflow-hidden max-h-[90vh] flex flex-col md:flex-row text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-[#0B0B0C]/80 border border-white/10 text-[#EDE9E1] hover:text-[#B89B5E] hover:border-[#B89B5E] transition-colors cursor-pointer"
          aria-label="Pəncərəni bağla"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {/* Left: High-Res Image */}
        <div className="w-full md:w-1/2 relative bg-black/40 min-h-[300px] md:min-h-[500px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent md:hidden" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#B89B5E] bg-[#0B0B0C]/90 px-3 py-1.5 border border-[#B89B5E]/30">
            <ShieldCheck size={13} />
            <span>{content.authentic}</span>
          </div>
        </div>

        {/* Right: Details & Action */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10 overflow-y-auto flex flex-col justify-between space-y-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.26em] text-[#B89B5E] font-medium font-sans mb-1.5">
              {product.category} · {product.origin}
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#EDE9E1] font-light tracking-wide mb-4">
              {product.name}
            </h2>

            <p className="text-xs sm:text-sm text-[#8E8A82] leading-relaxed font-light mb-6">
              {product.description}
            </p>

            {/* Spec details with thin divider */}
            <div className="border-t border-white/10 pt-4 space-y-3 text-xs">
              <div>
                <span className="text-[#8E8A82] uppercase tracking-wider block text-[10px] mb-0.5">
                  {content.materialsLabel}
                </span>
                <span className="text-[#EDE9E1] font-light">{product.material}</span>
              </div>

              <div>
                <span className="text-[#8E8A82] uppercase tracking-wider block text-[10px] mb-0.5">
                  {content.dimensionsLabel}
                </span>
                <span className="text-[#EDE9E1] font-light">{product.dimensions}</span>
              </div>

              <div>
                <span className="text-[#8E8A82] uppercase tracking-wider block text-[10px] mb-0.5">
                  {content.originLabel}
                </span>
                <span className="text-[#EDE9E1] font-light">{product.origin}</span>
              </div>
            </div>

            {/* Price notice */}
            <div className="mt-6 p-3.5 bg-[#0B0B0C] border-l-2 border-[#B89B5E] text-xs text-[#8E8A82] font-light">
              <span className="text-[#EDE9E1] font-medium block mb-1">{content.priceLabel}</span>
              {content.priceNotice}
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
              <span>{content.whatsappCta}</span>
            </a>

            <a
              href="#elaqe"
              onClick={onClose}
              className="w-full py-3 border border-white/15 hover:border-[#B89B5E] text-[#EDE9E1] text-xs uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2"
            >
              <MapPin size={14} className="text-[#B89B5E]" />
              <span>{content.showroomVisit}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
