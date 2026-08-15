import React from 'react';
import { 
  SlidersHorizontal, 
  RotateCcw, 
  Star, 
  Check, 
  DollarSign, 
  Tag, 
  Sparkles,
  CheckSquare,
  Square
} from 'lucide-react';
import { useShop } from '../../context/ShopContext.jsx';
import { CATEGORIES, BRANDS } from '../../data/categories.js';
import { formatPrice } from '../../utils/formatters.js';

export const FilterSidebar = ({ isMobileDrawer = false, onCloseMobile = () => {} }) => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedBrands,
    setSelectedBrands,
    priceRange,
    setPriceRange,
    minRating,
    setMinRating,
    inStockOnly,
    setInStockOnly,
    onSaleOnly,
    setOnSaleOnly,
    resetFilters,
    filteredProducts,
    currency
  } = useShop();

  const handleBrandToggle = (brand) => {
    setSelectedBrands((prev) => {
      if (prev.includes(brand)) {
        return prev.filter((b) => b !== brand);
      } else {
        return [...prev, brand];
      }
    });
  };

  const hasActiveFilters = 
    selectedCategory !== 'all' || 
    selectedBrands.length > 0 || 
    priceRange[1] < 400 || 
    minRating > 0 || 
    inStockOnly || 
    onSaleOnly;

  return (
    <div className={`space-y-6 text-slate-800 ${isMobileDrawer ? 'p-6' : ''}`}>
      
      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-indigo-600" />
          <h3 className="text-sm font-bold font-['Outfit'] uppercase tracking-wider text-slate-900">
            Filters
          </h3>
        </div>

        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-700 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset All</span>
          </button>
        )}
      </div>

      {/* 1. Category Filter */}
      <div className="space-y-2.5">
        <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
          Categories
        </label>
        <div className="space-y-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id === 'all' ? 'all' : cat.name)}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                (selectedCategory === 'all' && cat.id === 'all') || selectedCategory === cat.name
                  ? 'bg-indigo-50 text-indigo-700 font-bold border border-indigo-200/60 shadow-2xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-[11px] text-slate-400 font-normal">
                {cat.itemCount}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Price Range Slider */}
      <div className="space-y-3 pt-4 border-t border-slate-200/80">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Price Range
          </label>
          <span className="text-xs font-bold text-indigo-600 font-mono">
            Up to {formatPrice(priceRange[1], currency)}
          </span>
        </div>

        <input
          id="price-range-slider"
          type="range"
          min="500"
          max="50000"
          step="500"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />

        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span>{formatPrice(0, currency)}</span>
          <span>{formatPrice(50000, currency)}</span>
        </div>
      </div>

      {/* 3. Customer Ratings Filter */}
      <div className="space-y-2.5 pt-4 border-t border-slate-200/80">
        <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
          Minimum Rating
        </label>
        <div className="space-y-1">
          {[
            { label: "4.5★ & above", value: 4.5 },
            { label: "4.0★ & above", value: 4.0 },
            { label: "3.5★ & above", value: 3.5 },
            { label: "All Ratings", value: 0 }
          ].map((r) => (
            <button
              key={r.value}
              onClick={() => setMinRating(r.value)}
              className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                minRating === r.value
                  ? 'bg-amber-50 text-amber-900 font-bold border border-amber-200/60'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{r.label}</span>
              </div>
              {minRating === r.value && <Check className="w-3.5 h-3.5 text-amber-600" />}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Brands Checkbox Multi-Select */}
      <div className="space-y-2.5 pt-4 border-t border-slate-200/80">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Brands ({selectedBrands.length ? `${selectedBrands.length} selected` : 'All'})
          </label>
          {selectedBrands.length > 0 && (
            <button
              onClick={() => setSelectedBrands([])}
              className="text-[11px] text-indigo-600 hover:underline cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        <div className="max-h-44 overflow-y-auto space-y-1 pr-1">
          {BRANDS.map((brand) => {
            const isChecked = selectedBrands.includes(brand);
            return (
              <button
                key={brand}
                onClick={() => handleBrandToggle(brand)}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
                  isChecked ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span>{brand}</span>
                {isChecked ? (
                  <CheckSquare className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                ) : (
                  <Square className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Toggles: In Stock Only & On Sale Only */}
      <div className="space-y-2 pt-4 border-t border-slate-200/80">
        <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
          Availability & Offers
        </label>
        
        <label className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200/70 hover:bg-slate-50 cursor-pointer transition-colors">
          <span className="text-xs font-medium text-slate-700">In Stock Items Only</span>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="w-4 h-4 text-indigo-600 rounded-md border-slate-300 focus:ring-indigo-500 cursor-pointer"
          />
        </label>

        <label className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200/70 hover:bg-slate-50 cursor-pointer transition-colors">
          <span className="text-xs font-medium text-slate-700">On Sale Discounts</span>
          <input
            type="checkbox"
            checked={onSaleOnly}
            onChange={(e) => setOnSaleOnly(e.target.checked)}
            className="w-4 h-4 text-indigo-600 rounded-md border-slate-300 focus:ring-indigo-500 cursor-pointer"
          />
        </label>
      </div>

      {/* Mobile Drawer Close Button */}
      {isMobileDrawer && (
        <div className="pt-4">
          <button
            onClick={onCloseMobile}
            className="w-full py-3 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer"
          >
            Show {filteredProducts.length} Products
          </button>
        </div>
      )}
    </div>
  );
};
