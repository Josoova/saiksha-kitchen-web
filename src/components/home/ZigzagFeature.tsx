
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
        
        
      </div>
    </section>
  );
};

export default ZigzagFeature;
