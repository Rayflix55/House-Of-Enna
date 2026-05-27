import React, { useState } from 'react';
import { Send, ShoppingBag, MapPin, User, Phone, Edit, MessageSquare } from 'lucide-react';
import { CartItem } from '../types';
import { motion } from 'motion/react';
import { getColorName } from '../utils/colorMapper';

interface CheckoutProps {
  cart: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  onPay: () => void;
  showToast: (msg: string) => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ cart, subtotal, tax, total, onPay, showToast }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    state: 'Abuja',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'WhatsApp or Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Delivery address is required';
    if (!formData.city.trim()) newErrors.city = 'City/Area is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrderSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      showToast('Please fill out all required fields.');
      return;
    }

    // Build WhatsApp Message
    const orderItemsText = cart.map(item => {
      const sizeText = item.selectedSize ? ` [Size: ${item.selectedSize}]` : '';
      const colorText = item.selectedColor ? ` [Color: ${getColorName(item.selectedColor)}]` : '';
      return `• ${item.name} x${item.quantity}${sizeText}${colorText} - ₦${(item.price * item.quantity).toLocaleString()}\n  Reference Outfit Photo: ${item.image}`;
    }).join('\n\n');

    const message = `🇳🇬 *HOUSE OF ENNA - NEW ORDER* 🇳🇬\n\n` +
      `*CUSTOMER DETAILS:*\n` +
      `• *Name:* ${formData.fullName.trim()}\n` +
      `• *WhatsApp/Phone:* ${formData.phone.trim()}\n` +
      `• *Delivery Address:* ${formData.address.trim()}, ${formData.city.trim()}, ${formData.state}\n` +
      `• *Special Request/Custom fit:* ${formData.notes.trim() || 'None'}\n\n` +
      `*ORDERED ITEMS:*\n` +
      `${orderItemsText}\n\n` +
      `*TOTAL AMOUNT:* ₦${subtotal.toLocaleString()}\n\n` +
      `_Please confirm tailor details and send payment information._`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=2349023749226&text=${encodedMessage}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank');

    // Trigger onPay to route directly to CONFIRMATION screen in our app
    onPay();
  };

  return (
    <motion.main 
      initial={{ opacity: 0, y: 15 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="flex-1 overflow-y-auto px-6 py-10 w-full max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Form */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight mb-2">Delivery Information</h2>
            <p className="text-sm text-slate-500">Provide your information below to place your order via WhatsApp.</p>
          </div>

          <form onSubmit={handleOrderSubmission} className="space-y-6">
            <div className="space-y-1">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Full Name *</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Chinelo Adebayo"
                  className={`w-full pl-12 pr-4 py-4 rounded-xl text-sm bg-transparent border ${errors.fullName ? 'border-red-500 ring-2 ring-red-500/20' : 'border-[#043327]/15 dark:border-[#e8cf7a]/15 focus:border-primary'} outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                />
              </div>
              {errors.fullName && <p className="text-[10px] text-red-500 uppercase font-black">{errors.fullName}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">WhatsApp / Phone Number *</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. +234 803 123 4567"
                  className={`w-full pl-12 pr-4 py-4 rounded-xl text-sm bg-transparent border ${errors.phone ? 'border-red-500 ring-2 ring-red-500/20' : 'border-[#043327]/15 dark:border-[#e8cf7a]/15 focus:border-primary'} outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                />
              </div>
              {errors.phone && <p className="text-[10px] text-red-500 uppercase font-black">{errors.phone}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Delivery Address *</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-5 w-4 h-4 text-slate-400" />
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="e.g. Flat 3, 15 Wuse II Boulevard"
                  className={`w-full pl-12 pr-4 py-4 rounded-xl text-sm bg-transparent border ${errors.address ? 'border-red-500 ring-2 ring-red-500/20' : 'border-[#043327]/15 dark:border-[#e8cf7a]/15 focus:border-primary'} outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none`}
                />
              </div>
              {errors.address && <p className="text-[10px] text-red-500 uppercase font-black">{errors.address}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">City / Area *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="e.g. Wuse II / Garki"
                  className={`w-full px-4 py-4 rounded-xl text-sm bg-transparent border ${errors.city ? 'border-red-500 ring-2 ring-red-500/20' : 'border-[#043327]/15 dark:border-[#e8cf7a]/15 focus:border-primary'} outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                />
                {errors.city && <p className="text-[10px] text-red-500 uppercase font-black">{errors.city}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">State *</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 rounded-xl text-sm bg-[#f6efe5] dark:bg-[#032019] border border-[#043327]/15 dark:border-[#e8cf7a]/15 focus:border-primary outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
                >
                  <option value="Abuja">Abuja (FCT)</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Kano">Kano</option>
                  <option value="Rivers">Rivers</option>
                  <option value="Kaduna">Kaduna</option>
                  <option value="Oyo">Oyo</option>
                  <option value="Enugu">Enugu</option>
                  <option value="Anambra">Anambra</option>
                  <option value="Delta">Delta</option>
                  <option value="Edo">Edo</option>
                  <option value="Other">Other Nationwide</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 flex justify-between">
                <span>Special Instructions / Custom Measurements</span>
                <span className="text-[10px] opacity-60">Optional</span>
              </label>
              <div className="relative">
                <Edit className="absolute left-4 top-5 w-4 h-4 text-slate-400" />
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="e.g. Bust: 36 inches, Waist: 28 inches, or specific fabric instructions."
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-sm bg-transparent border border-[#043327]/15 dark:border-[#e8cf7a]/15 focus:border-primary outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>
            </div>

            <button type="submit" className="hidden" />
          </form>
        </div>

        {/* Right Side: Order Summary */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#f6efe5] dark:bg-[#032019]/40 p-8 rounded-3xl border border-[#043327]/15 dark:border-[#e8cf7a]/15 shadow-xl">
            <h3 className="text-xs font-black uppercase tracking-widest mb-8 flex items-center justify-between">
              <span>Order Summary</span>
              <span className="text-[10px] font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">{cart.reduce((s, i) => s + i.quantity, 0)} Items</span>
            </h3>
            <div className="space-y-5 max-h-60 overflow-y-auto pr-2 mb-6">
              {cart.map(item => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex justify-between items-start text-sm py-2 border-b border-slate-100 dark:border-slate-800 last:border-b-0">
                  <div className="flex flex-col">
                    <span className="font-bold">{item.name}</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">
                      {item.selectedSize ? `Size: ${item.selectedSize}` : ''} {item.selectedColor ? `• Color: ${getColorName(item.selectedColor)}` : ''}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-slate-400 text-xs">x{item.quantity}</span>
                    <p className="font-black mt-1">₦{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Subtotal</span>
                <span className="font-black">₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Shipping</span>
                <span className="font-black text-green-500 uppercase tracking-widest text-xs">Complimentary</span>
              </div>
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 mt-6 flex justify-between items-center">
                <span className="font-black uppercase text-base tracking-tighter">Total Price</span>
                <span className="text-2xl font-black tracking-tighter text-primary">₦{subtotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleOrderSubmission}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-6 rounded-2xl transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-2xl shadow-emerald-600/30 active:scale-[0.98]"
            >
              Order via WhatsApp
              <MessageSquare className="w-5 h-5 fill-current" />
            </button>
            <p className="text-center text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-normal">
              Clicking will open WhatsApp to message our tailored customer support desk automatically
            </p>
          </div>
        </div>
      </div>
    </motion.main>
  );
};
