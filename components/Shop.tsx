import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { ProductCard } from './Products';
import { Button } from './UI';

interface ShopProps {
  onProductEnquiry: (productName: string) => void;
}

export const Shop: React.FC<ShopProps> = ({ onProductEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter products based on active category
  // We duplicate the filtered list slightly to simulate a fuller catalog for this demo,
  // matching the original design intent.
  const baseFiltered = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);
    
  // If we have few items, duplicate them to keep the grid looking good for the demo
  const displayProducts = baseFiltered.length > 0 && baseFiltered.length < 4 
    ? [...baseFiltered, ...baseFiltered] 
    : baseFiltered;

  return (
    <div className="pb-24">
      {/* Enhanced Hero Section */}
      <div className="relative bg-brand-dark text-white py-24 lg:py-32 mb-16 overflow-hidden">
        {/* Background Image with Parallax effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Interior Background" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for Text Readability - Full coverage */}
          <div className="absolute inset-0 bg-gray-900/75 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-gray-900/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-xl">
             Catalog 2024
           </span>
           <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-white tracking-tight">
             Our <span className="text-brand-orange">Collection</span>
           </h1>
           <p className="text-gray-200 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
             Explore our full range of premium furniture, meticulously designed for the modern Nigerian home.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Functional Filters */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
           {['All', 'Living Room', 'Dining', 'Bedroom', 'Office', 'Accessories'].map((cat) => (
             <button 
               key={cat} 
               onClick={() => setActiveCategory(cat)}
               className={`px-6 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 ${
                 activeCategory === cat
                   ? 'bg-brand-orange border-brand-orange text-white shadow-lg shadow-orange-500/30 transform scale-105' 
                   : 'bg-white border-gray-200 text-gray-600 hover:border-brand-orange hover:text-brand-orange hover:shadow-md'
               }`}
             >
               {cat}
             </button>
           ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {displayProducts.length > 0 ? (
            displayProducts.map((product, index) => (
              <ProductCard 
                key={`${product.id}-${index}`} 
                product={product} 
                onQuickEnquiry={onProductEnquiry} 
              />
            ))
          ) : (
             <div className="col-span-full text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
               <p className="text-gray-500 text-lg mb-4">We are currently restocking this category.</p>
               <Button variant="outline" onClick={() => setActiveCategory('All')}>View All Products</Button>
             </div>
          )}
        </div>
        
        <div className="mt-20 text-center bg-white rounded-3xl p-12 border border-gray-100 shadow-xl shadow-gray-200/40 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
           
           <div className="relative z-10">
             <h3 className="text-3xl font-heading font-bold mb-4 text-brand-dark">Can't find what you're looking for?</h3>
             <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg">
               We specialize in bespoke furniture. Send us a picture or a design, and we will build it to your exact specifications.
             </p>
             <Button onClick={() => onProductEnquiry('Custom Request')} className="px-10 py-4 text-lg">Request Custom Design</Button>
           </div>
        </div>
      </div>
    </div>
  );
};