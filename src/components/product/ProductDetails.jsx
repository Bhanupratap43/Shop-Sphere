import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Heart, 
  ShoppingBag, 
  Zap, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Check, 
  ChevronRight, 
  ArrowLeft, 
  Send,
  MessageSquare,
  Sparkles,
  Share2,
  CheckCircle2
} from 'lucide-react';
import { useShop } from '../../context/ShopContext.jsx';
import { ProductCard } from '../catalog/ProductCard.jsx';
import { formatPrice, formatDate } from '../../utils/formatters.js';

export const ProductDetails = () => {
  const { 
    selectedProductId, 
    products, 
    navigateTo, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    currency,
    reviews,
    addProductReview,
    addToast
  } = useShop();

  const product = products.find((p) => p.id === selectedProductId) || products[0];

  const [selectedImage, setSelectedImage] = useState(product?.image || '');
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description'); // 'description' | 'specs' | 'reviews' | 'shipping'
  
  // Review form state
  const [reviewerName, setReviewerName] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      setSelectedColor(product.colors && product.colors.length > 0 ? product.colors[0].name : null);
      setSelectedSize(product.sizes && product.sizes.length > 0 ? product.sizes[0] : null);
      setQuantity(1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [product]);

  if (!product) return null;

  const isWishlisted = isInWishlist(product.id);
  const gallery = [product.image, ...(product.additionalImages || [])];
  const productReviews = reviews[product.id] || [];

  // Related products from same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    navigateTo('checkout');
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewComment.trim()) {
      addToast({ type: 'warning', title: 'Review Required', message: 'Please write your feedback.' });
      return;
    }

    addProductReview(product.id, {
      author: reviewerName.trim() || 'Verified Shopper',
      rating: reviewRating,
      comment: reviewComment.trim()
    });

    setReviewComment('');
    setReviewerName('');
  };

  const handleShare = () => {
    navigator.clipboard?.writeText?.(window.location.href);
    addToast({
      type: 'info',
      title: 'Link Copied',
      message: 'Product link copied to clipboard.'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 overflow-x-auto whitespace-nowrap pb-1">
        <button onClick={() => navigateTo('home')} className="hover:text-indigo-600 transition-colors cursor-pointer">
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <button 
          onClick={() => navigateTo('catalog', { category: product.category })} 
          className="hover:text-indigo-600 transition-colors cursor-pointer"
        >
          {product.category}
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="text-slate-900 font-medium truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs">
        
        {/* Left Column: Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs group">
            <img
              src={selectedImage || product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {product.discount > 0 && (
              <span className="absolute top-4 left-4 bg-rose-500 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-xs">
                {product.discount}% OFF
              </span>
            )}
            <button
              onClick={handleShare}
              className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-md rounded-full shadow-xs text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              title="Share Product"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          {/* Thumbnail Gallery Row */}
          {gallery.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    selectedImage === imgUrl 
                      ? 'border-indigo-600 ring-2 ring-indigo-500/20 shadow-xs' 
                      : 'border-slate-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Trust Guarantees Row */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 text-center text-[11px] text-slate-600 font-medium">
            <div className="p-3 bg-slate-50 rounded-xl flex flex-col items-center gap-1">
              <Truck className="w-4 h-4 text-indigo-600" />
              <span>Fast Delivery</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl flex flex-col items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>100% Authentic</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl flex flex-col items-center gap-1">
              <RotateCcw className="w-4 h-4 text-indigo-600" />
              <span>30-Day Return</span>
            </div>
          </div>
        </div>

        {/* Right Column: Details, Selectors, and Cart Actions */}
        <div className="space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            
            {/* Brand & Stock Status */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600">
                {product.brand}
              </span>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> In Stock ({product.stock} units available)
              </span>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-slate-900 leading-tight">
              {product.name}
            </h1>

            {/* Rating Stars */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.round(product.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-800">{product.rating}</span>
              <span className="text-slate-300">•</span>
              <button
                onClick={() => setActiveTab('reviews')}
                className="text-xs font-medium text-indigo-600 hover:underline cursor-pointer"
              >
                {product.reviews + (productReviews.length)} Verified Reviews
              </button>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline gap-3 pt-2">
              <span className="text-3xl font-extrabold text-slate-900 font-['Outfit']">
                {formatPrice(product.price, currency)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <>
                  <span className="text-base text-slate-400 line-through">
                    {formatPrice(product.originalPrice, currency)}
                  </span>
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                    Save {formatPrice(product.originalPrice - product.price, currency)} ({product.discount}%)
                  </span>
                </>
              )}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
              {product.description}
            </p>

            {/* Color Variant Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                  Select Color: <span className="font-semibold text-indigo-600">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-9 h-9 rounded-full border-2 transition-all cursor-pointer relative flex items-center justify-center ${
                        selectedColor === c.name 
                          ? 'scale-110 border-indigo-600 ring-4 ring-indigo-500/20 shadow-xs' 
                          : 'border-slate-200 hover:scale-105'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {selectedColor === c.name && (
                        <Check className={`w-4 h-4 ${c.hex === '#ffffff' || c.hex === '#f8fafc' ? 'text-slate-900' : 'text-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Variant Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                  Select Size: <span className="font-semibold text-indigo-600">{selectedSize}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                        selectedSize === s
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-700 shadow-2xs'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Stepper */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-slate-700 hover:bg-slate-200 font-bold transition-colors cursor-pointer text-sm"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-sm font-bold text-slate-900 min-w-10 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock || 10, quantity + 1))}
                    className="px-4 py-2 text-slate-700 hover:bg-slate-200 font-bold transition-colors cursor-pointer text-sm"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-slate-400">
                  Total: <strong className="text-slate-900">{formatPrice(product.price * quantity, currency)}</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons: Add to Cart, Buy Now, Wishlist */}
          <div className="pt-6 border-t border-slate-200/80 space-y-3">
            <div className="flex items-center gap-3">
              <button
                id="pdp-add-to-cart-btn"
                onClick={handleAddToCart}
                className="flex-1 py-3.5 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Shopping Cart</span>
              </button>

              <button
                id="pdp-wishlist-btn"
                onClick={() => toggleWishlist(product)}
                className={`p-3.5 rounded-xl border transition-colors cursor-pointer ${
                  isWishlisted 
                    ? 'border-rose-300 bg-rose-50 text-rose-600' 
                    : 'border-slate-200 text-slate-600 hover:border-rose-300 hover:text-rose-600'
                }`}
                title="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500' : ''}`} />
              </button>
            </div>

            <button
              id="pdp-buy-now-btn"
              onClick={handleBuyNow}
              className="w-full py-3.5 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Buy Now (Instant Checkout)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section: Description, Specifications, Reviews, Shipping */}
      <div className="mt-12 bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
        
        {/* Tab Headers */}
        <div className="flex border-b border-slate-200 overflow-x-auto bg-slate-50/50 text-xs sm:text-sm font-semibold">
          {[
            { id: 'description', label: 'Product Overview & Features' },
            { id: 'specs', label: 'Technical Specifications' },
            { id: 'reviews', label: `Customer Reviews (${productReviews.length + 1})` },
            { id: 'shipping', label: 'Shipping & Returns' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 transition-all cursor-pointer whitespace-nowrap border-b-2 ${
                activeTab === tab.id
                  ? 'border-indigo-600 text-indigo-600 bg-white font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Body */}
        <div className="p-6 sm:p-10">
          
          {/* TAB 1: DESCRIPTION */}
          {activeTab === 'description' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h3 className="text-base font-bold text-slate-900 font-['Outfit'] mb-2">
                  About {product.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {product.features && product.features.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: SPECS */}
          {activeTab === 'specs' && (
            <div className="max-w-2xl">
              <h3 className="text-base font-bold text-slate-900 font-['Outfit'] mb-4">
                Detailed Specifications
              </h3>
              {product.specifications ? (
                <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 text-xs bg-white hover:bg-slate-50">
                      <span className="font-bold text-slate-700 sm:w-1/3">{key}</span>
                      <span className="text-slate-600 sm:w-2/3">{value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500">Standard manufacturer specifications apply.</p>
              )}
            </div>
          )}

          {/* TAB 3: REVIEWS */}
          {activeTab === 'reviews' && (
            <div className="space-y-8 max-w-3xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                  <h3 className="text-xl font-bold font-['Outfit'] text-slate-900">
                    Verified Customer Reviews
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-slate-800 text-sm ml-1">{product.rating}</span>
                    </div>
                    <span className="text-xs text-slate-400">Based on {product.reviews} total ratings</span>
                  </div>
                </div>
              </div>

              {/* Reviews List */}
              <div className="space-y-4">
                {productReviews.map((rev) => (
                  <div key={rev.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-xs">{rev.author}</span>
                        {rev.verified && (
                          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                            Verified Buyer
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-400">{formatDate(rev.date)}</span>
                    </div>

                    <div className="flex text-amber-400">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className={`w-3.5 h-3.5 ${s <= rev.rating ? 'fill-amber-400' : 'text-slate-200'}`} />
                      ))}
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed">
                      {rev.comment}
                    </p>
                  </div>
                ))}
              </div>

              {/* Write a Review Form */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-indigo-600" />
                  <span>Write a Customer Review</span>
                </h4>

                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Your Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Jordan Miller"
                        value={reviewerName}
                        onChange={(e) => setReviewerName(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500/20 text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Rating</label>
                      <select
                        value={reviewRating}
                        onChange={(e) => setReviewRating(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500/20 text-slate-800 cursor-pointer"
                      >
                        <option value={5}>5 Stars - Outstanding</option>
                        <option value={4}>4 Stars - Very Good</option>
                        <option value={3}>3 Stars - Average</option>
                        <option value={2}>2 Stars - Below Expectations</option>
                        <option value={1}>1 Star - Poor</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Your Review</label>
                    <textarea
                      rows={3}
                      placeholder="Share your experience with quality, fit, battery life, or materials..."
                      value={reviewComment}
                      onChange={(e) => setReviewComment(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500/20 text-slate-800"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Review</span>
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* TAB 4: SHIPPING */}
          {activeTab === 'shipping' && (
            <div className="space-y-4 max-w-2xl text-xs sm:text-sm text-slate-600 leading-relaxed">
              <h3 className="text-base font-bold text-slate-900 font-['Outfit']">
                Shipping & Returns Policy
              </h3>
              <p>
                All orders are dispatched from our regional fulfilment centers within 24 business hours. Orders placed over ₹999 qualify for complimentary express courier delivery across India (estimated 3–5 business days).
              </p>
              <h4 className="font-bold text-slate-900 pt-2">Hassle-Free 30-Day Returns:</h4>
              <p>
                If you are not 100% satisfied with your purchase, you may initiate a return within 30 days of receiving your package for a complete refund or replacement.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Recommended / Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Related Items</span>
              <h2 className="text-2xl font-extrabold font-['Outfit'] text-slate-900">
                You Might Also Like
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
