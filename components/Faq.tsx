import React, { useState } from 'react';

const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-slate-800"
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="mt-4 text-slate-600 prose">
          {children}
        </div>
      )}
    </div>
  );
};

const Faq: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900 tracking-tight mb-12">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            <FaqItem question="A ferramenta de conversão de PDF é realmente gratuita?">
              <p>Sim, nossa ferramenta é completamente gratuita para conversões padrão. Não há custos ocultos ou necessidade de cadastro. Você pode converter seus arquivos para PDF sem instalar programas e sem pagar nada.</p>
            </FaqItem>
            <FaqItem question="Meus arquivos estão seguros ao usar este serviço?">
              <p>Absolutamente. Levamos sua privacidade a sério. Todos os arquivos que você envia são criptografados durante a transferência e processamento. Além disso, excluímos todos os arquivos de nossos servidores permanentemente após 1 hora.</p>
            </FaqItem>
            <FaqItem question="Posso converter um arquivo PDF para Word sem perder a formatação?">
              <p>Nós utilizamos tecnologia de ponta para garantir que a conversão de PDF para Word mantenha a formatação original o mais fielmente possível. No entanto, para PDFs muito complexos com muitas imagens e tabelas, podem ocorrer pequenas variações.</p>
            </FaqItem>
             <FaqItem question="Preciso instalar algum software no meu computador?">
              <p>Não. O MyPDFConversor é uma ferramenta 100% online. Tudo que você precisa é de um navegador de internet e uma conexão. Não há necessidade de baixar ou instalar qualquer programa em seu computador ou celular.</p>
            </FaqItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;