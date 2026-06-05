import React, { useState, useEffect } from 'react';
import { X, Lock, CheckCircle } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: (email: string) => void;
}

export function AuthModal({ isOpen, onClose, onAuthSuccess }: AuthModalProps) {
  const [step, setStep] = useState('input');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setStep('input');
      setEmail('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep('processing');
    
    // Simulasi otorisasi payload aman
    setTimeout(() => {
      setStep('success');
      setTimeout(() => {
        onAuthSuccess(email);
        onClose();
      }, 1500);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop blur premium */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      {/* Container Dialog */}
      <div className="relative bg-[#0a0a0a] border border-white/20 rounded-sm max-w-md w-full p-8 z-10 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#888] hover:text-white hover:bg-white/10 rounded-sm transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Tahap 1: Formulir Input Email */}
        {step === 'input' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 border border-white/10 rounded-sm">
                <Lock size={20} className="text-white" />
              </div>
              <div>
                <h2 className="text-lg font-mono font-black tracking-wider uppercase text-white">AUTHORIZATION</h2>
                <p className="text-[10px] font-mono text-[#888]">SECURE ACCESS PROTOCOL</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-mono tracking-widest uppercase text-[#888]">
                  EMAIL ADDRESS
                </label>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-black border border-white/10 px-4 py-3 text-sm font-mono text-white placeholder-[#444] rounded-sm focus:outline-none focus:border-white transition-colors"
                  placeholder="developer@node.xyz"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-white text-black font-mono text-xs tracking-widest font-bold uppercase hover:bg-[#888] transition-colors rounded-sm"
              >
                INITIATE AUTHORIZATION
              </button>
            </form>

            <p className="text-[10px] font-mono text-[#444] text-center uppercase tracking-wider">
              ENKRIPSI END-TO-END AKTIF // DATA DILINDUNGI
            </p>
          </div>
        )}

        {/* Tahap 2: Proses Otentikasi Simulative */}
        {step === 'processing' && (
          <div className="space-y-6 text-center py-8">
            <div className="flex justify-center">
              <div className="w-12 h-12 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-mono font-black tracking-wider uppercase text-white">PROCESSING</h2>
              <p className="text-[10px] font-mono text-[#888]">MEMVERIFIKASI KREDENSIAL...</p>
            </div>
          </div>
        )}

        {/* Tahap 3: Otorisasi Sukses */}
        {step === 'success' && (
          <div className="space-y-6 text-center py-8">
            <div className="flex justify-center">
              <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-sm">
                <CheckCircle size={32} className="text-green-500" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-mono font-black tracking-wider uppercase text-white">AUTHORIZED</h2>
              <p className="text-[10px] font-mono text-[#888]">AKSES DITERIMA</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}