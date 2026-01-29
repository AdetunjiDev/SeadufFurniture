import React, { useState, useEffect } from 'react';
import { Truck, ShieldCheck, CreditCard, Ruler, Star, Plus, Minus, Phone, Layers, PenTool, HardHat, Timer, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TESTIMONIALS, FAQS, GALLERY_IMAGES, COMPANY_WHATSAPP, PROMO_CONFIG } from '../constants';
import { Button } from './UI';

// --- Festive Promo Card ---
export const FestivePromo: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isCopied, setIsCopied] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!PROMO_CONFIG.isActive) return;

    const calculateTimeLeft = () => {
      const difference = +new Date(PROMO_CONFIG.endDate) - +new Date();
      let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROMO_CONFIG.discountCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (!PROMO_CONFIG.isActive) return null;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className={`relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r ${PROMO_CONFIG.themeColor} text-white`}>
        
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-5"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-white opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 p-8 md:p-12 lg:p-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-bold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Limited Time Offer
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight">
              {PROMO_CONFIG.title}
            </h2>
            <p className={`text-2xl font-bold mb-4 ${PROMO_CONFIG.accentColor}`}>
              {PROMO_CONFIG.subtitle}
            </p>
            <p className="text-gray-200 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              {PROMO_CONFIG.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              {/* Coupon Code Box */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 pl-4 pr-2 flex items-center border border-white/20 group hover:bg-white/20 transition-all duration-300">
                <div className="mr-4">
                  <p className="text-xs text-gray-300 uppercase tracking-wider">Use Code</p>
                  <p className="text-xl font-mono font-bold tracking-widest text-white">{PROMO_CONFIG.discountCode}</p>
                </div>
                <button 
                  onClick={handleCopy}
                  className="bg-brand-orange text-white hover:bg-orange-600 px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-all duration-200"
                >
                  {isCopied ? <Check size={18} className="text-white" /> : <Copy size={18} />}
                  {isCopied ? 'Copied' : 'Copy'}
                </button>
              </div>

              <Button 
                onClick={() => navigate('/shop')} 
                className="bg-brand-orange text-white hover:bg-orange-600 border-none shadow-xl px-8 py-4 text-lg w-full sm:w-auto"
              >
                Shop Sale Now
              </Button>
            </div>
          </div>

          {/* Right Content - Timer & Visual */}
          <div className="flex-1 w-full lg:w-auto flex flex-col items-center">
            {/* Countdown Grid */}
            <div className="grid grid-cols-4 gap-3 md:gap-4 mb-8">
              {[
                { label: 'DAYS', value: timeLeft.days },
                { label: 'HOURS', value: timeLeft.hours },
                { label: 'MINS', value: timeLeft.minutes },
                { label: 'SECS', value: timeLeft.seconds }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-indigo-950 rounded-xl flex items-center justify-center mb-2 shadow-lg border border-indigo-500/30">
                    <span className="text-2xl md:text-3xl font-bold font-mono text-white tracking-widest">{String(item.value).padStart(2, '0')}</span>
                  </div>
                  <span className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-indigo-200">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Floating Discount Badge over Image */}
            <div className="relative group cursor-pointer w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img 
                src={PROMO_CONFIG.image} 
                alt="Promo" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-white font-medium text-sm mb-1">On All Items</p>
                <div className="text-4xl font-bold text-white flex items-baseline gap-1">
                  {PROMO_CONFIG.discountAmount} <span className="text-lg font-normal opacity-80">Discount</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Trust Strip ---
export const TrustStrip: React.FC = () => {
  const items = [
    { icon: Truck, text: "Free Lagos Delivery", sub: "On orders above ₦2M" },
    { icon: ShieldCheck, text: "12-Month Warranty", sub: "On all furniture" },
    { icon: CreditCard, text: "Secure Payments", sub: "Bank transfer & POS" },
    { icon: Ruler, text: "Free Measurement", sub: "For custom orders" },
  ];

  return (
    <section className="bg-white border-b border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row gap-4">
              <div className="p-3 bg-orange-50 rounded-xl text-brand-orange">
                <item.icon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-dark text-sm sm:text-base">{item.text}</h4>
                <p className="text-xs text-gray-500">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Social Proof ---
export const SocialProof: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-3">Trusted by Homeowners Across Lagos</h2>
          <p className="text-gray-500 text-lg">See what our happy customers have to say about their Seaduf experience</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover shadow-sm" />
                    <div className="text-left">
                        <h5 className="font-bold text-lg text-brand-dark leading-tight">{t.name}</h5>
                        <span className="text-sm text-gray-500">{t.location}</span>
                    </div>
                </div>
                {/* Custom Quote Icon */}
                <div className="text-orange-100 flex-shrink-0">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" />
                    </svg>
                </div>
              </div>

              <div className="flex gap-1 text-brand-orange mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" strokeWidth={0} />)}
              </div>
              
              <p className="text-gray-600 leading-relaxed text-left flex-grow">"{t.text}"</p>
            </div>
          ))}
        </div>

        <div className="text-center">
            <Button 
                variant="outline" 
                className="px-8 py-3 rounded-full border-brand-orange text-brand-orange hover:bg-orange-50 font-medium"
                onClick={() => navigate('/showroom')}
            >
                View More Customer Homes
            </Button>
        </div>
      </div>
    </section>
  );
};

// --- How It Works ---
interface HowItWorksProps {
  onOpenConsultation: () => void;
}
export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenConsultation }) => {
  const steps = [
    { title: "Book a Free Consultation", desc: "Fill our short form or call us directly." },
    { title: "We Measure & Design", desc: "Our experts visit your space to recommend the best fit." },
    { title: "We Deliver & Install", desc: "Fast delivery and professional installation included." },
  ];

  return (
    <section className="py-20 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">Simple. Stress-Free. Professional.</h2>
            <p className="text-gray-600">From concept to completion in 3 easy steps.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-orange-100 -z-10"></div>

             {steps.map((step, i) => (
               <div key={i} className="flex flex-col items-center text-center">
                 <div className="w-24 h-24 rounded-full bg-white border-4 border-orange-100 flex items-center justify-center text-2xl font-bold text-brand-orange mb-6 shadow-sm">
                   {i + 1}
                 </div>
                 <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                 <p className="text-gray-600 max-w-xs">{step.desc}</p>
               </div>
             ))}
          </div>

          <div className="mt-12 text-center">
            <Button onClick={onOpenConsultation} className="px-10">Start with a Free Consultation</Button>
          </div>
       </div>
    </section>
  );
};

// --- Interior Design ---
export const InteriorDesign: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  return (
    <section id="interior-design" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="Luxury Interior" 
        />
        {/* Stronger gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-lg bg-white/10 text-orange-400 text-sm font-bold tracking-widest backdrop-blur-sm mb-6 border border-white/10">
                INTERIOR CONCIERGE
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                From Empty Space <br/>
                <span className="text-brand-orange">To Masterpiece.</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                Stop guessing with measurements and color matching. Our in-house designers provide end-to-end furnishing services—from 3D concepts to the final accessory placement.
            </p>

            {/* Feature points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 border-t border-white/10 pt-8">
                {[
                    { icon: Ruler, title: "Free Measurement", desc: "Precise laser sizing" },
                    { icon: Layers, title: "3D Visualization", desc: "See it before buying" },
                    { icon: HardHat, title: "White-Glove Install", desc: "We clean up after" }
                ].map((item, i) => (
                    <div key={i} className="flex sm:block items-center sm:items-start gap-4 sm:gap-0">
                        <div className="bg-brand-orange/20 p-2 rounded-lg inline-block sm:mb-3">
                           <item.icon className="text-brand-orange" size={20} />
                        </div>
                        <div>
                           <h4 className="text-white font-bold text-lg">{item.title}</h4>
                           <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Button 
                onClick={onOpenConsultation} 
                className="text-lg px-8 py-4 shadow-orange-900/20"
            >
                Start Your Design Project
            </Button>
        </div>
      </div>
    </section>
  );
};

// --- Gallery ---
export const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-brand-dark">Recent Installations</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} className={`rounded-xl overflow-hidden group h-48 md:h-64 ${i === 0 ? 'col-span-2 md:col-span-1' : ''}`}>
              <img 
                src={img} 
                alt={`Installation ${i}`}
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline">See More Transformations</Button>
        </div>
      </div>
    </section>
  );
};

// --- FAQ ---
export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-brand-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-brand-dark">Frequently Asked Questions</h2>
          <p className="text-gray-500 mt-2">Everything you need to know before ordering</p>
        </div>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <button 
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-brand-dark">{faq.question}</span>
                {openIndex === index ? <Minus className="text-brand-orange" /> : <Plus className="text-gray-400" />}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Final CTA ---
export const FinalCTA: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${COMPANY_WHATSAPP}`, '_blank');
  };

  return (
    <section className="py-24 bg-brand-dark text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold mb-6">Ready to Transform Your Home?</h2>
        <p className="text-xl text-gray-300 mb-10">
          Speak with a furniture expert today and get a free consultation tailored to your space.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button onClick={onOpenConsultation} className="px-10 py-4 text-lg">
             Call Now for Enquiry
          </Button>
          <Button variant="outline" onClick={openWhatsApp} className="px-10 py-4 text-lg border-white text-white hover:bg-white hover:text-brand-dark">
             Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};