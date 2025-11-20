import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { Ruler, Microscope, Settings, Wrench, Box } from 'lucide-react';
import { motion } from 'framer-motion';

const SERVICES = [
  { icon: Ruler, title: "Разработка КД", desc: "Проектирование конструкторской документации." },
  { icon: Microscope, title: "Проведение испытаний", desc: "Лабораторные и полевые испытания оборудования." },
  { icon: Settings, title: "Эксплуатация", desc: "Техническое сопровождение и оптимизация." },
  { icon: Wrench, title: "Ремонт", desc: "Капитальный и текущий ремонт вагонов и техники." },
  { icon: Box, title: "Контейнеризация", desc: "Решения для логистики и упаковки." },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="order-2 lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-panel border border-white/5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <service.icon className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-muted">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="order-1 lg:order-2 lg:sticky lg:top-32">
            <SectionHeading 
              title="Услуги" 
              subtitle="Сопровождение проектов от предпроектного обследования до ввода в эксплуатацию."
            />
            <div className="prose prose-invert text-muted">
              <p>
                Мы предлагаем полный цикл услуг. Наша команда инженеров обеспечивает высочайшее качество на каждом этапе работы, гарантируя надежность и долговечность внедряемых решений.
              </p>
            </div>
             <button className="mt-8 px-6 py-3 border border-accent/50 text-accent hover:bg-accent hover:text-white rounded-lg transition-all duration-300 uppercase text-sm tracking-wider font-semibold">
               Обсудить проект
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};