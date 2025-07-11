import React from 'react';

const FeatureItem: React.FC<{ title: string; description: string; children: React.ReactNode }> = ({ title, description, children }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex-shrink-0 w-16 h-16 inline-flex items-center justify-center rounded-full bg-sky-100 text-sky-500 mb-5">
      {children}
    </div>
    <h2 className="text-xl font-bold text-slate-900 mb-2">{title}</h2>
    <p className="text-slate-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Por que escolher o MyPDFConversor?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Oferecemos uma solução robusta com foco na sua privacidade e na qualidade do resultado final.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureItem title="Segurança em Primeiro Lugar" description="Seus arquivos são criptografados e excluídos automaticamente de nossos servidores após a conversão. Sua privacidade é nossa prioridade.">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </FeatureItem>
          <FeatureItem title="Conversão Rápida" description="Nossos servidores otimizados processam seus arquivos em segundos, não em minutos. Converta documentos sem longas esperas.">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </FeatureItem>
          <FeatureItem title="Sem Cadastro, Sem Limites" description="Use nossa ferramenta quantas vezes precisar, sem a necessidade de criar uma conta. Conversão de PDF verdadeiramente livre e acessível.">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
          </FeatureItem>
        </div>
      </div>
    </section>
  );
};

export default Features;