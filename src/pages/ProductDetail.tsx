import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Star, ArrowLeft, Award, TrendingUp, CheckCircle } from 'lucide-react';
import { gasStoveSpecs, kettleSpecs } from '@/data/products';

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

const ProductDetail = () => {
  const { productId, category } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // Dummy angle images (in a real app, these would come from the backend)
  const angleImages = [
    { id: 1, alt: 'Front view' },
    { id: 2, alt: 'Side view' },
    { id: 3, alt: 'Top view' },
    { id: 4, alt: 'Detail view' }
  ];

  useEffect(() => {
    // Find the product based on category and id
    let foundProduct = null;

    if (category === 'gas-stoves') {
      // Check in all gas stove categories
      ['twoBurner', 'threeBurner', 'fourBurner'].forEach(burnerType => {
        const found = gasStoveSpecs[burnerType]?.find(stove => stove.id === productId);
        if (found) foundProduct = found;
      });
    } else if (category === 'kettles') {
      foundProduct = kettleSpecs.find(kettle => kettle.id === productId);
    }

    if (foundProduct) {
      setProduct(foundProduct);
    }
    setLoading(false);
  }, [productId, category]);

  const handleRequestQuote = () => {
    navigate('/contact', { state: { fromProduct: true, productName: product?.name } });
  };

  const goBack = () => {
    navigate('/products');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-brand-green border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4 text-red-600">Product Not Found</h1>
        <p className="mb-8 text-lg">Sorry, we couldn't find the product you're looking for.</p>
        <Button onClick={goBack} variant="outline" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-white to-amber-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Back button */}
        <Button 
          onClick={goBack} 
          variant="ghost" 
          className="mb-6 hover:bg-green-100 flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
          {/* Product Images Carousel */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <Carousel className="w-full max-w-lg mx-auto">
              <CarouselContent>
                {/* Main product image */}
                <CarouselItem key="main">
                  <div className="flex items-center justify-center h-80 p-2">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="max-h-full object-contain"
                    />
                  </div>
                </CarouselItem>
                
                {/* Additional angle images - using the main image as placeholder */}
                {angleImages.map((angle) => (
                  <CarouselItem key={angle.id}>
                    <div className="flex items-center justify-center h-80 p-2">
                      <img 
                        src={product.image} 
                        alt={`${product.name} - ${angle.alt}`} 
                        className="max-h-full object-contain"
                      />
                      <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                        {angle.alt}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-white/80" />
              <CarouselNext className="right-2 bg-white/80" />
            </Carousel>
            
            {/* Thumbnail navigation */}
            <div className="flex justify-center gap-3 mt-6">
              {/* Main image thumbnail */}
              <button className="border-2 border-brand-green p-1 rounded-md hover:opacity-80">
                <img 
                  src={product.image} 
                  alt="Main view" 
                  className="h-16 w-16 object-cover" 
                />
              </button>
              
              {/* Other angle thumbnails */}
              {angleImages.map((angle) => (
                <button key={angle.id} className="border-2 border-gray-200 p-1 rounded-md hover:border-brand-green">
                  <img 
                    src={product.image}
                    alt={angle.alt} 
                    className="h-16 w-16 object-cover opacity-80" 
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
                  {product.isBestseller && (
                    <Badge className="bg-red-500">
                      <Award className="w-3 h-3 mr-1" /> Bestseller
                    </Badge>
                  )}
                  {product.isNewArrival && (
                    <Badge className="bg-blue-500">
                      <TrendingUp className="w-3 h-3 mr-1" /> New Arrival
                    </Badge>
                  )}
                </div>
                <div className="mb-4">{renderRatingStars(product.rating)}</div>
              </div>

              {/* Size for Gas Stoves */}
              {category === 'gas-stoves' && product.size && (
                <div className="bg-green-50 p-4 rounded-md">
                  <h3 className="font-semibold text-lg mb-2">Glass Size:</h3>
                  <p className="text-gray-700">{product.size}</p>
                </div>
              )}

              {/* Features */}
              <div className="bg-amber-50 p-4 rounded-md">
                <h3 className="font-semibold text-lg mb-3">Features:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="bg-blue-50 p-4 rounded-md">
                <h3 className="font-semibold text-lg mb-3">Specifications:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category === 'gas-stoves' && (
                    <>
                      <div>
                        <p className="font-medium">Type:</p>
                        <p className="text-gray-700">{product.name.includes('PC') ? 'Powder Coated' : 'Stainless Steel'}</p>
                      </div>
                      <div>
                        <p className="font-medium">Frame Style:</p>
                        <p className="text-gray-700">
                          {product.name.includes('Diamond Cut') ? 'Diamond Cut' : 'Straight Frame'}
                        </p>
                      </div>
                    </>
                  )}
                  {category === 'kettles' && (
                    <>
                      <div>
                        <p className="font-medium">Finish:</p>
                        <p className="text-gray-700">Mirror and Matt Finish</p>
                      </div>
                      <div>
                        <p className="font-medium">Power:</p>
                        <p className="text-gray-700">1500W</p>
                      </div>
                    </>
                  )}
                  <div>
                    <p className="font-medium">Warranty:</p>
                    <p className="text-gray-700">1 Year</p>
                  </div>
                  <div>
                    <p className="font-medium">Material:</p>
                    <p className="text-gray-700">
                      {category === 'gas-stoves' 
                        ? 'Toughened Glass with Steel Frame' 
                        : 'High Quality Stainless Steel'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="mt-6">
                <Button
                  onClick={handleRequestQuote}
                  className="w-full py-6 text-lg bg-brand-green hover:bg-green-800 transition-transform hover:scale-105"
                >
                  Request Quote for {product.name}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
