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
import { Star, ArrowLeft, Award, TrendingUp } from 'lucide-react';
import { gasStoveSpecs, kettleSpecs } from '@/data/products';

const renderRatingStars = (rating: number) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-5 w-5 ${i < Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
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
  const [activeImage, setActiveImage] = useState(0);
  
  // Custom angle images for products
  const getAngleImages = (productId: string) => {
    if (productId === 'k2') {
      return [
        { id: 1, src: '/lovable-uploads/dbe6c0bd-6680-4113-afd3-3f9bdf865d44.png', alt: 'Main view' },
        { id: 2, src: '/lovable-uploads/b0eccf25-8691-44cc-b402-bf6655ed2289.png', alt: 'Front view' },
        { id: 3, src: '/lovable-uploads/a8e97c38-4cc0-4b0e-9b21-eada3898da34.png', alt: 'Side view with Cool Touch Handle' },
        { id: 4, src: '/lovable-uploads/71c144d8-1b17-4de4-b700-f2d45c3f6aeb.png', alt: 'Top view (Open)' },
        { id: 5, src: '/lovable-uploads/c994ea06-a5ce-4656-8f36-6d758469ede1.png', alt: 'Feature view' }
      ];
    } else if (productId === 'k1') {
      // For 1.5L kettle, let's use the new main image and create placeholder angle views
      return [
        { id: 1, src: '/lovable-uploads/75f67137-e973-437d-a82e-245ecd693545.png', alt: 'Main view' },
        { id: 2, src: '/lovable-uploads/75f67137-e973-437d-a82e-245ecd693545.png', alt: 'Front view' },
        { id: 3, src: '/lovable-uploads/75f67137-e973-437d-a82e-245ecd693545.png', alt: 'Side view' },
        { id: 4, src: '/lovable-uploads/75f67137-e973-437d-a82e-245ecd693545.png', alt: 'Top view' }
      ];
    } else if (productId === '4b2') {
      // For 4 Burner gas stove, use the updated main image and keep the other angle images
      return [
        { id: 1, src: '/lovable-uploads/ff720193-1ed3-4659-9808-85f7f7f44377.png', alt: 'Main view' },
        { id: 2, src: '/lovable-uploads/34f68b29-d11c-48e7-bd9a-2b0894038877.png', alt: 'Front angle view' },
        { id: 3, src: '/lovable-uploads/8bc1dff9-398f-4710-bb76-c173fb6145de.png', alt: 'Side angle view' },
        { id: 4, src: '/lovable-uploads/41e058a6-71ad-4a1a-a80d-ead473b7c775.png', alt: 'Burner close-up' },
        { id: 5, src: '/lovable-uploads/83f8ab00-2e61-4278-85c5-6dbf3b146988.png', alt: 'Control knob' }
      ];
    }
    
    return [
      { id: 1, alt: 'Front view' },
      { id: 2, alt: 'Side view' },
      { id: 3, alt: 'Top view' },
      { id: 4, alt: 'Detail view' }
    ];
  };

  useEffect(() => {
    let foundProduct = null;

    if (category === 'gas-stoves') {
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

  const handleThumbnailClick = (index: number) => {
    setActiveImage(index);
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

  const angleImages = getAngleImages(productId || '');
  
  // Create image array
  const productImages = (productId === 'k2' || productId === 'k1' || productId === '4b2') ? 
    angleImages.map(angle => ({
      src: angle.src || product.image,
      alt: angle.alt
    })) : 
    [
      { src: product.image, alt: product.name },
      ...angleImages.map(angle => ({
        src: product.image,
        alt: `${product.name} - ${angle.alt}`
      }))
    ];

  return (
    <div className="bg-gradient-to-b from-white to-amber-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <Button 
          onClick={goBack} 
          variant="ghost" 
          className="mb-8 hover:bg-green-100 flex items-center gap-2 text-lg"
        >
          <ArrowLeft className="h-5 w-5" /> Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-in">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="relative">
              <img 
                src={productImages[activeImage].src} 
                alt={productImages[activeImage].alt} 
                className={`w-full object-contain mb-8 ${productId === 'k1' ? 'max-h-[500px]' : 'max-h-[600px]'}`}
              />
              <div className="absolute bottom-6 right-6 bg-black/60 text-white px-4 py-2 rounded-full text-base">
                {productImages[activeImage].alt}
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mt-8">
              {productImages.map((image, idx) => (
                <button 
                  key={idx} 
                  className={`p-2 rounded-md hover:opacity-80 ${activeImage === idx ? 'border-3 border-brand-green' : 'border-2 border-gray-200'}`}
                  onClick={() => handleThumbnailClick(idx)}
                >
                  {image.src ? (
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="h-24 w-24 object-cover" // Increased thumbnail size from h-20 w-20 to h-24 w-24
                    />
                  ) : (
                    <div className="h-24 w-24 flex items-center justify-center"> {/* Increased size here as well */}
                      <div className="text-sm text-center text-gray-600">
                        {image.alt.replace(`${product.name} - `, '')}
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col gap-8">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
                  {product.isBestseller && (
                    <Badge className="bg-red-500 text-base px-3 py-1">
                      <Award className="w-4 h-4 mr-1" /> Bestseller
                    </Badge>
                  )}
                  {product.isNewArrival && (
                    <Badge className="bg-blue-500 text-base px-3 py-1">
                      <TrendingUp className="w-4 h-4 mr-1" /> New Arrival
                    </Badge>
                  )}
                </div>
                <div className="mb-6">{renderRatingStars(product.rating)}</div>
              </div>

              {category === 'gas-stoves' && product.size && (
                <div className="bg-green-50 p-8 rounded-lg"> {/* Increased padding from p-6 to p-8 */}
                  <h3 className="font-semibold text-2xl mb-4">Glass Size:</h3> {/* Increased text size from xl to 2xl */}
                  <p className="text-gray-700 text-xl">{product.size}</p> {/* Increased text size from lg to xl */}
                </div>
              )}

              {category === 'kettles' && (
                <div className="bg-amber-50 p-8 rounded-lg mb-6"> {/* Increased padding from p-6 to p-8 */}
                  <h3 className="font-semibold text-2xl mb-4">Key Features:</h3> {/* Increased text size from xl to 2xl */}
                  <ul className="list-disc pl-5 space-y-4 text-xl"> {/* Increased spacing and text size */}
                    {productId === 'k1' && (
                      <>
                        <li>Food grade stainless steel body</li>
                        <li>Auto shut-off functionality</li>
                        <li>Boil-dry protection</li>
                        <li>Ergonomic handle design</li>
                        <li>1.5L Capacity</li>
                      </>
                    )}
                    {productId === 'k2' && (
                      <>
                        <li>Food grade stainless steel body</li>
                        <li>Spill proof design</li>
                        <li>Cool touch handles for safety</li>
                        <li>Power efficient operation</li>
                        <li>Can boil up to 6 cups of water</li>
                        <li>1.8L Capacity</li>
                      </>
                    )}
                    {productId === 'k3' && (
                      <>
                        <li>Variable temperature control</li>
                        <li>Keep warm function</li>
                        <li>Digital temperature display</li>
                        <li>Premium mirror and matt finish</li>
                        <li>Multiple preset modes</li>
                      </>
                    )}
                  </ul>
                </div>
              )}

              <div className="bg-blue-50 p-8 rounded-lg"> {/* Increased padding from p-6 to p-8 */}
                <h3 className="font-semibold text-2xl mb-4">Specifications:</h3> {/* Increased text size from xl to 2xl */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xl"> {/* Increased gap and text size */}
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

              <div className="mt-8">
                <Button
                  onClick={handleRequestQuote}
                  className="w-full py-10 text-2xl bg-brand-green hover:bg-green-800 transition-transform hover:scale-105" 
                  // Increased padding and font size
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
