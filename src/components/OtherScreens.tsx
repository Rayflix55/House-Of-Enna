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
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 overflow-y-auto pb-24 w-full max-w-7xl mx-auto px-4 py-8"
    >
      <div className="flex items-center gap-3 mb-8">
        <Compass className="w-8 h-8 text-primary" />
        <h1 className="text-3xl font-black tracking-tighter uppercase">Explore</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div 
          onClick={() => showToast("New Arrivals collection coming soon!")}
          className="relative h-48 rounded-3xl overflow-hidden group cursor-pointer"
        >
          <img src="https://picsum.photos/seed/fashion1/800/600" alt="New Arrivals" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white text-2xl font-black uppercase tracking-widest">New Arrivals</h3>
          </div>
        </div>
        <div 
          onClick={() => showToast("Best Sellers collection coming soon!")}
          className="relative h-48 rounded-3xl overflow-hidden group cursor-pointer"
        >
          <img src="https://picsum.photos/seed/fashion2/800/600" alt="Best Sellers" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white text-2xl font-black uppercase tracking-widest">Best Sellers</h3>
          </div>
        </div>
        <div 
          onClick={() => showToast("Limited Edition collection coming soon!")}
          className="relative h-48 rounded-3xl overflow-hidden group cursor-pointer"
        >
          <img src="https://picsum.photos/seed/fashion3/800/600" alt="Limited Edition" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white text-2xl font-black uppercase tracking-widest">Limited Edition</h3>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-black uppercase tracking-widest mb-6">Recommended For You</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {PRODUCTS.slice(2, 6).map(product => (
          <ProductCard key={product.id} product={product} onClick={() => onProductClick(product)} />
        ))}
      </div>
    </motion.main>
  );
};

export const Wishlist: React.FC<ScreenProps> = ({ onProductClick, showToast }) => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 overflow-y-auto pb-24 w-full max-w-7xl mx-auto px-4 py-8"
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
        <div className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <button 
            onClick={() => showToast("Order history feature coming soon!")}
            className="w-full flex items-center justify-between p-5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Package className="w-5 h-5 text-slate-400" />
              <span className="font-bold">My Orders</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </button>
          <button 
            onClick={() => showToast("Address management feature coming soon!")}
            className="w-full flex items-center justify-between p-5 border-t border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-slate-400" />
              <span className="font-bold">Shipping Addresses</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </button>
          <button 
            onClick={() => showToast("Payment methods feature coming soon!")}
            className="w-full flex items-center justify-between p-5 border-t border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-center gap-4">
              <CreditCard className="w-5 h-5 text-slate-400" />
              <span className="font-bold">Payment Methods</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </button>
        </div>

        <div className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <button 
            onClick={() => showToast("Settings feature coming soon!")}
            className="w-full flex items-center justify-between p-5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Settings className="w-5 h-5 text-slate-400" />
              <span className="font-bold">Settings</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </button>
          <button 
            onClick={() => showToast("Logged out successfully!")}
            className="w-full flex items-center justify-between p-5 border-t border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-red-500"
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
              <div className="absolute top-6 left-6 bg-white dark:bg-slate-900 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                {post.date}
              </div>
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
            <p className="text-slate-500 leading-relaxed mb-4">{post.excerpt}</p>
            <button className="text-sm font-black uppercase tracking-widest border-b-2 border-primary pb-1">Read More</button>
          </article>
        ))}
      </div>

      <div className="bg-slate-100 dark:bg-slate-900/50 rounded-[3rem] p-8 md:p-16">
        <h2 className="text-3xl font-black uppercase tracking-tight mb-10 text-center">Fashion Q&A</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-black uppercase mb-4 flex gap-3">
                <span className="text-primary">Q:</span> {faq.q}
              </h3>
              <p className="text-slate-500 leading-relaxed">
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
      className="flex-1 overflow-y-auto pb-24 w-full max-w-7xl mx-auto px-4 py-8"
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
