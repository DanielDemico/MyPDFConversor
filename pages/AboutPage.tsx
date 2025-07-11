import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-slate-900 tracking-tight">Sobre o MyPDFConversor</h1>
          <p className="mt-4 text-center text-lg text-slate-600">
            Nossa missão é simplificar a maneira como você trabalha com documentos digitais.
          </p>
          <div className="mt-12 prose prose-lg prose-sky max-w-none text-slate-700">
            <p>
              O MyPDFConversor nasceu da necessidade de uma ferramenta de conversão de PDF que fosse ao mesmo tempo poderosa e incrivelmente simples de usar. Em um mundo onde documentos são a espinha dorsal da comunicação profissional e acadêmica, percebemos que muitas soluções existentes eram complicadas, exigiam instalações de software ou comprometiam a privacidade do usuário com cadastros obrigatórios.
            </p>
            <p>
              Decidimos criar algo diferente. Uma plataforma online, acessível de qualquer dispositivo, que coloca o poder da conversão de documentos na ponta dos seus dedos, sem barreiras. Nossa equipe é composta por especialistas em TI e designers de UX/UI apaixonados por tecnologia e dedicados a criar uma experiência de usuário impecável.
            </p>
            <h2>Nossos Compromissos</h2>
            <ul>
              <li><strong>Segurança e Privacidade:</strong> Seus arquivos são sua propriedade. Nós os tratamos com o máximo respeito. Todos os arquivos enviados são processados em servidores seguros e excluídos permanentemente após um curto período. Não pedimos seu e-mail, não exigimos cadastro.</li>
              <li><strong>Qualidade Superior:</strong> Utilizamos as melhores bibliotecas de processamento de documentos para garantir que a formatação do seu arquivo original seja mantida com a maior fidelidade possível, seja convertendo para PDF ou de PDF para um formato editável.</li>
              <li><strong>Gratuito e Acessível:</strong> Acreditamos que ferramentas essenciais devem estar disponíveis para todos. O MyPDFConversor é gratuito para uso básico e estamos comprometidos em mantê-lo assim.</li>
            </ul>
            <p>
              Obrigado por escolher o MyPDFConversor. Estamos constantemente trabalhando para adicionar novos recursos e melhorar nossa plataforma. Se tiver algum feedback, adoraríamos ouvi-lo. Entre em contato conosco através de nossas redes sociais ou formulário de contato.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;