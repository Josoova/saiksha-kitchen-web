
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Award, TrendingUp, ChefHat, Zap } from 'lucide-react';
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

const Products = () => {
  const [activeTab, setActiveTab] = useState('gas-stoves');

  return (
    <div className="bg-gradient-to-b from-white to-amber-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Title Slide */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="p-3 bg-brand-green/10 rounded-full">
              <ChefHat className="h-8 w-8 text-brand-green" />
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-brand-green to-brand-gold rounded-full"></div>
            <div className="p-3 bg-brand-gold/10 rounded-full">
              <Zap className="h-8 w-8 text-brand-gold" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-brand-green to-brand-gold bg-clip-text text-transparent">
            Our Premium Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our exceptional collection of kitchen appliances, meticulously crafted to transform your cooking experience with unmatched quality and innovative design
          </p>
          <div className="mt-8 flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-green">50+</div>
              <div className="text-sm text-gray-600">Product Models</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-gold">25+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-green">1000+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
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
                {gasStoveSpecs.twoBurner.map((stove) => (
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
