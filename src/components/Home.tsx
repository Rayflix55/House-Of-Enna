import React from 'react';
import { ArrowRight, BookOpen, HelpCircle, Star, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface HomeProps {
  onProductClick: (product: Product) => void;
  onNavigate: (screen: any) => void;
  showToast: (msg: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onProductClick, onNavigate, showToast }) => {
  const blogHighlights = [
    { title: "Winter Essentials 2025", date: "Nov 12", image: "https://picsum.photos/seed/blog1/400/300" },
    { title: "Sustainable Style Guide", date: "Nov 08", image: "https://picsum.photos/seed/blog2/400/300" },
  ];

  const faqs = [
    { q: "What is your return policy?", a: "We offer a 30-day hassle-free return policy for all items." },
    { q: "How do I track my order?", a: "Once shipped, you'll receive a tracking link via email." },
  ];

  return (
    <main className="flex-1 overflow-y-auto pb-20 w-full max-w-7xl mx-auto">
      {/* Hero Section - SEO optimized with h1 */}
      <section className="px-4 py-6" aria-labelledby="hero-heading">
        <div className="relative flex flex-col md:flex-row gap-6 overflow-hidden rounded-[3rem] bg-slate-100 dark:bg-slate-900/40 p-8 md:p-16 min-h-[500px] md:items-center border border-slate-200 dark:border-slate-800">
          <div className="flex flex-col gap-6 z-10 md:w-1/2">
            <span className="text-primary font-black tracking-[0.3em] text-xs uppercase">New Season 2025</span>
            <h1 id="hero-heading" className="text-slate-900 dark:text-white text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
              Modern <br/><span className="text-primary">Minimal</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-md">
              Discover the intersection of comfort and high-fashion. Sustainably sourced, ethically made, designed for the future.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button 
                onClick={() => onNavigate('EXPLORE')}
                className="bg-primary text-white px-10 py-5 rounded-2xl text-base font-black uppercase tracking-widest shadow-2xl shadow-primary/40 active:scale-95 transition-all"
              >
                Shop Collection
              </button>
              <button 
                onClick={() => showToast("Lookbook coming soon!")}
                className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-10 py-5 rounded-2xl text-base font-black uppercase tracking-widest border-2 border-slate-200 dark:border-slate-800 hover:border-primary transition-all"
              >
                Lookbook
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="https://picsum.photos/seed/hero/800/800" 
              alt="Modern Minimalist Fashion Collection 2025"
              className="w-full max-w-md aspect-square object-cover rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 border-4 border-white dark:border-slate-800"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 px-4 grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex flex-col items-center text-center gap-3">
          <Truck className="w-8 h-8 text-primary" />
          <p className="text-xs font-black uppercase tracking-widest">Free Shipping</p>
        </div>
        <div className="flex flex-col items-center text-center gap-3">
          <RotateCcw className="w-8 h-8 text-primary" />
          <p className="text-xs font-black uppercase tracking-widest">30-Day Returns</p>
        </div>
        <div className="flex flex-col items-center text-center gap-3">
          <ShieldCheck className="w-8 h-8 text-primary" />
          <p className="text-xs font-black uppercase tracking-widest">Secure Payment</p>
        </div>
        <div className="flex flex-col items-center text-center gap-3">
          <Star className="w-8 h-8 text-primary" />
          <p className="text-xs font-black uppercase tracking-widest">Top Rated</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16" aria-labelledby="categories-heading">
        <div className="flex items-center justify-between px-4 mb-10">
          <h2 id="categories-heading" className="text-slate-900 dark:text-white text-3xl font-black uppercase tracking-tighter">Shop by Category</h2>
          <button 
            onClick={() => onNavigate('EXPLORE')}
            className="text-primary text-sm font-black uppercase tracking-widest flex items-center gap-2 group"
          >
            Explore all <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="flex gap-6 px-4 overflow-x-auto no-scrollbar md:grid md:grid-cols-4 md:overflow-visible">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.name} 
              onClick={() => onNavigate('EXPLORE')}
              className="flex-shrink-0 w-40 md:w-full flex flex-col items-center gap-4 group cursor-pointer"
            >
              <div className="w-full aspect-square rounded-[2rem] bg-slate-100 dark:bg-slate-900 flex items-center justify-center border-2 border-transparent group-hover:border-primary transition-all p-6 overflow-hidden shadow-sm">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-contain transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
              </div>
              <span className="text-sm font-black tracking-widest uppercase">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 px-4" aria-labelledby="trending-heading">
        <div className="flex items-center justify-between mb-12">
          <h2 id="trending-heading" className="text-slate-900 dark:text-white text-3xl font-black uppercase tracking-tighter">Trending Now</h2>
          <button 
            onClick={() => showToast("Filtering...")}
            className="px-6 py-3 border-2 border-slate-200 dark:border-slate-800 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Filter
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {PRODUCTS.slice(0, 4).map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={() => onProductClick(product)} 
              showToast={showToast}
            />
          ))}
        </div>
      </section>

      {/* Blog Section - NEW */}
      <section className="py-16 px-4 bg-slate-50 dark:bg-slate-900/30 rounded-[3rem] mx-4 my-8" aria-labelledby="blog-heading">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 id="blog-heading" className="text-2xl font-black uppercase tracking-tighter">Fashion Journal</h2>
          </div>
          <button 
            onClick={() => onNavigate('BLOG')}
            className="text-xs font-black uppercase tracking-widest border-b-2 border-primary pb-1"
          >
            Read All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogHighlights.map((post, i) => (
            <article key={i} className="group cursor-pointer" onClick={() => onNavigate('BLOG')}>
              <div className="relative h-64 rounded-3xl overflow-hidden mb-4">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute bottom-4 left-4 bg-white dark:bg-slate-900 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {post.date}
                </div>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-sm text-slate-500 mt-2">Discover the latest trends and styling tips from our fashion experts...</p>
            </article>
          ))}
        </div>
      </section>

      {/* Q&A Section - NEW */}
      <section className="py-16 px-4" aria-labelledby="qa-heading">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <HelpCircle className="w-6 h-6 text-primary" />
            <h2 id="qa-heading" className="text-2xl font-black uppercase tracking-tighter">Fashion Q&A</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
                <h3 className="font-black uppercase text-sm mb-3 flex gap-2">
                  <span className="text-primary">Q:</span> {faq.q}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  <span className="font-bold text-slate-900 dark:text-white mr-1">A:</span> {faq.a}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button 
              onClick={() => onNavigate('BLOG')}
              className="bg-slate-100 dark:bg-slate-800 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
            >
              View More Questions
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
