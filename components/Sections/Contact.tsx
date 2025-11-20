import React, { useState } from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contacts" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Контакты" align="center" subtitle="Свяжитесь с нами для консультации или посетите наши офисы." />

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Office 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-panel border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="h-64 w-full relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.625453082364!2d37.485!3d55.938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0JzQvtGB0LrQvtC70YzQvdC40LUg0YHQvdC10L3RgtGA0L7QstCw0Y8g0JjQvdC-0LLQuNC30L7QstCw!5e0!3m2!1sru!2sru!4v1700000000000" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) brightness(0.7)' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Map Dolgoprudny"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-panel to-transparent pointer-events-none" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="text-accent" /> Московская область
              </h3>
              <div className="space-y-3 text-muted text-sm">
                <p>г. Долгопрудный, Лихачевский проезд, д. 4, стр. 1</p>
                <p className="flex items-center gap-2"><Phone size={16}/> <a href="tel:+74951080583" className="hover:text-white">+7 (495) 108‑05‑83</a></p>
                <p className="flex items-center gap-2"><Mail size={16}/> <a href="mailto:info@spzt.ru" className="hover:text-white">info@spzt.ru</a></p>
              </div>
            </div>
          </motion.div>

          {/* Office 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-panel border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="h-64 w-full relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2240.123453082364!2d37.650!3d55.913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0JzQvtGB0LrQvtC70YzQvdC40LUg0YHQvdC10L3RgtGA0L7QstCw0Y8g0JzQvtGB0YLQuNC90LjQtSDQv9C-0YAuIDMtLCDQMSwg0L7QsdC7!5e0!3m2!1sru!2sru!4v1700000000001" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) brightness(0.7)' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Map Moscow"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-panel to-transparent pointer-events-none" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="text-accent" /> Москва
              </h3>
              <div className="space-y-3 text-muted text-sm">
                <p>ул. Мытищинская 3-я, д. 10, стр. 2</p>
                <p className="flex items-center gap-2"><Phone size={16}/> <a href="tel:+74951080583" className="hover:text-white">+7 (495) 108‑05‑83</a></p>
                <p className="flex items-center gap-2"><Mail size={16}/> <a href="mailto:info@spzt.ru" className="hover:text-white">info@spzt.ru</a></p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Form Section */}
        <div className="relative rounded-3xl bg-gradient-to-b from-gray-900 to-black border border-white/10 overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
           <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2 p-10 bg-white/5 flex flex-col justify-center">
                 <h3 className="text-2xl font-bold text-white mb-4">Остались вопросы?</h3>
                 <p className="text-muted mb-6">Заполните форму, и наши инженеры свяжутся с вами для детального обсуждения вашей задачи.</p>
                 <div className="text-accent font-medium">Время ответа: ~15 минут</div>
              </div>
              
              <div className="lg:col-span-3 p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-muted mb-2">Ваше имя</label>
                      <input type="text" required className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors" placeholder="Иван Иванов" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted mb-2">Email</label>
                      <input type="email" required className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors" placeholder="ivan@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted mb-2">Сообщение</label>
                    <textarea required rows={4} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors" placeholder="Опишите вашу задачу..."></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={formState === 'submitting' || formState === 'success'}
                    className="w-full md:w-auto px-8 py-3 bg-accent text-black font-bold rounded-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === 'idle' && <>Отправить <Send size={18} /></>}
                    {formState === 'submitting' && 'Отправка...'}
                    {formState === 'success' && 'Сообщение отправлено!'}
                  </button>
                </form>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};