import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { BRAND } from '../data/content';
import { Language } from '../types';

interface FloatingWhatsAppProps {
  currentLang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentLang }) => {
  const [hovered, setHovered] = useState(false);

  const tooltipText = {
    az: 'WhatsApp ilə əlaqə',
    en: 'Chat on WhatsApp',
    ru: 'Написать в WhatsApp',
  }[currentLang];

  const prefilledMessage = encodeURIComponent(
    currentLang === 'az'
      ? 'Salam, Massimo Mebel. Məlumat və qiymətlər haqqında öyrənmək istəyirəm.'
      : currentLang === 'ru'
      ? 'Здравствуйте, Massimo Mebel. Хочу узнать подробнее о коллекциях.'
      : 'Hello Massimo Mebel. I would like to inquire about your collections.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      {/* Tooltip on hover */}
      <div
        className={`mr-3 px-3 py-1.5 bg-[#0B0B0C]/95 border border-[#B89B5E]/40 text-xs text-[#EDE9E1] font-sans tracking-wide pointer-events-none transition-all duration-300 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        {tooltipText}
      </div>

      {/* Button */}
      <a
        href={`${BRAND.whatsappUrl}?text=${prefilledMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-13 h-13 rounded-none bg-[#0B0B0C] border border-[#B89B5E] text-[#B89B5E] hover:bg-[#B89B5E] hover:text-[#0B0B0C] shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer group"
        aria-label="WhatsApp ilə əlaqə saxlayın"
      >
        <MessageSquare size={22} strokeWidth={1.75} />
      </a>
    </div>
  );
};
