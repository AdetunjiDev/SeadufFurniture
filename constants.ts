import { Product, Testimonial, FaqItem } from './types';

export const COMPANY_PHONE = "+234 708 115 9082";
export const COMPANY_WHATSAPP = "2347081159082"; // Format for API
export const COMPANY_ADDRESS = "25 Lagos-Abeokuta Expressway, Ikeja, Lagos";
export const SHOWROOM_MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4214227932644!2d3.3396706745167577!3d6.59440612241617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228fa297759%3A0xad57085c677e1327!2sIkeja%20Lagos%20State!5e0!3m2!1sen!2sng!4v1711812345678!5m2!1sen!2sng";
export const SHOWROOM_DIRECTIONS_URL = "https://maps.app.goo.gl/uXpX9Y2pW4X7X2z8"; // Placeholder

// Primary logo path - using the provided high-quality asset
export const LOGO_URL = "./input_file_0.png"; 
export const LOGO_WHITE_URL = "./input_file_0.png"; 

// Calculate date 30 days from now
const promoDate = new Date();
promoDate.setDate(promoDate.getDate() + 30);

export const PROMO_CONFIG = {
  isActive: true,
  title: "Easter Mega Sale",
  subtitle: "Renew Your Home This Season",
  description: " celebrate the season of new beginnings with premium comfort. Get exclusive discounts on our entire living room and dining collections.",
  discountCode: "EASTER24",
  discountAmount: "15% OFF",
  endDate: promoDate.toISOString(),
  themeColor: "from-purple-900 to-indigo-900",
  accentColor: "text-yellow-400",
  image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000"
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Lekki Luxury Sectional Sofa',
    category: 'Living Room',
    price: 1850000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
    badge: 'Best Seller',
    description: 'Premium velvet finish with high-density foam for lasting comfort.',
    features: ['Custom Size', 'Stain Resistant']
  },
  {
    id: '2',
    name: 'Royal Oak Dining Set (8-Seater)',
    category: 'Dining',
    price: 3200000,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=800',
    description: 'Hand-crafted oak table with ergonomic chairs imported fabric.',
    features: ['Solid Wood', 'Imported Fabric']
  },
  {
    id: '3',
    name: 'Victoria Island King Bed Frame',
    category: 'Bedroom',
    price: 1450000,
    image: 'https://images.unsplash.com/photo-1505693416388-5039802057a8?auto=format&fit=crop&q=80&w=800',
    badge: 'New',
    description: 'Modern tufted headboard design with hydraulic storage system.',
    features: ['Storage', 'Orthopedic Base']
  },
  {
    id: '4',
    name: 'Executive Office Suite',
    category: 'Office',
    price: 950000,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800',
    description: 'Complete mahogany desk set with ergonomic leather chair.',
    features: ['Ergonomic', 'Cable Management']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Adaeze Okonkwo',
    location: 'Lekki Phase 1',
    rating: 5,
    text: "Absolutely stunning furniture! The quality exceeded my expectations. The team was professional and delivery was on time.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '2',
    name: 'Chukwudi Eze',
    location: 'Victoria Island',
    rating: 5,
    text: "Best furniture investment I've made. The custom curtains fit perfectly. Highly recommend Seaduf to anyone!",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '3',
    name: 'Folake Adeyemi',
    location: 'Ikoyi',
    rating: 5,
    text: "From consultation to installation, everything was seamless. My living room looks like it's from a magazine now!",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150'
  }
];

export const SHOWROOM_TESTIMONIALS: Testimonial[] = [
  {
    id: 'st-1',
    name: 'Bolanle Peters',
    location: 'Surulere',
    rating: 5,
    text: "I was skeptical about buying online, but visiting the showroom changed everything. The quality exceeded my expectations and the staff were so helpful.",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: 'st-2',
    name: 'Emeka Nwosu',
    location: 'Magodo Phase 2',
    rating: 5,
    text: "Sit-testing the sofas in the showroom was the best decision. I found exactly what I wanted and felt 100% confident with my purchase.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "How long does delivery take?",
    answer: "For in-stock items, delivery is within 24-48 hours within Lagos. For custom orders, production and delivery typically take 7-14 working days."
  },
  {
    question: "Do you do custom sizes?",
    answer: "Yes! We specialize in bespoke furniture. We can customize the dimensions, fabric, and finish of almost any piece to perfectly fit your space."
  },
  {
    question: "What payment options are available?",
    answer: "We accept bank transfers and card payments. For custom orders, we require a 70% deposit to begin production, with the balance due upon delivery."
  },
  {
    question: "Is there a warranty?",
    answer: "Yes, we offer a 12-month warranty on all our furniture frames and structural integrity. We stand behind the quality of our craftsmanship."
  },
  {
    question: "Can I visit your showroom?",
    answer: "Absolutely! Our showroom is located at 25 Lagos-Abeokuta Expressway, Ikeja, Lagos. We are open Monday to Saturday, 9am - 6pm."
  },
  {
    question: "Do you offer interior design services?",
    answer: "Yes, we offer full interior design services including space planning, 3D visualization, and complete furnishing for homes and offices."
  }
];

export const SHOWROOM_FAQS: FaqItem[] = [
  {
    question: "Do I need an appointment to visit?",
    answer: "No, walk-ins are always welcome! However, booking an appointment ensures a dedicated design expert is available to give you personalized attention."
  },
  {
    question: "Can I buy furniture directly from the showroom?",
    answer: "Yes, many of our display items are available for immediate purchase. For custom orders, we take your requirements at the showroom and begin production immediately."
  },
  {
    question: "Is parking available?",
    answer: "Yes, we have secure and free on-site parking for all our visitors."
  },
  {
    question: "Can I bring my room measurements?",
    answer: "Absolutely! We recommend it. Our designers can use your measurements to help you pick the perfect sized pieces during your visit."
  },
  {
    question: "Do you deliver after showroom purchase?",
    answer: "Yes, we offer professional delivery and installation for all items purchased at the showroom, just like our online orders."
  }
];

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600&h=600",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600&h=600",
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=600&h=600",
];

export const SHOWROOM_GALLERY = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1615873968403-89e068629275?auto=format&fit=crop&q=80&w=800"
];

// --- INTERIOR DESIGN PAGE DATA ---

export const DESIGN_SERVICES = [
  {
    title: "Living Room Design",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600",
    description: "Create a welcoming center for your home with bespoke sofas, TV units, and lighting concepts."
  },
  {
    title: "Bedroom Sanctuaries",
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=600",
    description: "Relax in style with custom bed frames, wardrobes, and calming color palettes."
  },
  {
    title: "Curtains & Blinds",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
    description: "Premium fabrics, precise measurements, and professional installation for perfect window treatments."
  },
  {
    title: "Full Home Furnishing",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600",
    description: "A cohesive look for your entire property, managed from concept to final reveal."
  },
  {
    title: "Short-Let & Airbnb Setup",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600",
    description: "Durable, stylish, and cost-effective furnishing packages designed to maximize rental income."
  },
  {
    title: "Office & Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
    description: "Productive workspaces with ergonomic furniture and professional layout planning."
  }
];

export const DESIGN_PROJECTS = [
  {
    location: "Banana Island, Ikoyi",
    description: "Modern minimalist living room overhaul with custom velvet sectional.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600"
  },
  {
    location: "Ikeja GRA",
    description: "Full 4-bedroom duplex furnishing including curtains and lighting.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80&w=600"
  },
  {
    location: "VGC, Lekki",
    description: "Executive home office setup with mahogany desk and shelving.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800"
  }
];

export const DESIGN_FAQS: FaqItem[] = [
  {
    question: "How much does interior design cost?",
    answer: "Our costs depend on the scope (one room vs. full house). However, we are transparent—we work with your budget to recommend the best materials and finishes."
  },
  {
    question: "Do you offer free measurement?",
    answer: "Yes! If you are in Lagos, we offer complimentary site visits to measure your space and discuss your vision before providing a quote."
  },
  {
    question: "How long does the process take?",
    answer: "Typically, production and installation take 2-4 weeks after design approval, depending on the complexity of custom furniture pieces."
  },
  {
    question: "Can I choose my own fabric and colors?",
    answer: "Absolutely. We bring fabric swatches and color charts to your consultation so you can feel the materials and match them to your style."
  },
  {
    question: "Do you handle the installation?",
    answer: "Yes, our team handles delivery, assembly, and installation. We even clean up the space so it's ready for you to move in immediately."
  }
];

// --- ABOUT US PAGE DATA ---

export const TEAM_MEMBERS = [
  {
    name: "Mr. Samuel Adeyemi",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    philosophy: "Good design is a silent ambassador of your brand and home."
  },
  {
    name: "Omotola Johnson",
    role: "Head Interior Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
    philosophy: "Spaces should tell the story of who lives in them."
  },
  {
    name: "Olawale Bakare",
    role: "Master Craftsman",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    philosophy: "Quality isn't an accident; it's the result of high intention."
  }
];

export const BRAND_VALUES = [
  {
    title: "Quality First",
    desc: "We never take shortcuts. From the choice of wood to the final stitch, excellence is non-negotiable."
  },
  {
    title: "Customer Respect",
    desc: "Your space is sacred. We treat every project with the care and attention it deserves."
  },
  {
    title: "Honest Advice",
    desc: "We won't just sell you furniture; we'll recommend what truly fits your space and budget."
  },
  {
    title: "Attention to Detail",
    desc: "It's the small things that create the big impact. We focus on every curve and finish."
  }
];