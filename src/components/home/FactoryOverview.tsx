
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const FactoryOverview = () => {
  return (
    <section className="py-20 relative animate-fade-in" style={{animationDelay: "450ms"}}>
      {/* Background Graphic Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 left-1/3 w-40 h-40 bg-brand-green/5 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Factory Overview</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Take a tour of our state-of-the-art manufacturing facility where quality meets innovation</p>
          <div className="w-20 h-1 bg-brand-green mx-auto mt-4"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-3/5 relative rounded-xl overflow-hidden shadow-xl group hover-scale">
            {/* Video Thumbnail */}
            <img 
              src="public/lovable-uploads/2e31a859-9ba3-46b9-8eae-8b9580dfe7bb.png" 
              alt="Factory Tour" 
              className="w-full h-auto rounded-xl transition-transform group-hover:scale-105 duration-500"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 rounded-full p-6 cursor-pointer transition-all hover:bg-white hover:scale-110 animate-pulse">
                <Play className="h-10 w-10 text-brand-green fill-brand-green" />
              </div>
            </div>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6">
              <h3 className="text-xl font-bold mb-1">Tour Our Production Facility</h3>
              <p>See how our products are manufactured with precision and care</p>
            </div>
          </div>
          
          <div className="md:w-2/5">
            <h3 className="text-2xl font-bold mb-4 text-brand-green">Modern Manufacturing Excellence</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Saiksha Kitchen Appliances, we pride ourselves on our state-of-the-art manufacturing facility. Our factory is equipped with the latest technology and machinery, ensuring that each product meets our high standards of quality and durability.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our skilled team of technicians and engineers work diligently to produce gas stoves and kettles that combine functionality, energy efficiency, and elegant design.
            </p>
            <Button asChild className="bg-brand-green hover:bg-green-800 text-white mt-4 group">
              <Link to="/about" className="flex items-center">
                Learn More About Our Facility
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactoryOverview;
