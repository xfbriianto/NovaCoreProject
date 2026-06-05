import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const baseStyles = 'border border-white/10 bg-black/40 rounded-sm';
  const hoverStyles = hover ? 'hover:border-white/20 transition-all duration-300' : '';
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
