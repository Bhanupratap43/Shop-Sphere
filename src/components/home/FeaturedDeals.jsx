import React, { useState, useEffect } from 'react';
import { Flame, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext.jsx';
import { ProductCard } from '../catalog/ProductCard.jsx';

export const FeaturedDeals = () => {
  const { products, navigateTo, setSelectedCategory } = useShop();

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Filter top discounted products
  const dealProducts = products
    .filter((p) => p.discount >= 27)
    .slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-gradient-to-br from-rose-50 via-orange-50/50 to-amber-50 rounded-3xl p-6 sm:p-8 lg:p-10 border border-rose-100 shadow-sm">
        
        {/* Header with Countdown */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-rose-200/60 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-rose-600 font-bold text-xs uppercase tracking-wider">
              <Flame className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse" />
              <span>Limited Time Promotion</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-slate-900">
              Deals of the Day
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Exclusive discounts up to 33% off on premium gear. Ends tonight!
            </p>
          </div>

          {/* Countdown Clock Box */}
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur-xs p-3 sm:px-5 sm:py-3 rounded-2xl border border-rose-200 shadow-xs self-start md:self-auto">
            <Clock className="w-4 h-4 text-rose-500 shrink-0" />
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <span>Expires in:</span>
              <div className="flex items-center gap-1 font-mono font-bold text-rose-600">
                <span className="bg-rose-100 text-rose-700 px-2 py-1 rounded-lg text-sm">
                  {String(timeLeft.hours).padStart(2, '0')}h
                </span>
                <span>:</span>
                <span className="bg-rose-100 text-rose-700 px-2 py-1 rounded-lg text-sm">
                  {String(timeLeft.minutes).padStart(2, '0')}m
                </span>
                <span>:</span>
                <span className="bg-rose-100 text-rose-700 px-2 py-1 rounded-lg text-sm">
                  {String(timeLeft.seconds).padStart(2, '0')}s
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Banner Footer */}
        <div className="mt-8 text-center pt-4">
          <button
            onClick={() => {
              setSelectedCategory('all');
              navigateTo('catalog');
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer"
          >
            <span>View All Discounted Offers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
