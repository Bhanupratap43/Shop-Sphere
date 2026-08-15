import React from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Globe, 
  Code2, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Headphones, 
  ExternalLink,
  Award
} from 'lucide-react';
import { useShop } from '../../context/ShopContext.jsx';
import { CATEGORIES } from '../../data/categories.js';
import { DEVELOPER_INFO } from '../../data/developer.js';

export const Footer = () => {
  const { navigateTo, setSelectedCategory, setIsDevModalOpen } = useShop();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      {/* Top Value Badges Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-slate-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-900/50 border border-indigo-700/50 flex items-center justify-center text-indigo-400 shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Free Express Shipping</h4>
              <p className="text-slate-400 text-xs mt-1">Complimentary delivery on all orders over $99 or with promo code</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-900/50 border border-indigo-700/50 flex items-center justify-center text-indigo-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">100% Secure Checkout</h4>
              <p className="text-slate-400 text-xs mt-1">Encrypted SSL protocol with simulated UPI and card payment options</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-900/50 border border-indigo-700/50 flex items-center justify-center text-indigo-400 shrink-0">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">30-Day Hassle Free Returns</h4>
              <p className="text-slate-400 text-xs mt-1">Hassle-free return policy with prepaid shipping labels included</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-900/50 border border-indigo-700/50 flex items-center justify-center text-indigo-400 shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">24/7 Dedicated Support</h4>
              <p className="text-slate-400 text-xs mt-1">Our concierge support team is ready around the clock to assist you</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-md">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold font-['Outfit'] tracking-tight text-white">
                Shop<span className="text-indigo-400">Sphere</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              ShopSphere is a full-featured e-commerce platform built as a high-standard developer portfolio project, showcasing modern UI/UX design, real-time filtering, persistent cart state, and frictionless multi-step checkout.
            </p>

            <div className="pt-2">
              <button
                id="footer-open-dev-modal"
                onClick={() => setIsDevModalOpen(true)}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-indigo-400 hover:text-indigo-300 border border-slate-700 text-xs font-semibold transition-all cursor-pointer"
              >
                <Code2 className="w-4 h-4" />
                <span>View Developer Resume & Architecture</span>
              </button>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-['Outfit'] tracking-wide uppercase text-xs">Categories</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      setSelectedCategory(cat.name);
                      navigateTo('catalog', { category: cat.name });
                    }}
                    className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Customer Care & App Views */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-['Outfit'] tracking-wide uppercase text-xs">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-indigo-400 transition-colors cursor-pointer">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedCategory('all'); navigateTo('catalog'); }} className="hover:text-indigo-400 transition-colors cursor-pointer">
                  All Products
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('wishlist')} className="hover:text-indigo-400 transition-colors cursor-pointer">
                  My Wishlist
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('profile')} className="hover:text-indigo-400 transition-colors cursor-pointer">
                  Order History & Profile
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('cart')} className="hover:text-indigo-400 transition-colors cursor-pointer">
                  Shopping Cart
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Developer Portfolio Info */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-['Outfit'] tracking-wide uppercase text-xs flex items-center gap-1.5">
              <span>Developer Info</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="text-white font-medium">{DEVELOPER_INFO.name}</p>
              <p className="text-slate-400">{DEVELOPER_INFO.role}</p>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>{DEVELOPER_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <a href={`mailto:${DEVELOPER_INFO.email}`} className="hover:text-indigo-300 transition-colors">
                  {DEVELOPER_INFO.email}
                </a>
              </div>

              {/* Developer Links */}
              <div className="pt-2 flex items-center gap-2">
                <a
                  href={DEVELOPER_INFO.links.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-indigo-400 hover:bg-slate-700 hover:text-white transition-colors"
                  title="Portfolio Website"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href={DEVELOPER_INFO.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-indigo-400 hover:bg-slate-700 hover:text-white transition-colors"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={DEVELOPER_INFO.links.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-amber-400 hover:bg-slate-700 hover:text-white transition-colors"
                  title="LeetCode Profile"
                >
                  <Award className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Developer Credit */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800/80">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} ShopSphere. Prototype e-commerce application for portfolio demonstration.
          </p>

          <div className="flex items-center gap-2">
            <span>Designed & Developed by</span>
            <a 
              href={DEVELOPER_INFO.links.portfolio}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-indigo-400 hover:text-indigo-300 hover:underline flex items-center gap-1"
            >
              <span>{DEVELOPER_INFO.name}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
