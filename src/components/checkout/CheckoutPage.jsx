import React, { useState } from 'react';
import { 
  CheckCircle2, 
  CreditCard, 
  Truck, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft, 
  QrCode, 
  Lock, 
  AlertCircle, 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  DollarSign, 
  Sparkles,
  Check
} from 'lucide-react';
import { useShop } from '../../context/ShopContext.jsx';
import { formatPrice, validateEmail, validatePhone, validatePostalCode } from '../../utils/formatters.js';

export const CheckoutPage = () => {
  const {
    cart,
    cartSubtotal,
    couponDiscount,
    appliedCoupon,
    shippingCost,
    taxAmount,
    cartTotal,
    savedAddresses,
    placeOrder,
    navigateTo,
    currency,
    addToast
  } = useShop();

  const [currentStep, setCurrentStep] = useState(1); // 1: Shipping, 2: Payment, 3: Review

  // Step 1: Shipping Form State
  const defaultAddress = savedAddresses.find((a) => a.isDefault) || savedAddresses[0] || {};
  const [shippingData, setShippingData] = useState({
    fullName: defaultAddress.name || 'Bhanu Pratap',
    email: 'bhanu.pratap.dev@gmail.com',
    phone: defaultAddress.phone || '9876543210',
    street: defaultAddress.street || 'Sector 62, Electronic City',
    city: defaultAddress.city || 'Noida',
    state: defaultAddress.state || 'Uttar Pradesh',
    zipCode: defaultAddress.zipCode || '201301',
    country: defaultAddress.country || 'India',
    saveForFuture: true
  });

  const [errors, setErrors] = useState({});

  // Step 2: Payment State
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' | 'upi' | 'cod'
  const [cardData, setCardData] = useState({
    cardNumber: '4532 8921 4092 8812',
    cardHolder: 'BHANU PRATAP',
    expiry: '12/28',
    cvv: '884'
  });
  const [upiId, setUpiId] = useState('bhanupratap@okaxis');
  const [isProcessing, setIsProcessing] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold font-['Outfit']">Your Cart is Empty</h2>
        <p className="text-sm text-slate-500">Please add items to your cart before proceeding to checkout.</p>
        <button
          onClick={() => navigateTo('catalog')}
          className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold cursor-pointer"
        >
          Return to Catalog
        </button>
      </div>
    );
  }

  // Pure JavaScript form validator for Step 1
  const validateShippingForm = () => {
    const newErrors = {};

    if (!shippingData.fullName.trim() || shippingData.fullName.length < 3) {
      newErrors.fullName = 'Please enter your full name (at least 3 characters)';
    }

    if (!shippingData.email || !validateEmail(shippingData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!shippingData.phone || !validatePhone(shippingData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!shippingData.street.trim()) {
      newErrors.street = 'Street address is required';
    }

    if (!shippingData.city.trim()) {
      newErrors.city = 'City name is required';
    }

    if (!shippingData.zipCode.trim() || !validatePostalCode(shippingData.zipCode)) {
      newErrors.zipCode = 'Please enter a valid 5-6 digit PIN/Postal code';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStep1Next = (e) => {
    e.preventDefault();
    if (validateShippingForm()) {
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      addToast({
        type: 'error',
        title: 'Validation Error',
        message: 'Please resolve the highlighted fields to proceed.'
      });
    }
  };

  const handleStep2Next = (e) => {
    e.preventDefault();
    if (paymentMethod === 'card') {
      if (!cardData.cardNumber.trim() || cardData.cardNumber.replace(/\s/g, '').length < 16) {
        addToast({ type: 'warning', title: 'Invalid Card', message: 'Please enter a 16-digit card number.' });
        return;
      }
    } else if (paymentMethod === 'upi') {
      if (!upiId.includes('@')) {
        addToast({ type: 'warning', title: 'Invalid UPI ID', message: 'Please enter a valid UPI VPA (e.g., user@upi).' });
        return;
      }
    }
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);

    // Simulate safe processing delay
    setTimeout(() => {
      const order = placeOrder({
        shippingAddress: shippingData,
        paymentMethod: paymentMethod === 'card' 
          ? `Credit/Debit Card (ending in ${cardData.cardNumber.slice(-4)})` 
          : paymentMethod === 'upi' 
          ? `UPI (${upiId})` 
          : 'Cash on Delivery (COD)'
      });

      setIsProcessing(false);
      navigateTo('order-confirmation', { orderId: order.id });
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Checkout Progress Stepper */}
      <div className="max-w-3xl mx-auto mb-10">
        <div className="flex items-center justify-between relative">
          
          {/* Progress bar background line */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 -z-0">
            <div
              className="h-full bg-indigo-600 transition-all duration-300"
              style={{ width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : '100%' }}
            />
          </div>

          {/* STEP 1 */}
          <div className="relative z-10 flex flex-col items-center gap-1.5 bg-white px-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-colors shadow-xs ${
              currentStep >= 1 ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
            }`}>
              {currentStep > 1 ? <Check className="w-5 h-5" /> : '1'}
            </div>
            <span className="text-xs font-bold text-slate-900">Shipping</span>
          </div>

          {/* STEP 2 */}
          <div className="relative z-10 flex flex-col items-center gap-1.5 bg-white px-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-colors shadow-xs ${
              currentStep >= 2 ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
            }`}>
              {currentStep > 2 ? <Check className="w-5 h-5" /> : '2'}
            </div>
            <span className="text-xs font-bold text-slate-900">Payment</span>
          </div>

          {/* STEP 3 */}
          <div className="relative z-10 flex flex-col items-center gap-1.5 bg-white px-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-colors shadow-xs ${
              currentStep === 3 ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
            }`}>
              3
            </div>
            <span className="text-xs font-bold text-slate-900">Review</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Form Left, Summary Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Column: Interactive Multi-Step Form */}
        <div className="lg:col-span-2">
          
          {/* STEP 1: SHIPPING DETAILS */}
          {currentStep === 1 && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-indigo-600" />
                  <h2 className="text-lg font-bold font-['Outfit'] text-slate-900">
                    Shipping & Delivery Address
                  </h2>
                </div>
                <span className="text-xs text-slate-400">Step 1 of 3</span>
              </div>

              {/* Saved Address Quick Selector */}
              {savedAddresses.length > 0 && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-2">
                  <span className="text-xs font-semibold text-slate-700 block">Use a Saved Address:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {savedAddresses.map((addr) => (
                      <button
                        type="button"
                        key={addr.id}
                        onClick={() => {
                          setShippingData({
                            ...shippingData,
                            fullName: addr.name,
                            phone: addr.phone,
                            street: addr.street,
                            city: addr.city,
                            state: addr.state,
                            zipCode: addr.zipCode,
                            country: addr.country
                          });
                        }}
                        className="p-3 text-left bg-white border border-slate-200 hover:border-indigo-500 rounded-xl text-xs space-y-0.5 transition-colors cursor-pointer"
                      >
                        <span className="font-bold text-slate-900 block">{addr.title} ({addr.name})</span>
                        <p className="text-slate-500 text-[11px] truncate">{addr.street}, {addr.city}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Shipping Form */}
              <form onSubmit={handleStep1Next} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Full Recipient Name *</label>
                    <input
                      id="shipping-fullname"
                      type="text"
                      placeholder="e.g. Bhanu Pratap"
                      value={shippingData.fullName}
                      onChange={(e) => setShippingData({ ...shippingData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 ${
                        errors.fullName ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-200'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Email for Tracking Updates *</label>
                    <input
                      id="shipping-email"
                      type="email"
                      placeholder="bhanu@example.com"
                      value={shippingData.email}
                      onChange={(e) => setShippingData({ ...shippingData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 ${
                        errors.email ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-200'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Phone (10 Digits) *</label>
                    <input
                      id="shipping-phone"
                      type="tel"
                      placeholder="9876543210"
                      value={shippingData.phone}
                      onChange={(e) => setShippingData({ ...shippingData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 ${
                        errors.phone ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-200'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Postal / PIN Code *</label>
                    <input
                      id="shipping-zip"
                      type="text"
                      placeholder="201301"
                      value={shippingData.zipCode}
                      onChange={(e) => setShippingData({ ...shippingData, zipCode: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 ${
                        errors.zipCode ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-200'
                      }`}
                    />
                    {errors.zipCode && <p className="text-[11px] text-rose-500 mt-1">{errors.zipCode}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Street Address / House No / Building *</label>
                  <input
                    id="shipping-street"
                    type="text"
                    placeholder="e.g. Flat 402, Highline Residency, Sector 62"
                    value={shippingData.street}
                    onChange={(e) => setShippingData({ ...shippingData, street: e.target.value })}
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 ${
                      errors.street ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-200'
                    }`}
                  />
                  {errors.street && <p className="text-[11px] text-rose-500 mt-1">{errors.street}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">City *</label>
                    <input
                      id="shipping-city"
                      type="text"
                      placeholder="Noida"
                      value={shippingData.city}
                      onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 ${
                        errors.city ? 'border-rose-400' : 'border-slate-200'
                      }`}
                    />
                    {errors.city && <p className="text-[11px] text-rose-500 mt-1">{errors.city}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">State / Region</label>
                    <input
                      id="shipping-state"
                      type="text"
                      placeholder="Uttar Pradesh"
                      value={shippingData.state}
                      onChange={(e) => setShippingData({ ...shippingData, state: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Country</label>
                    <input
                      id="shipping-country"
                      type="text"
                      placeholder="India"
                      value={shippingData.country}
                      onChange={(e) => setShippingData({ ...shippingData, country: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => navigateTo('cart')}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Cart</span>
                  </button>

                  <button
                    id="checkout-step1-continue-btn"
                    type="submit"
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <span>Proceed to Payment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 2: PAYMENT METHOD */}
          {currentStep === 2 && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-indigo-600" />
                  <h2 className="text-lg font-bold font-['Outfit'] text-slate-900">
                    Payment Method
                  </h2>
                </div>
                <span className="text-xs text-slate-400">Step 2 of 3</span>
              </div>

              {/* Demo Notice Banner */}
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-2.5 text-xs text-amber-900">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Portfolio Demonstration Environment:</span>
                  <p className="text-[11px] text-amber-800 mt-0.5">
                    No actual financial charges will occur. Card numbers and UPI handles are pre-populated with safe test credentials.
                  </p>
                </div>
              </div>

              {/* Payment Method Selector Tabs */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                    paymentMethod === 'card'
                      ? 'border-indigo-600 bg-indigo-50/70 text-indigo-700 font-bold shadow-xs'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span className="text-xs">Credit/Debit Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                    paymentMethod === 'upi'
                      ? 'border-indigo-600 bg-indigo-50/70 text-indigo-700 font-bold shadow-xs'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <QrCode className="w-5 h-5" />
                  <span className="text-xs">UPI / QR Code</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                    paymentMethod === 'cod'
                      ? 'border-indigo-600 bg-indigo-50/70 text-indigo-700 font-bold shadow-xs'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <DollarSign className="w-5 h-5" />
                  <span className="text-xs">Cash on Delivery</span>
                </button>
              </div>

              {/* Payment Details Form */}
              <form onSubmit={handleStep2Next} className="space-y-4 pt-2">
                {paymentMethod === 'card' && (
                  <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-4 shadow-xl">
                    <div className="flex items-center justify-between text-xs text-indigo-300">
                      <span>PREMIUM DEMO CARD</span>
                      <CreditCard className="w-5 h-5" />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Card Number</label>
                      <input
                        type="text"
                        value={cardData.cardNumber}
                        onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-mono text-sm tracking-wider focus:outline-hidden focus:ring-2 focus:ring-indigo-400"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Cardholder Name</label>
                        <input
                          type="text"
                          value={cardData.cardHolder}
                          onChange={(e) => setCardData({ ...cardData, cardHolder: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white text-xs font-mono uppercase focus:outline-hidden focus:ring-2 focus:ring-indigo-400"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Expiry</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            value={cardData.expiry}
                            onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white text-xs font-mono focus:outline-hidden focus:ring-2 focus:ring-indigo-400"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">CVV</label>
                          <input
                            type="password"
                            maxLength={3}
                            value={cardData.cvv}
                            onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white text-xs font-mono focus:outline-hidden focus:ring-2 focus:ring-indigo-400"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'upi' && (
                  <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-200 text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-white p-2 rounded-2xl shadow-xs border border-indigo-100 flex items-center justify-center">
                      <QrCode className="w-24 h-24 text-indigo-900" />
                    </div>
                    <div>
                      <p className="text-xs text-indigo-950 font-bold">Scan with GPay / PhonePe / Paytm</p>
                      <p className="text-[11px] text-indigo-700 mt-0.5">Or enter your VPA / UPI ID below:</p>
                    </div>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="username@okhdfcbank"
                      className="max-w-xs mx-auto w-full px-3 py-2 bg-white border border-indigo-200 rounded-xl text-xs font-mono text-center text-slate-900"
                    />
                  </div>
                )}

                {paymentMethod === 'cod' && (
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <h4 className="text-xs font-bold text-slate-900">Cash on Delivery Available</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Pay with cash or UPI directly to the delivery executive when your parcel arrives at your doorstep.
                    </p>
                  </div>
                )}

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Shipping</span>
                  </button>

                  <button
                    id="checkout-step2-continue-btn"
                    type="submit"
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <span>Review Order</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 3: ORDER REVIEW */}
          {currentStep === 3 && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  <h2 className="text-lg font-bold font-['Outfit'] text-slate-900">
                    Final Order Review
                  </h2>
                </div>
                <span className="text-xs text-slate-400">Step 3 of 3</span>
              </div>

              {/* Delivery & Payment Confirmation Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">Delivering To</span>
                    <button onClick={() => setCurrentStep(1)} className="text-[11px] text-indigo-600 hover:underline">Edit</button>
                  </div>
                  <h5 className="text-xs font-bold text-slate-900">{shippingData.fullName}</h5>
                  <p className="text-xs text-slate-600">{shippingData.street}, {shippingData.city}, {shippingData.zipCode}</p>
                  <p className="text-xs text-slate-500">Phone: {shippingData.phone}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">Payment Method</span>
                    <button onClick={() => setCurrentStep(2)} className="text-[11px] text-indigo-600 hover:underline">Edit</button>
                  </div>
                  <h5 className="text-xs font-bold text-slate-900 capitalize">
                    {paymentMethod === 'card' ? 'Credit/Debit Card' : paymentMethod === 'upi' ? 'UPI / QR' : 'Cash on Delivery'}
                  </h5>
                  <p className="text-xs text-slate-600">
                    {paymentMethod === 'card' ? `•••• •••• •••• ${cardData.cardNumber.slice(-4)}` : paymentMethod === 'upi' ? upiId : 'Pay at doorstep'}
                  </p>
                  <span className="inline-block bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded mt-1">
                    Verified Secure
                  </span>
                </div>
              </div>

              {/* Cart items list in review */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Ordered Items ({cart.length})</h4>
                <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden max-h-56 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.cartItemId} className="p-3 bg-white flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-3 min-w-0">
                        <img src={item.product.image} alt="" className="w-12 h-12 rounded-lg object-cover shrink-0" />
                        <div className="min-w-0">
                          <span className="font-bold text-slate-900 truncate block">{item.product.name}</span>
                          <span className="text-[11px] text-slate-400">Qty: {item.quantity} {item.color ? `• ${item.color}` : ''}</span>
                        </div>
                      </div>
                      <span className="font-bold text-slate-900 shrink-0 font-mono">
                        {formatPrice(item.price * item.quantity, currency)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final Confirm Button */}
              <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Payment</span>
                </button>

                <button
                  id="checkout-confirm-place-order-btn"
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xl shadow-indigo-600/30 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span>Placing Your Order...</span>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Confirm & Place Order ({formatPrice(cartTotal, currency)})</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Order Summary Sticky Card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-4 sticky top-24">
          <h3 className="text-base font-bold font-['Outfit'] text-slate-900 pb-3 border-b border-slate-200">
            Order Total
          </h3>

          <div className="space-y-2.5 text-xs text-slate-600">
            <div className="flex items-center justify-between">
              <span>Items ({cart.length}):</span>
              <span className="font-semibold text-slate-900">{formatPrice(cartSubtotal, currency)}</span>
            </div>

            {couponDiscount > 0 && (
              <div className="flex items-center justify-between text-emerald-600 font-semibold">
                <span>Promo ({appliedCoupon?.code}):</span>
                <span>-{formatPrice(couponDiscount, currency)}</span>
              </div>
            )}

            <div className="flex items-center justify-between">
              <span>Estimated Tax:</span>
              <span className="font-semibold text-slate-900">{formatPrice(taxAmount, currency)}</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Shipping:</span>
              {shippingCost === 0 ? (
                <span className="text-emerald-600 font-bold">FREE</span>
              ) : (
                <span className="font-semibold text-slate-900">{formatPrice(shippingCost, currency)}</span>
              )}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-200 text-base font-extrabold text-slate-900 font-['Outfit']">
              <span>Grand Total:</span>
              <span className="text-indigo-600 text-xl font-bold">{formatPrice(cartTotal, currency)}</span>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl text-[11px] text-slate-500 space-y-1">
            <div className="flex items-center gap-1.5 text-slate-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Simulated 256-bit SSL Checkout</span>
            </div>
            <p>Portfolio Project built with React & LocalStorage.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
