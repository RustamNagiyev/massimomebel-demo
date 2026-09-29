import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_POSTS, BRAND } from '../data/content';
import { Language } from '../types';

interface InstagramGalleryProps {
  currentLang: Language;
}

export const InstagramGallery: React.FC<InstagramGalleryProps> = ({ currentLang }) => {
  const content = {
    az: {
      kicker: 'INSTAGRAM QALEREYASI',
      heading: 'Instagram-da bizi izləyin',
      handle: BRAND.instagram,
      subtext: '94.000-dən çox izləyicimizlə hər gün yeni interyer ideyaları və İtalyan mebel sənətini paylaşırıq.',
      followCta: 'Instagram profilinə keçin',
    },
    en: {
      kicker: 'INSTAGRAM GALLERY',
      heading: 'Follow us on Instagram',
      handle: BRAND.instagram,
      subtext: 'Sharing inspiring spaces and Italian craftsmanship daily with our 94K+ community.',
      followCta: 'Visit Instagram Profile',
    },
    ru: {
      kicker: 'ГАЛЕРЕЯ INSTAGRAM',
      heading: 'Следите за нами в Instagram',
      handle: BRAND.instagram,
      subtext: 'Каждый день делимся вдохновляющими интерьерами с сообществом из более чем 94 000 подписчиков.',
      followCta: 'Перейти в Instagram',
    },
  }[currentLang];

  return (
    <section className="py-28 bg-[#0B0B0C] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#B89B5E]" aria-hidden="true" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-medium font-sans">
                {content.kicker}
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#EDE9E1] tracking-tight">
              {content.heading}{' '}
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B89B5E] hover:underline"
              >
                {content.handle}
              </a>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#8E8A82] font-light max-w-xl">
              {content.subtext}
            </p>
          </div>

          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 px-6 py-3 border border-[#B89B5E]/50 text-[#EDE9E1] hover:text-[#0B0B0C] hover:bg-[#B89B5E] text-xs uppercase tracking-[0.2em] transition-all duration-300 font-sans cursor-pointer group"
          >
            <Instagram size={14} className="text-[#B89B5E] group-hover:text-[#0B0B0C] transition-colors" />
            <span>{content.followCta}</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Clean 4x2 Grid on desktop, 2 columns on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden bg-[#141416] group block"
              aria-label={`Instagram paylaşımı: ${post.caption}`}
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                className="w-full h-full object-cover object-center filter brightness-[0.9] transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover overlay with Instagram icon and caption */}
              <div className="absolute inset-0 bg-[#0B0B0C]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-left">
                <div className="flex justify-end">
                  <Instagram size={20} className="text-[#B89B5E]" />
                </div>
                <div>
                  <p className="text-xs text-[#EDE9E1] font-light line-clamp-3 mb-2 leading-relaxed">
                    {post.caption}
                  </p>
                  <span className="text-[10px] uppercase tracking-wider text-[#B89B5E]">
                    {post.likes}
                  </span>
                </div>
              </div>

              {/* 1px border */}
              <div className="absolute inset-0 border border-white/5 pointer-events-none group-hover:border-[#B89B5E]/40 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
