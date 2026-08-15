import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, ShieldCheck, Zap, Tag } from 'lucide-react';
import { useShop } from '../../context/ShopContext.jsx';

const HERO_SLIDES = [
  {
    id: 1,
    badge: "New Season 2026",
    title: "Next-Gen Audio & Smart Living",
    subtitle: "Experience studio-grade acoustics and biometric wearables crafted for modern lifestyle.",
    cta: "Explore Electronics",
    category: "Electronics",
    bgGradient: "from-slate-950 via-indigo-950 to-slate-900",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
    tagText: "Up to 30% Off",
    accentColor: "text-indigo-400"
  },
  {
    id: 2,
    badge: "Curated Apparel",
    title: "Timeless Essentials & Organic Cotton",
    subtitle: "Ethically milled heavyweight streetwear, European linen, and tailored luxury outerwear.",
    cta: "Shop Fashion",
    category: "Fashion",
    bgGradient: "from-stone-900 via-amber-950/80 to-stone-950",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=80",
    tagText: "New Drops",
    accentColor: "text-amber-400"
  },
  {
    id: 3,
    badge: "Artisan Living",
    title: "Elevate Your Space with Modern Decor",
    subtitle: "Handcrafted ceramics, ambient smart lamps, solid walnut desks, and organic aromatherapy.",
    cta: "Shop Home & Lifestyle",
    category: "Home & Lifestyle",
    bgGradient: "from-zinc-900 via-emerald-950/70 to-slate-950",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
    tagText: "Eco-Friendly",
    accentColor: "text-emerald-400"
  }
];

export const HeroBanner = () => {
  const { navigateTo, setSelectedCategory, applyCoupon } = useShop();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  const handleCtaClick = (category) => {
    setSelectedCategory(category);
    navigateTo('catalog', { category });
  };

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-4 sm:my-6 shadow-2xl border border-slate-800">
      <div className={`transition-all duration-700 bg-gradient-to-r ${slide.bgGradient}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12 sm:py-16 lg:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 min-h-[460px]">
          
          {/* Left Content */}
          <div className="flex-1 space-y-6 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold">
              <Sparkles className={`w-3.5 h-3.5 ${slide.accentColor}`} />
              <span className="text-white">{slide.badge}</span>
              <span className="w-1 h-1 rounded-full bg-white/40"></span>
              <span className={slide.accentColor}>{slide.tagText}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Outfit'] tracking-tight text-white leading-tight">
              {slide.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {slide.subtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-primary-cta"
                onClick={() => handleCtaClick(slide.category)}
                className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 flex items-center gap-2 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>{slide.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={() => {
                  setSelectedCategory('all');
                  navigateTo('catalog');
                }}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold backdrop-blur-xs transition-all cursor-pointer"
              >
                View Full Catalog (52+)
              </button>
            </div>

            {/* Micro coupon quick claim */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <Tag className="w-3.5 h-3.5 text-indigo-400" />
              <span>Apply code <button onClick={() => applyCoupon('BHANUDEV')} className="text-indigo-300 font-mono font-bold hover:underline cursor-pointer">BHANUDEV</button> for 25% off</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full max-w-sm lg:max-w-md aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-200 font-medium truncate">{slide.title}</span>
              <span className="text-indigo-400 font-bold shrink-0">{slide.tagText}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-4 right-6 sm:right-10 flex items-center gap-2 z-10">
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
          className="p-2 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-colors cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-1.5 px-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentSlide === idx ? 'w-6 bg-indigo-500' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="p-2 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-colors cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
