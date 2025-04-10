
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Star, Info, CheckCircle, MapPin, Mail, Award, TrendingUp, Flame } from 'lucide-react';

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
  
  // Sample product data
  const products: Product[] = [
    {
      id: 'gs1',
      name: 'Premium 3-Burner Gas Stove',
      category: 'gas-stoves',
      price: 3500,
      rating: 4.8,
      image: 'public/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png',
      description: 'A high-quality 3-burner gas stove with durable brass burners and toughened glass top.',
      features: ['3 Brass Burners', 'Toughened Glass Top', 'Spill-Proof Design', '2 Year Warranty'],
      isFeatured: true,
      isBestseller: true
    },
    {
      id: 'gs2',
      name: '2-Burner Classic Gas Stove',
      category: 'gas-stoves',
      price: 2200,
      rating: 4.5,
      image: 'public/lovable-uploads/2e31a859-9ba3-46b9-8eae-8b9580dfe7bb.png',
      description: 'Compact and efficient 2-burner gas stove ideal for small families.',
      features: ['2 Burners', 'Stainless Steel Body', 'Manual Ignition', '1 Year Warranty']
    },
    {
      id: 'gs3',
      name: '4-Burner Deluxe Gas Stove',
      category: 'gas-stoves',
      price: 5500,
      rating: 4.9,
      image: 'public/lovable-uploads/896a11a8-b55e-4ef6-a80e-07ceda3ed41c.png',
      description: 'Premium 4-burner gas stove with auto-ignition and premium finish.',
      features: ['4 Brass Burners', 'Auto Ignition', 'Toughened Glass', 'Pan Supports', '3 Year Warranty'],
      isNewArrival: true
    },
    {
      id: 'gs4',
      name: 'Mini Gas Stove',
      category: 'gas-stoves',
      price: 1500,
      rating: 4.3,
      image: 'public/lovable-uploads/365208f2-ccbc-4d31-9233-da5887f389b8.png',
      description: 'Compact single burner gas stove perfect for bachelors or small kitchens.',
      features: ['Single Burner', 'Portable Design', 'Stainless Steel Body', '1 Year Warranty']
    },
    {
      id: 'k1',
      name: 'Electric Kettle 1.5L',
      category: 'kettles',
      price: 1200,
      rating: 4.7,
      image: 'public/lovable-uploads/c621b6ac-0c4d-45d4-9f0a-11a9e8ca11d6.png',
      description: 'Fast-heating 1.5L electric kettle with auto-shutoff and boil-dry protection.',
      features: ['1.5L Capacity', 'Auto Shutoff', 'Boil-Dry Protection', 'Cordless Design', '1 Year Warranty'],
      isFeatured: true
    },
    {
      id: 'k2',
      name: 'Traditional Whistling Kettle',
      category: 'kettles',
      price: 800,
      rating: 4.4,
      image: 'public/lovable-uploads/500b1e70-f84a-4ac7-b409-5df61ce5823d.png',
      description: 'Classic stainless steel whistling kettle for stovetop use.',
      features: ['2L Capacity', 'Whistling Feature', 'Stainless Steel', 'Ergonomic Handle'],
      isBestseller: true
    },
    {
      id: 'k3',
      name: 'Smart Electric Kettle',
      category: 'kettles',
      price: 2500,
      rating: 4.9,
      image: 'public/lovable-uploads/c621b6ac-0c4d-45d4-9f0a-11a9e8ca11d6.png',
      description: 'Smart kettle with temperature control and keep-warm function.',
      features: ['Temperature Control', 'Keep Warm Function', '1.8L Capacity', 'LED Display', '2 Year Warranty'],
      isNewArrival: true
    },
    {
      id: 'k4',
      name: 'Mini Travel Kettle',
      category: 'kettles',
      price: 900,
      rating: 4.2,
      image: 'public/lovable-uploads/9234820b-7143-420b-8fee-f1729c5d6646.png',
      description: 'Compact travel kettle ideal for trips and small spaces.',
      features: ['0.5L Capacity', 'Compact Design', 'Dual Voltage', 'Travel Pouch Included']
    }
  ];
  
  const filteredProducts = products.filter(product => product.category === activeTab);

  const renderGasStoveSpec = (spec: GasStoveSpec) => (
    <Card key={spec.id} className="overflow-hidden shadow-md hover:shadow-lg transition-all animate-fade-in">
      <div className="relative">
        <img 
          src={spec.image} 
          alt={spec.name}
          className="w-full h-48 object-cover"
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
        <Button className="w-full bg-brand-green hover:bg-green-800 transition-transform hover:scale-105">
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
          className="w-full h-48 object-cover"
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
        <Button className="w-full bg-brand-green hover:bg-green-800 transition-transform hover:scale-105">
          Request Quote
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-green to-green-900 text-white py-16 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Discover our range of high-quality gas stoves and kettles designed for the modern Indian kitchen.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="gas-stoves" className="w-full" onValueChange={(value) => setActiveTab(value as ProductCategory)}>
            <div className="text-center mb-8">
              <TabsList className="inline-flex animate-fade-in">
                <TabsTrigger value="gas-stoves" className="text-lg px-6 transition-all hover:-translate-y-1">Gas Stoves</TabsTrigger>
                <TabsTrigger value="kettles" className="text-lg px-6 transition-all hover:-translate-y-1">Kettles</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Gas Stoves Tab */}
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

              <div className="mt-8 animate-fade-in" style={{animationDelay: "300ms"}}>
                {filteredProducts.length > 0 && (
                  <>
                    <h3 className="text-2xl font-bold mb-6">Featured Gas Stoves</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </TabsContent>
            
            {/* Kettles Tab */}
            <TabsContent value="kettles">
              <div className="mb-10 animate-fade-in" style={{animationDelay: "150ms"}}>
                <h2 className="text-3xl font-bold text-brand-green mb-6">Our Electric Kettle Range</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {kettleSpecs.map((spec) => renderKettleSpec(spec))}
                </div>
              </div>

              <div className="mt-8 animate-fade-in" style={{animationDelay: "300ms"}}>
                {filteredProducts.length > 0 && (
                  <>
                    <h3 className="text-2xl font-bold mb-6">Featured Kettles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Product Support Section */}
      <section className="py-16 bg-gray-50 animate-fade-in" style={{animationDelay: "450ms"}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-brand-green">Product Support</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We provide comprehensive after-sales support for all our products. 
            If you need assistance, please reach out to our customer service team.
          </p>
          <Button asChild className="bg-brand-green hover:bg-green-800 animate-scale-in transition-transform hover:scale-105">
            <a href="/contact">Contact Support</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:scale-105 duration-300">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-0 right-0 p-2 flex flex-col gap-2">
          {product.isFeatured && (
            <Badge className="bg-brand-gold animate-pulse">
              <Star className="w-3 h-3 mr-1" /> Featured
            </Badge>
          )}
          {product.isBestseller && (
            <Badge className="bg-red-500 animate-pulse">
              <Award className="w-3 h-3 mr-1" /> Bestseller
            </Badge>
          )}
          {product.isNewArrival && (
            <Badge className="bg-blue-500">
              <TrendingUp className="w-3 h-3 mr-1" /> New Arrival
            </Badge>
          )}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <div className="mb-3">
          {renderRatingStars(product.rating)}
        </div>
        <p className="text-xl font-semibold text-brand-green mb-3">₹{product.price}</p>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2 flex items-center">
            <Info className="h-4 w-4 mr-1" />
            Features
          </h4>
          <ul className="list-inside text-gray-600">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start mb-1">
                <CheckCircle className="h-4 w-4 text-brand-green mr-2 mt-1 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button className="w-full bg-brand-green hover:bg-green-800">
          Request Quote
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Products;
