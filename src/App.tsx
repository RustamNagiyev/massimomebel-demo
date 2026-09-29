/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandStatement } from './components/BrandStatement';
import { Collections } from './components/Collections';
import { FeaturedProducts } from './components/FeaturedProducts';
import { InteriorService } from './components/InteriorService';
import { Events } from './components/Events';
import { InstagramGallery } from './components/InstagramGallery';
import { Testimonials } from './components/Testimonials';
import { ContactShowroom } from './components/ContactShowroom';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductModal } from './components/ProductModal';
import { CategoryModal } from './components/CategoryModal';
import { Product, Category, Language } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('az');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#EDE9E1] selection:bg-[#B89B5E] selection:text-black">
      {/* 1. Sticky Navigation Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />

      <main>
        {/* 2. Full-Bleed Cinematic Hero */}
        <Hero currentLang={currentLang} />

        {/* 3. Warm Ivory Brand Statement & Honest Stats */}
        <BrandStatement currentLang={currentLang} />

        {/* 4. Editorial Asymmetric Grid of Collections */}
        <Collections
          currentLang={currentLang}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* 5. Horizontal Scroll-Snap Carousel of Featured Pieces */}
        <FeaturedProducts
          currentLang={currentLang}
          onSelectProduct={(prod) => setSelectedProduct(prod)}
        />

        {/* 6. Bespoke Interior Service Split Layout */}
        <InteriorService currentLang={currentLang} />

        {/* 7. Showroom Events & Premieres */}
        <Events currentLang={currentLang} />

        {/* 8. Instagram Gallery Grid */}
        <InstagramGallery currentLang={currentLang} />

        {/* 9. Minimalist Serif Testimonials Slider */}
        <Testimonials currentLang={currentLang} />

        {/* 10. Showroom Info, Contact Form & Google Map */}
        <ContactShowroom currentLang={currentLang} />
      </main>

      {/* 11. Luxury Minimalist Footer */}
      <Footer currentLang={currentLang} />

      {/* 12. Floating WhatsApp Shortcut */}
      <FloatingWhatsApp currentLang={currentLang} />

      {/* Interactive Product Details Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        currentLang={currentLang}
      />

      {/* Interactive Category Details Modal */}
      <CategoryModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        currentLang={currentLang}
      />
    </div>
  );
}
