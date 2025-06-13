
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const FeaturedProducts = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-green/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-brand-gold/20 to-brand-green/20 rounded-full mb-4">
            <TrendingUp className="inline-block w-4 h-4 mr-1 text-brand-green" /> 
            <span className="font-semibold text-brand-green">Premium Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-green to-brand-gold bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of innovation, efficiency, and elegance in every product
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-green via-brand-gold to-brand-green mx-auto mt-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Gas Stove Product Card */}
          <div 
            className="group"
            onMouseEnter={() => setHoveredItem(1)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold shadow-lg">
                      <Award className="w-4 h-4 mr-1" /> Best Seller
                    </span>
                  </div>
                  <img 
                    src="public/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png" 
                    alt="Premium Gas Stove" 
                    className="h-full w-full object-cover transition-transform duration-700"
                    style={{
                      transform: hoveredItem === 1 ? 'scale(1.1) rotate(1deg)' : 'scale(1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl font-bold text-brand-green">Premium Gas Stoves</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    Revolutionary cooking technology that transforms your culinary experience with precision heating and elegant design.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center p-3 rounded-lg bg-brand-green/5">
                      <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                      <span className="text-sm font-medium">Efficient Burners</span>
                    </div>
                    <div className="flex items-center p-3 rounded-lg bg-brand-green/5">
                      <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                      <span className="text-sm font-medium">Safety Features</span>
                    </div>
                    <div className="flex items-center p-3 rounded-lg bg-brand-green/5">
                      <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                      <span className="text-sm font-medium">Durable Build</span>
                    </div>
                    <div className="flex items-center p-3 rounded-lg bg-brand-green/5">
                      <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                      <span className="text-sm font-medium">Modern Design</span>
                    </div>
                  </div>
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-brand-green to-green-600 hover:from-brand-green hover:to-green-700 transition-all duration-500 hover:scale-105 py-6 text-lg font-semibold group shadow-lg"
                  >
                    <Link to="/products" className="flex items-center justify-center">
                      Explore Gas Stoves
                      <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        
          {/* Kettle Product Card */}
          <div 
            className="group"
            onMouseEnter={() => setHoveredItem(2)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold shadow-lg">
                      <TrendingUp className="w-4 h-4 mr-1" /> New Arrival
                    </span>
                  </div>
                  <img 
                    src="public/lovable-uploads/c621b6ac-0c4d-45d4-9f0a-11a9e8ca11d6.png" 
                    alt="Electric Kettle" 
                    className="h-full w-full object-cover transition-transform duration-700"
                    style={{
                      transform: hoveredItem === 2 ? 'scale(1.1) rotate(-1deg)' : 'scale(1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl font-bold text-brand-green">Modern Kettles</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    Smart heating solutions that combine rapid boiling technology with sophisticated safety features for the perfect brew.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center p-3 rounded-lg bg-brand-gold/5">
                      <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                      <span className="text-sm font-medium">Fast Boiling</span>
                    </div>
                    <div className="flex items-center p-3 rounded-lg bg-brand-gold/5">
                      <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                      <span className="text-sm font-medium">Auto Shut-off</span>
                    </div>
                    <div className="flex items-center p-3 rounded-lg bg-brand-gold/5">
                      <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                      <span className="text-sm font-medium">Energy Efficient</span>
                    </div>
                    <div className="flex items-center p-3 rounded-lg bg-brand-gold/5">
                      <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                      <span className="text-sm font-medium">Premium Design</span>
                    </div>
                  </div>
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-brand-gold to-amber-500 hover:from-brand-gold hover:to-amber-600 text-white transition-all duration-500 hover:scale-105 py-6 text-lg font-semibold group shadow-lg"
                  >
                    <Link to="/products" className="flex items-center justify-center">
                      Discover Kettles
                      <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Enhanced Call to Action */}
        <div className="mt-20 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold via-brand-green to-brand-gold rounded-full blur opacity-30"></div>
            <Button 
              asChild 
              className="relative bg-gradient-to-r from-brand-green via-green-600 to-brand-green hover:from-green-600 hover:via-brand-green hover:to-green-600 text-white px-12 py-8 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 hover:scale-105 font-bold"
            >
              <Link to="/products" className="flex items-center">
                View Complete Collection
                <ChevronRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
