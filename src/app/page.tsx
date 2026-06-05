'use client';

import { useState, useEffect } from 'react';
import { Loader2, Radio, ShieldCheck, Cpu } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { BackgroundEffects } from '../components/shared/BackgroundEffects';
import { Hero } from '../components/sections/Hero';
import { TrustedBy } from '../components/sections/TrustedBy';
import { Products } from '../components/sections/Products';
import { MissionConfigurator } from '../components/sections/MissionConfigurator';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Categories } from '../components/sections/Categories';
import { Testimonials } from '../components/sections/Testimonials';
import { CTA } from '../components/sections/CTA';
import { ProductModal } from '../components/modals/ProductModal';
import { CartDrawer } from '../components/modals/CartDrawer';
import { AuthModal } from '../components/modals/AuthModal';
import type { Product, Category, ConfigBundle } from '../types';

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>('All Products');
  const [configBundle, setConfigBundle] = useState<ConfigBundle>({
    products: [],
    supportTier: 'standard',
    deployment: 'edge'
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* Status Autentikasi Pengembang Terintegrasi */
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [developerEmail, setDeveloperEmail] = useState('');

  /* State Pipeline Loading Otorisasi Telemetri */
  const [isAuthorizing, setIsAuthorizing] = useState(false);
  const [authStep, setAuthStep] = useState(0);
  const [authLogs, setAuthLogs] = useState<string[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      if (prev.some(item => item.id === product.id)) return prev;
      return [...prev, product];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart(prev => prev.filter(p => p.id !== productId));
  };

  const handleInspectProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  // Sekuens animasi loading otorisasi payload
  const triggerAuthorizePayload = () => {
    setIsCartOpen(false);
    setIsAuthorizing(true);
    setAuthStep(0);
    setAuthLogs(['[INIT] Memulai jabat tangan otorisasi aman (SSL v3)...']);

    const steps = [
      { log: '[PROCESSING] Mengenkripsi segmen data payload menggunakan kunci AES-256...', delay: 1000 },
      { log: '[ROUTING] Memilih node transmisi edge tercepat (FRA-1)...', delay: 2000 },
      { log: '[VERIFICATION] Menandatangani lisensi kriptografis digital NOVACORE...', delay: 3000 },
      { log: '[SYNC] Menyinkronkan database registri lisensi global...', delay: 4000 },
      { log: '[COMPLETED] OTORISASI BERHASIL // PAYLOAD SIAP DIUNDUH!', delay: 5000 }
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setAuthStep(index + 1);
        setAuthLogs(prev => [...prev, step.log]);
      }, step.delay);
    });
  };

  // Alur Penanganan Checkout Terpadu
  const handleCheckoutInitiation = () => {
    if (!isAuthorized) {
      // Jika belum terautentikasi, buka AuthModal terlebih dahulu
      setIsCartOpen(false);
      setIsAuthModalOpen(true);
    } else {
      // Jika sudah login, langsung lakukan otorisasi payload
      triggerAuthorizePayload();
    }
  };

  const handleAuthSuccess = (email: string) => {
    setIsAuthorized(true);
    setDeveloperEmail(email);
    
    // Otomatis lanjutkan ke pemuatan otorisasi payload setelah penundaan singkat
    setTimeout(() => {
      triggerAuthorizePayload();
    }, 500);
  };

  const closeAuthorizingModal = () => {
    setIsAuthorizing(false);
    setCart([]); // Kosongkan payload / keranjang setelah berhasil deploy
    setAuthLogs([]);
    setAuthStep(0);
  };

  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <BackgroundEffects />
      
      <Header 
        cartCount={cart.length}
        onCartOpen={() => setIsCartOpen(true)}
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      <Hero onAddToCart={handleAddToCart} />
      
      <TrustedBy />
      
      <Products 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onAddToCart={handleAddToCart}
        onInspectProduct={handleInspectProduct}
      />
      
      <Categories onCategorySelect={handleCategorySelect} />
      
      <MissionConfigurator 
        configBundle={configBundle}
        onConfigBundleChange={setConfigBundle}
        onAddToCart={handleAddToCart}
      />
      
      <WhyChooseUs />
      
      <Testimonials />
      
      <CTA />
      
      <Footer />

      <ProductModal 
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* CartDrawer dengan checkout terikat ke handleCheckoutInitiation */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
        onCheckout={handleCheckoutInitiation}
      />

      {/* AuthModal yang mengembalikan nilai email saat sukses */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />

      {/* MODAL: PIPELINE DEPLOYMENT TELEMETRI LAUNCHER */}
      {isAuthorizing && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg">
          <div className="max-w-xl w-full bg-[#050505] border border-white/20 rounded-sm overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            
            {/* Header Telemetri */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black">
              <div className="flex items-center gap-3">
                <Radio className="text-white animate-pulse" size={16} />
                <span className="font-mono text-[10px] tracking-[0.2em] text-white font-bold">CORE SECURE DEPLOYMENT PROTOCOL</span>
              </div>
              <span className="font-mono text-[9px] text-green-500 bg-green-500/10 px-2 py-0.5 rounded-sm">
                ACTIVE PIPELINE
              </span>
            </div>

            {/* Konten Loading */}
            <div className="p-6 sm:p-8 space-y-8">
              
              {/* Animasi Spinner & Telemetri Utama */}
              <div className="flex flex-col items-center justify-center text-center space-y-4 py-4">
                {authStep < 5 ? (
                  <div className="relative flex items-center justify-center">
                    <Loader2 className="text-white animate-spin" size={48} strokeWidth={1} />
                    <Cpu className="absolute text-white/40 animate-pulse" size={20} />
                  </div>
                ) : (
                  <div className="p-3 bg-white text-black rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)] animate-bounce">
                    <ShieldCheck size={36} strokeWidth={1.5} />
                  </div>
                )}
                
                <div className="space-y-1.5">
                  <h4 className="font-mono text-sm font-bold tracking-widest uppercase text-white">
                    {authStep < 5 ? 'OTORISASI DEPLOYMENT SEDANG BERJALAN' : 'DEPLOYMENT ARTIFACT BERHASIL!'}
                  </h4>
                  <p className="text-[11px] font-mono text-[#888]">
                    {authStep < 5 
                      ? `MENYINKRONKAN NODE TRANSMISI: ${Math.min(authStep * 20, 99)}% TERVERIFIKASI`
                      : 'LENGKAP // KUNCI LISENSI DIKIRIM KE AKUN PENGEMBANG'
                    }
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[9px] text-[#444]">
                  <span>TRANSMISSION WEIGHT</span>
                  <span>{authStep * 20}%</span>
                </div>
                <div className="h-[2px] bg-white/10 w-full rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white transition-all duration-500 ease-out"
                    style={{ width: `${authStep * 20}%` }}
                  ></div>
                </div>
              </div>

              {/* Console Logs Real-time */}
              <div className="bg-black border border-white/5 p-4 rounded-sm font-mono text-[10px] text-left space-y-1.5 h-36 overflow-y-auto scrollbar-none select-text">
                {authLogs.map((log, index) => (
                  <div 
                    key={index} 
                    className={index === authStep - 1 ? "text-white font-semibold" : "text-[#555]"}
                  >
                    &gt; {log}
                  </div>
                ))}
              </div>

            </div>

            {/* Footer Otorisasi */}
            <div className="px-6 py-4 border-t border-white/10 bg-black flex items-center justify-between">
              <span className="font-mono text-[9px] text-[#444]">CRYPTO SHIELD: ACTIVE (TLS_AES_256_GCM_SHA384)</span>
              {authStep >= 5 && (
                <button
                  onClick={closeAuthorizingModal}
                  className="px-6 py-2 bg-white text-black font-mono text-[10px] tracking-widest uppercase font-bold hover:bg-[#888] transition-colors rounded-sm"
                >
                  SELESAI & KEMBALI
                </button>
              )}
            </div>

          </div>
        </div>
      )}
    </main>
  );
}