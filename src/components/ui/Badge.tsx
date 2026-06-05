import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline';
}

export function Badge({ children, className = '', variant = 'default' }: BadgeProps) {
  const baseStyles = 'font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-sm';
  const variants = {
    default: 'border border-white/10 text-[#888]',
    outline: 'border border-white/10 text-[#888]'
  };
  
  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
