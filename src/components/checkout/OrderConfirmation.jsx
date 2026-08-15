import React from 'react';
import { 
  CheckCircle2, 
  Package, 
  Truck, 
  MapPin, 
  CreditCard, 
  Calendar, 
  Printer, 
  ArrowRight, 
  ShoppingBag,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { useShop } from '../../context/ShopContext.jsx';
import { formatPrice, formatDate } from '../../utils/formatters.js';

export const OrderConfirmation = () => {
  const { currentOrder, orders, navigateTo, currency, addToast } = useShop();

  const order = currentOrder || orders[0];

  if (!order) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold font-['Outfit']">No Order Found</h2>
        <p className="text-sm text-slate-500">You haven&rsquo;t placed any orders in this session yet.</p>
        <button
          onClick={() => navigateTo('catalog')}
          className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold cursor-pointer"
        >
          Explore Catalog
        </button>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header Banner */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
        
        {/* Celebratory Green Top Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-8 text-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto shadow-lg animate-in zoom-in duration-300">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-['Outfit']">
            Thank You! Your Order is Confirmed
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-md mx-auto">
            We&rsquo;ve received your order and our fulfilment center is preparing your package for express dispatch.
          </p>
          <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-mono font-bold">
            Order ID: #{order.id}
          </div>
        </div>

        {/* Order Progress Tracker */}
        <div className="p-6 sm:p-8 border-b border-slate-200 bg-slate-50/60">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6 text-center">
            Estimated Delivery: 3 - 5 Business Days
          </h3>

          <div className="grid grid-cols-4 gap-2 relative">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                ✓
              </div>
              <span className="text-[11px] font-bold text-slate-900">Order Placed</span>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow-xs animate-pulse">
                2
              </div>
              <span className="text-[11px] font-bold text-indigo-700">Processing</span>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold">
                3
              </div>
              <span className="text-[11px] font-medium text-slate-400">Shipped</span>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold">
                4
              </div>
              <span className="text-[11px] font-medium text-slate-400">Delivered</span>
            </div>
          </div>
        </div>

        {/* Order Details Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Shipping and Payment Info Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                <span>Shipping Address</span>
              </div>
              <p className="font-bold text-slate-900">{order.shippingAddress?.fullName}</p>
              <p className="text-slate-600">{order.shippingAddress?.street}</p>
              <p className="text-slate-600">{order.shippingAddress?.city}, {order.shippingAddress?.state} {order.shippingAddress?.zipCode}</p>
              <p className="text-slate-500">Contact: {order.shippingAddress?.phone}</p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                <CreditCard className="w-3.5 h-3.5 text-indigo-600" />
                <span>Payment & Order Meta</span>
              </div>
              <p className="text-slate-600">Method: <strong className="text-slate-900">{order.paymentMethod}</strong></p>
              <p className="text-slate-600">Date: <strong className="text-slate-900">{formatDate(order.createdAt)}</strong></p>
              <p className="text-slate-600">Status: <strong className="text-emerald-700 capitalize">{order.status}</strong></p>
            </div>
          </div>

          {/* Ordered Line Items */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold font-['Outfit'] text-slate-900 uppercase tracking-wider">
              Items in This Order ({order.items?.length || 0})
            </h3>
            <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
              {order.items?.map((item, idx) => (
                <div key={idx} className="p-4 bg-white flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <img
                      src={item.product?.image}
                      alt=""
                      className="w-14 h-14 rounded-xl object-cover border border-slate-200 shrink-0 bg-slate-50"
                    />
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 truncate font-['Outfit']">
                        {item.product?.name}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Qty: {item.quantity} {item.color ? `• Color: ${item.color}` : ''} {item.size ? `• Size: ${item.size}` : ''}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-slate-900 font-mono shrink-0">
                    {formatPrice(item.price * item.quantity, currency)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Totals Breakdown */}
          <div className="border-t border-slate-200 pt-4 space-y-2 text-xs text-slate-600 max-w-xs ml-auto">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-semibold text-slate-900">{formatPrice(order.subtotal, currency)}</span>
            </div>
            {order.couponDiscount > 0 && (
              <div className="flex justify-between text-emerald-600 font-semibold">
                <span>Promo Discount:</span>
                <span>-{formatPrice(order.couponDiscount, currency)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Tax (8%):</span>
              <span className="font-semibold text-slate-900">{formatPrice(order.tax, currency)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span className="font-semibold text-slate-900">
                {order.shippingCost === 0 ? 'FREE' : formatPrice(order.shippingCost, currency)}
              </span>
            </div>
            <div className="flex justify-between pt-2 border-t border-slate-200 text-sm font-extrabold text-slate-900 font-['Outfit']">
              <span>Total Paid:</span>
              <span className="text-indigo-600 text-base">{formatPrice(order.total, currency)}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handlePrint}
              className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print Invoice / Receipt</span>
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => navigateTo('profile')}
                className="flex-1 sm:flex-none px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                View Order History
              </button>

              <button
                onClick={() => navigateTo('catalog')}
                className="flex-1 sm:flex-none px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <span>Continue Shopping</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
