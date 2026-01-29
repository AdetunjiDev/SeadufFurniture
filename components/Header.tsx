import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './UI';
import { COMPANY_PHONE, COMPANY_WHATSAPP, LOGO_URL } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${COMPANY_WHATSAPP}`, '_blank');
  };

  const handleNavClick = (item: string) => {
    setIsMobileMenuOpen(false);
    
    if (item === 'Home') {
      navigate('/');
      window.scrollTo(0, 0);
    } else if (item === 'Shop') {
      navigate('/shop');
      window.scrollTo(0, 0);
    } else if (item === 'Interior Design') {
      navigate('/interior-design');
      window.scrollTo(0, 0);
    } else if (item === 'Showroom') {
      navigate('/showroom');
      window.scrollTo(0, 0);
    } else if (item === 'About') {
      navigate('/about');
      window.scrollTo(0, 0);
    } else if (item === 'Contact Us') {
      navigate('/contact');
      window.scrollTo(0, 0);
    } else {
      // Fallback for any other unexpected links
      const id = item.toLowerCase().replace(' ', '-');
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: id } });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-brand-dark text-white text-xs sm:text-sm py-2 text-center px-4 font-medium hidden sm:block">
        Free Doorstep Delivery in Lagos on Orders Above ₦2,000,000
      </div>

      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Area - Image Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('Home')}>
              <img 
                src={LOGO_URL} 
                alt="Seaduf Furniture" 
                className="h-10 md:h-14 w-auto object-contain" 
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              {['Home', 'Shop', 'Interior Design', 'Showroom', 'About', 'Contact Us'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => handleNavClick(item)}
                  className={`font-medium transition-colors text-sm lg:text-base focus:outline-none whitespace-nowrap ${
                    (item === 'Interior Design' && location.pathname === '/interior-design') ||
                    (item === 'Shop' && location.pathname === '/shop') ||
                    (item === 'Showroom' && location.pathname === '/showroom') ||
                    (item === 'About' && location.pathname === '/about') ||
                    (item === 'Contact Us' && location.pathname === '/contact') ||
                    (item === 'Home' && location.pathname === '/')
                      ? 'text-brand-orange' 
                      : 'text-gray-600 hover:text-brand-orange'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href={`tel:${COMPANY_PHONE}`}
                className="flex items-center text-brand-dark font-semibold hover:text-brand-orange transition-colors"
              >
                <div className="bg-orange-100 p-2 rounded-full mr-2">
                  <Phone size={18} className="text-brand-orange" />
                </div>
                <span className="hidden lg:inline">{COMPANY_PHONE}</span>
              </a>
              <Button onClick={openWhatsApp} className="!py-2.5 !px-5 text-sm">
                Chat on WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
               <a 
                href={`tel:${COMPANY_PHONE}`}
                className="mr-4 p-2 text-brand-dark"
              >
                <Phone size={24} />
              </a>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-brand-dark focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col space-y-4 h-[calc(100vh-80px)] overflow-y-auto">
            {['Home', 'Shop', 'Interior Design', 'Showroom', 'About', 'Contact Us'].map((item) => (
              <button 
                key={item} 
                onClick={() => handleNavClick(item)}
                className="text-left text-gray-800 font-medium text-lg py-3 border-b border-gray-50 focus:outline-none"
              >
                {item}
              </button>
            ))}
            <div className="pt-4 space-y-4">
              <a 
                href={`tel:${COMPANY_PHONE}`}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
              >
                <div className="bg-orange-100 p-2 rounded-full">
                  <Phone size={20} className="text-brand-orange" />
                </div>
                <span className="font-bold text-brand-dark">{COMPANY_PHONE}</span>
              </a>
              <Button onClick={openWhatsApp} fullWidth>
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};