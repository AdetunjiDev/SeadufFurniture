import React from 'react';
import { useNavigate } from 'react-router-dom';
import { COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_WHATSAPP } from '../constants';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             {/* Logo Area - CSS Styled Text Logo */}
             <div className="mb-6 cursor-pointer group inline-block" onClick={() => handleNav('/')}>
               <div className="flex flex-col items-start leading-none">
                 <span className="font-heading font-bold text-3xl md:text-4xl text-white leading-none tracking-tighter group-hover:text-brand-orange transition-colors">
                   Seaduf
                 </span>
                 <span className="text-[10px] md:text-xs font-bold text-gray-400 tracking-[0.35em] uppercase pl-0.5 group-hover:text-white transition-colors">
                   Furniture
                 </span>
               </div>
             </div>
             
             <p className="text-sm leading-relaxed mb-6">
               Premium furniture fitted perfectly for your home. Serving Lagos with quality craftsmanship since 2015.
             </p>
             <div className="flex gap-4">
               <a href="#" className="hover:text-brand-orange transition-colors"><Instagram size={20} /></a>
               <a href="#" className="hover:text-brand-orange transition-colors"><Facebook size={20} /></a>
               <a href="#" className="hover:text-brand-orange transition-colors"><Twitter size={20} /></a>
             </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => handleNav('/about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => handleNav('/showroom')} className="hover:text-white transition-colors">Showroom</button></li>
              <li><button onClick={() => handleNav('/shop')} className="hover:text-white transition-colors">Product Catalog</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Delivery Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Warranty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Newsletter</h4>
            <p className="text-sm mb-4">Get ₦10,000 Off Your First Order Over ₦1,000,000</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-gray-800 border-none rounded-lg px-4 py-2 w-full focus:ring-1 focus:ring-brand-orange text-white"
              />
              <button className="bg-brand-orange text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors">Go</button>
            </form>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-sm">
           <div>
             <p className="font-bold text-white mb-2">Contact Us</p>
             <p>{COMPANY_ADDRESS}</p>
             <p className="mt-2"><a href={`tel:${COMPANY_PHONE}`} className="hover:text-white transition-colors">{COMPANY_PHONE}</a></p>
             <p><a href={`mailto:hello@seaduffurniture.com`} className="hover:text-white transition-colors">hello@seaduffurniture.com</a></p>
           </div>
           <div className="md:text-right text-gray-500">
             &copy; {new Date().getFullYear()} Seaduf Furniture. All rights reserved.
           </div>
        </div>
      </div>
    </footer>
  );
};