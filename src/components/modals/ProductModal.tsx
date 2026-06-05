import { X, Terminal, Check } from 'lucide-react';
import type { Product } from '../../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-[#0a0a0a] border border-white/20 rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-sm transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#050505]">
            <div className="space-y-6">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-[#888] border border-white/10 px-2 py-0.5 rounded-sm">
                  {product.category.toUpperCase()}
                </span>
                <h2 className="text-2xl font-black tracking-wider uppercase mt-4">{product.name}</h2>
                <p className="font-mono text-xs tracking-widest text-white/50 uppercase mt-2">{product.tagline}</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono text-xs font-bold tracking-widest uppercase text-white">KEY FEATURES</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#888]">
                      <Check size={14} className="mt-0.5 flex-shrink-0 text-white" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="space-y-1">
                    <div className="text-[9px] font-mono text-[#444] uppercase tracking-wider">{key}</div>
                    <div className="text-xs font-mono text-[#aaa]">{val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] font-mono tracking-wider text-[#444] uppercase flex items-center gap-2">
                  <Terminal size={12} /> SOURCE PREVIEW
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              </div>
              <div className="bg-[#090909] border border-white/10 rounded-sm p-4 overflow-x-auto">
                <pre className="font-mono text-xs text-white/90 whitespace-pre-wrap">
                  <code>{product.code}</code>
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[#888] text-sm leading-relaxed">{product.description}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="text-3xl font-black font-mono tracking-tighter">${product.price}</div>
                <button
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="px-6 py-3 bg-white text-black font-mono text-xs tracking-widest font-bold uppercase hover:bg-[#888] transition-colors"
                >
                  ADD TO PAYLOAD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
