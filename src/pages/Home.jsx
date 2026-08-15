import React from 'react';
import { HeroBanner } from '../components/home/HeroBanner.jsx';
import { CategoryHighlights } from '../components/home/CategoryHighlights.jsx';
import { FeaturedDeals } from '../components/home/FeaturedDeals.jsx';
import { ProductCarousel } from '../components/home/ProductCarousel.jsx';
import { NewsletterSection } from '../components/home/NewsletterSection.jsx';

export const Home = () => {
  return (
    <div className="space-y-4 sm:space-y-8 animate-in fade-in duration-200">
      <HeroBanner />
      <CategoryHighlights />
      <FeaturedDeals />
      <ProductCarousel />
      <NewsletterSection />
    </div>
  );
};
