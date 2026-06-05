import { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  tagline: string;
  description: string;
  features: string[];
  specs: {
    version: string;
    size: string;
    license: string;
    latency: string;
  };
  code: string;
}

export interface WhyUsItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ConfigBundle {
  products: string[];
  supportTier: 'standard' | 'mission-control';
  deployment: 'edge' | 'dedicated';
}

export interface SystemStats {
  cpu: number;
  memory: number;
  network: number;
  time: string;
}

export interface CategoryItem {
  title: string;
  desc: string;
  count: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  hash: string;
}

export type Category = 'All Products' | 'Web Templates' | 'UI Kits' | 'AI Products' | 'SaaS Boilerplates' | 'E-books';
