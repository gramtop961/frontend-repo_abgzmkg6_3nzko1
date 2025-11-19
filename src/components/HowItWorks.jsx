import { ListOrdered, Boxes, PlugZap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Describe or select your use case',
      desc: '“Marketplace with commission split & digital wallet for sellers.”',
      icon: <ListOrdered className="h-5 w-5" />,
    },
    {
      title: 'Vibe Finance generates complete system',
      desc: 'APIs, widgets, documentation, checkout screens, split settlement, ledger, reports, KYC.',
      icon: <Boxes className="h-5 w-5" />,
    },
    {
      title: 'Launch on your platform',
      desc: 'Embed via widget, API, or SDK — or launch fully white-label PSP.',
      icon: <PlugZap className="h-5 w-5" />,
    },
  ];

  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How It Works</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-5">
              <div className="mb-2 inline-flex items-center gap-2 text-blue-300">
                {s.icon}
                <span className="text-sm font-medium">{s.title}</span>
              </div>
              <p className="text-sm text-slate-300/90">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
