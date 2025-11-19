import { CreditCard, Building, ShieldCheck, Wallet, BarChart3, Boxes } from 'lucide-react';

export default function PaymentOS() {
  const layers = [
    { title: 'Payment Collection', items: 'Bank Transfer • USSD • Airtime • Mobile Wallet • Card • Crypto', icon: <CreditCard className="h-5 w-5" /> },
    { title: 'Merchant Tools', items: 'Smart checkout • Hosted pages • API widgets • In-app SDK', icon: <Building className="h-5 w-5" /> },
    { title: 'Platform Tools', items: 'Marketplace split-payments • Virtual wallets • Sub-merchants', icon: <Boxes className="h-5 w-5" /> },
    { title: 'Compliance Layer', items: 'KYC/KYB onboarding • AML alerts • Transaction screening', icon: <ShieldCheck className="h-5 w-5" /> },
    { title: 'Ledger & Settlement', items: 'Double-entry ledger • Operator/MNO settlement • Excel/CSV export', icon: <Wallet className="h-5 w-5" /> },
    { title: 'Reporting', items: 'Merchant dashboards • API logs • Revenue & commission reports', icon: <BarChart3 className="h-5 w-5" /> },
  ];

  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Embedded Payment OS — Everything Included</h2>
        <div className="mt-8 grid gap-4">
          {layers.map((l) => (
            <div key={l.title} className="flex flex-col gap-2 rounded-2xl border border-slate-700/60 bg-slate-900/40 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="inline-flex items-center gap-2 text-blue-300">
                {l.icon}
                <span className="text-sm font-medium">{l.title}</span>
              </div>
              <p className="text-sm text-slate-300/90">{l.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
