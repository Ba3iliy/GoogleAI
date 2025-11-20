import React from 'react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/10 bg-bg/80 backdrop-blur-lg py-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted">
          © {year} <span className="text-white font-medium">Робокон XXI</span>. Все права защищены.
        </div>
        <div className="flex gap-6 text-xs text-muted uppercase tracking-wider">
          <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
          <a href="#" className="hover:text-accent transition-colors">Карта сайта</a>
        </div>
      </div>
    </footer>
  );
};