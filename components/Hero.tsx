import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './UI';
import { Check, Image as ImageIcon } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

const SLIDES = [
  {
    id: 1,
    tag: "Luxury Living Room Collection",
    titlePre: "Redefine Your",
    highlight: "Living Space",
    titlePost: "Today",
    description: "Elegant sofas, center tables, and entertainment units that become the conversation piece of your modern home.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    tag: "Exquisite Dining Experience",
    titlePre: "Dine in",
    highlight: "Absolute Style",
    titlePost: "& Comfort",
    description: "Hand-crafted dining sets built for family gatherings and memorable feasts. Custom sizes available.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    tag: "The Royal Bedroom",
    titlePre: "Sleep in",
    highlight: "Royal Comfort",
    titlePost: "Every Night",
    description: "Bespoke bed frames and orthopedic mattresses designed for the deep, restorative rest you deserve.",
    image: "https://images.unsplash.com/photo-1505693416388-5039802057a8?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 4,
    tag: "Executive Workspace",
    titlePre: "Executive",
    highlight: "Office Suites",
    titlePost: "for Leaders",
    description: "Boost productivity with our ergonomic desks and premium leather chairs. Success starts here.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 5,
    tag: "Full Interior Design",
    titlePre: "Complete",
    highlight: "Home Design",
    titlePost: "Services",
    description: "From blackout curtains to lighting and wall panels. Our experts curate every inch of your space.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200"
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative bg-brand-bg pt-8 pb-16 lg:pt-20 lg:pb-28 overflow-hidden min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content Area */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Animated Content Wrapper */}
            <div key={slide.id} className="animate-fadeIn">
              <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-brand-orange text-sm font-bold tracking-wide mb-6">
                {slide.tag}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-brand-dark leading-tight mb-6 min-h-[3em] lg:min-h-[auto]">
                {slide.titlePre} <br className="hidden lg:block"/>
                <span className="text-brand-orange">{slide.highlight}</span> {slide.titlePost}
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed min-h-[4em] lg:min-h-[auto]">
                {slide.description}
              </p>
            </div>
            
            {/* Static CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={onOpenConsultation} className="text-lg px-8 py-4 shadow-xl shadow-orange-500/20">
                Book Free Consultation
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4" onClick={() => navigate('/shop')}>
                Shop Best Sellers
              </Button>
            </div>
            
            <p className="mt-4 text-sm text-gray-500 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              We usually respond within 30 minutes
            </p>

            {/* Mobile Trust Points */}
            <div className="mt-10 pt-8 border-t border-gray-200 grid grid-cols-2 gap-4 sm:hidden text-left">
               <div className="flex items-center gap-2">
                 <Check className="text-brand-orange h-5 w-5" />
                 <span className="text-sm font-medium text-gray-700">Free Lagos Delivery</span>
               </div>
               <div className="flex items-center gap-2">
                 <Check className="text-brand-orange h-5 w-5" />
                 <span className="text-sm font-medium text-gray-700">12-Month Warranty</span>
               </div>
            </div>
          </div>

          {/* Image Area */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-brand-orange/10 rounded-[2.5rem] transform rotate-3 scale-105 -z-10 transition-all duration-700"></div>
            
            {/* Main Image Container */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[400px] lg:h-[600px] bg-gray-100 border border-gray-200">
              
              {/* Template Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 z-0">
                 <ImageIcon size={64} className="mb-4 opacity-50" />
                 <p className="text-sm font-medium uppercase tracking-widest text-gray-400">Premium Interior</p>
              </div>

              {/* Slide Images - Removed scale animation */}
              {SLIDES.map((s, index) => (
                <img 
                  key={s.id}
                  src={s.image} 
                  alt={s.tag} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out z-10 bg-gray-100 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              
              {/* Floating Badge (Static) */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg flex items-center gap-3 max-w-xs z-20">
                 <div className="flex -space-x-3">
                   {[1,2,3].map(i => (
                     <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white" alt="Customer" />
                   ))}
                 </div>
                 <div>
                   <div className="flex text-yellow-400 text-xs mb-1">★★★★★</div>
                   <p className="text-xs font-bold text-gray-900">Trusted by 500+ Lagos Homes</p>
                 </div>
              </div>
              
              {/* Slide Indicators */}
              <div className="absolute bottom-6 right-6 flex space-x-2 z-20">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? 'w-8 bg-brand-orange' : 'w-2 bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};