import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { IMAGES, INTERIOR_STEPS, BRAND } from '../data/content';
import { Language } from '../types';

interface InteriorServiceProps {
  currentLang: Language;
}

export const InteriorService: React.FC<InteriorServiceProps> = ({ currentLang }) => {
  const content = {
    az: {
      kicker: 'ÖZƏL İNTERYER XİDMƏTİ',
      heading: 'Məkanınıza uyğun interyer həlləri',
      description:
        'Hər bir ev öz sahibinin xarakterini və zövqünü əks etdirməlidir. Massimo Mebel-in peşəkar dizayn məsləhətçiləri məkanınızın ölçülərinə, memarlıq xüsusiyyətlərinə və həyat tərzinizə uyğun mebel tərtibatı hazırlayır.',
      cta: 'İnteryer məsləhəti sifariş et',
      steps: INTERIOR_STEPS,
      featuresTitle: 'Niyə Massimo fərdi yanaşması?',
      features: [
        'İtaliya və Avropanın orijinal fabrik kataloqlarından fərdi sifariş',
        'Yüksək dəqiqlikli 3D planlama və rəng uyğunluğu',
        'Bakı daxilində ağ əlcək çatdırılma və rəsmi zəmanət',
      ],
    },
    en: {
      kicker: 'BESPOKE INTERIOR SERVICE',
      heading: 'Interior solutions tailored to your space',
      description:
        'Every home is a reflection of its owner’s soul. Massimo Mebel’s seasoned architectural interior consultants curate personalized furniture layouts, tactile material harmonies, and bespoke space plans.',
      cta: 'Book Interior Consultation',
      steps: [
        { number: '01', title: 'Consultation & Space Analysis', description: 'In-depth listening to your architectural blueprints, lighting, and lifestyle preferences.' },
        { number: '02', title: 'Bespoke Design & 3D Layout', description: 'Tailored 3D visualization, palette matching, and tactile material curation.' },
        { number: '03', title: 'Curated Ordering', description: 'Direct factory orders from premier Italian furniture ateliers with full tracking.' },
        { number: '04', title: 'White-Glove Delivery & Installation', description: 'Pristine delivery, certified artisan assembly, and ongoing warranty.' },
      ],
      featuresTitle: 'The Massimo Distinction',
      features: [
        'Direct factory bespoke orders from iconic European houses',
        'Precision 3D spatial planning and material coordination',
        'White-glove delivery and certified installation in Baku',
      ],
    },
    ru: {
      kicker: 'ИНДИВИДУАЛЬНЫЙ ИНТЕРЬЕРНЫЙ СЕРВИС',
      heading: 'Интерьерные решения для вашего пространства',
      description:
        'Каждый дом уникален. Профессиональные консультанты Massimo Mebel разрабатывают индивидуальные мебельные композиции с учетом архитектурных особенностей вашего помещения и стиля жизни.',
      cta: 'Заказать консультацию',
      steps: [
        { number: '01', title: 'Консультация и анализ пространства', description: 'Изучение архитектурного плана, освещения и ваших персональных предпочтений.' },
        { number: '02', title: 'Дизайн-проект и 3D расстановка', description: 'Визуализация мебельной расстановки, подбор итальянских тканей, мрамора и отделок.' },
        { number: '03', title: 'Выбор и фабричный заказ', description: 'Прямые заказы на ведущих фабриках Италии и Европы с гарантией подлинности.' },
        { number: '04', title: 'Премиальная доставка и монтаж', description: 'Бережная доставка в белых перчатках, аккуратный монтаж и гарантийное обслуживание.' },
      ],
      featuresTitle: 'Преимущества индивидуального сервиса Massimo',
      features: [
        'Прямые поставки с фабрик Италии и Европы по спецзаказам',
        'Точное 3D планирование и гармония оттенков',
        'Доставка и сборка высшего класса в Баку',
      ],
    },
  }[currentLang];

  return (
    <section id="interyer" className="py-28 lg:py-36 bg-[#0B0B0C] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Editorial Image & Callout */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden aspect-[4/5] bg-[#141416] border border-white/10 group">
              <img
                src={IMAGES.interiorService}
                alt="Massimo Mebel interyer dizayn və fərdi mebel layihələndirməsi"
                loading="lazy"
                className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Corner accent label */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0B0B0C]/90 backdrop-blur-md border border-[#B89B5E]/30 text-left">
                <span className="text-[10px] uppercase tracking-[0.26em] text-[#B89B5E] block font-sans mb-1">
                  Massimo Design Studio
                </span>
                <p className="font-serif text-lg text-[#EDE9E1] font-light">
                  İtalyan zövqü ilə həyata keçirilən layihələr
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & 4-Step Process List */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#B89B5E]" aria-hidden="true" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-medium font-sans">
                {content.kicker}
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl font-light text-[#EDE9E1] tracking-tight mb-6">
              {content.heading}
            </h2>

            <p className="text-sm sm:text-base text-[#8E8A82] font-light leading-relaxed mb-10 max-w-2xl">
              {content.description}
            </p>

            {/* Minimal Numbered Process List with Thin Divider Lines */}
            <div className="border-t border-white/10 divide-y divide-white/10 mb-10">
              {content.steps.map((step) => (
                <div key={step.number} className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 group">
                  <span className="font-serif text-2xl sm:text-3xl text-[#B89B5E] font-light tracking-wider shrink-0 w-12">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-serif text-[#EDE9E1] font-normal tracking-wide mb-1 group-hover:text-[#B89B5E] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8E8A82] font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#elaqe"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#B89B5E] text-[#EDE9E1] hover:text-[#0B0B0C] hover:bg-[#B89B5E] text-xs uppercase tracking-[0.24em] transition-all duration-400 font-sans group cursor-pointer"
              >
                <span>{content.cta}</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-xs uppercase tracking-[0.2em] text-[#8E8A82] hover:text-[#B89B5E] transition-colors py-4"
              >
                WhatsApp ilə sual verin →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
