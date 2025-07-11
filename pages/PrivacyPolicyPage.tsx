import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-slate-900 tracking-tight">Política de Privacidade</h1>
          <p className="mt-4 text-center text-lg text-slate-600">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
          <div className="mt-12 prose prose-lg prose-sky max-w-none text-slate-700">
            <p>
              Bem-vindo ao MyPDFConversor. A sua privacidade é de extrema importância para nós. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações quando você utiliza nosso site e nossos serviços.
            </p>
            
            <h2>1. Informações que Coletamos</h2>
            <p>
              Nós projetamos o MyPDFConversor para ser o mais anônimo possível.
            </p>
            <ul>
              <li><strong>Dados Pessoais:</strong> Não exigimos que você se registre ou forneça quaisquer dados pessoais como nome ou endereço de e-mail para usar nossa ferramenta de conversão.</li>
              <li><strong>Arquivos:</strong> Os arquivos que você envia para conversão são processados em nossos servidores. Não lemos, acessamos ou armazenamos o conteúdo dos seus arquivos por mais tempo do que o necessário para a conversão.</li>
              <li><strong>Dados de Uso:</strong> Podemos coletar informações anônimas sobre como o serviço é acessado e usado (como tipo de conversão, tempo de processamento, etc.) para nos ajudar a melhorar nossa plataforma. Estes dados não estão vinculados a você pessoalmente.</li>
            </ul>

            <h2>2. Uso e Retenção de Arquivos</h2>
            <p>
              Nosso compromisso com a segurança dos seus documentos é total:
            </p>
            <ul>
              <li>Todos os arquivos enviados para conversão são automaticamente e permanentemente <strong>excluídos de nossos servidores após 1 (uma) hora</strong>.</li>
              <li>Não criamos backups dos seus arquivos. Uma vez excluído, o arquivo se foi para sempre.</li>
              <li>O link para download gerado após a conversão também expira após o mesmo período.</li>
            </ul>

            <h2>3. Segurança dos Dados</h2>
            <p>
              Utilizamos medidas de segurança padrão da indústria para proteger seus dados. Todas as transferências de arquivos são protegidas com criptografia SSL/TLS, garantindo que seus dados estejam seguros entre o seu dispositivo e nossos servidores.
            </p>

            <h2>4. Cookies</h2>
            <p>
              Usamos cookies apenas para o funcionamento essencial do site. Esses cookies nos ajudam a manter sua sessão enquanto você usa a ferramenta (por exemplo, lembrando o arquivo que você enviou). Não usamos cookies de rastreamento de terceiros para fins de publicidade.
            </p>

            <h2>5. Seus Direitos</h2>
            <p>
             Como não coletamos dados pessoais identificáveis, os direitos de acesso ou exclusão de dados são garantidos pelo nosso processo automático de exclusão de arquivos. Você tem o controle total sobre seus documentos, pois pode excluí-los de nossos servidores imediatamente após o download, se desejar, ou simplesmente aguardar a exclusão automática.
            </p>

            <h2>6. Alterações a esta Política</h2>
            <p>
              Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos sobre quaisquer alterações, publicando a nova Política de Privacidade nesta página. Aconselhamos que você revise esta página periodicamente para quaisquer alterações.
            </p>

            <h2>7. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco através da nossa <Link to="/contato" className="text-sky-600 hover:underline">página de contato</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
