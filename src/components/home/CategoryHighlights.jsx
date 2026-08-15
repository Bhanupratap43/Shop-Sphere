import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext.jsx';
import { CATEGORIES } from '../../data/categories.js';

export const CategoryHighlights = () => {
  const { navigateTo, setSelectedCategory } = useShop();

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    navigateTo('catalog', { category: categoryName });
  };

  const displayCategories = CATEGORIES.filter(c => c.id !== 'all');

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Collections</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-slate-900">
            Shop by Category
          </h2>
        </div>
        <button
          onClick={() => {
            setSelectedCategory('all');
            navigateTo('catalog');
          }}
          className="text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
        >
          <span>Browse All 6 Categories</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {displayCategories.map((category) => (
          <div
            key={category.id}
            id={`category-card-${category.slug}`}
            onClick={() => handleCategoryClick(category.name)}
            className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
              {category.badge && (
                <span className="absolute top-2.5 right-2.5 bg-indigo-600/90 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-2xs">
                  {category.badge}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-3.5 text-center bg-white flex-1 flex flex-col justify-center">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                {category.itemCount} items
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
