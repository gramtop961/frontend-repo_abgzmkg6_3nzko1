import { FlagTriangleRight, Landmark, IdCard, Scale } from 'lucide-react';

export default function Compliance() {
  const rows = [
    { k: 'AML Risk Flags', v: 'Real-time agent monitoring' },
    { k: 'VAT/Tax Logic', v: 'Nigeria, UAE, UK, EU layouts' },
    { k: 'KYC/KYB Onboarding', v: 'Auto document collection' },
    { k: 'EMI / PSP Licensing', v: 'Exportable compliance scaffolding' },
    { k: 'Ledger Accounting', v: 'IFRS & audit-ready' },
  ];
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Compliance-Ready For Regulated Markets</h2>
        <div className="mt-8 grid gap-3">
          {rows.map((r) => (
            <div key={r.k} className="flex items-center justify-between rounded-2xl border border-slate-700/60 bg-slate-900/40 p-5">
              <span className="text-sm text-blue-300">{r.k}</span>
              <span className="text-sm text-slate-300/90">{r.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
