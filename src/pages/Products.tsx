
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
      className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in cursor-pointer group border-0 bg-white"
      onClick={() => handleProductClick(spec.id, 'gas-stoves')}
    >
      <div className="relative">
        <img 
          src={spec.image} 
          alt={spec.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-0 right-0 p-3 flex flex-col gap-2">
          {spec.isBestseller && (
            <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg">
              <Award className="w-3 h-3 mr-1" /> Bestseller
            </Badge>
          )}
          {spec.isNewArrival && (
            <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
              <TrendingUp className="w-3 h-3 mr-1" /> New
            </Badge>
          )}
        </div>
      </div>
      <CardContent className="p-6">
        <h4 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-brand-green transition-colors">{spec.name}</h4>
        <div className="mb-3">{renderRatingStars(spec.rating)}</div>
        <p className="text-gray-600 font-medium">Glass Size: <span className="text-brand-green">{spec.size}</span></p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button 
          onClick={(e) => {
            e.stopPropagation();
            handleRequestQuote();
          }}
          className="w-full bg-gradient-to-r from-brand-green to-green-700 hover:from-green-700 hover:to-brand-green transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Request Quote
        </Button>
      </CardFooter>
    </Card>
  );

  const renderKettleSpec = (spec: any) => (
    <Card 
      key={spec.id} 
      className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in cursor-pointer group border-0 bg-white"
      onClick={() => handleProductClick(spec.id, 'kettles')}
    >
      <div className="relative">
        <img 
          src={spec.image} 
          alt={spec.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-0 right-0 p-3 flex flex-col gap-2">
          {spec.isBestseller && (
            <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg">
              <Award className="w-3 h-3 mr-1" /> Bestseller
            </Badge>
          )}
          {spec.isNewArrival && (
            <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
              <TrendingUp className="w-3 h-3 mr-1" /> New
            </Badge>
          )}
        </div>
      </div>
      <CardContent className="p-6">
        <h4 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-brand-green transition-colors">{spec.name}</h4>
        <div className="mb-3">{renderRatingStars(spec.rating)}</div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button 
          onClick={(e) => {
            e.stopPropagation();
            handleRequestQuote();
          }}
          className="w-full bg-gradient-to-r from-brand-green to-green-700 hover:from-green-700 hover:to-brand-green transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Request Quote
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="relative min-h-screen">
      <section 
        className="relative bg-gradient-to-br from-brand-green via-green-700 to-green-900 text-white py-32 md:py-40 overflow-hidden animate-fade-in"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/4bc61102-1ca7-45f2-ad90-5f2078c505ca.png" 
            alt="Kitchen Appliances Collection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow animate-scale-in">
              Our Premium Products
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: "300ms"}}>
              Discover our range of high-quality gas stoves and kettles designed for the modern Indian kitchen.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 mx-auto mt-8 animate-scale-in rounded-full" style={{animationDelay: "400ms"}}></div>
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10 bg-gradient-to-b from-white via-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="gas-stoves" className="w-full" onValueChange={(value) => setActiveTab(value as ProductCategory)}>
            <div className="text-center mb-12">
              <TabsList className="inline-flex animate-fade-in bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 p-2">
                <TabsTrigger 
                  value="gas-stoves" 
                  className="text-lg px-8 py-4 transition-all hover:-translate-y-1 rounded-xl font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-green data-[state=active]:to-green-700 data-[state=active]:text-white"
                >
                  Gas Stoves
                </TabsTrigger>
                <TabsTrigger 
                  value="kettles" 
                  className="text-lg px-8 py-4 transition-all hover:-translate-y-1 rounded-xl font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-green data-[state=active]:to-green-700 data-[state=active]:text-white"
                >
                  Kettles
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="gas-stoves">
              <div className="mb-16 animate-fade-in" style={{animationDelay: "150ms"}}>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-brand-green mb-4">Our Gas Stove Collection</h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">Premium quality gas stoves built for efficiency and durability</p>
                </div>
                
                <div className="mb-16">
                  <h3 className="text-3xl font-semibold mb-8 flex items-center justify-center">
                    <Flame className="h-8 w-8 text-brand-gold mr-3" />
                    2 Burner Gas Stoves
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gasStoveSpecs.twoBurner.map((spec) => renderGasStoveSpec(spec))}
                  </div>
                </div>
                
                <div className="mb-16">
                  <h3 className="text-3xl font-semibold mb-8 flex items-center justify-center">
                    <Flame className="h-8 w-8 text-brand-gold mr-3" />
                    3 Burner Gas Stoves
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gasStoveSpecs.threeBurner.map((spec) => renderGasStoveSpec(spec))}
                  </div>
                </div>
                
                <div className="mb-12">
                  <h3 className="text-3xl font-semibold mb-8 flex items-center justify-center">
                    <Flame className="h-8 w-8 text-brand-gold mr-3" />
                    4 Burner Gas Stoves
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gasStoveSpecs.fourBurner.map((spec) => renderGasStoveSpec(spec))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="kettles">
              <div className="mb-16 animate-fade-in" style={{animationDelay: "150ms"}}>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-brand-green mb-4">Our Electric Kettle Collection</h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">Smart and efficient electric kettles for your modern kitchen</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {kettleSpecs.map((spec) => renderKettleSpec(spec))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 relative animate-fade-in bg-gradient-to-br from-green-50 to-blue-50" style={{animationDelay: "450ms"}}>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="bg-white p-10 rounded-3xl shadow-2xl transform hover:-translate-y-2 transition-all border border-gray-100 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-green">Need Product Support?</h2>
            <p className="text-xl mb-8 text-gray-700 leading-relaxed">
              We provide comprehensive after-sales support for all our products. 
              Our dedicated customer service team is here to assist you with any queries.
            </p>
            <Button 
              onClick={handleRequestQuote}
              className="bg-gradient-to-r from-brand-green to-green-700 hover:from-green-700 hover:to-brand-green transition-all duration-300 hover:scale-105 px-12 py-6 text-xl rounded-2xl shadow-lg font-semibold"
            >
              Contact Support Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
