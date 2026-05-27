import React from 'react';
import { CheckCircle, Truck, Package, ArrowRight, MapPin, Headphones, MessageSquare } from 'lucide-react';
import { CartItem } from '../types';
import { motion } from 'motion/react';

interface ConfirmationProps {
  cart: CartItem[];
  total: number;
  onContinue: () => void;
  showToast: (msg: string) => void;
}

export const Confirmation: React.FC<ConfirmationProps> = ({ cart, total, onContinue, showToast }) => {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 15 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="flex-1 px-6 py-12 overflow-y-auto w-full max-w-3xl mx-auto"
    >
      <div className="flex flex-col items-center text-center mb-12">
        <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-950 rounded-full flex items-center justify-center mb-8 animate-bounce">
          <CheckCircle className="w-12 h-12 text-emerald-600" />
        </div>
        <h1 className="text-5xl font-black mb-4 tracking-tighter uppercase">Order Sent!</h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md">
          Your order request has been compiled and initiated.
        </p>
        <p className="text-[#e25c30] text-xs mt-4 uppercase tracking-[0.2em] font-black">
          Please check your WhatsApp to finalize size fittings & secure bank transfer!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-primary/10 border border-primary/20 rounded-3xl p-8 flex items-center gap-6 shadow-sm">
          <div className="bg-primary/20 p-4 rounded-2xl">
            <Truck className="w-8 h-8 text-primary" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-black text-primary mb-1">Tailoring & Delivery</p>
            <p className="text-lg font-black">3 - 5 Days Nationwide</p>
          </div>
        </div>

        <div className="bg-[#f6efe5] dark:bg-[#032019]/60 border border-[#043327]/10 dark:border-[#e8cf7a]/15 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-slate-400" />
            <h4 className="font-black text-[10px] uppercase tracking-widest">Delivery Info</h4>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
            Abuja & Nationwide Delivery.<br/>
            Custom bespoke fitting tailoring will be finalized on our chat.
          </p>
        </div>
      </div>

      <div className="bg-[#f6efe5] dark:bg-[#032019]/40 p-8 rounded-3xl border border-[#043327]/15 dark:border-[#e8cf7a]/15 mb-12 shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-black tracking-tighter uppercase">Order Summary</h3>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{cart.length} Items</span>
        </div>
        <div className="space-y-6">
          {cart.map(item => (
            <div key={`${item.id}-${item.selectedSize}`} className="flex items-center gap-6 py-2 border-b border-[#043327]/10 dark:border-emerald-950/40 last:border-0 pb-6">
              <div className="size-20 rounded-2xl overflow-hidden shrink-0 shadow-md">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1">
                <p className="text-base font-black line-clamp-1 uppercase">{item.name}</p>
                <p className="text-slate-500 text-xs uppercase tracking-wider mt-1">Size: {item.selectedSize || 'Standard'} | Qty: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-black text-lg">₦{(item.price * item.quantity).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-[#043327]/10 dark:border-[#e8cf7a]/15 flex justify-between items-center">
          <span className="text-base font-black uppercase tracking-tighter">Subtotal</span>
          <span className="text-3xl font-black text-primary tracking-tighter">₦{total.toLocaleString()}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <button 
          onClick={() => {
            const compiledText = cart.map(item => `• ${item.name} (Size: ${item.selectedSize || 'std'}, Qty: ${item.quantity})`).join('\n');
            const message = `Annyeong! Let's arrange my order of:\n${compiledText}\nTotal: ₦${total.toLocaleString()}`;
            window.open(`https://api.whatsapp.com/send?phone=2349023749226&text=${encodeURIComponent(message)}`, '_blank');
          }}
          className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-black py-6 rounded-2xl transition-all shadow-2xl shadow-emerald-600/20 flex items-center justify-center gap-3 text-xs uppercase tracking-widest active:scale-[0.98]"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          Reopen WhatsApp Chat
        </button>
        <button 
          onClick={onContinue}
          className="flex-1 bg-[#eae3d5]/60 dark:bg-[#043327] hover:bg-[#eae3d5]/80 dark:hover:bg-[#043327]/90 text-slate-900 dark:text-white font-black py-6 rounded-2xl transition-all flex items-center justify-center gap-3 text-xs uppercase tracking-widest active:scale-[0.98]"
        >
          Continue Shopping
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <div className="text-center">
        <button 
          onClick={() => window.open('https://api.whatsapp.com/send?phone=2349023749226&text=Hi%2C%20I%20have%20questions%20regarding%20my%20recent%20order', '_blank')}
          className="text-xs text-slate-500 font-bold flex items-center justify-center gap-2 mx-auto hover:text-primary transition-colors uppercase tracking-widest"
        >
          <Headphones className="w-4 h-4" />
          Need instant help? <span className="text-primary underline">WhatsApp Support</span>
        </button>
      </div>
    </motion.main>
  );
};
