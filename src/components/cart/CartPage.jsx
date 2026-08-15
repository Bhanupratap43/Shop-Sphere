import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  Tag, 
  Check, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  X,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { useShop } from '../../context/ShopContext.jsx';
import { AVAILABLE_COUPONS } from '../../data/coupons.js';
import { formatPrice } from '../../utils/formatters.js';

export const CartPage = () => {
  const {
    cart,
    cartCount,
    cartSubtotal,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    couponDiscount,
    shippingCost,
    taxAmount,
    cartTotal,
    navigateTo,
    currency
  } = useShop();

  const [couponInput, setCouponInput] = useState('');

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponInput.trim()) {
      applyCoupon(couponInput);
      setCouponInput('');
    }
  };

  const freeShippingThreshold = 999;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const freeShippingProgress = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto shadow-xs space-y-4">
          <div className="w-20 h-20 rounded-3xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto shadow-inner">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-extrabold font-['Outfit'] text-slate-900">
            Your Cart is Empty
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
            Looks like you haven&rsquo;t added any items to your shopping cart yet. Explore our curated categories!
          </p>
          <button
            id="empty-cart-browse-btn"
            onClick={() => navigateTo('catalog')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Title */}
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
            Shopping Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})
          </h1>
        </div>

        <button
          onClick={clearCart}
          className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Clear Shopping Cart</span>
        </button>
      </div>

      {/* Free Shipping Progress Indicator */}
      <div className="bg-indigo-50/80 border border-indigo-100 p-4 rounded-2xl mb-8">
        <div className="flex items-center justify-between text-xs font-semibold text-indigo-950 mb-2">
          <span className="flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-indigo-600" />
            {amountToFreeShipping > 0 ? (
              <span>Add <strong>{formatPrice(amountToFreeShipping, currency)}</strong> more to get <strong>Free Express Shipping!</strong></span>
            ) : (
              <span className="text-emerald-700 font-bold">🎉 Congratulations! You have unlocked Free Express Shipping!</span>
            )}
          </span>
          <span className="text-indigo-600">{Math.round(freeShippingProgress)}%</span>
        </div>
        <div className="w-full h-2 bg-indigo-200/60 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-600 transition-all duration-500 rounded-full"
            style={{ width: `${freeShippingProgress}%` }}
          />
        </div>
      </div>

      {/* Main Cart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Cart Line Items (2 Cols) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs divide-y divide-slate-100 overflow-hidden">
            {cart.map((item) => (
              <div key={item.cartItemId} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                
                {/* Product Info */}
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-slate-200 shrink-0 bg-slate-50 cursor-pointer"
                    onClick={() => navigateTo('product-details', { productId: item.product.id })}
                  />

                  <div className="space-y-1 min-w-0">
                    <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
                      {item.product.brand}
                    </span>
                    <h3 
                      onClick={() => navigateTo('product-details', { productId: item.product.id })}
                      className="text-sm sm:text-base font-bold text-slate-900 truncate font-['Outfit'] hover:text-indigo-600 transition-colors cursor-pointer"
                    >
                      {item.product.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                      {item.color && <span>Color: <strong>{item.color}</strong></span>}
                      {item.size && <span>Size: <strong>{item.size}</strong></span>}
                    </div>
                    <p className="text-xs font-bold text-slate-900 pt-1">
                      {formatPrice(item.price, currency)}
                    </p>
                  </div>
                </div>

                {/* Quantity Stepper and Item Total */}
                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 overflow-hidden">
                    <button
                      onClick={() => updateCartQuantity(item.cartItemId, item.quantity - 1)}
                      className="px-3 py-1.5 text-slate-600 hover:bg-slate-200 font-bold transition-colors cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-bold text-slate-900 min-w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateCartQuantity(item.cartItemId, item.quantity + 1)}
                      className="px-3 py-1.5 text-slate-600 hover:bg-slate-200 font-bold transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-right min-w-20">
                    <span className="text-sm sm:text-base font-extrabold text-slate-900 font-['Outfit'] block">
                      {formatPrice(item.price * item.quantity, currency)}
                    </span>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.cartItemId)}
                    className="text-slate-400 hover:text-rose-600 p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick promo code suggestions pills */}
          <div className="p-4 bg-white rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <span className="text-slate-500 font-medium">Quick promo codes to test:</span>
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_COUPONS.map((cpn) => (
                <button
                  key={cpn.code}
                  onClick={() => applyCoupon(cpn.code)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 text-indigo-700 font-mono font-bold border border-slate-200 transition-colors cursor-pointer"
                >
                  {cpn.code}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary Box (1 Col) */}
        <div className="space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
            <h3 className="text-lg font-bold font-['Outfit'] text-slate-900 pb-3 border-b border-slate-200">
              Order Summary
            </h3>

            {/* Promo Code Input Form */}
            <div>
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                Have a Promo Code?
              </label>
              {appliedCoupon ? (
                <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-semibold text-emerald-800">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{appliedCoupon.code} applied ({appliedCoupon.description})</span>
                  </div>
                  <button onClick={removeCoupon} className="text-emerald-700 hover:text-emerald-950 p-1 cursor-pointer">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    id="cart-coupon-input"
                    type="text"
                    placeholder="e.g. BHANUDEV"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                    className="flex-1 px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs uppercase font-mono font-bold focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 text-slate-800"
                  />
                  <button
                    id="cart-apply-coupon-btn"
                    type="submit"
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </form>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-3 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <span>Items Subtotal:</span>
                <span className="font-semibold text-slate-900">{formatPrice(cartSubtotal, currency)}</span>
              </div>

              {couponDiscount > 0 && (
                <div className="flex items-center justify-between text-emerald-600 font-semibold">
                  <span>Coupon Discount:</span>
                  <span>-{formatPrice(couponDiscount, currency)}</span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span>Estimated GST (18%):</span>
                <span className="font-semibold text-slate-900">{formatPrice(taxAmount, currency)}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Shipping Delivery:</span>
                {shippingCost === 0 ? (
                  <span className="text-emerald-600 font-bold">FREE</span>
                ) : (
                  <span className="font-semibold text-slate-900">{formatPrice(shippingCost, currency)}</span>
                )}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-200 text-sm sm:text-base font-extrabold text-slate-900 font-['Outfit']">
                <span>Estimated Total:</span>
                <span className="text-xl sm:text-2xl text-indigo-600">{formatPrice(cartTotal, currency)}</span>
              </div>
            </div>

            {/* Proceed to Checkout CTA */}
            <button
              id="cart-proceed-to-checkout-btn"
              onClick={() => navigateTo('checkout')}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Trust Badges */}
            <div className="space-y-2 pt-2 border-t border-slate-100 text-[11px] text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Encrypted simulated checkout security</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>30-Day returns guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
