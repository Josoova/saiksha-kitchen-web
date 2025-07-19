
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ZigzagFeature = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-gold/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-green/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* First Zigzag Row */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-brand-gold to-amber-500 text-white shadow-lg">
                PREMIUM SERIES
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-6 text-brand-green">Advanced Kitchen Solutions</h3>
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Our premium gas stoves feature high-efficiency brass burners, ergonomic knob designs, and 
              sturdy construction to ensure years of reliable performance. Each product undergoes 
              rigorous quality testing to meet international safety standards.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'High-efficiency burners',
                'Durable construction', 
                'Safety features',
                'Energy efficient'
              ].map((feature) => (
                <div 
                  key={feature}
                  className="flex items-center p-3 rounded-lg bg-white shadow-sm border border-brand-green/10"
                >
                  <Check className="h-5 w-5 text-brand-green mr-3" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button asChild className="bg-gradient-to-r from-brand-green to-green-700 hover:from-brand-green hover:to-green-600 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Link to="/products">Explore Products</Link>
            </Button>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative group">
              <img 
                src="/lovable-uploads/44e90ac6-77dd-4cb4-b53b-64c6ce6eea43.png" 
                alt="Premium Gas Stove" 
                className="rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg flex items-center gap-2">
                <Star className="h-5 w-5 text-brand-gold fill-brand-gold" />
                <span className="font-bold text-brand-green">4.9</span>
              </div>
              <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wider shadow-lg">
                Best Seller
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ZigzagFeature;
