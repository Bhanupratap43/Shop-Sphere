import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext.jsx';
import { Navbar } from './components/common/Navbar.jsx';
import { Footer } from './components/common/Footer.jsx';
import { ToastContainer } from './components/common/ToastContainer.jsx';
import { DeveloperModal } from './components/common/DeveloperModal.jsx';
import { QuickViewModal } from './components/common/QuickViewModal.jsx';
import { CartDrawer } from './components/cart/CartDrawer.jsx';

import { Home } from './pages/Home.jsx';
import { ProductGrid } from './components/catalog/ProductGrid.jsx';
import { ProductDetails } from './components/product/ProductDetails.jsx';
import { CartPage } from './components/cart/CartPage.jsx';
import { WishlistPage } from './components/wishlist/WishlistPage.jsx';
import { CheckoutPage } from './components/checkout/CheckoutPage.jsx';
import { OrderConfirmation } from './components/checkout/OrderConfirmation.jsx';
import { UserProfile } from './components/profile/UserProfile.jsx';

function MainRouter() {
  const { currentPage } = useShop();

  switch (currentPage) {
    case 'catalog':
      return <ProductGrid />;
    case 'product-details':
      return <ProductDetails />;
    case 'cart':
      return <CartPage />;
    case 'wishlist':
      return <WishlistPage />;
    case 'checkout':
      return <CheckoutPage />;
    case 'order-confirmation':
      return <OrderConfirmation />;
    case 'profile':
      return <UserProfile />;
    case 'home':
    default:
      return <Home />;
  }
}

export default function App() {
  return (
    <ShopProvider>
      <div className="min-h-screen flex flex-col bg-slate-50/50 text-slate-800 font-['Plus_Jakarta_Sans'] selection:bg-indigo-500 selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <MainRouter />
        </main>

        {/* Global Modals, Drawers & Toast Notifications */}
        <CartDrawer />
        <QuickViewModal />
        <DeveloperModal />
        <ToastContainer />

        {/* Footer */}
        <Footer />
      </div>
    </ShopProvider>
  );
}
