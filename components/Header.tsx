import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PdfIcon } from './icons/PdfIcon';

const Header: React.FC = () => {
  const activeLinkClass = "text-sky-500 font-semibold";
  const inactiveLinkClass = "text-slate-600 hover:text-sky-500 transition-colors";

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <PdfIcon className="h-8 w-8 text-red-500" />
            <span className="text-2xl font-bold text-slate-800">MyPDFConversor</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/converter-para-pdf" className={({isActive}) => isActive ? activeLinkClass : inactiveLinkClass}>
              Converter para PDF
            </NavLink>
            <NavLink to="/converter-de-pdf" className={({isActive}) => isActive ? activeLinkClass : inactiveLinkClass}>
              Converter de PDF
            </NavLink>
            <NavLink to="/sobre" className={({isActive}) => isActive ? activeLinkClass : inactiveLinkClass}>
              Sobre
            </NavLink>
            <NavLink to="/contato" className={({isActive}) => isActive ? activeLinkClass : inactiveLinkClass}>
              Contato
            </NavLink>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button can be added here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;