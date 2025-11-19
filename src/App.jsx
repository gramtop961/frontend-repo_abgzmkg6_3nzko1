import Hero from './components/Hero'
import DescribeToBuild from './components/DescribeToBuild'
import IndustryGrid from './components/IndustryGrid'
import PaymentOS from './components/PaymentOS'
import HowItWorks from './components/HowItWorks'
import PSPaaS from './components/PSPaaS'
import Compliance from './components/Compliance'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.8)]" />
            <span className="text-sm font-semibold tracking-wide text-slate-200">Vibe Finance</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
            <a href="#platform" className="hover:text-white">Platform</a>
            <a href="#industries" className="hover:text-white">Industries</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#compliance" className="hover:text-white">Compliance</a>
          </nav>
          <a href="#get-access" className="rounded-lg bg-blue-500 px-3 py-1.5 text-xs font-medium text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400">Get Early Access</a>
        </div>
      </header>

      <main>
        <Hero />
        <section id="platform"><DescribeToBuild /></section>
        <section id="industries"><IndustryGrid /></section>
        <PaymentOS />
        <section id="how"><HowItWorks /></section>
        <PSPaaS />
        <section id="compliance"><Compliance /></section>
        <CTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-slate-950 py-10 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-xs">© {new Date().getFullYear()} Vibe Finance — Embedded Payments Infrastructure</p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
