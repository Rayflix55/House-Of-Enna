/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Screen, Product, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { Home } from './components/Home';
import { ProductDetail } from './components/ProductDetail';
import { Bag } from './components/Bag';
import { Checkout } from './components/Checkout';
import { Confirmation } from './components/Confirmation';
import { Explore, Wishlist, Profile, Blog, SearchResults } from './components/OtherScreens';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('HOME');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  const addToCart = (product: Product, size: string, color: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize === size);
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.selectedSize === size) 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, selectedSize: size, selectedColor: color }];
    });
    setCurrentScreen('BAG');
  };

  const removeFromCart = (id: string, size?: string) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.selectedSize === size)));
  };

  const updateQuantity = (id: string, size: string | undefined, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id && item.selectedSize === size) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + (item.price * item.quantity), 0), [cart]);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentScreen('PRODUCT_DETAIL');
    window.scrollTo(0, 0);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentScreen('SEARCH_RESULTS');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    if (currentScreen === 'PRODUCT_DETAIL') setCurrentScreen('HOME');
    else if (currentScreen === 'BAG') setCurrentScreen('HOME');
    else if (currentScreen === 'CHECKOUT') setCurrentScreen('BAG');
    else if (currentScreen === 'CONFIRMATION') setCurrentScreen('HOME');
    else if (currentScreen === 'SEARCH_RESULTS') setCurrentScreen('HOME');
    else setCurrentScreen('HOME');
    window.scrollTo(0, 0);
  };

  const screenTitle = useMemo(() => {
    switch (currentScreen) {
      case 'BAG': return 'Shopping Bag';
      case 'CHECKOUT': return 'Checkout';
      case 'CONFIRMATION': return 'Order Confirmed';
      case 'PRODUCT_DETAIL': return selectedProduct?.name || 'Product Details';
      case 'EXPLORE': return 'Explore';
      case 'WISHLIST': return 'Wishlist';
      case 'PROFILE': return 'My Profile';
      case 'BLOG': return 'Fashion Journal';
      case 'SEARCH_RESULTS': return `Results for "${searchQuery}"`;
      default: return 'MODERN';
    }
  }, [currentScreen, selectedProduct, searchQuery]);

  return (
    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen transition-colors duration-500 bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary selection:text-white`}>
      <Navbar 
        currentScreen={currentScreen} 
        onBack={handleBack} 
        onOpenBag={() => setCurrentScreen('BAG')} 
        onNavigate={(s) => {
          setCurrentScreen(s);
          window.scrollTo(0, 0);
        }}
        onSearch={handleSearch}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        title={screenTitle}
      />
      
      <div className="flex-1 flex flex-col min-h-[calc(100vh-64px)]">
        <AnimatePresence mode="wait">
          {currentScreen === 'HOME' && (
            <Home key="home" onProductClick={navigateToProduct} onNavigate={setCurrentScreen} showToast={showToast} />
          )}

          {currentScreen === 'EXPLORE' && (
            <Explore key="explore" onProductClick={navigateToProduct} showToast={showToast} />
          )}

          {currentScreen === 'WISHLIST' && (
            <Wishlist key="wishlist" onProductClick={navigateToProduct} showToast={showToast} />
          )}

          {currentScreen === 'PROFILE' && (
            <Profile key="profile" showToast={showToast} />
          )}

          {currentScreen === 'BLOG' && (
            <Blog key="blog" showToast={showToast} />
          )}

          {currentScreen === 'SEARCH_RESULTS' && (
            <SearchResults key="search" query={searchQuery} onProductClick={navigateToProduct} showToast={showToast} />
          )}

          {currentScreen === 'PRODUCT_DETAIL' && selectedProduct && (
            <ProductDetail 
              key="detail" 
              product={selectedProduct} 
              onAddToCart={addToCart} 
              onProductClick={navigateToProduct}
            />
          )}

          {currentScreen === 'BAG' && (
            <Bag 
              key="bag"
              cart={cart}
              onRemove={removeFromCart}
              onUpdateQuantity={updateQuantity}
              onCheckout={() => setCurrentScreen('CHECKOUT')}
              onContinueShopping={() => setCurrentScreen('HOME')}
              showToast={showToast}
              subtotal={subtotal}
              tax={tax}
              total={total}
            />
          )}

          {currentScreen === 'CHECKOUT' && (
            <Checkout 
              key="checkout"
              cart={cart}
              subtotal={subtotal}
              tax={tax}
              total={total}
              onPay={() => setCurrentScreen('CONFIRMATION')}
              showToast={showToast}
            />
          )}

          {currentScreen === 'CONFIRMATION' && (
            <Confirmation 
              key="confirmation"
              cart={cart}
              total={total}
              onContinue={() => {
                setCart([]);
                setCurrentScreen('HOME');
              }}
              showToast={showToast}
            />
          )}
        </AnimatePresence>
      </div>

      <BottomNav currentScreen={currentScreen} onNavigate={(s) => {
        setCurrentScreen(s);
        window.scrollTo(0, 0);
      }} />

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-24 left-1/2 z-[200] bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-3 whitespace-nowrap"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
