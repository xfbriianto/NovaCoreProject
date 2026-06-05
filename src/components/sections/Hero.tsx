import { useState, useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';
import { useSystemStats } from '../../hooks/useSystemStats';
import { PRODUCTS } from '../../lib/constants';

interface HeroProps {
  onAddToCart: (product: any) => void;
}

export function Hero({ onAddToCart }: HeroProps) {
  const stats = useSystemStats();
  const [activeTerminalTab, setActiveTerminalTab] = useState('terminal');
  const [terminalLogs, setTerminalLogs] = useState([
    'NOVACORE MAIN SYSTEMS STANDBY',
    'ESTABLISHING ENCRYPTED DATALINK WITH EDGE INFRASTRUCTURE...',
    'DATALINK SECURED // PING: 0.04ms',
    'MASUKKAN "help" UNTUK MELIHAT DAFTAR PERINTAH KONSOL.'
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const terminalBottomRef = useRef(null);

  const handleTerminalSubmit = (e: any) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.trim().toLowerCase();
    let response: string[] = [];

    switch (cmd) {
      case 'help':
        response = [
          'PERINTAH SISTEM YANG TERSEDIA:',
          '  list       - Menampilkan seluruh aset pengembang premium.',
          '  status     - Memeriksa telemetri sistem, status CPU, dan paket jaringan.',
          '  clear      - Membersihkan riwayat buffer terminal aktif.',
          '  buy [id]   - Memasukkan template premium secara instan ke payload Anda.'
        ];
        break;
      case 'list':
        response = [
          'DAFTAR PRODUK YANG TERSEDIA:',
          ...PRODUCTS.map(p => `  - [${p.id}] : ${p.name} ($${p.price})`)
        ];
        break;
      case 'status':
        response = [
          `STATUS SISTEM: ONLINE`,
          `BEBAN MESIN CPU: AKTIF pada ${stats.cpu}%`,
          `PENGGUNAAN MEMORI: ${stats.memory}%`,
          `LATENSI TERDAFTAR: 0.04ms`,
          `STARK ENGINE: BERJALAN DENGAN STABIL`
        ];
        break;
      case 'clear':
        setTerminalLogs([]);
        setTerminalInput('');
        return;
      default:
        if (cmd.startsWith('buy ')) {
          const prodId = cmd.replace('buy ', '').trim();
          const target = PRODUCTS.find(p => p.id === prodId);
          if (target) {
            onAddToCart(target);
            response = [`SUKSES: Aset [${target.name}] berhasil diintegrasikan ke payload.`];
          } else {
            response = [`ERROR: Identitas aset "${prodId}" tidak dikenali. Gunakan perintah "list".`];
          }
        } else {
          response = [`PERINTAH TIDAK DIKENAL: "${cmd}". Masukkan "help" untuk panduan.`];
        }
    }

    setTerminalLogs(prev => [...prev, `> ${terminalInput}`, ...response]);
    setTerminalInput('');
  };

  useEffect(() => {
    if (terminalBottomRef.current) {
      (terminalBottomRef.current as any).scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalLogs]);

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Subtle Grid Coordinates Overlay */}
      <div className="absolute top-24 left-6 hidden lg:block font-mono text-[10px] text-[#444] leading-relaxed">
        SECURE SECTOR: 0x82A<br />
        SYS_PING: 0.04ms<br />
        NODE: FRA-1
      </div>
      <div className="absolute top-24 right-6 hidden lg:block font-mono text-[10px] text-[#444] text-right leading-relaxed">
        MISSION STATUS: READY<br />
        TELEMETRY: BROADCAST<br />
        DATA-ENC: SEC-6
      </div>

      <div className="max-w-5xl w-full text-center space-y-8 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#888]">NOVACORE GLOBAL LAUNCH SYSTEM ACTIVE</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight leading-none text-white uppercase max-w-4xl mx-auto">
          DIGITAL PRODUCTS <br className="hidden sm:inline"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#888] to-[#222]">FOR MODERN BUILDERS.</span>
        </h1>

        <p className="text-[#888] text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
          Template premium, AI orchestrator, boilerplate SaaS berskala tinggi, dan sumber daya pengembang yang dibangun khusus untuk kreator, startup, serta inovator modern.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <a 
            href="#products"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-mono text-xs tracking-[0.2em] font-semibold uppercase hover:bg-black hover:text-white border border-white transition-all duration-300"
          >
            EXPLORE PRODUCTS
          </a>
          <a 
            href="#configurator"
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-mono text-xs tracking-[0.2em] uppercase hover:bg-white/5 border border-white/10 transition-all duration-300"
          >
            MISSION DESIGNER
          </a>
        </div>
      </div>

      <div className="max-w-4xl w-full mt-16 z-10 px-2 sm:px-4">
        <div className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm overflow-hidden shadow-2xl">
          {/* Console Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#050505]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
              <span className="text-[10px] font-mono text-[#888] tracking-widest uppercase ml-2">CORE-SHELL v2.4</span>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setActiveTerminalTab('terminal')}
                className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 ${activeTerminalTab === 'terminal' ? 'text-white border-b border-white' : 'text-[#444]'}`}
              >
                CONSOLE
              </button>
              <button 
                onClick={() => setActiveTerminalTab('system')}
                className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 ${activeTerminalTab === 'system' ? 'text-white border-b border-white' : 'text-[#444]'}`}
              >
                SYS_STATS
              </button>
            </div>
          </div>

          {/* Console Body */}
          <div className="p-4 h-64 overflow-y-auto font-mono text-xs text-left select-text bg-[#030303] scrollbar-thin scrollbar-thumb-white/10">
            {activeTerminalTab === 'terminal' ? (
              <div className="space-y-1.5">
                {terminalLogs.map((log, i) => (
                  <div 
                    key={i} 
                    className={`whitespace-pre-wrap ${log.startsWith('>') ? 'text-white font-bold' : log.startsWith('  -') ? 'text-[#aaa]' : 'text-[#666]'}`}
                  >
                    {log}
                  </div>
                ))}
                <form onSubmit={handleTerminalSubmit} className="flex items-center pt-2">
                  <span className="text-white mr-2">$</span>
                  <input 
                    type="text" 
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    className="flex-1 bg-transparent text-white focus:outline-none caret-white"
                    placeholder="Masukkan perintah 'help'..."
                    autoComplete="off"
                    spellCheck="false"
                  />
                </form>
                <div ref={terminalBottomRef} />
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 h-full items-center">
                <div className="border border-white/5 p-4 rounded-sm text-center bg-white/[0.01]">
                  <div className="text-[10px] text-[#444] uppercase tracking-widest mb-1">CPU LOAD</div>
                  <div className="text-xl font-bold tracking-tight">{stats.cpu}%</div>
                </div>
                <div className="border border-white/5 p-4 rounded-sm text-center bg-white/[0.01]">
                  <div className="text-[10px] text-[#444] uppercase tracking-widest mb-1">MEM RESERVED</div>
                  <div className="text-xl font-bold tracking-tight">{stats.memory}%</div>
                </div>
                <div className="border border-white/5 p-4 rounded-sm text-center bg-white/[0.01]">
                  <div className="text-[10px] text-[#444] uppercase tracking-widest mb-1">RX PACKETS</div>
                  <div className="text-xl font-bold tracking-tight">{stats.network} Mb/s</div>
                </div>
                <div className="border border-white/5 p-4 rounded-sm text-center bg-white/[0.01]">
                  <div className="text-[10px] text-[#444] uppercase tracking-widest mb-1">TIME NODE</div>
                  <div className="text-sm font-bold tracking-tight truncate">{stats.time || 'SYNCHRONIZING'}</div>
                </div>
              </div>
            )}
          </div>
          
          {/* Console Footer */}
          <div className="flex items-center justify-between px-4 py-2 border-t border-white/10 bg-[#050505] text-[10px] font-mono text-[#444]">
            <span>SSL SECURED TRANSMISSION LAYER</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              CORE NODE: DIRECT LINKED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
