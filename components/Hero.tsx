
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto text-center py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
          Conversor de PDF Online Grátis e Sem Cadastro
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-600">
          Transforme seus documentos em PDF ou converta PDFs para formatos editáveis como Word e Excel. Rápido, seguro e de alta qualidade.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/converter-para-pdf"
            className="inline-block rounded-md bg-sky-500 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition"
          >
            Começar a Converter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
