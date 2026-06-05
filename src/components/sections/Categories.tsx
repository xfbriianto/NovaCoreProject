import { ChevronRight } from 'lucide-react';
import type { Category } from '../../types';

interface CategoriesProps {
  onCategorySelect: (category: Category) => void;
}

export function Categories({ onCategorySelect }: CategoriesProps) {
  const categories = [
    { title: 'WEB TEMPLATES', desc: 'Arsitektur layout minimalis dengan optimalisasi performa tinggi serta dukungan server rendering bawaan.', count: '14 Assets', category: 'Web Templates' as Category },
    { title: 'UI KITS', desc: 'Komponen UI berkualitas tinggi yang kompatibel dengan Tailwind CSS untuk membangun dasbor visual yang kompleks.', count: '8 Assets', category: 'UI Kits' as Category },
    { title: 'AI PRODUCTS', desc: 'Blueprint integrasi API LLM, indexing database vektor, dan middleware cerdas yang adaptif.', count: '12 Assets', category: 'AI Products' as Category },
    { title: 'SAAS BOILERPLATES', desc: 'Sistem SaaS siap pakai yang dilengkapi dengan integrasi pembayaran Stripe, autentikasi Clerk, dan orkestrasi database.', count: '6 Assets', category: 'SaaS Boilerplates' as Category },
    { title: 'E-BOOKS / REFERENCE', desc: 'Panduan referensi mendalam mengenai skalabilitas infrastruktur web edge dan arsitektur kode bersih.', count: '5 Assets', category: 'E-books' as Category }
  ];

  return (
    <section id="categories" className="py-24 bg-[#050505] border-t border-white/10 relative z-10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-mono tracking-[0.4em] text-[#888] uppercase">DEEP EXPLORATION</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">SYSTEM CATEGORIES</h2>
          <p className="text-[#888] text-sm">
            Temukan koleksi paket yang dikustomisasi sesuai dengan kebutuhan proyek spesifik Anda dalam ekosistem modern.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <div 
              key={idx}
              className="border border-white/10 p-8 bg-black hover:bg-white/5 transition-all flex flex-col justify-between h-64 group cursor-pointer"
              onClick={() => {
                onCategorySelect(category.category);
                const el = document.getElementById('products');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-mono text-[#444] uppercase tracking-wider">MODULE / 0{idx+1}</span>
                  <span className="text-[10px] font-mono border border-white/10 px-2 py-0.5 rounded-sm text-[#888] group-hover:border-white/40 transition-colors">
                    {category.count}
                  </span>
                </div>
                <h3 className="text-lg font-black tracking-widest uppercase mb-4 text-white group-hover:text-white transition-colors">
                  {category.title}
                </h3>
                <p className="text-[#888] text-xs leading-relaxed line-clamp-3">
                  {category.desc}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#444] group-hover:text-white transition-colors pt-4">
                KONSULTASI INVENTARIS <ChevronRight size={10} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
