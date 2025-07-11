import React, { useEffect } from 'react';

const AdBanner: React.FC = () => {
  useEffect(() => {
    // O script já está carregado no head, só precisamos criar o container
    const script = document.createElement('script');
    script.innerHTML = `
      if (typeof atOptions !== 'undefined') {
        document.write('<scr' + 'ipt type="text/javascript" src="//www.highperformanceformat.com/62ccd25c8d4afdd19562f5b151b87b67/invoke.js"></scr' + 'ipt>');
      }
    `;
    document.getElementById('ad-container')?.appendChild(script);
  }, []);

  return (
    <div className="fixed right-4 top-20 z-30">
      <div id="ad-container" className="w-40 h-[600px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-400 text-sm">Carregando anúncio...</span>
      </div>
    </div>
  );
};

export default AdBanner; 