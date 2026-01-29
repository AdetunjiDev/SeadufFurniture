import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Shop } from './components/Shop';
import { InteriorDesign } from './components/InteriorDesign';
import { Showroom } from './components/Showroom';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/UI';
import { COMPANY_WHATSAPP } from './constants';
import { ModalState } from './types';

const App: React.FC = () => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    type: 'consultation'
  });

  const openConsultation = () => {
    setModalState({ isOpen: true, type: 'consultation' });
  };

  const openProductEnquiry = (productName: string) => {
    setModalState({ isOpen: true, type: 'product', productName });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${COMPANY_WHATSAPP}`, '_blank');
  };

  return (
    <HashRouter>
      <div className="font-sans antialiased text-gray-900 bg-brand-bg min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  onOpenConsultation={openConsultation} 
                  onProductEnquiry={openProductEnquiry} 
                />
              } 
            />
            <Route 
              path="/shop" 
              element={
                <Shop 
                  onProductEnquiry={openProductEnquiry} 
                />
              } 
            />
            <Route 
              path="/interior-design" 
              element={
                <InteriorDesign 
                  onOpenConsultation={openConsultation} 
                />
              } 
            />
            <Route 
              path="/showroom" 
              element={
                <Showroom 
                  onOpenAppointment={openConsultation} 
                />
              } 
            />
            <Route 
              path="/about" 
              element={
                <About 
                  onOpenConsultation={openConsultation} 
                />
              } 
            />
            <Route 
              path="/contact" 
              element={
                <Contact />
              } 
            />
          </Routes>
        </main>

        <Footer />

        {/* Sticky Floating WhatsApp Button */}
        <button 
          onClick={openWhatsApp}
          className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 group flex items-center gap-2 hidden md:flex"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} fill="white" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-bold">
            Chat Now
          </span>
        </button>

        {/* Global Modal */}
        <ConsultationModal 
          isOpen={modalState.isOpen} 
          onClose={closeModal} 
          title={modalState.type === 'consultation' ? "Book Free Consultation" : "Quick Enquiry"}
          productName={modalState.productName}
        />
      </div>
    </HashRouter>
  );
};

export default App;