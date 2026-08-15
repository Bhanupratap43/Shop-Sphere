import React from 'react';
import { 
  Heart, 
  ShoppingBag, 
  Trash2, 
  ArrowRight, 
  Star, 
  ArrowLeft,
  CheckCircle2 
} from 'lucide-react';
import { useShop } from '../../context/ShopContext.jsx';
import { formatPrice } from '../../utils/formatters.js';

export const WishlistPage = () => {
  const { 
    wishlist, 
    wishlistCount, 
    removeFromWishlist, 
    clearWishlist, 
    moveAllWishlistToCart, 
    addToCart, 
    navigateTo, 
    currency 
  } = useShop();

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto shadow-xs space-y-4">
          <div className="w-20 h-20 rounded-3xl bg-rose-50 text-rose-500 flex items-center justify-center mx-auto shadow-inner">
            <Heart className="w-10 h-10 fill-rose-500" />
          </div>
          <h2 className="text-2xl font-extrabold font-['Outfit'] text-slate-900">
            Your Wishlist is Empty
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
            Save your favorite items here while exploring. Tap the heart icon on any product to add it!
          </p>
          <button
            id="empty-wishlist-browse-btn"
            onClick={() => navigateTo('catalog')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer"
          >
            <span>Browse Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Title and Top Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <button
            onClick={() => navigateTo('catalog')}
            className="text-xs font-semibold text-indigo-600 hover:underline flex items-center gap-1 mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Continue Shopping</span>
          </button>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-slate-900">
            My Wishlist ({wishlistCount} {wishlistCount === 1 ? 'item' : 'items'})
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            id="wishlist-move-all-to-cart-btn"
            onClick={moveAllWishlistToCart}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Move All to Cart</span>
          </button>

          <button
            onClick={clearWishlist}
            className="text-xs font-semibold text-slate-500 hover:text-rose-600 transition-colors cursor-pointer px-2"
          >
            Clear Wishlist
          </button>
        </div>
      </div>

      {/* Grid of Wishlist items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-slate-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() => navigateTo('product-details', { productId: product.id })}
              />

              {product.discount > 0 && (
                <span className="absolute top-2.5 left-2.5 bg-rose-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-xs">
                  {product.discount}% OFF
                </span>
              )}

              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-2.5 right-2.5 p-2 rounded-full bg-white/90 text-slate-500 hover:text-rose-600 hover:bg-white shadow-xs transition-colors cursor-pointer"
                title="Remove from Wishlist"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-indigo-600 uppercase tracking-wider text-[11px]">
                    {product.brand}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                <h3
                  onClick={() => navigateTo('product-details', { productId: product.id })}
                  className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 font-['Outfit'] cursor-pointer"
                >
                  {product.name}
                </h3>
              </div>

              {/* Price and Add to Cart */}
              <div className="pt-2 border-t border-slate-100 space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-extrabold text-slate-900 font-['Outfit']">
                    {formatPrice(product.price, currency)}
                  </span>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-xs text-slate-400 line-through">
                      {formatPrice(product.originalPrice, currency)}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => addToCart(product, 1)}
                  className="w-full py-2.5 px-3 bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Shopping Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
