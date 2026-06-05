export function CTA() {
  return (
    <section className="relative py-32 bg-black border-t border-white/10 overflow-hidden z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
      <div className="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
          <span className="text-[9px] font-mono tracking-widest uppercase text-white/70">NOVACORE LAUNCH INITIATION LAYER</span>
        </div>

        <h2 className="text-4xl md:text-7xl font-black tracking-tight leading-none uppercase">
          BUILD FASTER. <br />LAUNCH SOONER.
        </h2>

        <p className="text-[#888] text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
          Hentikan membangun seluruh struktur server, antarmuka, dan database dari awal. Percepat peluncuran roadmap teknologi Anda dengan solusi siap pakai hari ini.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#products"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-mono text-xs tracking-widest font-black uppercase hover:bg-black hover:text-white border border-white transition-all duration-300"
          >
            MULAI SEKARANG JUGA
          </a>
          <a 
            href="#configurator"
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-mono text-xs tracking-widest uppercase hover:bg-white/5 border border-white/10 transition-all duration-300"
          >
            DESIGN PAYLOAD
          </a>
        </div>
      </div>
    </section>
  );
}
