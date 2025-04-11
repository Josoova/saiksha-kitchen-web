
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-pattern-dot animate-fade-in" style={{animationDelay: "600ms"}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Our Featured Products</h2>
          <p className="text-gray-600">Designed for efficiency and built to last</p>
          <div className="w-20 h-1 bg-brand-green mx-auto mt-4"></div>
        </div>
        
        {/* ZigZag Layout for Featured Products */}
        {/* First Row - Gas Stove */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4 text-brand-green">Premium Gas Stoves</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our range of gas stoves combines elegant design with powerful performance to transform your cooking experience. Each stove is crafted with high-quality materials and rigorous quality control to ensure safety and durability.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">•</span>
                  <span>Durable stainless steel and toughened glass</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">•</span>
                  <span>Efficient burner design for even heat distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">•</span>
                  <span>Available in 2, 3, and 4 burner configurations</span>
                </li>
              </ul>
              <Button asChild className="bg-brand-green hover:bg-green-800 transition-all hover:scale-105">
                <Link to="/products" className="flex items-center">
                  Explore Range <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 relative">
            <div className="relative z-10">
              <img 
                src="public/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png" 
                alt="Premium Gas Stove" 
                className="h-auto w-full object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-gold/20 rounded-full blur-lg -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-brand-green/20 rounded-full blur-lg -z-10"></div>
            </div>
          </div>
        </div>
        
        {/* Second Row - Kettle */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4 text-brand-green">Modern Kettles</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From traditional to electric, our kettles offer quick heating and elegant designs to enhance your kitchen. Our kettles are designed with user comfort and safety in mind, featuring ergonomic handles and automatic shutoff features.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">•</span>
                  <span>Fast boiling with energy efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">•</span>
                  <span>Multiple capacity options for every need</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">•</span>
                  <span>Premium safety features and auto-shutoff</span>
                </li>
              </ul>
              <Button asChild className="bg-brand-green hover:bg-green-800 transition-all hover:scale-105">
                <Link to="/products" className="flex items-center">
                  Discover Kettles <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="public/lovable-uploads/c621b6ac-0c4d-45d4-9f0a-11a9e8ca11d6.png" 
                alt="Electric Kettle" 
                className="h-auto w-full object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-gold/20 rounded-full blur-lg -z-10"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-brand-green/20 rounded-full blur-lg -z-10"></div>
            </div>
          </div>
        </div>
        
        {/* Call to Action Button */}
        <div className="mt-16 text-center">
          <Button asChild className="bg-brand-gold hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
