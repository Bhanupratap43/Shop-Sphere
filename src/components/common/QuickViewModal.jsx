import React, { useState, useEffect } from 'react';
import { X, Star, ShoppingBag, Heart, Check, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { useShop } from '../../context/ShopContext.jsx';
import { formatPrice } from '../../utils/formatters.js';

export const QuickViewModal = () => {
  const { 
    quickViewProduct, 
    setQuickViewProduct, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    navigateTo, 
    currency 
  } = useShop();

  const [selectedImage, setSelectedImage] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedImage(quickViewProduct.image);
      setSelectedColor(quickViewProduct.colors && quickViewProduct.colors.length > 0 ? quickViewProduct.colors[0].name : null);
      setSelectedSize(quickViewProduct.sizes && quickViewProduct.sizes.length > 0 ? quickViewProduct.sizes[0] : null);
      setQuantity(1);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isWishlisted = isInWishlist(product.id);
  const gallery = [product.image, ...(product.additionalImages || [])];

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    setQuickViewProduct(null);
  };

  const handleViewFullDetails = () => {
    setQuickViewProduct(null);
    navigateTo('product-details', { productId: product.id });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          id="close-quickview-btn"
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-700 bg-white/80 backdrop-blur-md rounded-full shadow-xs transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Images */}
        <div className="md:w-1/2 p-6 bg-slate-50 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs mb-4">
            <img 
              src={selectedImage || product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            {product.discount > 0 && (
              <span className="absolute top-3 left-3 bg-rose-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-xs">
                {product.discount}% OFF
              </span>
            )}
          </div>

          {/* Thumbnail Strip */}
          {gallery.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    selectedImage === imgUrl ? 'border-indigo-600 ring-2 ring-indigo-500/20' : 'border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details & Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[80vh] md:max-h-[90vh]">
          <div className="space-y-4">
            
            {/* Category & Brand */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                {product.brand}
              </span>
              <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{product.rating}</span>
                <span className="text-slate-400 font-normal">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold font-['Outfit'] text-slate-900 leading-snug">
              {product.name}
            </h3>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-extrabold text-slate-900 font-['Outfit']">
                {formatPrice(product.price, currency)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-sm text-slate-400 line-through">
                  {formatPrice(product.originalPrice, currency)}
                </span>
              )}
            </div>

            {/* Description snippet */}
            <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-semibold text-slate-700">
                  Color: <span className="font-normal text-slate-500">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-7 h-7 rounded-full border-2 transition-transform cursor-pointer relative flex items-center justify-center ${
                        selectedColor === c.name ? 'scale-110 border-indigo-600 ring-2 ring-indigo-500/30' : 'border-slate-200 hover:scale-105'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {selectedColor === c.name && (
                        <Check className={`w-3.5 h-3.5 ${c.hex === '#ffffff' || c.hex === '#f8fafc' ? 'text-slate-900' : 'text-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-semibold text-slate-700">
                  Size: <span className="font-normal text-slate-500">{selectedSize}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-1 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                        selectedSize === s
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Stepper & Stock */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-slate-600 hover:bg-slate-200 font-bold transition-colors cursor-pointer"
                >
                  -
                </button>
                <span className="px-3 py-1.5 text-xs font-bold text-slate-800 min-w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock || 10, quantity + 1))}
                  className="px-3 py-1.5 text-slate-600 hover:bg-slate-200 font-bold transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>

              <span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> In Stock ({product.stock} units)
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 space-y-2.5">
            <div className="flex items-center gap-2">
              <button
                id="quickview-add-to-cart-btn"
                onClick={handleAddToCart}
                className="flex-1 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Shopping Cart</span>
              </button>

              <button
                id="quickview-toggle-wishlist-btn"
                onClick={() => toggleWishlist(product)}
                className={`p-3 rounded-xl border transition-colors cursor-pointer ${
                  isWishlisted 
                    ? 'border-rose-300 bg-rose-50 text-rose-600' 
                    : 'border-slate-200 text-slate-600 hover:border-rose-300 hover:text-rose-600'
                }`}
                title="Wishlist"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
              </button>
            </div>

            <button
              onClick={handleViewFullDetails}
              className="w-full text-center py-2 text-xs font-semibold text-slate-600 hover:text-indigo-600 transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>View complete product details and reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
