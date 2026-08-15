import React, { useState } from 'react';
import { 
  Grid3X3, 
  Grid2X2, 
  List, 
  SlidersHorizontal, 
  X, 
  Search, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { useShop } from '../../context/ShopContext.jsx';
import { ProductCard } from './ProductCard.jsx';
import { FilterSidebar } from './FilterSidebar.jsx';
import { SortDropdown } from './SortDropdown.jsx';

export const ProductGrid = () => {
  const {
    filteredProducts,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedBrands,
    setSelectedBrands,
    resetFilters,
    inStockOnly,
    setInStockOnly,
    onSaleOnly,
    setOnSaleOnly,
    minRating,
    setMinRating
  } = useShop();

  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'compact' | 'list'
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const removeBrandFilter = (brand) => {
    setSelectedBrands(prev => prev.filter(b => b !== brand));
  };

  const hasActiveFilters = 
    selectedCategory !== 'all' || 
    selectedBrands.length > 0 || 
    searchQuery || 
    minRating > 0 || 
    inStockOnly || 
    onSaleOnly;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Top Banner / Title Header */}
      <div className="mb-6 space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-slate-900 capitalize">
              {selectedCategory === 'all' ? 'All Products Catalog' : `${selectedCategory} Collection`}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Showing {filteredProducts.length} premium products matching your criteria
            </p>
          </div>

          {/* Sort & Mobile Filter Trigger */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              id="mobile-filter-trigger-btn"
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3.5 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl text-xs font-bold shadow-2xs hover:bg-slate-50 cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-600" />
              <span>Filters {hasActiveFilters && '•'}</span>
            </button>

            <SortDropdown />

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1 shadow-2xs">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-indigo-50 text-indigo-600 font-bold' : 'text-slate-400 hover:text-slate-600'
                }`}
                title="Grid View (3 Columns)"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'list' ? 'bg-indigo-50 text-indigo-600 font-bold' : 'text-slate-400 hover:text-slate-600'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 pt-3">
            <span className="text-xs font-semibold text-slate-400">Active:</span>

            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-200">
                Search: &ldquo;{searchQuery}&rdquo;
                <button onClick={() => setSearchQuery('')} className="hover:text-indigo-900 cursor-pointer">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-200">
                Category: {selectedCategory}
                <button onClick={() => setSelectedCategory('all')} className="hover:text-indigo-900 cursor-pointer">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedBrands.map((brand) => (
              <span key={brand} className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-200">
                Brand: {brand}
                <button onClick={() => removeBrandFilter(brand)} className="hover:text-indigo-900 cursor-pointer">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}

            {minRating > 0 && (
              <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
                Rating: {minRating}★+
                <button onClick={() => setMinRating(0)} className="hover:text-amber-950 cursor-pointer">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {inStockOnly && (
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200">
                In Stock
                <button onClick={() => setInStockOnly(false)} className="hover:text-emerald-900 cursor-pointer">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {onSaleOnly && (
              <span className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full border border-rose-200">
                On Sale
                <button onClick={() => setOnSaleOnly(false)} className="hover:text-rose-900 cursor-pointer">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={resetFilters}
              className="text-xs font-semibold text-rose-600 hover:text-rose-800 hover:underline cursor-pointer pl-1"
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* Main Catalog Layout */}
      <div className="flex gap-8 items-start">
        
        {/* Desktop Filter Sidebar */}
        <aside className="w-64 shrink-0 hidden lg:block bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs sticky top-24">
          <FilterSidebar />
        </aside>

        {/* Product Cards Container */}
        <main className="flex-1 min-w-0">
          {filteredProducts.length > 0 ? (
            <div className={
              viewMode === 'list'
                ? 'space-y-4'
                : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
            }>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} viewMode={viewMode} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 max-w-lg mx-auto my-12 shadow-xs">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-['Outfit'] text-slate-900">
                No products found
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                We couldn&rsquo;t find any items matching your selected criteria. Try relaxing your filters or searching for another keyword.
              </p>
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset All Filters</span>
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Filters Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="w-full max-w-xs bg-white h-full overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between p-4 border-b border-slate-200 sticky top-0 bg-white z-10">
              <h3 className="font-bold text-slate-900 text-sm font-['Outfit']">Filters</h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar isMobileDrawer={true} onCloseMobile={() => setIsMobileFilterOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};
