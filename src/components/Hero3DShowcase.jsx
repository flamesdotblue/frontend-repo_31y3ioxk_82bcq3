import React, { useEffect, useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { MotionConfig, motion, useScroll, useTransform } from 'framer-motion';
import { Waves, Cpu, Bell, Eye, Power, Battery, MapPin, Mic, Bluetooth } from 'lucide-react';

// Simple error boundary to gracefully handle Spline load errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {
    if (typeof this.props.onFail === 'function') this.props.onFail();
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}

const hotspots = [
  {
    id: 'handle',
    title: 'Handle Grip',
    subtitle: 'Ergonomic comfort & control',
    icon: Waves,
    position: { top: '62%', left: '28%' },
    points: [
      'Ergonomic grip reduces strain',
      'Haptic vibration motor',
      'Secure wrist strap',
    ],
  },
  {
    id: 'main-module',
    title: 'Main Electronics Module',
    subtitle: 'Smart core that powers everything',
    icon: Cpu,
    position: { top: '52%', left: '53%' },
    points: [
      'One-tap power button',
      'Dual ultrasonic sensors',
      'High-output buzzer',
      'Microcontroller brain',
      'Rechargeable battery',
      'Optional USB-C charging',
    ],
  },
  {
    id: 'gps-gsm',
    title: 'GPS & GSM (Optional)',
    subtitle: 'Locate, guide, and send SOS',
    icon: MapPin,
    position: { top: '40%', left: '70%' },
    points: [
      'Live location tracking',
      'One-press SOS messaging',
      'Turn-by-turn voice guidance',
    ],
  },
  {
    id: 'sensor-array',
    title: 'Front Sensor Array',
    subtitle: 'Ultrasonic eyes that detect obstacles',
    icon: Eye,
    position: { top: '30%', left: '45%' },
    points: [
      'Wide-angle ultrasonic detection',
      'Adaptive vibration feedback',
      'Configurable sensitivity',
    ],
  },
  {
    id: 'shaft',
    title: 'Stick Shaft',
    subtitle: 'Featherlight, durable, and future-ready',
    icon: Bluetooth,
    position: { top: '70%', left: '48%' },
    points: [
      'Lightweight hollow build',
      'Internal wiring tunnel',
      'Optional LED visibility strip',
    ],
  },
  {
    id: 'tip',
    title: 'Tip',
    subtitle: 'Built for everyday streets',
    icon: Bell,
    position: { top: '82%', left: '63%' },
    points: [
      'Durable anti-slip material',
      'Optional vibration module',
      'Optional IR proximity sensor',
    ],
  },
  {
    id: 'smart',
    title: 'Smart Features',
    subtitle: 'Assistive intelligence, always on',
    icon: Cpu,
    position: { top: '48%', left: '38%' },
    points: [
      'AI object detection',
      'Bluetooth connectivity',
      'Natural voice commands',
      'Proactive battery alerts',
    ],
  },
];

export default function Hero3DShowcase() {
  const [active, setActive] = useState(hotspots[1]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const InfoIcon = active?.icon ?? Power;

  // Use the provided, known-working Spline scene
  const sceneUrl = useMemo(
    () => 'https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode',
    []
  );

  // Fallback: if the scene hasn't loaded after 8s, show an illustration instead
  useEffect(() => {
    const t = setTimeout(() => {
      if (!isLoaded) setFailed(true);
    }, 8000);
    return () => clearTimeout(t);
  }, [isLoaded]);

  const FallbackView = (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="text-center">
        <div className="mx-auto h-16 w-16 rounded-full bg-indigo-600/10 flex items-center justify-center">
          <Eye className="text-indigo-600" size={22} />
        </div>
        <p className="mt-3 text-slate-700 dark:text-slate-300 font-medium">Interactive 3D preview unavailable</p>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Please refresh or try again later.</p>
      </div>
    </div>
  );

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative pt-20 sm:pt-24">
        {/* Parallax glow background */}
        <motion.div
          style={{ y }}
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[48rem] w-[48rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)]" />
          <div className="absolute top-40 left-1/4 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.18),transparent_60%)]" />
        </motion.div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Copy */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 dark:border-slate-700/60 px-3 py-1 text-xs text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-900/40 backdrop-blur">
              <Power size={14} /> Smart Guidance, Real Freedom
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              High‑Tech Blind Stick with Assistive Intelligence
            </h1>
            <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
              Navigate confidently with obstacle detection, haptic feedback, GPS SOS, and voice‑first controls — all integrated into a sleek, lightweight design.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white shadow-md shadow-indigo-600/30 hover:shadow-lg hover:shadow-indigo-600/40 transition-transform active:scale-95">
                <Battery size={18} /> Check Availability
              </button>
              <button className="inline-flex items-center gap-2 h-11 px-5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 bg-white/70 dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <Mic size={18} /> Watch Demo
              </button>
            </div>

            {/* Active hotspot summary */}
            <div className="mt-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow">
                  <InfoIcon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{active.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{active.subtitle}</p>
                  <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm text-slate-700 dark:text-slate-300">
                    {active.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 3D viewer with hotspots */}
          <div className="relative h-[70vh] min-h-[460px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
            {!failed ? (
              <ErrorBoundary onFail={() => setFailed(true)} fallback={FallbackView}>
                <Spline
                  scene={sceneUrl}
                  onLoad={() => setIsLoaded(true)}
                  style={{ width: '100%', height: '100%' }}
                />
              </ErrorBoundary>
            ) : (
              FallbackView
            )}

            {/* Ambient gradient overlay (non-blocking) */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent dark:from-black/30" />

            {/* Loading shimmer over canvas until ready */}
            {!isLoaded && !failed && (
              <div className="pointer-events-none absolute inset-0">
                <div className="h-full w-full animate-pulse bg-gradient-to-br from-slate-100/60 to-slate-50/40 dark:from-slate-800/40 dark:to-slate-900/30" />
              </div>
            )}

            {/* Hotspots */}
            {hotspots.map((h) => (
              <button
                key={h.id}
                onClick={() => setActive(h)}
                className={`group absolute -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center h-7 w-7 rounded-full border transition-all ${
                  active.id === h.id
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-600/40 scale-110'
                    : 'bg-white/80 dark:bg-slate-900/70 text-slate-800 dark:text-slate-100 border-slate-300/70 dark:border-slate-700/70 hover:scale-105'
                }`}
                style={{ top: h.position.top, left: h.position.left }}
                aria-label={h.title}
              >
                <div className="absolute inset-0 rounded-full ring-2 ring-indigo-500/0 group-hover:ring-indigo-500/40 transition" />
                <h.icon size={14} />
                {/* Tooltip */}
                <div className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 shadow-md">
                  {h.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
