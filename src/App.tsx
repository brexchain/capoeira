import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { NewsCard } from './components/NewsCard';
import { ShopModal } from './components/ShopModal';
import { MOCK_NEWS, MOCK_TRAININGS } from './constants';
import { summarizeNews } from './lib/gemini';
import { Sparkles, ChevronRight, Play, Trophy, Target, Zap, MapPin, MessageCircle, AlertCircle, Save, Trash2, Plus, X, ExternalLink, Palette, Home, ShoppingBag, Footprints } from 'lucide-react';
import { Language, translations } from './translations';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('capoeira_lang');
    return (saved as Language) || 'DE';
  });
  const t = translations[language];

  const [isAdmin, setIsAdmin] = useState(false);
  
  const [news, setNews] = useState(() => {
    const saved = localStorage.getItem('capoeira_news');
    return saved ? JSON.parse(saved) : MOCK_NEWS;
  });

  const [trainings, setTrainings] = useState(() => {
    const saved = localStorage.getItem('capoeira_trainings');
    return saved ? JSON.parse(saved) : MOCK_TRAININGS;
  });

  const [locations, setLocations] = useState(() => {
    const saved = localStorage.getItem('capoeira_locations');
    return saved ? JSON.parse(saved) : [
      { id: '1', name: 'Hauptakademie', addr: 'Kröllgasse 26, 1150 Wien', mapUrl: 'https://maps.google.com' },
      { id: '2', name: 'WUK', addr: 'Währinger Straße 59, 1090 Wien', mapUrl: 'https://maps.google.com' },
      { id: '3', name: 'Vorgartenstraße', addr: 'Vorgartenstraße 95, 1200 Wien', mapUrl: 'https://maps.google.com' },
    ];
  });

  const [belts, setBelts] = useState(() => {
    const saved = localStorage.getItem('capoeira_belts');
    return saved ? JSON.parse(saved) : translations[language].belts.levels;
  });

  const [shopItems, setShopItems] = useState(() => {
    const saved = localStorage.getItem('capoeira_shop');
    return saved ? JSON.parse(saved) : [
      { id: '1', name: 'Berimbau T-Shirt', price: '25€', imageUrl: 'https://picsum.photos/seed/tshirt/400/400', category: 'Apparel' },
      { id: '2', name: 'Berimbau Completo', price: '80€', imageUrl: 'https://picsum.photos/seed/berimbau/400/400', category: 'Instruments' },
      { id: '3', name: 'Pandeiro', price: '45€', imageUrl: 'https://picsum.photos/seed/pandeiro/400/400', category: 'Instruments' },
      { id: '4', name: 'Atabaque', price: '250€', imageUrl: 'https://picsum.photos/seed/atabaque/400/400', category: 'Instruments' },
    ];
  });

  const [promo, setPromo] = useState(() => {
    const saved = localStorage.getItem('capoeira_promo');
    return saved ? JSON.parse(saved) : { text: 'Monatsroda am 19. April! Alle Level willkommen.', active: true };
  });

  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('capoeira_settings');
    const defaults = { 
      appName: 'CAPOEIRA WIEN',
      logoUrl: 'https://capoeiravienna.at/wp-content/themes/capoeiravienna/images/header-logo.png',
      primaryColor: '#FF6A00', 
      secondaryColor: '#00D4FF',
      whatsappNumber: '+436601234567',
      instagramUrl: 'https://instagram.com/capoeirawien',
      bgUrl: 'https://picsum.photos/seed/vibrant/1920/1080?blur=4',
      bgType: 'image',
      bodyImageUrl: 'https://picsum.photos/seed/capoeira/1200/600',
      historyImageUrl: 'https://picsum.photos/seed/history/800/400',
      urgentBanner: {
        text: 'Training heute entfällt wegen Feiertag!',
        active: false,
        color: '#ff0000'
      }
    };
    return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
  });

  const [activeTab, setActiveTab] = useState<'news' | 'trainings'>(() => {
    const saved = localStorage.getItem('capoeira_active_tab');
    return (saved as 'news' | 'trainings') || 'news';
  });

  const [summaries, setSummaries] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem('capoeira_summaries');
    return saved ? JSON.parse(saved) : {};
  });

  const [isSummarizing, setIsSummarizing] = useState<string | null>(null);
  const [contactTopic, setContactTopic] = useState<string>('trial');

  const [isShopModalOpen, setIsShopModalOpen] = useState(false);
  const [selectedShopItem, setSelectedShopItem] = useState<any>(null);

  useEffect(() => {
    localStorage.setItem('capoeira_lang', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('capoeira_news', JSON.stringify(news));
  }, [news]);

  useEffect(() => {
    localStorage.setItem('capoeira_trainings', JSON.stringify(trainings));
  }, [trainings]);

  useEffect(() => {
    localStorage.setItem('capoeira_locations', JSON.stringify(locations));
  }, [locations]);

  useEffect(() => {
    localStorage.setItem('capoeira_belts', JSON.stringify(belts));
  }, [belts]);

  useEffect(() => {
    localStorage.setItem('capoeira_shop', JSON.stringify(shopItems));
  }, [shopItems]);

  useEffect(() => {
    localStorage.setItem('capoeira_promo', JSON.stringify(promo));
  }, [promo]);

  useEffect(() => {
    localStorage.setItem('capoeira_settings', JSON.stringify(settings));
    // Update CSS variables for branding
    document.documentElement.style.setProperty('--color-brand-primary', settings.primaryColor);
    document.documentElement.style.setProperty('--color-brand-secondary', settings.secondaryColor);
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('capoeira_active_tab', activeTab);
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem('capoeira_summaries', JSON.stringify(summaries));
  }, [summaries]);

  const handleSummarize = async (id: string, title: string, excerpt: string) => {
    if (summaries[id]) return;
    setIsSummarizing(id);
    const summary = await summarizeNews(title, excerpt);
    setSummaries(prev => ({ ...prev, [id]: summary }));
    setIsSummarizing(null);
  };

  const handleNavigate = (href: string) => {
    if (href === '#training') setActiveTab('trainings');
    if (href === '#news') setActiveTab('news');
    
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 10);
  };

  const handleWhatsApp = (trainingName: string) => {
    const msg = encodeURIComponent(`${t.training.whatsappMsg}${trainingName}`);
    window.open(`https://wa.me/${settings.whatsappNumber.replace(/\+/g, '')}?text=${msg}`, '_blank');
  };

  const handleShopOrder = (item: any) => {
    setSelectedShopItem(item);
    setIsShopModalOpen(true);
  };

  return (
    <div className="min-h-screen pb-24">
      <Navbar 
        onNavigate={handleNavigate} 
        language={language} 
        setLanguage={setLanguage}
        isAdmin={isAdmin}
        onAdminToggle={() => setIsAdmin(!isAdmin)}
        appName={settings.appName}
        logoUrl={settings.logoUrl}
      />
      
      {/* Urgent Banner */}
      <AnimatePresence>
        {settings.urgentBanner?.active && (
          <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="fixed top-0 left-0 right-0 z-[100] px-6 py-3 flex items-center justify-between shadow-2xl"
            style={{ backgroundColor: settings.urgentBanner.color }}
          >
            <div className="flex items-center gap-3 text-white font-bold text-sm">
              <AlertCircle size={20} className="animate-pulse" />
              <span className="uppercase tracking-tighter">{settings.urgentBanner.text}</span>
            </div>
            <button 
              onClick={() => setSettings({ ...settings, urgentBanner: { ...settings.urgentBanner, active: false } })}
              className="p-1 hover:bg-black/10 rounded-full text-white"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Promo Banner */}
      <AnimatePresence>
        {promo.active && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-20 left-0 right-0 z-40 bg-brand-primary text-brand-dark px-6 py-2 flex items-center justify-between shadow-lg"
          >
            <div className="flex items-center gap-2 text-xs font-bold">
              <AlertCircle size={14} />
              <span className="uppercase tracking-wider">{t.promo.urgent}:</span>
              <span>{promo.text}</span>
            </div>
            <button onClick={() => setPromo({ ...promo, active: false })} className="p-1 hover:bg-black/10 rounded-full">
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Panel Overlay */}
      <AnimatePresence>
        {isAdmin && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-brand-dark/95 backdrop-blur-xl overflow-y-auto p-6"
          >
            <div className="max-w-4xl mx-auto space-y-12 pb-24">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <h2 className="text-4xl font-display font-bold uppercase tracking-tighter">Admin <span className="text-brand-primary">Panel</span></h2>
                <button onClick={() => setIsAdmin(false)} className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                  <X size={24} />
                </button>
              </div>

              {/* Urgent Banner Settings */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <AlertCircle size={20} className="text-red-500" /> Urgent News Banner
                </h3>
                <div className="glass-card p-6 rounded-3xl space-y-4 border-2 border-red-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input 
                      type="text" 
                      value={settings.urgentBanner?.text}
                      onChange={(e) => setSettings({ ...settings, urgentBanner: { ...settings.urgentBanner, text: e.target.value } })}
                      className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-red-500"
                      placeholder="Urgent message (e.g. Training Cancelled)"
                    />
                    <div className="flex items-center gap-2">
                      <input 
                        type="color" 
                        value={settings.urgentBanner?.color}
                        onChange={(e) => setSettings({ ...settings, urgentBanner: { ...settings.urgentBanner, color: e.target.value } })}
                        className="w-10 h-10 rounded-lg overflow-hidden bg-transparent border-none cursor-pointer"
                      />
                      <button 
                        onClick={() => setSettings({ ...settings, urgentBanner: { ...settings.urgentBanner, active: !settings.urgentBanner?.active } })}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors ${settings.urgentBanner?.active ? 'bg-red-500 text-white' : 'bg-white/10 text-white/40'}`}
                      >
                        {settings.urgentBanner?.active ? 'Active' : 'Inactive'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Promo Settings */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <AlertCircle size={20} className="text-brand-primary" /> Promo Banner
                </h3>
                <div className="glass-card p-6 rounded-3xl space-y-4">
                  <div className="flex items-center gap-4">
                    <input 
                      type="text" 
                      value={promo.text}
                      onChange={(e) => setPromo({ ...promo, text: e.target.value })}
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary"
                      placeholder="Promo text..."
                    />
                    <button 
                      onClick={() => setPromo({ ...promo, active: !promo.active })}
                      className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors ${promo.active ? 'bg-brand-primary text-brand-dark' : 'bg-white/10 text-white/40'}`}
                    >
                      {promo.active ? 'Active' : 'Inactive'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Global Settings */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Palette size={20} className="text-brand-primary" /> Global Branding & Settings
                </h3>
                <div className="glass-card p-6 rounded-3xl space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">App Name / Title</label>
                      <input 
                        type="text" 
                        value={settings.appName}
                        onChange={(e) => setSettings({ ...settings, appName: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Logo URL</label>
                      <input 
                        type="text" 
                        value={settings.logoUrl}
                        onChange={(e) => setSettings({ ...settings, logoUrl: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary"
                        placeholder="https://..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Primary Color</label>
                      <div className="flex items-center gap-3">
                        <input 
                          type="color" 
                          value={settings.primaryColor}
                          onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
                          className="w-10 h-10 rounded-lg overflow-hidden bg-transparent border-none cursor-pointer"
                        />
                        <span className="text-sm font-mono">{settings.primaryColor}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Secondary Color</label>
                      <div className="flex items-center gap-3">
                        <input 
                          type="color" 
                          value={settings.secondaryColor}
                          onChange={(e) => setSettings({ ...settings, secondaryColor: e.target.value })}
                          className="w-10 h-10 rounded-lg overflow-hidden bg-transparent border-none cursor-pointer"
                        />
                        <span className="text-sm font-mono">{settings.secondaryColor}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Background URL (Hero)</label>
                      <input 
                        type="text" 
                        value={settings.bgUrl}
                        onChange={(e) => setSettings({ ...settings, bgUrl: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary"
                        placeholder="https://..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Hero Background Type</label>
                      <div className="flex bg-white/5 rounded-xl p-1">
                        <button 
                          onClick={() => setSettings({ ...settings, bgType: 'image' })}
                          className={`flex-1 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${settings.bgType === 'image' ? 'bg-brand-primary text-brand-dark' : 'text-white/40'}`}
                        >
                          Image
                        </button>
                        <button 
                          onClick={() => setSettings({ ...settings, bgType: 'video' })}
                          className={`flex-1 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${settings.bgType === 'video' ? 'bg-brand-primary text-brand-dark' : 'text-white/40'}`}
                        >
                          Video
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Body Section Image URL</label>
                      <input 
                        type="text" 
                        value={settings.bodyImageUrl}
                        onChange={(e) => setSettings({ ...settings, bodyImageUrl: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary"
                        placeholder="https://..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">History Section Image URL</label>
                      <input 
                        type="text" 
                        value={settings.historyImageUrl}
                        onChange={(e) => setSettings({ ...settings, historyImageUrl: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary"
                        placeholder="https://..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">WhatsApp Number</label>
                      <input 
                        type="text" 
                        value={settings.whatsappNumber}
                        onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Instagram URL</label>
                      <input 
                        type="text" 
                        value={settings.instagramUrl}
                        onChange={(e) => setSettings({ ...settings, instagramUrl: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Training Management */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Footprints size={20} className="text-brand-primary" /> Training Schedule
                  </h3>
                  <button 
                    onClick={() => setTrainings([{ id: Date.now().toString(), name: 'New Training', day: 'Montag', time: '18:00 - 20:00', location: 'Kröllgasse', coach: 'Mestre', category: 'Erwachsene' }, ...trainings])}
                    className="flex items-center gap-2 px-4 py-2 bg-brand-primary text-brand-dark rounded-xl text-xs font-bold uppercase tracking-widest"
                  >
                    <Plus size={16} /> Add Session
                  </button>
                </div>
                <div className="grid gap-4">
                  {trainings.map((session: any, idx: number) => (
                    <div key={session.id} className="glass-card p-6 rounded-3xl space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input 
                          type="text" 
                          value={session.name}
                          onChange={(e) => {
                            const newT = [...trainings];
                            newT[idx].name = e.target.value;
                            setTrainings(newT);
                          }}
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary font-bold"
                          placeholder="Name"
                        />
                        <select 
                          value={session.day}
                          onChange={(e) => {
                            const newT = [...trainings];
                            newT[idx].day = e.target.value;
                            setTrainings(newT);
                          }}
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary"
                        >
                          {['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'].map(d => <option key={d} value={d} className="bg-brand-dark">{d}</option>)}
                        </select>
                        <input 
                          type="text" 
                          value={session.time}
                          onChange={(e) => {
                            const newT = [...trainings];
                            newT[idx].time = e.target.value;
                            setTrainings(newT);
                          }}
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary"
                          placeholder="Time"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input 
                          type="text" 
                          value={session.location}
                          onChange={(e) => {
                            const newT = [...trainings];
                            newT[idx].location = e.target.value;
                            setTrainings(newT);
                          }}
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary"
                          placeholder="Location Name"
                        />
                        <input 
                          type="text" 
                          value={session.coach}
                          onChange={(e) => {
                            const newT = [...trainings];
                            newT[idx].coach = e.target.value;
                            setTrainings(newT);
                          }}
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary"
                          placeholder="Coach"
                        />
                      </div>
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => setTrainings(trainings.filter((_: any, i: number) => i !== idx))}
                          className="p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Management */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <MapPin size={20} className="text-brand-primary" /> Locations
                  </h3>
                  <button 
                    onClick={() => setLocations([{ id: Date.now().toString(), name: 'New Location', addr: 'Address...', mapUrl: 'https://maps.google.com' }, ...locations])}
                    className="flex items-center gap-2 px-4 py-2 bg-brand-primary text-brand-dark rounded-xl text-xs font-bold uppercase tracking-widest"
                  >
                    <Plus size={16} /> Add Location
                  </button>
                </div>
                <div className="grid gap-4">
                  {locations.map((loc: any, idx: number) => (
                    <div key={loc.id} className="glass-card p-6 rounded-3xl space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input 
                          type="text" 
                          value={loc.name}
                          onChange={(e) => {
                            const newL = [...locations];
                            newL[idx].name = e.target.value;
                            setLocations(newL);
                          }}
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary font-bold"
                          placeholder="Location Name"
                        />
                        <input 
                          type="text" 
                          value={loc.addr}
                          onChange={(e) => {
                            const newL = [...locations];
                            newL[idx].addr = e.target.value;
                            setLocations(newL);
                          }}
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary"
                          placeholder="Address"
                        />
                      </div>
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => setLocations(locations.filter((_: any, i: number) => i !== idx))}
                          className="p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Belt Management */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Trophy size={20} className="text-brand-primary" /> Belt System
                  </h3>
                  <button 
                    onClick={() => setBelts([...belts, { color: 'New Belt', meaning: 'Description...' }])}
                    className="flex items-center gap-2 px-4 py-2 bg-brand-primary text-brand-dark rounded-xl text-xs font-bold uppercase tracking-widest"
                  >
                    <Plus size={16} /> Add Belt
                  </button>
                </div>
                <div className="grid gap-4">
                  {belts.map((belt: any, idx: number) => (
                    <div key={idx} className="glass-card p-6 rounded-3xl space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input 
                          type="text" 
                          value={belt.color}
                          onChange={(e) => {
                            const newB = [...belts];
                            newB[idx].color = e.target.value;
                            setBelts(newB);
                          }}
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary font-bold"
                          placeholder="Belt Color"
                        />
                        <input 
                          type="text" 
                          value={belt.meaning}
                          onChange={(e) => {
                            const newB = [...belts];
                            newB[idx].meaning = e.target.value;
                            setBelts(newB);
                          }}
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary"
                          placeholder="Meaning/Level"
                        />
                      </div>
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => setBelts(belts.filter((_: any, i: number) => i !== idx))}
                          className="p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* News Management */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <MessageCircle size={20} className="text-brand-primary" /> News Articles
                  </h3>
                  <button 
                    onClick={() => setNews([{ id: Date.now().toString(), title: 'New Article', excerpt: 'Edit me...', category: 'Update', date: new Date().toISOString().split('T')[0], imageUrl: 'https://picsum.photos/seed/new/800/600' }, ...news])}
                    className="flex items-center gap-2 px-4 py-2 bg-brand-primary text-brand-dark rounded-xl text-xs font-bold uppercase tracking-widest"
                  >
                    <Plus size={16} /> Add News
                  </button>
                </div>
                <div className="grid gap-4">
                  {news.map((item: any, idx: number) => (
                    <div key={item.id} className="glass-card p-6 rounded-3xl space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input 
                          type="text" 
                          value={item.title}
                          onChange={(e) => {
                            const newNews = [...news];
                            newNews[idx].title = e.target.value;
                            setNews(newNews);
                          }}
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary font-bold"
                          placeholder="Title"
                        />
                        <input 
                          type="text" 
                          value={item.imageUrl}
                          onChange={(e) => {
                            const newNews = [...news];
                            newNews[idx].imageUrl = e.target.value;
                            setNews(newNews);
                          }}
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary"
                          placeholder="Image URL"
                        />
                      </div>
                      <textarea 
                        value={item.excerpt}
                        onChange={(e) => {
                          const newNews = [...news];
                          newNews[idx].excerpt = e.target.value;
                          setNews(newNews);
                        }}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary h-24"
                        placeholder="Excerpt"
                      />
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => setNews(news.filter((_: any, i: number) => i !== idx))}
                          className="p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shop Management */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Palette size={20} className="text-brand-primary" /> Shop Items
                  </h3>
                  <button 
                    onClick={() => setShopItems([{ id: Date.now().toString(), name: 'New Item', price: '0€', imageUrl: 'https://picsum.photos/seed/item/400/400', category: 'General' }, ...shopItems])}
                    className="flex items-center gap-2 px-4 py-2 bg-brand-primary text-brand-dark rounded-xl text-xs font-bold uppercase tracking-widest"
                  >
                    <Plus size={16} /> Add Item
                  </button>
                </div>
                <div className="grid gap-4">
                  {shopItems.map((item: any, idx: number) => (
                    <div key={item.id} className="glass-card p-6 rounded-3xl space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input 
                          type="text" 
                          value={item.name}
                          onChange={(e) => {
                            const newShop = [...shopItems];
                            newShop[idx].name = e.target.value;
                            setShopItems(newShop);
                          }}
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary font-bold"
                          placeholder="Item Name"
                        />
                        <input 
                          type="text" 
                          value={item.price}
                          onChange={(e) => {
                            const newShop = [...shopItems];
                            newShop[idx].price = e.target.value;
                            setShopItems(newShop);
                          }}
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary"
                          placeholder="Price (e.g. 25€)"
                        />
                        <input 
                          type="text" 
                          value={item.imageUrl}
                          onChange={(e) => {
                            const newShop = [...shopItems];
                            newShop[idx].imageUrl = e.target.value;
                            setShopItems(newShop);
                          }}
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary"
                          placeholder="Image URL"
                        />
                      </div>
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => setShopItems(shopItems.filter((_: any, i: number) => i !== idx))}
                          className="p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header id="home" className="relative pt-40 pb-12 px-6 overflow-hidden min-h-[80vh] flex flex-col justify-center">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          {settings.bgType === 'video' ? (
            <video 
              src={settings.bgUrl} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-30"
            />
          ) : (
            <img 
              src={settings.bgUrl} 
              className="w-full h-full object-cover opacity-30" 
              alt="Background"
              referrerPolicy="no-referrer"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 via-brand-dark/80 to-brand-dark" />
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            {t.hero.badge}
          </div>
          
          <h1 className="text-6xl font-display font-bold leading-[0.9] tracking-tighter uppercase">
            {t.hero.title} <br />
            <span className="text-gradient">{settings.appName}</span>
          </h1>
          
          <p className="text-lg text-[var(--text-muted)] font-light max-w-xs leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleNavigate('#training')}
              className="px-8 py-4 bg-brand-primary text-brand-dark font-bold rounded-2xl flex items-center gap-2 neon-glow transition-transform active:scale-95"
            >
              {t.hero.cta} <ChevronRight size={18} />
            </button>
            <button className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
              <Play size={20} fill="currentColor" />
            </button>
          </div>
        </motion.div>
      </header>

      {/* Stats Bar */}
      <section id="stats" className="px-6 py-8">
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: Trophy, label: t.stats.years, val: '30+' },
            { icon: Target, label: t.stats.locations, val: '5' },
            { icon: Zap, label: t.stats.classes, val: '12' },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-4 rounded-2xl flex flex-col items-center gap-1">
              <stat.icon size={16} className="text-brand-primary mb-1" />
              <div className="text-xl font-display font-bold">{stat.val}</div>
              <div className="text-[8px] uppercase tracking-widest text-[var(--text-dim)] text-center">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Big Body Picture */}
      <section className="px-6 py-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative h-64 md:h-96 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10"
        >
          <img 
            src={settings.bodyImageUrl} 
            className="w-full h-full object-cover" 
            alt="Capoeira Action"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
        </motion.div>
      </section>

      <main className="space-y-12">
        {/* Tabs */}
        <div className="px-6">
          <div className="flex p-1 bg-white/5 rounded-2xl border border-white/10">
            <button 
              onClick={() => setActiveTab('news')}
              className={`flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'news' ? 'bg-brand-primary text-brand-dark shadow-lg' : 'text-[var(--text-dim)] hover:text-[var(--text-color)]'}`}
            >
              {t.nav.news}
            </button>
            <button 
              onClick={() => setActiveTab('trainings')}
              className={`flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'trainings' ? 'bg-brand-primary text-brand-dark shadow-lg' : 'text-[var(--text-dim)] hover:text-[var(--text-color)]'}`}
            >
              {t.nav.training}
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'news' ? (
            <motion.div
              key="news"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="px-6 space-y-6"
              id="news"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-[var(--text-color)]">{t.news.title}</h2>
                <div className="flex items-center gap-2 px-3 py-1 bg-brand-primary/10 rounded-full text-[10px] font-bold text-brand-primary uppercase tracking-widest">
                  <Sparkles size={12} /> AI Enhanced
                </div>
              </div>
              <div className="grid gap-6">
                {news.map((item: any) => (
                  <NewsCard 
                    key={item.id} 
                    item={item} 
                    summary={summaries[item.id]}
                    isSummarizing={isSummarizing === item.id}
                    onSummarize={() => handleSummarize(item.id, item.title, item.excerpt)}
                    language={language}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="trainings"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="px-6 space-y-8"
              id="training"
            >
              <div className="space-y-2">
                <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-[var(--text-color)]">{t.training.title}</h2>
                <p className="text-xs text-[var(--text-dim)] uppercase tracking-widest font-bold">{t.training.overview}</p>
              </div>

              {/* Training Table */}
              <div className="overflow-x-auto -mx-6 px-6">
                <div className="min-w-[600px] glass-card rounded-3xl overflow-hidden border border-white/10">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-white/5 border-b border-white/10">
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)]">Tag / Zeit</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)]">Training</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)]">Ort</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)]">Aktion</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {trainings.map((session: any) => (
                        <tr key={session.id} className="hover:bg-white/5 transition-colors group">
                          <td className="px-6 py-4">
                            <div className="text-xs font-bold text-brand-primary">{session.day}</div>
                            <div className="text-[10px] text-[var(--text-muted)]">{session.time}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-xs font-bold text-[var(--text-color)] group-hover:text-brand-primary transition-colors">{session.name}</div>
                            <div className="text-[10px] text-[var(--text-dim)]">{session.category} • {session.coach}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-1 text-[10px] text-[var(--text-muted)]">
                              <MapPin size={10} className="text-brand-primary" />
                              {session.location.split(',')[0]}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <button 
                              onClick={() => handleWhatsApp(session.name)}
                              className="p-2 bg-brand-primary/10 text-brand-primary rounded-lg hover:bg-brand-primary hover:text-brand-dark transition-all"
                              title={t.training.register}
                            >
                              <MessageCircle size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Geschichte Section */}
      <section id="history" className="px-6 py-12 space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-display font-bold tracking-tight text-[var(--text-color)]">{t.history.title}</h2>
          <div className="w-20 h-1.5 bg-brand-primary rounded-full" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-3xl overflow-hidden h-48 md:h-64 border border-white/10"
        >
          <img 
            src={settings.historyImageUrl} 
            className="w-full h-full object-cover" 
            alt="History"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="grid gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card p-6 rounded-3xl space-y-4 border-l-4 border-brand-primary"
          >
            <h3 className="text-xl font-bold text-brand-primary">{language === 'DE' ? 'Ursprung' : 'Origem'}</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {language === 'DE' ?
                'Capoeira ist eine einzigartige brasilianische Kunstform, die Kampf, Tanz, Musik und Akrobatik vereint. Ihre Wurzeln liegen in der Zeit der Sklaverei in Brasilien, als afrikanische Sklaven Kampftechniken als Tanz tarnen mussten, um sie vor ihren Unterdrückern geheim zu halten.' :
                'A Capoeira é uma forma de arte brasileira única que combina luta, dança, música e acrobacia. Suas raízes remontam ao tempo da escravidão no Brasil, quando escravos africanos tiveram que disfarçar técnicas de luta como dança para mantê-las em segredo de seus opressores.'
              }
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-3xl space-y-4"
          >
            <h3 className="text-xl font-bold text-brand-primary">{language === 'DE' ? 'Entwicklung' : 'Desenvolvimento'}</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {language === 'DE' ?
                'Nach der Abschaffung der Sklaverei im Jahr 1888 blieb Capoeira lange Zeit verboten und wurde erst in den 1930er Jahren durch Pioniere wie Mestre Bimba (Capoeira Regional) und Mestre Pastinha (Capoeira Angola) als nationales Kulturgut anerkannt.' :
                'Após a abolição da escravidão em 1888, a Capoeira permaneceu proibida por muito tempo e só foi reconhecida como patrimônio cultural nacional na década de 1930 por pioneiros como Mestre Bimba (Capoeira Regional) e Mestre Pastinha (Capoeira Angola).'
              }
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-3xl space-y-4 bg-brand-primary/5"
          >
            <h3 className="text-xl font-bold text-brand-primary">Meia Lua Inteira</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {language === 'DE' ?
                'Unsere Gruppe, Meia Lua Inteira, steht in der Tradition von Mestre Paulo Siqueira und pflegt die Werte von Respekt, Gemeinschaft und dem Erhalt dieser faszinierenden Kultur.' :
                'Nosso grupo, Meia Lua Inteira, segue a tradição de Mestre Paulo Siqueira e cultiva os valores de respeito, comunidade e preservação desta cultura fascinante.'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Musik Section */}
      <section id="music" className="px-6 py-12 space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-display font-bold tracking-tight text-[var(--text-color)]">{t.music.title}</h2>
          <div className="w-20 h-1.5 bg-brand-primary rounded-full" />
        </div>

        <div className="grid gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass-card p-6 rounded-3xl space-y-4"
          >
            <h3 className="text-xl font-bold text-brand-primary">Das Berimbau</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {language === 'DE' ?
                'Das wichtigste Instrument in der Roda. Es bestimmt den Rhythmus, die Geschwindigkeit und den Stil des Spiels. Bestehend aus einem Holzstab (Biriba), einer Saite (Arame) und einer Kalebasse (Cabaça).' :
                'O instrumento mais importante da roda. Ele determina o ritmo, a velocidade e o estilo do jogo. Composto por uma vara de madeira (biriba), uma corda (arame) e uma cabaça.'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Pandeiro', desc: language === 'DE' ? 'Die Rahmentrommel.' : 'O pandeiro.' },
              { name: 'Atabaque', desc: language === 'DE' ? 'Die Standtrommel.' : 'O tambor.' },
              { name: 'Agogô', desc: language === 'DE' ? 'Die Doppelglocke.' : 'O sino duplo.' },
              { name: 'Reco-Reco', desc: language === 'DE' ? 'Die Ratsche.' : 'O reco-reco.' }
            ].map((inst, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-4 rounded-2xl space-y-2"
              >
                <div className="font-bold text-brand-primary text-sm">{inst.name}</div>
                <div className="text-[10px] text-[var(--text-dim)] leading-tight">{inst.desc}</div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card p-6 rounded-3xl space-y-4 border-t-4 border-brand-primary"
          >
            <h3 className="text-xl font-bold text-brand-primary">{language === 'DE' ? 'Gesang & Roda' : 'Canto & Roda'}</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {language === 'DE' ?
                'In der Roda kommentiert der Gesang das Geschehen. Wir singen Ladainhas, Louvações und Corridos, die die Energie der Gruppe bündeln.' :
                'Na roda, o canto comenta o que acontece. Cantamos ladainhas, louvações e corridos, que concentram a energia do grupo.'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Belts Section */}
      <section id="belts" className="px-6 py-12 space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-display font-bold tracking-tight text-[var(--text-color)]">{t.belts.title}</h2>
          <div className="w-20 h-1.5 bg-brand-primary rounded-full" />
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            {t.belts.description}
          </p>
        </div>

        <div className="space-y-3">
          {belts.map((level: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-4 rounded-2xl flex items-center gap-4 group hover:border-brand-primary/50 transition-all"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-brand-primary/10 transition-colors">
                <span className="text-xs font-bold text-brand-primary">{i + 1}</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-[var(--text-color)]">{level.color}</div>
                <div className="text-[10px] text-[var(--text-dim)] uppercase tracking-widest font-bold">{level.meaning}</div>
              </div>
              <div className="w-12 h-2 rounded-full overflow-hidden flex border border-white/10">
                {/* Simple color preview logic based on name */}
                {level.color.toLowerCase().includes('crua') || level.color.toLowerCase().includes('weiß') ? <div className="flex-1 bg-white" /> : null}
                {level.color.toLowerCase().includes('amarela') || level.color.toLowerCase().includes('gelb') ? <div className="flex-1 bg-yellow-400" /> : null}
                {level.color.toLowerCase().includes('laranja') || level.color.toLowerCase().includes('orange') ? <div className="flex-1 bg-orange-500" /> : null}
                {level.color.toLowerCase().includes('azul') || level.color.toLowerCase().includes('blau') ? <div className="flex-1 bg-blue-600" /> : null}
                {level.color.toLowerCase().includes('verde') || level.color.toLowerCase().includes('grün') ? <div className="flex-1 bg-green-600" /> : null}
                {level.color.toLowerCase().includes('roxa') || level.color.toLowerCase().includes('violett') ? <div className="flex-1 bg-purple-600" /> : null}
                {level.color.toLowerCase().includes('marrom') || level.color.toLowerCase().includes('braun') ? <div className="flex-1 bg-amber-900" /> : null}
                {level.color.toLowerCase().includes('vermelha') || level.color.toLowerCase().includes('rot') ? <div className="flex-1 bg-red-600" /> : null}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="px-6 py-12 space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-display font-bold tracking-tight">{t.shop.title}</h2>
          <div className="w-20 h-1.5 bg-brand-primary rounded-full" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {shopItems.map((item: any) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -5 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="aspect-square relative">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 px-2 py-1 bg-brand-primary text-brand-dark text-[10px] font-bold rounded-lg">
                  {item.price}
                </div>
              </div>
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div className="font-bold text-sm leading-tight">{item.name}</div>
                <button 
                  onClick={() => handleShopOrder(item)}
                  className="w-full py-2 bg-brand-primary/10 text-brand-primary rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary hover:text-brand-dark transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={14} />
                  {t.shop.buy}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="px-6 py-12 space-y-6">
        <h2 className="text-2xl font-display font-bold">{t.nav.locations}</h2>
        <div className="grid gap-4">
          {locations.map((loc: any, i: number) => (
            <div key={i} className="glass-card p-4 rounded-2xl flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-[var(--text-color)]">{loc.name}</div>
                <div className="text-[10px] text-[var(--text-dim)]">{loc.addr}</div>
              </div>
              <button 
                onClick={() => window.open(loc.mapUrl || 'https://maps.google.com', '_blank')}
                className="p-2 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <ExternalLink size={16} className="text-brand-primary" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-12 space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-display font-bold tracking-tight text-[var(--text-color)]">{t.nav.contact}</h2>
          <div className="w-20 h-1.5 bg-brand-primary rounded-full" />
        </div>
        
        <div className="glass-card p-8 rounded-3xl space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-brand-primary">
              <MessageCircle size={24} />
              <h3 className="text-xl font-bold">{t.contact.whatsappTitle}</h3>
            </div>
            <p className="text-xs text-[var(--text-dim)] uppercase tracking-widest font-bold">
              {t.contact.whatsappSubtitle}
            </p>

            <div className="grid gap-3">
              {t.contact.options.map((opt: any) => (
                <button
                  key={opt.id}
                  onClick={() => setContactTopic(opt.id)}
                  className={`p-4 rounded-2xl border transition-all text-left flex items-center justify-between group ${
                    contactTopic === opt.id 
                      ? 'bg-brand-primary/10 border-brand-primary text-brand-primary' 
                      : 'bg-white/5 border-white/10 text-[var(--text-muted)] hover:border-white/20'
                  }`}
                >
                  <span className="text-sm font-bold">{opt.label}</span>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    contactTopic === opt.id ? 'border-brand-primary bg-brand-primary' : 'border-white/20'
                  }`}>
                    {contactTopic === opt.id && <div className="w-2 h-2 bg-brand-dark rounded-full" />}
                  </div>
                </button>
              ))}
            </div>

            <button 
              onClick={() => {
                const opt = t.contact.options.find((o: any) => o.id === contactTopic);
                if (opt) {
                  window.open(`https://wa.me/${settings.whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(opt.text)}`, '_blank');
                }
              }}
              className="w-full py-4 bg-brand-primary text-brand-dark rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/20 hover:scale-[1.02] transition-transform active:scale-95 mt-4"
            >
              <MessageCircle size={20} />
              {t.contact.sendBtn}
            </button>
          </div>

          <div className="pt-8 border-t border-white/5 grid gap-6">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-widest text-brand-primary">Email</div>
              <div className="text-[var(--text-color)] font-medium">info@capoeiravienna.at</div>
            </div>
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-widest text-brand-primary">{language === 'DE' ? 'Standort' : 'Localização'}</div>
              <div className="text-[var(--text-color)] font-medium">Wien, Österreich</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation (Mobile) */}
      <div className="fixed bottom-6 left-6 right-6 h-16 glass-card rounded-2xl flex items-center justify-around px-4 border border-white/10 shadow-2xl z-50">
        {[
          { name: t.nav.home, href: '#home', icon: Home },
          { name: 'News', href: '#news', icon: Zap },
          { name: 'Shop', href: '#shop', icon: ShoppingBag },
          { name: 'Plan', href: '#training', icon: Footprints },
          { name: 'Orte', href: '#locations', icon: MapPin }
        ].map((item, i) => (
          <button 
            key={i} 
            onClick={() => handleNavigate(item.href)}
            className="flex flex-col items-center gap-1 group"
          >
            <item.icon size={18} className={`transition-all ${i === 0 ? 'text-brand-primary' : 'text-[var(--text-dim)] group-hover:text-brand-primary'}`} />
            <span className={`text-[8px] font-bold uppercase tracking-widest ${i === 0 ? 'text-[var(--text-color)]' : 'text-[var(--text-dim)]'}`}>
              {item.name}
            </span>
          </button>
        ))}
      </div>

      <ShopModal 
        isOpen={isShopModalOpen}
        onClose={() => setIsShopModalOpen(false)}
        selectedItem={selectedShopItem}
        allItems={shopItems}
        whatsappNumber={settings.whatsappNumber}
        language={language}
      />
    </div>
  );
}
