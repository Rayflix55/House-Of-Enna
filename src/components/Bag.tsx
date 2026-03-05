import React from 'react';
import { ShoppingBag, X, Plus, Minus, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface BagProps {
  cart: CartItem[];
  onRemove: (id: string, size?: string) => void;
  onUpdateQuantity: (id: string, size: string | undefined, delta: number) => void;
  onCheckout: () => void;
  onContinueShopping: () => void;
  showToast: (msg: string) => void;
  subtotal: number;
  tax: number;
  total: number;
}

export const Bag: React.FC<BagProps> = ({ 
  cart, 
  onRemove, 
  onUpdateQuantity, 
  onCheckout, 
  onContinueShopping,
  showToast,
  subtotal,
  tax,
  total
}) => {
  return (
    <main className="flex-1 px-4 py-8 overflow-y-auto pb-32 w-full max-w-3xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Items ({cart.length})</h2>
        <button 
          onClick={onContinueShopping}
          className="text-sm font-medium text-primary hover:underline"
        >
          Continue Shopping
        </button>
      </div>

      <div className="space-y-6">
        {cart.length === 0 ? (
          <div className="text-center py-32">
            <div className="w-24 h-24 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold mb-2">Your bag is empty</h3>
            <p className="text-slate-500 mb-8">Looks like you haven't added anything yet.</p>
            <button 
              onClick={onContinueShopping}
              className="bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          cart.map((item) => (
            <div key={`${item.id}-${item.selectedSize}`} className="flex gap-6 p-5 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-1 flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-base md:text-lg">{item.name}</h3>
                    <button 
                      onClick={() => onRemove(item.id, item.selectedSize)}
                      className="text-slate-400 hover:text-red-500 transition-colors p-1"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 uppercase tracking-wider">
                    {item.selectedColor ? 'Midnight Black' : ''} {item.selectedSize ? `• ${item.selectedSize}` : ''}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-full px-3 py-1.5 bg-background-light dark:bg-background-dark">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.selectedSize, -1)}
                      className="p-1 hover:text-primary transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-5 text-sm font-black">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.selectedSize, 1)}
                      className="p-1 hover:text-primary transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="font-black text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="mt-12 space-y-10">
          <div className="flex gap-3">
            <input 
              className="flex-1 bg-transparent border-slate-200 dark:border-slate-800 rounded-xl text-sm p-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" 
              placeholder="Promo Code" 
              type="text"
            />
            <button 
              onClick={() => showToast("Invalid promo code. Please try again.")}
              className="px-8 py-4 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Apply
            </button>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-10 space-y-5">
            <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
              <span>Subtotal</span>
              <span className="font-bold text-slate-900 dark:text-white">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
              <span>Shipping</span>
              <span className="text-green-500 uppercase font-black tracking-widest">Free</span>
            </div>
            <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
              <span>Estimated Tax</span>
              <span className="font-bold text-slate-900 dark:text-white">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-6 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xl font-black uppercase tracking-tighter">Total</span>
              <span className="text-2xl font-black text-primary">${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="pb-10">
            <button 
              onClick={onCheckout}
              className="w-full bg-primary text-white py-6 rounded-2xl text-sm font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-2xl shadow-primary/40 flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              Proceed to Checkout
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-center text-[10px] text-slate-400 mt-6 uppercase tracking-widest font-medium">Secure Checkout Powered by FashionPay</p>
          </div>
        </div>
      )}
    </main>
  );
};
