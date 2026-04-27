import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, User, Bell, X, Sun, Moon, Globe, Settings, Home, Zap, ShoppingBag, Footprints, Drum, History, MapPin, Mail, Award } from 'lucide-react';
import { Language, translations } from '../translations';

interface NavbarProps {
  onNavigate: (href: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  isAdmin: boolean;
  onAdminToggle: () => void;
  appName: string;
  logoUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, language, setLanguage, isAdmin, onAdminToggle, appName, logoUrl }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];
  
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { name: t.nav.home, href: '#home', icon: Home },
    { name: t.nav.training, href: '#training', icon: Footprints },
    { name: t.nav.news, href: '#news', icon: Zap },
    { name: t.nav.shop, href: '#shop', icon: ShoppingBag },
    { name: t.nav.belts, href: '#belts', icon: Award },
    { name: t.nav.history, href: '#history', icon: History },
    { name: t.nav.music, href: '#music', icon: Drum },
    { name: t.nav.locations, href: '#locations', icon: MapPin },
    { name: t.nav.contact, href: '#contact', icon: Mail },
  ];

  const handleNavigate = (href: string) => {
    setIsMenuOpen(false);
    onNavigate(href);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between glass-card border-t-0 border-x-0 rounded-none">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigate('#home')}>
          {logoUrl ? (
            <img src={logoUrl} alt={appName} className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
          ) : (
            <div className="w-8 h-8 bg-brand-primary rounded-sm rotate-45 flex items-center justify-center">
              <div className="w-4 h-4 bg-brand-dark rounded-full" />
            </div>
          )}
          <span className="font-display font-bold text-xl tracking-tighter italic uppercase">
            {appName && appName.includes(' ') ? (
              <>
                {appName.split(' ')[0]}
                <span className="text-brand-primary">{appName.split(' ').slice(1).join(' ')}</span>
              </>
            ) : (
              appName || 'CAPOEIRA'
            )}
          </span>
        </div>
        
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              <button 
                onClick={() => handleNavigate(link.href)}
                className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] hover:text-brand-primary transition-colors"
              >
                <link.icon size={14} />
                {link.name}
              </button>
              {link.href === '#training' && (
                <div className="absolute top-full left-0 mt-2 w-64 p-4 glass-card rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all scale-95 group-hover:scale-100 origin-top shadow-2xl border border-brand-primary/20">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-brand-primary mb-2">Hauptakademie (15. Bezirk)</div>
                  <div className="text-xs text-[var(--text-color)] font-medium mb-3">Kröllgasse 26, 1150 Wien</div>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Kröllgasse+26,+1150+Wien" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] font-bold text-brand-secondary hover:underline"
                  >
                    <MapPin size={12} /> Google Maps Link
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <button 
            onClick={() => setLanguage(language === 'DE' ? 'EN' : language === 'EN' ? 'PT' : 'DE')}
            className="flex items-center gap-1 px-2 py-1 hover:bg-white/10 rounded-lg transition-colors text-[10px] font-bold"
          >
            <Globe size={14} />
            {language}
          </button>

          <button 
            onClick={toggleTheme}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} className="text-brand-dark" /> : <Sun size={18} className="text-[var(--text-muted)]" />}
          </button>

          <button 
            onClick={onAdminToggle}
            className={`p-2 hover:bg-white/10 rounded-full transition-colors ${isAdmin ? 'text-brand-primary' : 'text-[var(--text-muted)]'}`}
            title={t.nav.admin}
          >
            <Settings size={18} />
          </button>

          <button className="p-2 hover:bg-white/10 rounded-full transition-colors hidden sm:block">
            <Bell size={18} className="text-[var(--text-muted)]" />
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors lg:hidden"
          >
            {isMenuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <div key={link.href} className="space-y-2">
                  <button 
                    onClick={() => handleNavigate(link.href)}
                    className="flex items-center gap-4 text-4xl font-display font-bold text-left text-[var(--text-color)] hover:text-brand-primary transition-colors"
                  >
                    <link.icon size={32} className="text-brand-primary" />
                    {link.name}
                  </button>
                  {link.href === '#training' && (
                    <div className="pl-12 space-y-1">
                      <div className="text-[10px] uppercase tracking-widest font-bold text-brand-secondary">Hauptakademie (15. Bezirk)</div>
                      <div className="text-xs text-[var(--text-muted)]">Kröllgasse 26, 1150 Wien</div>
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=Kröllgasse+26,+1150+Wien" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold text-brand-primary flex items-center gap-1"
                      >
                        <MapPin size={10} /> Google Maps
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
