import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, MessageCircle, Clock, Send, 
  CheckCircle, Navigation, Star, ShieldCheck, 
  Ruler, Layout, ArrowRight 
} from 'lucide-react';
import { Button } from './UI';
import { 
  COMPANY_PHONE, 
  COMPANY_WHATSAPP, 
  COMPANY_ADDRESS, 
  SHOWROOM_MAP_URL, 
  SHOWROOM_DIRECTIONS_URL 
} from '../constants';
import { useNavigate } from 'react-router-dom';

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Furniture purchase',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${COMPANY_WHATSAPP}`, '_blank');
  };

  const openDirections = () => {
    window.open(SHOWROOM_DIRECTIONS_URL, '_blank');
  };

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative bg-brand-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block py-1 px-4 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-brand-orange/30">
                Contact Seaduf
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Let’s Talk About <br/>
                <span className="text-brand-orange">Your Space</span>
              </h1>
              <p className="text-gray-300 max-w-xl mx-auto lg:mx-0 text-lg md:text-xl mb-10 leading-relaxed">
                Have a question, need a quote, or want to visit our showroom? We’re here to help you build the home you deserve.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={openWhatsApp} className="py-5 px-8 text-lg flex items-center justify-center gap-3 shadow-2xl shadow-orange-500/20">
                  <MessageCircle size={24} fill="white" />
                  Chat on WhatsApp
                </Button>
                <a href={`tel:${COMPANY_PHONE}`} className="flex-1 sm:flex-none">
                  <Button variant="outline" className="w-full py-5 px-8 text-lg text-white border-white hover:bg-white hover:text-brand-dark flex items-center justify-center gap-3">
                    <Phone size={24} />
                    Call Us Now
                  </Button>
                </a>
              </div>
              <p className="mt-6 text-sm text-gray-400 font-medium">
                Fast response • Friendly support • No obligation
              </p>
            </div>
            
            <div className="hidden lg:block relative">
               <div className="absolute inset-0 bg-brand-orange/20 rounded-full blur-3xl -z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800" 
                 alt="Contact Seaduf" 
                 className="rounded-3xl shadow-2xl border-4 border-white/10"
               />
            </div>
          </div>
        </div>
      </section>

      {/* --- QUICK CONTACT ACTIONS --- */}
      <section className="py-12 md:py-20 -mt-10 md:-mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <button onClick={openWhatsApp} className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle size={32} />
              </div>
              <h3 className="font-bold text-brand-dark mb-1">WhatsApp Chat</h3>
              <p className="text-sm text-gray-500">Get instant replies</p>
            </button>

            <a href={`tel:${COMPANY_PHONE}`} className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone size={32} />
              </div>
              <h3 className="font-bold text-brand-dark mb-1">Call Us</h3>
              <p className="text-sm text-gray-500">Speak directly with our team</p>
            </a>

            <button onClick={() => navigate('/showroom')} className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-orange-50 text-brand-orange rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin size={32} />
              </div>
              <h3 className="font-bold text-brand-dark mb-1">Visit Showroom</h3>
              <p className="text-sm text-gray-500">See and feel our furniture</p>
            </button>

            <button onClick={() => navigate('/interior-design')} className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Layout size={32} />
              </div>
              <h3 className="font-bold text-brand-dark mb-1">Design Enquiry</h3>
              <p className="text-sm text-gray-500">Book a free consultation</p>
            </button>
          </div>
        </div>
      </section>

      {/* --- FORM & INFO SECTION --- */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            
            {/* Form Column */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 border border-gray-100">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle size={40} className="text-green-600" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">Message Received!</h2>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      Thank you for reaching out. A furniture specialist will contact you shortly to discuss your needs.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">Send Another Message</Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                          <input 
                            type="text" 
                            required
                            className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-orange outline-none"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                          <input 
                            type="tel" 
                            required
                            className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-orange outline-none"
                            placeholder="080 1234 5678"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address (Optional)</label>
                        <input 
                          type="email" 
                          className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-orange outline-none"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">What can we help you with?</label>
                        <select 
                          className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-orange outline-none bg-white"
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        >
                          <option>Furniture purchase</option>
                          <option>Interior design</option>
                          <option>Custom furniture</option>
                          <option>Showroom visit</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                        <textarea 
                          rows={4} 
                          required
                          className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-orange outline-none"
                          placeholder="Tell us about your space or requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                      </div>
                      <Button type="submit" fullWidth className="py-5 text-xl">
                        Send Message
                      </Button>
                      <p className="text-center text-sm text-gray-500">
                        We usually respond within 24 hours.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">Business Information</h2>
                <div className="space-y-6">
                   <div className="flex gap-4">
                     <div className="text-brand-orange mt-1"><Phone size={24} /></div>
                     <div>
                       <p className="text-sm font-bold text-gray-500 uppercase">Phone</p>
                       <p className="text-xl font-bold text-brand-dark">{COMPANY_PHONE}</p>
                     </div>
                   </div>
                   <div className="flex gap-4">
                     <div className="text-green-600 mt-1"><MessageCircle size={24} /></div>
                     <div>
                       <p className="text-sm font-bold text-gray-500 uppercase">WhatsApp</p>
                       <p className="text-xl font-bold text-brand-dark">{COMPANY_WHATSAPP}</p>
                     </div>
                   </div>
                   <div className="flex gap-4">
                     <div className="text-blue-600 mt-1"><Mail size={24} /></div>
                     <div>
                       <p className="text-sm font-bold text-gray-500 uppercase">Email</p>
                       <p className="text-xl font-bold text-brand-dark">hello@seaduf.com</p>
                     </div>
                   </div>
                   <div className="flex gap-4">
                     <div className="text-gray-500 mt-1"><Clock size={24} /></div>
                     <div>
                       <p className="text-sm font-bold text-gray-500 uppercase">Hours</p>
                       <p className="text-lg font-bold text-brand-dark">Mon – Sat: 9am – 6pm</p>
                       <p className="text-sm text-gray-500">Walk-ins welcome | Appointments available</p>
                     </div>
                   </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6">Why Clients Contact Us</h3>
                <ul className="space-y-4">
                  {[
                    "Honest & expert design advice",
                    "Premium materials & quality control",
                    "Transparent pricing with no hidden fees",
                    "Reliable professional service in Lagos",
                    "Real showroom experience you can trust"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-center">
                       <CheckCircle size={20} className="text-brand-orange flex-shrink-0" />
                       <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SHOWROOM DETAILS --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">Visit Our Showroom</h2>
               <div className="space-y-6 mb-10">
                 <div className="flex gap-4">
                   <div className="text-brand-orange mt-1"><MapPin size={28} /></div>
                   <div>
                     <h4 className="text-xl font-bold text-brand-dark mb-2">Physical Address</h4>
                     <p className="text-gray-600 text-lg leading-relaxed">{COMPANY_ADDRESS}</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="text-brand-orange mt-1"><Star size={28} /></div>
                   <div>
                     <h4 className="text-xl font-bold text-brand-dark mb-2">Nearby Landmark</h4>
                     <p className="text-gray-600 text-lg">Near the Ikeja General Hospital roundabout, easily accessible from the Lagos-Abeokuta Expressway.</p>
                   </div>
                 </div>
               </div>

               <div className="flex flex-col sm:flex-row gap-4">
                 <Button onClick={openDirections} className="py-4 px-8 flex items-center justify-center gap-3">
                    <Navigation size={20} />
                    Get Directions
                 </Button>
                 <a href={`tel:${COMPANY_PHONE}`}>
                   <Button variant="outline" className="w-full py-4 px-8 border-2">
                      Call Before Visit
                   </Button>
                 </a>
               </div>
             </div>

             <div className="h-[450px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white relative">
               <iframe 
                 src={SHOWROOM_MAP_URL}
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Seaduf Furniture Location"
               ></iframe>
             </div>
           </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-brand-bg text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Let's make your space beautiful. Choose your preferred way to reach us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={openWhatsApp} className="py-4 px-10 flex items-center justify-center gap-3">
              <MessageCircle size={22} fill="white" />
              Chat on WhatsApp
            </Button>
            <a href={`tel:${COMPANY_PHONE}`}>
              <Button variant="secondary" className="w-full py-4 px-10 flex items-center justify-center gap-3">
                <Phone size={22} />
                Call Us
              </Button>
            </a>
            <Button onClick={() => navigate('/showroom')} variant="outline" className="py-4 px-10 border-2 bg-white">
              Visit Showroom
            </Button>
          </div>
        </div>
      </section>

      {/* --- MOBILE STICKY WHATSAPP --- */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-50 flex gap-4 pointer-events-none">
        <button 
          onClick={openWhatsApp}
          className="flex-1 bg-green-500 text-white rounded-xl py-4 font-bold flex items-center justify-center gap-2 shadow-2xl pointer-events-auto active:scale-95 transition-all"
        >
          <MessageCircle size={22} fill="white" />
          Chat on WhatsApp
        </button>
      </div>
    </div>
  );
};