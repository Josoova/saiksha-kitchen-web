import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Star, Info, CheckCircle, MapPin, Mail, Award, TrendingUp, Flame } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Product types
type ProductCategory = 'gas-stoves' | 'kettles';

interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  rating: number;
  image: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
  isBestseller?: boolean;
  isNewArrival?: boolean;
}

interface GasStoveSpec {
  id: string;
  name: string;
  size: string;
  features: string[];
  image: string;
  rating: number;
  isBestseller?: boolean;
  isNewArrival?: boolean;
}

// Helper function to render rating stars
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

// Gas stove specifications
const gasStoveSpecs = {
  twoBurner: [
    { 
      id: "2b1", 
      name: "2 Burner PC Diamond Cut Frame", 
      size: "575 x 275 x 6 mm", 
      features: ["PC Diamond Cut Frame", "Straight Gas Pipe"],
      image: "public/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png",
      rating: 4.7,
      isBestseller: true
    },
    { 
      id: "2b2", 
      name: "2 Burner PC Straight Frame", 
      size: "575 x 275 x 6 mm", 
      features: ["PC Straight Frame", "T Gas Pipe"],
      image: "public/lovable-uploads/9234820b-7143-420b-8fee-f1729c5d6646.png",
      rating: 4.5
    },
    { 
      id: "2b3", 
      name: "2 Burner SS Diamond Cut Frame", 
      size: "600 x 320 x 6 mm", 
      features: ["SS Diamond Cut Frame", "T Gas Pipe"],
      image: "public/lovable-uploads/2e31a859-9ba3-46b9-8eae-8b9580dfe7bb.png",
      rating: 4.6
    },
    { 
      id: "2b4", 
      name: "2 Burner SS Straight Frame", 
      size: "600 x 350 x 6 mm", 
      features: ["SS Straight Frame", "T Gas Pipe"],
      image: "public/lovable-uploads/896a11a8-b55e-4ef6-a80e-07ceda3ed41c.png",
      rating: 4.4
    },
    { 
      id: "2b5", 
      name: "2 Burner SS Straight Frame Jumbo", 
      size: "700 x 360 x 6 mm", 
      features: ["SS Straight Frame", "T Gas Pipe", "Jumbo Size"],
      image: "public/lovable-uploads/365208f2-ccbc-4d31-9233-da5887f389b8.png",
      rating: 4.8,
      isNewArrival: true
    }
  ],
  threeBurner: [
    { 
      id: "3b1", 
      name: "3 Burner PC Diamond Cut Frame", 
      size: "690 x 360 x 6 mm", 
      features: ["PC Diamond Cut Frame", "Straight Gas Pipe"],
      image: "public/lovable-uploads/2e31a859-9ba3-46b9-8eae-8b9580dfe7bb.png",
      rating: 4.9,
      isBestseller: true
    },
    { 
      id: "3b2", 
      name: "3 Burner Straight Frame", 
      size: "720 x 375 x 6 mm", 
      features: ["Straight Frame", "T Gas Pipe"],
      image: "public/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png",
      rating: 4.7,
      isNewArrival: true
    }
  ],
  fourBurner: [
    { 
      id: "4b1", 
      name: "4 Burner SS Diamond Cut Frame", 
      size: "635 x 500 x 6 mm", 
      features: ["SS Diamond Cut Frame", "T Gas Pipe"],
      image: "public/lovable-uploads/896a11a8-b55e-4ef6-a80e-07ceda3ed41c.png",
      rating: 4.8
    },
    { 
      id: "4b2", 
      name: "4 Burner Straight Tapered Frame", 
      size: "860 x 400 x 8 mm", 
      features: ["Straight Tapered Frame", "Straight Gas Pipe"],
      image: "public/lovable-uploads/9234820b-7143-420b-8fee-f1729c5d6646.png",
      rating: 4.9,
      isNewArrival: true
    }
  ]
};

// Kettle specifications
const kettleSpecs = [
  { 
    id: "k1", 
    name: "Electric Kettle 1.5L", 
    features: ["1.5L Capacity", "Auto Shutoff", "Boil-Dry Protection"],
    image: "public/lovable-uploads/c621b6ac-0c4d-45d4-9f0a-11a9e8ca11d6.png",
    rating: 4.8,
    isBestseller: true
  },
  { 
    id: "k2", 
    name: "Electric Kettle 1.8L", 
    features: ["1.8L Capacity", "LED Indicator", "Cordless Design"],
    image: "public/lovable-uploads/2e31a859-9ba3-46b9-8eae-8b9580dfe7bb.png",
    rating: 4.6
  },
  { 
    id: "k3", 
    name: "Multi Kettle", 
    features: ["Variable Temperature Control", "Keep Warm Function", "Digital Display"],
    image: "public/lovable-uploads/c621b6ac-0c4d-45d4-9f0a-11a9e8ca11d6.png",
    rating: 4.9,
    isNewArrival: true
  }
];

const Products = () => {
  const [activeTab, setActiveTab] = useState<ProductCategory>('gas-stoves');
  const navigate = useNavigate();
  
  const handleRequestQuote = () => {
    navigate('/contact', { state: { fromProduct: true } });
  };
  
  const renderGasStoveSpec = (spec: GasStoveSpec) => (
    <Card key={spec.id} className="overflow-hidden shadow-md hover:shadow-lg transition-all animate-fade-in">
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
        <div className="mb-4">
          <h5 className="font-semibold mb-2">Features:</h5>
          <ul className="list-disc list-inside text-gray-600">
            {spec.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-4 w-4 text-brand-green mr-2 mt-1 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button 
          onClick={handleRequestQuote}
          className="w-full bg-brand-green hover:bg-green-800 transition-transform hover:scale-105"
        >
          Request Quote
        </Button>
      </CardFooter>
    </Card>
  );

  const renderKettleSpec = (spec: any) => (
    <Card key={spec.id} className="overflow-hidden shadow-md hover:shadow-lg transition-all animate-fade-in">
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
        <div className="mb-4">
          <h5 className="font-semibold mb-2">Features:</h5>
          <ul className="list-disc list-inside text-gray-600">
            {spec.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-4 w-4 text-brand-green mr-2 mt-1 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button 
          onClick={handleRequestQuote}
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
        className="relative bg-gradient-to-r from-brand-green to-green-900 text-white py-20 overflow-hidden animate-fade-in"
        style={{
          backgroundImage: 'url(public/lovable-uploads/500b1e70-f84a-4ac7-b409-5df61ce5823d.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-shadow animate-scale-in">
            Our Premium Products
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in" style={{animationDelay: "300ms"}}>
            Discover our range of high-quality gas stoves and kettles designed for the modern Indian kitchen.
          </p>
          <div className="w-32 h-1 bg-brand-gold mx-auto mt-6 animate-scale-in" style={{animationDelay: "400ms"}}></div>
        </div>
      </section>

      <section className="py-16 relative z-10 bg-gradient-to-b from-white to-gray-50">
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

      <section className="py-16 relative animate-fade-in bg-gray-50" style={{animationDelay: "450ms"}}>
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
