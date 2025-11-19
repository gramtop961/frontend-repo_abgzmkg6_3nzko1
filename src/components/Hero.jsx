import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles, Shield, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(59,130,246,0.30),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-20">
        {/* Top badges */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-3 py-1 text-blue-200 ring-1 ring-blue-400/30">
            <Cpu className="h-3.5 w-3.5" /> API-first • White-label
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-violet-500/10 px-3 py-1 text-violet-200 ring-1 ring-violet-400/30">
            <Sparkles className="h-3.5 w-3.5" /> Describe-to-build AI
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-200 ring-1 ring-emerald-400/30">
            <Shield className="h-3.5 w-3.5" /> Compliance-ready
          </span>
        </div>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Embedded Payments. For Any Platform. Without Building Infrastructure.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-200">
          One API. One integration. AI-built payment infrastructure for marketplaces, platforms, wallets, gaming, SaaS, digital content, utilities, streaming and commerce.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-200">
          <span className="rounded-md border border-blue-400/30 bg-blue-500/10 px-3 py-1.5">Embedded payments across any platform</span>
          <span className="rounded-md border border-blue-400/30 bg-blue-500/10 px-3 py-1.5">PSP-as-a-Service</span>
          <span className="rounded-md border border-blue-400/30 bg-blue-500/10 px-3 py-1.5">Build once — deploy everywhere</span>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#get-access" className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-slate-50 shadow-lg shadow-blue-500/25 transition hover:bg-blue-400">
            Get Early Access
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#demo" className="inline-flex items-center gap-2 rounded-xl bg-violet-500/20 px-5 py-3 text-violet-100 ring-1 ring-violet-400/30 transition hover:bg-violet-500/30">
            Book Demo
          </a>
          <a href="#partner" className="inline-flex items-center gap-2 rounded-xl bg-amber-500/20 px-5 py-3 text-amber-100 ring-1 ring-amber-400/30 transition hover:bg-amber-500/30">
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
}
