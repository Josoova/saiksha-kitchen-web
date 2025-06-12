
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Star, Info, CheckCircle, MapPin, Mail, Award, TrendingUp, Flame } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { gasStoveSpecs, kettleSpecs } from '@/data/products';

type ProductCategory = 'gas-stoves' | 'kettles';

const renderRatingStars = (rating: number) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-4 w-4 ${i < Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
        />
      ))}
      <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
};

const Products = () => {
  const [activeTab, setActiveTab] = useState<ProductCategory>('gas-stoves');
  const navigate = useNavigate();
  
  const handleRequestQuote = () => {
    navigate('/contact', { state: { fromProduct: true } });
  };
  
  const handleProductClick = (productId: string, category: ProductCategory) => {
    navigate(`/products/${category}/${productId}`);
  };
  
  const renderGasStoveSpec = (spec: any) => (
    <Card 
      key={spec.id} 
      className="overflow-hidden shadow-md hover:shadow-lg transition-all animate-fade-in cursor-pointer"
      onClick={() => handleProductClick(spec.id, 'gas-stoves')}
    >
      <div className="relative">
        <img 
          src={spec.image} 
          alt={spec.name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-0 right-0 p-2 flex flex-col gap-2">
          {spec.isBestseller && (
            <Badge className="bg-red-500 animate-pulse">
              <Award className="w-3 h-3 mr-1" /> Bestseller
            </Badge>
          )}
          {spec.isNewArrival && (
            <Badge className="bg-blue-500">
              <TrendingUp className="w-3 h-3 mr-1" /> New Arrival
            </Badge>
          )}
        </div>
      </div>
      <CardContent className="p-6">
        <h4 className="text-xl font-bold mb-2">{spec.name}</h4>
        <div className="mb-2">{renderRatingStars(spec.rating)}</div>
        <p className="text-gray-700 mb-3">Glass Size: {spec.size}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button 
          onClick={(e) => {
            e.stopPropagation();
            handleRequestQuote();
          }}
          className="w-full bg-brand-green hover:bg-green-800 transition-transform hover:scale-105"
        >
          Request Quote
        </Button>
      </CardFooter>
    </Card>
  );

  const renderKettleSpec = (spec: any) => (
    <Card 
      key={spec.id} 
      className="overflow-hidden shadow-md hover:shadow-lg transition-all animate-fade-in cursor-pointer"
      onClick={() => handleProductClick(spec.id, 'kettles')}
    >
      <div className="relative">
        <img 
          src={spec.image} 
          alt={spec.name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-0 right-0 p-2 flex flex-col gap-2">
          {spec.isBestseller && (
            <Badge className="bg-red-500 animate-pulse">
              <Award className="w-3 h-3 mr-1" /> Bestseller
            </Badge>
          )}
          {spec.isNewArrival && (
            <Badge className="bg-blue-500">
              <TrendingUp className="w-3 h-3 mr-1" /> New Arrival
            </Badge>
          )}
        </div>
      </div>
      <CardContent className="p-6">
        <h4 className="text-xl font-bold mb-2">{spec.name}</h4>
        <div className="mb-2">{renderRatingStars(spec.rating)}</div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button 
          onClick={(e) => {
            e.stopPropagation();
            handleRequestQuote();
          }}
          className="w-full bg-brand-green hover:bg-green-800 transition-transform hover:scale-105"
        >
          Request Quote
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="relative">
      <section 
        className="relative bg-gradient-to-r from-brand-green to-green-900 text-white py-32 md:py-40 overflow-hidden animate-fade-in"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/4bc61102-1ca7-45f2-ad90-5f2078c505ca.png" 
            alt="Kitchen Appliances Collection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-shadow animate-scale-in">
            Our Premium Products
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in" style={{animationDelay: "300ms"}}>
            Discover our range of high-quality gas stoves and kettles designed for the modern Indian kitchen.
          </p>
          <div className="w-32 h-1 bg-brand-gold mx-auto mt-6 animate-scale-in" style={{animationDelay: "400ms"}}></div>
        </div>
      </section>

      <section className="py-16 relative z-10 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="gas-stoves" className="w-full" onValueChange={(value) => setActiveTab(value as ProductCategory)}>
            <div className="text-center mb-8">
              <TabsList className="inline-flex animate-fade-in bg-white/80 backdrop-blur-sm shadow-lg rounded-full overflow-hidden border border-gray-200">
                <TabsTrigger 
                  value="gas-stoves" 
                  className="text-lg px-8 py-3 transition-all hover:-translate-y-1 rounded-full"
                >
                  Gas Stoves
                </TabsTrigger>
                <TabsTrigger 
                  value="kettles" 
                  className="text-lg px-8 py-3 transition-all hover:-translate-y-1 rounded-full"
                >
                  Kettles
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="gas-stoves">
              <div className="mb-10 animate-fade-in" style={{animationDelay: "150ms"}}>
                <h2 className="text-3xl font-bold text-brand-green mb-6">Our Gas Stove Range</h2>
                
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Flame className="h-6 w-6 text-brand-gold mr-2" />
                    2 Burner Gas Stoves
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gasStoveSpecs.twoBurner.map((spec) => renderGasStoveSpec(spec))}
                  </div>
                </div>
                
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Flame className="h-6 w-6 text-brand-gold mr-2" />
                    3 Burner Gas Stoves
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gasStoveSpecs.threeBurner.map((spec) => renderGasStoveSpec(spec))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Flame className="h-6 w-6 text-brand-gold mr-2" />
                    4 Burner Gas Stoves
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gasStoveSpecs.fourBurner.map((spec) => renderGasStoveSpec(spec))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="kettles">
              <div className="mb-10 animate-fade-in" style={{animationDelay: "150ms"}}>
                <h2 className="text-3xl font-bold text-brand-green mb-6">Our Electric Kettle Range</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {kettleSpecs.map((spec) => renderKettleSpec(spec))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 relative animate-fade-in bg-gradient-to-b from-amber-50 to-green-50" style={{animationDelay: "450ms"}}>
        <div className="container mx-auto px-4 text-center relative z-10 mt-10">
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all border-t-4 border-brand-green">
            <h2 className="text-3xl font-bold mb-6 text-brand-green">Product Support</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              We provide comprehensive after-sales support for all our products. 
              If you need assistance, please reach out to our customer service team.
            </p>
            <Button 
              onClick={handleRequestQuote}
              asChild 
              className="bg-brand-green hover:bg-green-800 animate-scale-in transition-transform hover:scale-105 px-8 py-6 text-lg rounded-full"
            >
              <span>Contact Support</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
