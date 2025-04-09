import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Award, BarChart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-green to-green-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Kitchen Appliances for Modern Homes</h1>
              <p className="text-lg mb-6">
                Discover our range of high-quality gas stoves and kettles designed for efficiency, durability, and style.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-brand-gold hover:bg-amber-600 text-white">
                  <Link to="/products">Browse Products</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-brand-green">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Modern Kitchen with Gas Stove" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Our Featured Products</h2>
            <p className="text-gray-600">Designed for efficiency and built to last</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gas Stove Card */}
            <Card className="overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1613764153383-b9470ce5700f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
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
            <Card className="overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1622623373034-14fb466d0be1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
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

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Why Choose Saiksha Kitchen Appliances</h2>
            <p className="text-gray-600">We pride ourselves on quality, innovation, and customer satisfaction</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-brand-green h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                All our products are made using high-grade materials ensuring longevity and performance.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-brand-green h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Energy Efficient</h3>
              <p className="text-gray-600">
                Designed to provide maximum performance while using minimum energy resources.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-brand-green h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Support</h3>
              <p className="text-gray-600">
                Our dedicated team ensures prompt service and support whenever you need assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OEM Clients Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Our OEM Clients</h2>
            <p className="text-gray-600">Trusted manufacturing partners in the kitchen appliance industry</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {/* Client Logos */}
            <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-gray-700">Preethi</div>
            </div>
            
            <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-gray-700">Sowbaghya</div>
            </div>
            
            <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-gray-700">Premier</div>
            </div>
            
            <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-gray-700">Butterfly</div>
            </div>
            
            <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-gray-700">Easy</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
