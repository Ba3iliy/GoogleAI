import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../UI/SectionHeading';
import { Train, Truck, Car, Plane, Factory, ChevronRight } from 'lucide-react';

const PRODUCTS = [
  { icon: Train, title: "Локомотивостроение" },
  { icon: Truck, title: "Вагоностроение" },
  { icon: Car, title: "Автомобилестроение" },
  { icon: Plane, title: "Авиационная промышленность" },
  { icon: Factory, title: "Прочие отрасли" },
];

export const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Intro */}
          <div className="lg:col-span-2">
            <SectionHeading 
              title="Продукция" 
              subtitle="Высокоточное оборудование и решения под ваши задачи. Интеграция, поставка, пусконаладка и сервис."
            />
            <p className="text-muted mb-8">
              Измерительные системы, роботизированные комплексы, запасные части и программное обеспечение для ключевых отраслей.
            </p>
            <button className="group flex items-center gap-2 text-accent font-semibold hover:text-white transition-colors">
              Полный каталог <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* List */}
          <div className="lg:col-span-3 grid gap-4">
            {PRODUCTS.map((item, idx) => (
              <motion.a 
                key={idx}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative flex items-center gap-6 p-6 rounded-xl bg-panel/40 border border-white/5 hover:border-accent/50 hover:bg-panel/80 transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center border border-white/10 group-hover:border-accent group-hover:scale-110 transition-all duration-300">
                  <item.icon className="text-gray-400 group-hover:text-accent transition-colors" />
                </div>
                
                <span className="relative text-lg font-medium text-white group-hover:translate-x-2 transition-transform">
                  {item.title}
                </span>
                
                <ChevronRight className="relative ml-auto text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-300" />
              </motion.a>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};