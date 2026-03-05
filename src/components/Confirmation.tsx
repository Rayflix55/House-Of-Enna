import React from 'react';
import { CheckCircle, Truck, Package, ArrowRight, MapPin, Headphones } from 'lucide-react';
import { CartItem } from '../types';

interface ConfirmationProps {
  cart: CartItem[];
  total: number;
  onContinue: () => void;
  showToast: (msg: string) => void;
}

export const Confirmation: React.FC<ConfirmationProps> = ({ cart, total, onContinue, showToast }) => {
  return (
    <main className="flex-1 px-6 py-12 overflow-y-auto w-full max-w-3xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-8 animate-bounce">
          <CheckCircle className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-5xl font-black mb-4 tracking-tighter uppercase">Thank You!</h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md">
          Your order <span className="font-black text-slate-900 dark:text-white">#MOD-8274</span> has been placed successfully.
        </p>
        <p className="text-slate-500 text-xs mt-4 uppercase tracking-[0.3em] font-bold">A confirmation email is on its way.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-primary/10 border border-primary/20 rounded-3xl p-8 flex items-center gap-6 shadow-sm">
          <div className="bg-primary/20 p-4 rounded-2xl">
            <Truck className="w-8 h-8 text-primary" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-black text-primary mb-1">Estimated Delivery</p>
            <p className="text-lg font-black">Oct 24 - Oct 26</p>
          </div>
        </div>

        <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-slate-400" />
            <h4 className="font-black text-[10px] uppercase tracking-widest">Shipping Address</h4>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            Alex Johnson<br/>123 Minimalist Avenue, Apt 4B<br/>New York, NY 10001<br/>United States
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900/30 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 mb-12 shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-black tracking-tighter uppercase">Order Summary</h3>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{cart.length} Items</span>
        </div>
        <div className="space-y-6">
          {cart.map(item => (
            <div key={item.id} className="flex items-center gap-6 py-2 border-b border-slate-200 dark:border-slate-800 last:border-0 pb-6">
              <div className="size-20 rounded-2xl overflow-hidden shrink-0 shadow-md">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1">
                <p className="text-base font-black line-clamp-1 uppercase">{item.name}</p>
                <p className="text-slate-500 text-xs uppercase tracking-wider mt-1">Size: {item.selectedSize} | Qty: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-black text-lg">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <span className="text-base font-black uppercase tracking-tighter">Total Paid</span>
          <span className="text-3xl font-black text-primary tracking-tighter">${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <button 
          onClick={() => showToast("Tracking details will be available soon!")}
          className="flex-1 bg-primary hover:bg-primary/90 text-white font-black py-6 rounded-2xl transition-all shadow-2xl shadow-primary/40 flex items-center justify-center gap-3 text-xs uppercase tracking-widest active:scale-[0.98]"
        >
          <Package className="w-5 h-5" />
          Track Your Order
        </button>
        <button 
          onClick={onContinue}
          className="flex-1 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-black py-6 rounded-2xl transition-all flex items-center justify-center gap-3 text-xs uppercase tracking-widest active:scale-[0.98]"
        >
          Continue Shopping
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <div className="text-center">
        <button 
          onClick={() => showToast("Connecting to support...")}
          className="text-xs text-slate-500 font-bold flex items-center justify-center gap-2 mx-auto hover:text-primary transition-colors uppercase tracking-widest"
        >
          <Headphones className="w-4 h-4" />
          Need help? <span className="text-primary underline">Contact Support</span>
        </button>
      </div>
    </main>
  );
};
