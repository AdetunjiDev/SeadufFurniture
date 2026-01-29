import React, { useState } from 'react';
import { 
  Phone, MessageCircle, Ruler, Users, Gem, Hammer, 
  ArrowRight, CheckCircle, ChevronDown, ChevronUp, Star,
  Armchair, Bed, Blinds, Home, Building, Briefcase
} from 'lucide-react';
import { Button } from './UI';
import { DESIGN_SERVICES, DESIGN_PROJECTS, DESIGN_FAQS, TESTIMONIALS, COMPANY_PHONE, COMPANY_WHATSAPP } from '../constants';

interface InteriorDesignProps {
  onOpenConsultation: () => void;
}

export const InteriorDesign: React.FC<InteriorDesignProps> = ({ onOpenConsultation }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${COMPANY_WHATSAPP}`, '_blank');
  };

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[80vh] flex items-center bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Interior Design Lagos" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-bold tracking-wide mb-6">
              <Star size={14} fill="currentColor" />
              Professional Interior Design in Lagos
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Interior Design That Fits Your <span className="text-brand-orange">Space, Style & Budget</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              From free consultation to installation — we design, furnish, and finish your home beautifully without the stress.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={onOpenConsultation} className="text-lg px-8 py-4 shadow-xl shadow-orange-500/20">
                Book a Free Consultation
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-brand-dark" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                View Our Recent Projects
              </Button>
            </div>
            
            <p className="mt-4 text-sm text-gray-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              We’ll contact you within 30 minutes during business hours.
            </p>
          </div>
        </div>
      </section>

      {/* --- TRUST STRIP --- */}
      <section className="bg-orange-50 border-b border-orange-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Ruler, text: "Free In-Home Measurement" },
              { icon: Users, text: "Experienced Design Team" },
              { icon: Gem, text: "Quality Materials" },
              { icon: Hammer, text: "Guaranteed Installation" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg text-brand-orange shadow-sm">
                  <item.icon size={20} />
                </div>
                <span className="font-semibold text-brand-dark text-sm md:text-base">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE SEADUF --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-brand-dark">Why Homeowners Trust Seaduf</h2>
            <p className="text-gray-600 mt-4">We don't just sell furniture; we create homes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">End-to-End Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Design, furniture production, delivery, and installation are all handled by one team. No third parties, no headaches.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <Home size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Designed for Nigerian Homes</h3>
              <p className="text-gray-600 leading-relaxed">
                Our materials and layouts are optimized for our climate and space constraints, ensuring longevity and comfort.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Clear quotes with no hidden costs. We respect your budget and deliver maximum value for every Naira spent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">Our Simple Interior Design Process</h2>
            <p className="text-gray-600">Three steps to your dream space.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
             <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 border-t-2 border-dashed border-gray-300 -z-10"></div>
             
             {[
               { step: "01", title: "Book Free Consultation", desc: "Contact us to schedule a site visit or virtual chat." },
               { step: "02", title: "Measure & Proposal", desc: "We take measurements and create a layout that fits." },
               { step: "03", title: "Production & Install", desc: "We build your furniture and set everything up perfectly." }
             ].map((item, i) => (
               <div key={i} className="flex flex-col items-center text-center">
                 <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center text-2xl font-bold text-brand-orange mb-6 relative z-10">
                   {item.step}
                 </div>
                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                 <p className="text-gray-600 max-w-xs">{item.desc}</p>
               </div>
             ))}
          </div>

          <div className="mt-12 text-center">
            <Button onClick={onOpenConsultation} className="px-10">Start with a Free Consultation</Button>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-brand-dark">Interior Design Services We Offer</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESIGN_SERVICES.map((service, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden h-80 shadow-lg cursor-pointer" onClick={onOpenConsultation}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {service.description}
                  </p>
                  <div className="flex items-center text-brand-orange text-sm font-bold uppercase tracking-wider">
                    Request Help <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO (SOCIAL PROOF) --- */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
             <div>
               <h2 className="text-3xl font-heading font-bold text-brand-dark mb-2">Our Recent Projects</h2>
               <p className="text-gray-600">Real homes transformed by Seaduf.</p>
             </div>
             <Button variant="outline" className="hidden sm:flex">View Full Portfolio</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {DESIGN_PROJECTS.map((project, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.location} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-brand-orange text-sm font-bold mb-2">
                    <CheckCircle size={14} />
                    Project Completed
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">{project.location}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" fullWidth>View Full Portfolio</Button>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-brand-dark">What Our Clients Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-brand-bg p-8 rounded-2xl relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-8 text-6xl text-brand-orange/10 font-serif leading-none">"</div>
                
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                
                <p className="text-gray-700 italic mb-8 relative z-10 font-medium">"{t.text}"</p>
                
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />
                  <div>
                    <h5 className="font-bold text-brand-dark">{t.name}</h5>
                    <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ASSISTED DECISION CTA --- */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto bg-brand-dark rounded-3xl overflow-hidden shadow-2xl relative">
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center p-8 md:p-12 lg:p-16 gap-8 text-center md:text-left">
             <div className="flex-1">
               <h2 className="text-3xl font-heading font-bold text-white mb-4">Not Sure Where to Start?</h2>
               <p className="text-gray-300 text-lg">Speak with an interior expert and get honest advice about your space and budget — completely free.</p>
             </div>
             <div>
               <Button onClick={onOpenConsultation} className="px-8 py-4 text-lg shadow-xl shadow-orange-900/20">
                 Talk to a Designer
               </Button>
             </div>
           </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-brand-dark">Common Questions</h2>
          </div>
          
          <div className="space-y-4">
            {DESIGN_FAQS.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:border-brand-orange/30 transition-colors">
                <button 
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none bg-white"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-bold text-brand-dark text-lg">{faq.question}</span>
                  {openFaqIndex === index ? <ChevronUp className="text-brand-orange" /> : <ChevronDown className="text-gray-400" />}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6 text-gray-600 animate-fadeIn bg-gray-50/50 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-brand-bg text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">Let’s Design a Space You’ll Love Coming Home To</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Button onClick={onOpenConsultation} className="px-12 py-4 text-lg shadow-xl shadow-orange-500/20">
               Book Free Consultation
            </Button>
            <Button variant="outline" onClick={openWhatsApp} className="px-12 py-4 text-lg bg-white hover:bg-gray-50">
               Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* --- MOBILE STICKY CTA BAR --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 md:hidden z-50 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href={`tel:${COMPANY_PHONE}`} className="flex-1 bg-gray-100 text-brand-dark rounded-lg flex flex-col items-center justify-center py-2 active:bg-gray-200">
           <Phone size={20} className="mb-1" />
           <span className="text-xs font-bold">Call</span>
        </a>
        <button onClick={openWhatsApp} className="flex-1 bg-green-50 text-green-600 rounded-lg flex flex-col items-center justify-center py-2 active:bg-green-100">
           <MessageCircle size={20} className="mb-1" />
           <span className="text-xs font-bold">WhatsApp</span>
        </button>
        <button onClick={onOpenConsultation} className="flex-[2] bg-brand-orange text-white rounded-lg flex flex-col items-center justify-center py-2 shadow-lg active:bg-orange-600">
           <Ruler size={20} className="mb-1" />
           <span className="text-xs font-bold">Free Consult</span>
        </button>
      </div>
    </div>
  );
};