
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const HeroCarousel = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  
  const plugin = Autoplay({ delay: 5000, stopOnInteraction: false });

  return (
    <section className="relative animate-fade-in">
      <Carousel 
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[plugin]}
        className="w-full hero-carousel"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <CarouselContent>
          {/* Slide 1 - Gas Stove */}
          <CarouselItem className="w-full">
            <div className="relative h-[600px] md:h-[700px] flex items-center">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
                <img 
                  src="/lovable-uploads/3ff0931a-7ab1-4e8b-b47f-f8934582a7ae.png" 
                  alt="Modern Gas Stove" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="container mx-auto px-4 relative z-20">
                <div className="max-w-2xl text-white">
                  <span className="inline-block px-4 py-1 mb-5 bg-brand-gold text-white text-sm font-semibold rounded-full animate-scale-in">Premium Quality</span>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-enter">
                    Modern Kitchen Gas Stoves
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-gray-100">
                    Experience the perfect blend of efficiency and style with our premium gas stoves.
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
          
          {/* Slide 2 - Electric Kettles */}
          <CarouselItem className="w-full">
            <div className="relative h-[600px] md:h-[700px] flex items-center">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
                <img 
                  src="/lovable-uploads/4143d39e-bb59-481c-b1b6-3566d5d46205.png" 
                  alt="Electric Kettles" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="container mx-auto px-4 relative z-20">
                <div className="max-w-2xl text-white">
                  <span className="inline-block px-4 py-1 mb-5 bg-brand-green text-white text-sm font-semibold rounded-full animate-scale-in">New Collection</span>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-enter">
                    Advanced Electric Kettles
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-gray-100">
                    Discover our range of electric kettles with smart features for your modern kitchen needs.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="bg-brand-green hover:bg-green-800 text-white animate-scale-in text-lg px-8 py-6">
                      <Link to="/products?tab=kettles">Shop Kettles</Link>
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
