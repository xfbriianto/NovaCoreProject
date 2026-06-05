import { Terminal } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../../lib/constants';
import type { Product, Category } from '../../types';

function getStableHash(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = ((hash << 5) - hash + value.charCodeAt(i)) | 0;
  }

  return Math.abs(hash).toString(36).toUpperCase().padStart(6, '0').substring(0, 6);
}

interface ProductsProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
  onAddToCart: (product: Product) => void;
  onInspectProduct: (product: Product) => void;
}

export function Products({ selectedCategory, onCategoryChange, onAddToCart, onInspectProduct }: ProductsProps) {
  const filteredProducts = selectedCategory === 'All Products'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-24 max-w-7xl mx-auto px-4 relative z-10 scroll-mt-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <div className="text-[10px] font-mono tracking-[0.4em] text-[#888] uppercase">LAUNCH MANIFEST</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">
            PREMIUM ARTIFACTS
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 border border-white/10 p-1 bg-black/50 backdrop-blur rounded-sm">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase transition-all rounded-sm ${selectedCategory === cat ? 'bg-white text-black font-semibold' : 'text-[#888] hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Showcase Grid */}
      <div className="space-y-24">
        {filteredProducts.map((product, idx) => (
          <div 
            key={product.id}
            className={`flex flex-col lg:flex-row items-stretch border border-white/10 bg-black/40 rounded-sm overflow-hidden group hover:border-white/20 transition-all duration-300`}
          >
            {/* Product Content Column */}
            <div className="flex-1 p-8 sm:p-12 flex flex-col justify-between space-y-8 relative">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-[#222]">
                ITEM_ID: {product.id.toUpperCase()}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] tracking-widest text-[#888] border border-white/10 px-2 py-0.5 rounded-sm">
                    {product.category.toUpperCase()}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-[#444]">
                    {product.specs.version}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black tracking-wider uppercase">
                  {product.name}
                </h3>

                <p className="font-mono text-xs tracking-widest text-white/50 uppercase">
                  {product.tagline}
                </p>

                <p className="text-[#888] text-sm leading-relaxed max-w-xl">
                  {product.description}
                </p>
              </div>

              {/* Specs Pill Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="space-y-1">
                    <div className="text-[9px] font-mono text-[#444] uppercase tracking-wider">{key}</div>
                    <div className="text-xs font-mono text-[#aaa]">{val}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => onAddToCart(product)}
                  className="px-6 py-3 bg-white text-black font-mono text-xs tracking-widest font-bold uppercase hover:bg-[#888] transition-colors"
                >
                  ACQUIRE LICENSE — ${product.price}
                </button>
                <button
                  onClick={() => onInspectProduct(product)}
                  className="px-6 py-3 bg-transparent text-white font-mono text-xs tracking-widest uppercase border border-white/10 hover:bg-white/5 transition-colors"
                >
                  INSPECT BLUEPRINT
                </button>
              </div>
            </div>

            {/* Cinematic Mockup / Visual Column */}
            <div className="flex-1 bg-[#050505] p-6 sm:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 relative overflow-hidden min-h-[300px]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              
              {/* Interactive Code Editor Box */}
              <div className="relative bg-[#090909] border border-white/10 rounded-sm overflow-hidden p-5 shadow-xl font-mono text-xs text-[#888] z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <span className="text-[10px] tracking-wider text-[#444] uppercase flex items-center gap-2">
                    <Terminal size={12} /> index.ts — telemetry
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                </div>
                <pre className="overflow-x-auto text-left leading-relaxed text-white/90">
                  <code>{product.code}</code>
                </pre>
                
                <div className="mt-6 pt-4 border-t border-white/5 grid grid-cols-2 gap-2 text-[10px] text-[#444]">
                  <div>DEPS COMPLIANT: OK</div>
                  <div>BUILD ARTIFACTS: SECURE</div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 font-mono text-[9px] text-[#222]">
                SYS_BUILD_STABLE // HASH: {getStableHash(product.id)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
