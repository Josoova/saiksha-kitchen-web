
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50 animate-fade-in" style={{animationDelay: "600ms"}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Our Featured Products</h2>
          <p className="text-gray-600">Designed for efficiency and built to last</p>
          <div className="w-20 h-1 bg-brand-green mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gas Stove Card */}
          <Card className="overflow-hidden shadow-lg transition-all hover:scale-105 duration-300">
            <img 
              src="public/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png" 
              alt="Premium Gas Stove" 
              className="h-64 w-full object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Premium Gas Stoves</h3>
              <p className="text-gray-600 mb-4">
                Our range of gas stoves combines elegant design with powerful performance to transform your cooking experience.
              </p>
              <Button asChild className="bg-brand-green hover:bg-green-800">
                <Link to="/products" className="flex items-center">
                  Explore Range <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          {/* Kettle Card */}
          <Card className="overflow-hidden shadow-lg transition-all hover:scale-105 duration-300">
            <img 
              src="public/lovable-uploads/c621b6ac-0c4d-45d4-9f0a-11a9e8ca11d6.png" 
              alt="Electric Kettle" 
              className="h-64 w-full object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Modern Kettles</h3>
              <p className="text-gray-600 mb-4">
                From traditional to electric, our kettles offer quick heating and elegant designs to enhance your kitchen.
              </p>
              <Button asChild className="bg-brand-green hover:bg-green-800">
                <Link to="/products" className="flex items-center">
                  Discover Kettles <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
