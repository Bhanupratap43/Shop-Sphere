import React, { useState } from 'react';
import { 
  User, 
  Package, 
  MapPin, 
  Heart, 
  Code2, 
  Plus, 
  Trash2, 
  Check, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Calendar,
  Globe,
  Github,
  Award,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { useShop } from '../../context/ShopContext.jsx';
import { DEVELOPER_INFO } from '../../data/developer.js';
import { formatPrice, formatDate } from '../../utils/formatters.js';

export const UserProfile = () => {
  const { 
    orders, 
    savedAddresses, 
    addSavedAddress, 
    deleteSavedAddress, 
    wishlist, 
    navigateTo, 
    currency, 
    setIsDevModalOpen,
    addToast 
  } = useShop();

  const [activeTab, setActiveTab] = useState('orders'); // 'orders' | 'addresses' | 'wishlist' | 'developer'
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({
    title: 'Home',
    name: 'Bhanu Pratap',
    street: '',
    city: 'Noida',
    state: 'Uttar Pradesh',
    zipCode: '201301',
    country: 'India',
    phone: '9876543210',
    isDefault: false
  });

  const handleAddAddressSubmit = (e) => {
    e.preventDefault();
    if (!newAddress.street.trim() || !newAddress.city.trim() || !newAddress.zipCode.trim()) {
      addToast({ type: 'warning', title: 'Incomplete Address', message: 'Please fill in street, city, and zip code.' });
      return;
    }

    addSavedAddress(newAddress);
    setShowAddAddress(false);
    setNewAddress({
      title: 'Home',
      name: 'Bhanu Pratap',
      street: '',
      city: 'Noida',
      state: 'Uttar Pradesh',
      zipCode: '201301',
      country: 'India',
      phone: '9876543210',
      isDefault: false
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Profile Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 mb-8 shadow-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-600 border-2 border-indigo-400/40 flex items-center justify-center text-white text-2xl font-bold font-['Outfit'] shadow-lg shadow-indigo-600/30">
            BP
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold font-['Outfit']">Bhanu Pratap</h1>
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-400/30">
                Active Member
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">bhanu.pratap.dev@gmail.com • Frontend Developer Portfolio</p>
          </div>
        </div>

        <button
          onClick={() => setIsDevModalOpen(true)}
          className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold border border-white/20 backdrop-blur-xs flex items-center gap-2 transition-colors cursor-pointer"
        >
          <Code2 className="w-4 h-4 text-indigo-400" />
          <span>Developer Credentials</span>
        </button>
      </div>

      {/* Tabs Layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left Side Navigation Menu */}
        <aside className="w-full lg:w-64 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs shrink-0 flex lg:flex-col gap-1 overflow-x-auto">
          <button
            onClick={() => setActiveTab('orders')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'orders'
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200/60 shadow-2xs'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Order History ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('addresses')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'addresses'
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200/60 shadow-2xs'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Saved Addresses ({savedAddresses.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('wishlist')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'wishlist'
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200/60 shadow-2xs'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>Saved Wishlist ({wishlist.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('developer')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'developer'
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200/60 shadow-2xs'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Developer Profile</span>
          </button>
        </aside>

        {/* Right Main Content Area */}
        <main className="flex-1 min-w-0 w-full">
          
          {/* TAB 1: ORDER HISTORY */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold font-['Outfit'] text-slate-900">
                Order History & Tracking
              </h2>

              {orders.length > 0 ? (
                <div className="space-y-4">
                  {orders.map((ord) => (
                    <div
                      key={ord.id}
                      className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6 space-y-4"
                    >
                      {/* Order Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 text-xs">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900">Order #{ord.id}</span>
                            <span className="bg-indigo-50 text-indigo-700 font-bold px-2 py-0.5 rounded-full uppercase text-[10px]">
                              {ord.status || 'Confirmed'}
                            </span>
                          </div>
                          <span className="text-slate-400 text-[11px] block mt-0.5">
                            Placed on {formatDate(ord.createdAt)}
                          </span>
                        </div>

                        <div className="text-left sm:text-right">
                          <span className="font-extrabold text-slate-900 text-base font-['Outfit']">
                            {formatPrice(ord.total, currency)}
                          </span>
                          <span className="text-slate-400 text-[11px] block">
                            {ord.items?.length || 0} items • {ord.paymentMethod}
                          </span>
                        </div>
                      </div>

                      {/* Items row */}
                      <div className="flex gap-3 overflow-x-auto pb-2">
                        {ord.items?.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-200/60 shrink-0">
                            <img src={item.product?.image} alt="" className="w-12 h-12 rounded-lg object-cover" />
                            <div className="text-left pr-2">
                              <p className="text-xs font-bold text-slate-900 max-w-[140px] truncate">{item.product?.name}</p>
                              <p className="text-[10px] text-slate-400">Qty: {item.quantity} • {formatPrice(item.price, currency)}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Order Footer */}
                      <div className="flex items-center justify-between pt-2 text-xs">
                        <span className="text-slate-500">
                          Shipped to: <strong>{ord.shippingAddress?.city}, {ord.shippingAddress?.zipCode}</strong>
                        </span>
                        <button
                          onClick={() => navigateTo('order-confirmation', { orderId: ord.id })}
                          className="font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                        >
                          <span>Track & View Receipt</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-3xl border border-slate-200 p-10 text-center space-y-3">
                  <Package className="w-12 h-12 text-slate-300 mx-auto" />
                  <h3 className="font-bold text-slate-800 font-['Outfit']">No Orders Yet</h3>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    When you place orders on ShopSphere, they will appear here with live tracking.
                  </p>
                  <button
                    onClick={() => navigateTo('catalog')}
                    className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold cursor-pointer"
                  >
                    Start Shopping
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: SAVED ADDRESSES */}
          {activeTab === 'addresses' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold font-['Outfit'] text-slate-900">
                  Saved Shipping Addresses
                </h2>
                <button
                  onClick={() => setShowAddAddress(!showAddAddress)}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>{showAddAddress ? 'Cancel' : 'Add New Address'}</span>
                </button>
              </div>

              {/* Add Address Form */}
              {showAddAddress && (
                <form onSubmit={handleAddAddressSubmit} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4 animate-in fade-in">
                  <h3 className="text-sm font-bold text-slate-900 font-['Outfit']">New Address Information</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Address Label</label>
                      <input
                        type="text"
                        value={newAddress.title}
                        onChange={(e) => setNewAddress({ ...newAddress, title: e.target.value })}
                        placeholder="Home / Work / Office"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Recipient Name</label>
                      <input
                        type="text"
                        value={newAddress.name}
                        onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Street Address</label>
                    <input
                      type="text"
                      value={newAddress.street}
                      onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                      placeholder="House No, Tower, Street"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">City</label>
                      <input
                        type="text"
                        value={newAddress.city}
                        onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">State</label>
                      <input
                        type="text"
                        value={newAddress.state}
                        onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Postal Code</label>
                      <input
                        type="text"
                        value={newAddress.zipCode}
                        onChange={(e) => setNewAddress({ ...newAddress, zipCode: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold cursor-pointer"
                  >
                    Save Address
                  </button>
                </form>
              )}

              {/* Address Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {savedAddresses.map((addr) => (
                  <div
                    key={addr.id}
                    className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs space-y-2 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md">
                        {addr.title}
                      </span>
                      {addr.isDefault && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          Default
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-slate-900 text-sm">{addr.name}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{addr.street}</p>
                    <p className="text-xs text-slate-600">{addr.city}, {addr.state} {addr.zipCode}</p>
                    <p className="text-xs text-slate-400">Phone: {addr.phone}</p>

                    <div className="pt-3 flex justify-end">
                      <button
                        onClick={() => deleteSavedAddress(addr.id)}
                        className="text-xs text-rose-500 hover:text-rose-700 p-1 cursor-pointer flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: WISHLIST */}
          {activeTab === 'wishlist' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold font-['Outfit'] text-slate-900">
                  Saved Wishlist ({wishlist.length})
                </h2>
                <button
                  onClick={() => navigateTo('wishlist')}
                  className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
                >
                  View Dedicated Wishlist Page &rarr;
                </button>
              </div>

              {wishlist.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {wishlist.map((item) => (
                    <div key={item.id} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                      <img src={item.image} alt="" className="w-full aspect-square rounded-xl object-cover" />
                      <h4 className="text-xs font-bold text-slate-900 truncate">{item.name}</h4>
                      <p className="text-xs font-bold text-slate-900">{formatPrice(item.price, currency)}</p>
                      <button
                        onClick={() => navigateTo('product-details', { productId: item.id })}
                        className="w-full py-2 bg-indigo-50 text-indigo-700 font-bold text-xs rounded-lg hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer"
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500">Your wishlist is currently empty.</p>
              )}
            </div>
          )}

          {/* TAB 4: DEVELOPER PROFILE */}
          {activeTab === 'developer' && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
              <div>
                <h2 className="text-xl font-bold font-['Outfit'] text-slate-900">
                  About the Developer — {DEVELOPER_INFO.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {DEVELOPER_INFO.summary}
                </p>
              </div>

              {/* Skills badges */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Core Skills & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    ...DEVELOPER_INFO.skills.programming,
                    ...DEVELOPER_INFO.skills.frontend,
                    ...DEVELOPER_INFO.skills.backendAndDatabase
                  ].map((s) => (
                    <span key={s} className="bg-slate-100 border border-slate-200 text-slate-800 text-xs px-3 py-1 rounded-xl font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Links */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                <a
                  href={DEVELOPER_INFO.links.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-xs shadow-xs hover:bg-indigo-700 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit Portfolio</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={DEVELOPER_INFO.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-xs shadow-xs hover:bg-slate-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={DEVELOPER_INFO.links.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 text-white rounded-xl font-bold text-xs shadow-xs hover:bg-amber-600 transition-colors"
                >
                  <Award className="w-4 h-4" />
                  <span>LeetCode Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
