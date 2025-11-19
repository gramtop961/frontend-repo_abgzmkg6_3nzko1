import { Check, Bot, Layers, FileText } from 'lucide-react';

export default function DescribeToBuild() {
  const items = [
    'API gateway for any payment rail (Bank, MNO, Wallet, Card, Crypto)',
    'Merchant dashboards & settlement logic',
    'Split-payments for platform, affiliates, operators',
    'Double-entry ledger + KYC/KYB compliance flows',
    'Embedded widgets & SDKs for web / app / platform',
  ];

  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-blue-200 ring-1 ring-blue-400/30">
          <Bot className="h-4 w-4" /> Describe It → Vibe Finance Builds It
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <blockquote className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6 text-slate-200 shadow-xl">
              “Connect bank transfer, USSD, Airtime and card payments for my marketplace. Add fee logic, settlement splits, wallet ledger, and compliance. Generate API docs and merchant dashboard.”
            </blockquote>
            <ul className="mt-6 space-y-3">
              {items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-slate-200">
                  <Check className="mt-1 h-5 w-5 flex-none text-emerald-400" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card icon={<Layers className='h-5 w-5' />} title="Widgets & SDKs" desc="Embed on web, app or platform with 1 line." />
            <Card icon={<FileText className='h-5 w-5' />} title="Docs & Dashboards" desc="APIs, merchant portals and logs auto-generated." />
            <Card icon={<Layers className='h-5 w-5' />} title="Split & Ledger" desc="Double-entry, multi-party settlement built-in." />
            <Card icon={<Layers className='h-5 w-5' />} title="Compliance" desc="KYC/KYB, AML, screening out of the box." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-5 text-slate-200 shadow-lg">
      <div className="mb-3 inline-flex items-center gap-2 text-blue-300">
        {icon}
        <span className="text-sm font-medium">{title}</span>
      </div>
      <p className="text-sm text-slate-300/90">{desc}</p>
    </div>
  );
}
