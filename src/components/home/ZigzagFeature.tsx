
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star, Heater } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeaterTransition from '@/components/common/HeaterTransition';

const ZigzagFeature = () => {
  const heaterIconVariants = {
    animate: {
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-gold/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-green/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <HeaterTransition className="text-center mb-16" showIcon>
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-brand-gold/20 to-brand-green/20 rounded-full mb-4"
            variants={heaterIconVariants}
            animate="animate"
          >
            <Heater className="w-5 h-5 mr-2 text-brand-gold" />
            <span className="font-semibold text-brand-green">Premium Quality Solutions</span>
          </motion.div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-brand-green to-brand-gold bg-clip-text text-transparent">
            Designed for Modern Kitchens
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Built to last with cutting-edge technology</p>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-green to-brand-gold mx-auto mt-6"></div>
        </HeaterTransition>
        
        {/* First Zigzag Row */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <HeaterTransition className="md:w-1/2 order-2 md:order-1" delay={0.2}>
            <div className="relative mb-6">
              <motion.span 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-brand-gold to-amber-500 text-white shadow-lg"
                variants={heaterIconVariants}
                animate="animate"
              >
                <Heater className="w-4 h-4 mr-1" />
                PREMIUM SERIES
              </motion.span>
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
              ].map((feature, index) => (
                <motion.div 
                  key={feature}
                  className="flex items-center p-3 rounded-lg bg-white shadow-sm border border-brand-green/10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Check className="h-5 w-5 text-brand-green mr-3" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <Button asChild className="bg-gradient-to-r from-brand-green to-green-700 hover:from-brand-green hover:to-green-600 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Link to="/products">Explore Products</Link>
            </Button>
          </HeaterTransition>
          
          <HeaterTransition className="md:w-1/2 order-1 md:order-2" delay={0.4}>
            <div className="relative group">
              <motion.img 
                src="public/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png" 
                alt="Premium Gas Stove" 
                className="rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-3xl"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg flex items-center gap-2">
                <Star className="h-5 w-5 text-brand-gold fill-brand-gold" />
                <span className="font-bold text-brand-green">4.9</span>
              </div>
              <motion.div 
                className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wider shadow-lg"
                variants={heaterIconVariants}
                animate="animate"
              >
                Best Seller
              </motion.div>
            </div>
          </HeaterTransition>
        </div>
        
        {/* Second Zigzag Row */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <HeaterTransition className="md:w-1/2" delay={0.2}>
            <div className="relative group">
              <motion.img 
                src="public/lovable-uploads/c621b6ac-0c4d-45d4-9f0a-11a9e8ca11d6.png" 
                alt="Electric Kettle" 
                className="rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-3xl"
                whileHover={{ scale: 1.05, rotate: -1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg flex items-center gap-2">
                <Star className="h-5 w-5 text-brand-gold fill-brand-gold" />
                <span className="font-bold text-brand-green">4.8</span>
              </div>
              <motion.div 
                className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wider shadow-lg"
                variants={heaterIconVariants}
                animate="animate"
              >
                New Arrival
              </motion.div>
            </div>
          </HeaterTransition>
          
          <HeaterTransition className="md:w-1/2" delay={0.4}>
            <div className="relative mb-6">
              <motion.span 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-brand-gold to-amber-500 text-white shadow-lg"
                variants={heaterIconVariants}
                animate="animate"
              >
                <Heater className="w-4 h-4 mr-1" />
                INNOVATIVE SERIES
              </motion.span>
            </div>
            <h3 className="text-3xl font-bold mb-6 text-brand-green">Modern Electric Kettles</h3>
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Our electric kettles combine fast heating technology with elegant design to enhance your kitchen experience. 
              With features like auto shut-off, water level indicators, and cool-touch exteriors, 
              our kettles prioritize both convenience and safety.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'Fast boiling',
                'Auto shut-off',
                'Easy cleaning', 
                'Elegant designs'
              ].map((feature, index) => (
                <motion.div 
                  key={feature}
                  className="flex items-center p-3 rounded-lg bg-white shadow-sm border border-brand-gold/10"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Check className="h-5 w-5 text-brand-green mr-3" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <Button asChild className="bg-gradient-to-r from-brand-gold to-amber-500 hover:from-brand-gold hover:to-amber-600 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Link to="/products?tab=kettles">Discover Kettles</Link>
            </Button>
          </HeaterTransition>
        </div>
      </div>
    </section>
  );
};

export default ZigzagFeature;
