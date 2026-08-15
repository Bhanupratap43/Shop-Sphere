import React, { useState } from 'react';
import { Sparkles, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext.jsx';
import { ProductCard } from '../catalog/ProductCard.jsx';

export const ProductCarousel = () => {
  const { products, navigateTo, setSelectedCategory } = useShop();
  const [activeTab, setActiveTab] = useState('trending'); // 'trending' | 'bestseller' | 'featured'

  const getFilteredProducts = () => {
    switch (activeTab) {
      case 'bestseller':
        return products.filter((p) => p.isBestSeller).slice(0, 8);
      case 'featured':
        return products.filter((p) => p.isFeatured).slice(0, 8);
      case 'trending':
      default:
        return products.filter((p) => p.isTrending).slice(0, 8);
    }
  };

  const displayProducts = getFilteredProducts();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Header and Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div>
          <div className="flex items-center gap-1.5 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Popular Right Now</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-slate-900">
            Trending & Top Rated
          </h2>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-2xl self-start md:self-auto border border-slate-200/60">
          <button
            onClick={() => setActiveTab('trending')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'trending'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trending</span>
          </button>

          <button
            onClick={() => setActiveTab('bestseller')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'bestseller'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Best Sellers</span>
          </button>

          <button
            onClick={() => setActiveTab('featured')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'featured'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Staff Picks</span>
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All CTA */}
      <div className="mt-10 text-center">
        <button
          onClick={() => {
            setSelectedCategory('all');
            navigateTo('catalog');
          }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-xl text-xs font-bold transition-all shadow-xs hover:border-slate-300 cursor-pointer"
        >
          <span>Explore All 32+ Products</span>
          <ArrowRight className="w-4 h-4 text-indigo-600" />
        </button>
      </div>
    </section>
  );
};
