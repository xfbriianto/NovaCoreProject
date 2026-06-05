import { WHY_US } from '../../lib/constants';

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 max-w-7xl mx-auto px-4 relative z-10 scroll-mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="space-y-6 sticky top-24">
          <span className="text-[10px] font-mono tracking-[0.4em] text-[#888] uppercase">PLATFORM PILLARS</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase leading-tight">
            ENGINEERED FOR SUPREME STABILITY.
          </h2>
          <p className="text-[#888] text-sm leading-relaxed">
            Kami beroperasi di luar batasan pasar template biasa. Setiap komponen arsitektur, boilerplate, dan modul database yang kami rilis telah diuji ketat untuk menjamin kepatuhan mutlak saat diluncurkan ke production.
          </p>
          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black font-mono tracking-tighter">0.00%</span>
              <span className="text-[10px] font-mono text-[#888] uppercase tracking-wider">CRITICAL ENGINE FAILURE RUNTIME DATA</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {WHY_US.map((item, idx) => (
            <div 
              key={idx} 
              className="border border-white/10 p-8 bg-[#0a0a0a]/50 rounded-sm hover:border-white/20 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/5 border border-white/10 rounded-sm text-white group-hover:bg-white group-hover:text-black transition-all">
                  <item.icon size={18} />
                </div>
                <h3 className="font-mono text-xs font-bold tracking-widest uppercase">{item.title}</h3>
              </div>
              <p className="text-[#888] text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
