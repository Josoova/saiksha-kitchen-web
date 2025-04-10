
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
    }, 3000);
    
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <section className="relative bg-gradient-to-r from-brand-green to-green-900 text-white py-20 animate-fade-in">
      <div className="container mx-auto px-4">
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
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-enter">Premium Kitchen Appliances for Modern Homes</h1>
                  <p className="text-lg mb-6">
                    Discover our range of high-quality gas stoves and kettles designed for efficiency, durability, and style.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="bg-brand-gold hover:bg-amber-600 text-white animate-scale-in">
                      <Link to="/products">Browse Products</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-brand-green animate-scale-in" style={{animationDelay: "150ms"}}>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2 hover-scale">
                  <img 
                    src="public/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png" 
                    alt="Modern Kitchen with Gas Stove" 
                    className="rounded-lg shadow-xl transition-transform hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </CarouselItem>
            
            {/* Slide 2 */}
            <CarouselItem className="w-full">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-enter">India's Leading Kitchen Appliance Manufacturer</h1>
                  <p className="text-lg mb-6">
                    With state-of-the-art manufacturing facilities and a commitment to quality, we deliver excellence in every product.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="bg-brand-gold hover:bg-amber-600 text-white animate-scale-in">
                      <Link to="/about">Our Story</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-brand-green animate-scale-in" style={{animationDelay: "150ms"}}>
                      <Link to="/products">View Products</Link>
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2 hover-scale">
                  <img 
                    src="public/lovable-uploads/c621b6ac-0c4d-45d4-9f0a-11a9e8ca11d6.png" 
                    alt="Electric Kettle" 
                    className="rounded-lg shadow-xl transition-transform hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center gap-2">
            <CarouselPrevious className="relative translate-y-0 left-auto" />
            <CarouselNext className="relative translate-y-0 right-auto" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default HeroCarousel;
