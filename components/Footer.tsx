import React from 'react';
import { Link } from 'react-router-dom';
import { PdfIcon } from './icons/PdfIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <PdfIcon className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold text-white">MyPDFConversor</span>
            </Link>
            <p className="text-sm text-slate-400">
              Sua solução completa para conversão de documentos online. Rápido, seguro e gratuito.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-200">Soluções</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/converter-para-pdf" className="hover:text-white transition-colors">Converter para PDF</Link></li>
              <li><Link to="/converter-de-pdf" className="hover:text-white transition-colors">PDF para Word</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-200">Empresa</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
              <li><Link to="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-200">Redes Sociais</h3>
            {/* Add social icons here */}
             <p className="mt-4 text-sm text-slate-400">
              Siga-nos para dicas e atualizações.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} MyPDFConversor. Todos os direitos reservados. Feito com ❤️ por especialistas em TI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;