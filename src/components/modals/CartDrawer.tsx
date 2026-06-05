import React from 'react';
import { ShoppingBag, X, Trash2 } from 'lucide-react';
import type { Product } from '../../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Product[];
  onRemoveFromCart: (id: string) => void;
  onCheckout: () => void;
}

export function CartDrawer({ isOpen, onClose, cart, onRemoveFromCart, onCheckout }: CartDrawerProps) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop dengan blur minimalis */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      {/* Container Drawer Utama */}
      <div className="relative bg-[#0a0a0a] border-l border-white/20 w-full max-w-md h-full flex flex-col justify-between z-10 shadow-2xl">
        
        {/* Header Drawer */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-white" />
            <h2 className="text-lg font-black tracking-wider uppercase font-mono">PAYLOAD</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-sm transition-colors text-[#888] hover:text-white"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Konten Payload / Keranjang Belanja */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/10 bg-black">
          {cart.length === 0 ? (
            <div className="text-center py-24 space-y-4">
              <div className="text-[#444] text-6xl mb-4 font-mono">∅</div>
              <p className="text-[#888] text-sm font-semibold tracking-wider font-mono">PAYLOAD KOSONG</p>
              <p className="text-[10px] font-mono text-[#444] max-w-[240px] mx-auto leading-relaxed">
                Belum ada modul yang ditambahkan ke muatan Anda. Gunakan Explorer di bawah untuk memuat modul baru.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div 
                  key={item.id} 
                  className="border border-white/10 p-4 bg-[#121212]/40 rounded-sm space-y-3 hover:border-white/20 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-1">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                        {item.name}
                      </div>
                      <div className="text-[10px] text-[#888] tracking-widest uppercase font-mono">
                        {item.category}
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveFromCart(item.id)}
                      className="p-1.5 hover:bg-white/10 text-[#444] hover:text-red-500 rounded-sm transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <span className="text-[10px] font-mono text-[#4d4d4d]">
                      {item.specs?.version || 'v1.0.0'}
                    </span>
                    <span className="text-sm font-mono font-bold text-white">
                      ${item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer & Aksi Checkout */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-[#020202] space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#888] tracking-wider">SUBTOTAL</span>
                <span className="font-bold text-white">${total}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#888] tracking-wider">PLATFORM FEE</span>
                <span className="font-bold text-white">$0</span>
              </div>
              <div className="flex items-center justify-between text-lg font-mono font-bold pt-3 border-t border-white/10 text-white">
                <span>TOTAL</span>
                <span>${total}</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={onCheckout}
                className="w-full py-4 bg-white text-black font-mono text-xs tracking-[0.15em] font-black uppercase hover:bg-[#888] transition-colors"
              >
                INITIATE CHECKOUT
              </button>
              <p className="text-[10px] font-mono text-[#444] text-center uppercase tracking-widest">
                PROTOKOL PEMBAYARAN AMAN TERENKRIPSI
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}