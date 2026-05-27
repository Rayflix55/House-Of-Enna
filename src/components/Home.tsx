import React, { useState, useMemo } from 'react';
import { ArrowRight, ArrowLeft, Play, Search, Star, ShieldCheck, Truck, RotateCcw, Sparkles, BookOpen, HelpCircle, Heart, Plus, Minus, Check } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { motion, AnimatePresence } from 'motion/react';

interface HomeProps {
  onProductClick: (product: Product) => void;
  onNavigate: (screen: any) => void;
  showToast: (msg: string) => void;
  onAddToCart?: (product: Product, size: string, color: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onProductClick, onNavigate, showToast, onAddToCart }) => {
  // 1. Explore categories state
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  // Custom counts for pills with aesthetic accuracy
  const categoryCounts: Record<string, number> = {
    'All': PRODUCTS.length,
    'Dresses': PRODUCTS.filter(p => p.category === 'Dresses').length,
    'Two-Piece Sets': PRODUCTS.filter(p => p.category === 'Two-Piece Sets').length,
    'Luxury Lace': PRODUCTS.filter(p => p.category === 'Luxury Lace').length,
    'Senator & Native': PRODUCTS.filter(p => p.category === 'Senator & Native').length,
  };

  // Filtered products based on active category
  const filteredCategoryProducts = useMemo(() => {
    if (activeCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  // Index of product shown in the right bento spotlight
  const [bentoSpotlightIndex, setBentoSpotlightIndex] = useState(0);
  const activeSpotlightProduct = useMemo(() => {
    const list = filteredCategoryProducts;
    if (list.length === 0) return PRODUCTS[0];
    const index = Math.abs(bentoSpotlightIndex) % list.length;
    return list[index] || PRODUCTS[0];
  }, [filteredCategoryProducts, bentoSpotlightIndex]);

  // 2. Hot & Trending search state
  const [searchQuery, setSearchQuery] = useState('');
  const trendingFilteredProducts = useMemo(() => {
    let list = PRODUCTS;
    if (searchQuery.trim() !== '') {
      list = list.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return list;
  }, [searchQuery]);

  // 3. Highlight Item of the Week
  const highlightItem = PRODUCTS[3]; // 'Ankara Multi-Layer Dress'
  const [highlightColor, setHighlightColor] = useState<string>(highlightItem.colors?.[0] || '#000000');
  const [highlightSize, setHighlightSize] = useState<string>('M');
  const [highlightQty, setHighlightQty] = useState<number>(1);

  const highlightImage = useMemo(() => {
    return highlightItem.colorImages?.[highlightColor] || highlightItem.image;
  }, [highlightColor]);

  const handleBuyHighlightNow = () => {
    if (onAddToCart) {
      onAddToCart(highlightItem, highlightSize, highlightColor);
      showToast(`${highlightItem.name} added to bag! Starting checkout...`);
    } else {
      showToast("Triggered Add to Bag checkout process!");
    }
  };

  const blogHighlights = [
    { title: "Abuja Fashion Diaries: Ankara Styles we Love", date: "May 24", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop" },
    { title: "Luxury Lace Styling & Finishing Guide", date: "May 20", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop" },
  ];

  const faqs = [
    { q: "Do you deliver to Abuja & nationwide?", a: "Yes, we offer delivery within Abuja and nationwide to all Nigerian states. Abuja deliveries are swift!" },
    { q: "How do I send my custom measurements?", a: "After confirming your cart items, you can complete your details and click \"Order via WhatsApp\". You can write your custom fits in the special requests or send them directly in our DM!" },
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 overflow-y-auto pb-24 w-full bg-[#f6efe5] dark:bg-[#032019] text-[#1c2a25] dark:text-[#f3f7f5]"
    >
      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-[#043327] text-white border-b border-emerald-950/40 relative overflow-hidden py-12 md:py-20 min-h-[640px] lg:min-h-[700px] flex flex-col justify-center">
        {/* Backdrops */}
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 bottom-10 w-96 h-96 bg-[#e8cf7a]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full h-full my-auto">
            {/* Left Column Content */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full w-fit border border-white/5 shadow-sm">
                <span className="size-2 rounded-full bg-[#e8cf7a] animate-pulse" />
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.2.5em] uppercase text-slate-100">House Of Enna Bespoke</span>
              </div>
              
              <h1 className="text-white text-6xl sm:text-8xl md:text-[9.5rem] font-serif font-black leading-[0.85] tracking-tight uppercase">
                Discover <br/>
                <span className="text-[#e8cf7a] italic font-serif lowercase md:normal-case tracking-wide leading-none select-none">Your Style</span>
              </h1>
              
              {/* Trust Avatars & Active user metric */}
              <div className="flex items-center gap-4 mt-2">
                <div className="flex -space-x-3.5">
                  <img className="size-9 rounded-full border-2 border-[#043327] object-cover shadow-md" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop" alt="" />
                  <img className="size-9 rounded-full border-2 border-[#043327] object-cover shadow-md" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop" alt="" />
                  <img className="size-9 rounded-full border-2 border-[#043327] object-cover shadow-md" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop" alt="" />
                </div>
                <div className="text-xs text-slate-300">
                  <span className="font-bold text-white text-sm">10K+</span> Active Fashionistas
                </div>
              </div>

              {/* Sub descriptor in Bento style */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 mt-4 max-w-xl shadow-lg relative">
                {/* Floating Orange Arrow Button */}
                <button 
                  onClick={() => onNavigate('EXPLORE')}
                  className="size-12 rounded-full bg-[#e25c30] flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all shrink-0 shadow-lg shadow-orange-600/20"
                >
                  <ArrowRight className="w-5 h-5 stroke-[2.5px]" />
                </button>
                <p className="text-sm font-medium text-slate-200 leading-relaxed">
                  Fashion made for confidence, comfort, and effortless style, custom fit. Abuja and Nationwide Delivery options available.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-2">
                <button 
                  onClick={() => onNavigate('EXPLORE')}
                  className="bg-[#e8cf7a] hover:bg-[#d5b95a] text-[#032019] px-10 py-5 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-widest transition-all duration-300 shadow-xl shadow-amber-500/10 active:scale-95"
                >
                  Shop Collection
                </button>
                <button 
                  onClick={() => showToast("African Textile Catalogue coming soon!")}
                  className="bg-transparent text-white border border-white/20 hover:border-white/50 px-10 py-5 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors duration-300 active:scale-95"
                >
                  Fabrics Catalog
                </button>
              </div>
            </div>

            {/* Right Column - Bento Image collage block with Floating Overlay */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              {/* Play Collection Overlay */}
              <div 
                onClick={() => showToast("Opening House Of Enna Video Teaser series...")}
                className="absolute -top-6 left-6 z-20 cursor-pointer bg-[#f6efe5] dark:bg-[#032019] border border-slate-200 dark:border-[#e8cf7a]/20 p-4 rounded-2xl flex items-center gap-3 shadow-2xl hover:scale-105 active:scale-95 transition-all"
              >
                <div className="size-8 rounded-full bg-[#e8cf7a]/20 text-[#043327] dark:text-[#e8cf7a] flex items-center justify-center">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-[#043327]/60 dark:text-slate-400 font-bold">Watch Teaser</p>
                  <p className="text-xs font-serif font-black text-slate-800 dark:text-white">Play Collection</p>
                </div>
              </div>

               {/* Autumn Coat overlap placeholder styled premium */}
              <div className="absolute -left-12 bottom-20 z-20 hidden md:flex flex-col bg-[#f6efe5]/95 dark:bg-[#032019]/95 backdrop-blur-md border border-slate-200 dark:border-[#e8cf7a]/15 rounded-3xl p-5 shadow-2xl w-48 hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&auto=format&fit=crop" 
                  alt="" 
                  className="w-full h-32 object-cover rounded-2xl mb-3 shadow-md"
                />
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold font-serif">Autumn Coat</span>
                  <span className="text-[10px] text-[#e25c30] font-black font-sans">₦24.5k</span>
                </div>
                <div className="flex gap-1.5 mt-1">
                  <span className="size-2 rounded-full bg-[#e25c30]" />
                  <span className="size-2 rounded-full bg-[#032019]" />
                  <span className="size-2 rounded-full bg-[#e8cf7a]" />
                </div>
                <span className="absolute -top-2 -right-2 bg-[#e25c30] text-white text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-wider">
                  New
                </span>
              </div>

              {/* Main Elegant collage picture */}
              <div className="relative group w-full max-w-[350px] md:max-w-[380px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border-[6px] border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop" 
                  alt="Traditional dress collection" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Bento Label tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-[#032019]/95 text-slate-900 dark:text-white backdrop-blur-md p-4 rounded-3xl flex items-center justify-between shadow-lg">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Featured Outfit</span>
                    <span className="font-serif text-base font-bold text-slate-900 dark:text-white block">Ankara Straight Dress</span>
                  </div>
                  <div className="bg-[#043327]/10 dark:bg-[#e8cf7a]/20 px-3 py-1.5 rounded-2xl text-[10px] font-black text-[#043327] dark:text-[#e8cf7a] font-sans">
                    Best Seller
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPLORE OUR BEST CATEGORIES SECTION ================= */}
      <section className="py-20 px-4 md:px-12 lg:px-16 xl:px-24 w-full max-w-none" aria-labelledby="best-categories">
        {/* Title & Shop Now header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 id="best-categories" className="text-4xl md:text-6xl font-serif font-bold text-[#043327] dark:text-[#e8cf7a] uppercase tracking-tight leading-tight">
              Explore Our Best <br/>
              Categories
            </h2>
          </div>
          <button 
            onClick={() => onNavigate('EXPLORE')}
            className="bg-[#043327] hover:bg-[#021d16] dark:bg-[#e8cf7a] dark:hover:bg-[#d5b95a] text-white dark:text-[#032019] px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-md active:scale-95 flex items-center gap-2 self-start md:self-auto"
          >
            Shop Now
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        {/* Categories Pills Filter Menu */}
        <div className="flex gap-2 overflow-x-auto pb-6 no-scrollbar mb-10">
          {Object.entries(categoryCounts).map(([catName, count]) => (
            <button
              key={catName}
              onClick={() => {
                setActiveCategory(catName);
                setBentoSpotlightIndex(0);
              }}
              className={`px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
                activeCategory === catName
                  ? 'bg-[#e25c30] text-white border-[#e25c30] shadow-md shadow-orange-500/10'
                  : 'bg-white dark:bg-[#032019] border-[#043327]/10 dark:border-[#e8cf7a]/20 text-slate-600 dark:text-slate-300 hover:border-[#043327] dark:hover:border-[#e8cf7a]'
              }`}
            >
              {catName} <span className="opacity-60 text-[10px] ml-1.5 font-sans font-black">{count}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card left: Text Block */}
          <div className="lg:col-span-4 bg-[#f6efe5] dark:bg-[#043327]/10 border border-[#043327]/10 dark:border-emerald-900/30 p-8 rounded-[2.5rem] flex flex-col justify-between min-h-[300px]">
            <span className="text-[#043327] dark:text-[#e8cf7a] font-serif italic text-3xl md:text-4xl leading-snug">
              "Best collections designed to match your lifestyle and personality."
            </span>
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#043327]/40 block">Premium Finish guarantee</span>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Every customized dress or senator outfit is crafted by vetted Abuja design tailors to meet professional boutique styling quality.
              </p>
            </div>
          </div>

          {/* Card center: Large Main category Showcase Image with interactive scale */}
          <div 
            onClick={() => onProductClick(activeSpotlightProduct)}
            className="lg:col-span-5 relative overflow-hidden rounded-[2.5rem] aspect-[4/5] bg-[#eae3d5]/30 border border-[#043327]/15 dark:border-emerald-900/40 group shadow-lg cursor-pointer"
          >
            <img 
              src={activeSpotlightProduct.image} 
              alt={activeSpotlightProduct.name} 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity" />

            {/* Tag */}
            <span className="absolute top-6 left-6 bg-[#e25c30] text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
              Hot
            </span>

            {/* "+" Symbol overlay inside a circle exactly as shown in yellow dress mockup center */}
            <div className="absolute inset-x-0 bottom-40 top-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="size-16 rounded-full bg-white/95 dark:bg-[#032019]/95 flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                <Plus className="w-8 h-8 text-[#043327]" />
              </div>
            </div>

            {/* Card Content Footer */}
            <div className="absolute bottom-6 left-6 right-6 text-white text-left">
              <span className="text-[10px] uppercase font-black tracking-widest text-[#e8cf7a] block mb-1">{activeSpotlightProduct.category}</span>
              <h4 className="text-2xl font-serif font-black leading-tight mb-2">{activeSpotlightProduct.name}</h4>
              <p className="text-xs text-slate-300 font-sans line-clamp-1">{activeSpotlightProduct.description}</p>
            </div>
          </div>          {/* Card right: Small vertical highlights panel with Carousel Carousel togglers */}
          <div className="lg:col-span-3 bg-[#f6efe5] dark:bg-[#043327]/20 border border-[#043327]/15 dark:border-emerald-900/40 rounded-[2.5rem] p-6 flex flex-col justify-between shadow-xl min-h-[400px]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[9px] uppercase tracking-widest font-black text-slate-400">Up Next</span>
                {/* Arrow Controllers */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => setBentoSpotlightIndex(prev => prev - 1)}
                    className="size-8 rounded-full border border-slate-200 dark:border-emerald-900/40 hover:border-[#043327] focus:border-[#043327] transition-colors flex items-center justify-center text-slate-600 dark:text-white"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setBentoSpotlightIndex(prev => prev + 1)}
                    className="size-8 rounded-full border border-slate-200 dark:border-emerald-900/40 hover:border-[#043327] focus:border-[#043327] transition-colors flex items-center justify-center text-slate-600 dark:text-white"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Show Next Highlight Mini Outfit card */}
              <div 
                onClick={() => onProductClick(activeSpotlightProduct)}
                className="group cursor-pointer text-left"
              >
                <div className="aspect-[3/3.2] bg-[#eae3d5]/65 rounded-[1.8rem] overflow-hidden mb-4 border border-[#043327]/10 dark:border-emerald-900/40 relative shadow-sm">
                  <img 
                    src={activeSpotlightProduct.colorImages?.[activeSpotlightProduct.colors?.[1] as string] || activeSpotlightProduct.image}
                    alt="" 
                    className="w-full h-full object-cover transition-transform duration-505 group-hover:scale-105"
                  />
                </div>
                <h5 className="font-serif text-lg font-bold text-slate-800 dark:text-white group-hover:text-[#043327] dark:group-hover:text-[#e8cf7a] transition-colors">
                  {activeSpotlightProduct.name}
                </h5>
                <p className="text-xs text-slate-400 uppercase mt-0.5">{activeSpotlightProduct.category}</p>
                <p className="text-sm font-sans font-black text-[#043327] dark:text-[#e8cf7a] mt-1.5">
                  ₦{activeSpotlightProduct.price.toLocaleString()}
                </p>
              </div>
            </div>

            <button 
              onClick={() => onProductClick(activeSpotlightProduct)}
              className="w-full py-4 text-xs font-black uppercase tracking-widest text-[#043327] dark:text-[#e8cf7a] border-t border-slate-150 dark:border-slate-800/80 hover:opacity-80 transition-opacity mt-4 flex items-center justify-between"
            >
              Configure Fitted Specs
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= SIGNATURE HOT & TRENDING COLLECTION (DARK GREEN CANVAS) ================= */}
      <section className="bg-[#043327] text-white py-20 px-4 my-8 relative overflow-hidden" aria-labelledby="trending-canvas">
        {/* Abstract design elements */}
        <div className="absolute right-10 bottom-0 w-80 h-80 bg-emerald-950/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-10 top-1/4 w-96 h-96 bg-[#e8cf7a]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full px-0 md:px-12 lg:px-16 xl:px-24 max-w-none">
          {/* Header row in bento mockup */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="text-left space-y-4 lg:max-w-xl">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#e8cf7a]">Exclusive Stitching catalogue</span>
              <h2 id="trending-canvas" className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-tight leading-tight">
                Signature Hot & <br/>
                Trending Collection
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Step into a world of fashion-forward designs that define elegance, tailored specifically to match your perfect sizing.
              </p>
            </div>

            {/* Interactive Search Bar & page indicator */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filtered category search..."
                  className="bg-emerald-950/60 font-sans border border-emerald-900 rounded-2xl py-4 pl-12 pr-6 text-sm w-full sm:w-64 placeholder-slate-400 outline-none focus:ring-1 focus:ring-[#e8cf7a] transition-all"
                />
              </div>
              <div className="flex items-center gap-4 self-center sm:self-auto font-mono text-xs text-[#e8cf7a]">
                <span className="font-bold">01</span>
                <span className="text-[#e8cf7a]/40">/</span>
                <span className="opacity-60 text-white">03</span>
              </div>
            </div>
          </div>

          {/* Dynamic White-background cards list based on filtering */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trendingFilteredProducts.slice(0, 8).map((product) => (
              <div 
                key={product.id} 
                onClick={() => onProductClick(product)}
                className="group bg-[#f6efe5] dark:bg-emerald-950/20 text-[#1c2a25] dark:text-white rounded-[2.2rem] p-4 border border-emerald-950 hover:border-[#e8cf7a]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-2xl"
              >
                <div>
                  {/* Aspect image placeholder inside card */}
                  <div className="relative aspect-[3/3.8] rounded-[1.8rem] overflow-hidden mb-4 bg-[#eae3d5]/50 dark:bg-white/5 border border-slate-200/50">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 dark:bg-[#032019]/90 text-[8px] font-black text-[#043327] dark:text-white px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                      Hot
                    </span>
                  </div>

                  <div className="text-left px-1">
                    <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-500 transition-colors line-clamp-1">{product.name}</h4>
                    <p className="text-slate-400 text-[10px] uppercase font-sans mt-0.5">{product.category}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4 px-1 pt-2 border-t border-slate-100 dark:border-emerald-900/40">
                  <span className="font-sans font-black text-sm text-[#043327] dark:text-[#e8cf7a]">₦{product.price.toLocaleString()}</span>
                  <div className="size-8 rounded-full bg-[#043327] text-white dark:bg-[#e8cf7a] dark:text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">
                    <Plus className="w-4 h-4 stroke-[2.5px]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => onNavigate('EXPLORE')}
              className="bg-transparent text-white hover:bg-white/5 border border-white/20 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all"
            >
              Explore More Collection
            </button>
          </div>
        </div>
      </section>

      {/* ================= DYNAMIC HIGHLIGHT ITEM OF THE WEEK SECTION ================= */}
      <section className="px-4 md:px-12 lg:px-16 xl:px-24 py-16 w-full max-w-none" aria-labelledby="highlight-heading">
        <div className="relative overflow-hidden rounded-[3.5rem] bg-[#f9f5e8] dark:bg-[#032019]/80 p-8 md:p-16 min-h-[520px] border border-amber-200/55 dark:border-emerald-900/50 shadow-xl text-left">
          {/* Decorative play video rotate trigger circle as requested in the highlight week box */}
          <div className="absolute top-10 left-10 md:left-auto md:right-16 z-20 flex flex-col items-center gap-1.5 hover:scale-105 active:scale-95 transition-all cursor-pointer" onClick={() => showToast("Loading behind the scenes tailoring clip...")}>
            <div className="size-16 rounded-full bg-[#e25c30] shadow-xl shadow-orange-600/20 text-white flex items-center justify-center hover:rotate-90 transition-transform duration-500">
              <Play className="w-6 h-6 fill-current ml-1" />
            </div>
            <span className="text-[9px] uppercase tracking-widest font-black text-slate-500">Play Collection</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Flagship Picture block */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border-4 border-white dark:border-emerald-900/50 shadow-2xl bg-[#ffd13b] p-3">
                <motion.img 
                  key={highlightItem.image}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  src={highlightItem.image} 
                  alt={highlightItem.name} 
                  className="w-full h-full object-cover rounded-[2rem]" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Right flag ship specifications interface */}
            <div className="lg:col-span-7 flex flex-col gap-5 justify-center">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#e25c30] block mb-1">Highlight Item of the Week</span>
              <h3 id="highlight-heading" className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-tight text-[#043327] dark:text-[#e8cf7a]">
                {highlightItem.name}
              </h3>
              
              <div className="flex items-center gap-4">
                <span className="text-3xl font-black font-sans text-slate-900 dark:text-white">₦{highlightItem.price.toLocaleString()}</span>
                <span className="text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-400 font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Bespoke Perfect-Stitch
                </span>
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
                {highlightItem.description}
              </p>

              {/* Color Dot Options with image swapping logic */}
              <div className="mt-2">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-3">Preferred fabric color</span>
                <div className="flex gap-4">
                 {highlightItem.colors?.map(colorHex => (
                    <button 
                      key={colorHex}
                      style={{ backgroundColor: colorHex }}
                      onClick={() => {
                        setHighlightColor(colorHex);
                        showToast(`Swapped fabric swatch to ${colorHex}`);
                      }}
                      className={`size-10 rounded-full border border-slate-300 transition-all ${highlightColor === colorHex ? 'ring-2 ring-orange-500 scale-110' : 'hover:scale-105'}`}
                      title={colorHex}
                    />
                  ))}
                </div>
              </div>

              {/* Sizing picks */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block">Required size specs</span>
                <div className="flex gap-2 flex-wrap">
                {highlightItem.sizes?.map(sizeStr => (
                     <button
                      key={sizeStr}
                      onClick={() => setHighlightSize(sizeStr)}
                      className={`px-5 py-3 rounded-xl text-xs font-bold transition-all border ${
                        highlightSize === sizeStr
                          ? 'border-2 border-[#043327] dark:border-[#e8cf7a] bg-[#043327]/5 dark:bg-[#e8cf7a]/10 text-[#043327] dark:text-[#e8cf7a] font-black'
                          : 'border-[#043327]/10 dark:border-[#e8cf7a]/15 text-slate-600 dark:text-slate-400 hover:border-slate-400'
                      }`}
                    >
                      {sizeStr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity select + Add buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mt-3">
                <div className="bg-[#f6efe5] dark:bg-[#032019] border border-[#043327]/20 dark:border-[#e8cf7a]/20 rounded-2xl flex items-center p-1 justify-between w-fit">
                  <button 
                    onClick={() => setHighlightQty(prev => Math.max(1, prev - 1))}
                    className="p-3 text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 font-bold text-sm tracking-widest">{highlightQty}</span>
                  <button 
                    onClick={() => setHighlightQty(prev => prev + 1)}
                    className="p-3 text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button 
                  onClick={handleBuyHighlightNow}
                  className="flex-1 bg-[#e25c30] hover:bg-orange-500 text-white font-black py-4 px-8 rounded-2xl transition-all shadow-xl shadow-orange-600/20 uppercase tracking-widest text-xs flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  Buy It Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BLOG & FAQS SECTIONS ================= */}
      <section className="py-20 px-4 md:px-12 lg:px-16 xl:px-24 w-full max-w-none border-t border-slate-250 dark:border-emerald-950/40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Fashion Journal */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary dark:text-[#d3a13b]" />
                <h3 className="text-2xl font-serif font-black uppercase tracking-tight">Fashion Journal</h3>
              </div>
              <button onClick={() => onNavigate('BLOG')} className="text-xs font-black uppercase tracking-widest border-b-2 border-primary pb-1">Read All</button>
            </div>
            
            <div className="space-y-8">
              {blogHighlights.map((post, i) => (
                <div key={i} className="flex gap-6 items-center group cursor-pointer" onClick={() => onNavigate('BLOG')}>
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-slate-100 dark:border-slate-800">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] text-[#e25c30] font-bold block mb-1">{post.date}</span>
                    <h4 className="font-serif font-black text-lg text-slate-800 dark:text-white group-hover:text-primary transition-colors line-clamp-1">{post.title}</h4>
                    <p className="text-xs text-slate-400 mt-1">Ethical tailoring style recommendations...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Q&A / FAQS */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-[#043327] dark:text-[#e8cf7a]" />
                <h3 className="text-2xl font-serif font-black uppercase tracking-tight">Tailoring Q&A</h3>
              </div>
              <button onClick={() => onNavigate('BLOG')} className="text-xs font-black uppercase tracking-widest border-b-2 border-[#043327] pb-1">More FAQs</button>
            </div>

            <div className="space-y-4 text-left">
              {faqs.map((faq, i) => (
                <div key={i} className="p-5 bg-white dark:bg-[#032019]/30 border border-[#043327]/10 dark:border-[#e8cf7a]/15 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-sm text-[#043327] dark:text-[#e8cf7a] mb-2 flex gap-2">
                    <span>Q:</span> {faq.q}
                  </h4>
                  <p className="text-[#1c2a25]/60 dark:text-[#f3f7f5]/60 text-xs leading-relaxed pl-5">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};
