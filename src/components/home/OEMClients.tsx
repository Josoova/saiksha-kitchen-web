
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Building, CheckCircle } from 'lucide-react';

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
    <section className="py-20 relative animate-fade-in" style={{animationDelay: "850ms"}}>
      {/* Background graphic elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Building className="h-8 w-8 text-brand-green" />
            <h2 className="text-3xl font-bold">Our OEM Clients</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">Trusted manufacturing partner for leading kitchen appliance brands in India. We pride ourselves on maintaining the highest standards of quality and reliability.</p>
          <div className="w-20 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold mb-4 text-brand-green">Manufacturing Excellence</h3>
              <p className="text-gray-700 mb-6">
                We partner with renowned brands to manufacture kitchen appliances that meet their exacting standards. Our OEM services ensure consistent quality, timely delivery, and cost-effective solutions.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green" />
                  <span className="text-gray-700">ISO 9001 Certified Manufacturing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green" />
                  <span className="text-gray-700">Customized Production Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green" />
                  <span className="text-gray-700">Rigorous Quality Control</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 mt-8 relative client-carousel">
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
                    <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3 p-2">
                      <div className="flex flex-col justify-center items-center p-8 h-40 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all hover:scale-105 duration-300 border border-gray-100">
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="h-full max-h-24 object-contain"
                        />
                        <p className="mt-4 font-medium text-gray-700">{client.name}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OEMClients;
