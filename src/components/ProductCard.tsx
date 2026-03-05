import React from 'react';
import { Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  showToast: (msg: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, showToast }) => {
  return (
    <div 
      className="flex flex-col gap-2 group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[3/4] rounded-xl bg-slate-100 dark:bg-primary/5 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <button 
          onClick={(e) => {
            e.stopPropagation();
            showToast(`${product.name} added to wishlist!`);
          }}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 dark:bg-background-dark/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="w-4 h-4 text-slate-900 dark:text-white" />
        </button>
      </div>
      <div>
        <h3 className="font-semibold text-xs md:text-sm line-clamp-1">{product.name}</h3>
        <p className="text-primary font-bold text-sm md:text-base">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};
