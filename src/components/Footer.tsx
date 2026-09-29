import React from 'react';
import { Instagram, MessageSquare, Phone, MapPin, ArrowUp } from 'lucide-react';
import { BRAND } from '../data/content';
import { Language } from '../types';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const content = {
    az: {
      description: 'Dünya brendlərinin Bakıdakı ünvanı. Zərif İtalyan dizaynı, mükəmməl keyfiyyət və fərdi interyer həlləri.',
      navTitle: 'Naviqasiya',
      collectionsTitle: 'Kolleksiyalar',
      contactTitle: 'Əlaqə & Ünvan',
      rights: '© 2026 Massimo Group MMC. Bütün hüquqlar qorunur.',
      demoNotice: 'Demo versiya — Massimo Mebel üçün hazırlanmışdır',
      backToTop: 'Yuxarı qayıt',
      navItems: [
        { label: 'Kolleksiyalar', href: '#kolleksiyalar' },
        { label: 'Haqqımızda', href: '#haqqimizda' },
        { label: 'Seçilmiş modellər', href: '#secilmisler' },
        { label: 'İnteryer xidməti', href: '#interyer' },
        { label: 'Tədbirlər', href: '#tedbirler' },
        { label: 'Showroom & Əlaqə', href: '#elaqe' },
      ],
      collectionItems: [
        'Qonaq otağı',
        'Yataq otağı',
        'Yemək otağı',
        'Aksesuarlar & İşıq',
        'Klassik kolleksiya',
        'Müasir kolleksiya',
      ],
    },
    en: {
      description: 'The home of world-renowned luxury brands in Baku. Italian elegance, peerless craftsmanship, and bespoke interior services.',
      navTitle: 'Navigation',
      collectionsTitle: 'Collections',
      contactTitle: 'Visit & Inquiries',
      rights: '© 2026 Massimo Group LLC. All rights reserved.',
      demoNotice: 'Demo version — Designed for Massimo Mebel',
      backToTop: 'Back to top',
      navItems: [
        { label: 'Collections', href: '#kolleksiyalar' },
        { label: 'About Us', href: '#haqqimizda' },
        { label: 'Featured Pieces', href: '#secilmisler' },
        { label: 'Interior Service', href: '#interyer' },
        { label: 'Showroom Events', href: '#tedbirler' },
        { label: 'Contact', href: '#elaqe' },
      ],
      collectionItems: [
        'Living Room',
        'Master Bedroom',
        'Dining Room',
        'Lighting & Accessories',
        'Classic Suite',
        'Contemporary Line',
      ],
    },
    ru: {
      description: 'Адрес мировых брендов в Баку. Итальянская элегантность, безупречное качество и индивидуальные интерьерные решения.',
      navTitle: 'Навигация',
      collectionsTitle: 'Коллекции',
      contactTitle: 'Контакты и шоурум',
      rights: '© 2026 Massimo Group MMC. Все права защищены.',
      demoNotice: 'Демо версия — Создано для Massimo Mebel',
      backToTop: 'Наверх',
      navItems: [
        { label: 'Коллекции', href: '#kolleksiyalar' },
        { label: 'О бренде', href: '#haqqimizda' },
        { label: 'Изделия', href: '#secilmisler' },
        { label: 'Интерьер', href: '#interyer' },
        { label: 'События', href: '#tedbirler' },
        { label: 'Контакты', href: '#elaqe' },
      ],
      collectionItems: [
        'Гостиная',
        'Спальня',
        'Столовая',
        'Аксессуары и свет',
        'Классическая мебель',
        'Современная линия',
      ],
    },
  }[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080809] border-t border-white/10 text-left pt-20 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex flex-col">
              <span className="font-serif text-3xl tracking-[0.24em] font-light text-[#EDE9E1]">
                MASSIMO
              </span>
              <span className="text-[9px] uppercase tracking-[0.38em] text-[#B89B5E] font-sans font-medium -mt-0.5">
                MOBILI LUXURY
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#8E8A82] font-light leading-relaxed max-w-sm">
              {content.description}
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#B89B5E] text-[#EDE9E1] hover:text-[#B89B5E] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#B89B5E] text-[#EDE9E1] hover:text-[#B89B5E] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare size={16} />
              </a>
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#B89B5E] text-[#EDE9E1] hover:text-[#B89B5E] transition-colors"
                aria-label="Zəng et"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#B89B5E] font-medium font-sans">
              {content.navTitle}
            </p>
            <ul className="space-y-2.5">
              {content.navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-xs text-[#8E8A82] hover:text-[#EDE9E1] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Collections List */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#B89B5E] font-medium font-sans">
              {content.collectionsTitle}
            </p>
            <ul className="space-y-2.5">
              {content.collectionItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#kolleksiyalar"
                    className="text-xs text-[#8E8A82] hover:text-[#EDE9E1] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Showroom */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#B89B5E] font-medium font-sans">
              {content.contactTitle}
            </p>
            <div className="space-y-2 text-xs text-[#8E8A82] font-light leading-relaxed">
              <p className="text-[#EDE9E1]">{BRAND.address}</p>
              <p>{BRAND.workingHours}</p>
              <p className="pt-2">
                <a href={`tel:${BRAND.phoneRaw}`} className="text-[#EDE9E1] hover:text-[#B89B5E] transition-colors">
                  {BRAND.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${BRAND.email}`} className="hover:text-[#EDE9E1] transition-colors">
                  {BRAND.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8A82]">
          <p className="font-light">{content.rights}</p>

          <span className="text-[11px] text-[#B89B5E]/70 font-sans tracking-wider">
            {content.demoNotice}
          </span>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-[#EDE9E1] transition-colors cursor-pointer text-xs"
          >
            <span>{content.backToTop}</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
