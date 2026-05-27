import React from 'react';
import { Heart, Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  showToast?: (msg: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, showToast }) => {
  return (
    <div 
      className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] p-4 bg-[#f6efe5] dark:bg-[#032019]/40 border border-[#043327]/10 dark:border-[#e8cf7a]/15 hover:border-[#e8cf7a]/40 hover:shadow-xl dark:hover:shadow-primary/5 cursor-pointer transition-all duration-300"
      onClick={onClick}
    >
      <div className="relative aspect-[3/4.2] rounded-[1.5rem] bg-[#eae3d5]/55 dark:bg-primary/5 overflow-hidden mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Category Tag */}
        <span className="absolute top-3 left-3 bg-white/95 dark:bg-background-dark/90 backdrop-blur-md text-[9px] font-black tracking-widest text-[#043327] dark:text-accent-gold px-3 py-1.5 rounded-full uppercase scale-90 md:scale-100 transition-all">
          {product.category}
        </span>

        {/* Wishlist Heart */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            if (showToast) {
              showToast(`${product.name} added to wishlist!`);
            }
          }}
          className="absolute top-3 right-3 p-2.5 rounded-full bg-white/90 dark:bg-background-dark/70 backdrop-blur-md opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 transition-all text-[#043327] dark:text-white"
        >
          <Heart className="w-4 h-4 hover:fill-red-500 hover:text-red-500 transition-all" />
        </button>
      </div>

      <div className="flex justify-between items-end gap-3 px-1">
        <div className="flex-1">
          <h3 className="font-serif text-lg font-bold md:text-xl line-clamp-1 text-slate-850 dark:text-white group-hover:text-primary dark:group-hover:text-accent-gold transition-colors">{product.name}</h3>
          <p className="text-primary dark:text-accent-gold font-normal font-sans text-xs uppercase tracking-wider mt-0.5">₦{product.price.toLocaleString()}</p>
        </div>
        
        {/* Floating Detail Circle */}
        <div className="size-10 rounded-full bg-primary dark:bg-accent-gold hover:bg-opacity-90 flex items-center justify-center text-white dark:text-background-dark shadow-md shadow-primary/10 transition-all duration-300 shrink-0 select-none transform group-hover:scale-110">
          <Plus className="w-5 h-5 stroke-[2.5px]" />
        </div>
      </div>
    </div>
  );
};
