import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext.jsx';
import { validateEmail } from '../../utils/formatters.js';

export const NewsletterSection = () => {
  const { addToast } = useShop();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) {
      addToast({
        type: 'warning',
        title: 'Valid Email Required',
        message: 'Please provide a valid email address to subscribe.'
      });
      return;
    }

    setIsSubscribed(true);
    addToast({
      type: 'success',
      title: 'Subscribed Successfully!',
      message: 'Thank you for subscribing! Your 25% promo code is BHANUDEV'
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-950 text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-indigo-800/40">
        
        {/* Background decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-indigo-400/30 text-xs font-semibold text-indigo-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join 25,000+ Smart Shoppers</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Outfit'] tracking-tight">
            Unlock Exclusive Drops & Instant 25% Off
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Subscribe to our weekly newsletter for early access to limited edition releases, seasonal clearance events, and insider promo codes.
          </p>

          {isSubscribed ? (
            <div className="p-4 bg-emerald-500/20 border border-emerald-400/30 rounded-2xl flex items-center justify-center gap-2.5 text-emerald-300 font-semibold text-sm animate-in zoom-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>You&rsquo;re subscribed! Use promo code <strong>BHANUDEV</strong> at checkout.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
              <div className="relative w-full">
                <input
                  id="newsletter-email-input"
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-400/50 backdrop-blur-xs transition-all"
                />
                <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-3.5 pointer-events-none" />
              </div>

              <button
                id="newsletter-submit-btn"
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="text-[11px] text-slate-400">
            No spam guaranteed. You can unsubscribe at any time with a single click.
          </p>
        </div>
      </div>
    </section>
  );
};
