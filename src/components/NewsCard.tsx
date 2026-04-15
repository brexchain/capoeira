import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NewsItem } from '../types';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { Language, translations } from '../translations';

interface NewsCardProps {
  item: NewsItem;
  summary?: string;
  isSummarizing?: boolean;
  onSummarize?: () => void;
  language: Language;
}

export const NewsCard: React.FC<NewsCardProps> = ({ item, summary, isSummarizing, onSummarize, language }) => {
  const t = translations[language];
  
  return (
    <div className="space-y-4">
      <motion.div 
        whileHover={{ y: -5 }}
        className="group relative overflow-hidden rounded-3xl glass-card aspect-[16/10] flex flex-col justify-end p-6"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={item.imageUrl} 
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-[var(--bg-color)]/40 to-transparent" />
        </div>
        
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-widest rounded border border-brand-primary/30">
              {item.category}
            </span>
            <div className="flex items-center gap-1 text-[var(--text-dim)] text-[10px]">
              <Calendar size={10} />
              {item.date}
            </div>
          </div>
          
          <h3 className="text-2xl font-display font-bold leading-tight text-[var(--text-color)] group-hover:text-brand-primary transition-colors">
            {item.title}
          </h3>
          
          <p className="text-sm text-[var(--text-muted)] line-clamp-2 font-light">
            {item.excerpt}
          </p>
          
          <div className="flex items-center justify-between pt-2">
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-primary group-hover:gap-3 transition-all">
              {language === 'DE' ? 'Artikel lesen' : 'Ler artigo'} <ArrowRight size={14} />
            </button>
            
            {!summary && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onSummarize?.();
                }}
                disabled={isSummarizing}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)] hover:text-brand-primary transition-colors disabled:opacity-50"
              >
                <Sparkles size={12} className={isSummarizing ? 'animate-spin' : ''} />
                {isSummarizing ? t.news.summarizing : t.news.summarize}
              </button>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {summary && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="px-4"
          >
            <div className="p-4 bg-brand-primary/5 border border-brand-primary/20 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-20">
                <Sparkles size={16} className="text-brand-primary" />
              </div>
              <p className="text-sm text-brand-primary font-medium italic leading-relaxed">
                "{summary}"
              </p>
              <div className="mt-2 text-[8px] uppercase tracking-widest text-brand-primary/50 font-bold">
                {language === 'DE' ? 'KI Smart Zusammenfassung' : 'Resumo Inteligente IA'}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
