import { ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartOpen: () => void;
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

export function Header({ cartCount, onCartOpen, isMobileMenuOpen, onMobileMenuToggle }: HeaderProps) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10 h-16 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="font-mono text-xl font-black tracking-[0.25em] flex items-center gap-2">
              <span className="bg-white text-black px-1.5 py-0.5 rounded-sm">N</span>OVACORE
            </a>
            <nav className="hidden md:flex items-center gap-1">
              <a href="#products" className="text-xs font-mono tracking-widest uppercase hover:text-white text-[#888] px-3 py-1 transition-colors">PRODUCTS</a>
              <a href="#categories" className="text-xs font-mono tracking-widest uppercase hover:text-white text-[#888] px-3 py-1 transition-colors">CATEGORIES</a>
              <a href="#configurator" className="text-xs font-mono tracking-widest uppercase hover:text-white text-[#888] px-3 py-1 transition-colors">MISSION CONFIG</a>
              <a href="#why-choose-us" className="text-xs font-mono tracking-widest uppercase hover:text-white text-[#888] px-3 py-1 transition-colors">ABOUT</a>
              <a href="#testimonials" className="text-xs font-mono tracking-widest uppercase hover:text-white text-[#888] px-3 py-1 transition-colors">TESTIMONIALS</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onCartOpen}
              className="relative p-2 hover:bg-white/5 rounded-full border border-transparent hover:border-white/10 transition-all"
              aria-label="Open cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-white text-black font-mono text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <a 
              href="#products"
              className="hidden lg:flex items-center gap-2 px-4 py-2 border border-white text-xs font-mono tracking-wider hover:bg-white hover:text-black transition-all rounded-sm"
            >
              LAUNCH EXPLORER <ArrowRight size={12} />
            </a>

            <button 
              onClick={onMobileMenuToggle}
              className="p-2 md:hidden hover:bg-white/5 rounded-sm border border-white/10"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-black border-t border-white/10 p-6 flex flex-col justify-between">
          <nav className="flex flex-col gap-6">
            <a 
              href="#products" 
              onClick={onMobileMenuToggle}
              className="text-lg font-mono tracking-widest uppercase border-b border-white/10 pb-3"
            >
              PRODUCTS
            </a>
            <a 
              href="#categories" 
              onClick={onMobileMenuToggle}
              className="text-lg font-mono tracking-widest uppercase border-b border-white/10 pb-3"
            >
              CATEGORIES
            </a>
            <a 
              href="#configurator" 
              onClick={onMobileMenuToggle}
              className="text-lg font-mono tracking-widest uppercase border-b border-white/10 pb-3"
            >
              MISSION CONFIG
            </a>
            <a 
              href="#why-choose-us" 
              onClick={onMobileMenuToggle}
              className="text-lg font-mono tracking-widest uppercase border-b border-white/10 pb-3"
            >
              ABOUT
            </a>
            <a 
              href="#testimonials" 
              onClick={onMobileMenuToggle}
              className="text-lg font-mono tracking-widest uppercase border-b border-white/10 pb-3"
            >
              TESTIMONIALS
            </a>
          </nav>
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => { onCartOpen(); onMobileMenuToggle(); }}
              className="w-full py-3 bg-white text-black font-mono text-xs uppercase tracking-widest text-center"
            >
              LIHAT PAYLOAD ({cartCount} ITEM)
            </button>
            <div className="text-center text-[10px] font-mono text-[#444]">
              PROTOKOL ENKRIPSI AMAN TERVERIFIKASI
            </div>
          </div>
        </div>
      )}
    </>
  );
}
