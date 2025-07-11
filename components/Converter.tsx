
import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadIcon } from './icons/UploadIcon';
import { PdfIcon } from './icons/PdfIcon';
import { WordIcon } from './icons/WordIcon';
import { ExcelIcon } from './icons/ExcelIcon';
import { PowerpointIcon } from './icons/PowerpointIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { DownloadIcon } from './icons/DownloadIcon';

interface ConverterProps {
    mode: 'to-pdf' | 'from-pdf';
}

const getFileIcon = (fileName: string): React.ReactNode => {
    if (fileName.endsWith('.pdf')) return <PdfIcon className="w-12 h-12 text-red-500" />;
    if (fileName.endsWith('.doc') || fileName.endsWith('.docx')) return <WordIcon className="w-12 h-12" />;
    if (fileName.endsWith('.xls') || fileName.endsWith('.xlsx')) return <ExcelIcon className="w-12 h-12" />;
    if (fileName.endsWith('.ppt') || fileName.endsWith('.pptx')) return <PowerpointIcon className="w-12 h-12" />;
    return <UploadIcon className="w-12 h-12 text-slate-400" />;
}

const Converter: React.FC<ConverterProps> = ({ mode }) => {
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<'idle' | 'converting' | 'success' | 'error'>('idle');
    const [progress, setProgress] = useState(0);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            handleReset(); // Reset previous state before setting new file
            setFile(acceptedFiles[0]);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: false });

    // Cleanup effect for the object URL
    useEffect(() => {
        return () => {
            if (downloadUrl) {
                URL.revokeObjectURL(downloadUrl);
            }
        };
    }, [downloadUrl]);

    const handleConvert = () => {
        if (!file) return;
        setStatus('converting');
        setProgress(0);

        const interval = setInterval(() => {
            setProgress(prev => {
                const next = prev + 10;
                if (next >= 100) {
                    clearInterval(interval);
                    setStatus('success');
                    // Create a URL for the file blob to make it downloadable
                    const url = URL.createObjectURL(file);
                    setDownloadUrl(url);
                    return 100;
                }
                return next;
            });
        }, 200);
    };

    const handleReset = () => {
        if (downloadUrl) {
            URL.revokeObjectURL(downloadUrl);
        }
        setFile(null);
        setStatus('idle');
        setProgress(0);
        setDownloadUrl(null);
    }
    
    const getConvertedFileName = () => {
        if(!file) return 'documento_convertido';
        const nameWithoutExtension = file.name.split('.').slice(0, -1).join('.');
        if (mode === 'to-pdf') {
            return `${nameWithoutExtension}.pdf`;
        }
        // Simplified for demo
        return `${nameWithoutExtension}.docx`;
    }

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
            {status === 'idle' && !file && (
                <div {...getRootProps()} className={`relative border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${isDragActive ? 'border-sky-500 bg-sky-50' : 'border-slate-300 hover:border-sky-400'}`}>
                    <input {...getInputProps()} />
                    <div className="flex flex-col items-center">
                        <UploadIcon className="w-16 h-16 text-slate-400 mb-4" />
                        <p className="text-xl font-semibold text-slate-700">Arraste e solte o arquivo aqui</p>
                        <p className="text-slate-500 mt-2">ou</p>
                        <button type="button" className="mt-4 px-6 py-2 bg-slate-100 text-slate-700 font-semibold rounded-md hover:bg-slate-200 transition-colors">
                            Selecione o Arquivo
                        </button>
                    </div>
                </div>
            )}
            
            {file && (status === 'idle' || status === 'converting') && (
                 <div className="text-center">
                    <div className="flex items-center justify-center p-4 bg-slate-50 rounded-lg">
                        {getFileIcon(file.name)}
                        <p className="ml-4 font-medium text-slate-800 break-all">{file.name}</p>
                    </div>
                    {status === 'idle' && (
                        <button onClick={handleConvert} className="w-full mt-6 rounded-md bg-sky-500 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-sky-600 transition">
                            Converter Agora
                        </button>
                    )}
                    {status === 'converting' && (
                        <div className="mt-6">
                            <p className="font-semibold text-slate-700">Convertendo...</p>
                            <div className="w-full bg-slate-200 rounded-full h-2.5 mt-2">
                                <div className="bg-sky-500 h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.2s ease-in-out' }}></div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {status === 'success' && (
                <div className="text-center">
                    <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto" />
                    <h3 className="mt-4 text-2xl font-bold text-slate-900">Conversão Concluída!</h3>
                    <p className="mt-2 text-slate-600">Seu arquivo foi convertido com sucesso.</p>
                    <div className="mt-6 p-4 bg-slate-100 rounded-lg font-mono text-slate-800 break-all">
                        {getConvertedFileName()}
                    </div>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <a href={downloadUrl} download={getConvertedFileName()} className="flex items-center justify-center w-full rounded-md bg-green-500 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-green-600 transition">
                            <DownloadIcon className="w-6 h-6 mr-2" />
                            Baixar
                        </a>
                         <button onClick={handleReset} className="w-full rounded-md bg-slate-200 px-6 py-3 text-lg font-semibold text-slate-700 hover:bg-slate-300 transition">
                            Converter Outro
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Converter;
