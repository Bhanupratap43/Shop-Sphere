import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { useShop } from '../../context/ShopContext.jsx';

export const SortDropdown = () => {
  const { sortBy, setSortBy } = useShop();

  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
      <span className="text-xs font-semibold text-slate-500 hidden sm:inline">Sort By:</span>
      <select
        id="catalog-sort-select"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-white border border-slate-200 text-slate-800 text-xs font-semibold rounded-xl px-3 py-2 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer shadow-2xs"
      >
        <option value="popularity">Popularity</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rating</option>
        <option value="discount">Biggest Discount</option>
        <option value="newest">Newest Arrivals</option>
      </select>
    </div>
  );
};
