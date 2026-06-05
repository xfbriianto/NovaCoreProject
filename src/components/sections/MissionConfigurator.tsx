import { Check } from 'lucide-react';
import { PRODUCTS } from '../../lib/constants';
import type { ConfigBundle, Product } from '../../types';

interface MissionConfiguratorProps {
  configBundle: ConfigBundle;
  onConfigBundleChange: (bundle: ConfigBundle) => void;
  onAddToCart: (product: Product) => void;
}

export function MissionConfigurator({ configBundle, onConfigBundleChange, onAddToCart }: MissionConfiguratorProps) {
  const calculateBundlePrice = () => {
    let total = configBundle.products.reduce((acc, pId) => {
      const product = PRODUCTS.find(p => p.id === pId);
      return acc + (product ? product.price : 0);
    }, 0);

    if (configBundle.supportTier === 'mission-control') total += 150;
    if (configBundle.deployment === 'dedicated') total += 99;

    // Apply bundle discount if more than 2 products selected
    if (configBundle.products.length >= 2) {
      total = Math.round(total * 0.85); // 15% discount
    }

    return total;
  };

  return (
    <section id="configurator" className="py-24 border-y border-white/10 bg-black/60 relative z-10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-mono tracking-[0.4em] text-[#888] uppercase">STARK CUSTOMIZATION TOOL</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">MISSION CONFIGURATOR</h2>
          <p className="text-[#888] text-sm">
            Sesuaikan muatan arsitektur Anda sendiri. Gabungkan sumber daya, tentukan level telemetry, pilih target deployment, dan kalkulasi berat checkout instan di bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Column 1: Product Selection */}
          <div className="border border-white/10 p-6 sm:p-8 bg-black/40 rounded-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono tracking-widest uppercase text-[#888]">STEP 01 / INTEGRATE PRODUCTS</span>
                <span className="text-[10px] font-mono text-[#444]">MULTIPLE PERMITTED</span>
              </div>
              <div className="space-y-3">
                {PRODUCTS.map(p => {
                  const isSelected = configBundle.products.includes(p.id);
                  return (
                    <button
                      key={p.id}
                      onClick={() => {
                        onConfigBundleChange({
                          ...configBundle,
                          products: isSelected 
                            ? configBundle.products.filter(id => id !== p.id)
                            : [...configBundle.products, p.id]
                        });
                      }}
                      className={`w-full p-4 border text-left flex items-center justify-between transition-all rounded-sm ${isSelected ? 'border-white bg-white/5' : 'border-white/10 bg-transparent hover:border-white/20'}`}
                    >
                      <div>
                        <div className="text-xs font-mono font-bold uppercase">{p.name}</div>
                        <div className="text-[10px] text-[#888] mt-1">{p.category.toUpperCase()}</div>
                      </div>
                      <div className="text-xs font-mono font-bold">
                        {isSelected ? <Check size={16} /> : `$${p.price}`}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            <p className="text-[10px] font-mono text-[#444] mt-4">
              * Pilih lebih dari dua aset untuk langsung mengaktifkan diskon bundel sistem sebesar 15%.
            </p>
          </div>

          {/* Column 2: Parameters & Tiers */}
          <div className="border border-white/10 p-6 sm:p-8 bg-black/40 rounded-sm space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono tracking-widest uppercase text-[#888]">STEP 02 / TELEMETRY TIER</span>
                <span className="text-[10px] font-mono text-[#444]">CHOOSE ONE</span>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <button
                  onClick={() => onConfigBundleChange({ ...configBundle, supportTier: 'standard' })}
                  className={`p-4 border text-left transition-all rounded-sm ${configBundle.supportTier === 'standard' ? 'border-white bg-white/5' : 'border-white/10 bg-transparent hover:border-white/20'}`}
                >
                  <div className="text-xs font-mono font-bold uppercase">STANDARD DEPLOYMENT</div>
                  <div className="text-[10px] text-[#888] mt-1">Dukungan rilis dokumentasi core + pelaporan isu via repositori GitHub resmi.</div>
                  <div className="text-xs font-mono mt-2 font-semibold">INCLUDED</div>
                </button>

                <button
                  onClick={() => onConfigBundleChange({ ...configBundle, supportTier: 'mission-control' })}
                  className={`p-4 border text-left transition-all rounded-sm ${configBundle.supportTier === 'mission-control' ? 'border-white bg-white/5' : 'border-white/10 bg-transparent hover:border-white/20'}`}
                >
                  <div className="text-xs font-mono font-bold uppercase">MISSION CONTROL</div>
                  <div className="text-[10px] text-[#888] mt-1">Komunikasi Slack langsung dengan lead architect, live debugging, dan blueprint integrasi khusus.</div>
                  <div className="text-xs font-mono mt-2 font-semibold">+$150</div>
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono tracking-widest uppercase text-[#888]">STEP 03 / DESTINATION NODE</span>
                <span className="text-[10px] font-mono text-[#444]">CHOOSE ONE</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => onConfigBundleChange({ ...configBundle, deployment: 'edge' })}
                  className={`p-4 border text-left transition-all rounded-sm ${configBundle.deployment === 'edge' ? 'border-white bg-white/5' : 'border-white/10 bg-transparent hover:border-white/20'}`}
                >
                  <div className="text-xs font-mono font-bold uppercase text-center">EDGE CLOUD</div>
                  <div className="text-xs font-mono mt-2 text-center text-[#888]">INCLUDED</div>
                </button>

                <button
                  onClick={() => onConfigBundleChange({ ...configBundle, deployment: 'dedicated' })}
                  className={`p-4 border text-left transition-all rounded-sm ${configBundle.deployment === 'dedicated' ? 'border-white bg-white/5' : 'border-white/10 bg-transparent hover:border-white/20'}`}
                >
                  <div className="text-xs font-mono font-bold uppercase text-center">DEDICATED INSTANCE</div>
                  <div className="text-xs font-mono mt-2 text-center text-[#888]">+$99</div>
                </button>
              </div>
            </div>
          </div>

          {/* Column 3: Live Receipt & Command Build */}
          <div className="border border-white p-6 sm:p-8 bg-white text-black rounded-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-black/10 pb-3">
                <span className="text-xs font-mono tracking-widest uppercase font-bold">PAYLOAD TELEMETRY</span>
                <span className="text-[10px] font-mono uppercase bg-black text-white px-1 py-0.5 rounded-sm font-semibold">LIVE CALCULATOR</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {configBundle.products.length === 0 ? (
                  <div className="text-center py-8 text-[#888]">Belum ada modul dipilih. Klik paket di atas.</div>
                ) : (
                  <div className="space-y-2">
                    <div className="font-bold border-b border-black/10 pb-1 uppercase text-[10px]">INTEGRATED SOURCE CODE:</div>
                    {configBundle.products.map(pId => {
                      const product = PRODUCTS.find(p => p.id === pId);
                      return (
                        <div key={pId} className="flex justify-between text-[#333]">
                          <span>- {product?.name.substring(0, 15)}...</span>
                          <span>${product?.price}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="pt-2 border-t border-black/10 space-y-1">
                  <div className="flex justify-between text-[#333]">
                    <span>SUPPORT CHANNEL:</span>
                    <span className="uppercase font-bold">{configBundle.supportTier}</span>
                  </div>
                  <div className="flex justify-between text-[#333]">
                    <span>DEPLOY INFRASTRUCTURE:</span>
                    <span className="uppercase font-bold">{configBundle.deployment}</span>
                  </div>
                </div>

                {configBundle.products.length >= 2 && (
                  <div className="text-green-700 text-[10px] font-bold uppercase bg-green-50 p-2 rounded-sm text-center">
                    ✓ DISKON BUNDEL 15% BERHASIL DIAPLIKASIKAN
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-end justify-between border-t border-black/20 pt-4">
                <div className="font-mono text-xs font-semibold uppercase">ESTIMASI TOTAL BUNDEL:</div>
                <div className="text-3xl font-black font-mono tracking-tighter">${calculateBundlePrice()}</div>
              </div>

              <button
                disabled={configBundle.products.length === 0}
                onClick={() => {
                  const mockBundleProduct: Product = {
                    id: `custom-bundle-${Date.now()}`,
                    name: `CUSTOM BUNDLE (${configBundle.products.length} PRODUCTS)`,
                    price: calculateBundlePrice(),
                    category: 'Custom Bundle',
                    tagline: 'TAILORED DIGITAL ARCHITECTURE SYSTEM',
                    description: 'Paket blueprint kustomisasi pilihan Anda dengan konfigurasi deployment optimal.',
                    features: ['Custom deployment package', 'Telemetry-enabled build', 'Edge-ready configuration', 'Mission control support'],
                    specs: { version: 'v1.0.0', size: 'Varies', license: 'Extended Multi-use', latency: '0.01s' },
                    code: `// Custom Build Generated\nconst config = {\n  products: ${JSON.stringify(configBundle.products)},\n  tier: "${configBundle.supportTier}"\n}`
                  };
                  onAddToCart(mockBundleProduct);
                }}
                className="w-full py-4 bg-black text-white font-mono text-xs tracking-widest font-black uppercase border border-black hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                MASUKKAN KONFIGURASI KE PAYLOAD
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
