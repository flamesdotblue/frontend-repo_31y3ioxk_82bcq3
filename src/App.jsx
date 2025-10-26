import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero3DShowcase from './components/Hero3DShowcase';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Initialize dark mode from system preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  const handleCTAClick = (type) => {
    const targetId = type === 'buy' ? 'cta' : 'hero';
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 [color-scheme:light] dark:[color-scheme:dark]">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} onCTAClick={handleCTAClick} />

      <main id="hero">
        <Hero3DShowcase />
        <FeaturesSection />
        <div id="cta">
          <CTASection />
        </div>
      </main>

      <footer className="border-t border-black/5 dark:border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-slate-600 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Aegis Cane. Assistive tech for real life.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100">Privacy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100">Terms</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
