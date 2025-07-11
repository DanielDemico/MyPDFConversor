
import React from 'react';
import { PdfIcon } from './icons/PdfIcon';
import { WordIcon } from './icons/WordIcon';
import { ExcelIcon } from './icons/ExcelIcon';
import { PowerpointIcon } from './icons/PowerpointIcon';

const FormatCard: React.FC<{ children: React.ReactNode; name: string; }> = ({ children, name }) => (
    <div className="flex flex-col items-center justify-center p-4 bg-slate-100 rounded-lg h-28">
        {children}
        <span className="mt-2 text-sm font-medium text-slate-700">{name}</span>
    </div>
);


const SupportedFormats: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Formatos Suportados</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Trabalhamos com os formatos de documento mais populares.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-center text-slate-800 mb-6">Converter para PDF</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <FormatCard name="Word"><WordIcon className="w-10 h-10" /></FormatCard>
                        <FormatCard name="Excel"><ExcelIcon className="w-10 h-10" /></FormatCard>
                        <FormatCard name="PowerPoint"><PowerpointIcon className="w-10 h-10" /></FormatCard>
                         <FormatCard name="JPG/PNG">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </FormatCard>
                    </div>

                    <div className="flex items-center justify-center my-8">
                        <PdfIcon className="w-12 h-12 text-red-500" />
                    </div>

                    <h3 className="text-xl font-bold text-center text-slate-800 mb-6">Converter de PDF</h3>
                     <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <FormatCard name="Word"><WordIcon className="w-10 h-10" /></FormatCard>
                        <FormatCard name="Excel"><ExcelIcon className="w-10 h-10" /></FormatCard>
                        <FormatCard name="PowerPoint"><PowerpointIcon className="w-10 h-10" /></FormatCard>
                        <FormatCard name="PDF/A">
                             <PdfIcon className="w-10 h-10 text-red-500 opacity-70" />
                        </FormatCard>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SupportedFormats;
