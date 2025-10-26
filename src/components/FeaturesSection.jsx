import { Bluetooth, Cpu, Mic, Eye, Battery, Shield, Waves, Bell } from 'lucide-react';

const items = [
  {
    icon: Eye,
    title: 'Obstacle Detection',
    desc: 'Front-facing ultrasonic eyes scan the path ahead and respond instantly.',
  },
  {
    icon: Waves,
    title: 'Haptic Guidance',
    desc: 'Adaptive vibrations intensify as obstacles get closer for intuitive navigation.',
  },
  {
    icon: Mic,
    title: 'Voice Commands',
    desc: 'Control modes, ask for battery status, or request directions hands-free.',
  },
  {
    icon: Bluetooth,
    title: 'Seamless Connectivity',
    desc: 'Connect to your phone for GPS guidance, updates, and configuration.',
  },
  {
    icon: Battery,
    title: 'Smart Power',
    desc: 'Efficient battery with fast charging and proactive low-battery alerts.',
  },
  {
    icon: Bell,
    title: 'SOS + Alerts',
    desc: 'One-press SOS with location sharing and audible alert when needed.',
  },
  {
    icon: Shield,
    title: 'Durable Build',
    desc: 'Lightweight shaft with anti-slip tip designed for everyday streets.',
  },
  {
    icon: Cpu,
    title: 'AI Assistance',
    desc: 'On-device intelligence detects objects and improves with updates.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Designed for real-world independence
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            Every detail is purpose-built — from ergonomic grip and haptic feedback to smart modules that guide, protect, and connect.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-5 hover:shadow-xl hover:shadow-indigo-500/10 transition-all"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md">
                <item.icon size={18} />
              </div>
              <h3 className="mt-3 font-semibold text-slate-900 dark:text-slate-100">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
