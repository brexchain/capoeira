import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Sparkles, User, ShoppingBag, ArrowRight, Plus, Trash2, Shirt, Zap as ZapIcon } from 'lucide-react';
import { Language, translations } from '../translations';

interface ShopItem {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  category: string;
}

interface ShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: ShopItem | null;
  allItems: ShopItem[];
  whatsappNumber: string;
  language: Language;
}

const APELIDOS_MALE = ['Gato Preto', 'Pé de Vento', 'Saci', 'Curupira', 'Tubarão', 'Macaco', 'Relâmpago', 'Besouro', 'Canário', 'Lobo'];
const APELIDOS_FEMALE = ['Borboleta', 'Estrela', 'Onça', 'Sereia', 'Arara', 'Formiga', 'Tempestade', 'Lua', 'Pérola', 'Fênix'];

export const ShopModal: React.FC<ShopModalProps> = ({ isOpen, onClose, selectedItem, allItems, whatsappNumber, language }) => {
  const t = translations[language];
  const [userName, setUserName] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [cart, setCart] = useState<ShopItem[]>([]);

  // Initialize cart with the selected item when modal opens
  useEffect(() => {
    if (selectedItem && isOpen) {
      setCart([selectedItem]);
    }
  }, [selectedItem, isOpen]);

  const upsellItems = useMemo(() => {
    if (!selectedItem) return [];
    const cartIds = cart.map(item => item.id);
    return allItems
      .filter(item => !cartIds.includes(item.id))
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
  }, [selectedItem, allItems, cart]);

  const addToCart = (item: ShopItem) => {
    if (!cart.find(i => i.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (id: string) => {
    if (cart.length > 1) {
      setCart(cart.filter(item => item.id !== id));
    }
  };

  const generateFunnyName = () => {
    const list = gender === 'male' ? APELIDOS_MALE : APELIDOS_FEMALE;
    const randomName = list[Math.floor(Math.random() * list.length)];
    setUserName(randomName);
  };

  const whatsappMessage = useMemo(() => {
    if (cart.length === 0) return '';
    const namePart = userName ? `Mein Name ist ${userName}. ` : '';
    const itemsPart = cart.map(item => `${item.name} (${item.price})`).join(', ');
    return `${t.shop.whatsappMsg}${itemsPart}. ${namePart}`;
  }, [cart, userName, t]);

  const handleSend = () => {
    window.open(`https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    onClose();
  };

  if (!selectedItem) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[var(--bg-color)]/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-[var(--bg-color)] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <h2 className="text-xl font-display font-bold uppercase tracking-tight flex items-center gap-2 text-[var(--text-color)]">
                <ShoppingBag size={20} className="text-brand-primary" />
                {t.shop.checkout}
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-[var(--text-color)]">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-8 max-h-[70vh] overflow-y-auto scrollbar-hide">
              {/* Cart Items */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-dim)]">Deine Auswahl</h3>
                {cart.map((item) => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 group"
                  >
                    <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center">
                      {item.category.toLowerCase().includes('apparel') || item.name.toLowerCase().includes('shirt') ? (
                        <Shirt size={32} className="text-brand-primary opacity-50" />
                      ) : item.category.toLowerCase().includes('instrument') ? (
                        <ZapIcon size={32} className="text-brand-primary opacity-50" />
                      ) : (
                        <ShoppingBag size={32} className="text-brand-primary opacity-50" />
                      )}
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="text-[10px] text-[var(--text-dim)] uppercase tracking-widest font-bold">{item.category}</div>
                      <div className="font-bold text-sm text-[var(--text-color)]">{item.name}</div>
                      <div className="text-brand-primary font-bold text-xs">{item.price}</div>
                    </div>
                    {cart.length > 1 && (
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-white/20 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Name Input & Funny Name Generator */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-dim)]">{t.shop.nameLabel}</label>
                  <div className="flex bg-white/5 rounded-lg p-1">
                    <button 
                      onClick={() => setGender('male')}
                      className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${gender === 'male' ? 'bg-brand-primary text-brand-dark' : 'text-[var(--text-dim)]'}`}
                    >
                      {t.shop.male}
                    </button>
                    <button 
                      onClick={() => setGender('female')}
                      className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${gender === 'female' ? 'bg-brand-primary text-brand-dark' : 'text-[var(--text-dim)]'}`}
                    >
                      {t.shop.female}
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <input 
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary pr-12 text-[var(--text-color)]"
                    placeholder="e.g. Besouro..."
                  />
                  <button 
                    onClick={generateFunnyName}
                    className="absolute right-2 top-2 p-2 text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-colors"
                    title={t.shop.funnyNameBtn}
                  >
                    <Sparkles size={18} />
                  </button>
                </div>
              </div>

              {/* Upsell Proposals */}
              {upsellItems.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-dim)]">{t.shop.upsellTitle}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {upsellItems.map(item => (
                      <div key={item.id} className="p-3 bg-white/5 rounded-2xl border border-white/10 space-y-2 group relative">
                        <div className="w-full aspect-square bg-white/5 rounded-xl flex items-center justify-center transition-opacity opacity-60 group-hover:opacity-100">
                          {item.category.toLowerCase().includes('apparel') || item.name.toLowerCase().includes('shirt') ? (
                            <Shirt size={24} className="text-brand-primary opacity-50" />
                          ) : item.category.toLowerCase().includes('instrument') ? (
                            <ZapIcon size={24} className="text-brand-primary opacity-50" />
                          ) : (
                            <ShoppingBag size={24} className="text-brand-primary opacity-50" />
                          )}
                        </div>
                        <div className="text-[10px] font-bold truncate text-[var(--text-color)]">{item.name}</div>
                        <div className="flex items-center justify-between">
                          <div className="text-[10px] text-brand-primary font-bold">{item.price}</div>
                          <button 
                            onClick={() => addToCart(item)}
                            className="p-1.5 bg-brand-primary/10 text-brand-primary rounded-lg hover:bg-brand-primary hover:text-brand-dark transition-all"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Message Preview */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-dim)]">{t.shop.preview}</label>
                <div className="p-4 bg-brand-primary/5 border border-brand-primary/20 rounded-2xl text-xs text-brand-primary italic leading-relaxed">
                  "{whatsappMessage}"
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-6 border-t border-white/5">
              <button 
                onClick={handleSend}
                className="w-full py-4 bg-brand-primary text-brand-dark rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/20 hover:scale-[1.02] transition-transform active:scale-95"
              >
                <MessageCircle size={20} />
                {t.shop.send}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
