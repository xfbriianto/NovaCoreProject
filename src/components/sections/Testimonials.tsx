import type { Testimonial } from '../../types';

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      text: "Menggunakan SaaS Boilerplate Pro memotong timeline pengerjaan kami hingga berminggu-minggu. Sistem routing Stripe dan Clerk langsung berfungsi tanpa kendala. Skema tipe-safe yang sempurna.",
      author: "MARCUS CHEN",
      role: "CTO, ORBITAL TECHNOLOGY",
      hash: "0x8fa1"
    },
    {
      text: "Komponen Dasbor UI di sini luar biasa bersih. Konsistensi monokromatiknya memudahkan tim kami dalam memodifikasi dasbor metrik tanpa takut merusak estetika desain dasar.",
      author: "ELENA ROSTOVA",
      role: "LEAD ARCHITECT, APEX DEFI",
      hash: "0x39a0"
    },
    {
      text: "Infrastruktur bot AI di sini sangat modern. Edge routing bekerja sempurna pada node deployment Vercel dan sinkronisasi Pinecone memiliki latensi di bawah 0.04s. Kode yang luar biasa bersih.",
      author: "DAVID VANCE",
      role: "FOUNDER, HYPERLOGIC CORP",
      hash: "0xea12"
    }
  ];

  return (
    <section id="testimonials" className="py-24 max-w-7xl mx-auto px-4 relative z-10 scroll-mt-16">
      <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
        <span className="text-[10px] font-mono tracking-[0.4em] text-[#888] uppercase">TRANSMISSION LOGS</span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">VERIFIED PILOT FEEDBACK</h2>
        <p className="text-[#888] text-sm">
          Tinjau pesan telemetri langsung dari tim yang meluncurkan infrastruktur mereka menggunakan modul NOVACORE.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, idx) => (
          <div 
            key={idx}
            className="border border-white/10 p-8 bg-[#0a0a0a]/40 rounded-sm relative flex flex-col justify-between h-80 hover:border-white/20 transition-all"
          >
            <div className="absolute top-4 right-4 font-mono text-[9px] text-[#222]">
              VERIFIED LOG // {testimonial.hash}
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[10px] text-white">■</span>
                ))}
              </div>
              <p className="text-[#aaa] text-xs leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>

            <div className="border-t border-white/10 pt-4 mt-6">
              <div className="font-mono text-xs font-black tracking-wider text-white">{testimonial.author}</div>
              <div className="font-mono text-[9px] text-[#888] tracking-widest uppercase mt-0.5">{testimonial.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
