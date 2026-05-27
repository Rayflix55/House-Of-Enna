import React from 'react';
import { X, Ruler, Sparkles, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const measurementData = [
    { size: 'S', ukSize: 'UK 6 - 8', bust: '32" - 34" (81-86cm)', waist: '25" - 27" (64-69cm)', hips: '35" - 37" (89-94cm)' },
    { size: 'M', ukSize: 'UK 10 - 12', bust: '35" - 37" (89-94cm)', waist: '28" - 30" (71-76cm)', hips: '38" - 40" (97-102cm)' },
    { size: 'L', ukSize: 'UK 14 - 16', bust: '38" - 40" (97-102cm)', waist: '31" - 33" (79-84cm)', hips: '41" - 43" (104-109cm)' },
    { size: 'XL', ukSize: 'UK 18 - 20', bust: '41" - 44" (104-112cm)', waist: '34" - 37" (86-94cm)', hips: '44" - 47" (112-119cm)' },
    { size: 'Custom Fit', ukSize: 'Any Size', bust: 'Bespoke', waist: 'Bespoke', hips: 'Bespoke' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-[2.5rem] bg-faf8f5 dark:bg-041c16 border border-[#043327]/10 dark:border-[#e8cf7a]/15 shadow-2xl p-6 md:p-8 text-slate-900 dark:text-slate-100"
            style={{ backgroundColor: 'var(--color-background-light, #faf8f5)' }}
          >
            {/* Dark theme class fallback handler */}
            <div className="absolute inset-0 bg-faf8f5 dark:bg-041c16 -z-10" />

            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#043327]/10 dark:border-[#e8cf7a]/15">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 dark:bg-accent-gold/15 p-2.5 rounded-full text-primary dark:text-accent-gold">
                  <Ruler className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold uppercase tracking-tight text-primary dark:text-accent-gold">Bespoke Size Guide</h3>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400">Guaranteed Perfect Tailored Fit</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#eae3d5]/50 dark:hover:bg-[#032019] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-1">
              {/* Introduction Banner */}
              <div className="bg-primary/5 dark:bg-white/5 border border-primary/15 dark:border-white/10 rounded-2xl p-4 flex gap-4 items-start">
                <Sparkles className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <span className="font-bold text-primary dark:text-accent-gold block mb-1">Our Tailoring Philosophy</span>
                  Every dress, two-piece set, and native senator outfit is carefully sewn with high attention to detail. We support **Custom Fits**—simply select "Custom Fit" and supply your exact body measurements in our chat!
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto border border-[#043327]/10 dark:border-[#e8cf7a]/15 rounded-2xl bg-white dark:bg-[#032019]/40">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#f6efe5] dark:bg-[#032019] text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 border-b border-[#043327]/10 dark:border-[#e8cf7a]/15">
                      <th className="p-4">Size</th>
                      <th className="p-4">UK Equivalent</th>
                      <th className="p-4">Bust</th>
                      <th className="p-4">Waist</th>
                      <th className="p-4">Hips</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#043327]/10 dark:divide-[#e8cf7a]/10 text-xs font-medium">
                    {measurementData.map((row) => (
                      <tr 
                        key={row.size} 
                        className={`hover:bg-[#eae3d5]/20 dark:hover:bg-[#043327]/40 transition-colors ${row.size === 'Custom Fit' ? 'text-primary dark:text-accent-gold font-bold bg-primary/5 dark:bg-accent-gold/5' : ''}`}
                      >
                        <td className="p-4 font-bold">{row.size}</td>
                        <td className="p-4 text-slate-500 dark:text-slate-400">{row.ukSize}</td>
                        <td className="p-4">{row.bust}</td>
                        <td className="p-4">{row.waist}</td>
                        <td className="p-4">{row.hips}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Measuring Guidelines */}
              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">How to Measure:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl border border-[#043327]/10 dark:border-[#e8cf7a]/10 bg-white/40 dark:bg-transparent">
                    <span className="font-bold text-xs uppercase tracking-wider text-primary dark:text-accent-gold block mb-2">1. Bust</span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">Measure around the fullest part of your bust area with your bra on, keeping the tape straight.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-[#043327]/10 dark:border-[#e8cf7a]/10 bg-white/40 dark:bg-transparent">
                    <span className="font-bold text-xs uppercase tracking-wider text-primary dark:text-accent-gold block mb-2">2. Waist</span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">Measure at the narrowest part of your waistline (usually above your belly button where you bend side-to-side).</p>
                  </div>
                  <div className="p-4 rounded-xl border border-[#043327]/10 dark:border-[#e8cf7a]/10 bg-white/40 dark:bg-transparent">
                    <span className="font-bold text-xs uppercase tracking-wider text-primary dark:text-accent-gold block mb-2">3. Hips</span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">Stand with feet close together and measure around the widest portion of your hip/buttock region.</p>
                  </div>
                </div>
              </div>

              {/* Perfect Fit Guarantee Badge */}
              <div className="pt-4 flex items-center justify-center gap-2 text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest border-t border-[#043327]/10 dark:border-[#e8cf7a]/10">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3px]" />
                Bespoke Tailoring & Clean Lined finishing Guaranteed
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
