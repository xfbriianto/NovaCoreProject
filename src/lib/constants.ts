import { Shield, RefreshCw, Code, Zap, User } from 'lucide-react';
import type { Product, WhyUsItem, Category } from '../types';

export const COLOR_SYSTEM = {
  bg: 'bg-black',
  surface: 'bg-[#0a0a0a]',
  card: 'bg-[#121212]',
  cardHover: 'hover:bg-[#1a1a1a]',
  textPrimary: 'text-white',
  textSecondary: 'text-[#888888]',
  textMuted: 'text-[#444444]',
  border: 'border-white/10',
  borderStrong: 'border-white/20',
  glow: 'shadow-[0_0_20px_rgba(255,255,255,0.05)]'
} as const;

export const PRODUCTS: Product[] = [
  {
    id: 'ai-chatbot-starter',
    name: 'AI CHATBOT STARTER KIT',
    category: 'AI Products',
    price: 189,
    tagline: 'NEXT-GEN LLM ORCHESTRATION PIPELINE',
    description: 'A production-ready conversational AI infrastructure. Built with Next.js, Vercel AI SDK, LangChain, and Pinecone. Includes streaming UI/UX, contextual memory buffers, and cost-tracking middleware.',
    features: ['Streaming UI & Edge Deployment Support', 'Pinecone Vector Database Architecture', 'Advanced Dynamic Memory Orchestration', 'Tailwind & Shadcn/UI Stark Theme'],
    specs: { version: 'v3.1.2', size: '14.2 MB', license: 'MIT Commercial', latency: '0.04s' },
    code: `import { OpenAI } from "langchain";\nconst model = new OpenAI({ modelName: "gpt-4" });\nconst chain = new ConversationChain({ llm: model });`
  },
  {
    id: 'saas-boilerplate-pro',
    name: 'SAAS BOILERPLATE PRO',
    category: 'SaaS Boilerplates',
    price: 299,
    tagline: 'FULL-STACK ENTERPRISE ENGINE',
    description: 'Accelerate production timelines. Features fully integrated Stripe Billing, Clerk Authentication, Prisma Database mapping, Resend notifications, and ready-to-scale dynamic dashboard modules.',
    features: ['Stripe Multi-tier Subscriptions Configured', 'Clerk SSO & Multi-factor Authorization', 'Prisma Schema with PostgreSQL Optimizations', 'Pre-configured CI/CD Deployment Scripts'],
    specs: { version: 'v8.4.0', size: '32.1 MB', license: 'Extended Commercial', latency: '0.08s' },
    code: `export const config = {\n  runtime: "edge",\n  regions: ["iad1", "sfo1"],\n};`
  },
  {
    id: 'dashboard-ui-kit',
    name: 'DASHBOARD UI KIT',
    category: 'UI Kits',
    price: 129,
    tagline: 'HIGH-DENSITY COMPONENT MATRIX',
    description: 'An advanced layout system supporting real-time data flow, canvas metrics, charting modules, and fully customizable dashboard tiles designed for mission-critical developer telemetry.',
    features: ['Over 120 Premium Monochrome Components', 'Recharts Integrations with Fluid Design', 'Configurable Grid System (Drag & Drop Compatible)', 'Sublime Custom Typography Presets'],
    specs: { version: 'v2.0.1', size: '8.4 MB', license: 'Personal/Commercial', latency: '0.02s' },
    code: `<MetricGrid cols={4}>\n  <Card title="CPU Peak" value="98.2%" />\n</MetricGrid>`
  },
  {
    id: 'portfolio-template',
    name: 'PORTFOLIO TEMPLATE',
    category: 'Web Templates',
    price: 79,
    tagline: 'MINIMALIST ARCHITECT SHOWCASE',
    description: 'A stunning, hyper-focused aesthetic designed to host developer assets, blog entries, dynamic interactive snippets, and visual designs with extreme typography hierarchy and ultra-fast page speeds.',
    features: ['Perfect 100/100 Lighthouse Performance Scores', 'Stark Noir Dark Theme Layout Out-of-the-Box', 'Dynamic MDX Blog Processing Engine', 'Interactive Code Sandbox Sandbox Frame'],
    specs: { version: 'v1.5.0', size: '4.8 MB', license: 'MIT License', latency: '0.01s' },
    code: `const metadata = {\n  title: "Dev Portfolio",\n  author: "SpaceX Dev Team"\n};`
  }
];

export const CATEGORIES: Category[] = ['All Products', 'Web Templates', 'UI Kits', 'AI Products', 'SaaS Boilerplates', 'E-books'];

export const WHY_US: WhyUsItem[] = [
  { icon: Shield, title: 'PRODUCTION READY', desc: 'Setiap aset digital lolos uji kepatuhan tipe ketat (TypeScript), aturan linting, serta patch keamanan ter-bundling.' },
  { icon: RefreshCw, title: 'LIFETIME UPDATES', desc: 'Beli sekali saja. Dapatkan akses berkelanjutan untuk rilis minor, pembaruan dependensi, dan penyempurnaan desain secara otomatis.' },
  { icon: Code, title: 'MODERN TECH STACK', desc: 'Dirancang eksklusif menggunakan Tailwind CSS, React Server Components, TypeScript, dan arsitektur edge-native.' },
  { icon: Zap, title: 'HIGH PERFORMANCE', desc: 'Dikonfigurasi penuh untuk menghasilkan zero layout shift, optimasi aset gambar dinamis, serta kecepatan rendering luar biasa.' },
  { icon: User, title: 'DEVELOPER FOCUSED', desc: 'Struktur folder super rapi, anotasi inline yang jelas, ekspor modular, serta panduan deployment yang langsung pakai.' }
];
