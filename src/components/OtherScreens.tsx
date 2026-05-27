import React from 'react';
import { Compass, Heart, User, Settings, LogOut, ChevronRight, Package, CreditCard, MapPin, Search } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ScreenProps {
  onProductClick: (product: Product) => void;
  showToast: (msg: string) => void;
}

export const Explore: React.FC<ScreenProps> = ({ onProductClick, showToast }) => {
  const [activeCategory, setActiveCategory] = React.useState<string>('All');
  const [localSearch, setLocalSearch] = React.useState<string>('');

  const categories = ['All', 'Dresses', 'Two-Piece Sets', 'Luxury Lace', 'Senator & Native'];

  const filteredProducts = React.useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(localSearch.toLowerCase()) ||
        product.category.toLowerCase().includes(localSearch.toLowerCase()) ||
        (product.description?.toLowerCase() || '').includes(localSearch.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, localSearch]);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 overflow-y-auto pb-24 w-full max-w-none px-4 md:px-12 lg:px-16 xl:px-24 py-8"
    >
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="flex items-center gap-3">
          <Compass className="w-8 h-8 text-[#043327] dark:text-[#e8cf7a]" />
          <h1 className="text-3xl md:text-4xl font-serif font-black tracking-tight uppercase">Explore Collection</h1>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input 
            type="text" 
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            placeholder="Search female catalog..."
            className="bg-white dark:bg-emerald-950/20 font-sans border border-slate-200 dark:border-emerald-900 rounded-2xl py-3.5 pl-12 pr-6 text-sm w-full placeholder-slate-400 outline-none focus:ring-1 focus:ring-[#043327] dark:focus:ring-[#e8cf7a] transition-all text-slate-800 dark:text-white"
          />
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex gap-2 overflow-x-auto pb-6 no-scrollbar mb-10">
        {categories.map((catName) => (
          <button
            key={catName}
            onClick={() => setActiveCategory(catName)}
            className={`px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
              activeCategory === catName
                ? 'bg-[#e25c30] text-white border-[#e25c30] shadow-md shadow-orange-500/10'
                : 'bg-[#f6efe5] dark:bg-[#032019] border-[#043327]/10 dark:border-[#e8cf7a]/20 text-slate-600 dark:text-slate-300 hover:border-[#043327] dark:hover:border-[#e8cf7a]'
            }`}
          >
            {catName}
          </button>
        ))}
      </div>

      {/* Grid List */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={() => onProductClick(product)} 
              showToast={showToast}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-[#f6efe5]/40 dark:bg-[#032019]/20 border border-[#043327]/10 rounded-[2.5rem] p-8 md:p-12">
          <Search className="w-12 h-12 mx-auto text-slate-300 mb-4" />
          <h3 className="text-xl font-serif font-bold text-[#043327] dark:text-[#e8cf7a] mb-2 uppercase">No styles found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">We couldn't find any premium women's pieces matching "{localSearch}" in category "{activeCategory}". Try general terms.</p>
        </div>
      )}
    </motion.main>
  );
};

export const Wishlist: React.FC<ScreenProps> = ({ onProductClick, showToast }) => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 overflow-y-auto pb-24 w-full max-w-none px-4 md:px-12 lg:px-16 xl:px-24 py-8"
    >
      <div className="flex items-center gap-3 mb-8">
        <Heart className="w-8 h-8 text-primary" />
        <h1 className="text-3xl font-black tracking-tighter uppercase">Wishlist</h1>
      </div>

      {PRODUCTS.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PRODUCTS.slice(0, 3).map(product => (
            <ProductCard key={product.id} product={product} onClick={() => onProductClick(product)} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <Heart className="w-16 h-16 mx-auto text-slate-200 mb-4" />
          <p className="text-slate-500 font-medium">Your wishlist is empty</p>
        </div>
      )}
    </motion.main>
  );
};

interface ProfileProps {
  showToast: (msg: string) => void;
}

export const Profile: React.FC<ProfileProps> = ({ showToast }) => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 overflow-y-auto pb-24 w-full max-w-3xl mx-auto px-4 py-8"
    >
      <div className="flex items-center gap-6 mb-12">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary/20">
          <User className="w-12 h-12 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-black tracking-tighter uppercase">Alex Johnson</h1>
          <p className="text-slate-500 font-medium">alex.j@example.com</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-[#f6efe5] dark:bg-[#032019]/60 rounded-2xl border border-[#043327]/15 dark:border-[#e8cf7a]/15 overflow-hidden">
          <button 
            onClick={() => showToast("Order history feature coming soon!")}
            className="w-full flex items-center justify-between p-5 hover:bg-[#eae3d5]/30 dark:hover:bg-[#043327] transition-colors"
          >
            <div className="flex items-center gap-4">
              <Package className="w-5 h-5 text-slate-400" />
              <span className="font-bold">My Orders</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </button>
          <button 
            onClick={() => showToast("Address management feature coming soon!")}
            className="w-full flex items-center justify-between p-5 border-t border-[#043327]/10 dark:border-[#e8cf7a]/15 hover:bg-[#eae3d5]/30 dark:hover:bg-[#043327] transition-colors"
          >
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-slate-400" />
              <span className="font-bold">Shipping Addresses</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </button>
          <button 
            onClick={() => showToast("Payment methods feature coming soon!")}
            className="w-full flex items-center justify-between p-5 border-t border-[#043327]/10 dark:border-[#e8cf7a]/15 hover:bg-[#eae3d5]/30 dark:hover:bg-[#043327] transition-colors"
          >
            <div className="flex items-center gap-4">
              <CreditCard className="w-5 h-5 text-slate-400" />
              <span className="font-bold">Payment Methods</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </button>
        </div>

        <div className="bg-[#f6efe5] dark:bg-[#032019]/65 rounded-2xl border border-[#043327]/15 dark:border-[#e8cf7a]/15 overflow-hidden">
          <button 
            onClick={() => showToast("Settings feature coming soon!")}
            className="w-full flex items-center justify-between p-5 hover:bg-[#eae3d5]/30 dark:hover:bg-[#043327] transition-colors"
          >
            <div className="flex items-center gap-4">
              <Settings className="w-5 h-5 text-slate-400" />
              <span className="font-bold">Settings</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#043327]" />
          </button>
          <button 
            onClick={() => showToast("Logged out successfully!")}
            className="w-full flex items-center justify-between p-5 border-t border-[#043327]/10 dark:border-[#e8cf7a]/15 hover:bg-[#eae3d5]/30 dark:hover:bg-[#043327] transition-colors text-red-500"
          >
            <div className="flex items-center gap-4">
              <LogOut className="w-5 h-5" />
              <span className="font-bold">Log Out</span>
            </div>
          </button>
        </div>
      </div>
    </motion.main>
  );
};

interface BlogProps {
  showToast: (msg: string) => void;
}

export const Blog: React.FC<BlogProps> = ({ showToast }) => {
  const blogPosts = [
    {
      id: 1,
      title: "The Rise of Minimalist Streetwear",
      excerpt: "How clean lines and neutral tones are dominating the urban fashion landscape in 2025.",
      date: "Oct 24, 2025",
      image: "https://picsum.photos/seed/blog1/800/400"
    },
    {
      id: 2,
      title: "Sustainable Fabrics: What to Look For",
      excerpt: "A comprehensive guide to eco-friendly materials that don't compromise on style or durability.",
      date: "Oct 20, 2025",
      image: "https://picsum.photos/seed/blog2/800/400"
    },
    {
      id: 3,
      title: "Capsule Wardrobe Essentials",
      excerpt: "10 pieces every modern man and woman needs to build an effortless daily rotation.",
      date: "Oct 15, 2025",
      image: "https://picsum.photos/seed/blog3/800/400"
    }
  ];

  const faqs = [
    {
      q: "How do I find my perfect fit?",
      a: "Our sizing is true to size. We recommend checking our detailed Size Guide on each product page for exact measurements."
    },
    {
      q: "What is your return policy?",
      a: "We offer a 30-day hassle-free return policy for all items in original condition with tags attached."
    },
    {
      q: "Do you ship internationally?",
      a: "Yes, we ship to over 50 countries worldwide. Shipping times and costs vary by location."
    }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 overflow-y-auto pb-24 w-full max-w-5xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black tracking-tighter uppercase mb-4">Fashion Journal</h1>
        <p className="text-slate-500 max-w-xl mx-auto">Insights, trends, and expert advice from the forefront of modern minimalist fashion.</p>
      </div>

      <div className="space-y-12 mb-20">
        {blogPosts.map(post => (
          <article 
            key={post.id} 
            onClick={() => showToast(`Opening "${post.title}"...`)}
            className="group cursor-pointer"
          >
            <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-6">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute top-6 left-6 bg-white dark:bg-[#032019] border border-[#043327]/10 dark:border-[#e8cf7a]/15 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                {post.date}
              </div>
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
            <p className="text-slate-500 leading-relaxed mb-4">{post.excerpt}</p>
            <button className="text-sm font-black uppercase tracking-widest border-b-2 border-primary pb-1">Read More</button>
          </article>
        ))}
      </div>

      <div className="bg-[#eae3d5]/45 dark:bg-[#032019]/50 rounded-[3rem] p-8 md:p-16">
        <h2 className="text-3xl font-black uppercase tracking-tight mb-10 text-center text-[#043327] dark:text-[#e8cf7a]">Fashion Q&A</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#f6efe5] dark:bg-emerald-950/20 p-8 rounded-3xl border border-[#043327]/10 dark:border-emerald-900/15">
              <h3 className="text-lg font-black uppercase mb-4 flex gap-3 text-[#043327] dark:text-[#e8cf7a]">
                <span className="text-[#e25c30]">Q:</span> {faq.q}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                <span className="font-bold text-slate-900 dark:text-white mr-2">A:</span> {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

interface SearchResultsProps {
  query: string;
  onProductClick: (product: Product) => void;
  showToast: (msg: string) => void;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ query, onProductClick, showToast }) => {
  const results = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 overflow-y-auto pb-24 w-full max-w-none px-4 md:px-12 lg:px-16 xl:px-24 py-8"
    >
      <div className="mb-10">
        <h1 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Search Results for</h1>
        <h2 className="text-4xl font-black uppercase tracking-tighter">"{query}"</h2>
        <p className="text-sm text-slate-500 mt-2">{results.length} items found</p>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {results.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={() => onProductClick(product)} 
              showToast={showToast}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-32">
          <Search className="w-16 h-16 mx-auto text-slate-200 mb-6" />
          <h3 className="text-2xl font-black uppercase tracking-tight mb-2">No results found</h3>
          <p className="text-slate-500 max-w-xs mx-auto">We couldn't find anything matching your search. Try different keywords or browse our categories.</p>
        </div>
      )}
    </motion.main>
  );
};
