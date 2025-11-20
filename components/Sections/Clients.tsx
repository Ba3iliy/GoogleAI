import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { motion } from 'framer-motion';

export const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-24 bg-black/20 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <SectionHeading title="Наши клиенты" />
            <div className="prose prose-invert text-muted mb-8">
              <p>
                В начале пути мы определили ключевые ценности: ответственное отношение к репутации, профессионализм и качество работы.
              </p>
              <p>
                Мы гордимся сотрудничеством с лидерами отрасли и всегда открыты к диалогу по вопросам модернизации вашего производства.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square rounded-xl bg-panel border border-white/10 flex items-center justify-center hover:border-accent/40 hover:shadow-[0_0_15px_rgba(0,212,255,0.1)] transition-all duration-300 group cursor-default"
              >
                <span className="text-muted font-bold text-xl group-hover:text-white transition-colors">Logo {i}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};