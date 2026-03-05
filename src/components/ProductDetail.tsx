import React, { useState } from 'react';
import { CheckCircle, Star, User, MessageSquare, Facebook, Twitter, Share2 } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';
import { ProductCard } from './ProductCard';
import { motion } from 'motion/react';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onProductClick: (product: Product) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart, onProductClick }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[1] || 'M');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '#000');

  const similarProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const reviews = [
    { id: 1, user: "Sarah M.", rating: 5, comment: "Absolutely love the fit and the quality of the fabric. It feels so premium!", date: "2 days ago" },
    { id: 2, user: "James L.", rating: 4, comment: "Great minimalist design. The color is exactly as shown in the pictures.", date: "1 week ago" },
    { id: 3, user: "Elena R.", rating: 5, comment: "Perfect for daily wear. I've already ordered it in another color!", date: "2 weeks ago" }
  ];

  return (
    <main className="flex-1 overflow-y-auto pb-24 w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:p-8 mb-20">
        <div className="aspect-3/4 w-full bg-slate-100 dark:bg-slate-900 overflow-hidden md:rounded-3xl">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        
        <div className="py-8 flex flex-col justify-center">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">New Season</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4 uppercase tracking-tighter">{product.name}</h1>
          <p className="text-2xl md:text-3xl font-light text-slate-700 dark:text-slate-300 mb-10">${product.price.toFixed(2)}</p>

          <div className="space-y-10">
            {product.colors && (
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-4">Color</span>
                <div className="flex gap-4">
                  {product.colors.map(c => (
                    <button 
                      key={c} 
                      onClick={() => setSelectedColor(c)}
                      style={{ backgroundColor: c }}
                      className={`size-10 rounded-full border border-slate-200 dark:border-slate-700 ring-offset-4 dark:ring-offset-background-dark transition-all ${selectedColor === c ? 'ring-2 ring-primary scale-110' : 'hover:scale-105'}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {product.sizes && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Select Size</span>
                  <button className="text-xs font-medium underline text-slate-400 hover:text-primary transition-colors">Size Guide</button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.map(s => (
                    <button 
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`py-4 text-sm font-bold border rounded-xl transition-all uppercase ${selectedSize === s ? 'border-2 border-primary bg-primary/5 text-primary' : 'border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button 
              onClick={() => onAddToCart(product, selectedSize, selectedColor)}
              className="w-full bg-primary text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 active:scale-[0.98]"
            >
              Add to Bag
            </button>

            <div className="flex items-center justify-center gap-6 pt-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Share</span>
              <div className="flex gap-4">
                <button 
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(`Check out this ${product.name}!`)}`, '_blank')}
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(product.image)}&description=${encodeURIComponent(product.name)}`, '_blank')}
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all"
                  aria-label="Share on Pinterest"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="pt-10 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-6">Description</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                {product.description || 'Engineered for ultimate comfort and enduring style. Crafted from premium materials for a minimalist silhouette that stands the test of time.'}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary" /> 100% Organic Cotton</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary" /> Ethically Made in Portugal</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary" /> Pre-shrunk for the perfect fit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="mb-20 px-4 md:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-black uppercase tracking-tight">Customer Reviews</h2>
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-sm font-bold">4.8 (124 reviews)</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map(review => (
            <div key={review.id} className="bg-white dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <User className="w-4 h-4 text-slate-400" />
                  </div>
                  <span className="text-sm font-bold">{review.user}</span>
                </div>
                <span className="text-xs text-slate-400">{review.date}</span>
              </div>
              <div className="flex text-amber-400 mb-3">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
        <button className="w-full mt-8 py-4 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors flex items-center justify-center gap-2">
          <MessageSquare className="w-4 h-4" /> Write a Review
        </button>
      </section>

      {/* You May Also Like Section */}
      <section className="px-4 md:px-8">
        <h2 className="text-2xl font-black uppercase tracking-tight mb-10">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {similarProducts.map(p => (
            <ProductCard key={p.id} product={p} onClick={() => onProductClick(p)} />
          ))}
        </div>
      </section>
    </main>
  );
};
