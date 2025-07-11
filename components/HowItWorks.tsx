
import React from 'react';
import { UploadIcon } from './icons/UploadIcon';
import { DownloadIcon } from './icons/DownloadIcon';

const Step: React.FC<{ number: string; title: string; description: string; children: React.ReactNode }> = ({ number, title, description, children }) => (
  <div className="relative">
    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white rounded-full shadow-lg">
      <div className="flex items-center justify-center w-12 h-12 text-2xl font-bold text-white bg-sky-500 rounded-full">{number}</div>
    </div>
    <div className="mt-6 text-center">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Como Usar em 3 Passos Simples</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Converter seus arquivos nunca foi tão fácil.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <Step number="1" title="Selecione seu Arquivo" description="Clique no botão de upload ou simplesmente arraste e solte o arquivo que deseja converter na área designada.">
            <UploadIcon className="w-8 h-8 text-sky-500" />
          </Step>
          <Step number="2" title="Aguarde a Conversão" description="Nossos servidores potentes processarão seu arquivo em segundos. A mágica acontece automaticamente.">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </Step>
          <Step number="3" title="Baixe o Resultado" description="Seu novo arquivo estará pronto para download. Clique no botão para salvá-lo em seu dispositivo.">
            <DownloadIcon className="w-8 h-8 text-sky-500" />
          </Step>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
