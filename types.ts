export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  badge?: 'Best Seller' | 'New' | 'Sale';
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type ConsultationType = 'Sofa' | 'Curtains' | 'Bedroom' | 'Full Home' | 'Other';

export interface ModalState {
  isOpen: boolean;
  type: 'consultation' | 'product';
  productName?: string;
}