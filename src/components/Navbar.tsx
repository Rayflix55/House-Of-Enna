import React, { useState } from 'react';
import { Menu, Search, ShoppingBag, ArrowLeft, X, Sun, Moon, TrendingUp } from 'lucide-react';
import { Screen, Product } from '../types';
import { PRODUCTS, CATEGORIES } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentScreen: Screen;
  onBack: () => void;
  onOpenBag: () => void;
  onNavigate: (screen: Screen) => void;
  onSearch: (query: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  cartCount: number;
  title?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentScreen, 
  onBack, 
  onOpenBag, 
  onNavigate, 
  onSearch,
  isDarkMode,
  onToggleDarkMode,
  cartCount, 
  title 
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const isHome = currentScreen === 'HOME';

  const suggestions = searchQuery.length > 1 
    ? PRODUCTS.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)
    : [];

  const categorySuggestions = searchQuery.length > 1
    ? CATEGORIES.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 3)
    : [];

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const menuItems: { label: string; screen: Screen }[] = [
    { label: 'Home', screen: 'HOME' },
    { label: 'Explore', screen: 'EXPLORE' },
    { label: 'Wishlist', screen: 'WISHLIST' },
    { label: 'Fashion Blog & Q&A', screen: 'BLOG' },
    { label: 'Shopping Bag', screen: 'BAG' },
    { label: 'My Profile', screen: 'PROFILE' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center bg-[#f6efe5]/90 dark:bg-[#032019]/90 backdrop-blur-md px-6 py-4 justify-between border-b border-black/5 dark:border-emerald-950/20 w-full max-w-7xl mx-auto">
        {/* Left Side: Brand Logo */}
        <div className="flex items-center gap-4">
          {!isHome ? (
            <button 
              onClick={onBack}
              className="p-2 hover:bg-[#eae3d5]/40 dark:hover:bg-[#032019] rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-[#043327] dark:text-white" />
            </button>
          ) : (
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-[#eae3d5]/45 dark:hover:bg-[#032019] rounded-full transition-colors animate-pulse"
            >
              <Menu className="w-6 h-6 text-[#043327] dark:text-white" />
            </button>
          )}
          
          <h2 
            className="text-2xl font-serif font-black tracking-[0.1em] text-[#043327] dark:text-[#e8cf7a] hover:opacity-85 cursor-pointer transition-opacity" 
            onClick={() => onNavigate('HOME')}
          >
            HOUSE OF ENNA
          </h2>
        </div>

        {/* Center navigation links capsule (exactly matching mockup photo: Home, About, Categories, Sale) */}
        <div className="hidden lg:flex items-center gap-1 bg-[#eae3d5] dark:bg-emerald-950/40 border border-emerald-900/10 dark:border-[#e8cf7a]/15 p-1 rounded-full text-xs font-bold font-sans">
          <button 
            onClick={() => onNavigate('HOME')}
            className={`px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5 ${
              currentScreen === 'HOME' 
                ? 'bg-[#043327] text-white' 
                : 'text-slate-600 dark:text-slate-300 hover:text-[#043327]'
            }`}
          >
            {currentScreen === 'HOME' && <span className="size-1 bg-[#e8cf7a] rounded-full" />}
            Home
          </button>
          <button 
            onClick={() => onNavigate('BLOG')}
            className={`px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5 ${
              currentScreen === 'BLOG' 
                ? 'bg-[#043327] text-white' 
                : 'text-slate-600 dark:text-slate-300 hover:text-[#043327]'
            }`}
          >
            {currentScreen === 'BLOG' && <span className="size-1 bg-[#e8cf7a] rounded-full" />}
            About
          </button>
          <button 
            onClick={() => onNavigate('EXPLORE')}
            className={`px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5 ${
              currentScreen === 'EXPLORE' 
                ? 'bg-[#043327] text-white' 
                : 'text-slate-600 dark:text-slate-300 hover:text-[#043327]'
            }`}
          >
            {currentScreen === 'EXPLORE' && <span className="size-1 bg-[#e8cf7a] rounded-full" />}
            Categories
          </button>
          <button 
            onClick={() => {
              onNavigate('EXPLORE');
              setTimeout(() => {
                const isSelected = PRODUCTS.filter(p => p.price < 20000);
                if (isSelected.length > 0) {
                  // highlight budget or sale item
                }
              }, 100);
            }}
            className="px-5 py-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-[#043327] transition-all"
          >
            Sale
          </button>
        </div>

        {/* Right Side Icons & Orange Login button */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onToggleDarkMode}
            className="p-2 hover:bg-[#eae3d5]/40 dark:hover:bg-[#032019] rounded-full transition-colors text-slate-600 dark:text-slate-300"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#043327]" />}
          </button>
          
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="p-2 hover:bg-[#eae3d5]/40 dark:hover:bg-[#032019] rounded-full transition-colors text-slate-600 dark:text-slate-300"
          >
            <Search className="w-4 h-4" />
          </button>

          <button 
            onClick={onOpenBag}
            className="p-2 hover:bg-[#eae3d5]/40 dark:hover:bg-[#032019] rounded-full transition-colors relative text-slate-600 dark:text-slate-300"
          >
            <ShoppingBag className="w-4 h-4" />
            <AnimatePresence mode="popLayout">
              {cartCount > 0 && (
                <motion.span 
                  key={cartCount}
                  initial={{ scale: 0.6, y: -2 }}
                  animate={{ scale: [0.6, 1.4, 0.9, 1.15, 1], y: 0 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute top-0 right-0 bg-[#e25c30] text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full font-sans font-black"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Premium Orange Styled Login Button exactly as depicted in the mockup */}
          <button 
            onClick={() => {
              onNavigate('PROFILE');
              // trigger welcome
            }}
            className="bg-[#e25c30] hover:bg-orange-500 hover:scale-[1.03] text-white text-xs font-black font-sans px-5 py-2.5 rounded-xl transition-all shadow-md shadow-orange-500/10 active:scale-95"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 z-[120] w-[80%] max-w-sm bg-background-light dark:bg-background-dark p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-2xl font-black tracking-tighter uppercase">Menu</h2>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-[#eae3d5]/40 dark:hover:bg-[#032019] rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {menuItems.map((item) => (
                  <button 
                    key={item.label}
                    onClick={() => {
                      onNavigate(item.screen);
                      setIsMenuOpen(false);
                    }}
                    className={`text-left text-2xl font-black uppercase tracking-widest transition-colors ${currentScreen === item.screen ? 'text-primary' : 'hover:text-primary'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="absolute bottom-12 left-8 right-8">
                <div className="pt-8 border-t border-[#043327]/10 dark:border-[#e8cf7a]/10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Support</p>
                  <div className="flex flex-col gap-3">
                    <button className="text-left text-sm font-bold hover:text-primary transition-colors">Shipping Info</button>
                    <button className="text-left text-sm font-bold hover:text-primary transition-colors">Returns & Exchanges</button>
                    <button className="text-left text-sm font-bold hover:text-primary transition-colors">Contact Us</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-background-light dark:bg-background-dark p-6"
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black uppercase tracking-tighter">Search</h2>
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-[#eae3d5]/40 dark:hover:bg-[#032019] rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  autoFocus
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, categories..."
                  className="w-full bg-[#eae3d5]/30 dark:bg-[#032019]/50 border border-[#043327]/10 dark:border-[#e8cf7a]/15 rounded-2xl py-5 pl-12 pr-6 text-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                />
              </form>

              <div className="mt-8">
                {searchQuery.length > 1 && (suggestions.length > 0 || categorySuggestions.length > 0) ? (
                  <div className="space-y-6">
                    {categorySuggestions.length > 0 && (
                      <div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Categories</h3>
                        <div className="flex flex-wrap gap-2">
                          {categorySuggestions.map(cat => (
                            <button 
                              key={cat.name}
                              onClick={() => {
                                setSearchQuery(cat.name);
                                handleSearchSubmit();
                              }}
                              className="px-4 py-2 bg-[#eae3d5]/30 dark:bg-[#043327] rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-colors"
                            >
                              {cat.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    {suggestions.length > 0 && (
                      <div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Products</h3>
                        <div className="space-y-2">
                          {suggestions.map(p => (
                            <button 
                              key={p.id}
                              onClick={() => {
                                onNavigate('PRODUCT_DETAIL');
                                // Note: We'll need a way to set the selected product in App.tsx
                                // For now, let's just search for it
                                onSearch(p.name);
                                setIsSearchOpen(false);
                                setSearchQuery('');
                              }}
                              className="w-full flex items-center gap-4 p-3 hover:bg-[#eae3d5]/35 dark:hover:bg-[#043327] rounded-xl transition-colors text-left"
                            >
                              <img src={p.image} alt="" className="w-12 h-12 object-cover rounded-lg" referrerPolicy="no-referrer" />
                              <div>
                                <p className="font-bold text-sm">{p.name}</p>
                                <p className="text-xs text-slate-500">₦{p.price.toLocaleString()}</p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" /> Popular Searches
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {['Oversized Hoodie', 'Minimalist Jacket', 'Cotton T-Shirt', 'Accessories'].map(tag => (
                        <button 
                          key={tag} 
                          onClick={() => {
                            setSearchQuery(tag);
                            onSearch(tag);
                            setIsSearchOpen(false);
                            setSearchQuery('');
                          }}
                          className="px-5 py-2 rounded-full bg-[#eae3d5]/40 dark:bg-[#032019] border border-[#043327]/10 dark:border-[#e8cf7a]/15 text-sm font-bold hover:bg-primary hover:text-white hover:border-primary transition-all"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
