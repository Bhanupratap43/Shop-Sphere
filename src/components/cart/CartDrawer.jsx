import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Plus, Minus } from 'lucide-react';
import { useShop } from '../../context/ShopContext.jsx';
import { formatPrice } from '../../utils/formatters.js';

export const CartDrawer = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    cartCount, 
    cartSubtotal, 
    updateCartQuantity, 
    removeFromCart, 
    navigateTo, 
    currency 
  } = useShop();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigateTo('checkout');
  };

  const handleViewCart = () => {
    setIsCartOpen(false);
    navigateTo('cart');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-200">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-indigo-600" />
            <h3 className="font-bold text-slate-900 text-base font-['Outfit']">
              Shopping Cart ({cartCount})
            </h3>
          </div>
          <button
            id="close-cart-drawer-btn"
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-slate-100">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.cartItemId} className="pt-4 first:pt-0 flex gap-4 items-start">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-18 h-18 rounded-xl object-cover border border-slate-200/80 shrink-0 bg-slate-50"
                />

                <div className="flex-1 min-w-0 space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 truncate font-['Outfit']">
                    {item.product.name}
                  </h4>
                  <div className="flex flex-wrap gap-2 text-[11px] text-slate-500">
                    {item.color && <span>Color: {item.color}</span>}
                    {item.size && <span>Size: {item.size}</span>}
                  </div>
                  <p className="text-xs font-bold text-slate-900">
                    {formatPrice(item.price, currency)}
                  </p>

                  {/* Quantity Stepper */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50 overflow-hidden">
                      <button
                        onClick={() => updateCartQuantity(item.cartItemId, item.quantity - 1)}
                        className="px-2 py-0.5 text-slate-600 hover:bg-slate-200 font-bold transition-colors cursor-pointer text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-bold text-slate-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(item.cartItemId, item.quantity + 1)}
                        className="px-2 py-0.5 text-slate-600 hover:bg-slate-200 font-bold transition-colors cursor-pointer text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="text-slate-400 hover:text-rose-600 p-1 transition-colors cursor-pointer"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-slate-800 font-['Outfit']">Your Cart is Empty</h4>
              <p className="text-xs text-slate-500 max-w-xs">
                Looks like you haven&rsquo;t added any items to your bag yet. Explore our curated collections!
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigateTo('catalog');
                }}
                className="mt-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Browse Catalog
              </button>
            </div>
          )}
        </div>

        {/* Footer & Totals */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span>Subtotal:</span>
              <span className="font-bold text-slate-900 text-sm">{formatPrice(cartSubtotal, currency)}</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Shipping & promotional discounts are calculated at checkout.
            </p>

            <div className="space-y-2 pt-1">
              <button
                id="cart-drawer-checkout-btn"
                onClick={handleCheckout}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleViewCart}
                className="w-full py-2.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                View Full Cart & Apply Coupons
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
