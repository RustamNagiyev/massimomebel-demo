import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Instagram, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { BRAND, COLLECTIONS } from '../data/content';
import { Language } from '../types';

interface ContactShowroomProps {
  currentLang: Language;
}

export const ContactShowroom: React.FC<ContactShowroomProps> = ({ currentLang }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const content = {
    az: {
      kicker: 'ƏLAQƏ VƏ ÜNVAN',
      heading: 'Showroom-umuza xoş gəlmisiniz',
      subtext: 'Babək prospektində yerləşən flaqman salonumuzda dünya brendlərinin seçilmiş kolleksiyalarını yaxından kəşf edin.',
      addressTitle: 'Ünvan',
      phoneTitle: 'Telefon & WhatsApp',
      hoursTitle: 'İş saatları',
      formTitle: 'Fərdi məsləhət və sorğu',
      formSubtext: 'Məlumatlarınızı qeyd edin, satış məsləhətçimiz 15 dəqiqə ərzində sizinlə əlaqə saxlasın.',
      nameLabel: 'Ad və Soyadınız *',
      phoneLabel: 'Əlaqə nömrəniz *',
      categoryLabel: 'Maraqlandığınız kolleksiya',
      categorySelect: 'Kolleksiya seçin (istəyə bağlı)',
      messageLabel: 'Qeydləriniz və ya istəyiniz',
      submitBtn: 'Müraciət göndər',
      submitting: 'Göndərilir...',
      successTitle: 'Müraciətiniz qəbul edildi',
      successMsg: 'Təşəkkür edirik! Massimo Mebel məsləhətçisi tezliklə sizinlə əlaqə saxlayacaq.',
      sendAnother: 'Yeni müraciət göndər',
      directDirections: 'Google Xəritədə marşrut aç',
      whatsappDirect: 'WhatsApp-da birbaşa yazın',
    },
    en: {
      kicker: 'VISIT & CONTACT',
      heading: 'Welcome to our Flagship Showroom',
      subtext: 'Discover iconic collections of world-renowned luxury brands at our spacious salon on Babek Avenue.',
      addressTitle: 'Location',
      phoneTitle: 'Phone & WhatsApp',
      hoursTitle: 'Working Hours',
      formTitle: 'Private Consultation Inquiry',
      formSubtext: 'Leave your contact details and our senior design advisor will reach out shortly.',
      nameLabel: 'Full Name *',
      phoneLabel: 'Phone Number *',
      categoryLabel: 'Collection of Interest',
      categorySelect: 'Select a collection (optional)',
      messageLabel: 'Notes or specific requirements',
      submitBtn: 'Submit Inquiry',
      submitting: 'Submitting...',
      successTitle: 'Inquiry Received',
      successMsg: 'Thank you! A Massimo Mebel advisor will contact you shortly.',
      sendAnother: 'Send another message',
      directDirections: 'Open in Google Maps',
      whatsappDirect: 'Chat directly on WhatsApp',
    },
    ru: {
      kicker: 'КОНТАКТЫ И ШОУРУМ',
      heading: 'Добро пожаловать в наш шоурум',
      subtext: 'Познакомьтесь с изысканными коллекциями мировых брендов в нашем флагманском пространстве на проспекте Бабека.',
      addressTitle: 'Адрес',
      phoneTitle: 'Телефон и WhatsApp',
      hoursTitle: 'Часы работы',
      formTitle: 'Запрос на персональную консультацию',
      formSubtext: 'Оставьте свои данные, и наш специалист свяжется с вами в течение короткого времени.',
      nameLabel: 'Ваше имя и фамилия *',
      phoneLabel: 'Номер телефона *',
      categoryLabel: 'Интересующая коллекция',
      categorySelect: 'Выберите коллекцию (необязательно)',
      messageLabel: 'Ваши пожелания',
      submitBtn: 'Отправить запрос',
      submitting: 'Отправка...',
      successTitle: 'Запрос принят',
      successMsg: 'Спасибо! Консультант Massimo Mebel свяжется с вами в ближайшее время.',
      sendAnother: 'Отправить еще запрос',
      directDirections: 'Маршрут в Google Maps',
      whatsappDirect: 'Написать напрямую в WhatsApp',
    },
  }[currentLang];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = currentLang === 'az' ? 'Zəhmət olmasa adınızı qeyd edin' : 'Please enter your name';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = currentLang === 'az' ? 'Əlaqə nömrəsi tələb olunur' : 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      newErrors.phone = currentLang === 'az' ? 'Düzgün telefon nömrəsi daxil edin' : 'Valid phone number is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate luxury instant dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({ name: '', phone: '', category: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="elaqe" className="py-28 lg:py-36 bg-[#0B0B0C] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-white/10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B89B5E]" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-medium font-sans">
              {content.kicker}
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#EDE9E1] tracking-tight">
            {content.heading}
          </h2>
          <p className="mt-3 text-sm text-[#8E8A82] font-light max-w-xl">
            {content.subtext}
          </p>
        </div>

        {/* Two Columns: Showroom Info & Minimal Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Left Column: Showroom details */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <div>
              <h3 className="text-xs uppercase tracking-[0.24em] text-[#B89B5E] font-sans font-medium mb-3">
                {content.addressTitle}
              </h3>
              <p className="font-serif text-2xl text-[#EDE9E1] font-light leading-snug mb-2">
                {BRAND.address}
              </p>
              <p className="text-xs text-[#8E8A82]">
                Babək prospekti boyu rahat parkinq və VIP giriş
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <h3 className="text-xs uppercase tracking-[0.24em] text-[#B89B5E] font-sans font-medium mb-3">
                {content.phoneTitle}
              </h3>
              <p className="font-serif text-2xl text-[#EDE9E1] font-light tracking-wide mb-2">
                <a href={`tel:${BRAND.phoneRaw}`} className="hover:text-[#B89B5E] transition-colors">
                  {BRAND.phone}
                </a>
              </p>
              <div className="flex gap-4 pt-1">
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#EDE9E1] hover:text-[#B89B5E] transition-colors"
                >
                  <MessageSquare size={13} className="text-[#B89B5E]" />
                  <span>{content.whatsappDirect}</span>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <h3 className="text-xs uppercase tracking-[0.24em] text-[#B89B5E] font-sans font-medium mb-3">
                {content.hoursTitle}
              </h3>
              <p className="font-serif text-xl text-[#EDE9E1] font-light">
                {BRAND.workingHours}
              </p>
              <p className="text-xs text-[#8E8A82] mt-1">
                Həftənin hər günü fasiləsiz xidmət
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center gap-6">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8E8A82] hover:text-[#B89B5E] transition-colors"
              >
                <Instagram size={15} />
                <span>{BRAND.instagram}</span>
              </a>
              <span className="text-white/20">|</span>
              <a
                href={`mailto:${BRAND.email}`}
                className="text-xs tracking-wider text-[#8E8A82] hover:text-[#B89B5E] transition-colors"
              >
                {BRAND.email}
              </a>
            </div>
          </div>

          {/* Right Column: Minimal Luxury Contact Form with Thin Bottom Borders */}
          <div className="lg:col-span-7 bg-[#141416]/70 p-8 sm:p-12 border border-white/10 relative text-left">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#EDE9E1] font-light tracking-wide mb-2">
                    {content.formTitle}
                  </h3>
                  <p className="text-xs text-[#8E8A82] font-light">
                    {content.formSubtext}
                  </p>
                </div>

                {/* Input 1: Ad və Soyad */}
                <div className="relative">
                  <label htmlFor="name" className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] mb-2 font-sans">
                    {content.nameLabel}
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Məs: Rəşad Əliyev"
                    className="w-full bg-transparent text-[#EDE9E1] placeholder-[#8E8A82]/40 text-sm py-2.5 border-b border-white/20 focus:border-[#B89B5E] focus:outline-none transition-colors"
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-400 mt-1.5 font-light">{errors.name}</p>
                  )}
                </div>

                {/* Input 2: Telefon nömrəsi */}
                <div className="relative">
                  <label htmlFor="phone" className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] mb-2 font-sans">
                    {content.phoneLabel}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+994 (50) 000-00-00"
                    className="w-full bg-transparent text-[#EDE9E1] placeholder-[#8E8A82]/40 text-sm py-2.5 border-b border-white/20 focus:border-[#B89B5E] focus:outline-none transition-colors"
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-400 mt-1.5 font-light">{errors.phone}</p>
                  )}
                </div>

                {/* Input 3: Maraqlandığınız kateqoriya (Dropdown) */}
                <div className="relative">
                  <label htmlFor="category" className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] mb-2 font-sans">
                    {content.categoryLabel}
                  </label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#141416] text-[#EDE9E1] text-sm py-2.5 border-b border-white/20 focus:border-[#B89B5E] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="" className="bg-[#141416] text-[#8E8A82]">{content.categorySelect}</option>
                    {COLLECTIONS.map((c) => (
                      <option key={c.id} value={c.name} className="bg-[#141416] text-[#EDE9E1]">
                        {c.name} ({c.subtitle})
                      </option>
                    ))}
                    <option value="Bütöv mənzil dizaynı" className="bg-[#141416] text-[#EDE9E1]">
                      Bütöv mənzil / Villa interyer layihəsi
                    </option>
                  </select>
                </div>

                {/* Input 4: Qeydlər */}
                <div className="relative">
                  <label htmlFor="message" className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] mb-2 font-sans">
                    {content.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Məkanınızın ölçüsü, bəyəndiyiniz rənglər və ya maraqlandığınız brend..."
                    className="w-full bg-transparent text-[#EDE9E1] placeholder-[#8E8A82]/40 text-sm py-2.5 border-b border-white/20 focus:border-[#B89B5E] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 border border-[#B89B5E] bg-[#B89B5E] text-[#0B0B0C] hover:bg-transparent hover:text-[#EDE9E1] text-xs uppercase tracking-[0.24em] font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{content.submitting}</span>
                  ) : (
                    <>
                      <span>{content.submitBtn}</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success State */
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full border border-[#B89B5E] flex items-center justify-center text-[#B89B5E]">
                  <CheckCircle2 size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-3xl text-[#EDE9E1] font-light">
                  {content.successTitle}
                </h3>
                <p className="text-sm text-[#8E8A82] max-w-md mx-auto leading-relaxed">
                  {content.successMsg}
                </p>
                
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/994506002324?text=${encodeURIComponent(`Salam, mən saytdan müraciət göndərdim: ${formData.name}, tel: ${formData.phone}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#B89B5E] text-[#EDE9E1] hover:bg-[#B89B5E] hover:text-[#0B0B0C] text-xs uppercase tracking-[0.2em] transition-all"
                  >
                    <MessageSquare size={14} className="text-[#B89B5E]" />
                    <span>WhatsApp ilə təsdiqlə</span>
                  </a>

                  <button
                    onClick={resetForm}
                    className="text-xs uppercase tracking-[0.18em] text-[#8E8A82] hover:text-[#EDE9E1] transition-colors py-2"
                  >
                    {content.sendAnother}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Embedded Google Map container (Dark/Monochrome aesthetic) */}
        <div className="relative border border-white/10 bg-[#141416] overflow-hidden">
          <div className="p-4 sm:p-6 bg-[#0E0E10] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-[#B89B5E]" />
              <div>
                <span className="text-xs uppercase tracking-wider text-[#EDE9E1] font-sans font-medium">
                  Babək prospekti 41A, Bakı
                </span>
                <span className="text-xs text-[#8E8A82] ml-2 hidden sm:inline">· Flaqman Showroom</span>
              </div>
            </div>

            <a
              href={BRAND.mapsDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-[#B89B5E] hover:underline"
            >
              <span>{content.directDirections}</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Map iframe */}
          <div className="w-full h-[380px] sm:h-[440px] relative">
            <iframe
              title="Massimo Mebel Showroom Xəritəsi"
              src={BRAND.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.95)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
