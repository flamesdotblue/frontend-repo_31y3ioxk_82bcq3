import { ArrowRight, ShoppingBag, Calendar } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white">
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-12">
              <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
                Experience independence with Aegis Cane
              </h3>
              <p className="mt-3 text-white/90">
                Get a personal demo or pre-order now. Limited early access slots are available.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-white text-indigo-700 font-semibold shadow hover:shadow-md transition">
                  <ShoppingBag size={18} /> Pre‑Order Now
                </a>
                <a href="#" className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-indigo-700/40 border border-white/20 text-white font-medium hover:bg-indigo-700/50 transition">
                  <Calendar size={18} /> Book a Demo
                </a>
              </div>
            </div>
            <div className="relative p-8 sm:p-12 bg-white/5">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_40%)]" />
              <ul className="relative grid gap-3 text-sm">
                {[
                  'Ultra-lightweight shaft with anti-slip tip',
                  'Dual ultrasonic sensors and adaptive haptics',
                  'SOS with GPS location and voice guidance',
                  'AI-assisted object detection and alerts',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 inline-flex items-center gap-2 text-white/90">
                Learn more <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
