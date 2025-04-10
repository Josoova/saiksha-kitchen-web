
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Star, Info, Building, CheckCircle, Users, MapPin, Mail } from 'lucide-react';

// Product types
type ProductCategory = 'gas-stoves' | 'kettles' | 'about';

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

// Leadership data
const leadershipTeam = [
  {
    name: "Mrs. Thangamalar Jaganath",
    position: "Director",
    bio: "Mrs. Thangamalar Jaganath, also Partner at Vasanth & Co, plays a pivotal role in steering the retail giant's legacy. She also leads Thangam Enterprises, a premier B2B provider. With her strategic vision and industry expertise, she continues to drive growth, innovation, and excellence across all ventures."
  },
  {
    name: "Mr. Jaganath Ramakrishnan",
    position: "Director",
    bio: "Mr. Jaganath Ramakrishnan, also the director of Thangam Enterprises and Proprietor of Saiksha Agencies has brought value to this company with deep industry knowledge, strategic partnerships, and a commitment to customer satisfaction, has positioned the company as a trusted leader in the consumer durables and corporate gifting space."
  },
  {
    name: "Mr. Balachandran TB",
    position: "Vice President",
    bio: "The unit is managed by Mr. Balachandran TB, Vice President, whose leadership guarantees precision in every product. Mr. Balachandran, with 25 years as production head at Super Flame (Gas Stove Manufacturer), Delhi followed by 25 years at Butterfly Gandhimadhi Appliances, brings unmatched expertise to lead our manufacturing plant."
  }
];

// Gas stove specifications
const gasStoveSpecs = {
  twoBurner: [
    { id: "2b1", name: "2 Burner PC Diamond Cut Frame", size: "575 x 275 x 6 mm", features: ["PC Diamond Cut Frame", "Straight Gas Pipe"] },
    { id: "2b2", name: "2 Burner PC Straight Frame", size: "575 x 275 x 6 mm", features: ["PC Straight Frame", "T Gas Pipe"] },
    { id: "2b3", name: "2 Burner SS Diamond Cut Frame", size: "600 x 320 x 6 mm", features: ["SS Diamond Cut Frame", "T Gas Pipe"] },
    { id: "2b4", name: "2 Burner SS Straight Frame", size: "600 x 350 x 6 mm", features: ["SS Straight Frame", "T Gas Pipe"] },
    { id: "2b5", name: "2 Burner SS Straight Frame Jumbo", size: "700 x 360 x 6 mm", features: ["SS Straight Frame", "T Gas Pipe", "Jumbo Size"] }
  ],
  threeBurner: [
    { id: "3b1", name: "3 Burner PC Diamond Cut Frame", size: "690 x 360 x 6 mm", features: ["PC Diamond Cut Frame", "Straight Gas Pipe"] },
    { id: "3b2", name: "3 Burner Straight Frame", size: "720 x 375 x 6 mm", features: ["Straight Frame", "T Gas Pipe"] }
  ],
  fourBurner: [
    { id: "4b1", name: "4 Burner SS Diamond Cut Frame", size: "635 x 500 x 6 mm", features: ["SS Diamond Cut Frame", "T Gas Pipe"] },
    { id: "4b2", name: "4 Burner Straight Tapered Frame", size: "860 x 400 x 8 mm", features: ["Straight Tapered Frame", "Straight Gas Pipe"] }
  ]
};

// Kettle specifications
const kettleSpecs = [
  { id: "k1", name: "Electric Kettle 1.5L", features: ["1.5L Capacity", "Auto Shutoff", "Boil-Dry Protection"] },
  { id: "k2", name: "Electric Kettle 1.8L", features: ["1.8L Capacity", "LED Indicator", "Cordless Design"] },
  { id: "k3", name: "Multi Kettle", features: ["Variable Temperature Control", "Keep Warm Function", "Digital Display"] }
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products & Company</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Discover our range of high-quality gas stoves and kettles designed for the modern Indian kitchen,
            and learn about our mission, vision, and leadership.
          </p>
        </div>
      </section>

      {/* Products & Company Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="gas-stoves" className="w-full" onValueChange={(value) => setActiveTab(value as ProductCategory)}>
            <div className="text-center mb-8">
              <TabsList className="inline-flex">
                <TabsTrigger value="gas-stoves" className="text-lg px-6">Gas Stoves</TabsTrigger>
                <TabsTrigger value="kettles" className="text-lg px-6">Kettles</TabsTrigger>
                <TabsTrigger value="about" className="text-lg px-6">About Us</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Gas Stoves Tab */}
            <TabsContent value="gas-stoves">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-brand-green mb-6">Our Gas Stove Range</h2>
                
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4">2 Burner Gas Stoves</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gasStoveSpecs.twoBurner.map((spec) => (
                      <Card key={spec.id} className="overflow-hidden shadow-md hover:shadow-lg transition-all">
                        <CardContent className="p-6">
                          <h4 className="text-xl font-bold mb-2">{spec.name}</h4>
                          <p className="text-gray-700 mb-3">Glass Size: {spec.size}</p>
                          <div className="mb-4">
                            <h5 className="font-semibold mb-2">Features:</h5>
                            <ul className="list-disc list-inside text-gray-600">
                              {spec.features.map((feature, index) => (
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
                    ))}
                  </div>
                </div>
                
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4">3 Burner Gas Stoves</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gasStoveSpecs.threeBurner.map((spec) => (
                      <Card key={spec.id} className="overflow-hidden shadow-md hover:shadow-lg transition-all">
                        <CardContent className="p-6">
                          <h4 className="text-xl font-bold mb-2">{spec.name}</h4>
                          <p className="text-gray-700 mb-3">Glass Size: {spec.size}</p>
                          <div className="mb-4">
                            <h5 className="font-semibold mb-2">Features:</h5>
                            <ul className="list-disc list-inside text-gray-600">
                              {spec.features.map((feature, index) => (
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
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">4 Burner Gas Stoves</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gasStoveSpecs.fourBurner.map((spec) => (
                      <Card key={spec.id} className="overflow-hidden shadow-md hover:shadow-lg transition-all">
                        <CardContent className="p-6">
                          <h4 className="text-xl font-bold mb-2">{spec.name}</h4>
                          <p className="text-gray-700 mb-3">Glass Size: {spec.size}</p>
                          <div className="mb-4">
                            <h5 className="font-semibold mb-2">Features:</h5>
                            <ul className="list-disc list-inside text-gray-600">
                              {spec.features.map((feature, index) => (
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
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
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
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-brand-green mb-6">Our Electric Kettle Range</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {kettleSpecs.map((spec) => (
                    <Card key={spec.id} className="overflow-hidden shadow-md hover:shadow-lg transition-all">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold mb-2">{spec.name}</h4>
                        <div className="mb-4">
                          <h5 className="font-semibold mb-2">Features:</h5>
                          <ul className="list-disc list-inside text-gray-600">
                            {spec.features.map((feature, index) => (
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
                  ))}
                </div>
              </div>

              <div className="mt-8">
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
            
            {/* About Us Tab */}
            <TabsContent value="about">
              {/* Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <Card className="overflow-hidden shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-brand-green h-12 w-12 rounded-full flex items-center justify-center mr-4">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">Our Mission</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      To deliver innovative, reliable, and energy-efficient kitchen appliances that meet the 
                      evolving needs of consumers worldwide. To prosper long into the future, while 
                      maintaining top quality and minimizing costs. The company also believes in caring for 
                      the community and giving back to society.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-brand-gold h-12 w-12 rounded-full flex items-center justify-center mr-4">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">Our Vision</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      To be the leading provider of kitchen appliances, committed to superior design, 
                      technology, and sustainability. To bring innovation and quality to every kitchen and 
                      home, empowering customers with reliable and stylish appliances. To cultivate a group 
                      of employees who accept the work philosophy, have family support, and are proud of 
                      the company.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Leadership */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-brand-green mb-6">Our Leadership</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {leadershipTeam.map((leader, index) => (
                    <Card key={index} className="overflow-hidden shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                        <p className="text-brand-gold font-semibold mb-4">{leader.position}</p>
                        <p className="text-gray-700">{leader.bio}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Infrastructure */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-brand-green mb-6">Our Infrastructure</h2>
                <Card className="overflow-hidden shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-brand-green h-12 w-12 rounded-full flex items-center justify-center mr-4">
                        <Building className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">State-of-the-art Manufacturing</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Saiksha Kitchen Appliances is the first and largest fully-integrated electric kettle 
                      factory in South India, aimed towards the manufacture of electric kettles and ISI 
                      certified gas stoves. Most of the manufacturing process is in-house, resulting in a 
                      homogeneous production line which boasts unparalleled efficiency while reducing the 
                      rejections in the process.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The factory boasts a wide range of sophisticated and modern machinery and 
                      infrastructure which gives our works an output of 2,00,000 electric kettles and 50,000 
                      gas stoves per month. The workspace is divided into 2 production lines, one each for 
                      electric kettle and gas stove manufacturing. With a wide array of machinery like laser 
                      welders, multi-ton presses, brazing machines, ultrasonic cleaner, polishers and 
                      inspection equipment divided among the two production lines.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      {/* Placeholder for infrastructure images - replace with actual images */}
                      <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">Infrastructure Image 1</p>
                      </div>
                      <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">Infrastructure Image 2</p>
                      </div>
                      <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">Infrastructure Image 3</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-brand-green mb-6">Contact Information</h2>
                <Card className="overflow-hidden shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex mb-4">
                          <MapPin className="h-6 w-6 text-brand-gold mr-2" />
                          <div>
                            <h3 className="text-xl font-bold mb-2">Head Office</h3>
                            <p className="text-gray-700">
                              No. 147, 2nd Floor, GN Chetty Road,<br />
                              T Nagar, Chennai - 600017
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex mb-4">
                          <Building className="h-6 w-6 text-brand-green mr-2" />
                          <div>
                            <h3 className="text-xl font-bold mb-2">Works</h3>
                            <p className="text-gray-700">
                              Survey no 150/16A, 150/16B2, 150/16C,<br />
                              Panakattukupam Village, Vandalur Taluk,<br />
                              Chengalpattu - 600048
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <div className="flex">
                        <Mail className="h-6 w-6 text-brand-gold mr-2" />
                        <h3 className="text-xl font-bold mb-2">Email</h3>
                      </div>
                      <p className="text-gray-700">info@ska.lt</p>
                    </div>
                  </CardContent>
                </Card>
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
