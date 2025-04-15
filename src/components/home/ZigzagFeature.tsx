
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ZigzagFeature = () => {
  return (
    <section className="py-16 bg-gray-50 animate-fade-in" style={{animationDelay: "600ms"}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Premium Quality Solutions</h2>
          <p className="text-gray-600">Designed for modern kitchens, built to last</p>
          <div className="w-20 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>
        
        {/* First Zigzag Row */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-gold text-white">
                PREMIUM SERIES
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-brand-green">Advanced Kitchen Solutions</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our premium gas stoves feature high-efficiency brass burners, ergonomic knob designs, and 
              sturdy construction to ensure years of reliable performance. Each product undergoes 
              rigorous quality testing to meet international safety standards.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-brand-green mr-2" />
                <span className="text-gray-700">High-efficiency burners</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-brand-green mr-2" />
                <span className="text-gray-700">Durable construction</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-brand-green mr-2" />
                <span className="text-gray-700">Safety features</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-brand-green mr-2" />
                <span className="text-gray-700">Energy efficient</span>
              </div>
            </div>
            
            <Button asChild className="bg-brand-green hover:bg-green-800 text-white">
              <Link to="/products">Explore Products</Link>
            </Button>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative group hover-scale transform transition-all duration-1000 hover:translate-x-2 animate-slide-in-right">
              <img 
                src="public/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png" 
                alt="Premium Gas Stove" 
                className="rounded-lg shadow-lg transition-all hover:shadow-xl"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-md flex items-center gap-1">
                <Star className="h-5 w-5 text-brand-gold fill-brand-gold" />
                <span className="font-bold">4.9</span>
              </div>
              <div className="absolute top-4 left-4 bg-brand-green text-white text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wider">Best Seller</div>
            </div>
          </div>
        </div>
        
        {/* Second Zigzag Row */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="relative group hover-scale transform transition-all duration-1000 hover:translate-x-2 animate-slide-in-right">
              <img 
                src="public/lovable-uploads/c621b6ac-0c4d-45d4-9f0a-11a9e8ca11d6.png" 
                alt="Electric Kettle" 
                className="rounded-lg shadow-lg transition-all hover:shadow-xl"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-md flex items-center gap-1">
                <Star className="h-5 w-5 text-brand-gold fill-brand-gold" />
                <span className="font-bold">4.8</span>
              </div>
              <div className="absolute top-4 left-4 bg-brand-gold text-white text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wider">New Arrival</div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-gold text-white">
                INNOVATIVE SERIES
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-brand-green">Modern Electric Kettles</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our electric kettles combine fast heating technology with elegant design to enhance your kitchen experience. 
              With features like auto shut-off, water level indicators, and cool-touch exteriors, 
              our kettles prioritize both convenience and safety.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-brand-green mr-2" />
                <span className="text-gray-700">Fast boiling</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-brand-green mr-2" />
                <span className="text-gray-700">Auto shut-off</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-brand-green mr-2" />
                <span className="text-gray-700">Easy cleaning</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-brand-green mr-2" />
                <span className="text-gray-700">Elegant designs</span>
              </div>
            </div>
            
            <Button asChild className="bg-brand-green hover:bg-green-800 text-white">
              <Link to="/products?tab=kettles">Discover Kettles</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZigzagFeature;
