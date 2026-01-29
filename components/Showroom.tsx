import React, { useState } from 'react';
import { 
  MapPin, Clock, Phone, Car, Map, 
  MessageCircle, Star, Sparkles, Sofa, Users, Eye, 
  ChevronDown, ChevronUp, Navigation, Calendar
} from 'lucide-react';
import { Button } from './UI';
import { 
  COMPANY_PHONE, 
  COMPANY_WHATSAPP, 
  COMPANY_ADDRESS, 
  SHOWROOM_MAP_URL, 
  SHOWROOM_DIRECTIONS_URL,
  SHOWROOM_GALLERY,
  SHOWROOM_TESTIMONIALS,
  SHOWROOM_FAQS
} from '../constants';

interface ShowroomProps {
  onOpenAppointment: () => void;
}

export const Showroom: React.FC<ShowroomProps> = ({ onOpenAppointment }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${COMPANY_WHATSAPP}`, '_blank');
  };

  const openDirections = () => {
    window.open(SHOWROOM_DIRECTIONS_URL, '_blank');
  };

  return (
    <div className="bg-white pb-20 md:pb-0">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[70vh] flex items-center bg-brand-dark overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=2000" 
            alt="Seaduf Furniture Showroom" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-4 rounded-full bg-orange-500/20 text-brand-orange text-sm font-bold tracking-widest uppercase mb-6 border border-orange-500/30 backdrop-blur-md">
              Visit Our Lagos Showroom
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Experience <span className="text-brand-orange">Quality Furniture</span> Before You Buy
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              See finishes, test comfort, and speak with design experts — all in one place. Your dream home starts with a visit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={openDirections} className="text-lg px-8 py-4 shadow-xl shadow-orange-500/30 flex items-center gap-2">
                <Navigation size={20} />
                Get Directions
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-brand-dark" onClick={() => window.location.href = `tel:${COMPANY_PHONE}`}>
                Call the Showroom
              </Button>
            </div>
            
            <p className="mt-6 text-gray-400 font-medium flex items-center gap-2">
              <Sparkles className="text-brand-orange" size={18} />
              Walk-ins welcome • Free design advice available
            </p>
          </div>
        </div>
      </section>

      {/* --- QUICK INFO STRIP --- */}
      <section className="bg-brand-bg border-b border-gray-200 py-6 sticky top-[72px] sm:top-[88px] z-30 shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-nowrap md:grid md:grid-cols-4 gap-8 md:gap-4 items-center">
            <div className="flex items-center gap-3 min-w-[200px]">
              <div className="p-2 bg-orange-100 rounded-lg text-brand-orange">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Address</p>
                <p className="text-sm font-bold text-brand-dark truncate">{COMPANY_ADDRESS}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 min-w-[180px]">
              <div className="p-2 bg-orange-100 rounded-lg text-brand-orange">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Hours</p>
                <p className="text-sm font-bold text-brand-dark">Mon–Sat, 9am–6pm</p>
              </div>
            </div>
            <div className="flex items-center gap-3 min-w-[150px]">
              <div className="p-2 bg-orange-100 rounded-lg text-brand-orange">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Phone</p>
                <p className="text-sm font-bold text-brand-dark">{COMPANY_PHONE}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 min-w-[150px]">
              <div className="p-2 bg-orange-100 rounded-lg text-brand-orange">
                <Car size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Parking</p>
                <p className="text-sm font-bold text-brand-dark">Free & Secure Parking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY VISIT SECTION --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark">Why Visit the Seaduf Showroom?</h2>
            <p className="text-gray-600 mt-4 text-lg">The easiest way to feel confident about your furniture choice.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Sofa, title: "Touch & Feel Materials", desc: "See the vibrant colors and feel the quality of our premium fabrics and solid woods." },
              { icon: Eye, title: "Test Comfort Firsthand", desc: "Sit, relax, and experience the ergonomics of our chairs and sofas before buying." },
              { icon: Users, title: "Speak With Experts", desc: "Get instant advice on space planning and color coordination from our in-house designers." },
              { icon: Sparkles, title: "View Real Installations", desc: "Browse curated room settings to see how different pieces look together in a real home." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300">
                <div className="w-14 h-14 bg-orange-50 text-brand-orange rounded-xl flex items-center justify-center mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-dark">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button onClick={openDirections} className="px-12 py-4 text-lg">Plan Your Visit</Button>
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark">Inside Our Showroom</h2>
            <p className="text-gray-600 mt-4">Take a virtual peek into our luxury display floor.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {SHOWROOM_GALLERY.map((img, i) => (
              <div key={i} className={`relative rounded-2xl overflow-hidden group h-64 md:h-80 shadow-md ${i === 0 ? 'col-span-2' : ''}`}>
                <img 
                  src={img} 
                  alt={`Showroom display ${i}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">Find Your Way to Us</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We are conveniently located along the Lagos-Abeokuta Expressway in Ikeja, making us accessible from both the Mainland and the Island.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="mt-1 text-brand-orange"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-bold text-brand-dark">Showroom Location</h4>
                    <p className="text-gray-600">{COMPANY_ADDRESS}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-brand-orange"><Navigation size={24} /></div>
                  <div>
                    <h4 className="font-bold text-brand-dark">Landmark</h4>
                    <p className="text-gray-600">Close to the Ikeja General Hospital roundabout.</p>
                  </div>
                </div>
              </div>

              <Button onClick={openDirections} fullWidth className="py-5 text-xl flex items-center justify-center gap-3">
                <Map size={24} />
                Open in Google Maps
              </Button>
            </div>
            
            <div className="h-[450px] rounded-3xl overflow-hidden border-8 border-white shadow-2xl relative">
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

      {/* --- APPOINTMENT BOOKING SECTION --- */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-10">
            <Calendar className="mx-auto text-brand-orange mb-6" size={64} />
            <h2 className="text-4xl font-heading font-bold mb-6">Want a One-on-One Showroom Consultation?</h2>
            <p className="text-xl text-gray-300">
              Book a time to meet with a design expert and get personalized recommendations tailored to your home.
            </p>
          </div>
          
          <Button onClick={onOpenAppointment} className="px-12 py-5 text-xl shadow-2xl shadow-orange-900/20">
            Book Showroom Appointment
          </Button>
          <p className="mt-6 text-gray-400">It's completely free and no purchase is required.</p>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark">What Visitors Say After Coming In</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {SHOWROOM_TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-brand-bg p-10 rounded-3xl relative border border-gray-100 shadow-sm">
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 text-lg italic mb-10 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md" />
                  <div>
                    <h5 className="font-bold text-brand-dark text-lg">{t.name}</h5>
                    <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">{t.location} Visitor</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-brand-dark">Common Showroom Questions</h2>
          </div>
          
          <div className="space-y-4">
            {SHOWROOM_FAQS.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button 
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-bold text-brand-dark text-lg">{faq.question}</span>
                  {openFaqIndex === index ? <ChevronUp className="text-brand-orange" /> : <ChevronDown className="text-gray-400" />}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-8 text-gray-600 animate-fadeIn leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-10">See the Difference in Person</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button onClick={openDirections} className="px-12 py-5 text-xl flex items-center justify-center gap-3">
              <Navigation size={24} />
              Get Directions
            </Button>
            <Button variant="outline" onClick={openWhatsApp} className="px-12 py-5 text-xl border-2 border-brand-orange">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* --- MOBILE STICKY CTA BAR --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 md:hidden z-50 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <button onClick={openDirections} className="flex-1 bg-gray-100 text-brand-dark rounded-xl flex flex-col items-center justify-center py-2 active:bg-gray-200">
           <MapPin size={22} className="mb-1 text-brand-orange" />
           <span className="text-[10px] font-bold uppercase tracking-tight">Directions</span>
        </button>
        <a href={`tel:${COMPANY_PHONE}`} className="flex-1 bg-gray-100 text-brand-dark rounded-xl flex flex-col items-center justify-center py-2 active:bg-gray-200">
           <Phone size={22} className="mb-1 text-brand-orange" />
           <span className="text-[10px] font-bold uppercase tracking-tight">Call</span>
        </a>
        <button onClick={openWhatsApp} className="flex-[2] bg-green-500 text-white rounded-xl flex items-center justify-center gap-2 py-3 shadow-lg active:bg-green-600">
           <MessageCircle size={22} fill="white" />
           <span className="text-xs font-bold uppercase tracking-wide">WhatsApp</span>
        </button>
      </div>
    </div>
  );
};