
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const OEMClients = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlay) {
        const nextButton = document.querySelector('.client-carousel .embla__button--next') as HTMLButtonElement;
        if (nextButton) nextButton.click();
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [autoPlay]);

  const clients = [
    { name: "Sowbaghya", logo: "public/lovable-uploads/9234820b-7143-420b-8fee-f1729c5d6646.png" },
    { name: "Premier", logo: "public/lovable-uploads/365208f2-ccbc-4d31-9233-da5887f389b8.png" },
    { name: "Thangam", logo: "public/lovable-uploads/500b1e70-f84a-4ac7-b409-5df61ce5823d.png" },
    { name: "Butterfly", logo: "public/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png" },
    { name: "Prestige", logo: "public/lovable-uploads/2e31a859-9ba3-46b9-8eae-8b9580dfe7bb.png" }
  ];

  return (
    <section className="py-16 bg-gray-50 animate-fade-in" style={{animationDelay: "900ms"}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Our OEM Clients</h2>
          <p className="text-gray-600">Trusted manufacturing partners in the kitchen appliance industry</p>
          <div className="w-20 h-1 bg-brand-green mx-auto mt-4"></div>
        </div>
        
        <div className="mt-8 relative client-carousel">
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
              {clients.map((client, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                  <div className="p-1">
                    <div className="flex flex-col justify-center items-center p-6 h-32 bg-white rounded-lg shadow hover:shadow-lg transition-all hover:scale-105 duration-300">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="h-full object-contain"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OEMClients;
