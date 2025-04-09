
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Star, Info } from 'lucide-react';

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
      image: 'https://images.unsplash.com/photo-1613764153383-b9470ce5700f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Compact and efficient 2-burner gas stove ideal for small families.',
      features: ['2 Burners', 'Stainless Steel Body', 'Manual Ignition', '1 Year Warranty']
    },
    {
      id: 'gs3',
      name: '4-Burner Deluxe Gas Stove',
      category: 'gas-stoves',
      price: 5500,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1585237017125-24baf8d7406f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Compact single burner gas stove perfect for bachelors or small kitchens.',
      features: ['Single Burner', 'Portable Design', 'Stainless Steel Body', '1 Year Warranty']
    },
    {
      id: 'k1',
      name: 'Electric Kettle 1.5L',
      category: 'kettles',
      price: 1200,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1580791515456-cee8272fede7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1622623373034-14fb466d0be1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1616418013800-2cf75781732b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1595340457346-7e28c77c30d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Compact travel kettle ideal for trips and small spaces.',
      features: ['0.5L Capacity', 'Compact Design', 'Dual Voltage', 'Travel Pouch Included']
    }
  ];
  
  const filteredProducts = products.filter(product => product.category === activeTab);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-green to-green-900 text-white py-16">
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
              <TabsList className="inline-flex">
                <TabsTrigger value="gas-stoves" className="text-lg px-6">Gas Stoves</TabsTrigger>
                <TabsTrigger value="kettles" className="text-lg px-6">Kettles</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="gas-stoves">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="kettles">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Product Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-brand-green">Product Support</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We provide comprehensive after-sales support for all our products. 
            If you need assistance, please reach out to our customer service team.
          </p>
          <Button asChild className="bg-brand-green hover:bg-green-800">
            <a href="/contact">Contact Support</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-0 right-0 p-2 flex flex-col gap-2">
          {product.isFeatured && (
            <Badge className="bg-brand-gold">Featured</Badge>
          )}
          {product.isBestseller && (
            <Badge className="bg-red-500">Bestseller</Badge>
          )}
          {product.isNewArrival && (
            <Badge className="bg-blue-500">New Arrival</Badge>
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
          <ul className="list-disc list-inside text-gray-600">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
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
