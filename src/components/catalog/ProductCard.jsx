import React from 'react';
import { Star, Heart, ShoppingBag, Eye, Check } from 'lucide-react';
import { useShop } from '../../context/ShopContext.jsx';
import { formatPrice } from '../../utils/formatters.js';

export const ProductCard = ({ product, viewMode = 'grid' }) => {
  const { 
    navigateTo, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    setQuickViewProduct, 
    currency 
  } = useShop();

  const isWishlisted = isInWishlist(product.id);

  const handleCardClick = () => {
    navigateTo('product-details', { productId: product.id });
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  // LIST VIEW LAYOUT
  if (viewMode === 'list') {
    return (
      <div
        id={`product-card-${product.id}`}
        onClick={handleCardClick}
        className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col sm:flex-row items-center p-4 gap-5"
      >
        {/* Product Image */}
        <div className="relative w-full sm:w-48 aspect-square rounded-xl overflow-hidden bg-slate-100 shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          {product.discount > 0 && (
            <span className="absolute top-2.5 left-2.5 bg-rose-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-xs">
              {product.discount}% OFF
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-2 text-left w-full">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
              {product.brand}
            </span>
            <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-slate-400 font-normal">({product.reviews})</span>
            </div>
          </div>

          <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors font-['Outfit']">
            {product.name}
          </h3>

          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="text-lg font-extrabold text-slate-900 font-['Outfit']">
              {formatPrice(product.price, currency)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-slate-400 line-through">
                {formatPrice(product.originalPrice, currency)}
              </span>
            )}
            <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
              In Stock ({product.stock})
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex sm:flex-col items-center gap-2 w-full sm:w-auto shrink-0 pt-2 sm:pt-0">
          <button
            onClick={handleAddToCart}
            className="flex-1 sm:flex-none px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>

          <div className="flex gap-2">
            <button
              onClick={handleQuickView}
              className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors cursor-pointer"
              title="Quick Preview"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={handleWishlistToggle}
              className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                isWishlisted ? 'border-rose-300 bg-rose-50 text-rose-600' : 'border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
              title="Wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // STANDARD GRID CARD
  return (
    <div
      id={`product-card-${product.id}`}
      onClick={handleCardClick}
      className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
    >
      {/* Top Image Container */}
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {product.discount > 0 && (
            <span className="bg-rose-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-xs">
              {product.discount}% OFF
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
              Best Seller
            </span>
          )}
        </div>

        {/* Wishlist Floating Button */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-2.5 right-2.5 z-10 p-2 rounded-full backdrop-blur-md transition-all duration-200 cursor-pointer shadow-xs ${
            isWishlisted
              ? 'bg-rose-50 text-rose-500 border border-rose-200'
              : 'bg-white/80 text-slate-600 hover:text-rose-500 hover:bg-white border border-white/60'
          }`}
          title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-4 h-4 transition-transform group-hover:scale-110 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>

        {/* Hover Quick View Overlay Action */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:flex items-center gap-2">
          <button
            onClick={handleQuickView}
            className="flex-1 py-2 bg-white/95 backdrop-blur-md hover:bg-white text-slate-800 rounded-xl text-xs font-bold shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-indigo-600" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-indigo-600 uppercase tracking-wider text-[11px]">
              {product.brand}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-bold text-[11px]">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-slate-400 font-normal">({product.reviews})</span>
            </div>
          </div>

          <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug font-['Outfit']">
            {product.name}
          </h3>
        </div>

        {/* Pricing & Add to Cart */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm sm:text-base font-extrabold text-slate-900 font-['Outfit']">
                {formatPrice(product.price, currency)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-[11px] text-slate-400 line-through">
                  {formatPrice(product.originalPrice, currency)}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="p-2.5 sm:px-3 sm:py-2 bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer group/btn"
            title="Add to Cart"
          >
            <ShoppingBag className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
