import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Settings, Database, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const stats = [
    { icon: Activity, value: "10+", label: "Лет опыта" },
    { icon: Settings, value: "500+", label: "Проектов" },
    { icon: Database, value: "24/7", label: "Поддержка" },
    { icon: ShieldCheck, value: "100%", label: "Гарантия" },
  ];

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="relative pt-32 pb-20 lg:min-h-[80vh] flex items-center border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
              Робокон <span className="text-accent">XXI</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Наша компания предоставляет комплексные услуги для предприятий, задействованных в железнодорожной отрасли: вагоноремонтные, вагоностроительные, локомотиворемонтные, моторвагоноремонтные в части оснащения предприятий специальными средствами измерений, предоставлении услуг по НИОКР, технического диагностирования ЖД транспорта, организации ремонтов и модернизации ЖД транспорта, технологического аудита предприятий.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#products" 
                onClick={(e) => scrollTo(e, 'products')}
                className="px-8 py-4 bg-gradient-to-r from-accent to-accent-secondary text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                Наши решения <ArrowRight size={18} />
              </a>
              <a 
                href="#contacts" 
                onClick={(e) => scrollTo(e, 'contacts')}
                className="px-8 py-4 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                Связаться с нами
              </a>
            </div>
          </motion.div>

          {/* Right Panel / Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent/10 blur-[100px] rounded-full" />
            <div className="relative bg-panel/60 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="group p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/30 transition-colors">
                    <stat.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-muted uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                 <h3 className="text-lg font-semibold text-white mb-2">Наша миссия</h3>
                 <p className="text-sm text-muted">
                   Повышение эффективности отечественных предприятий через внедрение передовых технологий автоматизации.
                 </p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};