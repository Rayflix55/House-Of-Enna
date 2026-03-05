import React from 'react';
import { MapPin, Lock } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutProps {
  cart: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  onPay: () => void;
  showToast: (msg: string) => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ cart, subtotal, tax, total, onPay, showToast }) => {
  return (
    <main className="flex-1 overflow-y-auto px-6 py-10 w-full max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-10">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-black uppercase tracking-widest">Shipping Address</h3>
              <button 
                onClick={() => showToast("Address editing coming soon!")}
                className="text-primary text-xs font-black hover:underline"
              >
                Edit
              </button>
            </div>
            <div className="flex items-start gap-5 bg-slate-100 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-12">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <p className="text-base font-black">Home Office</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mt-2 uppercase tracking-wider">123 Fashion Ave, Suite 405<br/>New York, NY 10001</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-black uppercase tracking-widest">Payment Method</h3>
              <button 
                onClick={() => showToast("Payment method editing coming soon!")}
                className="text-primary text-xs font-black hover:underline"
              >
                Edit
              </button>
            </div>
            <div className="space-y-4">
              <label className="flex items-center gap-5 rounded-2xl border-2 border-primary bg-primary/5 p-6 cursor-pointer transition-all shadow-sm">
                <div className="grow flex items-center gap-4">
                  <div className="w-12 h-8 bg-slate-800 rounded-lg flex items-center justify-center shadow-inner">
                    <span className="text-[10px] font-black text-white uppercase tracking-tighter">Visa</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-base font-black tracking-tight">•••• 4242</p>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Expires 12/26</p>
                  </div>
                </div>
                <div className="size-6 rounded-full border-2 border-primary flex items-center justify-center">
                  <div className="size-3 rounded-full bg-primary" />
                </div>
              </label>
              <label className="flex items-center gap-5 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 cursor-pointer opacity-60 hover:opacity-100 transition-all">
                <div className="grow flex items-center gap-4">
                  <div className="w-12 h-8 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-[10px] font-black text-white uppercase tracking-tighter">Apple</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-base font-black tracking-tight">Apple Pay</p>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Default Wallet</p>
                  </div>
                </div>
                <div className="size-6 rounded-full border-2 border-slate-300 dark:border-slate-700" />
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="bg-white dark:bg-slate-900/30 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
            <h3 className="text-xs font-black uppercase tracking-widest mb-8">Order Summary</h3>
            <div className="space-y-5">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">{item.name} <span className="text-[10px] opacity-50">x{item.quantity}</span></span>
                  <span className="font-black">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Shipping</span>
                <span className="font-black text-green-500 uppercase tracking-widest text-xs">Complimentary</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Estimated Tax</span>
                <span className="font-black">${tax.toFixed(2)}</span>
              </div>
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 mt-6 flex justify-between items-center">
                <span className="font-black uppercase text-base tracking-tighter">Total</span>
                <span className="text-3xl font-black tracking-tighter text-primary">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <button 
              onClick={onPay}
              className="w-full bg-primary hover:bg-primary/90 text-white font-black py-6 rounded-2xl transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-2xl shadow-primary/40 active:scale-[0.98]"
            >
              Pay Now
              <Lock className="w-5 h-5" />
            </button>
            <p className="text-center text-[10px] text-slate-500 dark:text-slate-600 uppercase tracking-[0.2em] font-bold">
              Secure SSL Encrypted Payment System
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
