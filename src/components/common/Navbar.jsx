import React, { useState, useRef, useEffect } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  User, 
  Menu, 
  X, 
  SlidersHorizontal, 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Percent, 
  Check, 
  DollarSign, 
  ExternalLink 
} from 'lucide-react';
import { useShop } from '../../context/ShopContext.jsx';
import { CATEGORIES } from '../../data/categories.js';
import { formatPrice } from '../../utils/formatters.js';

export const Navbar = () => {
  const { 
    currentPage, 
    navigateTo, 
    cartCount, 
    cartSubtotal, 
    wishlistCount, 
    searchQuery, 
    setSearchQuery, 
    selectedCategory, 
    setSelectedCategory, 
    setIsCartOpen, 
    currency, 
    toggleCurrency, 
    setIsDevModalOpen,
    products
  } = useShop();

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const searchContainerRef = useRef(null);

  // Close search suggestions when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Quick live search matching items
  const searchResults = searchQuery.trim() 
    ? products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigateTo('catalog', { search: searchQuery });
      setIsSearchFocused(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Notification Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <span className="inline-flex items-center gap-1 bg-indigo-500/20 text-indigo-300 font-medium px-2 py-0.5 rounded-full border border-indigo-400/30">
              <Percent className="w-3 h-3" /> Special Promo
            </span>
            <span className="text-slate-300 hidden sm:inline">
              Use code <strong className="text-white font-mono bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">BHANUDEV</strong> for 25% Portfolio Discount & Free Shipping!
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300 text-xs">
            {/* Currency Switcher */}
            <button
              id="currency-toggle-btn"
              onClick={toggleCurrency}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer py-0.5 px-2 rounded hover:bg-slate-800"
              title="Toggle between USD ($) and INR (₹)"
            >
              <span className="font-semibold text-indigo-400">{currency === 'USD' ? '$ USD' : '₹ INR'}</span>
              <span className="text-[10px] text-slate-400">({currency === 'USD' ? 'Switch to ₹' : 'Switch to $'})</span>
            </button>

            <span className="text-slate-700 hidden md:inline">|</span>

            {/* Developer Portfolio Link */}
            <button
              id="dev-profile-header-btn"
              onClick={() => setIsDevModalOpen(true)}
              className="hidden md:flex items-center gap-1.5 text-indigo-300 hover:text-white transition-colors cursor-pointer font-medium"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Developer Profile</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              id="nav-logo-btn"
              onClick={() => navigateTo('home')}
              className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-hidden"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold font-['Outfit'] tracking-tight text-slate-900 flex items-center gap-1">
                  Shop<span className="text-indigo-600">Sphere</span>
                </span>
                <span className="block text-[10px] uppercase font-semibold tracking-wider text-slate-500 -mt-1">
                  Shop Smart. Live Better.
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-700">
            <button
              id="nav-link-home"
              onClick={() => navigateTo('home')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'home' ? 'text-indigo-600 bg-indigo-50/80 font-semibold' : 'hover:text-indigo-600 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              id="nav-link-catalog"
              onClick={() => {
                setSelectedCategory('all');
                navigateTo('catalog');
              }}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'catalog' && selectedCategory === 'all' ? 'text-indigo-600 bg-indigo-50/80 font-semibold' : 'hover:text-indigo-600 hover:bg-slate-50'
              }`}
            >
              All Products
            </button>

            {/* Featured Quick Category Shortcuts */}
            {['Electronics', 'Fashion', 'Shoes'].map((catName) => (
              <button
                key={catName}
                id={`nav-link-${catName.toLowerCase()}`}
                onClick={() => {
                  setSelectedCategory(catName);
                  navigateTo('catalog', { category: catName });
                }}
                className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  currentPage === 'catalog' && selectedCategory === catName 
                    ? 'text-indigo-600 bg-indigo-50/80 font-semibold' 
                    : 'hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                {catName}
              </button>
            ))}

            <button
              id="nav-link-about-dev"
              onClick={() => setIsDevModalOpen(true)}
              className="px-3 py-2 rounded-lg transition-colors cursor-pointer text-slate-600 hover:text-indigo-600 hover:bg-slate-50 flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>About Bhanu</span>
            </button>
          </nav>

          {/* Search Bar with Live Preview */}
          <div ref={searchContainerRef} className="relative flex-1 max-w-md hidden md:block">
            <form onSubmit={handleSearchSubmit}>
              <div className="relative flex items-center">
                <input
                  id="global-search-input"
                  type="text"
                  placeholder="Search 32+ products, brands, audio, fashion..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  className="w-full pl-10 pr-10 py-2 text-sm bg-slate-100/90 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800 placeholder-slate-400"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 text-slate-400 hover:text-slate-600 p-0.5 rounded cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </form>

            {/* Instant Search Suggestions Dropdown */}
            {isSearchFocused && searchQuery.trim().length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="p-2 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs text-slate-500 font-medium px-3">
                  <span>Search Suggestions</span>
                  <span>{searchResults.length} {searchResults.length === 1 ? 'match' : 'matches'}</span>
                </div>

                {searchResults.length > 0 ? (
                  <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
                    {searchResults.map((item) => (
                      <div
                        key={item.id}
                        id={`search-suggestion-${item.id}`}
                        onClick={() => {
                          navigateTo('product-details', { productId: item.id });
                          setIsSearchFocused(false);
                        }}
                        className="flex items-center gap-3 p-3 hover:bg-indigo-50/60 cursor-pointer transition-colors group"
                      >
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-12 h-12 object-cover rounded-lg shrink-0 border border-slate-200/60"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-slate-900 truncate group-hover:text-indigo-600 transition-colors">
                            {item.name}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[11px] text-slate-500">{item.brand}</span>
                            <span className="text-slate-300">•</span>
                            <span className="text-xs font-bold text-slate-900">{formatPrice(item.price, currency)}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors group-hover:translate-x-0.5" />
                      </div>
                    ))}
                    <button
                      id="search-view-all-btn"
                      onClick={() => {
                        navigateTo('catalog', { search: searchQuery });
                        setIsSearchFocused(false);
                      }}
                      className="w-full text-center py-2.5 text-xs font-semibold text-indigo-600 bg-indigo-50/50 hover:bg-indigo-100/70 transition-colors cursor-pointer"
                    >
                      View all matching products &rarr;
                    </button>
                  </div>
                ) : (
                  <div className="p-6 text-center text-sm text-slate-500">
                    <p className="font-medium text-slate-700">No products found</p>
                    <p className="text-xs text-slate-400 mt-1">Try searching for &ldquo;headphones&rdquo;, &ldquo;jacket&rdquo;, &ldquo;shoes&rdquo;, or &ldquo;watch&rdquo;</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Icons (Wishlist, Cart, Profile, Mobile Toggle) */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Wishlist Icon */}
            <button
              id="nav-wishlist-btn"
              onClick={() => navigateTo('wishlist')}
              className="relative p-2.5 text-slate-700 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all cursor-pointer group"
              title="Wishlist"
            >
              <Heart className={`w-5 h-5 transition-transform group-hover:scale-110 ${wishlistCount > 0 ? 'text-rose-500 fill-rose-500/20' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4.5 h-4.5 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs animate-in zoom-in">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Drawer Trigger Button */}
            <button
              id="nav-cart-btn"
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 p-2 sm:px-3.5 sm:py-2 text-slate-700 bg-slate-100/90 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-all cursor-pointer group border border-slate-200/70"
              title="View Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-slate-700 group-hover:text-indigo-600 transition-transform group-hover:scale-105" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4.5 h-4.5 bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-bold text-xs text-slate-900 group-hover:text-indigo-600">
                {formatPrice(cartSubtotal, currency)}
              </span>
            </button>

            {/* Profile Menu Trigger */}
            <div className="relative">
              <button
                id="nav-profile-btn"
                onClick={() => navigateTo('profile')}
                className="p-2.5 text-slate-700 hover:text-indigo-600 hover:bg-slate-100 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                title="User Profile & Order History"
              >
                <div className="w-7 h-7 rounded-full bg-slate-200 border border-slate-300 overflow-hidden flex items-center justify-center">
                  <User className="w-4 h-4 text-slate-600" />
                </div>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              id="nav-mobile-menu-btn"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-xl lg:hidden cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar (Visible on mobile) */}
        <div className="pb-3 md:hidden">
          <form onSubmit={handleSearchSubmit}>
            <div className="relative flex items-center">
              <input
                id="mobile-search-input"
                type="text"
                placeholder="Search all 32+ products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-sm bg-slate-100 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 text-slate-800"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 text-slate-400 hover:text-slate-600 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileNavOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-1">Navigation</p>
            <button
              onClick={() => {
                navigateTo('home');
                setIsMobileNavOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-lg"
            >
              🏠 Home
            </button>
            <button
              onClick={() => {
                setSelectedCategory('all');
                navigateTo('catalog');
                setIsMobileNavOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-lg"
            >
              🛍️ All Products ({products.length})
            </button>
            <button
              onClick={() => {
                navigateTo('wishlist');
                setIsMobileNavOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-lg flex items-center justify-between"
            >
              <span>❤️ Wishlist</span>
              {wishlistCount > 0 && <span className="bg-rose-100 text-rose-700 text-xs px-2 py-0.5 rounded-full font-bold">{wishlistCount}</span>}
            </button>
            <button
              onClick={() => {
                navigateTo('profile');
                setIsMobileNavOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-lg"
            >
              👤 Profile & Orders
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-1">Categories</p>
            <div className="grid grid-cols-2 gap-1">
              {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    navigateTo('catalog', { category: cat.name });
                    setIsMobileNavOpen(false);
                  }}
                  className="text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg truncate"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => {
                setIsDevModalOpen(true);
                setIsMobileNavOpen(false);
              }}
              className="flex items-center gap-2 text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-2 rounded-xl"
            >
              <Code2 className="w-4 h-4" />
              <span>About Developer (Bhanu)</span>
            </button>

            <button
              onClick={toggleCurrency}
              className="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-2 rounded-xl"
            >
              Currency: {currency}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
