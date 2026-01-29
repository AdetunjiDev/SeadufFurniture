import React, { useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { ConsultationType } from '../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl px-6 py-3.5 sm:py-4 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-orange-600 focus:ring-brand-orange shadow-lg shadow-orange-500/30",
    secondary: "bg-brand-dark text-white hover:bg-gray-800 focus:ring-brand-dark shadow-lg shadow-gray-900/20",
    outline: "border-2 border-brand-orange text-brand-orange hover:bg-orange-50 focus:ring-brand-orange",
    ghost: "text-brand-dark hover:bg-gray-100",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-brand-orange ${className}`}>
    {children}
  </span>
);

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  productName?: string;
}

export const ConsultationModal: React.FC<ModalProps> = ({ isOpen, onClose, title, productName }) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    type: 'Full Home' as ConsultationType,
    notes: ''
  });

  useEffect(() => {
    if (productName) {
      setFormData(prev => ({ ...prev, notes: `Enquiry about: ${productName}` }));
    } else {
      setFormData(prev => ({ ...prev, notes: '' }));
    }
  }, [productName, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      // Track event here
      console.log('Form submitted:', formData);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          {isSubmitted ? (
            <div className="p-8 text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Request Received!</h3>
              <p className="text-gray-500 mb-8">
                Thank you, {formData.name}. One of our furniture experts will call you at {formData.phone} within 30 minutes.
              </p>
              <Button onClick={onClose} fullWidth>Close</Button>
            </div>
          ) : (
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl leading-6 font-heading font-bold text-gray-900" id="modal-title">
                  {title}
                </h3>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-orange focus:ring-brand-orange sm:text-sm border p-3"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-orange focus:ring-brand-orange sm:text-sm border p-3"
                    placeholder="080 1234 5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                {!productName && (
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">What are you looking for?</label>
                    <select
                      id="type"
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-orange focus:ring-brand-orange sm:text-sm border p-3"
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value as ConsultationType})}
                    >
                      <option value="Full Home">Full Home Furnishing</option>
                      <option value="Sofa">Sofa & Seating</option>
                      <option value="Curtains">Curtains & Blinds</option>
                      <option value="Bedroom">Bedroom Set</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                )}
                
                {productName && (
                   <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                     <p className="text-sm text-brand-orange font-medium">Enquiring about: {productName}</p>
                   </div>
                )}

                <div className="mt-5 sm:mt-6">
                  <Button type="submit" fullWidth>
                    {productName ? 'Check Availability' : 'Get Free Consultation'}
                  </Button>
                  <p className="mt-3 text-center text-xs text-gray-500">
                    We'll call you within 30 minutes during business hours.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};