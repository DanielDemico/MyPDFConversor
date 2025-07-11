
import React from 'react';
import Converter from '../components/Converter';

interface ConverterPageProps {
  mode: 'to-pdf' | 'from-pdf';
}

const pageConfig = {
  'to-pdf': {
    title: 'Converter Arquivos para PDF',
    description: 'Arraste e solte ou selecione seus arquivos Word, Excel, PowerPoint ou imagens para convertê-los em PDF de alta qualidade.',
  },
  'from-pdf': {
    title: 'Converter PDF para Outros Formatos',
    description: 'Converta seus arquivos PDF para formatos editáveis como Word (.docx), Excel (.xlsx) e PowerPoint (.pptx) com facilidade.',
  },
};

const ConverterPage: React.FC<ConverterPageProps> = ({ mode }) => {
  const { title, description } = pageConfig[mode];

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">{title}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">{description}</p>
        </div>
        <Converter mode={mode} />
      </div>
    </div>
  );
};

export default ConverterPage;
