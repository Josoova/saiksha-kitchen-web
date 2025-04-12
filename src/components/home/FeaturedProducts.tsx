
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, TrendingUp, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const FeaturedProducts = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold rounded-full mb-2">
            <TrendingUp className="inline-block w-4 h-4 mr-1" /> Latest Products
          </span>
          <h2 className="text-3xl font-bold mb-2">Our Featured Products</h2>
          <p className="text-gray-600">Designed for efficiency and built to last</p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-green to-brand-gold mx-auto mt-4"></div>
        </motion.div>
        
        <motion.div
          className="flex flex-col items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* First Product - Gas Stove */}
          <motion.div 
            className="w-full max-w-4xl mx-auto"
            variants={itemVariants}
            onMouseEnter={() => setHoveredItem(1)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Card className={`overflow-hidden border-transparent ${hoveredItem === 1 ? 'shadow-xl shadow-brand-green/10' : 'shadow-lg'} transition-all duration-500`}>
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative overflow-hidden">
                    <div className="absolute top-2 left-2 z-10">
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-brand-green text-white text-xs font-semibold">
                        <Award className="w-3 h-3 mr-1" /> Best Seller
                      </span>
                    </div>
                    <img 
                      src="public/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png" 
                      alt="Premium Gas Stove" 
                      className={`h-full w-full object-cover transition-transform duration-700 ${hoveredItem === 1 ? 'scale-110' : 'scale-100'}`}
                    />
                  </div>
                  <div className="md:w-1/2 p-8 bg-gradient-to-br from-white to-gray-50">
                    <div className="h-full flex flex-col justify-center">
                      <Zap className="w-8 h-8 text-brand-gold mb-4" />
                      <h3 className="text-2xl font-bold mb-4 text-brand-green">Premium Gas Stoves</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Our range of gas stoves combines elegant design with powerful performance to transform your cooking experience. Each stove is crafted with high-quality materials and rigorous quality control.
                      </p>
                      <ul className="mb-8 space-y-3">
                        <li className="flex items-start">
                          <span className="text-brand-gold font-bold mr-2">•</span>
                          <span>Durable stainless steel and toughened glass</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-brand-gold font-bold mr-2">•</span>
                          <span>Efficient burner design for even heat distribution</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-brand-gold font-bold mr-2">•</span>
                          <span>Available in 2, 3, and 4 burner configurations</span>
                        </li>
                      </ul>
                      <Button asChild className="bg-gradient-to-r from-brand-green to-green-700 hover:from-brand-green hover:to-green-600 transition-all hover:scale-105 w-fit group">
                        <Link to="/products" className="flex items-center">
                          Explore Range 
                          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        
          {/* Second Product - Kettle */}
          <motion.div 
            className="w-full max-w-4xl mx-auto"
            variants={itemVariants}
            onMouseEnter={() => setHoveredItem(2)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Card className={`overflow-hidden border-transparent ${hoveredItem === 2 ? 'shadow-xl shadow-brand-gold/10' : 'shadow-lg'} transition-all duration-500`}>
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 md:order-2 relative overflow-hidden">
                    <div className="absolute top-2 right-2 z-10">
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-brand-gold text-white text-xs font-semibold">
                        <TrendingUp className="w-3 h-3 mr-1" /> New Arrival
                      </span>
                    </div>
                    <img 
                      src="public/lovable-uploads/c621b6ac-0c4d-45d4-9f0a-11a9e8ca11d6.png" 
                      alt="Electric Kettle" 
                      className={`h-full w-full object-cover transition-transform duration-700 ${hoveredItem === 2 ? 'scale-110' : 'scale-100'}`}
                    />
                  </div>
                  <div className="md:w-1/2 md:order-1 p-8 bg-gradient-to-br from-white to-gray-50">
                    <div className="h-full flex flex-col justify-center">
                      <Zap className="w-8 h-8 text-brand-gold mb-4" />
                      <h3 className="text-2xl font-bold mb-4 text-brand-green">Modern Kettles</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        From traditional to electric, our kettles offer quick heating and elegant designs to enhance your kitchen. Our kettles are designed with user comfort and safety in mind.
                      </p>
                      <ul className="mb-8 space-y-3">
                        <li className="flex items-start">
                          <span className="text-brand-gold font-bold mr-2">•</span>
                          <span>Fast boiling with energy efficiency</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-brand-gold font-bold mr-2">•</span>
                          <span>Multiple capacity options for every need</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-brand-gold font-bold mr-2">•</span>
                          <span>Premium safety features and auto-shutoff</span>
                        </li>
                      </ul>
                      <Button asChild className="bg-gradient-to-r from-brand-gold to-amber-600 hover:from-brand-gold hover:to-amber-500 transition-all hover:scale-105 text-white w-fit group">
                        <Link to="/products" className="flex items-center">
                          Discover Kettles
                          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
        
        {/* Call to Action Button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button asChild className="bg-gradient-to-r from-brand-gold to-amber-500 hover:from-amber-500 hover:to-brand-gold text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-105">
            <Link to="/products">View All Products</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
