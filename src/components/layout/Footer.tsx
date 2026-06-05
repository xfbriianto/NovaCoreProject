export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020202] py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <a href="#" className="font-mono text-lg font-black tracking-[0.25em] flex items-center gap-2">
            <span className="bg-white text-black px-1.5 py-0.5 rounded-sm">N</span>OVACORE
          </a>
          <p className="text-xs text-[#888] leading-relaxed">
            Arsitektur terdistribusi global yang menyajikan middleware kecerdasan buatan teroptimasi, database multi-tenant tangguh, dan modul dashboard visual premium.
          </p>
          <div className="text-[10px] font-mono text-[#444] space-y-1">
            <div>SYSTEM STABILITY INDEX: 99.98%</div>
            <div>PLATFORM VERSION: v4.8.0-RELEASE</div>
          </div>
        </div>

        <div>
          <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-white font-bold mb-6">RESOURCES</h4>
          <ul className="space-y-3 font-mono text-xs text-[#888]">
            <li><a href="#products" className="hover:text-white transition-colors">EXPLORER</a></li>
            <li><a href="#configurator" className="hover:text-white transition-colors">CONFIGURATOR</a></li>
            <li><a href="#" className="hover:text-white transition-colors">SECURITY COMPLIANCE</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API DIRECTORY</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-white font-bold mb-6">COMPLIANCE</h4>
          <ul className="space-y-3 font-mono text-xs text-[#888]">
            <li><a href="#" className="hover:text-white transition-colors">TERMS OF MISSION</a></li>
            <li><a href="#" className="hover:text-white transition-colors">LICENSE REGISTRY</a></li>
            <li><a href="#" className="hover:text-white transition-colors">PRIVACY MATRIX</a></li>
            <li><a href="#" className="hover:text-white transition-colors">ENCRYPTION POLICY</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-white font-bold mb-6">SYSTEM UPDATES</h4>
          <p className="text-xs text-[#888] leading-relaxed mb-4">
            Dapatkan transmisi telemetri instan serta pemberitahuan rilis minor langsung di inbox Anda.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); }} className="flex gap-2">
            <input 
              type="email" 
              placeholder="developer@node.xyz" 
              className="bg-black border border-white/10 px-3 py-2 text-xs font-mono text-white placeholder-[#444] rounded-sm focus:outline-none focus:border-white flex-1"
            />
            <button 
              type="submit" 
              className="bg-white text-black font-mono text-xs px-3 rounded-sm hover:bg-[#888] transition-colors"
              aria-label="Subscribe"
            >
              SUB
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-[#444] gap-4">
        <div>
          © {new Date().getFullYear()} NOVACORE LABS INC. ALL POWER RESERVED TO MISSION PILOTS.
        </div>
        <div className="flex gap-6">
          <span>SECURE SECTOR ENCRYPTED // SHIELD-LOCK VERIFIED</span>
        </div>
      </div>
    </footer>
  );
}
