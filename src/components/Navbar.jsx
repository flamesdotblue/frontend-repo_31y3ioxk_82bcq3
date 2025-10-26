import { useEffect } from 'react';
import { Moon, Sun, ShoppingCart, PlayCircle } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, onCTAClick }) {
  // Persist dark mode preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-black/40 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-fuchsia-500 shadow-lg shadow-blue-500/30"></div>
          <span className="font-semibold text-lg tracking-tight text-slate-900 dark:text-slate-100">
            Aegis Cane
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => onCTAClick('demo')}
            className="hidden sm:inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <PlayCircle size={18} />
            <span className="text-sm font-medium">Request Demo</span>
          </button>
          <button
            onClick={() => onCTAClick('buy')}
            className="inline-flex items-center gap-2 h-10 px-3 rounded-lg bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white shadow-md shadow-indigo-600/30 hover:shadow-lg hover:shadow-indigo-600/40 transition-transform active:scale-95"
          >
            <ShoppingCart size={18} />
            <span className="text-sm font-semibold">Buy Now</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
