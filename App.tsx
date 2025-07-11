import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ConverterPage from './pages/ConverterPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ScrollToTop from './components/ScrollToTop';
import { Analytics } from "@vercel/analytics/react";
import AdBanner from './components/AdBanner';

function App(): React.ReactNode {
  return (
    <HashRouter>
      <Analytics/>
      <ScrollToTop />
      <AdBanner />
      <div className="flex flex-col min-h-screen font-sans text-slate-800">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/converter-para-pdf" element={<ConverterPage mode="to-pdf" />} />
            <Route path="/converter-de-pdf" element={<ConverterPage mode="from-pdf" />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;