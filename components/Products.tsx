import React, { useState } from 'react';
import { ShoppingCart, MessageCircle, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { Button, Badge } from './UI';

export interface ProductCardProps {
  product: Product;
  onQuickEnquiry: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickEnquiry }) => {
  const [isAdded, setIsAdded] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(price);
  };

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-brand-orange/30 transition-colors duration-300 flex flex-col h-full relative">
      {/* Image Container - Static and Clean */}
      <div className="relative h-72 overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
             <Badge className="text-sm font-bold px-3 py-1.5 bg-brand-orange text-white shadow-sm tracking-wide">{product.badge}</Badge>
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative bg-white">
        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{product.category}</div>
        <h3 className="text-xl font-heading font-bold text-brand-dark mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed">{product.description}</p>
        
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-bold text-brand-dark">{formatPrice(product.price)}</span>
          </div>
          
          <div className="flex items-center text-xs text-green-600 mb-6 font-bold tracking-wide">
             <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
             In Stock • Free Delivery
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button 
               variant="outline" 
               className="text-sm py-3 px-4 w-full flex items-center justify-center gap-2 border-gray-200 hover:border-brand-orange hover:bg-orange-50"
               onClick={() => onQuickEnquiry(product.name)}
            >
              <MessageCircle size={18} />
              Enquire
            </Button>
            <Button 
              className={`text-sm py-3 px-4 w-full flex items-center justify-center gap-2 transition-all duration-300 shadow-none hover:shadow-lg ${isAdded ? 'bg-green-600 hover:bg-green-700' : ''}`}
              onClick={handleAddToCart}
            >
              {isAdded ? (
                <>
                  <Check size={18} />
                  Added
                </>
              ) : (
                <>
                  <ShoppingCart size={18} />
                  Add Cart
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeaturedProductsProps {
  onQuickEnquiry: (productName: string) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onQuickEnquiry }) => {
  const navigate = useNavigate();

  return (
    <section id="shop" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-orange font-bold tracking-widest text-sm uppercase mb-3 block">Premium Collection</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">Shop Our Best Sellers</h2>
          <p className="text-gray-600 text-lg">Hand-picked furniture pieces that combine luxury, comfort, and durability. Experience the Seaduf difference.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} onQuickEnquiry={onQuickEnquiry} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="secondary" className="px-10 py-4 text-lg shadow-none hover:shadow-xl transition-shadow" onClick={() => navigate('/shop')}>View Full Catalog</Button>
        </div>
      </div>
    </section>
  );
};