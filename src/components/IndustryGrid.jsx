import { Building2, Gamepad2, Repeat, Layout, Cable, Rocket } from 'lucide-react';

export default function IndustryGrid() {
  const rows = [
    { icon: <Building2 className="h-5 w-5" />, name: 'Marketplaces', use: 'Split payments, vendor wallets, escrow, seller onboarding' },
    { icon: <Gamepad2 className="h-5 w-5" />, name: 'iGaming / Streaming', use: 'Multi-rail deposit, instant payout, wallet balance, bonus handling' },
    { icon: <Repeat className="h-5 w-5" />, name: 'SaaS / Subscriptions', use: 'Recurring billing, invoicing, smart tax handling' },
    { icon: <Layout className="h-5 w-5" />, name: 'Digital Content', use: 'Micropayments, airtime, API wallet, affiliate commission' },
    { icon: <Cable className="h-5 w-5" />, name: 'Utility / Travel / Ticketing', use: 'On-platform pay-in/pay-out, mobile money, offline/USSD' },
    { icon: <Rocket className="h-5 w-5" />, name: 'Super apps / Fintechs', use: 'White-label PSP, wallet-as-a-service, compliance-ready' },
  ];
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Built for Platforms That Need Payments</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {rows.map((r) => (
            <div key={r.name} className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-5">
              <div className="mb-2 inline-flex items-center gap-2 text-blue-300">
                {r.icon}
                <span className="text-sm font-medium">{r.name}</span>
              </div>
              <p className="text-sm text-slate-300/90">{r.use}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
