import { useState, useEffect } from 'react';
import type { SystemStats } from '../types';

export function useSystemStats(): SystemStats {
  const [stats, setStats] = useState<SystemStats>({
    cpu: 14.2,
    memory: 48.1,
    network: 120.4,
    time: ''
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setStats({
        cpu: parseFloat((10 + Math.random() * 25).toFixed(1)),
        memory: parseFloat((45 + Math.random() * 5).toFixed(1)),
        network: parseFloat((100 + Math.random() * 50).toFixed(1)),
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return stats;
}
