import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { PRODUCTS, INITIAL_REVIEWS } from '../data/products.js';
import { AVAILABLE_COUPONS } from '../data/coupons.js';
import { getStorageItem, setStorageItem } from '../utils/storage.js';
import { generateOrderId, getEstimatedDeliveryDate } from '../utils/formatters.js';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // Navigation / View state
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Currency state ('INR' | 'USD')
  const [currency, setCurrency] = useState(() => getStorageItem('currency', 'INR'));

  // Search & Filters state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [sortBy, setSortBy] = useState('popularity'); // popularity, price-low, price-high, rating, newest, discount

  // Cart state persisted to localStorage
  const [cart, setCart] = useState(() => getStorageItem('cart', []));
  const [appliedCoupon, setAppliedCoupon] = useState(() => getStorageItem('appliedCoupon', null));

  // Wishlist state persisted to localStorage
  const [wishlist, setWishlist] = useState(() => getStorageItem('wishlist', []));

  // Orders state persisted to localStorage
  const [orders, setOrders] = useState(() => getStorageItem('orders', []));
  const [lastCreatedOrder, setLastCreatedOrder] = useState(null);

  // User Profile state persisted to localStorage
  const [user, setUser] = useState(() => getStorageItem('user', {
    name: "Bhanu Pratap",
    email: "bhanu.pratap.dev@gmail.com",
    phone: "+91 98765 43210",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    addresses: [
      {
        id: "addr-1",
        fullName: "Bhanu Pratap",
        email: "bhanu.pratap.dev@gmail.com",
        phone: "+91 98765 43210",
        street: "Sector 62, Electronic City",
        city: "Noida",
        state: "Uttar Pradesh",
        pinCode: "201301",
        country: "India",
        isDefault: true
      }
    ]
  }));

  // Product Reviews state
  const [reviews, setReviews] = useState(() => getStorageItem('reviews', INITIAL_REVIEWS));

  // Recently Viewed products state
  const [recentlyViewed, setRecentlyViewed] = useState(() => getStorageItem('recentlyViewed', []));

  // Toast notifications queue
  const [toasts, setToasts] = useState([]);

  // Sync state changes to LocalStorage
  useEffect(() => {
    setStorageItem('cart', cart);
  }, [cart]);

  useEffect(() => {
    setStorageItem('wishlist', wishlist);
  }, [wishlist]);

  useEffect(() => {
    setStorageItem('orders', orders);
  }, [orders]);

  useEffect(() => {
    setStorageItem('user', user);
  }, [user]);

  useEffect(() => {
    setStorageItem('reviews', reviews);
  }, [reviews]);

  useEffect(() => {
    setStorageItem('recentlyViewed', recentlyViewed);
  }, [recentlyViewed]);

  useEffect(() => {
    setStorageItem('currency', currency);
  }, [currency]);

  useEffect(() => {
    setStorageItem('appliedCoupon', appliedCoupon);
  }, [appliedCoupon]);

  // Toast helper
  const addToast = (toast) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    const newToast = {
      id,
      type: toast.type || 'info', // 'success' | 'error' | 'warning' | 'info'
      title: toast.title || '',
      message: toast.message || ''
    };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Navigation helper
  const navigateTo = (page, params = {}) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (params.productId) {
      setSelectedProductId(params.productId);
      const prod = PRODUCTS.find((p) => p.id === params.productId);
      if (prod) {
        addRecentlyViewed(prod);
      }
    }
    if (params.category) {
      setSelectedCategory(params.category);
    }
    if (params.search) {
      setSearchQuery(params.search);
    }
    setIsMobileMenuOpen(false);
  };

  // Currency toggle
  const toggleCurrency = () => {
    const next = currency === 'USD' ? 'INR' : 'USD';
    setCurrency(next);
    addToast({
      type: 'info',
      title: `Currency Changed`,
      message: `Displaying prices in ${next === 'USD' ? 'US Dollars ($)' : 'Indian Rupees (₹)'}`
    });
  };

  // Filter and Sort Engine (Pure JavaScript)
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // 1. Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesBrand = item.brand.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesTags = item.tags && item.tags.some((t) => t.toLowerCase().includes(q));

        if (!matchesName && !matchesBrand && !matchesCategory && !matchesDesc && !matchesTags) {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory && selectedCategory !== 'all') {
        if (item.category.toLowerCase() !== selectedCategory.toLowerCase()) {
          return false;
        }
      }

      // 3. Brand Filter
      if (selectedBrands.length > 0) {
        if (!selectedBrands.includes(item.brand)) {
          return false;
        }
      }

      // 4. Price Range Filter
      if (item.price < priceRange[0] || item.price > priceRange[1]) {
        return false;
      }

      // 5. Rating Filter
      if (minRating > 0 && item.rating < minRating) {
        return false;
      }

      // 6. In Stock Filter
      if (inStockOnly && !item.inStock) {
        return false;
      }

      // 7. On Sale Filter
      if (onSaleOnly && item.discount <= 0) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      // Sorting algorithms
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'discount':
          return b.discount - a.discount;
        case 'newest':
          return b.reviews - a.reviews; // or simulated by ID/freshness
        case 'popularity':
        default:
          return (b.rating * b.reviews) - (a.rating * a.reviews);
      }
    });
  }, [searchQuery, selectedCategory, selectedBrands, priceRange, minRating, inStockOnly, onSaleOnly, sortBy]);

  // Reset Filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBrands([]);
    setPriceRange([0, 50000]);
    setMinRating(0);
    setInStockOnly(false);
    setOnSaleOnly(false);
    setSortBy('popularity');
    addToast({
      type: 'info',
      title: 'Filters Reset',
      message: 'Showing all available products'
    });
  };

  // Cart actions
  const addToCart = (product, quantity = 1, selectedColor = null, selectedSize = null) => {
    const color = selectedColor || (product.colors && product.colors.length > 0 ? product.colors[0].name : null);
    const size = selectedSize || (product.sizes && product.sizes.length > 0 ? product.sizes[0] : null);
    const cartItemId = `${product.id}-${color || 'default'}-${size || 'default'}`;

    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        const newQty = updated[existingIndex].quantity + quantity;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: Math.min(newQty, product.stock || 99)
        };
        return updated;
      } else {
        return [
          ...prev,
          {
            cartItemId,
            productId: product.id,
            product,
            color,
            size,
            price: product.price,
            quantity: Math.min(quantity, product.stock || 99)
          }
        ];
      }
    });

    addToast({
      type: 'success',
      title: 'Added to Cart',
      message: `${product.name} (Qty: ${quantity}) has been added.`
    });
  };

  const removeFromCart = (cartItemId) => {
    setCart((prev) => {
      const item = prev.find((i) => i.cartItemId === cartItemId);
      if (item) {
        addToast({
          type: 'info',
          title: 'Removed from Cart',
          message: `${item.product.name} was removed.`
        });
      }
      return prev.filter((i) => i.cartItemId !== cartItemId);
    });
  };

  const updateCartQuantity = (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }

    setCart((prev) =>
      prev.map((item) => {
        if (item.cartItemId === cartItemId) {
          const maxStock = item.product.stock || 99;
          return {
            ...item,
            quantity: Math.min(newQuantity, maxStock)
          };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  // Cart Calculations
  const cartCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const cartSubtotal = useMemo(() => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cart]);

  // Apply Promo Coupon
  const applyCoupon = (couponCode) => {
    if (!couponCode || !couponCode.trim()) {
      addToast({ type: 'warning', title: 'Invalid Code', message: 'Please enter a coupon code.' });
      return false;
    }

    const code = couponCode.trim().toUpperCase();
    const found = AVAILABLE_COUPONS.find((c) => c.code === code);

    if (!found) {
      addToast({
        type: 'error',
        title: 'Coupon Not Found',
        message: 'The promo code entered is invalid or expired.'
      });
      return false;
    }

    if (cartSubtotal < found.minOrderValue) {
      addToast({
        type: 'warning',
        title: 'Minimum Order Not Met',
        message: `This coupon requires a minimum cart value of ₹${found.minOrderValue.toLocaleString('en-IN')}.`
      });
      return false;
    }

    setAppliedCoupon(found);
    addToast({
      type: 'success',
      title: 'Coupon Applied!',
      message: `${found.code} successfully applied: ${found.description}`
    });
    return true;
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    addToast({
      type: 'info',
      title: 'Coupon Removed',
      message: 'Discount has been removed from order calculation.'
    });
  };

  const couponDiscount = useMemo(() => {
    if (!appliedCoupon) return 0;
    if (appliedCoupon.discountPercent) {
      return (cartSubtotal * appliedCoupon.discountPercent) / 100;
    }
    return 0;
  }, [cartSubtotal, appliedCoupon]);

  const shippingCost = useMemo(() => {
    if (cart.length === 0) return 0;
    if (appliedCoupon?.freeShipping) return 0;
    if (cartSubtotal >= 999) return 0; // Free shipping across India over ₹999
    return 99; // Standard shipping ₹99
  }, [cart, cartSubtotal, appliedCoupon]);

  const taxAmount = useMemo(() => {
    const taxableAmount = Math.max(0, cartSubtotal - couponDiscount);
    return Math.round(taxableAmount * 0.18); // 18% GST standard rate
  }, [cartSubtotal, couponDiscount]);

  const cartTotal = useMemo(() => {
    if (cart.length === 0) return 0;
    return Math.max(0, cartSubtotal - couponDiscount + shippingCost + taxAmount);
  }, [cartSubtotal, couponDiscount, shippingCost, taxAmount, cart.length]);

  // Wishlist Actions
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        addToast({
          type: 'info',
          title: 'Removed from Wishlist',
          message: `${product.name} removed from your wishlist.`
        });
        return prev.filter((item) => item.id !== product.id);
      } else {
        addToast({
          type: 'success',
          title: 'Saved to Wishlist',
          message: `${product.name} saved to your wishlist.`
        });
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  const moveWishlistToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
  };

  const moveAllWishlistToCart = () => {
    if (wishlist.length === 0) return;
    wishlist.forEach((prod) => {
      addToCart(prod, 1);
    });
    setWishlist([]);
    addToast({
      type: 'success',
      title: 'Wishlist Moved',
      message: 'All wishlist items have been added to your shopping cart.'
    });
  };

  // Orders Engine
  const placeOrder = (orderData) => {
    const orderId = generateOrderId();
    const orderDate = new Date().toISOString();
    const estDelivery = getEstimatedDeliveryDate(4);

    const newOrder = {
      orderId,
      orderDate,
      estimatedDelivery: estDelivery,
      status: 'Processing',
      items: [...cart],
      customer: {
        name: orderData.fullName,
        email: orderData.email,
        phone: orderData.phone,
        address: orderData.street,
        city: orderData.city,
        state: orderData.state,
        pinCode: orderData.pinCode,
        country: orderData.country || 'India'
      },
      payment: {
        method: orderData.paymentMethod || 'Credit/Debit Card',
        isDemo: true,
        transactionRef: `TXN-${Math.random().toString(36).substring(2, 9).toUpperCase()}`
      },
      pricing: {
        subtotal: cartSubtotal,
        discount: couponDiscount,
        couponCode: appliedCoupon ? appliedCoupon.code : null,
        tax: taxAmount,
        shipping: shippingCost,
        total: cartTotal
      }
    };

    setOrders((prev) => [newOrder, ...prev]);
    setLastCreatedOrder(newOrder);
    clearCart();

    addToast({
      type: 'success',
      title: 'Order Placed Successfully!',
      message: `Order #${orderId} has been confirmed.`
    });

    navigateTo('order-confirmation');
    return newOrder;
  };

  // User Profile Actions
  const updateUserProfile = (updatedData) => {
    setUser((prev) => ({
      ...prev,
      ...updatedData
    }));
    addToast({
      type: 'success',
      title: 'Profile Updated',
      message: 'Your personal information was successfully saved.'
    });
  };

  const addSavedAddress = (address) => {
    const newAddr = {
      ...address,
      id: `addr-${Date.now()}`
    };

    setUser((prev) => {
      const addresses = [...(prev.addresses || [])];
      if (newAddr.isDefault) {
        addresses.forEach((a) => (a.isDefault = false));
      }
      return {
        ...prev,
        addresses: [...addresses, newAddr]
      };
    });

    addToast({
      type: 'success',
      title: 'Address Saved',
      message: 'New shipping address added to your address book.'
    });
  };

  const deleteSavedAddress = (addressId) => {
    setUser((prev) => ({
      ...prev,
      addresses: prev.addresses.filter((a) => a.id !== addressId)
    }));
    addToast({
      type: 'info',
      title: 'Address Removed',
      message: 'Address removed from your address book.'
    });
  };

  const setDefaultAddress = (addressId) => {
    setUser((prev) => ({
      ...prev,
      addresses: prev.addresses.map((a) => ({
        ...a,
        isDefault: a.id === addressId
      }))
    }));
  };

  // Recently Viewed tracker
  const addRecentlyViewed = (product) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((p) => p.id !== product.id);
      return [product, ...filtered].slice(0, 8);
    });
  };

  // Product Reviews
  const addProductReview = (productId, review) => {
    const newRev = {
      id: `rev-${Date.now()}`,
      author: review.author || user.name || 'Verified Shopper',
      rating: Number(review.rating) || 5,
      date: new Date().toISOString().split('T')[0],
      comment: review.comment,
      verified: true
    };

    setReviews((prev) => ({
      ...prev,
      [productId]: [newRev, ...(prev[productId] || [])]
    }));

    addToast({
      type: 'success',
      title: 'Review Submitted',
      message: 'Thank you for your product feedback!'
    });
  };

  const value = {
    // Navigation
    currentPage,
    navigateTo,
    selectedProductId,
    setSelectedProductId,
    quickViewProduct,
    setQuickViewProduct,
    isDevModalOpen,
    setIsDevModalOpen,
    isCartOpen,
    setIsCartOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen,

    // Currency
    currency,
    toggleCurrency,

    // Catalog & Filters
    products: PRODUCTS,
    filteredProducts,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedBrands,
    setSelectedBrands,
    priceRange,
    setPriceRange,
    minRating,
    setMinRating,
    inStockOnly,
    setInStockOnly,
    onSaleOnly,
    setOnSaleOnly,
    sortBy,
    setSortBy,
    resetFilters,

    // Cart
    cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    cartCount,
    cartSubtotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    couponDiscount,
    shippingCost,
    taxAmount,
    cartTotal,

    // Wishlist
    wishlist,
    wishlistCount: wishlist.length,
    toggleWishlist,
    isInWishlist,
    removeFromWishlist,
    moveWishlistToCart,
    moveAllWishlistToCart,

    // Orders
    orders,
    lastCreatedOrder,
    placeOrder,

    // Profile & Addresses
    user,
    updateUserProfile,
    addSavedAddress,
    deleteSavedAddress,
    setDefaultAddress,

    // Recently Viewed & Reviews
    recentlyViewed,
    addRecentlyViewed,
    reviews,
    addProductReview,

    // Toasts
    toasts,
    addToast,
    removeToast
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
