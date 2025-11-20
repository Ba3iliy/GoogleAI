import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const DOCS = [
  "Презентация ИСТОК 2020",
  "Презентация ИСТОК МВ",
  "Презентация ПМС‑Л",
  "Каталог ИСТОК 2020",
  "Каталог ИСТОК МВ",
  "Каталог ПМС‑Л"
];

export const Documents: React.FC = () => {
  return (
    <section id="docs" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <SectionHeading title="Документы" />
            <p className="text-muted mb-8">
              Важные документы: регламенты, сертификаты, презентации и каталоги. Все файлы доступны в формате PDF для скачивания.
            </p>
            <div className="p-6 rounded-xl bg-gradient-to-br from-accent/20 to-transparent border border-accent/20">
              <h4 className="font-bold text-white mb-2">Нужен доступ к архиву?</h4>
              <p className="text-sm text-muted mb-4">Запросите доступ к технической документации через форму связи.</p>
              <a href="#contacts" className="text-sm font-bold text-accent hover:text-white transition-colors">Перейти к контактам &rarr;</a>
            </div>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-4">
            {DOCS.map((doc, idx) => (
              <motion.a 
                key={idx}
                href="#"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-accent/30 transition-all group"
              >
                <div className="w-10 h-10 rounded bg-red-500/20 text-red-400 flex items-center justify-center border border-red-500/30 shrink-0">
                  <FileText size={20} />
                </div>
                <div className="flex-grow">
                  <span className="text-white font-medium group-hover:text-accent transition-colors">{doc}</span>
                  <span className="block text-xs text-muted mt-1">PDF, 2.4 MB</span>
                </div>
                <Download className="text-muted opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};