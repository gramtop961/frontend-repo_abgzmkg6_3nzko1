import { BadgeCheck, Palette, PanelRight } from 'lucide-react';

export default function PSPaaS() {
  const points = [
    'Own branding',
    'Commission model & revenue share',
    'Merchant dashboards',
    'Onboarding via KYC/KYB flows',
    'Expand to new markets without building rails',
  ];
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Offer Your Own PSP — Powered by Vibe Finance</h2>
        <p className="mt-3 max-w-3xl text-slate-300/90">
          You don’t just integrate payments — you become a payment enabler. White-labeled PSP-as-a-Service for any digital platform, without building core infrastructure.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-slate-200">
              <BadgeCheck className="mt-0.5 h-5 w-5 text-emerald-400" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
