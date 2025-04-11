
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlay) {
        const nextButton = document.querySelector('.embla__button--next') as HTMLButtonElement;
        if (nextButton) nextButton.click();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <section className="relative animate-fade-in">
      <Carousel 
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <CarouselContent>
          {/* Slide 1 */}
          <CarouselItem className="w-full">
            <div className="relative h-[600px] md:h-[700px] flex items-center">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
                <img 
                  src="public/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png" 
                  alt="Modern Kitchen" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="container mx-auto px-4 relative z-20">
                <div className="max-w-2xl text-white">
                  <span className="inline-block px-4 py-1 mb-5 bg-brand-gold text-white text-sm font-semibold rounded-full animate-scale-in">Premium Quality</span>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-enter">
                    Modern Kitchen Appliances for Your Home
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-gray-100">
                    Discover our range of high-quality gas stoves and kettles designed for efficiency, durability, and style.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="bg-brand-gold hover:bg-amber-600 text-white animate-scale-in text-lg px-8 py-6">
                      <Link to="/products">Explore Products</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-brand-green animate-scale-in text-lg px-8 py-6" style={{animationDelay: "150ms"}}>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          
          {/* Slide 2 */}
          <CarouselItem className="w-full">
            <div className="relative h-[600px] md:h-[700px] flex items-center">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
                <img 
                  src="public/lovable-uploads/2e31a859-9ba3-46b9-8eae-8b9580dfe7bb.png" 
                  alt="Factory" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="container mx-auto px-4 relative z-20">
                <div className="max-w-2xl text-white">
                  <span className="inline-block px-4 py-1 mb-5 bg-brand-green text-white text-sm font-semibold rounded-full animate-scale-in">Indian Craftsmanship</span>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-enter">
                    India's Leading Kitchen Appliance Manufacturer
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-gray-100">
                    With state-of-the-art manufacturing facilities and a commitment to quality, we deliver excellence in every product.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="bg-brand-green hover:bg-green-800 text-white animate-scale-in text-lg px-8 py-6">
                      <Link to="/about">Our Story</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-brand-green animate-scale-in text-lg px-8 py-6" style={{animationDelay: "150ms"}}>
                      <Link to="/products">View Products</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          
          {/* Slide 3 */}
          <CarouselItem className="w-full">
            <div className="relative h-[600px] md:h-[700px] flex items-center">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
                <img 
                  src="public/lovable-uploads/c621b6ac-0c4d-45d4-9f0a-11a9e8ca11d6.png" 
                  alt="Electric Kettle" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="container mx-auto px-4 relative z-20">
                <div className="max-w-2xl text-white">
                  <span className="inline-block px-4 py-1 mb-5 bg-brand-gold text-white text-sm font-semibold rounded-full animate-scale-in">New Arrivals</span>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-enter">
                    Innovative Electric Kettles for Modern Kitchens
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-gray-100">
                    Experience the perfect blend of technology and design with our latest collection of electric kettles.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="bg-brand-gold hover:bg-amber-600 text-white animate-scale-in text-lg px-8 py-6">
                      <Link to="/products">Shop Now</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-brand-green animate-scale-in text-lg px-8 py-6" style={{animationDelay: "150ms"}}>
                      <Link to="/contact">Get a Quote</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 z-30">
          <CarouselPrevious className="relative translate-y-0 left-auto" />
          <CarouselNext className="relative translate-y-0 right-auto" />
        </div>
      </Carousel>
    </section>
  );
};

export default HeroCarousel;
