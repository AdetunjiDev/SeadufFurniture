import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, MessageCircle, Phone, MapPin, Heart, Shield, Zap, Target } from 'lucide-react';
import { Button } from './UI';
import { 
  TEAM_MEMBERS, 
  BRAND_VALUES, 
  COMPANY_PHONE, 
  COMPANY_WHATSAPP, 
  COMPANY_ADDRESS 
} from '../constants';

interface AboutProps {
  onOpenConsultation: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  const navigate = useNavigate();

  const openWhatsApp = () => {
    window.open(`https://wa.me/${COMPANY_WHATSAPP}`, '_blank');
  };

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 lg:py-32 bg-brand-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeIn">
              <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-brand-orange text-sm font-bold tracking-widest uppercase mb-6">
                About Seaduf Furniture
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-brand-dark mb-8 leading-tight">
                Designing Comfort. <br/>
                Delivering Quality. <br/>
                <span className="text-brand-orange">Building Trust.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                We help homes and businesses create beautiful, functional spaces with premium furniture built to last in the Nigerian climate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => navigate('/showroom')} className="text-lg px-8 py-4 shadow-xl shadow-orange-500/20">
                  Visit Our Showroom
                </Button>
                <Button variant="outline" onClick={onOpenConsultation} className="text-lg px-8 py-4">
                  Talk to a Designer
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-brand-orange/5 rounded-[3rem] transform -rotate-3 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200" 
                alt="Seaduf Showroom Editorial" 
                className="relative z-10 rounded-[2.5rem] shadow-2xl object-cover h-[500px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR STORY --- */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-16 items-start">
            <div className="md:col-span-2">
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">Our Story</h2>
              <div className="w-20 h-1.5 bg-brand-orange rounded-full"></div>
            </div>
            <div className="md:col-span-3">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Founded in 2015, Seaduf Furniture was born out of a simple observation: Nigerian homeowners were tired of choosing between "imported" furniture that couldn't survive our humidity, and "local" furniture that lacked modern design and professional finishing.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We set out to bridge that gap. By combining world-class design aesthetics with local craftsmanship and seasoned materials, we create pieces that are not only beautiful but durable enough to be passed down through generations.
              </p>
              <blockquote className="border-l-4 border-brand-orange pl-6 py-2 my-10">
                <p className="text-2xl font-heading italic text-brand-dark font-semibold">
                  "Furniture isn’t just about looks — it’s about how you live and the comfort you feel in your most sacred space."
                </p>
              </blockquote>
              <Button variant="ghost" className="p-0 hover:bg-transparent text-brand-orange font-bold flex items-center gap-2" onClick={() => navigate('/interior-design')}>
                See Our Recent Work <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT WE DO --- */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark">What We Do</h2>
            <p className="text-gray-600 mt-4 text-lg">Comprehensive furnishing and design solutions.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Furniture Sales", desc: "Curated collections of high-quality sofas, beds, and dining sets ready for your home." },
              { icon: Heart, title: "Interior Design", desc: "End-to-end conceptualization and space planning tailored to your unique style." },
              { icon: Target, title: "Custom Furniture", desc: "Bespoke pieces built to your exact measurements, fabric choices, and functionality needs." },
              { icon: Shield, title: "Project Installations", desc: "Professional white-glove delivery and setup to ensure every piece is perfectly placed." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-orange-50 text-brand-orange rounded-2xl flex items-center justify-center mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-dark">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button onClick={() => navigate('/shop')} className="px-10">Explore Our Services</Button>
          </div>
        </div>
      </section>

      {/* --- WHY TRUST US --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-lg mt-8" alt="Craftsmanship" />
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-lg" alt="Showroom" />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-8">Why Clients Choose Seaduf</h2>
              <ul className="space-y-6">
                {[
                  "Quality materials and expert craftsmanship as standard",
                  "Transparent pricing with zero hidden costs",
                  "A real physical showroom in Ikeja to touch and feel our work",
                  "Personalized design consultations for every customer",
                  "Reliable delivery and comprehensive after-sales support"
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="mt-1 bg-green-100 p-1 rounded-full">
                      <CheckCircle className="text-green-600" size={18} />
                    </div>
                    <span className="text-gray-700 text-lg font-medium">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button onClick={() => navigate('/showroom')} className="px-8">Visit Our Showroom</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR VALUES --- */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {BRAND_VALUES.map((val, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-brand-orange/20 flex items-center justify-center mb-6 border border-brand-orange/30">
                  <span className="text-2xl font-bold text-brand-orange">{i+1}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{val.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MEET THE TEAM --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-dark mb-4">The People Behind Seaduf</h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">Meet the experts who bring your furniture dreams to life with passion and precision.</p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={i} className="group">
                <div className="relative rounded-3xl overflow-hidden mb-6 aspect-square grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-2xl font-heading font-bold text-brand-dark mb-1">{member.name}</h4>
                <p className="text-brand-orange font-bold text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 italic text-sm">"{member.philosophy}"</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Button variant="outline" onClick={onOpenConsultation} className="px-10">Speak With Our Team</Button>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-brand-bg text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-8">Let’s Create a Space You’ll Love</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
            <Button onClick={() => navigate('/showroom')} className="px-12 py-5 text-xl flex items-center justify-center gap-3">
              <MapPin size={24} />
              Visit Our Showroom
            </Button>
            <Button variant="outline" onClick={openWhatsApp} className="px-12 py-5 text-xl bg-white flex items-center justify-center gap-3">
              <MessageCircle size={24} />
              Chat on WhatsApp
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-gray-500 font-medium">
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
               <span>Free Consultation</span>
             </div>
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
               <span>Walk-ins Welcome</span>
             </div>
          </div>
        </div>
      </section>

      {/* --- MOBILE STICKY CTA --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 md:hidden z-50 flex gap-4 shadow-[0_-4px_10px_-2px_rgba(0,0,0,0.1)]">
        <a href={`tel:${COMPANY_PHONE}`} className="flex-1 bg-gray-100 text-brand-dark rounded-xl flex items-center justify-center py-3 active:scale-95 transition-transform">
           <Phone size={24} className="text-brand-orange" />
        </a>
        <button onClick={openWhatsApp} className="flex-[3] bg-green-500 text-white rounded-xl flex items-center justify-center gap-2 py-3 font-bold active:scale-95 transition-transform">
           <MessageCircle size={22} fill="white" />
           Chat on WhatsApp
        </button>
      </div>
    </div>
  );
};