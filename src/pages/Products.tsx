
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, Award, TrendingUp } from 'lucide-react';
import { gasStoveSpecs, kettleSpecs } from '@/data/products';

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

const titleSlideImages = [
  {
    url: "/lovable-uploads/80d698c2-6615-459e-a49b-2e2f86385c50.png",
    title: "Kitchen Appliances Collection",
    description: "Premium quality for modern homes"
  },
  {
    url: "https://images.unsplash.com/photo-1585515656973-bb86d4677264?w=1920&h=600&fit=crop",
    title: "Electric Kettles",
    description: "Modern convenience for your kitchen"
  },
  {
    url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=600&fit=crop",
    title: "Quality Craftsmanship",
    description: "Built to last with attention to detail"
  }
];

const Products = () => {
  const [activeTab, setActiveTab] = useState('gas-stoves');

  return (
    <div className="bg-gradient-to-b from-white to-amber-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Title Slide */}
        <div className="text-center mb-16 animate-fade-in">
          {/* Image Carousel */}
          <div className="max-w-6xl mx-auto mb-8">
            <Carousel className="w-full">
              <CarouselContent>
                {titleSlideImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img 
                        src={image.url} 
                        alt={image.title}
                        className="w-full h-96 md:h-[600px] object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                        <div className="text-center text-white">
                          <h3 className="text-3xl md:text-5xl font-bold mb-4">{image.title}</h3>
                          <p className="text-xl md:text-2xl opacity-90">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="gas-stoves" className="text-lg py-3">Gas Stoves</TabsTrigger>
            <TabsTrigger value="kettles" className="text-lg py-3">Electric Kettles</TabsTrigger>
          </TabsList>

          <TabsContent value="gas-stoves" className="space-y-12">
            {/* 2 Burner Gas Stoves */}
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-center">2 Burner Gas Stoves</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gasStoveSpecs.twoBurner
                  .filter(stove => !['2b2', '2b3', '2b5'].includes(stove.id)) // Remove specified products
                  .map((stove) => (
                  <Link key={stove.id} to={`/products/gas-stoves/${stove.id}`}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="relative">
                          <img 
                            src={stove.image} 
                            alt={stove.name} 
                            className="w-full h-48 object-contain mb-4"
                          />
                          <div className="absolute top-2 right-2 flex flex-col gap-2">
                            {stove.isBestseller && (
                              <Badge className="bg-red-500">
                                <Award className="w-3 h-3 mr-1" /> Bestseller
                              </Badge>
                            )}
                            {stove.isNewArrival && (
                              <Badge className="bg-blue-500">
                                <TrendingUp className="w-3 h-3 mr-1" /> New
                              </Badge>
                            )}
                          </div>
                        </div>
                        <CardTitle className="text-lg">{stove.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {renderRatingStars(stove.rating)}
                          <p className="text-sm text-gray-600">Size: {stove.size}</p>
                          <div className="space-y-1">
                            {stove.features.map((feature, idx) => (
                              <p key={idx} className="text-sm text-gray-700">• {feature}</p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>

            {/* 3 Burner Gas Stoves */}
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-center">3 Burner Gas Stoves</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gasStoveSpecs.threeBurner.map((stove) => (
                  <Link key={stove.id} to={`/products/gas-stoves/${stove.id}`}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="relative">
                          <img 
                            src={stove.image} 
                            alt={stove.name} 
                            className="w-full h-48 object-contain mb-4"
                          />
                          <div className="absolute top-2 right-2 flex flex-col gap-2">
                            {stove.isBestseller && (
                              <Badge className="bg-red-500">
                                <Award className="w-3 h-3 mr-1" /> Bestseller
                              </Badge>
                            )}
                            {stove.isNewArrival && (
                              <Badge className="bg-blue-500">
                                <TrendingUp className="w-3 h-3 mr-1" /> New
                              </Badge>
                            )}
                          </div>
                        </div>
                        <CardTitle className="text-lg">{stove.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {renderRatingStars(stove.rating)}
                          <p className="text-sm text-gray-600">Size: {stove.size}</p>
                          <div className="space-y-1">
                            {stove.features.map((feature, idx) => (
                              <p key={idx} className="text-sm text-gray-700">• {feature}</p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>

            {/* 4 Burner Gas Stoves */}
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-center">4 Burner Gas Stoves</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gasStoveSpecs.fourBurner.map((stove) => (
                  <Link key={stove.id} to={`/products/gas-stoves/${stove.id}`}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="relative">
                          <img 
                            src={stove.image} 
                            alt={stove.name} 
                            className="w-full h-48 object-contain mb-4"
                          />
                          <div className="absolute top-2 right-2 flex flex-col gap-2">
                            {stove.isBestseller && (
                              <Badge className="bg-red-500">
                                <Award className="w-3 h-3 mr-1" /> Bestseller
                              </Badge>
                            )}
                            {stove.isNewArrival && (
                              <Badge className="bg-blue-500">
                                <TrendingUp className="w-3 h-3 mr-1" /> New
                              </Badge>
                            )}
                          </div>
                        </div>
                        <CardTitle className="text-lg">{stove.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {renderRatingStars(stove.rating)}
                          <p className="text-sm text-gray-600">Size: {stove.size}</p>
                          <div className="space-y-1">
                            {stove.features.map((feature, idx) => (
                              <p key={idx} className="text-sm text-gray-700">• {feature}</p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="kettles" className="space-y-12">
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-center">Electric Kettles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {kettleSpecs.map((kettle) => (
                  <Link key={kettle.id} to={`/products/kettles/${kettle.id}`}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="relative">
                          <img 
                            src={kettle.image} 
                            alt={kettle.name} 
                            className="w-full h-48 object-contain mb-4"
                          />
                          <div className="absolute top-2 right-2 flex flex-col gap-2">
                            {kettle.isBestseller && (
                              <Badge className="bg-red-500">
                                <Award className="w-3 h-3 mr-1" /> Bestseller
                              </Badge>
                            )}
                            {kettle.isNewArrival && (
                              <Badge className="bg-blue-500">
                                <TrendingUp className="w-3 h-3 mr-1" /> New
                              </Badge>
                            )}
                          </div>
                        </div>
                        <CardTitle className="text-lg">{kettle.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {renderRatingStars(kettle.rating)}
                          <div className="space-y-1">
                            {kettle.features.map((feature, idx) => (
                              <p key={idx} className="text-sm text-gray-700">• {feature}</p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Products;
