import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-access" className="relative overflow-hidden bg-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(168,85,247,0.20),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-violet-400/30 bg-violet-500/10 p-8 text-center shadow-[0_0_60px_-20px_rgba(139,92,246,0.4)]">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Turn your platform into a payment-enabled platform.</h3>
          <p className="mt-2 text-slate-200">With one API. Or no code at all.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-slate-50 shadow-lg shadow-blue-500/25 transition hover:bg-blue-400">
              Get Early Access <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-xl bg-violet-500/20 px-5 py-3 text-violet-100 ring-1 ring-violet-400/30 transition hover:bg-violet-500/30">
              Book Demo
            </a>
            <a href="#partner" className="inline-flex items-center gap-2 rounded-xl bg-amber-500/20 px-5 py-3 text-amber-100 ring-1 ring-amber-400/30 transition hover:bg-amber-500/30">
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
